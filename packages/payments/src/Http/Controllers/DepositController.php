<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Packages\Payments\Helpers\Queries\DepositQuery;
use Packages\Payments\Http\Requests\StoreDeposit;
use Packages\Payments\Http\Requests\UpdateDeposit;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Models\DepositMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Services\Api\XrplApi;
use Packages\Payments\Services\CryptoDepositService;
use Packages\Payments\Services\DepositService;
use Packages\Payments\Repositories\DepositRepository;

class DepositController extends Controller
{
    
    public function index(Request $request, DepositQuery $query)
    {
        $account = $request->user()->account;

        $items = $query->addWhere(['account_id', '=', $account->id])->get();

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(Request $request, Deposit $deposit)
    {
        abort_if(
            $request->user()->account->id != $deposit->account_id
            || !($deposit->is_created || $deposit->is_completed)
            || !$deposit->method->paymentMethod
            || !in_array($deposit->method->paymentMethod->gateway->code, ['coinpayments', 'evm', 'tron', 'solana', 'xrpl', 'cryptapi', 'paytm', 'smartfastpay']),
            404
        );

        if ($deposit->method->paymentMethod->gateway->code == 'solana') {
            $deposit->method->makeVisible('payment_method_parameters');
        }

        return $deposit->makeVisible('parameters');
    }

    public function store(StoreDeposit $request, DepositMethod $depositMethod)
    {
        
        if ($depositMethod->paymentMethod) {
            try {
                $depositService = DepositService::make($depositMethod, $request);
                $deposit = $depositService->create();
                $redirectUrl = $depositService->getRedirectUrl();
                return $redirectUrl
                    ? $this->successResponse([
                        'redirect' => [
                            'url' => $redirectUrl,
                            'params' => ['id' => $deposit->id],
                            'external' => Str::of($redirectUrl)->startsWith('http')
                        ]
                    ])
                    : $this->successResponse();

            } catch (\Throwable $e) {
                Log::error($e->getMessage());
                Log::error($e->getTraceAsString());

                return $this->errorResponse($e->getMessage());
            }
        
        } else {
            DepositRepository::create([
                'account' => $request->user()->account,
                'method' => $depositMethod,
                'amount' => $request->amount,
                'payment_amount' => round($request->amount / $depositMethod->rate, !is_null($depositMethod->decimal_places) ? $depositMethod->decimal_places : 8),
                'payment_currency' => $depositMethod->currency,
                'parameters' => $request->parameters,
            ]);

            return $this->successResponse(__('Deposit is successfully created.'));
        }
    }

    public function update(UpdateDeposit $request, DepositMethod $depositMethod, Deposit $deposit)

    {
        $deposit->update([
            'external_id'   => $request->transaction_id,
            'status'        => Deposit::STATUS_PENDING
        ]);

        if ($depositMethod->paymentMethod) {
            $depositService = DepositService::make($depositMethod, $deposit);
            if ($depositService instanceof CryptoDepositService) {
                $depositService->complete();
            }
        }

        return $this->successResponse();
    }
}
