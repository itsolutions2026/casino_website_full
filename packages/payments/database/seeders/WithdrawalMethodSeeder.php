<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalMethodSeeder.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Seeder;
use Packages\Payments\Models\PaymentGatewayMethod;
use Packages\Payments\Models\WithdrawalMethod;

class WithdrawalMethodSeeder extends Seeder
{
    
    public function run()
    {
        $methods = collect([
            [
                'name' => 'Wire Transfer',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [
                    [
                        'id' => 'name',
                        'type' => 'input',
                        'name' => __('Name'),
                        'description' => '',
                        'validation' => 'required|min:3|max:50',
                        'default' => ''
                    ],
                    [
                        'id' => 'iban',
                        'type' => 'input',
                        'name' => __('Bank account number'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'bank_code',
                        'type' => 'input',
                        'name' => __('Bank BIC / SWIFT code'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'bank_name',
                        'type' => 'input',
                        'name' => __('Bank name'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'bank_branch',
                        'type' => 'input',
                        'name' => __('Bank branch'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'bank_address',
                        'type' => 'input',
                        'name' => __('Bank address'),
                        'description' => '',
                        'validation' => 'required',
                        'default' => ''
                    ],
                    [
                        'id' => 'comment',
                        'type' => 'textarea',
                        'name' => __('Comment'),
                        'description' => '',
                        'validation' => '',
                        'default' => ''
                    ]
                ]
            ],
            [
                'payment_method_code' => 'coinpayments',
                'name' => 'Crypto',
                'currency' => 'LTCT',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'auto' => 0,
                    'limit' => 0,
                    'confirm' => 0
                ],
                'parameters' => [
                    [
                        'id' => 'comment',
                        'type' => 'textarea',
                        'name' => __('Comment'),
                        'description' => '',
                        'validation' => '',
                        'default' => ''
                    ]
                ]
            ],
            [
                'payment_method_code' => 'tron',
                'name' => 'TRX',
                'currency' => 'TRX',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'trc20',
                'name' => 'TRC20 Token',
                'currency' => 'FPLG',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'contract_address' => 'TCTFYnpLALRwQ7t84Bc38VvhPc8G5AF45p',
                    'contract_decimals' => 18
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'sol',
                'name' => 'SOL',
                'currency' => 'SOL',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://api.mainnet-beta.solana.com',
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'ETH',
                'currency' => 'ETH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'ETH',
                    'url' => 'https://nodes.mewapi.io/rpc/eth',
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'ERC20 Token',
                'currency' => 'WEENUS',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://nodes.mewapi.io/rpc/eth',
                    'contract_address' => '0xaFF4481D10270F50f203E0763e2597776068CBc5',
                    'contract_decimals' => 18,
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'BNB',
                'currency' => 'BNB',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'BNB',
                    'url' => 'https://bsc-dataseed.binance.org',
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'BEP20 Token',
                'currency' => 'BUSD',
                'rate' => 10000,
                'decimal_places' => 6,
                'payment_method_parameters' => [
                    'url' => 'https://bsc-dataseed.binance.org',
                    'contract_address' => '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
                    'contract_decimals' => 18,
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'MATIC',
                'currency' => 'MATIC',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'MATIC',
                    'url' => 'https://polygon-rpc.com',
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'ERC20 Polygon Token',
                'currency' => 'TST',
                'rate' => 10000,
                'decimal_places' => 6,
                'payment_method_parameters' => [
                    'url' => 'https://polygon-rpc.com',
                    'contract_address' => '0x2d7882bedcbfddce29ba99965dd3cdf7fcb10a1e',
                    'contract_decimals' => 18,
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'smartBCH',
                'currency' => 'BCH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'BCH',
                    'url' => 'https://smartbch.fountainhead.cash/mainnet',
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'smartBCH Token',
                'currency' => 'MAZE',
                'rate' => 10000,
                'decimal_places' => 6,
                'payment_method_parameters' => [
                    'url' => 'https://smartbch.fountainhead.cash/mainnet',
                    'contract_address' => '0x481De06DCA0198844faA36FCa04Db364e5c2f86C',
                    'contract_decimals' => 6,
                    'auto' => 0,
                    'primary_key' => '',
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'freekassa',
                'name' => 'Freekassa Wallet USD',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [
                    'method' => 2, 
                    'auto' => 0,
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'smartfastpay_bank',
                'name' => 'SmartFastPay Bank Transfer',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [
                    'auto' => 0,
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'smartfastpay_pix',
                'name' => 'SmartFastPay Pix',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [
                    'auto' => 0,
                    'limit' => 0,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'easywire',
                'name' => 'EasyWire',
                'currency' => 'ZAR',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [
                    'auto' => 0,
                    'limit' => 0,
                ],
                'parameters' => []
            ],
        ]);

        $banners = collect([
            'Wire Transfer' => '/images/payments/wire.jpg',
            'Crypto' => '/images/payments/coinpayments.jpg',
            'ETH' => '/images/payments/ethereum.png',
            'ERC20 Token' => '/images/payments/ethereum.png',
            'BNB' => '/images/payments/bnb.png',
            'BEP20 Token' => '/images/payments/bnb.png',
            'MATIC' => '/images/payments/matic.png',
            'ERC20 Polygon Token' => '/images/payments/matic.png',
            'TRX' => '/images/payments/tronlink.jpg',
            'TRC20 Token' => '/images/payments/tronlink.jpg',
            'SOL' => '/images/payments/solana.jpg',
            'smartBCH' => '/images/payments/smart-bch.jpg',
            'smartBCH Token' => '/images/payments/smart-bch.jpg',
            'Freekassa Wallet USD' => '/images/payments/freekassa.jpg',
            'SmartFastPay Bank Transfer' => '/images/payments/smartfastpay.png',
            'SmartFastPay Pix' => '/images/payments/smartfastpay.png',
            'EasyWire' => '/images/payments/easywire.png',
        ]);

        $methods->each(function ($method) {
            $paymentMethodId = isset($method['payment_method_code'])
                ? (PaymentGatewayMethod::where('code', $method['payment_method_code'])
                        ->whereIn('type', [PaymentGatewayMethod::TYPE_OUT, PaymentGatewayMethod::TYPE_BOTH])
                        ->first()
                        ->id ?? NULL
                )
                : NULL;

            WithdrawalMethod::firstOrCreate(
                [
                    'payment_method_id' => $paymentMethodId,
                    'name' => $method['name']
                ],
                [
                    'currency' => $method['currency'],
                    'rate' => $method['rate'],
                    'min_amount' => 100,
                    'max_amount' => 999999999,
                    'payment_method_parameters' => $method['payment_method_parameters'],
                    'parameters' => $method['parameters'],
                    'enabled' => FALSE,
                ]
            );
        });

        
        $banners->each(function ($banner, $name) {
            if ($method = WithdrawalMethod::where('name', $name)
                ->where(function ($builder) {
                    $builder->where('banner', NULL)->orWhere('banner', '');
                })
                ->first()) {
                tap($method)->update(['banner' => $banner]);
            }
        });

        
        collect(WithdrawalMethod::where('decimal_places', NULL)->get())->each(function ($method) use ($methods) {
            $decimalPlaces = $methods->where('name', $method->name)->first()['decimal_places'] ?? NULL;
            if (!is_null($decimalPlaces)) {
                tap($method)->update(['decimal_places' => $decimalPlaces]);
            }
        });
    }
}
