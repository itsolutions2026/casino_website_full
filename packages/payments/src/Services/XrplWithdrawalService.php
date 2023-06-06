<?php


namespace Packages\Payments\Services;

use Packages\Payments\Services\Api\XrplApi;


class XrplWithdrawalService extends CryptoWithdrawalService
{
    protected function makeApi()
    {
        return new XrplApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return 'XRP';
    }
}