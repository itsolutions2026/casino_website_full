<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SendWithdrawal.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SendWithdrawal extends FormRequest
{
    
    public function authorize()
    {
        return $this->withdrawal->is_created;
    }

    
    public function rules()
    {
        return [];
    }
}
