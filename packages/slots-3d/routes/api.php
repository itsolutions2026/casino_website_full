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
use Packages\Slots3D\Http\Controllers\GameController;


Route::name('games.slots-3d.')
    ->prefix('api')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        Route::post('games/slots-3d/play', [GameController::class, 'play'])->name('play');
    });

