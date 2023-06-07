<?php


namespace Packages\Payments\Services;

use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Services\Api\XrplApi;


class XrplWithdrawalService extends CryptoWithdrawalService implements CanSendTransaction
{
    protected function makeApi()
    {
        return new XrplApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return 'XRP';
    }
    public function isToken()
    {
        return false;
    }

    public function send(): void
    {
        // TODO: Implement send() method.

        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $transactionId = $this->api->tx(
            $this->getMethod()->payment_method_parameters->primary_key,
            $withdrawal->parameters->address,
            $withdrawal->payment_amount,
            false
        );

    }
}