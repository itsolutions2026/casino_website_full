<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   FreekassaServiceFunctions.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Support\Collection;
use Packages\Payments\Services\Api\FreekassaApi;

trait FreekassaServiceFunctions
{
    protected function makeApi()
    {
        return new FreekassaApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function fetchBalances(): Collection
    {
        return $this->api->fetchBalances()
            ->mapWithKeys(function ($item) {
                return [$item->currency => $item->value];
            });
    }
}
