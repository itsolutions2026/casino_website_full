<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StripeDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Omnipay\Omnipay;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;


class StripeDepositService extends DepositService implements CanReceiveRedirect
{
    protected function makeApi()
    {
        $omnipay = Omnipay::create('Stripe_PaymentIntents');
        $omnipay->initialize(['apiKey' => config('payments.stripe.secret_key')]);
        return $omnipay;
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $params = [
            'amount'            => $this->calculatePaymentAmount($this->data->amount),
            'currency'          => $this->getMethodCurrency(),
            'paymentMethod'     => $this->data->parameters['payment_method_id'],
            'description'       => $this->getDescription(),
            'returnUrl'         => $this->getReturnUrl(),
            'cancelUrl'         => $this->getCancelUrl(),
            'confirm'           => TRUE,
        ];

        $response = $this->api->purchase($params)->send();

        if ($response->isSuccessful() || $response->isRedirect()) {
            if ($response->isRedirect()) {
                $this->setRedirectUrl($response->getRedirectUrl());
            }

            $deposit = DepositRepository::create([
                'account' => $this->data->user()->account,
                'method' => $this->method,
                'amount' => $this->data->amount,
                'payment_amount' => $response->getRequest()->getAmount(),
                'payment_currency' => $response->getRequest()->getCurrency(),
                'external_id' => $response->getPaymentIntentReference(),
                'response' => [$response->getData()],
                'status' => $response->isSuccessful() ? Deposit::STATUS_COMPLETED : Deposit::STATUS_CREATED,
            ]);

            
            if ($response->isSuccessful()) {
                DepositRepository::complete($deposit);
            }

            return $deposit;
        }

        throw new \Exception($response->getMessage());
    }

    public function complete(): RedirectResponse
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $deposit = Deposit::where('external_id', $this->data->payment_intent)
            ->created()
            ->firstOrFail();

        $response = $this->api->confirm(['paymentIntentReference' => $this->data->payment_intent])->send();

        $deposit->update(['response' => array_merge($deposit->response, [$response->getData()])]);

        
        if ($response->isSuccessful()) {
            DepositRepository::complete($deposit);
            return redirect('user/account/deposits?status=complete');
        
        } else {
            DepositRepository::cancel($deposit);
            return redirect('user/account/deposits?status=error');
        }
    }

    public function cancel(): RedirectResponse
    {
        return $this->complete();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }
}
