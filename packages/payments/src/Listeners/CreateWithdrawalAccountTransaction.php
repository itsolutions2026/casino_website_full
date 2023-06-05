<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CreateWithdrawalAccountTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Listeners;

use App\Facades\AccountTransaction;
use Packages\Payments\Events\WithdrawalCreated;

class CreateWithdrawalAccountTransaction
{
    
    public function __construct()
    {
        
    }

    
    public function handle(WithdrawalCreated $event)
    {
        AccountTransaction::create($event->withdrawal->account, $event->withdrawal, -$event->withdrawal->amount);
    }
}
