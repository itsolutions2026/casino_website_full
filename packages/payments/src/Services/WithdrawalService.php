<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Api\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Models\WithdrawalMethod;
use Packages\Payments\Models\PaymentGateway;
use Packages\Payments\Models\PaymentGatewayMethod;

abstract class WithdrawalService
{
    
    protected $data;

    
    protected $redirectUrl;

    
    protected $method;

    
    protected $api;

    
    protected $withdrawal;

    protected function __construct(WithdrawalMethod $method, $data)
    {
        $this->method = $method;
        $this->data = $data;
        $this->api = $this->makeApi();
    }

    
    protected function getMethod(): WithdrawalMethod
    {
        return $this->method;
    }

    
    protected function getPaymentGatewayMethod(): PaymentGatewayMethod
    {
        return $this->method->paymentMethod;
    }

    
    public function getPaymentGateway(): PaymentGateway
    {
        return $this->getPaymentGatewayMethod()->gateway;
    }

    protected function getMethodRate(): float
    {
        return $this->getMethod()->rate;
    }

    public function getMethodCurrency(): string
    {
        return $this->getMethod()->currency;
    }

    protected function getDecimals(): int
    {
        return $this->getMethod()->decimal_places ?? 0;
    }

    protected function getWebhookUrl(): string
    {
        return route('payments.webhooks.withdrawals.process', ['withdrawalMethod' => $this->method]);
    }

    public function calculatePaymentAmount(int $amountInCredits): float
    {
        return round($amountInCredits / $this->getPaymentCurrencyRate(), $this->getDecimals());
    }

    public final static function make(WithdrawalMethod $method, $data): WithdrawalService
    {
        $gatewayCode = $method->paymentMethod->gateway->code ?? NULL;
        if (!$gatewayCode) {
            throw new \Exception(sprintf('Withdrawal method "%s" does not have a linked payment gateway.', $method->name));
        }

        $serviceClass = sprintf('Packages\\Payments\\Services\\%sWithdrawalService', Str::ucfirst($gatewayCode));

        
        return new $serviceClass($method, $data);
    }

    abstract protected function makeApi();

    abstract protected function getPaymentCurrencyRate(): float;

    abstract public function create(): Withdrawal;
}
