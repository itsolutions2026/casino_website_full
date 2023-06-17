<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   BlockchainApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use Packages\Payments\Helpers\Blockchain\Transaction;

interface BlockchainApi
{
    public function fetchBalance(string $address): ?float;

    public function fetchTransaction(string $hash): ?Transaction;

    public static function fromUnits($value, int $decimals): string;

    public static function toUnits($value, int $decimals): string;
}
