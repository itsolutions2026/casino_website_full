<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Stand.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\MultiplayerBlackjack\Http\Requests;

use App\Http\Requests\UpdateMultiplayerGame;

class Stand extends UpdateMultiplayerGame
{
    public function authorize()
    {
        
        if (!parent::authorize()) {
            return FALSE;
        }

        $isAuthorized = FALSE;
        $user = $this->user();
        $gameable = $this->game->gameable;

        if ($gameable && $gameable->hands->has($user->id)) {
            $hand = $gameable->hands->get($user->id);

            $time = time();
            if ($hand['action_start'] <= $time && $time <= $hand['action_end'] + 1) {
                $isAuthorized = TRUE;
            }
        }

        return $isAuthorized;
    }
}
