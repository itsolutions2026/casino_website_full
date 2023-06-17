<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SkrillDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Omnipay\Omnipay;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;


class SkrillDepositService extends DepositService implements CanReceiveRedirect, CanReceiveWebhook
{
    protected function makeApi()
    {
        $omnipay = Omnipay::create('Skrill');
        $omnipay->initialize([
            'email' => config('payments.skrill.account'),
            'secretWord' => config('payments.skrill.secret'),
        ]);
        return $omnipay;
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $externalId = Utils::generateRandomString(10);
        $lang = strtoupper(app()->getLocale());
        if (!in_array($lang, ['BG', 'JA', 'CS', 'NL', 'DA', 'PL', 'EL', 'PT', 'EN', 'RO', 'ES', 'RU', 'FI', 'SV', 'FR', 'TR', 'IT', 'ZH'])) {
            $lang = 'EN';
        }

        $params = [
            'amount'            => $this->calculatePaymentAmount($this->data->amount),
            'currency'          => $this->getMethodCurrency(),
            'details'           => ['item' => $this->getDescription()],
            'language'          => $lang,
            'paymentMethods'    => config('payments.skrill.methods'),
            'notifyUrl'         => $this->getWebhookUrl(),
            'returnUrl'         => $this->getReturnUrl(),
            'cancelUrl'         => $this->getCancelUrl() . '?transaction_id=' . $externalId,
            'transactionId'     => $externalId,
        ];

        $response = $this->api->purchase($params)->send();

        if (!$response->isSuccessful() && $response->isRedirect()) {
            $this->setRedirectUrl($response->getRedirectUrl());

            return DepositRepository::create([
                'account' => $this->data->user()->account,
                'method' => $this->method,
                'amount' => $this->data->amount,
                'payment_amount' => $response->getRequest()->getAmount(),
                'payment_currency' => $response->getRequest()->getCurrency(),
                'external_id' => $externalId,
                'response' => [$response->getData()],
            ]);
        }

        throw new \Exception($response->getMessage());
    }

    public function complete(): RedirectResponse
    {
        return redirect('user/account/deposits');
    }

    public function cancel(): RedirectResponse
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $deposit = Deposit::where('external_id', $this->data->transaction_id)->created()->firstOrFail();

        DepositRepository::cancel($deposit);

        return redirect('user/account/deposits');
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $deposit = Deposit::where('external_id', $this->data->transaction_id)
            ->firstOrFail();

        $response = $this->api->completePurchase($this->data->all())->send();

        $deposit->update(['response' => array_merge($deposit->response, [$response->getData()])]);

        if (!$response->isSuccessful() && !$response->isCancelled()) {
            return FALSE;
        
        
        
        
        } elseif ($response->isSuccessful() && $deposit->is_created && $this->data->status == 0) {
            tap($deposit, function ($deposit) { $deposit->is_pending = TRUE; })->save();
        
        } elseif ($response->isSuccessful() && ($deposit->is_created || $deposit->is_pending) && $this->data->status == 2) {
            DepositRepository::complete($deposit);
        
        
        
        
        
        
        
        
        
        
        
        
        } elseif ($response->isCancelled() && !$deposit->is_cancelled) {
            DepositRepository::cancel($deposit);
        }

        return TRUE;
    }

    public function httpSuccess(): Response
    {
        return response()->make('OK', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }
}
