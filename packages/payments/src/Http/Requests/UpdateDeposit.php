<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   UpdateDeposit.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Packages\Payments\Services\CryptoDepositService;
use Packages\Payments\Services\DepositService;

class UpdateDeposit extends FormRequest
{
    
    public function authorize()
    {
        $paymentMethod = $this->depositMethod->paymentMethod;
        if (!$paymentMethod) {
            return FALSE;
        }

        $depositService = DepositService::make($this->depositMethod, $this);

        
        return $this->depositMethod->enabled
            && $this->depositMethod->id == $this->deposit->deposit_method_id
            && $this->deposit->is_created
            && $depositService instanceof CryptoDepositService;
    }

    
    public function rules()
    {
        $rules = [
            'transaction_id' => 'required|unique:deposits,external_id'
        ];

        return $rules;
    }
}
