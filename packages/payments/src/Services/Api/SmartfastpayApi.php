<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SmartfastpayApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class SmartfastpayApi extends Api
{
    const BASE_URL_TEST = 'https://sandbox.smartfastpay.com/';
    const BASE_URL_LIVE = 'https://api.smartfastpay.com/';

    const CMD_GET_TOKEN = 'oauth2/token';
    const CMD_FETCH_PAYMENT = ['GET', '/payment/%s', 'data'];
    const CMD_FETCH_PAYMENTS = ['GET', 'payments', 'data'];
    const CMD_CREATE_PAYMENT = ['POST', 'payment', 'data'];
    const CMD_FETCH_PAYOUT = ['GET', '/payout/%s', 'data'];
    const CMD_FETCH_PAYOUTS = ['GET', 'payouts', 'data'];
    const CMD_CREATE_PAYOUT = ['POST', 'payout', 'data'];

    protected $errorMessage;

    public function __construct()
    {
        if (!$this->getClientId() || !$this->getSecretKey()) {
            throw new \Exception('API parameters are not specified');
        }
    }

    protected function getBaseUrl(): string
    {
        return $this->isLiveMode() ? self::BASE_URL_LIVE : self::BASE_URL_TEST;
    }

    protected function getClientId(): ?string
    {
        return config('payments.smartfastpay.client_id');
    }

    protected function getSecretKey(): ?string
    {
        return config('payments.smartfastpay.secret_key');
    }

    protected function isLiveMode(): bool
    {
        return config('payments.smartfastpay.live') == TRUE;
    }

    public function getErrorMessage(): ?string
    {
        return $this->errorMessage;
    }

    protected function makeHeaders(): array
    {
        $token = Cache::remember(sprintf('payments.%s.token', class_basename(__CLASS__)), 3600, function () {
            info(sprintf('Obtain autorization token for client ID %s', $this->getClientId()));
            return $this->post(self::CMD_GET_TOKEN, 'data.access_token', [
                'auth' => [$this->getClientId(), $this->getSecretKey()]
            ]);
        });

        if (!$token) {
            throw new \Exception('Can not obtain authorization token.');
        }

        return [
            'Content-Type'  => 'application/json',
            'Authorization' => 'Bearer ' . $token
        ];
    }

    
    protected function makeRequest(array $cmd, array $params = [])
    {
        $response = $this->request($cmd[0], $cmd[1], $cmd[2], [
            'headers'   => $this->makeHeaders(),
            'query'     => $params
        ]);

        return $response;
    }

    public function fetchPayments(int $limit = 999): Collection
    {
        return collect($this->makeRequest(self::CMD_FETCH_PAYMENTS, [
            'limit' => $limit,
        ]));
    }

    public function fetchPayment(string $id): Collection
    {
        $cmd = self::CMD_FETCH_PAYMENT;
        $cmd[1] = sprintf($cmd[1], $id);
        return collect($this->makeRequest($cmd));
    }

    public function createPayment(string $method, string $cpf, float $amount, string $currency, int $userId, string $userName, string $userEmail, string $orderId, string $callbackUrl): Collection
    {
        return collect($this->makeRequest(self::CMD_CREATE_PAYMENT, [
            'customer_id'       => $userId,
            'document'          => $cpf,
            'name'              => $userName,
            'email'             => $userEmail,
            'amount'            => $amount,
            'currency'          => $currency,
            'payment_method'    => $method,
            'callback'          => $callbackUrl,
            'transaction'       => ['id' => $orderId],
        ]));
    }

    public function fetchPayouts(int $limit = 999): Collection
    {
        return collect($this->makeRequest(self::CMD_FETCH_PAYOUTS, [
            'limit' => $limit,
        ]));
    }

    public function fetchPayout(string $id): Collection
    {
        $cmd = self::CMD_FETCH_PAYOUT;
        $cmd[1] = sprintf($cmd[1], $id);
        return collect($this->makeRequest($cmd));
    }

    public function createPayout(array $paymentMethodParams, string $cpf, float $amount, string $currency, int $userId, string $userName, string $userEmail, string $orderId, string $callbackUrl): Collection
    {
        $params = [
            'customer_id'       => $userId,
            'document'          => $cpf,
            'name'              => $userName,
            'email'             => $userEmail,
            'amount'            => $amount,
            'currency'          => $currency,
            'callback'          => $callbackUrl,
            'transaction'       => ['id' => $orderId],
        ];

        return collect($this->makeRequest(self::CMD_CREATE_PAYOUT, array_merge($params, $paymentMethodParams)));
    }
}
