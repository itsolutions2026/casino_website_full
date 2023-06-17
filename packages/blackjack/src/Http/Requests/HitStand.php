<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   HitStand.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

class HitStand extends  Action
{
    
    public function authorize()
    {
        return parent::authorize();
    }
}
