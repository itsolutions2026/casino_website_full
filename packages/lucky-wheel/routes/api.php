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

use Packages\LuckyWheel\Http\Controllers\GameController;


Route::name('games.lucky-wheel.')
    ->prefix('api')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('games/lucky-wheel/play', [GameController::class, 'play'])->name('play');
    });
