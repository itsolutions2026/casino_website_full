<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SolanaDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Packages\Payments\Services\Api\SolanaApi;

class SolanaDepositService extends CryptoDepositService
{
    protected function makeApi()
    {
        return new SolanaApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return 'SOL';
    }
}
