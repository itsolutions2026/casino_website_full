<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   GameController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HeadsOrTails\Http\Controllers;

use App\Http\Controllers\Controller;
use Packages\HeadsOrTails\Http\Requests\Play;
use Packages\HeadsOrTails\Services\GameService;

class GameController extends Controller
{
    public function play(Play $request, GameService $gameService)
    {
        return $gameService
            ->loadProvablyFairGame($request->hash)
            ->play($request->only(['bet', 'toss_bet']))
            ->getGame();
    }
}
