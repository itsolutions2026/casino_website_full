<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositMethodSeeder.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Seeder;
use Packages\Payments\Models\DepositMethod;
use Packages\Payments\Models\PaymentGatewayMethod;

class DepositMethodSeeder extends Seeder
{
    
    public function run()
    {
        $methods = collect([
            [
                'payment_method_code' => 'skrill',
                'name' => 'Skrill',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [],
            ],
            [
                'payment_method_code' => 'express',
                'name' => 'PayPal',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [],
            ],
            [
                'payment_method_code' => 'card',
                'name' => 'Debit / Credit Card',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'coinpayments',
                'name' => 'Crypto',
                'currency' => 'LTCT',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'tron',
                'name' => 'TRX (Tronlink)',
                'currency' => 'TRX',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => 'TJ4GkhFnFete6Z899PphT8KdJ5vc1wvvu4'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'trc20',
                'name' => 'TRC20 Token (Tronlink)',
                'currency' => 'FPLG',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'contract_address' => 'TCTFYnpLALRwQ7t84Bc38VvhPc8G5AF45p',
                    'contract_decimals' => 18,
                    'address' => 'TJ4GkhFnFete6Z899PphT8KdJ5vc1wvvu4'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_btc',
                'name' => 'Bitcoin (CryptAPI)',
                'currency' => 'BTC',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => 'bc1qam9kp4vulswvzm3xn8dyrp3n48fjyuhj5u53w3',
                    'confirmations' => 1,
                    'email' => '',
                    'priority' => 'default'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_eth',
                'name' => 'Ethereum (CryptAPI)',
                'currency' => 'ETH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => '0x6810b38e142d05f3F05fB22E1e593ecFDbB5bB2c',
                    'confirmations' => 1,
                    'email' => '',
                    'priority' => 'default'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_bch',
                'name' => 'Bitcoin Cash (CryptAPI)',
                'currency' => 'BCH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => 'qr074demklvhl62ggyqtl59nfeqwvfu5wqa6uvnrdp',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_ltc',
                'name' => 'Litecoin (CryptAPI)',
                'currency' => 'LTC',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => 'LcmngTH4gsQ2CBZxhxKYZqYQ98c4Q4jLLc',
                    'confirmations' => 1,
                    'email' => '',
                    'priority' => 'default'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_trx',
                'name' => 'Tron (CryptAPI)',
                'currency' => 'TRX',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => 'TQpJJikdk7tv1xn2hP5hUYf3o6Ud7XMYc7',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_xmr',
                'name' => 'Monero (CryptAPI)',
                'currency' => 'XMR',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'address' => '496BfUnd1DJ21kDDkQtDoJbRgH4WnzeCjb9TF7EumC5njTDSm9mgCv4doTpQWVTLdaKG1RuLTzUDY8hXKyPnR9xGGMroDkX',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_erc20',
                'name' => 'ERC20 Token (CryptAPI)',
                'currency' => 'BUSD',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'ticker' => 'BUSD',
                    'address' => '0x6810b38e142d05f3F05fB22E1e593ecFDbB5bB2c',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_bep20',
                'name' => 'BEP20 Token (CryptAPI)',
                'currency' => 'ADA',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'ticker' => 'ADA',
                    'address' => '0x6810b38e142d05f3F05fB22E1e593ecFDbB5bB2c',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'cryptapi_trc20',
                'name' => 'TRC20 Token (CryptAPI)',
                'currency' => 'AEDT',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'ticker' => 'AEDT',
                    'address' => 'TQpJJikdk7tv1xn2hP5hUYf3o6Ud7XMYc7',
                    'confirmations' => 1,
                    'email' => ''
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'sol',
                'name' => 'SOL (Phantom)',
                'currency' => 'SOL',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://api.mainnet-beta.solana.com',
                    'address' => 'JoXU3VJJ6qKCDDmmjgNwdicEifd11qZE51Vv6uiRYEf'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'ETH (Metamask)',
                'currency' => 'ETH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'ETH',
                    'url' => 'https://nodes.mewapi.io/rpc/eth',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'ERC20 Token (Metamask)',
                'currency' => 'WEENUS',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://nodes.mewapi.io/rpc/eth',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538',
                    'contract_address' => '0xaFF4481D10270F50f203E0763e2597776068CBc5',
                    'contract_decimals' => 18,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'BNB (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to Binance Smart Chain network (<a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain">read more</a>). </p>',
                'currency' => 'BNB',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'BNB',
                    'url' => 'https://bsc-dataseed.binance.org',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'BEP20 Token (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to Binance Smart Chain network (<a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain">read more</a>). </p>',
                'currency' => 'BUSD',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://bsc-dataseed.binance.org',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538',
                    'contract_address' => '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
                    'contract_decimals' => 18,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'MATIC (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to Polygon network (<a href="https://academy.binance.com/en/articles/how-to-add-polygon-to-metamask">read more</a>). </p>',
                'currency' => 'MATIC',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'MATIC',
                    'url' => 'https://polygon-rpc.com',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'ERC20 Polygon Token (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to Polygon network (<a href="https://academy.binance.com/en/articles/how-to-add-polygon-to-metamask">read more</a>). </p>',
                'currency' => 'TST',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'url' => 'https://polygon-rpc.com',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538',
                    'contract_address' => '0x2d7882bedcbfddce29ba99965dd3cdf7fcb10a1e',
                    'contract_decimals' => 18,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_coin',
                'name' => 'smartBCH (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to smartBCH network (<a href="https://read.cash/@Pjman7/how-to-add-smartbch-on-metamask-or-brave-wallet-f9abf092">read more</a>). </p>',
                'currency' => 'BCH',
                'rate' => 10000,
                'decimal_places' => 8,
                'payment_method_parameters' => [
                    'coin' => 'BCH',
                    'url' => 'https://smartbch.fountainhead.cash/mainnet',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538'
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'evm_token',
                'name' => 'smartBCH Token (Metamask)',
                'description' => '<p>Before making a deposit please check that Metamask is connected to smartBCH network (<a href="https://read.cash/@Pjman7/how-to-add-smartbch-on-metamask-or-brave-wallet-f9abf092">read more</a>). </p>',
                'currency' => 'MAZE',
                'rate' => 10000,
                'decimal_places' => 6,
                'payment_method_parameters' => [
                    'url' => 'https://smartbch.fountainhead.cash/mainnet',
                    'address' => '0xAa5CE79bfC453761b084a780044AFf329F002538',
                    'contract_address' => '0x481De06DCA0198844faA36FCa04Db364e5c2f86C',
                    'contract_decimals' => 6,
                ],
                'parameters' => []
            ],
            [
                'payment_method_code' => 'freekassa',
                'name' => 'Freekassa',
                'currency' => 'USD',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [],
            ],









            [
                'payment_method_code' => 'smartfastpay',
                'name' => 'SmartFastPay',
                'currency' => 'BRL',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [],
            ],
            [
                'payment_method_code' => 'mercadopago',
                'name' => 'Mercado Pago',
                'currency' => 'BRL',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [
                    'excluded_payment_types' => []
                ],
                'parameters' => [],
            ],
            [
                'payment_method_code' => 'easywire',
                'name' => 'EasyWire',
                'currency' => 'ZAR',
                'rate' => 100,
                'decimal_places' => 2,
                'payment_method_parameters' => [],
                'parameters' => [],
            ],
        ]);

        $banners = collect([
            'PayPal' => '/images/payments/paypal.jpg',
            'Debit / Credit Card' => '/images/payments/stripe.jpg',
            'Skrill' => '/images/payments/skrill.jpg',
            'Crypto' => '/images/payments/coinpayments.jpg',
            'ETH (Metamask)' => '/images/payments/ethereum.png',
            'ERC20 Token (Metamask)' => '/images/payments/ethereum.png',
            'BNB (Metamask)' => '/images/payments/bnb.png',
            'BEP20 Token (Metamask)' => '/images/payments/bnb.png',
            'MATIC (Metamask)' => '/images/payments/matic.png',
            'ERC20 Polygon Token (Metamask)' => '/images/payments/matic.png',
            'TRX (Tronlink)' => '/images/payments/tronlink.jpg',
            'TRC20 Token (Tronlink)' => '/images/payments/tronlink.jpg',
            'Bitcoin (CryptAPI)' => '/images/payments/bitcoin.png',
            'Ethereum (CryptAPI)' => '/images/payments/ethereum.png',
            'Litecoin (CryptAPI)' => '/images/payments/litecoin.png',
            'Bitcoin Cash (CryptAPI)' => '/images/payments/bitcoin-cash.jpg',
            'Tron (CryptAPI)' => '/images/payments/tron.jpg',
            'Monero (CryptAPI)' => '/images/payments/monero.jpg',
            'ERC20 Token (CryptAPI)' => '/images/payments/erc20.jpg',
            'BEP20 Token (CryptAPI)' => '/images/payments/bep20.jpg',
            'TRC20 Token (CryptAPI)' => '/images/payments/trc20.jpg',
            'SOL (Phantom)' => '/images/payments/solana.jpg',
            'smartBCH (Metamask)' => '/images/payments/smart-bch.jpg',
            'smartBCH Token (Metamask)' => '/images/payments/smart-bch.jpg',
            'Freekassa' => '/images/payments/freekassa.jpg',
            'SmartFastPay' => '/images/payments/smartfastpay.png',
            'Mercado Pago' => '/images/payments/mercadopago.jpg',
            'EasyWire' => '/images/payments/easywire.png',
        ]);

        $methods->each(function ($method) {
            $paymentMethodId = isset($method['payment_method_code'])
                ? (PaymentGatewayMethod::where('code', $method['payment_method_code'])
                        ->whereIn('type', [PaymentGatewayMethod::TYPE_IN, PaymentGatewayMethod::TYPE_BOTH])
                        ->first()
                        ->id ?? NULL
                )
                : NULL;

            DepositMethod::firstOrCreate(
                [
                    'payment_method_id' => $paymentMethodId,
                    'name' => $method['name']
                ],
                [
                    'description' => $method['description'] ?? NULL,
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
            if ($method = DepositMethod::where('name', $name)
                ->where(function ($builder) {
                    $builder->where('banner', NULL)->orWhere('banner', '');
                })
                ->first()) {
                tap($method)->update(['banner' => $banner]);
            }
        });

        
        collect(DepositMethod::where('decimal_places', NULL)->get())->each(function ($method) use ($methods) {
            $decimalPlaces = $methods->where('name', $method->name)->first()['decimal_places'] ?? NULL;
            if (!is_null($decimalPlaces)) {
                tap($method)->update(['decimal_places' => $decimalPlaces]);
            }
        });
    }
}
