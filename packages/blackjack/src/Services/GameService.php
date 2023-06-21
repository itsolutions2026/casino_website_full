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

namespace Packages\Blackjack\Services;

use App\Helpers\Games\CardDeck;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Packages\Blackjack\Models\Blackjack;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = Blackjack::class;
    protected $makeVisible = ['dealer_hand', 'dealer_score', 'dealer_blackjack'];

    private $deck;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->deck = new CardDeck();
    }

    public function makeSecret(): string
    {
        return implode(',', $this->deck->toArray());
    }

    
    public function deal($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        
        $this->deck->set(explode(',', $provablyFairGame->secret));
        
        $this->deck->cut($provablyFairGame->shift_value % 52);

        $gameable = new $this->gameableClass();
        $gameable->deck = $this->deck->toArray();
        $gameable->actions = [];
        $gameable->win = 0;
        $gameable->bet = $params['bet']; 
        $gameable->player_hand = [$this->deck->getCard(1)->code, $this->deck->getCard(3)->code];
        $gameable->dealer_hand = [$this->deck->getCard(2)->code, $this->deck->getCard(4)->code];


        $gameable->dealer_score = $this->calculateScore($gameable->dealer_hand);
        $gameable->player_score = $this->calculateScore($gameable->player_hand);

        $this->gameable = $gameable;


        if ($gameable->dealer_hand[0][1] != 'A' || $this->getUserAccountBalance() < 1.5 * $gameable->bet) {

            if ($gameable->player_score == 21 && $gameable->dealer_score != 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->win = $gameable->bet * 2.5;
                $this->save(['bet' => $gameable->bet, 'win' => $gameable->win, 'status' => Game::STATUS_COMPLETED]);

            } elseif ($gameable->player_score != 21 && $gameable->dealer_score == 21) {
                $gameable->dealer_blackjack = TRUE;
                $this->save(['bet' => $gameable->bet, 'win' => 0, 'status' => Game::STATUS_COMPLETED]);

            } elseif ($gameable->player_score == 21 && $gameable->dealer_score == 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->dealer_blackjack = TRUE;
                $gameable->win = $gameable->bet;
                $this->save(['bet' => $gameable->bet, 'win' => $gameable->win, 'status' => Game::STATUS_COMPLETED]);
            }


            if (!$this->isGameCompleted()) {
                $this->addActions($gameable, ['hit', 'stand']);

                if ($this->getUserAccountBalance() >= $gameable->bet * 2) {
                    $this->addActions($gameable, ['double']);
                    if ($gameable->player_hand[0][1] == $gameable->player_hand[1][1]) {
                        $this->addActions($gameable, ['split']);
                    }
                }
                $this->save(['bet' => $gameable->bet, 'win' => 0, 'status' => Game::STATUS_IN_PROGRESS]);
            }

        } elseif ($gameable->dealer_hand[0][1] == 'A' && $this->getUserAccountBalance() >= $gameable->bet / 2) {

            $this->addActions($gameable, ['insurance']);

            $this->save(['bet' => $gameable->bet, 'win' => 0, 'status' => Game::STATUS_IN_PROGRESS]);
        }

        return $this;
    }

    
    public function stand(): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $gameable->actions = [];

        $randomNumber = random_int(1, 100);



        while ($this->calculateScore($gameable->dealer_hand) < 17) {

            $gameable->dealer_hand = array_merge(
                $gameable->dealer_hand,
                [$this->deck->getCard(count($gameable->player_hand) + count($gameable->dealer_hand) + 1)->code]
            );
        }

        $gameable->dealer_score = $this->calculateScore($gameable->dealer_hand);

        if($randomNumber < 48){
            if ($gameable->dealer_score > 21 || $gameable->player_score > $gameable->dealer_score) {
                $gameable->win = $gameable->bet * 2;
                $completed = true;

            } elseif ($gameable->player_score == $gameable->dealer_score) {
                $gameable->win = $gameable->bet;
                $completed = true;
            }
        } else if ( $randomNumber < 32 ){

        }

        if ($gameable->dealer_score > 21 || $gameable->player_score > $gameable->dealer_score) {
            $gameable->win = $gameable->bet * 2;

        } elseif ($gameable->player_score == $gameable->dealer_score) {
            $gameable->win = $gameable->bet;

        } else {
            $gameable->win = 0;
        }

        $this->save([
            'bet' => $gameable->bet + $gameable->insurance_bet,
            'win' => $gameable->win,
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    
    public function hit(): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $gameable->actions = [];

        
        $gameable->player_hand = array_merge(
            $gameable->player_hand,
            [$this->deck->getCard(count($gameable->player_hand) + count($gameable->dealer_hand) + 1)->code]
        );

        $gameable->player_score = $this->calculateScore($gameable->player_hand);

        
        if ($gameable->player_score == 21) {
            return $this->stand();
        
        } else if ($gameable->player_score > 21) {
            $status = Game::STATUS_COMPLETED;
        
        } else {
            $status = Game::STATUS_IN_PROGRESS;
            $this->addActions($gameable, ['hit', 'stand']);
        }

        $this->save(['status' => $status]);

        return $this;
    }

    
    public function double(): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $gameable->actions = [];

        
        $gameable->bet *= 2;

        
        $gameable->player_hand = array_merge(
            $gameable->player_hand,
            [$this->deck->getCard(count($gameable->player_hand) + count($gameable->dealer_hand) + 1)->code]
        );
        $gameable->player_score = $this->calculateScore($gameable->player_hand);

        
        if ($gameable->player_score <= 21) {
            return $this->stand();
        }

        $this->save([
            'bet' => $gameable->bet + $gameable->insurance_bet,
            'win' => $gameable->win,
            'status' => Game::STATUS_COMPLETED
        ]);

        return $this;
    }

    public function insurance($insurance): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $gameable->actions = [];

        
        if ($insurance) {
            
            $gameable->insurance_bet = $gameable->bet / 2;

            if ($gameable->player_score == 21 && $gameable->dealer_score != 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->insurance_win = 0;
                $gameable->win = $gameable->bet * 2.5; 
            
            } elseif ($gameable->player_score != 21 && $gameable->dealer_score == 21) {
                $gameable->dealer_blackjack = TRUE;
                $gameable->insurance_win = $gameable->insurance_bet * 3; 
                $gameable->win = 0;
            
            } elseif ($gameable->player_score == 21 && $gameable->dealer_score == 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->dealer_blackjack = TRUE;
                $gameable->insurance_win = $gameable->insurance_bet * 3; 
                $gameable->win = $gameable->bet; 
            } else {
                $this->addActions($gameable, ['hit', 'stand']);

                if ($this->getUserAccountBalance() >= $gameable->insurance_bet + $gameable->bet) {
                    $this->addActions($gameable, ['double']);
                    if ($gameable->player_hand[0][1] == $gameable->player_hand[1][1]) {
                        $this->addActions($gameable, ['split']);
                    }
                }
            }
        
        } else {
            
            if ($gameable->player_score == 21 && $gameable->dealer_score != 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->win = $gameable->bet * 2.5; 
            
            } elseif ($gameable->player_score != 21 && $gameable->dealer_score == 21) {
                $gameable->dealer_blackjack = TRUE;
                $gameable->win = 0;
            
            } elseif ($gameable->player_score == 21 && $gameable->dealer_score == 21) {
                $gameable->player_blackjack = TRUE;
                $gameable->dealer_blackjack = TRUE;
                $gameable->win = $gameable->bet; 
            } else {
                $this->addActions($gameable, ['hit', 'stand']);
                
                if ($this->getUserAccountBalance() >= $gameable->bet) {
                    $this->addActions($gameable, ['double']);
                    if ($gameable->player_hand[0][1] == $gameable->player_hand[1][1]) {
                        $this->addActions($gameable, ['split']);
                    }
                }
            }
        }

        $this->save(
            [
                'bet' => $gameable->bet + $gameable->insurance_bet, 
                'win' => $gameable->win + $gameable->insurance_win, 
                'status' => $gameable->dealer_blackjack || $gameable->player_blackjack ? Game::STATUS_COMPLETED : Game::STATUS_IN_PROGRESS
            ]
        );

        return $this;
    }

    public function split(): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $playerHand = $gameable->player_hand;

        
        $gameable->player_hand = [$playerHand[0], $this->deck->getCard(5)->code]; 
        $gameable->player_score = $this->calculateScore($gameable->player_hand);
        $gameable->player_hand2 = [$playerHand[1]]; 
        $gameable->player_score2 = $this->calculateScore($gameable->player_hand2);
        $gameable->bet2 = $gameable->bet;

        $win = 0;
        $gameable->actions = ['stand', 'hit'];
        $status = Game::STATUS_IN_PROGRESS;

        
        if ($gameable->player_score == 21) {
            $this->splitStand(1, FALSE);
        }

        
        if ($gameable->player_score2 == 21) {
            
            $this->splitStand(2, FALSE);
            $gameable->actions = [];
            $win = $gameable->win + $gameable->win2;
            $status = Game::STATUS_COMPLETED;
        }

        $this->save([
            'bet' => $gameable->bet * 2,
            'win' => $win,
            'status' => $status
        ]);

        return $this;
    }

    
    public function splitStand(int $hand, bool $save = TRUE): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        $gameable->actions = [];
        $gameAttributes = [];

        if ($hand == 1) {
            
            $gameable->player_hand2 = array_merge($gameable->player_hand2, [$this->deck->getCard(count($gameable->player_hand) + count($gameable->dealer_hand) + 2)->code]);
            $gameable->player_score2 = $this->calculateScore($gameable->player_hand2);
            if ($gameable->player_score2 < 21) {
                $this->addActions($gameable, ['stand', 'hit']);
            }
        }

        
        if ($hand == 2 || $gameable->player_score2 == 21) {
            while ($this->calculateScore($gameable->dealer_hand) < 17) {
                
                
                $gameable->dealer_hand = array_merge(
                    $gameable->dealer_hand,
                    [$this->deck->getCard(count($gameable->player_hand) + count($gameable->player_hand2) + count($gameable->dealer_hand) + 1)->code]
                );
            }

            $gameable->dealer_score = $this->calculateScore($gameable->dealer_hand);

            $win = 0;
            
            if ($gameable->player_score <= 21 && ($gameable->dealer_score > 21 || $gameable->player_score > $gameable->dealer_score)) {
                $gameable->win = $gameable->bet * 2; 
                $win += $gameable->win;
            
            } elseif ($gameable->player_score <= 21 && $gameable->player_score == $gameable->dealer_score) {
                $gameable->win = $gameable->bet; 
                $win += $gameable->win;
            }

            
            if ($gameable->player_score2 <= 21 && ($gameable->dealer_score > 21 || $gameable->player_score2 > $gameable->dealer_score)) {
                $gameable->win2 = $gameable->bet2 * 2; 
                $win += $gameable->win2;
            
            } elseif ($gameable->player_score2 <= 21 && $gameable->player_score2 == $gameable->dealer_score) {
                $gameable->win2 = $gameable->bet2; 
                $win += $gameable->win2;
            }

            $gameAttributes = [
                'win' => $win,
                'status' => Game::STATUS_COMPLETED
            ];
        }

        if ($save) {
            $this->save($gameAttributes);
        }

        return $this;
    }

    
    public function splitHit(int $hand): GameService
    {
        $gameable = $this->getGameable();

        
        $this->deck->set($gameable->deck);

        
        $newCard = $this->deck->getCard(count($gameable->player_hand) + count($gameable->player_hand2) + count($gameable->dealer_hand) + 1)->code;

        if ($hand == 1) {
            $attrHand = 'player_hand';
            $attrScore = 'player_score';
        } elseif ($hand == 2) {
            $attrHand = 'player_hand2';
            $attrScore = 'player_score2';
        }

        
        $gameable->{$attrHand} = array_merge($gameable->{$attrHand}, [$newCard]);
        $gameable->{$attrScore} = $this->calculateScore($gameable->{$attrHand});

        $gameable->actions = ['stand', 'hit'];
        $gameAttributes = [];

        
        if ($hand == 1 && $gameable->player_score >= 21) {
            $this->splitStand(1, FALSE);
        
        } else if ($hand == 2 && $gameable->player_score <= 21 && $gameable->player_score2 >= 21) {
            $this->splitStand(2, FALSE);
            $gameAttributes = [
                'win' => $gameable->win + $gameable->win2,
                'status' => Game::STATUS_COMPLETED
            ];
        
        } else if ($hand == 2 && $gameable->player_score > 21 && $gameable->player_score2 > 21) {
            $gameAttributes = ['status' => Game::STATUS_COMPLETED];
        }

        $this->save($gameAttributes);

        return $this;
    }

    protected function calculateScore(array $hand): float
    {
        
        $acesOutcomes = [
            1 => [1, 11], 
            2 => [2, 12, 22], 
            3 => [3, 13, 23, 33], 
            4 => [4, 14, 24, 34, 44], 
        ];
        $acesCount = 0; 
        $score = 0;

        
        foreach ($hand as $card) {
            
            if ($card[1] != 'A') {
                $score += intval($card[1]) ?: 10;
            
            } else {
                $acesCount++; 
            }
        }

        
        if ($acesCount) {
            
            foreach ($acesOutcomes[$acesCount] as $i => $acesValue) {
                $currentScore = $score;
                if ($i==0 && $acesValue + $currentScore > 21) {
                    $currentScore += $acesValue;
                    break;
                } else if ($i > 0 && $acesValue + $currentScore > 21) {
                    $currentScore += $acesOutcomes[$acesCount][$i-1];
                    break;
                } else {
                    $currentScore += $acesValue;
                }
            }
            $score = $currentScore;
        }

        return $score;
    }

    protected function addActions($target, array $actions): GameService
    {
        $target->actions = array_merge($target->actions ?: [], $actions);

        return $this;
    }

    public static function createRandomGame(User $user): void
    {
        $instance = new self($user);

        $instance->createProvablyFairGame(random_int(10000,99999));

        $minBet = intval(config('settings.bots.games.min_bet'));
        $maxBet = intval(config('settings.bots.games.max_bet'));

        $instance
            ->deal(['bet' => random_int($minBet ?: config('blackjack.min_bet'), $maxBet ?: config('blackjack.max_bet'))])
            ->unsetGameable();

        
        if (!$instance->isGameCompleted()) {
            while ($instance->getGameable()->player_score < 18) {
                $instance->hit()->unsetGameable();
            }
        }

        
        if (!$instance->isGameCompleted()) {
            $instance->stand();
        }
    }
}
