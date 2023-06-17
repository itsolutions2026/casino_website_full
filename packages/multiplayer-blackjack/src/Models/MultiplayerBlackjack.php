<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   MultiplayerBlackjack.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\MultiplayerBlackjack\Models;

use App\Models\Gameable;
use App\Models\ProvableGame;
use Illuminate\Database\Eloquent\Model;

class MultiplayerBlackjack extends Model implements ProvableGame
{
    use Gameable;

    
    protected $table = 'games_multiplayer_blackjack';

    
    protected $hidden = ['deck', 'hands'];

    protected $appends = ['player_hand', 'opponent_hands'];

    
    protected $casts = [
        'deck' => 'array',
        'hands' => 'collection',
    ];

    
    public function getResultAttribute(): string
    {
        return '';
    }

    
    public function getPlayerHandAttribute()
    {
        $user = auth()->user();

        return $this->hands->has($user->id) ? $this->hands->get($user->id) : NULL;
    }

    
    public function getOpponentHandsAttribute()
    {
        $user = auth()->user();

        $result = $this->hands
            ->filter(function ($hand, $userId) use ($user) {
                return $user->id != $userId;
            })
            ->map(function ($hand, $userId) {
                return [
                    'bet' => $hand['bet'],
                    
                    'cards' => $this->is_completed ? $hand['cards'] : [$hand['cards'][0]] + array_pad([], count($hand['cards']), NULL),
                    
                    'score' => $this->is_completed ? $hand['score'] : -1,
                    
                    'win' => $this->is_completed ? $hand['win'] : 0,
                    'action_start' => $hand['action_start'],
                    'action_end' => $hand['action_end'],
                ];
            })
            ->toArray();

        return !empty($result) ? $result : NULL;
    }

    
    public function getSecretAttributeAttribute(): string
    {
        return 'deck';
    }

    
    public function getSecretAttributeHintAttribute(): string
    {
        return __('The first N cards are removed from the top of the deck and placed under the remaining cards. N is the remainder of dividing the Shift value by 52.');
    }
}
