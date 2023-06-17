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

namespace Packages\HeadsOrTails\Http\Requests;

use App\Http\Requests\PlayGame;
use Packages\HeadsOrTails\Models\HeadsOrTails;

class Play extends PlayGame
{
    protected $gamePackageId = 'heads-or-tails';
    protected $gameableClass = HeadsOrTails::class;

    public function rules()
    {
        return array_merge(
            parent::rules(),
            [
                'toss_bet' => 'required|integer|in:0,1', 
            ]
        );
    }
}
