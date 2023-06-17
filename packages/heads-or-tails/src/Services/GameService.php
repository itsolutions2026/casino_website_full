<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   GameService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HeadsOrTails\Services;

use App\Helpers\Games\NumberGenerator;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Packages\HeadsOrTails\Models\HeadsOrTails;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = HeadsOrTails::class;

    protected $numberGenerator;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->numberGenerator = new NumberGenerator(0, 1);
    }

    public function makeSecret(): string
    {
        return $this->numberGenerator->generate()->getNumber();
    }

    
    public function play($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        
        $this->numberGenerator->setNumber($provablyFairGame->secret);
        
        $this->numberGenerator->shift($provablyFairGame->shift_value);

        $bet = $params['bet'];
        $tossBet = $params['toss_bet'];

        $gameable = new $this->gameableClass();
        $gameable->toss_bet = $tossBet;
        $gameable->toss_result = $this->numberGenerator->getNumber();

        
        $this->gameable = $gameable;

        $win = $tossBet == $gameable->toss_result
            ? $bet * $this->calcPayout()
            : 0;

        $this->save([
            'bet' => $bet,
            'win' => $win,
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    protected function calcPayout(): float
    {
        return 2 - config('heads-or-tails.house_edge') / 100;
    }

    public static function createRandomGame(User $user): void
    {
        $instance = new self($user);

        $instance->createProvablyFairGame(random_int(10000,99999));

        $minBet = intval(config('settings.bots.games.min_bet'));
        $maxBet = intval(config('settings.bots.games.max_bet'));

        $instance->play([
            'bet'      => random_int($minBet ?: config('heads-or-tails.min_bet'), $maxBet ?: config('heads-or-tails.max_bet')),
            'toss_bet' => random_int(0, 1),
        ]);
    }
}
