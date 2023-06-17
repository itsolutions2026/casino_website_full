<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaytmApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use paytm\paytmchecksum\PaytmChecksum;

class PaytmApi extends Api
{
    const BASE_URL_LIVE = 'https://securegw.paytm.in/theia/api/v1/';
    const BASE_URL_TEST = 'https://securegw-stage.paytm.in/theia/api/v1/';

    const CMD_CREATE_TRANSACTION = 'initiateTransaction';

    protected $errorMessage;

    public function __construct()
    {
        if (!$this->getMerchantId() || !$this->getSecretKey()) {
            throw new \Exception('API parameters are not specified');
        }
    }

    protected function getBaseUrl(): string
    {
        return $this->isLiveMode() ? self::BASE_URL_LIVE : self::BASE_URL_TEST;
    }

    protected function getMerchantId(): ?string
    {
        return config('payments.paytm.merchant_id');
    }

    protected function getSecretKey(): ?string
    {
        return config('payments.paytm.secret_key');
    }

    protected function isLiveMode(): bool
    {
        return config('payments.paytm.live') == TRUE;
    }

    public function getErrorMessage(): ?string
    {
        return $this->errorMessage;
    }

    protected function makeHeaders(array $params): array
    {
        return [

            'signature' => PaytmChecksum::generateSignature($params, $this->getSecretKey())
        ];
    }

    protected function makeParameters(array $params = []): array
    {
        return array_merge($params, [
            'mid' => $this->getMerchantId()
        ]);
    }

    
    protected function makeRequest(string $endpoint, string $returnKey = NULL, array $params = [])
    {
        $params = $this->makeParameters($params);

        $response = $this->post($endpoint, NULL, [
            'headers'   => $this->makeHeaders($params),
            'json'      => $params
        ]);

        if (!in_array(data_get($response,'resultInfo.resultCode'), ['0000', '0002'], TRUE)) {
            $this->errorMessage = data_get($response,'resultInfo.resultMsg', __('Generic error'));
            Log::error(sprintf('%s error: %s', __CLASS__, $this->errorMessage));
        }

        return data_get($response, $returnKey);
    }

    public function createTransaction(float $amount, string $currency, int $userId, string $userEmail, string $orderId, string $callbackUrl): ?string
    {
        return $this->makeRequest(self::CMD_CREATE_TRANSACTION, 'txnToken', [
            'requestType'   => 'Payment',
            'orderId'       => $orderId,
            'callbackUrl'   => $callbackUrl,
            'txnAmount'     => ['value' => $amount, 'currency' => $currency],
            'userInfo'      => ['custId' => $userId, 'email' => $userEmail]
        ]);
    }
}
