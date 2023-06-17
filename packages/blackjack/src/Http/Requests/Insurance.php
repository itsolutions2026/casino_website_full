<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Insurance.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

use App\Rules\BalanceIsSufficient;
use Illuminate\Http\Request;

class Insurance extends Action
{
    
    public function authorize()
    {
        return parent::authorize();
    }

    
    public function rules(Request $request)
    {
        return array_merge(
            parent::rules($request),
            [
                'insurance' => 'required|boolean'
            ]
        );
    }

    public function withValidator($validator)
    {
        $user = $this->user();
        $amount = $this->provablyFairGame->game->bet / 2;

        
        $validator->after(function ($validator) use ($user, $amount) {
            $rule = new BalanceIsSufficient($user, $amount);

            if (!$rule->passes()) {
                $validator->errors()->add('bet', $rule->message());
            }
        });
    }
}
