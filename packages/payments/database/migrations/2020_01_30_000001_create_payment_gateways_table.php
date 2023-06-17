<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_01_30_000001_create_payment_gateways_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    
    public function up(): void
    {
        
        if (Schema::hasTable('payment_gateways')) {
            Schema::disableForeignKeyConstraints();
            Schema::drop('payment_gateways');
            Schema::enableForeignKeyConstraints();
        }

        Schema::create('payment_gateways', function (Blueprint $table) {
            
            $table->id('id');
            $table->string('code', 30)->unique();
            $table->string('name', 100);
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('payment_gateways');
    }
};
