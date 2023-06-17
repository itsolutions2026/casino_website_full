<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PaymentsPackageSeeder.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Seeder;

class PaymentsPackageSeeder extends Seeder
{
    
    public function run(): void
    {
        
        $this->call(PaymentGatewaySeeder::class);
        $this->call(PaymentGatewayMethodSeeder::class);
        $this->call(DepositMethodSeeder::class);
        $this->call(WithdrawalMethodSeeder::class);
    }
}
