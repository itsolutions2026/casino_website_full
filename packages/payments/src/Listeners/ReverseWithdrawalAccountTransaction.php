<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   ReverseWithdrawalAccountTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Listeners;

use App\Facades\AccountTransaction;
use Packages\Payments\Events\WithdrawalCancelled;

class ReverseWithdrawalAccountTransaction
{
    
    public function __construct()
    {
        
    }

    
    public function handle(WithdrawalCancelled $event)
    {
        AccountTransaction::create($event->withdrawal->account, $event->withdrawal, $event->withdrawal->amount);
    }
}
