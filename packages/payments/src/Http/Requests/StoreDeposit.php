<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StoreDeposit.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Packages\Payments\Helpers\Blockchain;
use Packages\Payments\Rules\BlockchainAddressBalanceIsSufficient;
use Packages\Payments\Rules\BlockchainAddressConfirmed;
use Packages\Payments\Rules\AmountIsWithinLimits;
use Packages\Payments\Services\CryptoDepositService;
use Packages\Payments\Services\DepositService;
use Packages\Payments\Services\CanFetchPaymentCurrencies;
use Packages\Payments\Services\ShouldValidateAmount;

class StoreDeposit extends FormRequest
{
    
    public function authorize()
    {
        
        return $this->depositMethod->enabled;
    }

    
    public function rules()
    {
        $depositMethod = $this->depositMethod;
        $paymentMethod = $depositMethod->paymentMethod;

        $rules = [
            
            'amount' => [
                'required',
                'integer',
                'min:' . $depositMethod->min_amount,
                'max:' . $depositMethod->max_amount,
            ]
        ];

        
        if (!empty($depositMethod->parameters)) {
            foreach ($depositMethod->parameters as $parameter) {
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

            $depositService = DepositService::make($depositMethod, $this);

            
            if ($depositService instanceof CanFetchPaymentCurrencies) {
                $rules['payment_currency'] = 'required|in:' . $depositService->fetchPaymentCurrencies()->keys()->implode(',');
            }

            
            if ($depositService instanceof CryptoDepositService) {
                
                $rules['parameters.address'] = [new BlockchainAddressConfirmed($this->user(), Blockchain::getAddressModelClassById($depositService->getPaymentGateway()->code))];

                
                $rules['amount'][] = new BlockchainAddressBalanceIsSufficient($depositService, $this->parameters['address']);
            }

            if ($depositService instanceof ShouldValidateAmount) {
                $rules['amount'][] = new AmountIsWithinLimits($depositService);
            }

            
            if ($depositService->getPaymentGateway()->code == 'stripe') {
                $rules['parameters.payment_method_id'] = 'required';
            }
        }

        return $rules;
    }
}
