<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CreateDepositAccountTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Listeners;

use App\Facades\AccountTransaction;
use Packages\Payments\Events\DepositCompleted;

class CreateDepositAccountTransaction
{
    
    public function __construct()
    {
        
    }

    
    public function handle(DepositCompleted $event)
    {
        AccountTransaction::create($event->deposit->account, $event->deposit, $event->deposit->amount);
    }
}
