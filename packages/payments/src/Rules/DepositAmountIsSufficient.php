<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositAmountIsSufficient.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Packages\Payments\Models\Deposit;

class DepositAmountIsSufficient implements Rule
{
    private $user;
    private $minTotalDeposit;

    
    public function __construct(User $user)
    {
        $this->user = $user;
        $this->minTotalDeposit = config('payments.min_total_deposit_to_withdraw');
    }

    
    public function passes($attribute = NULL, $value = NULL)
    {
        return (float) Deposit::where('account_id', $this->user->account->id)->completed()->sum('amount') >= $this->minTotalDeposit;
    }

    
    public function message()
    {
        return __('You need to deposit at least :n credits before being able to withdraw.', ['n' => $this->minTotalDeposit]);
    }
}
