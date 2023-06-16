<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositMethodQuery.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries;

use App\Helpers\Queries\Query;
use Packages\Payments\Helpers\Queries\Filters\DepositWithdrawalMethodStatusFilter;
use Packages\Payments\Models\DepositMethod;

class DepositMethodQuery extends Query
{
    protected $model = DepositMethod::class;

    protected $with = ['paymentMethod', 'paymentMethod.gateway'];

    protected $filters = [[DepositWithdrawalMethodStatusFilter::class]];

    protected $sortableColumns = [
        'id'            => 'id',
        'name'          => 'name',
        'status_title'  => 'enabled'
    ];
}
