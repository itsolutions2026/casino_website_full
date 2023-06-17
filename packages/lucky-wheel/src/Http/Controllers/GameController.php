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

namespace Packages\LuckyWheel\Http\Controllers;

use App\Http\Controllers\Controller;
use Packages\LuckyWheel\Http\Requests\Play;
use Packages\LuckyWheel\Services\GameService;

class GameController extends Controller
{
    public function play(Play $request, GameService $gameService)
    {
        return $gameService
            ->loadProvablyFairGame($request->hash)
            ->play($request->only(['bet', 'variation']))
            ->getGame();
    }
}
