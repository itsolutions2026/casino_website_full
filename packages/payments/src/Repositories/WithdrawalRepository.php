<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalRepository.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Repositories;

use Packages\Payments\Events\WithdrawalCancelled;
use Packages\Payments\Events\WithdrawalCompleted;
use Packages\Payments\Events\WithdrawalCreated;
use Packages\Payments\Models\Withdrawal;

class WithdrawalRepository
{
    
    public static function create(array $params): Withdrawal
    {
        $withdrawal = new Withdrawal();
        $withdrawal->account()->associate($params['account']);
        $withdrawal->method()->associate($params['method']);
        $withdrawal->external_id           = $params['external_id'] ?? NULL;
        $withdrawal->amount                = $params['amount'];
        $withdrawal->payment_amount        = $params['payment_amount'] ?? NULL;
        $withdrawal->payment_currency      = $params['payment_currency'] ?? NULL;
        $withdrawal->parameters            = $params['parameters'] ?? NULL;
        $withdrawal->response              = $params['response'] ?? NULL;
        $withdrawal->status                = $params['status'] ?? Withdrawal::STATUS_CREATED;
        $withdrawal->save();

        event(new WithdrawalCreated($withdrawal));

        return $withdrawal;
    }

    public static function complete(Withdrawal $withdrawal): void
    {
        tap($withdrawal, function ($withdrawal) { $withdrawal->is_completed = TRUE; })->save();
        event(new WithdrawalCompleted($withdrawal));
    }

    public static function cancel(Withdrawal $withdrawal): void
    {
        tap($withdrawal, function ($withdrawal) { $withdrawal->is_cancelled = TRUE; })->save();
        event(new WithdrawalCancelled($withdrawal));
    }
}
