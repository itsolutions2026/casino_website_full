<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CreateDepositBonus.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Listeners;

use App\Models\Bonus;
use App\Repositories\BonusRepository;
use Packages\Payments\Events\DepositCompleted;
use Packages\Payments\Models\Deposit;

class CreateDepositBonus
{
    
    public function __construct()
    {
        
    }

    
    public function handle(DepositCompleted $event)
    {
        $deposit = $event->deposit;
        $depositsCount = Deposit::where('account_id', $deposit->account_id)->completed()->get()->count();
        $config = $depositsCount == 1 ? config('settings.bonuses.deposit.first') : config('settings.bonuses.deposit.regular');

        if ($config['pct'] > 0 && $deposit->amount >= $config['threshold']) {
            BonusRepository::create(
                $deposit->account,
                Bonus::TYPE_DEPOSIT,
                min(round($deposit->amount * $config['pct'] / 100), $config['max'])
            );
        }
    }
}
