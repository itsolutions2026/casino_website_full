<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositStatusFilter.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries\Filters;

use App\Helpers\Queries\Filters\EnumFilter;
use Packages\Payments\Models\Deposit;

class DepositStatusFilter extends EnumFilter
{
    protected $key = 'status';
    protected $model = Deposit::class;
    protected $table = 'deposits';
}
