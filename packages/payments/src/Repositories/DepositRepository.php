<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositRepository.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Repositories;

use Packages\Payments\Events\DepositCancelled;
use Packages\Payments\Events\DepositCompleted;
use Packages\Payments\Models\Deposit;

class DepositRepository
{
    
    public static function create(array $params): Deposit
    {
        $deposit = new Deposit();
        $deposit->account()->associate($params['account']);
        $deposit->method()->associate($params['method']);
        $deposit->external_id           = $params['external_id'] ?? NULL;
        $deposit->amount                = $params['amount'];
        $deposit->payment_amount        = $params['payment_amount'] ?? NULL;
        $deposit->payment_currency      = $params['payment_currency'] ?? NULL;
        $deposit->parameters            = $params['parameters'] ?? NULL;
        $deposit->response              = $params['response'] ?? NULL;
        $deposit->status                = $params['status'] ?? Deposit::STATUS_CREATED;
        $deposit->save();

        return $deposit;
    }

    public static function complete(Deposit $deposit): void
    {
        tap($deposit, function ($deposit) { $deposit->is_completed = TRUE; })->save();
        event(new DepositCompleted($deposit));
    }

    public static function cancel(Deposit $deposit): void
    {
        tap($deposit, function ($deposit) { $deposit->is_cancelled = TRUE; })->save();
        event(new DepositCancelled($deposit));
    }
}
