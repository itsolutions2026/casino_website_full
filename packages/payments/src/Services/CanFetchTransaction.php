<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanFetchTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Support\Collection;

interface CanFetchTransaction
{
    public function fetchTransaction(string $id): Collection;
}
