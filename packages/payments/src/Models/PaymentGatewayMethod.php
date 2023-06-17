<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaymentGatewayMethod.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentGatewayMethod extends Model
{
    const TYPE_IN       = 1; 
    const TYPE_OUT      = 2; 
    const TYPE_BOTH     = 3; 

    
    protected $casts = [
        'parameters' => 'object', 
        'input_parameters' => 'object', 
        'allowed_currencies' => 'array',
    ];

    
    protected $hidden = [
        'type',
        'parameters',
        'allowed_currencies',
        'created_at',
        'updated_at'
    ];

    public function gateway()
    {
        return $this->belongsTo(PaymentGateway::class, 'payment_gateway_id');
    }
}
