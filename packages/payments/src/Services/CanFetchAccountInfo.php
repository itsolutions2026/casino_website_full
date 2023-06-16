<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanFetchAccountInfo.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Support\Collection;

interface CanFetchAccountInfo
{
    public function fetchAccountInfo(): Collection;
}
