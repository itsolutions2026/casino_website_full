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

namespace Packages\CasinoHoldem\Http\Requests;

use App\Repositories\ProvablyFairGameRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Packages\CasinoHoldem\Models\CasinoHoldem;

class Action extends FormRequest
{
    protected $provablyFairGame;

    
    public function authorize()
    {
        if ($this->hash) {
            $this->provablyFairGame = ProvablyFairGameRepository::search($this->hash, CasinoHoldem::class);
            return $this->provablyFairGame
                && $this->provablyFairGame->game
                && !$this->provablyFairGame->game->is_completed
                && $this->provablyFairGame->game->account_id == $this->user()->account->id
                && $this->provablyFairGame->game->gameable;
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
