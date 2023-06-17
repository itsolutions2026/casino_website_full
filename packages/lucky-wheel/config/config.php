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
    'version'    => '1.1.0',
    'variations' => json_decode(env('GAME_LUCKY_WHEEL_VARIATIONS', json_encode([
        [
            'title'                 => 'Lucky Wheel',
            'slug'                  => 'wheel-of-fortune',
            'min_bet'               => 1,
            'max_bet'               => 50,
            'bet_change_amount'     => 1,
            'default_bet_amount'    => 1,
            'categories'            => ['Roulette'],
            'banner'                => '/images/games/lucky-wheel.jpg',
            'background'            => '',
            'auto_play'             => [
                'enabled' => TRUE,
                'interval'  => 8,
            ],
            'sounds'                => [
                'win' => NULL,
                'lose' => NULL,
            ],
            'sections'              => [
                ['title'  => 'No luck',     'payout' => 0, 'backgroundColor' => '#51A5F8', 'fontColor' => '#ffffff', 'font' => 100],
                ['title'  => 'x1',          'payout' => 1, 'backgroundColor' => '#1976D2', 'fontColor' => '#ffffff', 'font' => 125],
                ['title'  => 'No luck',     'payout' => 0, 'backgroundColor' => '#51A5F8', 'fontColor' => '#ffffff', 'font' => 100],
                ['title'  => 'x1',          'payout' => 1, 'backgroundColor' => '#1976D2', 'fontColor' => '#ffffff', 'font' => 125],
                ['title'  => 'No luck',     'payout' => 0, 'backgroundColor' => '#51A5F8', 'fontColor' => '#ffffff', 'font' => 100],
                ['title'  => 'x1',          'payout' => 1, 'backgroundColor' => '#1976D2', 'fontColor' => '#ffffff', 'font' => 125],
                ['title'  => 'No luck',     'payout' => 0, 'backgroundColor' => '#51A5F8', 'fontColor' => '#ffffff', 'font' => 100],
                ['title'  => 'x4',          'payout' => 4, 'backgroundColor' => '#FFA31F', 'fontColor' => '#6F3800', 'font' => 175],
            ]
        ]
    ])))
];
