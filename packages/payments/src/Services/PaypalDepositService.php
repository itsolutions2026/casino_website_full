<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaypalDepositService.php
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

class PaypalDepositService extends DepositService implements CanReceiveRedirect
{
    protected function makeApi()
    {
        $omnipay = Omnipay::create('PayPal_Express');
        $omnipay->initialize([
            'username'  => config('payments.paypal.user'),
            'password'  => config('payments.paypal.password'),
            'signature' => config('payments.paypal.signature'),
            'testMode'  => config('payments.paypal.test_mode'),
        ]);
        return $omnipay;
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $params = [
            'amount'        => $this->calculatePaymentAmount($this->data->amount),
            'currency'      => $this->getMethodCurrency(),
            'description'   => $this->getDescription(),
            'returnUrl'     => $this->getReturnUrl(),
            'cancelUrl'     => $this->getCancelUrl(),
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
                'external_id' => $response->getTransactionReference(),
                'response' => [$response->getData()],
            ]);
        }

        throw new \Exception($response->getMessage());
    }

    public function complete(): RedirectResponse
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $deposit = Deposit::where('external_id', $this->data->token)
            ->created()
            ->firstOrFail();

        $this->data->merge([
            'amount' => $deposit->payment_amount,
            'currency' => $deposit->payment_currency
        ]);

        $response = $this->api->completePurchase($this->data->all())->send();

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
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $deposit = Deposit::where('external_id', $this->data->token)->created()->firstOrFail();

        DepositRepository::cancel($deposit);

        return redirect('user/account/deposits?status=error');
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }
}
