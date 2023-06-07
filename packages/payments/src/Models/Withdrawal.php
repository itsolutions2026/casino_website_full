<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Withdrawal.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

use App\Models\Account;
use App\Models\AccountTransaction;
use App\Models\DefaultTimestampsAgoAttributes;
use App\Models\Scopes\PeriodScope;
use App\Models\StandardDateFormat;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Packages\Payments\Services\CanFetchTransaction;
use Packages\Payments\Services\CryptoWithdrawalService;
use Packages\Payments\Services\WithdrawalService;

class Withdrawal extends Model
{
    use DefaultTimestampsAgoAttributes;
    use StandardDateFormat;
    use PeriodScope;

    const STATUS_CREATED        = 0;
    const STATUS_PENDING        = 1;
    const STATUS_COMPLETED      = 2;
    const STATUS_CANCELLED      = 10;

    
    protected $appends = [
        'title',
        'status_title',
        'is_created',
        'is_pending',
        'is_completed',
        'is_cancelled',
        'payment_amount_in_units',
        'created_ago'
    ];

    
    protected $fillable = [
        'external_id',
        'status',
        'response'
    ];

    
    protected $casts = [
        'amount'            => 'float',
        'payment_amount'    => 'float',
        'amount_min'        => 'float',
        'amount_max'        => 'float',
        'amount_avg'        => 'float',
        'parameters'        => 'object',
        'response'          => 'array',
    ];

    
    protected $hidden = [
        'parameters',
        'response'
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function transaction()
    {
        return $this->morphOne(AccountTransaction::class, 'transactionable');
    }

    public function method()
    {
        return $this->belongsTo(WithdrawalMethod::class, 'withdrawal_method_id');
    }

    
    public function scopeCreated($query): Builder
    {
        return $query->where('status', self::STATUS_CREATED);
    }

    public function scopePending($query): Builder
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    
    public function scopeCompleted($query): Builder
    {
        return $query->where('status', self::STATUS_COMPLETED);
    }

    
    public function scopeNotCancelled($query): Builder
    {
        return $query->where('status', '!=', self::STATUS_CANCELLED);
    }

    public function scopePendingAutoProcess($query): Builder
    {
        return $query->with('method', 'method.paymentMethod')
            ->created()
            ->whereHas('method', function ($query) {
                $query->enabled()->where('payment_method_parameters', 'like', '%"auto":1,%');
            })
            ->whereHas('method.paymentMethod', function ($query) {
                $query->where('type', PaymentGatewayMethod::TYPE_OUT)
                    ->whereIn('code', ['coinpayments', 'evm_coin', 'evm_token', 'ripple_coin', 'freekassa', 'smartfastpay_bank', 'smartfastpay_pix', 'easywire']);
            });
    }

    public function getTitleAttribute()
    {
        return __('Withdrawal');
    }

    
    public function getIsCreatedAttribute()
    {
        return $this->status == self::STATUS_CREATED;
    }

    
    public function getIsPendingAttribute()
    {
        return $this->status == self::STATUS_PENDING;
    }

    
    public function setIsPendingAttribute(bool $true)
    {
        if ($true) {
            $this->attributes['status'] = self::STATUS_PENDING;
        }
    }

    
    public function getIsCompletedAttribute()
    {
        return $this->status == self::STATUS_COMPLETED;
    }

    
    public function setIsCompletedAttribute(bool $true)
    {
        if ($true) {
            $this->attributes['status'] = self::STATUS_COMPLETED;
        }
    }

    
    public function getIsCancelledAttribute()
    {
        return $this->status == self::STATUS_CANCELLED;
    }

    
    public function setIsCancelledAttribute(bool $isCancelled)
    {
        if ($isCancelled) {
            $this->attributes['status'] = self::STATUS_CANCELLED;
        }
    }

    public function getStatusTitleAttribute()
    {
        if ($this->status == self::STATUS_CREATED) {
            return __('Created');
        } elseif ($this->status == self::STATUS_PENDING) {
            return __('Pending');
        } elseif ($this->status == self::STATUS_COMPLETED) {
            return __('Completed');
        } elseif ($this->status == self::STATUS_CANCELLED) {
            return __('Cancelled');
        }

        return __('Unknown');
    }

    
    public function getPaymentAmountInUnitsAttribute(): string
    {
        if ($this->method && $this->method->paymentMethod) {
            $withdrawalService = WithdrawalService::make($this->method, $this);
            if ($withdrawalService instanceof CryptoWithdrawalService) {
                return $withdrawalService->calculatePaymentAmountInUnits($this->payment_amount);
            }
        }

        return '0';
    }

    
    public function getMethodsAttribute(): Collection
    {
        $methods = collect();

        if ($this->method && $this->method->paymentMethod && $this->external_id) {
            $withdrawalService = WithdrawalService::make($this->method, NULL);

            if ($withdrawalService instanceof CanFetchTransaction) {
                $methods->put('transaction',  __('Transaction'));
            }
        }

        return $methods;
    }
}
