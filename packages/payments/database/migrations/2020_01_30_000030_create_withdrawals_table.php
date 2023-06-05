<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_01_30_000030_create_withdrawals_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWithdrawalsTable extends Migration
{
    
    public function up()
    {
        Schema::create('withdrawals', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('account_id');
            $table->foreignId('withdrawal_method_id');
            $table->string('external_id', 100)->nullable()->unique(); 
            $table->decimal('amount', 20, 2); 
            $table->decimal('payment_amount', 26, 8)->nullable(); 
            $table->string('payment_currency', 20)->nullable(); 
            $table->unsignedTinyInteger('status');
            $table->mediumText('parameters')->nullable();
            $table->text('response')->nullable();
            $table->timestamps();
            
            $table->foreign('account_id')->references('id')->on('accounts')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('withdrawal_method_id')->references('id')->on('withdrawal_methods')->onUpdate('cascade')->onDelete('cascade');
            
            $table->index('status');
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('withdrawals');
    }
}
