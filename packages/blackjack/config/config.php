<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   config.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

return [
    'version'               => '1.2.0',
    'categories'            => json_decode(env('GAME_BLACKJACK_CATEGORIES', json_encode(['Cards']))),
    'banner'                => env('GAME_BLACKJACK_BANNER', '/images/games/blackjack.jpg'),
    'min_bet'               => env('GAME_BLACKJACK_MIN_BET', 1),
    'max_bet'               => env('GAME_BLACKJACK_MAX_BET', 50),
    'bet_change_amount'     => env('GAME_BLACKJACK_BET_CHANGE_AMOUNT', 1),
    'default_bet_amount'    => env('GAME_BLACKJACK_DEFAULT_BET_AMOUNT', 1), 
    'sounds'                => [
        'win' => env('GAME_BLACKJACK_SOUNDS_WIN'),
        'lose' => env('GAME_BLACKJACK_SOUNDS_LOSE'),
        'push' => env('GAME_BLACKJACK_SOUNDS_PUSH'),
    ],
];
