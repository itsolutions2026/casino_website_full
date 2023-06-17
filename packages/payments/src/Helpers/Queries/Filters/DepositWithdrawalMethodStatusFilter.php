<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositWithdrawalMethodStatusFilter.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Queries\Filters;

use App\Helpers\Queries\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class DepositWithdrawalMethodStatusFilter extends Filter
{
    protected $key = 'status';

    public function buildQuery(Builder $query): Builder
    {
        return $query->when(!is_null($this->getValue()), function (Builder $query) {
            $query->where('enabled', $this->getValue());
        });
    }
}
