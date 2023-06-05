<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StoreBlockchainAddress.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlockchainAddress extends FormRequest
{
    
    public function authorize()
    {
        return TRUE;
    }

    
    public function rules()
    {
        return [
            'address' => 'required|size:42'
        ];
    }
}
