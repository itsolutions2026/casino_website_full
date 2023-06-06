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
use Packages\Payments\Helpers\Blockchain\XrplTransaction;
use Packages\Payments\Helpers\Blockchain\Transaction;

class XrplApi extends Api implements BlockchainApi
{
    protected const METHOD_NET_VERSION = 'getVersion';
    protected const METHOD_GET_BALANCE = 'getBalance';
    protected const METHOD_GET_TRANSACTION = 'getTransaction';

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

    public static function fromUnits($value, int $decimals = 9): string
    {
        return Utils::fromUnits($value, $decimals, 8);
    }

    public static function toUnits($value, int $decimals = 9): string
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
            'params' => [$address]
        ]);

        return !is_null($balance) ? self::fromUnits($balance->value) : NULL;
    }


    public function fetchVersion(): string
    {
        return $this->makeRequest(['method' => self::METHOD_NET_VERSION])->{'Ripple-core'};
    }


    public function fetchTransaction(string $hash): ?Transaction
    {
        $tx = $this->makeRequest([
            'method' => self::METHOD_GET_TRANSACTION,
            'params' => [$hash]
        ]);

        return optional($tx, function ($tx) {
            return new XrplTransaction($tx);
        });
    }
}
