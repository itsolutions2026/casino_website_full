<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalDoesNotExceedWeeklyLimit.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Carbon;
use Packages\Payments\Models\Withdrawal;

class WithdrawalDoesNotExceedWeeklyLimit implements Rule
{
    private $user;
    private $amount;
    private $limit;
    private $withdrawn;

    
    public function __construct(User $user, float $amount)
    {
        $this->user = $user;
        $this->amount = $amount;
        $this->limit = config('payments.withdrawal_weekly_limit');
    }

    
    public function passes($attribute = NULL, $amount = NULL)
    {
        if ($this->limit > 0) {
            $this->withdrawn = (float)Withdrawal::where('account_id', $this->user->account->id)
                ->whereBetween('created_at', [Carbon::now()->subDays(7), Carbon::now()])
                ->notCancelled()
                ->sum('amount');

            return $this->amount + $this->withdrawn <= $this->limit;
        }

        return TRUE;
    }

    
    public function message()
    {
        return __('Your weekly withdrawal limit is :n credits (:k already withdrawn).', [
            'n' => $this->limit,
            'k' => $this->withdrawn
        ]);
    }
}
