<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   VerifyBlockchainAddress.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VerifyBlockchainAddress extends FormRequest
{
    
    public function authorize()
    {
        return optional($this->blockchainAddress)->confirmed === 0;
    }

    
    public function rules()
    {
        return [
            'signature' => 'required|min:50|max:150'
        ];
    }
}
