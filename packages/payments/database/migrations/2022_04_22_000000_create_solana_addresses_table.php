<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2022_04_22_000000_create_solana_addresses_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolanaAddressesTable extends Migration
{
    
    public function up()
    {
        Schema::create('solana_addresses', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('user_id');
            $table->string('address', 44);
            $table->string('message', 50);
            $table->boolean('confirmed')->default(FALSE);
            $table->timestamps();
            
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            
            $table->unique(['user_id', 'address']);
            $table->index('confirmed');
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('solana_addresses');
    }
}
