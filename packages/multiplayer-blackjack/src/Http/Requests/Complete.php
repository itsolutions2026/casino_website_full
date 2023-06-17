<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Complete.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\MultiplayerBlackjack\Http\Requests;

use App\Http\Requests\UpdateMultiplayerGame;

class Complete extends UpdateMultiplayerGame
{
    public function authorize()
    {
        
        
        return parent::authorize() && time() > $this->game->gameable->hands->max('action_end');
    }
}
