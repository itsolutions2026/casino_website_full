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
    'version' => '1.17.0',

    'public_variables' => [
        'deposit_min',
        'deposit_max',
        'withdrawal_min',
        'withdrawal_max',
        'stripe.public_key',
        'tron.network',
    ],

    'deposit_min'               => env('PAYMENTS_DEPOSIT_MIN', 100),
    'deposit_max'               => env('PAYMENTS_DEPOSIT_MAX', 999999999),
    'withdrawal_min'            => env('PAYMENTS_WITHDRAWAL_MIN', 100),
    'withdrawal_max'            => env('PAYMENTS_WITHDRAWAL_MAX', 999999999),
    'withdrawal_daily_limit'    => env('PAYMENTS_WITHDRAWAL_DAILY_LIMIT', 500),
    'withdrawal_weekly_limit'   => env('PAYMENTS_WITHDRAWAL_WEEKLY_LIMIT', 1000),
    'withdrawal_monthly_limit'  => env('PAYMENTS_WITHDRAWAL_MONTHLY_LIMIT', 5000),
    'withdrawal_only_profits'   => env('PAYMENTS_WITHDRAWAL_ONLY_PROFITS', TRUE),
    'min_total_deposit_to_withdraw' => env('PAYMENTS_MIN_TOTAL_DEPOSIT_TO_WITHDRAW', 0),
    'deposit_auto_cancel_days' => env('PAYMENTS_DEPOSIT_AUTO_CANCEL_DAYS', 3),

    'notifications' => [
        'admin' => [
            'deposit' => [
                'enabled' => env('PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_ENABLED', FALSE),
                'treshold' => env('PAYMENTS_NOTIFICATIONS_ADMIN_DEPOSIT_TRESHOLD', 0),
            ],
            'withdrawal' => [
                'enabled' => env('PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_ENABLED', FALSE),
                'treshold' => env('PAYMENTS_NOTIFICATIONS_ADMIN_WITHDRAWAL_TRESHOLD', 0),
            ],
        ],
    ],

    'paypal' => [
        'test_mode'     => env('PAYMENTS_PAYPAL_TEST_MODE', FALSE),
        'user'          => env('PAYMENTS_PAYPAL_USER'),
        'password'      => env('PAYMENTS_PAYPAL_PASSWORD'),
        'signature'     => env('PAYMENTS_PAYPAL_SIGNATURE'),
    ],

    'skrill' => [
        'account' => env('PAYMENTS_SKRILL_ACCOUNT_EMAIL'),
        'secret' => env('PAYMENTS_SKRILL_SECRET_WORD'),
        'methods' => json_decode(env('PAYMENTS_SKRILL_PAYMENT_METHODS', '[]'), true)
    ],

    'stripe' => [
        'public_key'        => env('PAYMENTS_STRIPE_PUBLIC_KEY'),
        'secret_key'        => env('PAYMENTS_STRIPE_SECRET_KEY'),
    ],

    'coinpayments' => [
        'merchant_id'               => env('PAYMENTS_COINPAYMENTS_MERCHANT_ID'),
        'public_key'                => env('PAYMENTS_COINPAYMENTS_PUBLIC_KEY'),
        'private_key'               => env('PAYMENTS_COINPAYMENTS_PRIVATE_KEY'),
        'secret_key'                => env('PAYMENTS_COINPAYMENTS_SECRET_KEY'),
    ],

    'tron' => [
        'network' => env('PAYMENTS_TRON_NETWORK', 'api.trongrid.io'),
    ],

    'cryptapi' => [
        'secret' => env('PAYMENTS_CRYPTAPI_SECRET'),
        'supported_fiat_currencies' => json_decode(env(
            'PAYMENTS_CRYPTAPI_SUPPORTED_FIAT_CURRENCIES',
            json_encode(['USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX', 'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY']))
        )
    ],

    'freekassa' => [
        'merchant_id'   => env('PAYMENTS_FREEKASSA_MERCHANT_ID'),
        'api_key'       => env('PAYMENTS_FREEKASSA_API_KEY'),
        'secret'        => env('PAYMENTS_FREEKASSA_SECRET_WORD'),
        'secret2'       => env('PAYMENTS_FREEKASSA_SECRET_WORD2'),
    ],

    'paytm' => [
        'merchant_id'   => env('PAYMENTS_PAYTM_MERCHANT_ID'),
        'secret_key'    => env('PAYMENTS_PAYTM_SECRET_KEY'),
        'live'          => env('PAYMENTS_PAYTM_LIVE', FALSE),
    ],

    'smartfastpay' => [
        'client_id'     => env('PAYMENTS_SMARTFASTPAY_CLIENT_ID'),
        'secret_key'    => env('PAYMENTS_SMARTFASTPAY_SECRET_KEY'),
        'live'          => env('PAYMENTS_SMARTFASTPAY_LIVE', FALSE),
    ],

    'mercadopago' => [
        'access_token' => env('PAYMENTS_MERCADOPAGO_ACCESS_TOKEN'),
        'live'         => env('PAYMENTS_MERCADOPAGO_LIVE', FALSE),
    ],

    'easywire' => [
        'user'          => env('PAYMENTS_EASYWIRE_USER'),
        'password'      => env('PAYMENTS_EASYWIRE_PASSWORD'),
    ],
];
