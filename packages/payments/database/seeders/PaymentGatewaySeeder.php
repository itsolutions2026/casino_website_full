<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaymentGatewaySeeder.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Seeder;
use Packages\Payments\Models\PaymentGateway;

class PaymentGatewaySeeder extends Seeder
{
    
    public function run()
    {
        PaymentGateway::firstOrCreate(['code' => 'skrill'], ['name' => 'Skrill']);

        PaymentGateway::firstOrCreate(['code' => 'paypal'], ['name' => 'PayPal']);

        PaymentGateway::firstOrCreate(['code' => 'stripe'], ['name' => 'Stripe']);

        PaymentGateway::firstOrCreate(['code' => 'coinpayments'], ['name' => 'Coinpayments']);

        PaymentGateway::firstOrCreate(['code' => 'tron'], ['name' => 'Tron']);

        PaymentGateway::firstOrCreate(['code' => 'cryptapi'], ['name' => 'CryptAPI']);

        PaymentGateway::firstOrCreate(['code' => 'solana'], ['name' => 'Solana']);

        PaymentGateway::firstOrCreate(['code' => 'evm'], ['name' => 'EVM Blockchain']);

        PaymentGateway::firstOrCreate(['code' => 'freekassa'], ['name' => 'Freekassa']);



        PaymentGateway::firstOrCreate(['code' => 'smartfastpay'], ['name' => 'SmartFastPay']);

        PaymentGateway::firstOrCreate(['code' => 'mercadopago'], ['name' => 'Mercado Pago']);

        PaymentGateway::firstOrCreate(['code' => 'easywire'], ['name' => 'EasyWire']);
    }
}
