<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanFetchPaymentCurrencies.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Support\Collection;

interface CanFetchPaymentCurrencies
{
    
    public function fetchPaymentCurrencies(): Collection;
}
