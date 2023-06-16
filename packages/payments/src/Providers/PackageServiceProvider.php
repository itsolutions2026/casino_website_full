<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PackageServiceProvider.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Providers;

use App\Providers\PackageServiceProvider as DefaultPackageServiceProvider;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\Route;
use Packages\Payments\Console\Commands\CancelDeposits;
use Packages\Payments\Console\Commands\CompleteDeposits;
use Packages\Payments\Console\Commands\CompleteWithdrawals;
use Packages\Payments\Console\Commands\ProcessWithdrawals;
use Packages\Payments\Helpers\Blockchain;
use Packages\Payments\Http\Requests\StoreBlockchainAddress;

class PackageServiceProvider extends DefaultPackageServiceProvider
{
    protected $packageId = 'payments';

    
    public function register()
    {
        parent::register();

        $this->app->register(EventServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);

        $this->app->bind(StoreBlockchainAddress::class, function () {
                $getClass = function ($blockchainId) {
                    $class = Blockchain::getStoreAddressRequestClassById($blockchainId);

                    return class_exists($class) && get_parent_class($class) == StoreBlockchainAddress::class
                        ? $this->app->make($class)
                        : NULL;
                };

            return Route::currentRouteName() == 'payments.blockchains.addresses.store'
                ? $getClass(request()->segment(3))
                : NULL;
        });
    }

    
    public function boot()
    {
        parent::boot();

        
        $this->commands([
            CompleteDeposits::class,
            CancelDeposits::class,
            ProcessWithdrawals::class,
            CompleteWithdrawals::class
        ]);

        
        if ($this->app->runningInConsole()) {
            $this->app->booted(function () {
                $schedule = $this->app->make(Schedule::class);
                $schedule->command(CompleteDeposits::class)->everyMinute();
                $schedule->command(CancelDeposits::class)->daily();
                $schedule->command(ProcessWithdrawals::class)->everyFiveMinutes();
                $schedule->command(CompleteWithdrawals::class)->everyFiveMinutes();
            });
        }
    }
}
