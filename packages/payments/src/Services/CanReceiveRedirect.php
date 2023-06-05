<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CanReceiveRedirect.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Http\RedirectResponse;

interface CanReceiveRedirect
{
    public function complete(): RedirectResponse;

    public function cancel(): RedirectResponse;
}
