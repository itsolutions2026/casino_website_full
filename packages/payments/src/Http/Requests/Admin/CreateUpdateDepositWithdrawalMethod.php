<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CreateUpdateDepositWithdrawalMethod.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Route;
use Packages\Payments\Models\PaymentGatewayMethod;
use Packages\Payments\Rules\DepositWithdrawalMethodCanBeEnabled;

class CreateUpdateDepositWithdrawalMethod extends FormRequest
{
    
    public function authorize()
    {
        return TRUE;
    }

    
    public function rules()
    {
        $paymentMethod = in_array(Route::currentRouteName(), ['admin.deposit-methods.update', 'admin.withdrawal-methods.update'])
            
            ? $this->{$this->route()->parameterNames[0]}->paymentMethod
            
            : ($this->payment_method_id
                ? PaymentGatewayMethod::find($this->payment_method_id)
                : NULL);

        $rules = [
            'name' => 'required|max:100',
            'currency'  => ['required'],
            'rate' => 'numeric|min:0.00000001',
            'decimal_places' => 'nullable|integer|min:0|max:8',
            'enabled' => [
                'required',
                'integer',
                'in:0,1'
            ]
        ];

        if ($paymentMethod) {
            if (!empty($paymentMethod->allowed_currencies)) {
                $rules['currency'][] = 'in:' . implode(',', $paymentMethod->allowed_currencies);
            } elseif ($paymentMethod->gateway->code == 'cryptapi' && isset($this->get('payment_method_parameters')['ticker'])) {
                $rules['currency'][] = 'in:' . implode(',', array_merge([$this->get('payment_method_parameters')['ticker']], config('payments.cryptapi.supported_fiat_currencies')));
            }

            if ($this->enabled) {
                $rules['enabled'][] = new DepositWithdrawalMethodCanBeEnabled($paymentMethod);
            }

            
            if ($paymentMethod) {
                collect($paymentMethod->parameters)->each(function ($parameter) use (&$rules) {
                    if ($parameter->validation && (!isset($parameter->visible_if) || !!$this->get('payment_method_parameters')[$parameter->visible_if])) {
                        $rules['payment_method_parameters.' . $parameter->id] = $parameter->validation;
                    }
                });
            }
        }

        return $rules;
    }
}
