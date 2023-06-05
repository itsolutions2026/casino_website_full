<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalMethodQuery.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries;

use App\Helpers\Queries\Query;
use Packages\Payments\Helpers\Queries\Filters\DepositWithdrawalMethodStatusFilter;
use Packages\Payments\Models\WithdrawalMethod;

class WithdrawalMethodQuery extends Query
{
    protected $model = WithdrawalMethod::class;

    protected $with = ['paymentMethod', 'paymentMethod.gateway'];

    protected $filters = [[DepositWithdrawalMethodStatusFilter::class]];

    protected $sortableColumns = [
        'id'            => 'id',
        'name'          => 'name',
        'status_title'  => 'enabled'
    ];
}
