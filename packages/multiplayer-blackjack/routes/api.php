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
use Packages\MultiplayerBlackjack\Http\Controllers\GameController;


Route::name('games.multiplayer-blackjack.')
    ->middleware(['api', 'user', 'room.lock'])
    ->group(function () {
        
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/play', [GameController::class, 'play'])->name('play');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/hit', [GameController::class, 'hit'])->name('hit');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/stand', [GameController::class, 'stand'])->name('stand');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/complete', [GameController::class, 'complete'])->name('complete');
        Route::post('api/games/multiplayer-blackjack/rooms/{room}/cancel', [GameController::class, 'cancel'])->name('cancel');
    });
