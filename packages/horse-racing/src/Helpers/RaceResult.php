<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   RaceResult.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/


namespace Packages\HorseRacing\Helpers;

use Illuminate\Support\Collection;

class RaceResult
{
    
    protected $result;

    
    public function generate(int $numberOfHorses): RaceResult
    {
        $this->result = collect(range(0, $numberOfHorses - 1))
            ->shuffle(random_int(1, 999999));

        return $this;
    }

    
    public function shift(int $n): RaceResult
    {
        $count = $this->get()->count();

        if ($n > $count) {
            $n = $n % $count;
        } elseif ($n == 0) {
            $n = $count;
        }

        
        $spliced = $this->result->splice($n);

        
        $this->result = $spliced->concat($this->result);

        return $this;
    }

    
    public function set(string $result): RaceResult
    {
        $this->result = collect(explode(',', $result))
            ->map(function ($n) {
                return (int) $n;
            });

        return $this;
    }

    
    public function get(): Collection
    {
        return $this->result;
    }

    
    public function first(): int
    {
        return $this->result->first();
    }

    
    public function second(): int
    {
        return $this->result->get(1);
    }

    
    public function third(): int
    {
        return $this->result->get(2);
    }
}
