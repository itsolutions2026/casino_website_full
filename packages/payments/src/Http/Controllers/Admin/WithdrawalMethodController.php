<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalMethodController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Packages\Payments\Helpers\Queries\WithdrawalMethodQuery;
use Packages\Payments\Http\Requests\Admin\CreateUpdateDepositWithdrawalMethod;
use Packages\Payments\Models\WithdrawalMethod;
use Packages\Payments\Services\WithdrawalService;

class WithdrawalMethodController extends Controller
{
    public function index(WithdrawalMethodQuery $query)
    {
        $items = $query
            ->get()
            ->map
            ->append('status_title')
            ->map(function ($method) {
                $method->makeVisible('enabled');

                if ($method->paymentMethod) {
                    $method->paymentMethod->makeVisible(['parameters', 'allowed_currencies']);
                }
                return $method;
            });

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(WithdrawalMethod $withdrawalMethod)
    {
        $method = $withdrawalMethod
            ->loadMissing('paymentMethod', 'paymentMethod.gateway')
            ->makeVisible(['enabled', 'payment_method_parameters']);

        if ($method->paymentMethod) {
            $method->paymentMethod->makeVisible(['parameters', 'allowed_currencies']);
        }

        return $method;
    }

    public function store(CreateUpdateDepositWithdrawalMethod $request)
    {
        $withdrawalMethod = new WithdrawalMethod();
        $withdrawalMethod->name = $request->name;
        $withdrawalMethod->description = $request->description;
        $withdrawalMethod->banner = $request->banner;
        $withdrawalMethod->currency = $request->currency;
        $withdrawalMethod->rate = $request->rate;
        $withdrawalMethod->min_amount = $request->min_amount;
        $withdrawalMethod->max_amount = $request->max_amount;
        $withdrawalMethod->decimal_places = $request->decimal_places;
        $withdrawalMethod->payment_method_parameters = $request->payment_method_parameters;
        $withdrawalMethod->parameters = $request->parameters;
        $withdrawalMethod->enabled = $request->enabled;

        if ($request->payment_method_id) {
            $withdrawalMethod->paymentMethod()->associate($request->payment_method_id);
        }

        $withdrawalMethod->save();

        return $this->successResponse(__('Withdrawal method successfully created.'));
    }

    public function update(CreateUpdateDepositWithdrawalMethod $request, WithdrawalMethod $withdrawalMethod)
    {
        $withdrawalMethod->name = $request->name;
        $withdrawalMethod->description = $request->description;
        $withdrawalMethod->banner = $request->banner;
        $withdrawalMethod->currency = $request->currency;
        $withdrawalMethod->rate = $request->rate;
        $withdrawalMethod->min_amount = $request->min_amount;
        $withdrawalMethod->max_amount = $request->max_amount;
        $withdrawalMethod->decimal_places = $request->decimal_places;
        $withdrawalMethod->payment_method_parameters = $request->payment_method_parameters;
        $withdrawalMethod->parameters = $request->parameters;
        $withdrawalMethod->enabled = $request->enabled;
        $withdrawalMethod->save();

        return $this->successResponse(__('Withdrawal method successfully updated.'));
    }

    public function destroy(WithdrawalMethod $withdrawalMethod)
    {
        $withdrawalMethod->delete();

        return $this->successResponse(__('Withdrawal method successfully deleted.'));
    }

    public function info(WithdrawalMethod $withdrawalMethod)
    {
        abort_if(!$withdrawalMethod->methods->has('info'), 404);

        $cacheKey = sprintf('payments.%s-methods.%d.info', 'withdrawal', $withdrawalMethod->id);

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $depositService = WithdrawalService::make($withdrawalMethod, NULL);
            $data = $depositService->fetchAccountInfo();
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }

    public function balance(WithdrawalMethod $withdrawalMethod)
    {
        abort_if(!$withdrawalMethod->methods->has('balance'), 404);

        $cacheKey = sprintf('payments.%s-methods.%d.balance', 'withdrawal', $withdrawalMethod->id);

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $depositService = WithdrawalService::make($withdrawalMethod, NULL);
            $data = $depositService->fetchBalances();
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }
}
