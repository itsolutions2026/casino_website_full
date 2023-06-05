<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaymentGatewayMethodSeeder.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Seeder;
use Packages\Payments\Models\PaymentGateway;
use Packages\Payments\Models\PaymentGatewayMethod;

class PaymentGatewayMethodSeeder extends Seeder
{
    
    public function run()
    {
        $gateways = PaymentGateway::all()->keyBy('code');

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'skrill'
            ],
            [
                'payment_gateway_id' => $gateways['skrill']->id,
                'name' => 'Checkout',
                'parameters' => [],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'EUR', 'KRW', 'USD', 'KWD', 'AED', 'MAD', 'AUD', 'MYR', 'BGN', 'NOK', 'BHD', 'NZD', 'CAD',
                    'OMR', 'CHF', 'PEN', 'COP', 'PLN', 'CZK', 'QAR', 'DKK', 'RON', 'GBP', 'RSD', 'HKD', 'SAR',
                    'HRK', 'SEK', 'HUF', 'SGD', 'ILS', 'THB', 'INR', 'TND', 'ISK', 'TRY', 'JOD', 'TWD', 'JPY',
                    'ZAR'
                ]
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'express'
            ],
            [
                'payment_gateway_id' => $gateways['paypal']->id,
                'name' => 'Express Checkout',
                'parameters' => [],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'AUD', 'BRL', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'HUF', 'INR', 'ILS', 'JPY', 'MYR', 'MXN',
                    'TWD', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'
                ]
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'card'
            ],
            [
                'payment_gateway_id' => $gateways['stripe']->id,
                'name' => 'Debit / Credit Card',
                'parameters' => [],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM',
                    'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BZD', 'CAD',
                    'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
                    'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD',
                    'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES',
                    'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD',
                    'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR',
                    'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR',
                    'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD',
                    'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD',
                    'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF',
                    'YER', 'ZAR', 'ZMW',
                ]
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'coinpayments'
            ],
            [
                'payment_gateway_id' => $gateways['coinpayments']->id,
                'name' => 'Crypto',
                'parameters' => [],
                'input_parameters' => [],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'coinpayments'
            ],
            [
                'payment_gateway_id' => $gateways['coinpayments']->id,
                'name' => 'Crypto',
                'parameters' => [
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.') . ' ' . __('Set the value to zero for unlimited withdrawals.') . ' ' . __('Please note that even though such withdrawals will be processed automatically on the application side an extra email confirmation might be required on the payments provider side (see "Auto confirm withdrawals" setting).'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                    [
                        'id' => 'confirm',
                        'type' => 'switch',
                        'name' => __('Auto confirm'),
                        'description' => __('Auto confirm withdrawals (disable confirmation by email).') . ' ' . __('For this setting to work you also need to set "Allow auto_confirm = 1 in create_withdrawal" permission in your coinpayments.net account for the given API key.'),
                        'validation' => 'min:0|max:1',
                        'default' => 0,
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'tron'
            ],
            [
                'payment_gateway_id' => $gateways['tron']->id,
                'name' => 'Tron',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => '',
                        'validation' => 'required|min:32|max:64',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => ['TRX', 'USD'],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'tron'
            ],
            [
                'payment_gateway_id' => $gateways['tron']->id,
                'name' => 'Tron',
                'parameters' => [],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => ['TRX', 'USD'],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'trc20'
            ],
            [
                'payment_gateway_id' => $gateways['tron']->id,
                'name' => 'TRC20 Token',
                'parameters' => [
                    [
                        'id' => 'contract_address',
                        'type' => 'input',
                        'name' => __('TRC20 token contract address'),
                        'description' => '',
                        'validation' => 'required|min:20|max:50',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_decimals',
                        'type' => 'input',
                        'name' => __('TRC20 token contract decimals'),
                        'description' => '',
                        'validation' => 'integer|min:0|max:20',
                        'default' => 18
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited tokens will be sent to.'),
                        'validation' => 'required|min:20|max:50',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'trc20'
            ],
            [
                'payment_gateway_id' => $gateways['tron']->id,
                'name' => 'TRC20 Token',
                'parameters' => [
                    [
                        'id' => 'contract_address',
                        'type' => 'input',
                        'name' => __('TRC20 token contract address'),
                        'description' => '',
                        'validation' => 'required|min:20|max:50',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_decimals',
                        'type' => 'input',
                        'name' => __('TRC20 token contract decimals'),
                        'description' => '',
                        'validation' => 'integer|min:0|max:20',
                        'default' => 18
                    ]
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_btc'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Bitcoin',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string|min:26|max:62', 
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                    [
                        'id' => 'email',
                        'type' => 'input',
                        'name' => __('E-mail'),
                        'description' => __('E-mail address to receive payment notifications. Note: before getting e-mail payment notifications, you must confirm your e-mail address at https://cryptapi.io/confirm_email'),
                        'validation' => NULL,
                        'default' => ''
                    ],
                    [
                        'id' => 'priority',
                        'type' => 'select',
                        'name' => __('Payment priority'),
                        'description' => __('Attention: this will impact network fees!.'),
                        'validation' => 'required',
                        'options' => [
                            'fast', 'default', 'economic', 'x-economic', 'xx-economic', 'xxx-economic', 'xxxx-economic',
                            'xxxxx-economic'
                        ],
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'BTC', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_eth'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Ethereum',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|size:42',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                    [
                        'id' => 'priority',
                        'type' => 'select',
                        'name' => __('Payment priority'),
                        'description' => __('Attention: this will impact network fees!.'),
                        'validation' => 'required',
                        'options' => [
                            'fast', 'default', 'economic', 'x-economic', 'xx-economic', 'xxx-economic', 'xxxx-economic'
                        ],
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'ETH', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_bch'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Bitcoin Cash',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|size:42',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'BCH', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_ltc'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Litecoin',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string|min:26|max:42',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                    [
                        'id' => 'priority',
                        'type' => 'select',
                        'name' => __('Payment priority'),
                        'description' => __('Attention! This will impact network fees.'),
                        'validation' => 'required',
                        'options' => ['fast', 'default', 'economic'],
                        'default' => ''
                    ]
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'LTC', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_trx'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Tron',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string|min:32|max:64',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'TRX', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_xmr'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'Monero',
                'parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string|min:95|max:106',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'XMR', 'USD', 'EUR', 'GBP', 'CAD', 'JPY', 'AED', 'DKK', 'BRL', 'CNY', 'HKD', 'INR', 'MXN', 'UGX',
                    'PLN', 'PHP', 'CZK', 'HUF', 'BGN', 'RON', 'LKR', 'TRY'
                ],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_erc20'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'ERC20 Token',
                'parameters' => [
                    [
                        'id' => 'ticker',
                        'type' => 'input',
                        'name' => __('Token ticker'),
                        'description' => __('ERC20 token symbol'),
                        'validation' => 'required|string|min:2',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                
                
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_bep20'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'BEP20 Token',
                'parameters' => [
                    [
                        'id' => 'ticker',
                        'type' => 'input',
                        'name' => __('Token ticker'),
                        'description' => __('BEP20 token symbol'),
                        'validation' => 'required|string|min:2',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                
                
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'cryptapi_trc20'
            ],
            [
                'payment_gateway_id' => $gateways['cryptapi']->id,
                'name' => 'TRC20 Token',
                'parameters' => [
                    [
                        'id' => 'ticker',
                        'type' => 'input',
                        'name' => __('Token ticker'),
                        'description' => __('TRC20 token symbol'),
                        'validation' => 'required|string|min:2',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string',
                        'default' => ''
                    ],
                    [
                        'id' => 'confirmations',
                        'type' => 'input',
                        'name' => __('Number of confirmations'),
                        'description' => __('Number of confirmations required before deposit can be marked as completed.'),
                        'validation' => 'required|integer|min:1',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                
                
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'sol'
            ],
            [
                'payment_gateway_id' => $gateways['solana']->id,
                'name' => 'SOL',
                'parameters' => [
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|string|min:32|max:44',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => ['SOL', 'USD'],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'sol'
            ],
            [
                'payment_gateway_id' => $gateways['solana']->id,
                'name' => 'SOL',
                'parameters' => [
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ]
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => ['SOL', 'USD'],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'evm_coin'
            ],
            [
                'payment_gateway_id' => $gateways['evm']->id,
                'name' => 'Coin',
                'parameters' => [
                    [
                        'id' => 'coin',
                        'type' => 'input',
                        'name' => __('Base coin'),
                        'description' => __('Base coin for the current chain, e.g. ETH, BNB, MATIC etc.'),
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'evm_coin'
            ],
            [
                'payment_gateway_id' => $gateways['evm']->id,
                'name' => 'Coin',
                'parameters' => [
                    [
                        'id' => 'coin',
                        'type' => 'input',
                        'name' => __('Base coin'),
                        'description' => __('Base coin for the current chain, e.g. ETH, BNB, MATIC etc.'),
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'primary_key',
                        'type' => 'input',
                        'name' => __('Primary key'),
                        'description' => __('The primary key corresponding to the address from which the funds will be sent.') . ' ' . __('If the primary key is not set or is incorrect, the automatic process will not work.'),
                        'validation' => 'required|size:64',
                        'default' => '',
                        'visible_if' => 'auto'
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.') . ' ' . __('Set the value to zero for unlimited withdrawals.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'evm_token'
            ],
            [
                'payment_gateway_id' => $gateways['evm']->id,
                'name' => 'Token',
                'parameters' => [
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_address',
                        'type' => 'input',
                        'name' => __('Token contract address'),
                        'description' => '',
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_decimals',
                        'type' => 'input',
                        'name' => __('Token contract decimals'),
                        'description' => '',
                        'validation' => 'integer|min:0|max:20',
                        'default' => 18
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'evm_token'
            ],
            [
                'payment_gateway_id' => $gateways['evm']->id,
                'name' => 'Token',
                'parameters' => [
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_address',
                        'type' => 'input',
                        'name' => __('Token contract address'),
                        'description' => '',
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => ''
                    ],
                    [
                        'id' => 'contract_decimals',
                        'type' => 'input',
                        'name' => __('Token contract decimals'),
                        'description' => '',
                        'validation' => 'integer|min:0|max:20',
                        'default' => 18
                    ],
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'primary_key',
                        'type' => 'input',
                        'name' => __('Primary key'),
                        'description' => __('The primary key corresponding to the address from which the funds will be sent.') . ' ' . __('If the primary key is not set or is incorrect, the automatic process will not work.'),
                        'validation' => 'required|size:64',
                        'default' => '',
                        'visible_if' => 'auto'
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.') . ' ' . __('Set the value to zero for unlimited withdrawals.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required|size:42|regex:/^0x[0-9a-fA-F]{40}$/',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'ripple_coin'
            ],
            [
                'payment_gateway_id' => $gateways['xrpl']->id,
                'name' => 'Coin',
                'parameters' => [
                    [
                        'id' => 'coin',
                        'type' => 'input',
                        'name' => __('Base coin'),
                        'description' => __('Base coin for the current chain, e.g. ETH, BNB, MATIC etc.'),
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Deposit address'),
                        'description' => __('The address, where deposited coins will be sent to.'),
                        'validation' => 'required|min:265|max:35|regex:/^r[0–9a-zA-Z]/',
                        'default' => ''
                    ],
                ],
                'input_parameters' => [],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'ripple_coin'
            ],
            [
                'payment_gateway_id' => $gateways['xrpl']->id,
                'name' => 'Coin',
                'parameters' => [
                    [
                        'id' => 'coin',
                        'type' => 'input',
                        'name' => __('Base coin'),
                        'description' => __('Base coin for the current chain, e.g. ETH, BNB, MATIC etc.'),
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'url',
                        'type' => 'input',
                        'name' => __('JSON-RPC URL'),
                        'description' => '',
                        'validation' => 'required|url',
                        'default' => ''
                    ],
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'primary_key',
                        'type' => 'input',
                        'name' => __('Primary key'),
                        'description' => __('The primary key corresponding to the address from which the funds will be sent.') . ' ' . __('If the primary key is not set or is incorrect, the automatic process will not work.'),
                        'validation' => 'required|max:64',
                        'default' => '',
                        'visible_if' => 'auto'
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.') . ' ' . __('Set the value to zero for unlimited withdrawals.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'address',
                        'type' => 'input',
                        'name' => __('Address'),
                        'description' => '',
                        'validation' => 'required|min:265|max:35|regex:/^r[0–9a-zA-Z]/',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [],
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'freekassa'
            ],
            [
                'payment_gateway_id' => $gateways['freekassa']->id,
                'name' => 'Freekassa',
                'parameters' => [],
                'input_parameters' => [],
                'allowed_currencies' => [
                    'USD', 'EUR', 'RUB', 'UAH', 'KZT'
                ]
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'freekassa'
            ],
            [
                'payment_gateway_id' => $gateways['freekassa']->id,
                'name' => 'Freekassa',
                'parameters' => [
                    [
                        'id' => 'method',
                        'type' => 'select',
                        'name' => __('Payment method'),
                        'description' => __('Numeric ID of the payment method.') . ' ' . __('List of all methods') . ': https://docs.freekassa.ru/#section/1.-Vvedenie/1.7.-Formirovanie-podpisi-v-skripte-opovesheniya',
                        'options' => [
                            ['value' => 1, 'text' => 'FK WALLET RUB'],
                            ['value' => 2, 'text' => 'FK WALLET USD'],
                            ['value' => 3, 'text' => 'FK WALLET EUR'],
                            ['value' => 4, 'text' => 'VISA RUB'],
                            ['value' => 6, 'text' => 'Yoomoney'],
                            ['value' => 7, 'text' => 'VISA UAH'],
                            ['value' => 8, 'text' => 'MasterCard RUB'],
                            ['value' => 9, 'text' => 'MasterCard UAH'],
                            ['value' => 10, 'text' => 'Qiwi'],
                            ['value' => 11, 'text' => 'VISA EUR'],
                            ['value' => 12, 'text' => 'МИР'],
                            ['value' => 13, 'text' => 'Онлайн банк'],
                            ['value' => 14, 'text' => 'USDT (ERC20)'],
                            ['value' => 15, 'text' => 'USDT (TRC20)'],
                            ['value' => 16, 'text' => 'Bitcoin Cash'],
                            ['value' => 17, 'text' => 'BNB'],
                            ['value' => 18, 'text' => 'DASH'],
                            ['value' => 19, 'text' => 'Dogecoin'],
                            ['value' => 20, 'text' => 'ZCash'],
                            ['value' => 21, 'text' => 'Monero'],
                            ['value' => 22, 'text' => 'Waves'],
                            ['value' => 23, 'text' => 'Ripple'],
                            ['value' => 24, 'text' => 'Bitcoin'],
                            ['value' => 25, 'text' => 'Litecoin'],
                            ['value' => 26, 'text' => 'Ethereum'],
                            ['value' => 27, 'text' => 'SteamPay'],
                            ['value' => 28, 'text' => 'Мегафон'],
                            ['value' => 32, 'text' => 'VISA USD'],
                            ['value' => 33, 'text' => 'Perfect Money USD'],
                            ['value' => 34, 'text' => 'Shiba Inu'],
                            ['value' => 35, 'text' => 'QIWI API'],
                            ['value' => 36, 'text' => 'Card RUB API'],
                            ['value' => 37, 'text' => 'Google pay'],
                            ['value' => 38, 'text' => 'Apple pay'],
                            ['value' => 39, 'text' => 'Tron'],
                            ['value' => 40, 'text' => 'Webmoney WMZ'],
                            ['value' => 41, 'text' => 'VISA / MasterCard KZT'],
                            ['value' => 42, 'text' => 'СБП'],
                        ],
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'account',
                        'type' => 'input',
                        'name' => __('Account'),
                        'description' => __('Account or wallet where the funds should be sent to.'),
                        'validation' => 'required',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => [
                    'USD', 'EUR', 'RUB', 'UAH', 'KZT'
                ]
            ]
        );















        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'smartfastpay'
            ],
            [
                'payment_gateway_id' => $gateways['smartfastpay']->id,
                'name' => 'Payments',
                'parameters' => [],
                'input_parameters' => [
                    [
                        'id' => 'method',
                        'type' => 'select',
                        'name' => __('Payment method'),
                        'options' => [
                            ['value' => 'pix', 'text' => __('Pix')],
                            ['value' => 'bank_transfer', 'text' => __('Bank transfer')],
                        ],
                        'validation' => 'required|in:pix,bank_transfer',
                        'default' => 'pix',
                    ],
                    [
                        'id' => 'cpf',
                        'type' => 'input',
                        'name' => __('CPF number'),
                        'description' => '',
                        'validation' => 'required|size:11|regex:/^[0-9]{11}$/',
                        'default' => '',
                    ]
                ],
                'allowed_currencies' => ['USD', 'BRL']
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'smartfastpay_bank'
            ],
            [
                'payment_gateway_id' => $gateways['smartfastpay']->id,
                'name' => 'Bank Transfer',
                'parameters' => [
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'cpf',
                        'type' => 'input',
                        'name' => __('CPF number'),
                        'description' => '',
                        'validation' => 'required|size:11|regex:/^[0-9]{11}$/',
                        'default' => '',
                    ],
                    [
                        'id' => 'name',
                        'type' => 'input',
                        'name' => __('Bank name'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'code',
                        'type' => 'input',
                        'name' => __('Bank code'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'agency',
                        'type' => 'input',
                        'name' => __('Agency'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'account',
                        'type' => 'input',
                        'name' => __('Account'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'account_operation',
                        'type' => 'input',
                        'name' => __('Account operation'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                ],
                'allowed_currencies' => ['USD', 'BRL']
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'smartfastpay_pix'
            ],
            [
                'payment_gateway_id' => $gateways['smartfastpay']->id,
                'name' => 'Pix',
                'parameters' => [
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'cpf',
                        'type' => 'input',
                        'name' => __('CPF number'),
                        'description' => '',
                        'validation' => 'required|size:11|regex:/^[0-9]{11}$/',
                        'default' => '',
                    ],
                    [
                        'id' => 'key',
                        'type' => 'input',
                        'name' => __('Pix key'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                ],
                'allowed_currencies' => ['USD', 'BRL']
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'mercadopago'
            ],
            [
                'payment_gateway_id' => $gateways['mercadopago']->id,
                'name' => 'Mercado Pago',
                'parameters' => [
                    
                    [
                        'id' => 'excluded_payment_types',
                        'type' => 'select',
                        'name' => __('Excluded payment types'),
                        'description' => '',
                        'validation' => '',
                        'options' => [
                            'atm', 'bank_transfer', 'credit_card', 'crypto_transfer', 'debit_card', 'digital_currency',
                            'digital_wallet', 'prepaid_card', 'ticket', 'voucher_card'
                        ],
                        'multiple' => TRUE,
                        'default' => ''
                    ]
                ],
                'input_parameters' => [],
                'allowed_currencies' => [
                    
                    
                ]
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_IN,
                'code' => 'easywire'
            ],
            [
                'payment_gateway_id' => $gateways['easywire']->id,
                'name' => 'EasyWire',
                'parameters' => [],
                'input_parameters' => [
                    [
                        'id' => 'method',
                        'type' => 'select',
                        'name' => __('Payment method'),
                        'options' => [
                            ['value' => 'credit_card', 'text' => __('Credit card')],
                            ['value' => 'eft', 'text' => __('EFT')],
                        ],
                        'validation' => 'required|in:credit_card,eft',
                        'default' => 'credit_card',
                    ],
                ],
                'allowed_currencies' => []
            ]
        );

        PaymentGatewayMethod::updateOrCreate(
            [
                'type' => PaymentGatewayMethod::TYPE_OUT,
                'code' => 'easywire'
            ],
            [
                'payment_gateway_id' => $gateways['easywire']->id,
                'name' => 'EasyWire',
                'parameters' => [
                    [
                        'id' => 'auto',
                        'type' => 'switch',
                        'name' => __('Auto process'),
                        'description' => '',
                        'validation' => '',
                        'default' => 0
                    ],
                    [
                        'id' => 'limit',
                        'type' => 'input',
                        'name' => __('Limit'),
                        'description' => __('Withdrawals above this limit will need to be processed manually.'),
                        'validation' => 'required|integer|min:0',
                        'default' => 0,
                        'suffix' => 'credits',
                        'visible_if' => 'auto'
                    ],
                ],
                'input_parameters' => [
                    [
                        'id' => 'bank',
                        'type' => 'input',
                        'name' => __('Bank name'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                    [
                        'id' => 'branch',
                        'type' => 'select',
                        'name' => __('Bank branch'),
                        'description' => '',
                        'options' => [
                            ['value' => 250655, 'text' => 'FNB'],
                            ['value' => 632005, 'text' => 'ABSA'],
                            ['value' => 051001, 'text' => 'STANDARD'],
                            ['value' => 198765, 'text' => 'NEDBANK'],
                            ['value' => 470010, 'text' => 'CAPITEC'],
                            ['value' => 580105, 'text' => 'INVESTEC'],
                            ['value' => 450105, 'text' => 'MERCANTILE'],
                            ['value' => 462005, 'text' => 'BIDVEST'],
                            ['value' => 678910, 'text' => 'TYME'],
                            ['value' => 483872, 'text' => 'WINDHOEK'],
                            ['value' => 430000, 'text' => 'AFRIBANK'],
                            ['value' => 679000, 'text' => 'DISCOVERY'],
                            ['value' => 584000, 'text' => 'GRINDROD'],
                            ['value' => 431010, 'text' => 'UBANK'],
                            ['value' => 39001, 'text' => 'IMPERIAL'],
                            ['value' => 201419, 'text' => 'FIRSTRAND'],
                            ['value' => 587000, 'text' => 'HSBC'],
                            ['value' => 683000, 'text' => 'SASFIN'],
                            ['value' => 410506, 'text' => 'ACCESS'],
                            ['value' => 730020, 'text' => 'STDCHARTERED'],
                        ],
                        'validation' => 'required|in:250655,632005,051001,198765,470010,580105,450105,462005,678910,483872,430000,679000,584000,431010,39001,201419,587000,683000,410506,730020',
                        'default' => '',
                    ],
                    [
                        'id' => 'account_type',
                        'type' => 'select',
                        'name' => __('Account type'),
                        'description' => '',
                        'options' => [
                            ['value' => 'cheque', 'text' => __('Cheque')],
                            ['value' => 'savings', 'text' => __('Savings')],
                            ['value' => 'transmission', 'text' => __('Transmission')],
                        ],
                        'validation' => 'required|in:cheque,savings,transmission',
                        'default' => 'cheque',
                    ],
                    [
                        'id' => 'account',
                        'type' => 'input',
                        'name' => __('Account'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => '',
                    ],
                ],
                'allowed_currencies' => []
            ]
        );
    }
}
