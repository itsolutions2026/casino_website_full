<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   ShouldValidateAmount.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

interface ShouldValidateAmount
{
    
    public function fetchMinPaymentAmount(): float;
}
