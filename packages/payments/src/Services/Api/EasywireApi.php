<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EasywireApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use Illuminate\Support\Collection;

class EasywireApi extends Api
{
    const TYPE_CC = 'credit_card';
    const TYPE_EFT = 'eft';

    public function __construct()
    {
        if (!$this->getUser()|| !$this->getPassword()) {
            throw new \Exception('API parameters are not specified');
        }
    }

    protected function getBaseUrl(): string
    {
        return 'https://payments.easywire.co.za/api/v1/';
    }

    protected function getUser(): ?string
    {
        return config('payments.easywire.user');
    }

    protected function getPassword(): ?string
    {
        return config('payments.easywire.password');
    }

    
    protected function makeRequest(string $method, string $path, array $params = [])
    {
        return $this->request($method, $path, NULL, [
            'auth'          => [$this->getUser(), $this->getPassword()],
            'form_params'   => $params
        ]);
    }

    public function fetchPayment(string $id): Collection
    {
        return collect($this->makeRequest('GET', sprintf('gateway-transaction/%s', $id)));
    }

    public function fetchPayout(string $id): Collection
    {
        return collect($this->makeRequest('GET', sprintf('payout/%s', $id)));
    }

    public function createPayment(
        string $method,
        float $amount,
        string $currency,
        string $externalId,
        string $webhookUrl,
        string $successUrl,
        string $failureUrl
    ): Collection
    {
        throw_unless(in_array($method, [self::TYPE_CC, self::TYPE_EFT]), \Exception::class, sprintf('Payment method is not supported: %s', $method));

        $payment = $this->makeRequest('POST', 'payment-key', [
            'payment_type'          => $method == self::TYPE_CC ? self::TYPE_CC : NULL,
            'amount'                => $amount,
            'currency_code'         => $currency,
            'merchant_reference'    => $externalId,
            'notify_url'            => $webhookUrl,
            'success_url'           => $successUrl,
            'error_url'             => $failureUrl,
            'cancel_url'            => $failureUrl,
        ]);

        return collect([
            'key'           => $payment->key ?? NULL,
            'redirect_url'  => $payment->url ?? NULL,
        ]);
    }

    
    public function createPayout(float $amount, string $reference, string $bank, int $branch, string $account, string $userName): Collection
    {
        return collect($this->makeRequest('POST', 'payout/queue', [
            'transaction' => [
                'amount'            => $amount,
                'reference'         => $reference,
                'bank'              => $bank,
                'branch'            => $branch,
                'account'           => $account,
                'customer_name'     => $userName,
            ]
        ]));
    }
}
