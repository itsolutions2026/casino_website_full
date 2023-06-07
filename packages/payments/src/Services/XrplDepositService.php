<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   XrplDepositService.php
 *
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
 */

namespace Packages\Payments\Services;

use Illuminate\Support\Facades\Log;
use Packages\Payments\Services\Api\XrplApi;

class XrplDepositService extends CryptoDepositService
{
    protected function makeApi()
    {

        return new XrplApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return 'XRP';
    }

    public function isToken()
    {
        return false;
    }
}
