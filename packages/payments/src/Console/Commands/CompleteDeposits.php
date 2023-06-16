<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CompleteDeposits.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Services\DepositService;
use Packages\Payments\Services\CryptoDepositService;

class CompleteDeposits extends Command
{
    
    protected $signature = 'deposit:complete';

    
    protected $description = 'Complete pending deposits';

    
    public function handle()
    {
        $this->completeCryptoDeposits();

        return 0;
    }

    protected function completeCryptoDeposits()
    {
        Deposit::pendingStatusUpdate()->get()
            ->each(function ($deposit) {
                try {
                    info(sprintf('Complete deposit %d, %.8f %s (%s units) = %d credits', $deposit->id, $deposit->payment_amount, $deposit->payment_currency, $deposit->payment_amount_in_units, $deposit->amount));
                    $ds = DepositService::make($deposit->method, $deposit);
                    if ($ds instanceof CryptoDepositService) {
                        $ds->complete();
                    }
                } catch (\Throwable $e) {
                    Log::error(sprintf('Error when completing deposit #%d: %s', $deposit->id, $e->getMessage()));
                    Log::error($e->getTraceAsString());
                }
            });
    }
}
