<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   api.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Packages\CasinoHoldem\Http\Controllers\GameController;


Route::name('games.casino-holdem.')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('api/games/casino-holdem/play', [GameController::class, 'play'])->name('play');
        Route::post('api/games/casino-holdem/fold', [GameController::class, 'fold'])->name('fold');
        Route::post('api/games/casino-holdem/call', [GameController::class, 'call'])->name('call');
    });
