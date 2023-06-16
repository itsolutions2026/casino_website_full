<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Api\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Models\DepositMethod;
use Packages\Payments\Models\PaymentGateway;
use Packages\Payments\Models\PaymentGatewayMethod;

abstract class DepositService
{
    
    protected $data;

    
    protected $redirectUrl;

    
    protected $method;

    
    protected $api;

    
    protected $deposit;

    protected function __construct(DepositMethod $method, $data)
    {
        $this->method = $method;
        $this->data = $data;
        $this->api = $this->makeApi();
    }

    
    protected function getMethod(): DepositMethod
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

    protected function getReturnUrl(): string
    {
        return route('payments.webhooks.deposits.complete', ['depositMethod' => $this->method]);
    }

    protected function getCancelUrl(): string
    {
        return route('payments.webhooks.deposits.cancel', ['depositMethod' => $this->method]);
    }

    protected function getWebhookUrl(): string
    {
        return route('payments.webhooks.deposits.process', ['depositMethod' => $this->method]);
    }

    public function calculatePaymentAmount(int $amountInCredits): float
    {
        return round($amountInCredits / $this->getPaymentCurrencyRate(), $this->getDecimals());
    }

    protected function getDescription(): string
    {
        return __('Credits purchase');
    }

    public function getRedirectUrl(): ?string
    {
        return $this->redirectUrl;
    }

    protected function setRedirectUrl(string $redirectUrl): DepositService
    {
        $this->redirectUrl = $redirectUrl;

        return $this;
    }

    public final static function make(DepositMethod $method, $data): DepositService
    {
        $gatewayCode = $method->paymentMethod->gateway->code ?? NULL;
        if (!$gatewayCode) {
            throw new \Exception(sprintf('Deposit method "%s" does not have a linked payment gateway.', $method->name));
        }

        $serviceClass = sprintf('Packages\\Payments\\Services\\%sDepositService', Str::ucfirst($gatewayCode));

        
        return new $serviceClass($method, $data);
    }

    abstract protected function makeApi();

    abstract protected function getPaymentCurrencyRate(): float;

    abstract public function create(): Deposit;
}
