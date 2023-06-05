<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   ProcessWithdrawals.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Services\CanSendTransaction;
use Packages\Payments\Services\WithdrawalService;

class ProcessWithdrawals extends Command
{
    
    protected $signature = 'withdrawal:process';

    
    protected $description = 'Send withdrawals to an external API for processing';

    
    public function __construct()
    {
        parent::__construct();
    }

    
    public function handle()
    {
        Withdrawal::pendingAutoProcess()
            ->get()
            ->each(function (Withdrawal $withdrawal) {
                try {
                    info(sprintf('Process auto withdrawal %d, %.2f credits (%f %s)', $withdrawal->id, $withdrawal->amount, $withdrawal->payment_amount, $withdrawal->payment_currency));
                    $ws = WithdrawalService::make($withdrawal->method, $withdrawal);
                    if ($ws instanceof CanSendTransaction) {
                        $limit = intval($withdrawal->method->payment_method_parameters->limit ?? 0);
                        if ($limit == 0 || $withdrawal->amount <= $limit) {
                            $ws->send();
                        } else {
                            info(sprintf('Skip withdrawal %d (amount %f > limit %d)', $withdrawal->id, $withdrawal->amount, $limit));
                        }
                    }
                } catch (\Throwable $e) {
                    Log::error(sprintf('Error when sending withdrawal #%d: %s', $withdrawal->id, $e->getMessage()));
                    Log::error($e->getTraceAsString());
                }
            });

        return 0;
    }
}
