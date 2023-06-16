<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   BlockchainAddress.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class BlockchainAddress extends Model
{

    
    protected $appends = [
        
    ];

    
    protected $fillable = [
        'user_id', 'address', 'message', 'confirmed'
    ];

    
    protected $casts = [
        'confirmed' => 'integer'
    ];

    
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
    public function scopeConfirmed($query): Builder
    {
        return $query->where('confirmed', TRUE);
    }
}
