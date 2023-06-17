<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   RaceBet.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HorseRacing\Helpers;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ReflectionClass;

class RaceBet
{
    public const BET_WIN = 0;
    public const BET_PLACE = 1;
    public const BET_SHOW = 2;




    protected $raceResult;
    protected $bets;
    protected $paytable;

    public function __construct(RaceResult $raceResult, array $paytable, array $bets)
    {
        $this->raceResult = $raceResult;

        $this->paytable = $paytable;

        $this->bets = collect($bets)
            ->map(function ($bet) {
                return (object) array_merge($bet, ['win' => $this->calculateWin((object) $bet)]);
            });
    }

    
    public function getBets()
    {
        return $this->bets;
    }

    
    public function getBetAmount(): float
    {
        return $this->bets->sum('bet');
    }

    
    public function getWinAmount(): float
    {
        return $this->bets->sum('win');
    }

    
    protected function calculateWin(object $bet): float
    {
        
        if ($bet->type == self::BET_WIN) {
            return $this->raceResult->first() == $bet->positions[0]
                ? round($bet->bet * $this->paytable[self::BET_WIN][$bet->positions[0]], 2)
                : 0;
        
        } elseif ($bet->type == self::BET_PLACE) {
            return in_array($bet->positions[0], [$this->raceResult->first(), $this->raceResult->second()])
                ? round($bet->bet * $this->paytable[self::BET_PLACE][$bet->positions[0]], 2)
                : 0;
        
        } elseif ($bet->type == self::BET_SHOW) {
            return in_array($bet->positions[0], [$this->raceResult->first(), $this->raceResult->second(), $this->raceResult->third()])
                ? round($bet->bet * $this->paytable[self::BET_SHOW][$bet->positions[0]], 2)
                : 0;
        }

        return 0;
    }

    
    public static function getBetTypes(): Collection
    {
        $r = new ReflectionClass(__CLASS__);

        return collect($r->getConstants())
            ->filter(function ($value, $name) {
                return Str::startsWith($name, 'BET_');
            })
            ->values();
    }
}
