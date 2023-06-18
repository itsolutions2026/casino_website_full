<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CompleteWithdrawals.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\PaymentGatewayMethod;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Services\CryptoWithdrawalService;
use Packages\Payments\Services\WithdrawalService;

class CompleteWithdrawals extends Command
{
    
    protected $signature = 'withdrawal:complete';

    
    protected $description = 'Complete pending withdrawals';

    
    public function __construct()
    {
        parent::__construct();
    }

    
    public function handle()
    {
        $this->completeCryptoWithdrawals();

        return 0;
    }

    protected function completeCryptoWithdrawals()
    {
        $methods = ['evm_coin', 'evm_token', 'ripple_coin'];

        Withdrawal::pending()
            ->with('method', 'method.paymentMethod')
            ->whereHas('method.paymentMethod', function ($query) use ($methods) {
                $query->whereIn('code', $methods)->where('type', PaymentGatewayMethod::TYPE_OUT);
            })
            ->get()
            ->each(function (Withdrawal $withdrawal) {
                try {
                    $ds = WithdrawalService::make($withdrawal->method, $withdrawal);
                    if ($ds instanceof CryptoWithdrawalService) {
                        $ds->complete();
                    }
                } catch (\Throwable $e) {
                    Log::error(sprintf('Error when completing withdrawal %d: %s', $withdrawal->id, $e->getMessage()));
                    Log::error($e->getTraceAsString());
                }
            });
    }
}
