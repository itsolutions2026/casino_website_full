<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Method.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Packages\Payments\Services\CanFetchAccountInfo;
use Packages\Payments\Services\CanFetchBalances;
use Packages\Payments\Services\DepositService;
use Packages\Payments\Services\CanFetchPaymentCurrencies;
use Packages\Payments\Services\WithdrawalService;

class Method extends Model
{
    
    protected $appends = [
        'methods'
    ];

    
    protected $casts = [
        'rate'                      => 'float',
        'payment_method_parameters' => 'object',
        'parameters'                => 'object', 
        'enabled'                   => 'integer',
        'decimal_places'            => 'integer',
        'min_amount'                => 'integer',
        'max_amount'                => 'integer',
    ];

    
    protected $hidden = [
        'enabled',
        'payment_method_parameters',
        'created_at',
        'updated_at',
    ];

    protected $fillable = ['banner'];

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentGatewayMethod::class, 'payment_method_id');
    }

    
    public function scopeEnabled($query): Builder
    {
        return $query->where('enabled', TRUE);
    }

    public function getStatusTitleAttribute()
    {
        return $this->enabled
            ? __('Enabled')
            : __('Disabled');
    }

    
    public function getPaymentCurrenciesAttribute(): Collection
    {
        if ($this->paymentMethod) {
            $serviceClass = $this instanceof DepositMethod ? DepositService::class : WithdrawalService::class;
            $depositService = $serviceClass::make($this, NULL);

            if ($depositService instanceof CanFetchPaymentCurrencies) {
                return $depositService->fetchPaymentCurrencies();
            }
        }

        return collect();
    }

    public function getMethodsAttribute(): Collection
    {
        $methods = collect();

        if ($this->enabled && $this->paymentMethod) {
            $serviceClass = $this instanceof DepositMethod ? DepositService::class : WithdrawalService::class;
            $depositService = $serviceClass::make($this, NULL);

            if ($depositService instanceof CanFetchAccountInfo) {
                $methods->put('info',  __('Info'));
            }

            if ($depositService instanceof CanFetchBalances) {
                $methods->put('balance', __('Balance'));
            }
        }

        return $methods;
    }
}
