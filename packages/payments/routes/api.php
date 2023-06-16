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
use Packages\Payments\Http\Controllers\Admin\DashboardController;
use Packages\Payments\Http\Controllers\Admin\DepositController as AdminDepositController;
use Packages\Payments\Http\Controllers\Admin\DepositMethodController as AdminDepositMethodController;
use Packages\Payments\Http\Controllers\Admin\PaymentGatewayController;
use Packages\Payments\Http\Controllers\Admin\WithdrawalController as AdminWithdrawalController;
use Packages\Payments\Http\Controllers\Admin\WithdrawalMethodController as AdminWithdrawalMethodController;
use Packages\Payments\Http\Controllers\DepositController;
use Packages\Payments\Http\Controllers\DepositMethodController;
use Packages\Payments\Http\Controllers\EvmAddressController;
use Packages\Payments\Http\Controllers\SolanaAddressController;
use Packages\Payments\Http\Controllers\TronAddressController;
use Packages\Payments\Http\Controllers\WebhookDepositController;
use Packages\Payments\Http\Controllers\WebhookWithdrawalController;
use Packages\Payments\Http\Controllers\WithdrawalController;
use Packages\Payments\Http\Controllers\WithdrawalMethodController;

Route::name('payments.')
    ->prefix('api')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'last_seen'])
    ->group(function () {
        
        Route::get('deposits', [DepositController::class, 'index']);
        Route::get('deposits/{deposit}', [DepositController::class, 'show']);
        Route::post('deposits/methods/{depositMethod}', [DepositController::class, 'store'])->middleware('concurrent');
        Route::patch('deposits/methods/{depositMethod}/{deposit}', [DepositController::class, 'update'])->middleware('concurrent');
        
        Route::get('withdrawals', [WithdrawalController::class, 'index']);
        Route::post('withdrawals/methods/{withdrawalMethod}', [WithdrawalController::class, 'store'])->middleware('concurrent');
        
        Route::get('deposit-methods', [DepositMethodController::class, 'index']);
        
        Route::get('withdrawal-methods', [WithdrawalMethodController::class, 'index']);
        
        collect([
                'evm' => EvmAddressController::class,
                'tron' => TronAddressController::class,
                'solana' => SolanaAddressController::class
            ])
            ->each(function ($controller, $blockchain) {
                Route::get('blockchains/' . $blockchain . '/addresses', [$controller, 'index']);
                Route::post('blockchains/' . $blockchain . '/addresses', [$controller, 'store'])->middleware('concurrent')->name('blockchains.addresses.store');
                Route::post('blockchains/' . $blockchain . '/addresses/{blockchainAddress}/verify', [$controller, 'verify'])->middleware('concurrent');
            });
    });

Route::name('payments.webhooks.')
    ->prefix('api/webhooks')
    ->middleware(['api', 'log.request'])
    ->group(function () {
        

        
        Route::get('deposit-methods/{depositMethod}/complete', [WebhookDepositController::class, 'complete']);
        Route::get('deposit-methods/{depositMethod}/cancel', [WebhookDepositController::class, 'cancel']);
        Route::post('deposit-methods/{depositMethod}/ipn', [WebhookDepositController::class, 'process']);
        Route::post('withdrawal-methods/{withdrawalMethod}/ipn', [WebhookWithdrawalController::class, 'process']);
        

        Route::get('deposits/{depositMethod}/complete', [WebhookDepositController::class, 'complete'])->name('deposits.complete');
        Route::get('deposits/{depositMethod}/cancel', [WebhookDepositController::class, 'cancel'])->name('deposits.cancel');
        Route::post('deposits/{depositMethod}', [WebhookDepositController::class, 'process'])->name('deposits.process');
        Route::post('withdrawals/{withdrawalMethod}', [WebhookWithdrawalController::class, 'process'])->name('withdrawals.process');
    });


Route::namespace('Packages\Payments\Http\Controllers\Admin')
    ->name('admin.')
    ->prefix('api/admin')
    ->middleware(['api', 'auth:sanctum', 'verified', 'active', '2fa', 'role:' . App\Models\User::ROLE_ADMIN, 'permissions', 'last_seen'])
    ->group(function () {
        
        Route::get('dashboard/payments/data/{key}', [DashboardController::class, 'getData']);
        
        Route::get('deposits', [AdminDepositController::class, 'index']);
        Route::get('deposits/{deposit}', [AdminDepositController::class, 'show']);
        Route::get('deposits/{deposit}/transaction', [AdminDepositController::class, 'transaction']);
        Route::post('deposits/{deposit}/cancel', [AdminDepositController::class, 'cancel']);
        Route::post('deposits/{deposit}/complete', [AdminDepositController::class, 'complete']);
        
        Route::get('withdrawals', [AdminWithdrawalController::class, 'index']);
        Route::get('withdrawals/{withdrawal}', [AdminWithdrawalController::class, 'show']);
        Route::get('withdrawals/{withdrawal}/transaction', [AdminWithdrawalController::class, 'transaction']);
        Route::post('withdrawals/{withdrawal}/send', [AdminWithdrawalController::class, 'send']);
        Route::post('withdrawals/{withdrawal}/cancel', [AdminWithdrawalController::class, 'cancel']);
        Route::post('withdrawals/{withdrawal}/complete', [AdminWithdrawalController::class, 'complete']);
        
        Route::get('payment-gateways', [PaymentGatewayController::class, 'index']);
        
        Route::get('deposit-methods', [AdminDepositMethodController::class, 'index']);
        Route::post('deposit-methods', [AdminDepositMethodController::class, 'store']);
        Route::get('deposit-methods/{depositMethod}', [AdminDepositMethodController::class, 'show']);
        Route::get('deposit-methods/{depositMethod}/info', [AdminDepositMethodController::class, 'info']);
        Route::get('deposit-methods/{depositMethod}/balance', [AdminDepositMethodController::class, 'balance']);
        Route::patch('deposit-methods/{depositMethod}', [AdminDepositMethodController::class, 'update'])->name('deposit-methods.update');
        Route::delete('deposit-methods/{depositMethod}', [AdminDepositMethodController::class, 'destroy']);
        
        Route::get('withdrawal-methods', [AdminWithdrawalMethodController::class, 'index']);
        Route::post('withdrawal-methods', [AdminWithdrawalMethodController::class, 'store']);
        Route::get('withdrawal-methods/{withdrawalMethod}', [AdminWithdrawalMethodController::class, 'show']);
        Route::get('withdrawal-methods/{withdrawalMethod}/info', [AdminWithdrawalMethodController::class, 'info']);
        Route::get('withdrawal-methods/{withdrawalMethod}/balance', [AdminWithdrawalMethodController::class, 'balance']);
        Route::patch('withdrawal-methods/{withdrawalMethod}', [AdminWithdrawalMethodController::class, 'update'])->name('withdrawal-methods.update');
        Route::delete('withdrawal-methods/{withdrawalMethod}', [AdminWithdrawalMethodController::class, 'destroy']);
    });
