<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalStatusFilter.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries\Filters;

use App\Helpers\Queries\Filters\EnumFilter;
use Packages\Payments\Models\Withdrawal;

class WithdrawalStatusFilter extends EnumFilter
{
    protected $key = 'status';
    protected $model = Withdrawal::class;
    protected $table = 'withdrawals';
}
