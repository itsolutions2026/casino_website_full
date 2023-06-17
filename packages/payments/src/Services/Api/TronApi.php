<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   TronApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Utils;
use Omnipay\Omnipay;
use Packages\Payments\Helpers\Blockchain\Transaction;
use Packages\Payments\Helpers\Blockchain\TronTransaction;

class TronApi implements BlockchainApi
{
    protected $omnipay;

    public function __construct()
    {
        $this->omnipay = Omnipay::create('Trongrid');

        $this->omnipay->initialize([
            'network' => config('payments.tron.network')
        ]);
    }

    public static function fromUnits($value, int $decimals = 6): string
    {
        return Utils::fromUnits($value, $decimals, 8);
    }

    public static function toUnits($value, int $decimals = 6): string
    {
        return Utils::toUnits($value, $decimals);
    }

    public function fetchBalance(string $address): ?float
    {
        $response = $this->omnipay->fetchBalance(compact('address'))->send();

        return $response->isSuccessful() ? self::fromUnits($response->getData()) : NULL;
    }

    public function fetchTokenBalance(string $address, string $contract, int $contractDecimals = 18): ?float
    {
        
        return PHP_INT_MAX;
    }

    public function fetchTransaction(string $hash): ?Transaction
    {
        $response = $this->omnipay->fetchTransaction(['transaction_id' => $hash])->send();

        return $response->isSuccessful() ? new TronTransaction($response->getData()) : NULL;
    }
}
