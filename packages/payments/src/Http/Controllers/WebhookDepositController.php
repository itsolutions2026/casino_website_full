<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WebhookDepositController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Packages\Payments\Models\DepositMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Services\CanReceiveWebhook;
use Packages\Payments\Services\CanReceiveRedirect;
use Packages\Payments\Services\DepositService;

class WebhookDepositController extends Controller
{
    public function complete(Request $request, DepositMethod $depositMethod)
    {
        try {
            $depositService = DepositService::make($depositMethod, $request);
            if ($depositService instanceof CanReceiveRedirect) {
                return $depositService->complete();
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
        }

        abort(404);
    }

    public function cancel(Request $request, DepositMethod $depositMethod)
    {
        try {
            $depositService = DepositService::make($depositMethod, $request);
            if ($depositService instanceof CanReceiveRedirect) {
                return $depositService->cancel();
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
        }

        abort(404);
    }

    public function process(Request $request, DepositMethod $depositMethod)
    {
        try {
            $depositService = DepositService::make($depositMethod, $request);
            if ($depositService instanceof CanReceiveWebhook) {
                return $depositService->processWebhook() ? $depositService->httpSuccess() : $depositService->httpError();
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            Log::error($e->getTraceAsString());
        }

        abort(404);
    }
}
