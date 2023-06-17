<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StoreTronAddress.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

class StoreTronAddress extends StoreBlockchainAddress
{
    
    public function rules()
    {
        return [
            'address' => 'required|size:34' 
        ];
    }
}
