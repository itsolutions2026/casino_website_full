<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositMethod.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

class DepositMethod extends Method
{
    public function deposits()
    {
        return $this->hasMany(Deposit::class);
    }

    public function resolveRouteBinding($value, $field = NULL)
    {
        return is_numeric($value) && intval($value) > 0
            ? parent::resolveRouteBinding($value, $field)
            : $this->enabled()->whereHas('paymentMethod', function ($query) use ($value) {
                $query->where('code', $value)->where('type', PaymentGatewayMethod::TYPE_IN);
            })->firstOrFail();
    }
}
