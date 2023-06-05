<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CancelDeposits.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;

class CancelDeposits extends Command
{
    
    protected $signature = 'deposit:cancel';

    
    protected $description = 'Cancel deposits that have not been completed within the given time';

    
    public function handle()
    {
        $days = (int) config('payments.deposit_auto_cancel_days');

        Deposit::createdOrPending()
            ->where('created_at', '<', Carbon::now()->subDays($days))
            ->get()
            ->each(function (Deposit $deposit) {
                info(sprintf('Auto cancel deposit %d', $deposit->id));

                try {
                    DepositRepository::cancel($deposit);
                } catch (\Throwable $e) {
                    Log::error(sprintf('Error when cancelling deposit #%d: %s', $deposit->id, $e->getMessage()));
                    Log::error($e->getTraceAsString());
                }
            });

        return 0;
    }
}
