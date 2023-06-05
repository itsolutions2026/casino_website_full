<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositMethodController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Packages\Payments\Helpers\Queries\DepositMethodQuery;
use Packages\Payments\Http\Requests\Admin\CreateUpdateDepositWithdrawalMethod;
use Packages\Payments\Models\DepositMethod;
use Packages\Payments\Services\DepositService;

class DepositMethodController extends Controller
{
    public function index(DepositMethodQuery $query)
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

    public function show(DepositMethod $depositMethod)
    {
        $method = $depositMethod
            ->loadMissing('paymentMethod', 'paymentMethod.gateway')
            ->makeVisible(['enabled', 'payment_method_parameters']);

        if ($method->paymentMethod) {
            $method->paymentMethod->makeVisible(['parameters', 'allowed_currencies']);
        }

        return $method;
    }

    public function store(CreateUpdateDepositWithdrawalMethod $request)
    {
        $depositMethod = new DepositMethod();
        $depositMethod->name = $request->name;
        $depositMethod->description = $request->description;
        $depositMethod->banner = $request->banner;
        $depositMethod->currency = $request->currency;
        $depositMethod->rate = $request->rate;
        $depositMethod->min_amount = $request->min_amount;
        $depositMethod->max_amount = $request->max_amount;
        $depositMethod->decimal_places = $request->decimal_places;
        $depositMethod->payment_method_parameters = $request->payment_method_parameters;
        $depositMethod->parameters = $request->parameters;
        $depositMethod->enabled = $request->enabled;

        if ($request->payment_method_id) {
            $depositMethod->paymentMethod()->associate($request->payment_method_id);
        }

        $depositMethod->save();

        return $this->successResponse(__('Deposit method successfully created.'));
    }

    public function update(CreateUpdateDepositWithdrawalMethod $request, DepositMethod $depositMethod)
    {
        $depositMethod->name = $request->name;
        $depositMethod->description = $request->description;
        $depositMethod->banner = $request->banner;
        $depositMethod->currency = $request->currency;
        $depositMethod->rate = $request->rate;
        $depositMethod->min_amount = $request->min_amount;
        $depositMethod->max_amount = $request->max_amount;
        $depositMethod->decimal_places = $request->decimal_places;
        $depositMethod->payment_method_parameters = $request->payment_method_parameters;
        $depositMethod->parameters = $request->parameters;
        $depositMethod->enabled = $request->enabled;
        $depositMethod->save();

        return $this->successResponse(__('Deposit method successfully updated.'));
    }

    public function destroy(DepositMethod $depositMethod)
    {
        $depositMethod->delete();

        return $this->successResponse(__('Deposit method successfully deleted.'));
    }

    public function info(DepositMethod $depositMethod)
    {
        abort_if(!$depositMethod->methods->has('info'), 404);

        $cacheKey = sprintf('payments.%s-methods.%d.info', 'deposit', $depositMethod->id);

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $depositService = DepositService::make($depositMethod, NULL);
            $data = $depositService->fetchAccountInfo();
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }

    public function balance(DepositMethod $depositMethod)
    {
        abort_if(!$depositMethod->methods->has('balance'), 404);

        $cacheKey = sprintf('payments.%s-methods.%d.balance', 'deposit', $depositMethod->id);

        
        $data = Cache::get($cacheKey);

        
        if (is_null($data)) {
            $depositService = DepositService::make($depositMethod, NULL);
            $data = $depositService->fetchBalances();
            Cache::put($cacheKey, $data, now()->addMinutes(5));
        }

        return $this->successResponse(['data' => $data]);
    }
}
