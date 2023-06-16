<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   FreekassaApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class FreekassaApi extends Api
{
    const CMD_GET_SHOPS = 'shops';
    const CMD_GET_BALANCES = 'balance';
    const CMD_GET_DEPOSIT_METHODS = 'currencies';
    const CMD_GET_WITHDRAWAL_METHODS = 'withdrawals/currencies';
    const CMD_CREATE_WITHDRAWAL = 'withdrawals/create';

    const STATUS_CREATED = 0;
    const STATUS_PAID = 1;
    const STATUS_FAILED = 8;
    const STATUS_CANCELLED = 9;

    const SUCCESS = 'success';

    protected $errorMessage;

    public function __construct()
    {
        if (!$this->getMerchantId() || !$this->getApiKey() || !$this->getSecret() || !$this->getSecret2()) {
            throw new \Exception('API parameters are not specified');
        }
    }

    protected function getBaseUrl(): string
    {
        return 'https://api.freekassa.ru/v1/';
    }

    protected function getMerchantId(): ?string
    {
        return config('payments.freekassa.merchant_id');
    }

    protected function getApiKey(): ?string
    {
        return config('payments.freekassa.api_key');
    }

    protected function getSecret(): ?string
    {
        return config('payments.freekassa.secret');
    }

    protected function getSecret2(): ?string
    {
        return config('payments.freekassa.secret2');
    }

    public function getErrorMessage(): ?string
    {
        return $this->errorMessage;
    }

    protected function makeParameters(array $params = []): array
    {
        $params = array_merge($params, [
            'shopId' => $this->getMerchantId(),
            'nonce' => time()
        ]);

        return array_merge($params, ['signature' => $this->makeRequestSignature($params)]);
    }

    
    protected function makeRequest(string $endpoint, string $returnKey = NULL, array $params = [])
    {
        $params = $this->makeParameters($params);

        $response = $this->post($endpoint, $returnKey ?: $endpoint, ['json' => $params]);

        if (optional($response)->type != self::SUCCESS) {
            $this->errorMessage = $response->message ?? __('Generic error');
            Log::error(sprintf('%s error: %s', __CLASS__, $this->errorMessage));
        }

        return $response;
    }

    
    public function validateWebhook(Request $request): bool
    {
        $receivedSignature = $request->SIGN;
        $expectedSignature = md5(sprintf('%s:%s:%s:%s', $this->getMerchantId(), $request->AMOUNT, $this->getSecret2(), $request->MERCHANT_ORDER_ID));;

        if ($receivedSignature != $expectedSignature) {
            Log::error(sprintf('Incorrect signature received: %s, Expected %s', $receivedSignature, $expectedSignature));
            return FALSE;
        }

        return TRUE;
    }

    public function makePaymentUrl(float $amount, string $currency, string $orderId, string $email): string
    {
        return 'https://pay.freekassa.ru/?' . http_build_query([
                'm' => $this->getMerchantId(),
                'oa' => $amount,
                'currency' => $currency,
                'o' => $orderId,
                'em' => $email,
                'lang' => app()->getLocale() == 'ru' ? 'ru' : 'en',
                's' => $this->makePaymentUrlSignature($amount, $currency, $orderId)
            ],
            '',
            '&'
        );
    }

    protected function makePaymentUrlSignature(float $amount, string $currency, string $orderId): string
    {
        return  md5(sprintf('%s:%s:%s:%s:%s', $this->getMerchantId(), $amount, $this->getSecret(), $currency, $orderId));
    }

    protected function makeRequestSignature(array $params): string
    {
        ksort($params);
        return hash_hmac('sha256', implode('|', $params), $this->getApiKey());
    }

    public function fetchShops(): Collection
    {
        return collect($this->makeRequest(self::CMD_GET_SHOPS));
    }

    public function fetchBalances(): Collection
    {
        return collect($this->makeRequest(self::CMD_GET_BALANCES));
    }

    public function fetchDepositMethods(): Collection
    {
        return collect($this->makeRequest(self::CMD_GET_DEPOSIT_METHODS));
    }

    public function fetchWithdrawalMethods(): Collection
    {
        return collect($this->makeRequest(self::CMD_GET_WITHDRAWAL_METHODS, 'currencies'));
    }

    public function createWithdrawal(float $amount, string $currency, int $method, string $account, string $orderId): ?int
    {
        return $this->makeRequest(self::CMD_CREATE_WITHDRAWAL, 'data.id', [
            'amount'    => $amount,
            'currency'  => $currency,
            'i'         => $method,
            'account'   => $account,
            'paymentId' => $orderId,
        ]);
    }
}
