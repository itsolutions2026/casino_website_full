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

use Packages\HorseRacing\Http\Controllers\GameController;


Route::name('games.horse-racing.')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('api/games/horse-racing/play', [GameController::class, 'play'])->name('play');
    });
