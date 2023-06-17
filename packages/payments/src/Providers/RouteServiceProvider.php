<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   RouteServiceProvider.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Packages\Payments\Helpers\Blockchain;
use Packages\Payments\Models\BlockchainAddress;

class RouteServiceProvider extends ServiceProvider
{
    
    public function boot()
    {
        Route::bind('blockchainAddress', function ($blockchainAddress) {
            $model = Blockchain::getAddressModelClassById(request()->segment(3));

            return class_exists($model) && get_parent_class($model) == BlockchainAddress::class
                ? $model::findOrFail($blockchainAddress)
                : abort(404);
        });
    }
}
