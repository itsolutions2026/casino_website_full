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

namespace Packages\Payments\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Packages\Payments\Helpers\Queries\Admin\DepositQuery;
use Packages\Payments\Http\Requests\Admin\ChangeDepositStatus;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;
use Packages\Payments\Services\CanFetchTransaction;
use Packages\Payments\Services\DepositService;

class DepositController extends Controller
{
    public function index(DepositQuery $query)
    {
        $items = $query
            ->get()
            ->map(function ($deposit) {
                $deposit->account->user->makeVisible('referrer');
                $deposit->account->user->append(
                    'two_factor_auth_enabled',
                    'two_factor_auth_passed',
                    'is_admin',
                    'is_bot',
                    'is_active'
                );
                $deposit->append('methods');
                return $deposit;
            });

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(Deposit $deposit)
    {
        return [
            'deposit' => $deposit
                ->load('account.user', 'method')
                ->append('methods')
                ->makeVisible(['response', 'parameters'])
        ];
    }

    public function transaction(Deposit $deposit, Request $request)
    {
        abort_if(!$deposit->external_id || !$deposit->method->paymentMethod, 404);

        $depositService = DepositService::make($deposit->method, $request);

        abort_if(!$depositService instanceof CanFetchTransaction, 404);

        $cacheKey = 'payments.deposits.' . $deposit->id . '.transaction';

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $data = $depositService->fetchTransaction($deposit->external_id);
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }

    public function cancel(ChangeDepositStatus $request, Deposit $deposit)
    {
        DepositRepository::cancel($deposit);

        return $this->successResponse(__('Deposit is rejected.'));
    }

    public function complete(ChangeDepositStatus $request, Deposit $deposit)
    {
        DepositRepository::complete($deposit);

        return $this->successResponse(__('Deposit is completed.'));
    }
}
