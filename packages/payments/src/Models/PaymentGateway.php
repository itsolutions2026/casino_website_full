<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaymentGateway.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    
    protected $casts = [
        'deposit_parameters' => 'object', 
        'withdrawal_parameters' => 'object', 
    ];

    
    protected $hidden = [
        'deposit_supported',
        'withdrawal_supported',
        'created_at',
        'updated_at',
    ];

    public function paymentMethods()
    {
        return $this->hasMany(PaymentGatewayMethod::class, 'payment_gateway_id');
    }
}
