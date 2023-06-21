<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PokerHand.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\CasinoHoldem\Helpers;

use App\Helpers\Games\CardValue;
use App\Helpers\Games\PokerHand as ParentPokerHand;

class PokerHand extends ParentPokerHand
{
    
    public function isPairOfFoursOrBetter(): bool
    {
        return $this->getRank() > self::HAND_ONE_PAIR
            || $this->getRank() == self::HAND_ONE_PAIR && $this->get()->first()->value->rank >= (new CardValue('4'))->rank;
    }

    
    public function isPairOfAcesOrBetter(): bool
    {
        return $this->getRank() > self::HAND_ONE_PAIR
            || $this->getRank() == self::HAND_ONE_PAIR && $this->get()->first()->value->is_ace;
    }
}
