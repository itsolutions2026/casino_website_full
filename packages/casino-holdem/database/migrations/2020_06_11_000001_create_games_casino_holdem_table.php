<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_06_11_000001_create_games_casino_holdem_table.php
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
        Schema::create('games_casino_holdem', function (Blueprint $table) {
            
            $table->bigIncrements('id');

            $table->string('deck', 280); 
            
            
            
            $table->unsignedInteger('ante_bet');
            $table->unsignedInteger('ante_win')->default(0);
            $table->unsignedInteger('call_bet')->default(0);
            $table->unsignedInteger('call_win')->default(0);
            $table->unsignedInteger('bonus_bet');
            $table->unsignedInteger('bonus_win')->default(0);
            
            $table->string('player_cards', 11); 
            $table->string('dealer_cards', 11)->default('[]'); 
            $table->string('community_cards', 26); 
            
            $table->string('player_hand', 26)->default('[]'); 
            $table->string('player_bonus_hand', 26)->default('[]'); 
            $table->string('dealer_hand', 26)->default('[]'); 
            
            $table->string('player_kickers', 22)->default('[]'); 
            $table->string('dealer_kickers', 22)->default('[]'); 
            
            $table->unsignedTinyInteger('player_hand_rank')->default(0);
            $table->unsignedTinyInteger('player_bonus_hand_rank')->default(0);
            $table->unsignedTinyInteger('dealer_hand_rank')->default(0);
            $table->boolean('dealer_qualified')->default(FALSE);

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_casino_holdem');
    }
};
