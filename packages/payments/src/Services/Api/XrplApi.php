<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   XrplApi.php
 *
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
 */

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use App\Helpers\Utils;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Helpers\Blockchain\XrplTransaction;
use Packages\Payments\Helpers\Blockchain\Transaction;

class XrplApi extends Api implements BlockchainApi
{
    protected const METHOD_NET_VERSION = 'getVersion';
    protected const METHOD_GET_BALANCE = 'account_info';
    protected const METHOD_GET_TRANSACTION = 'tx';

    protected $url;
    protected $tag = 'latest';

    protected $commonRequestParameters = [
        'id' => 1,
        'jsonrpc' => '2.0'
    ];


    public function __construct(string $url)
    {
        $this->url = $url;
    }

    public static function fromUnits($value, int $decimals = 6): string
    {
        return Utils::fromUnits($value, $decimals, 8);
    }

    public static function toUnits($value, int $decimals = 6): string
    {
        return Utils::toUnits($value, $decimals);
    }

    protected function getBaseUrl(): string
    {
        return $this->url;
    }

    protected function makeParameters(array $parameters): array
    {
        return array_merge($this->commonRequestParameters, $parameters);
    }


    protected function makeRequest(array $params)
    {
        return $this->post('', 'result', ['json' => $this->makeParameters($params)]);
    }


    public function fetchBalance(string $address): ?float
    {
        $balance = $this->makeRequest([
            'method' => self::METHOD_GET_BALANCE,
            'params' => [
                array(
                    'account' => $address,
                    'strict' => true,
                    'ledger_index' => 'current',
                    'queue' => true
                )
            ]
        ]);

        return !is_null($balance) && !empty($balance->account_data) ? self::fromUnits($balance->account_data->Balance) : NULL;
    }


    public function fetchTransaction(string $hash): ?Transaction
    {
        $tx = $this->makeRequest([
            'method' => self::METHOD_GET_TRANSACTION,
            'params' => [
                array(
                    "transaction" => $hash,
                    "binary" => false
                )
            ]
        ]);

        return optional($tx, function ($tx) {
            return new XrplTransaction($tx);
        });
    }
}
