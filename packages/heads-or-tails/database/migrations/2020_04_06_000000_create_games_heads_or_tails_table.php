<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_04_06_000000_create_games_heads_or_tails_table.php
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
        Schema::create('games_heads_or_tails', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->tinyInteger('toss_bet')->unsigned(); 
            $table->tinyInteger('toss_result')->unsigned(); 
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_heads_or_tails');
    }
};
