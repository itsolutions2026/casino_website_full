<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaytmDepositService.php
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
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;
use Packages\Payments\Services\Api\PaytmApi;

class PaytmDepositService extends DepositService
{
    protected function makeApi()
    {
        return new PaytmApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $paymentAmount = $this->calculatePaymentAmount($this->data->amount);
        $externalId = Utils::generateRandomString(10);

        $token = $this->api->createTransaction(
            $paymentAmount,
            $this->getMethodCurrency(),
            $this->data->user()->id,
            $this->data->user()->email,
            $externalId,
            $this->getWebhookUrl()
        );

        if (!$token) {
            throw new Exception($this->api->getErrorMessage());
        }

        $this->setRedirectUrl('user.account.deposits.complete');

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $paymentAmount,
            'payment_currency'  => $this->getMethodCurrency(),
            'external_id'       => $externalId,
            'response'          => [compact('token')]
        ]);
    }

    public function httpSuccess(): Response
    {
        return response()->make('YES', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }
}
