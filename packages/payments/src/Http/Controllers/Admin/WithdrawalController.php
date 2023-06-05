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

namespace Packages\Payments\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Packages\Payments\Helpers\Queries\Admin\WithdrawalQuery;
use Packages\Payments\Http\Requests\Admin\ChangeWithdrawalStatus;
use Packages\Payments\Http\Requests\Admin\SendWithdrawal;
use Packages\Payments\Models\Withdrawal;
use Illuminate\Http\Request;
use Packages\Payments\Repositories\WithdrawalRepository;
use Packages\Payments\Services\CanFetchTransaction;
use Packages\Payments\Services\WithdrawalService;

class WithdrawalController extends Controller
{
    public function index(WithdrawalQuery $query)
    {
        $items = $query
            ->get()
            ->map(function ($withdrawal) {
                $withdrawal->account->user->makeVisible('referrer');
                $withdrawal->account->user->append(
                    'two_factor_auth_enabled',
                    'two_factor_auth_passed',
                    'is_admin',
                    'is_bot',
                    'is_active'
                );
                $withdrawal->append('methods');
                return $withdrawal;
            });

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(Withdrawal $withdrawal)
    {
        $withdrawal
            ->load('account.user', 'method', 'method.paymentMethod', 'method.paymentMethod.gateway')
            ->append('methods')
            ->makeVisible(['response', 'parameters']);

        $withdrawal->method->makeVisible('payment_method_parameters');

        return compact('withdrawal');
    }

    public function transaction(Withdrawal $withdrawal, Request $request)
    {
        abort_if(!$withdrawal->external_id || !$withdrawal->method->paymentMethod, 404);

        $withdrawalService = WithdrawalService::make($withdrawal->method, $request);

        abort_if(!$withdrawalService instanceof CanFetchTransaction, 404);

        $cacheKey = 'payments.withdrawals.' . $withdrawal->id . '.transaction';

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $data = $withdrawalService->fetchTransaction($withdrawal->external_id);
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }

    public function send(SendWithdrawal $request, Withdrawal $withdrawal)
    {
        abort_if(!$withdrawal->method->paymentMethod, 404);

        $withdrawalService = WithdrawalService::make($withdrawal->method, $withdrawal);
        $withdrawalService->send();

        return $this->successResponse(__('Withdrawal transaction is created.'));
    }

    public function cancel(ChangeWithdrawalStatus $request, Withdrawal $withdrawal)
    {
        WithdrawalRepository::cancel($withdrawal);

        return $this->successResponse(__('Withdrawal is rejected.'));
    }

    public function complete(ChangeWithdrawalStatus $request, Withdrawal $withdrawal)
    {
        WithdrawalRepository::complete($withdrawal);

        return $this->successResponse(__('Withdrawal is completed.'));
    }
}
