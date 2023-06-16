<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanSendTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

interface CanSendTransaction
{
    public function send(): void;
}
