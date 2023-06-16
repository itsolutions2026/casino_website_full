<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   TronWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Packages\Payments\Services\Api\TronApi;

class TronWithdrawalService extends CryptoWithdrawalService
{
    protected function makeApi()
    {
        return new TronApi();
    }

    public function getPaymentCurrency(): string
    {
        return 'TRX';
    }
}
