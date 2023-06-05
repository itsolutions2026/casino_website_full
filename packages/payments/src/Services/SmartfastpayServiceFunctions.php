<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SmartfastpayServiceFunctions.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Packages\Payments\Services\Api\SmartfastpayApi;

trait SmartfastpayServiceFunctions
{
    protected function makeApi()
    {
        return new SmartfastpayApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function httpSuccess(): Response
    {
        return response()->make('SUCCESS', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }
}
