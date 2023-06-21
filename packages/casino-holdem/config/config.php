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
    'categories'            => json_decode(env('GAME_CASINO_HOLDEM_CATEGORIES', json_encode(['Cards', 'Poker']))),
    'banner'                => env('GAME_CASINO_HOLDEM_BANNER', '/images/games/casino-holdem.jpg'),
    
    'min_bet'               => env('GAME_CASINO_HOLDEM_MIN_BET', 1),
    'max_bet'               => env('GAME_CASINO_HOLDEM_MAX_BET', 50),
    'bet_change_amount'     => env('GAME_CASINO_HOLDEM_BET_CHANGE_AMOUNT', 1),
    'default_bet_amount'    => env('GAME_CASINO_HOLDEM_DEFAULT_BET_AMOUNT', 1), 
    
    'min_bonus_bet'             => env('GAME_CASINO_HOLDEM_MIN_BONUS_BET', 0),
    'max_bonus_bet'             => env('GAME_CASINO_HOLDEM_MAX_BONUS_BET', 50),
    'bonus_bet_change_amount'   => env('GAME_CASINO_HOLDEM_BONUS_BET_CHANGE_AMOUNT', 1),
    'default_bonus_bet_amount'  => env('GAME_CASINO_HOLDEM_DEFAULT_BONUS_BET_AMOUNT', 0),

    'sounds'                => [
        'win' => env('GAME_CASINO_HOLDEM_SOUNDS_WIN'),
        'lose' => env('GAME_CASINO_HOLDEM_SOUNDS_LOSE'),
        'push' => env('GAME_CASINO_HOLDEM_SOUNDS_PUSH'),
    ],

    'ante_paytable' => json_decode(env('GAME_CASINO_HOLDEM_ANTE_PAYTABLE', json_encode([
        0 => 0, 
        1 => 2, 
        2 => 2, 
        3 => 2, 
        4 => 2, 
        5 => 3, 
        6 => 4, 
        7 => 11, 
        8 => 21, 
        9 => 101, 
    ]))),

    'bonus_paytable' => json_decode(env('GAME_CASINO_HOLDEM_BONUS_PAYTABLE', json_encode([
        0 => 0, 
        1 => 8, 
        2 => 8, 
        3 => 8, 
        4 => 8, 
        5 => 21, 
        6 => 31, 
        7 => 41, 
        8 => 51, 
        9 => 101, 
    ]))),
];
