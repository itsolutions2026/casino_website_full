<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   ChangeDepositStatus.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ChangeDepositStatus extends FormRequest
{
    
    public function authorize()
    {
        return $this->deposit->is_created && !$this->deposit->gateway;
    }

    
    public function rules()
    {
        return [];
    }
}
