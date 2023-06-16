<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EasywireServiceFunctions.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Packages\Payments\Services\Api\EasywireApi;

trait EasywireServiceFunctions
{
    protected function makeApi()
    {
        return new EasywireApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }
}
