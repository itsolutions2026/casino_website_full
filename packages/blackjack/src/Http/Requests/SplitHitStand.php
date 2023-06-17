<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SplitHitStand.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

use Illuminate\Http\Request;

class SplitHitStand extends Action
{
    
    public function authorize()
    {
        return parent::authorize() && $this->provablyFairGame->game->gameable->player_score2 > 0;
    }

    
    public function rules(Request $request)
    {
        return array_merge(
            parent::rules($request),
            [
                'hand' => 'required|integer|min:1|max:2'
            ]
        );
    }
}
