<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   LuckyWheel.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\LuckyWheel\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class LuckyWheel extends Model implements ProvableGame
{
    use Gameable;

    
    protected $table = 'games_lucky_wheel';

    protected $appends = ['result'];

    
    public function getResultAttribute(): string
    {
        return '';
    }

    
    public function getSecretAttributeAttribute(): string
    {
        return 'position';
    }

    
    public function getSecretAttributeHintAttribute(): string
    {
        return __('The initial wheel numeric position is increased by the Shift value.');
    }
}
