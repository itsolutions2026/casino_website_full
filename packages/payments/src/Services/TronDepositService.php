<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   TronDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;


use Packages\Payments\Services\Api\TronApi;

class TronDepositService extends CryptoDepositService
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
