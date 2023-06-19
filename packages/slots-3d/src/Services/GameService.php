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

namespace Packages\Slots3D\Services;

use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Packages\Slots3D\Helpers\SlotMachine;
use Packages\Slots3D\Models\Slots3D;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = Slots3D::class;

    protected $slotMachine;

    protected $reels;
    protected $paytable;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->reels = config('slots-3d.reels');
        $this->paytable = config('slots-3d.paytable');
        $this->slotMachine = new SlotMachine();
    }

    public function makeSecret(): string
    {
        return $this->slotMachine
            ->setReels($this->reels)
            ->spin()
            ->getPositions()
            ->implode(',');
    }

    
    public function play($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        
//        $this->slotMachine
//            ->setReels($this->reels)
//            ->setPositions(explode(',', $provablyFairGame->secret))
//            ->shift($provablyFairGame->shift_value);

        $bet = $params['bet'];
//        $positions = $this->slotMachine->getPositions();


        $randomNumber = random_int(1, 700);

        if($randomNumber< 96){
            $positions_array = [ 0 , 5 , ''];
        }
        else if($randomNumber >= 96 && $randomNumber< 144){
            $positions_array = [ 1 , 0 , 5];
        }
        else if($randomNumber >= 144 && $randomNumber< 176){
            $positions_array = [ 2 , 1 , 0];
        }
        else if($randomNumber >= 176 && $randomNumber< 189){
            $positions_array = [ 3 , 2 , 1];
        }
        else if($randomNumber >= 189 && $randomNumber< 198){
            $positions_array = [ 5 , 4 , 3];
        }
        else if($randomNumber >= 198 && $randomNumber< 202){
            $positions_array = [ 4 , 3 , 2];
        }
        else {
            $first_number = random_int(0, 5);
            $second_number = ($first_number + 1) % 6;
            $third_number = ($first_number + 2) % 6;

            $positions_array = [$first_number, $second_number, $third_number];
        }

        $this->slotMachine
            ->setReels($this->reels)
            ->setPositions($positions_array);


        $positions = collect($positions_array);
        $gameable = new $this->gameableClass();
        $gameable->positions = $positions;


        $this->gameable = $gameable;

        $win = 0;
        collect($this->paytable)
            ->each(function ($item) use ($bet, $positions, &$win) {
                if ($this->isWinningPositions(collect($item->positions), $positions)) {
                    $win = $bet * $item->payout;
                    return FALSE;
                }
            });

        $this->save([
            'bet' => $bet,
            'win' => $win,
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

        $instance->play([
            'bet' => random_int($minBet ?: config('slots-3d.min_bet'), $maxBet ?: config('slots-3d.max_bet'))
        ]);
    }

    protected function isWinningPositions(Collection $winningSymbols, Collection $actualPositions): bool
    {
        if ($winningSymbols->count() != $actualPositions->count()) {
            throw new Exception('Slot machine configuration is invalid.');
        }

        $matchesCount = $winningSymbols->reduce(function ($matchesCount, $symbol, $reel) use ($actualPositions) {
            return $matchesCount + ($symbol === NULL || $symbol === ($this->reels[$reel][$actualPositions[$reel]] ?? -1) ? 1 : 0);
        }, 0);

        return $matchesCount === $winningSymbols->count();
    }
}
