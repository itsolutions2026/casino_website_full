<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   StoreSolanaAddress.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Requests;

class StoreSolanaAddress extends StoreBlockchainAddress
{
    
    public function rules()
    {
        return [
            'address' => 'required|string|min:32|max:44'
        ];
    }
}
