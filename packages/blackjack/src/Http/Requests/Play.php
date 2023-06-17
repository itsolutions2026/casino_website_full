<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Play.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

use App\Http\Requests\PlayGame;
use Packages\Blackjack\Models\Blackjack;

class Play extends PlayGame
{
    protected $gamePackageId = 'blackjack';
    protected $gameableClass = Blackjack::class;
}
