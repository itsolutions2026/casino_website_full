<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CoinpaymentsApi.php
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

class CoinpaymentsApi extends Api
{
    const CMD_GET_BALANCES = 'balances';
    const CMD_GET_ACCOUNT_INFO = 'get_basic_info';
    const CMD_GET_RATES = 'rates';
    const CMD_GET_TRANSACTION = 'get_tx_info';
    const CMD_GET_WITHDRAWAL = 'get_withdrawal_info';
    const CMD_CREATE_TRANSACTION = 'create_transaction';
    const CMD_CREATE_WITHDRAWAL = 'create_withdrawal';
    const SUCCESS = 'ok';

    protected $errorMessage;

    protected function getBaseUrl(): string
    {
        return 'https://www.coinpayments.net/api.php';
    }

    protected function getPublicKey(): ?string
    {
        return config('payments.coinpayments.public_key');
    }

    protected function getPrivateKey(): ?string
    {
        return config('payments.coinpayments.private_key');
    }

    protected function getSecretKey(): ?string
    {
        return config('payments.coinpayments.secret_key');
    }

    protected function getMerchantId(): ?string
    {
        return config('payments.coinpayments.merchant_id');
    }

    public function getErrorMessage(): ?string
    {
        return $this->errorMessage;
    }

    protected function makeHeaders(array $params): array
    {
        return [
            'Content-Type' => 'application/x-www-form-urlencoded',
            'HMAC' => hash_hmac('sha512', http_build_query($params, '', '&'), $this->getPrivateKey())
        ];
    }

    protected function makeParameters(array $params): array
    {
        return array_merge([
            'version' => 1,
            'format' => 'json',
            'key' => $this->getPublicKey()
        ], $params);
    }

    
    protected function makeRequest(array $params)
    {
        $params = $this->makeParameters($params);

        $response = $this->post('', NULL, [
            'headers' => $this->makeHeaders($params),
            'form_params' => $params
        ]);

        if ($response->error != self::SUCCESS) {
            $this->errorMessage = $response->error;
            Log::error(sprintf('%s error: %s', __CLASS__, $response->error));
        }

        return $response->result ?? NULL;
    }

    
    public function validateWebhook(Request $request): bool
    {
        $error = NULL;
        $content = $request->getContent();
        $receivedHmac = $request->header('HMAC');
        $expectedHmac = hash_hmac('sha512', $content, $this->getSecretKey());

        if ($request->ipn_mode != 'hmac' || !$receivedHmac) {
            $error = 'Incorrect request';
        } elseif ($request->merchant != $this->getMerchantId()) {
            $error = 'Incorrect merchant';
        } elseif (!hash_equals($receivedHmac, $expectedHmac)) {
            $error = sprintf('Incorrect HMAC received: %s, Expected %s', $receivedHmac, $expectedHmac);
        }

        if ($error) {
            Log::error(sprintf('IPN validation failed: %s', $error));
            return FALSE;
        }

        return TRUE;
    }

    public function fetchAccountInfo(): Collection
    {
        return collect($this->makeRequest(['cmd' => self::CMD_GET_ACCOUNT_INFO]));
    }

    public function fetchBalances(): Collection
    {
        return collect($this->makeRequest(['cmd' => self::CMD_GET_BALANCES]));
    }

    public function fetchRates(): Collection
    {
        return collect($this->makeRequest(['cmd' => self::CMD_GET_RATES, 'accepted' => 1]));
    }

    public function fetchTransaction(string $transactionId): Collection
    {
        return collect($this->makeRequest(['cmd' => self::CMD_GET_TRANSACTION, 'txid' => $transactionId]));
    }

    public function fetchWithdrawal(string $withdrawalId): Collection
    {
        return collect($this->makeRequest(['cmd' => self::CMD_GET_WITHDRAWAL, 'id' => $withdrawalId]));
    }

    public function createTransaction(float $amount, string $currency, string $paymentCurrency, string $description, string $email, string $name, string $ipnUrl): Collection
    {
        return collect($this->makeRequest([
            'cmd'               => self::CMD_CREATE_TRANSACTION,
            'amount'            => $amount,
            'currency1'         => $currency,
            'currency2'         => $paymentCurrency,
            'item_name'         => $description,
            'buyer_email'       => $email,
            'buyer_name'        => $name,
            'ipn_url'           => $ipnUrl,
        ]));
    }

    public function createWithdrawal(float $amount, string $currency, string $paymentCurrency, string $address, string $description, string $ipnUrl, int $autoConfirm): Collection
    {
        return collect($this->makeRequest([
            'cmd'               => self::CMD_CREATE_WITHDRAWAL,
            'amount'            => $amount,
            
            'currency'          => $currency,
            
            
            'currency2'         => $paymentCurrency,
            'address'           => $address,
            'note'              => $description,
            'ipn_url'           => $ipnUrl,
            'auto_confirm'      => $autoConfirm
        ]));
    }
}
