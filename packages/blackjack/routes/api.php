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

use Illuminate\Support\Facades\Route;
use Packages\Blackjack\Http\Controllers\GameController;


Route::name('games.blackjack.')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('api/games/blackjack/play', [GameController::class, 'play'])->name('play');
        Route::post('api/games/blackjack/insurance', [GameController::class, 'insurance'])->name('insurance');
        Route::post('api/games/blackjack/hit', [GameController::class, 'hit'])->name('hit');
        Route::post('api/games/blackjack/double', [GameController::class, 'double'])->name('double');
        Route::post('api/games/blackjack/stand', [GameController::class, 'stand'])->name('stand');
        Route::post('api/games/blackjack/split', [GameController::class, 'split'])->name('split');
        Route::post('api/games/blackjack/split/hit', [GameController::class, 'splitHit'])->name('split-hit');
        Route::post('api/games/blackjack/split/stand', [GameController::class, 'splitStand'])->name('split-stand');
    });
