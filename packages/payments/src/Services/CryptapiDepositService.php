<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CryptapiDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Omnipay\Omnipay;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;

class CryptapiDepositService extends DepositService implements ShouldValidateAmount, CanReceiveWebhook
{
    protected function makeApi()
    {
        $params = $this->getMethod()->payment_method_parameters;
        $data = [];
        $data['currency'] = $this->getMethodCurrency();
        $data['coin'] = $this->getCoin();
        $data['token'] = $this->getToken();
        if (isset($params->address) && $params->address) $data['address'] = $params->address;
        if (isset($params->confirmations) && $params->confirmations) $data['confirmations'] = $params->confirmations;
        if (isset($params->email) && $params->email) $data['email'] = $params->email;
        if (isset($params->priority) && $params->priority) $data['priority'] = $params->priority;

        $omnipay = Omnipay::create('Cryptapi');
        $omnipay->initialize($data);

        return $omnipay;
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $amount = $this->calculatePaymentAmount($this->data->amount);

        if ($this->getCoin() != $this->getMethodCurrency()) {
            $infoData = $this->api->info()->send()->getData();
            if (isset($infoData['prices'][$this->getMethodCurrency()])) {
                $amount = $amount / $infoData['prices'][$this->getMethodCurrency()];
            } else {
                throw new Exception('Unknown currency ' . $this->getMethodCurrency());
            }
        }

        $externalId = Utils::generateRandomString(10);
        $response = $this->api->purchase([
                'amount' => $amount,
                'callback' => $this->getWebhookUrl() . '?ssid=' . $externalId . '&sig=' . hash_hmac('sha256', $externalId, config('payments.cryptapi.secret')),
                'transactionId' => $externalId
            ])
            ->send();

        if (!$response->isSuccessful() && $response->isRedirect()) {
            $this->setRedirectUrl('user.account.deposits.complete');

            $data = $response->getData();

            return DepositRepository::create([
                'account' => $this->data->user()->account,
                'method' => $this->method,
                'amount' => $this->data->amount,
                'payment_amount' => $response->getRequest()->getAmount(),
                'payment_currency' => $response->getRequest()->getCoin(),
                'external_id' => $externalId,
                'parameters' => [
                    'address' => $data->address_in,
                    'payment_url' => $data->url,
                    'qr_url' => $data->qr,
                ],
                'response' => [$response->getData()],
            ]);
        }

        throw new \Exception($response->getMessage());
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request) {
            return FALSE;
        }

        $expectedSignature = hash_hmac('sha256', $this->data->ssid, config('payments.cryptapi.secret'));
        if ($this->data->sig != $expectedSignature) {
            Log::error(sprintf('Incorrect signature received: %s, Expected %s', $this->data->sig, $expectedSignature));
            return FALSE;
        }

        $deposit = Deposit::where('external_id', $this->data->ssid)
            ->created()
            ->firstOrFail();

        $deposit->update(['response' => array_merge($deposit->response, [$this->data->all()])]);

        $this->data->merge([
            'confirmations_required' => $this->getMethod()->payment_method_parameters->confirmations
        ]);
        $response = $this->api->completePurchase($this->data->all())->send();

        if ($response->isSuccessful()) {
            DepositRepository::complete($deposit);
        }

        return TRUE;
    }

    public function httpSuccess(): Response
    {
        return response()->make('*ok*', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function getToken(): ?string
    {
        $paymentMethod = $this->getPaymentGatewayMethod();
        $method = $this->getMethod();
        $params = $method->payment_method_parameters;
        if (isset($params->ticker) && $params->ticker) {
            return strtoupper(explode('_', $paymentMethod->code)[1]);
        } else {
            return null;
        }
    }

    public function getCoin(): ?string
    {
        $paymentMethod = $this->getPaymentGatewayMethod();
        $method = $this->getMethod();
        $params = $method->payment_method_parameters;
        if (isset($params->ticker) && $params->ticker) {
            return strtoupper($params->ticker);
        } else {
            return strtoupper(explode('_', $paymentMethod->code)[1]);
        }
    }

    public function fetchMinPaymentAmount(): float
    {
        $minAmount = 0;
        $response = $this->api->info()->send();

        if ($this->getCoin() == $this->getMethodCurrency()) {
            $minAmount = $response->getData()['minimum_transaction_coin'];
        } elseif (isset($response->getData()['prices'][$this->getMethodCurrency()])) {
            $minAmount = $response->getData()['minimum_transaction_coin'] * $response->getData()['prices'][$this->getMethodCurrency()];
        } else {
            if (isset($response->getData()['prices']) && !isset($response->getData()['prices'][$this->getMethodCurrency()])) {
                throw new Exception('No currency conversion rates available for this coin' . (isset($response->getData()['error']) ? ('(' . $response->getData()['error'] . ')') : ''));
            } else {
                throw new Exception('Unexpected cryptapi error' . (isset($response->getData()['error']) ? ('(' . $response->getData()['error'] . ')') : ''));
            }
        }

        return $minAmount;
    }
}
