<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Call.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\CasinoHoldem\Http\Requests;

use App\Rules\BalanceIsSufficient;
use Illuminate\Http\Request;

class Call extends Action
{
    public function withValidator($validator)
    {
        $user = $this->user();
        $amount = $this->provablyFairGame->game->gameable->ante_bet * 2;

        
        $validator->after(function ($validator) use ($user, $amount) {
            $rule = new BalanceIsSufficient($user, $amount);

            if (!$rule->passes()) {
                $validator->errors()->add('bet', $rule->message());
            }
        });
    }
}
