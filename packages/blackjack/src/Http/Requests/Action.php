<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Action.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Blackjack\Http\Requests;

use App\Repositories\ProvablyFairGameRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Packages\Blackjack\Models\Blackjack;

class Action extends FormRequest
{
    protected $provablyFairGame;

    
    protected function authorize()
    {
        
        $action =  str_replace('split-', '', Str::after(Route::currentRouteName(), 'games.blackjack.'));

        if ($this->hash) {
            $this->provablyFairGame = ProvablyFairGameRepository::search($this->hash, Blackjack::class);
            return $this->provablyFairGame
                && $this->provablyFairGame->game
                && !$this->provablyFairGame->game->is_completed
                && $this->provablyFairGame->game->account_id == $this->user()->account->id
                && $this->provablyFairGame->game->gameable
                && in_array($action, $this->provablyFairGame->game->gameable->actions);
        }

        return FALSE;
    }

    
    public function rules(Request $request)
    {
        return [
            'hash' => 'required|size:64'
        ];
    }
}
