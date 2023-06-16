<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_01_30_000002_create_payment_gateway_methods_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentGatewayMethodsTable extends Migration
{
    
    public function up()
    {
        Schema::create('payment_gateway_methods', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('payment_gateway_id');
            $table->tinyInteger('type'); 
            $table->string('code', 30);
            $table->string('name', 100);
            $table->text('parameters'); 
            $table->text('input_parameters'); 
            $table->string('allowed_currencies', 1000); 
            $table->timestamps();
            
            $table->foreign('payment_gateway_id')->references('id')->on('payment_gateways')->onUpdate('cascade')->onDelete('cascade');
            
            $table->index('type');
            $table->index('code');
            $table->unique(['type', 'code']);
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('payment_gateway_methods');
    }
}
