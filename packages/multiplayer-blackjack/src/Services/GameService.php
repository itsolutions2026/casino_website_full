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

namespace Packages\MultiplayerBlackjack\Services;

use App\Helpers\Games\CardDeck;
use App\Models\User;
use App\Services\MultiroomMultiplayerGameService;
use Illuminate\Database\Eloquent\Model;
use Packages\MultiplayerBlackjack\Models\MultiplayerBlackjack;

class GameService extends MultiroomMultiplayerGameService
{
    protected $gameableClass = MultiplayerBlackjack::class;

    protected $deck;
    protected $actionDuration;
    protected $fee;

    public function __construct(User $user)
    {
        parent::__construct($user);

        $this->deck = new CardDeck();
        $this->actionDuration = (int) config('multiplayer-blackjack.action_duration');
        $this->finalHitThreshold = (int) config('multiplayer-blackjack.final_hit_threshold');
        $this->fee = (float) config('multiplayer-blackjack.fee');
    }

    public function makeSecret(): string
    {
        return implode(',', $this->deck->toArray());
    }

    protected function createGameable(): MultiroomMultiplayerGameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        
        $this->deck->set(explode(',', $provablyFairGame->secret));
        
        $this->deck->cut($provablyFairGame->shift_value % 52);

        $gameable = new $this->gameableClass();
        $gameable->deck = $this->deck->toArray();
        $gameable->hands = collect();












        $gameable->save();

        $this->setGameable($gameable);

        return $this;
    }

    public function action(string $action): MultiroomMultiplayerGameService
    {
        $gameable = $this->getGameable();
        
        $this->deck->set($gameable->deck);

        
        $this->$action($gameable)->save();

        $this->broadcastGameEvent($this->getGameEvent($action));

        return $this;
    }

    
    protected function play(Model $gameable): Model
    {
        $hands = $gameable->hands;

        $n = $hands->count() == 0 ? 1 : $hands->count() * 2 + 1;
        $cards = $this->deck->getCards(2, $n)->toArray();
        $score = $this->calculateScore($cards);

        $hands->put($this->getUser()->id, [
            'bet'           => (int) $this->getRoom()->parameters->bet,
            'cards'         => $cards,
            'score'         => $score,
            'win'           => 0,
            'action_start'  => NULL,
            'action_end'    => NULL,
        ]);

        
        if ($hands->count() == $this->getRoom()->parameters->players_count) {
            
            if ($hands->where('score', 21)->count() > 0) {
                $gameable->hands = $hands;
                return $this->complete($gameable);
            }

            $actionStart = time() + 1;

            $hands = $hands->map(function ($hand) use (&$actionStart) {
                $hand = array_merge($hand, [
                    'action_start'  => $actionStart,
                    'action_end'    => $actionStart + $this->actionDuration,
                ]);

                $actionStart += $this->actionDuration + 1;

                return $hand;
            });
        } else {
            
            $this->disableGameEventBroadcasting();
        }

        $gameable->hands = $hands;

        return $gameable;
    }

    
    protected function stand(Model $gameable): Model
    {
        $user = $this->getUser();
        $time = time();
        $i = 0;

        $gameable->hands = $gameable->hands->map(function ($hand, $userId) use ($user, $time, &$i) {
            
            if ($userId == $user->id) {
                $hand['action_start'] = NULL;
                $hand['action_end'] = NULL;
                $i++;
            
            } elseif ($i > 0) {
                $hand['action_start'] = $time + ($i - 1) * $this->actionDuration + 1;
                $hand['action_end'] = $hand['action_start'] + $this->actionDuration;
                $i++;
            }

            return $hand;
        });

        
        return $gameable->hands->keys()->last() == $user->id ? $this->complete($gameable) : $gameable;
    }

    
    protected function hit(Model $gameable): Model
    {
        $user = $this->getUser();
        $hands = $gameable->hands;

        $drawnCardsCount = $hands->sum(function ($hand) {
            return count($hand['cards']);
        });

        $hand = $hands->get($user->id);
        $hand['cards'] = array_merge($hand['cards'], [$this->deck->getCard($drawnCardsCount + 1)->code]);
        $hand['score'] = $this->calculateScore($hand['cards']);
        $hands->put($user->id, $hand);

        $gameable->hands = $hands;

        if (time() >= $hand['action_end'] - $this->finalHitThreshold) {
            return $this->stand($gameable);
        }

        return $gameable;
    }

    
    protected function complete(Model $gameable): Model
    {
        $room = $this->getRoom();
        $hands = $gameable->hands;

        
        $maxScore = $hands->where('score', '<=', 21)->max('score'); 
        $winningHands = $maxScore ? $hands->where('score', '=', $maxScore) : collect();

        
        if ($maxScore == 21 && $winningHands->count() > 1) {
            
            $handsWithBlackjack = $winningHands->filter(function ($hand) {
                return count($hand['cards']) == 2;
            });

            
            if ($handsWithBlackjack->count() > 0) {
                $winningHands = $handsWithBlackjack;
            }
        }

        $win = $winningHands->count() > 0
            ? round($room->parameters->bet * $hands->count() * (1 - $this->fee / 100) / $winningHands->count(), 2)
            : 0;

        $hands->each(function ($hand, $userId) use ($room, $hands, $winningHands, $win) {
            $player = $room->playerById($userId);

            if ($winningHands->has($userId)) {
                $hands->put($userId, array_merge($hand, ['win' => $win]));
            }

            $this->completeGame($player->game, [
                'win' => $winningHands->has($userId) ? $win : 0
            ]);
        });

        $gameable->hands = $hands;

        return $gameable;
    }

    
    protected function cancel(Model $gameable): Model
    {
        $room = $this->getRoom();
        $hands = $gameable->hands;

        $hands->each(function ($hand, $userId) use ($hands, $room) {
            $hands->put($userId, array_merge($hand, ['win' => $hand['bet']]));

            
            $this->cancelGame($room->playerById($userId)->game, [
                'win' => $hand['bet']
            ]);
        });

        $gameable->hands = $hands;

        return $gameable;
    }

    protected function getGameEvent(string $action): array
    {
        $gameable = $this->getGameable();

        $event = [
            'action' => $action,
            'user_id' => $this->getUser()->id,
            'game' => $this->getGame()->append('server_time')->only('is_completed', 'is_cancelled', 'server_time'),
            'gameable' => [
                'hands' => $gameable->hands
                    ->map(function ($hand) {
                        return [
                            'bet'           => $hand['bet'],
                            
                            'cards'         => $this->isGameCompleted() || $this->isGameCancelled() ? $hand['cards'] : [$hand['cards'][0]] + array_pad([], count($hand['cards']),NULL),
                            
                            'score'         => $this->isGameCompleted() || $this->isGameCancelled() ? $hand['score'] : -1,
                            
                            'win'           => $this->isGameCompleted() || $this->isGameCancelled() ? $hand['win'] : 0,
                            'action_start'  => $hand['action_start'],
                            'action_end'    => $hand['action_end'],
                        ];
                    })
                    ->toArray()
            ]
        ];

        return $event;
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
}
