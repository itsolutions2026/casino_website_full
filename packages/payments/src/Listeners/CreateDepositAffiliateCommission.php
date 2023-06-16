<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CreateDepositAffiliateCommission.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Listeners;

use App\Models\AffiliateCommission;
use App\Services\AffiliateService;
use Packages\Payments\Events\DepositCompleted;

class CreateDepositAffiliateCommission
{
    
    public function __construct()
    {
        
    }

    
    public function handle(DepositCompleted $event)
    {
        $deposit = $event->deposit;

        $affiliateService = new AffiliateService($deposit->account);

        $affiliateService->createCommissions(
            $deposit,
            AffiliateCommission::TYPE_DEPOSIT
        );
    }
}
