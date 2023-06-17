<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   HorseRacing.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HorseRacing\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class HorseRacing extends Model implements ProvableGame
{
    use Gameable;

    
    protected $table = 'games_horse_racing';

    
    protected $casts = [
        'bets'      => 'collection', 
        'positions' => 'collection' 
    ];

    protected $appends = ['result', 'bet_total', 'win_total'];

    
    public function getResultAttribute(): string
    {
        return '';
    }

    
    public function getSecretAttributeAttribute(): string
    {
        return 'positions';
    }

    
    public function getSecretAttributeHintAttribute(): string
    {
        return __('Each horse position is changed by the Shift value.');
    }

    
    public function getBetTotalAttribute(): float
    {
        return $this->bets->isNotEmpty()
            ? $this->bets->reduce(function ($carry, $item) {
                return $carry + $item['bet'];
            }, 0)
            : 0;
    }

    
    public function getWinTotalAttribute(): float
    {
        return $this->bets->isNotEmpty()
            ? $this->bets->reduce(function ($carry, $item) {
                return $carry + $item['win'];
            }, 0)
            : 0;
    }
}
