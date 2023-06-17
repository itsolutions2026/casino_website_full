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


namespace Packages\HorseRacing\Services;

use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Packages\HorseRacing\Helpers\RaceResult;
use Packages\HorseRacing\Helpers\RaceBet;
use Packages\HorseRacing\Models\HorseRacing;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = HorseRacing::class;

    public function makeSecret(): string
    {
        return (new RaceResult())
            ->generate(count(config('horse-racing.runners')))
            ->get()
            ->implode(',');
    }

    
    public function play($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        $raceResult = (new RaceResult())
            ->set($provablyFairGame->secret) 
            ->shift($provablyFairGame->shift_value); 

        $raceBet = new RaceBet($raceResult, config('horse-racing.paytable'), $params['bets']);

        $gameable = new $this->gameableClass();
        $gameable->bets = $raceBet->getBets();
        $gameable->positions = $raceResult->get();

        
        $this->gameable = $gameable;

        $this->save([
            'bet' => $raceBet->getBetAmount(),
            'win' => $raceBet->getWinAmount(),
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    public static function createRandomGame(User $user): void
    {
        $instance = new self($user);

        $instance->createProvablyFairGame(random_int(10000,99999));

        $minBet = intval(config('settings.bots.games.min_bet'));
        $maxBet = intval(config('settings.bots.games.max_bet'));

        $runnersCount = count(config('horse-racing.runners'));
        $betsCount = random_int(1, $runnersCount);
        $bets = [];

        for ($i = 0; $i < $betsCount; $i++) {
            $bets[] = [
                'type'      => array_rand([RaceBet::BET_WIN, RaceBet::BET_PLACE, RaceBet::BET_SHOW]),
                'bet'       => random_int($minBet ?: config('horse-racing.min_bet'), $maxBet ?: config('horse-racing.max_bet')),
                'positions' => [random_int(0, $runnersCount - 1)]
            ];
        }

        $instance->play(['bets' => $bets]);
    }
}
