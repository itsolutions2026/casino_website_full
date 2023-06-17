<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalMethod.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

class WithdrawalMethod extends Method
{
    function withdrawals()
    {
        return $this->hasMany(Withdrawal::class);
    }
}
