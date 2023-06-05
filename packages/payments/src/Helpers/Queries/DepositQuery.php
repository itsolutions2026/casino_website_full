<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositQuery.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries;

use App\Helpers\Queries\Filters\PeriodFilter;
use App\Helpers\Queries\Query;
use Packages\Payments\Helpers\Queries\Filters\DepositStatusFilter;
use Packages\Payments\Models\Deposit;

class DepositQuery extends Query
{
    protected $model = Deposit::class;

    protected $with = ['method:id,name'];

    protected $filters = [[PeriodFilter::class, DepositStatusFilter::class]];

    protected $sortableColumns = [
        'id'                => 'id',
        'payment_amount'    => 'payment_amount',
        'payment_currency'  => 'payment_currency',
        'amount'            => 'amount',
        'created_at'        => 'created_at',
    ];
}
