<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Play.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\MultiplayerBlackjack\Http\Requests;

use App\Http\Requests\PlayMultiroomMultiplayerGame;
use Packages\MultiplayerBlackjack\Models\MultiplayerBlackjack;

class Play extends PlayMultiroomMultiplayerGame
{
    protected $gamePackageId = 'multiplayer-blackjack';
    protected $gameableClass = MultiplayerBlackjack::class;
}
