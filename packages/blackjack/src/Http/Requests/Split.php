<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Split.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

use App\Rules\BalanceIsSufficient;

class Split extends Action
{
    
    public function authorize()
    {
        return parent::authorize();
    }

    public function withValidator($validator)
    {
        $user = $this->user();
        $amount = $this->provablyFairGame->game->bet;

        
        $validator->after(function ($validator) use ($user, $amount) {
            $rule = new BalanceIsSufficient($user, $amount);

            if (!$rule->passes()) {
                $validator->errors()->add('bet', $rule->message());
            }
        });
    }
}
