<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   HeadsOrTails.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HeadsOrTails\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class HeadsOrTails extends Model implements ProvableGame
{
    use Gameable;

    
    protected $table = 'games_heads_or_tails';

    
    protected $casts = [
        
    ];

    protected $appends = ['toss_bet_title', 'result'];

    
    public function getTossBetTitleAttribute(): string
    {
        return $this->toss_bet == 0 ? __('Heads') : __('Tails');
    }

    
    public function getResultAttribute(): string
    {
        return $this->toss_result == 0 ? __('Heads') : __('Tails');
    }

    
    public function getSecretAttributeAttribute(): string
    {
        return 'toss_result';
    }

    
    public function getSecretAttributeHintAttribute(): string
    {
        return __('The initial toss is increased by the Shift value.');
    }
}
