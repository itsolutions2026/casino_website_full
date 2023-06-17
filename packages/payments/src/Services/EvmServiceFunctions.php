<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EvmServiceFunctions.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Packages\Payments\Services\Api\EvmApi;

trait EvmServiceFunctions
{
    protected function makeApi()
    {
        return new EvmApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return $this->isToken()
            ? $this->getMethodCurrency()
            : $this->getMethod()->payment_method_parameters->coin;
    }
}
