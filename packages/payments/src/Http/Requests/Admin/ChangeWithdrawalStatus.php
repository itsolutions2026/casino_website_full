<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   ChangeWithdrawalStatus.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ChangeWithdrawalStatus extends FormRequest
{
    
    public function authorize()
    {
        return $this->withdrawal->is_created || $this->withdrawal->is_pending;
    }

    
    public function rules()
    {
        return [];
    }
}
