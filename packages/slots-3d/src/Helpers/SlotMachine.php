<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SlotMachine.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Slots3D\Helpers;

use Exception;
use Illuminate\Support\Collection;


class SlotMachine
{
    
    protected $reels;

    
    protected $positions;

    public function __construct()
    {
        $this->positions = collect()->pad(3, 0);
    }

    
    public function setReels(array $reels): SlotMachine
    {
        $this->reels = collect($reels)->transform(function (array $symbols) {
            return collect($symbols);
        });

        return $this;
    }

    
    public function spin(): SlotMachine
    {
        if (!$this->reels) {
            throw new Exception('Slot reels should be initialized before spinning');
        }

        $this->positions->transform(function ($position, $i) {
            return random_int(0, $this->reels->get($i)->count() - 1);
        });

        return $this;
    }

    
    public function shift(int $shift): SlotMachine
    {
        $this->positions->transform(function ($position, $i) use ($shift) {
            $symbolsCount = $this->reels->get($i)->count();
            return ($position + $shift) % $symbolsCount;
        });

        return $this;
    }

    
    public function getPositions(): Collection
    {
        return $this->positions;
    }

    
    public function setPositions(array $positions): SlotMachine
    {
        $this->positions = collect($positions)->transform(function ($i) {
            return (int) $i;
        });

        return $this;
    }
}
