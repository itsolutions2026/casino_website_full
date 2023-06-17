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
    'version'               => '1.1.0',
    'categories'            => json_decode(env('GAME_MULTIPLAYER_BLACKJACK_CATEGORIES', json_encode(['Cards', 'Multiplayer']))),
    'banner'                => env('GAME_MULTIPLAYER_BLACKJACK_BANNER', '/images/games/multiplayer-blackjack.jpg'),
    'background'            => env('GAME_MULTIPLAYER_BLACKJACK_BACKGROUND', ''),
    'min_bet'               => env('GAME_MULTIPLAYER_BLACKJACK_MIN_BET', 1),
    'max_bet'               => env('GAME_MULTIPLAYER_BLACKJACK_MAX_BET', 50),
    'fee'                   => env('GAME_MULTIPLAYER_BLACKJACK_FEE', 10), 
    'action_duration'       => env('GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION', 15), 
    'final_hit_threshold'   => env('GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD', 5), 
    'cancel_threshold'      => env('GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD', 30), 
    'sounds'                => [
        'win' => env('GAME_MULTIPLAYER_BLACKJACK_SOUNDS_WIN'),
        'lose' => env('GAME_MULTIPLAYER_BLACKJACK_SOUNDS_LOSE'),
        'push' => env('GAME_MULTIPLAYER_BLACKJACK_SOUNDS_PUSH'),
    ],
    'parameters' => [
        [
            'id' => 'bet',
            'type' => 'input',
            'name' => 'Bet',
            'description' => 'Bet amount in every game',
            'validation' => sprintf('required|integer|min:%d|max:%d', env('GAME_MULTIPLAYER_BLACKJACK_MIN_BET', 1), env('GAME_MULTIPLAYER_BLACKJACK_MAX_BET', 50)),
            'default' => env('GAME_MULTIPLAYER_BLACKJACK_MIN_BET', 1)
        ],
        [
            'id' => 'players_count',
            'type' => 'input',
            'name' => 'Players count',
            'description' => 'Number of players required to join the game room (including you)',
            'validation' => 'required|integer|min:2|max:5',
            'default' => 2
        ],
    ]
];
