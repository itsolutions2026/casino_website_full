<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanReceiveWebhook.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Http\Response;

interface CanReceiveWebhook
{
    public function processWebhook(): bool;

    public function httpSuccess(): Response;

    public function httpError(): Response;
}
