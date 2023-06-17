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

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Packages\HeadsOrTails\Http\Controllers\Admin\SettingController;
use Packages\HeadsOrTails\Http\Controllers\GameController;


Route::name('games.heads-or-tails.')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('api/games/heads-or-tails/play', [GameController::class, 'play'])->name('play');
    });


Route::prefix('api/admin')
    ->middleware(['api', 'user', 'role:' . User::ROLE_ADMIN])
    ->group(function () {
        Route::post('settings/heads-or-tails/image', [SettingController::class, 'uploadImage']);
    });
