<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StoreWithdrawal.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

use App\Rules\BalanceIsSufficient;
use Packages\Payments\Rules\DepositAmountIsSufficient;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Packages\Payments\Rules\WithdrawalDoesNotExceedDailyLimit;
use Packages\Payments\Rules\WithdrawalDoesNotExceedMonthlyLimit;
use Packages\Payments\Rules\WithdrawalDoesNotExceedProfit;
use Packages\Payments\Rules\WithdrawalDoesNotExceedWeeklyLimit;
use Packages\Payments\Services\CanFetchPaymentCurrencies;
use Packages\Payments\Services\WithdrawalService;

class StoreWithdrawal extends FormRequest
{
    
    public function authorize()
    {
        
        return $this->withdrawalMethod->enabled;
    }

    
    public function rules(Request $request)
    {
        $withdrawalMethod = $this->withdrawalMethod;
        $paymentMethod = $withdrawalMethod->paymentMethod;

        $rules = [
            'amount' => [
                'required',
                'numeric',
                'min:' . $withdrawalMethod->min_amount,
                'max:' . $withdrawalMethod->max_amount,
            ]
        ];

        
        if (!empty($withdrawalMethod->parameters)) {
            $rules['parameters'] = 'required|array';

            
            foreach ($withdrawalMethod->parameters as $parameter) {
                if ($parameter->validation) {
                    $rules['parameters.' . $parameter->id] = $parameter->validation;
                }
            }
        }

        
        if ($paymentMethod) {
            
            foreach ($paymentMethod->input_parameters as $parameter) {
                if ($parameter->validation) {
                    $rules['parameters.' . $parameter->id] = $parameter->validation;
                }
            }

            $withdrawalService = WithdrawalService::make($withdrawalMethod, $this);

            
            if ($withdrawalService instanceof CanFetchPaymentCurrencies) {
                $rules['payment_currency'] = 'required|in:' . $withdrawalService->fetchPaymentCurrencies()->keys()->implode(',');
            }
        }

        return $rules;
    }

    public function withValidator($validator)
    {
        $user = $this->user();
        $amount = $this->amount;

        
        $validator->after(function ($validator) use ($user, $amount) {
            $rules = [
                new BalanceIsSufficient($user, $amount),
                new DepositAmountIsSufficient($user),
                new WithdrawalDoesNotExceedProfit($user, $amount),
                new WithdrawalDoesNotExceedDailyLimit($user, $amount),
                new WithdrawalDoesNotExceedWeeklyLimit($user, $amount),
                new WithdrawalDoesNotExceedMonthlyLimit($user, $amount),
            ];

            foreach ($rules as $rule) {
                if (!$rule->passes()) {
                    $validator->errors()->add('amount', $rule->message());
                }
            }
        });
    }
}
