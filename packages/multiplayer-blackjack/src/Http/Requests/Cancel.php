<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Cancel.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\MultiplayerBlackjack\Http\Requests;

use App\Http\Requests\UpdateMultiplayerGame;
use Illuminate\Support\Carbon;

class Cancel extends UpdateMultiplayerGame
{
    public function authorize()
    {
        
        parent::authorize();

        return $this->room->is_open
            && $this->game 
            && $this->room->activePlayers->count() < $this->room->parameters->players_count 
            && $this->game->created_at->lt(Carbon::now()->subSeconds((int) config('multiplayer-blackjack.cancel_threshold'))); 
    }
}
