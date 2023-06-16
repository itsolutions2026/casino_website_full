<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Helpers\Queries\WithdrawalQuery;
use Packages\Payments\Http\Requests\StoreWithdrawal;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Models\WithdrawalMethod;
use Illuminate\Http\Request;
use Packages\Payments\Repositories\WithdrawalRepository;
use Packages\Payments\Services\CanSendTransaction;
use Packages\Payments\Services\WithdrawalService;

class WithdrawalController extends Controller
{
    public function index(Request $request, WithdrawalQuery $query)
    {
        $account = $request->user()->account;

        $items = $query->addWhere(['account_id', '=', $account->id])->get();

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }
    
    public function store(StoreWithdrawal $request, WithdrawalMethod $withdrawalMethod)
    {
        
        if ($withdrawalMethod->paymentMethod) {
            try {
                $withdrawalService = WithdrawalService::make($withdrawalMethod, $request);
                $withdraw = $withdrawalService->create();
                if ($withdrawalService instanceof CanSendTransaction) {
                    $withdrawalService = WithdrawalService::make($withdrawalMethod, $withdraw);
                    $limit = intval($withdraw->method->payment_method_parameters->limit ?? 0);
                    if ($limit == 0 || $withdraw->amount <= $limit) {
                        $withdrawalService->send();
                    } else {
                        info(sprintf('Skip withdrawal %d (amount %f > limit %d)', $withdraw->id, $withdraw->amount, $limit));
                    }
                }

            } catch (\Throwable $e) {
                Log::error($e->getMessage());
                Log::error($e->getTraceAsString());

                return $this->errorResponse($e->getMessage());
            }
            
        } else {
            WithdrawalRepository::create([
                'account'           => $request->user()->account,
                'method'            => $withdrawalMethod,
                'amount'            => $request->amount,
                'payment_amount'    => round( $request->amount / $withdrawalMethod->rate, $withdrawalMethod->decimal_places),
                'payment_currency'  => $withdrawalMethod->currency,
                'parameters'        => $request->parameters,
            ]);
        }

        return $this->successResponse(__('Withdrawal request successfully submitted.'));
    }
}
