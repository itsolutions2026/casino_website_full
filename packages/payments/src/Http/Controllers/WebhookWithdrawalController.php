<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WebhookWithdrawalController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\WithdrawalMethod;
use Packages\Payments\Services\CanReceiveWebhook;
use Packages\Payments\Services\WithdrawalService;

class WebhookWithdrawalController extends Controller
{
    public function process(Request $request, WithdrawalMethod $withdrawalMethod)
    {
        try {
            $withdrawalService = WithdrawalService::make($withdrawalMethod, $request);
            if ($withdrawalService instanceof CanReceiveWebhook) {
                return $withdrawalService->processWebhook() ? $withdrawalService->httpSuccess() : $withdrawalService->httpError();
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
        }

        abort(404);
    }
}
