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


namespace Packages\CasinoHoldem\Services;

use App\Helpers\Games\CardDeck;
use App\Models\Game;
use App\Models\User;
use App\Services\GameService as ParentGameService;
use App\Services\RandomGameService;
use Packages\CasinoHoldem\Helpers\Poker;
use Packages\CasinoHoldem\Helpers\PokerHand;
use Packages\CasinoHoldem\Models\CasinoHoldem;

class GameService extends ParentGameService implements RandomGameService
{
    protected $gameableClass = CasinoHoldem::class;
    protected $makeVisible = ['dealer_cards', 'dealer_hand', 'dealer_kickers', 'dealer_hand_rank'];

    public function makeSecret(): string
    {
        return implode(',', (new CardDeck())->toArray());
    }

    
    public function deal($params): GameService
    {
        $provablyFairGame = $this->getProvablyFairGame();

        
        $deck = new CardDeck(explode(',', $provablyFairGame->secret));
        
        $deck->cut($provablyFairGame->shift_value % 52);














        $initialDeck = $deck->toArray();

        $poker = new Poker($deck);
        $poker->addPlayers(2)->deal()->play();

        $gameable = new $this->gameableClass();
        $gameable->deck = $initialDeck;
        $gameable->ante_bet = $params['bet'];
        $gameable->bonus_bet = $params['bonus_bet'];
        $gameable->player_cards = $poker->player()->getPocketCards();
        $gameable->community_cards = $poker->getCommunityCards();
        $gameable->player_hand = $poker->player()->getHand()->get();
        $gameable->player_kickers = $poker->player()->getHand()->getKickers();
        $gameable->player_hand_rank = $poker->player()->getHand()->getRank();

        if ($gameable->bonus_bet > 0) {
            $bonusHand = $poker->player()->addBonusHand($poker->getFlop());
            $gameable->player_bonus_hand = $bonusHand->get();
            $gameable->player_hand_rank = $bonusHand->getRank();
        }

        
        $this->gameable = $gameable;

        $this->save([
            'bet' => $gameable->ante_bet + $gameable->bonus_bet,
            'win' => 0,
            'status' => Game::STATUS_IN_PROGRESS]
        );

        return $this;
    }

    
    public function fold(): GameService
    {
        $this->save(['status' => Game::STATUS_COMPLETED]);

        return $this;
    }

    
    public function call(): GameService
    {
        $gameable = $this->getGameable();

        $poker = new Poker(new CardDeck($gameable->deck));
        $poker->addPlayers(2)->deal(2, 5)->play();

        $gameable->call_bet = $gameable->ante_bet * 2;
        $gameable->community_cards = $poker->getCommunityCards();
        $gameable->player_hand = $poker->player()->getHand()->get();
        $gameable->player_kickers = $poker->player()->getHand()->getKickers();
        $gameable->player_hand_rank = $poker->player()->getHand()->getRank();
        $gameable->dealer_cards = $poker->dealer()->getPocketCards();
        $gameable->dealer_kickers = $poker->dealer()->getHand()->getKickers();
        $gameable->dealer_hand = $poker->dealer()->getHand()->get();
        $gameable->dealer_hand_rank = $poker->dealer()->getHand()->getRank();

        
        if ($poker->dealer()->getHand()->isPairOfFoursOrBetter()) {
            $gameable->dealer_qualified = TRUE;

            
            $result = $poker->player()->getHand()->compare($poker->dealer()->getHand());

            
            if ($result == PokerHand::RESULT_WIN) {
                $antePayout = (int) config('casino-holdem.ante_paytable')[$gameable->player_hand_rank];
                $gameable->ante_win = $antePayout > 0 ? $gameable->ante_bet * $antePayout : 0;
                $gameable->call_win = $gameable->call_bet * 2; 
            
            } elseif ($result == PokerHand::RESULT_PUSH) {
                $gameable->ante_win = $gameable->ante_bet;
                $gameable->call_win = $gameable->call_bet;
            }
        
        } else {
            $antePayout = (int) config('casino-holdem.ante_paytable')[$gameable->player_hand_rank];
            $gameable->ante_win = $antePayout > 0 ? $gameable->ante_bet * $antePayout : 0;
            $gameable->call_win = $gameable->call_bet;
        }

        if ($gameable->bonus_bet > 0) {
            $bonusHand = $poker->player()->addBonusHand($poker->getFlop());

            if ($bonusHand->isPairOfAcesOrBetter()) {
                $gameable->player_bonus_hand = $bonusHand->get();
                $gameable->player_bonus_hand_rank = $bonusHand->getRank();
                $bonusPayout = (int) config('casino-holdem.bonus_paytable')[$gameable->player_bonus_hand_rank];
                $gameable->bonus_win = $bonusPayout > 0 ? $gameable->bonus_bet * $bonusPayout : 0;
            }
        }

        $this->save([
            'bet' => $gameable->ante_bet + $gameable->bonus_bet + $gameable->call_bet,
            'win' => $gameable->ante_win + $gameable->bonus_win + $gameable->call_win,
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

        $minBonusBet = intval(config('casino-holdem.min_bonus_bet'));
        $maxBonusBet = intval(config('casino-holdem.max_bonus_bet'));

        $instance
            ->deal([
                'bet' => random_int($minBet ?: config('casino-holdem.min_bet'), $maxBet ?: config('casino-holdem.max_bet')),
                'bonus_bet' => random_int($minBonusBet, random_int(1, $maxBonusBet))
            ])
            ->unsetGameable();

        if (random_int(0, 1) == 0) {
            $instance->fold();
        } else {
            $instance->call();
        }
    }
}
