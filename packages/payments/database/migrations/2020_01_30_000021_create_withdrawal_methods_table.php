<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_01_30_000021_create_withdrawal_methods_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWithdrawalMethodsTable extends Migration
{
    
    public function up()
    {
        
        if (Schema::hasTable('withdrawal_methods')) {
            Schema::disableForeignKeyConstraints();
            Schema::drop('withdrawal_methods');
            Schema::enableForeignKeyConstraints();
        }

        Schema::create('withdrawal_methods', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('payment_method_id')->nullable();
            $table->string('name', 100);
            $table->string('description', 2000)->nullable();
            $table->string('currency', 20); 
            $table->decimal('rate', 12, 2); 
            $table->boolean('enabled')->default(FALSE);
            $table->text('payment_method_parameters'); 
            $table->text('parameters'); 
            $table->timestamps();
            
            $table->foreign('payment_method_id')->references('id')->on('payment_gateway_methods')->onUpdate('cascade')->onDelete('cascade');
            
            $table->index('enabled');
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('withdrawal_methods');
    }
}
