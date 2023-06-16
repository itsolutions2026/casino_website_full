<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Slots3D.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Slots3D\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class Slots3D extends Model implements ProvableGame
{
    use Gameable;

    
    protected $table = 'games_slots_3d';

    
    protected $casts = [
        'positions' => 'collection'
    ];

    protected $appends = ['result'];

    
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
        return __('Each reel is spinned N extra times, where N corresponds to a digit in the Shift value at the i-th position.');
    }
}
