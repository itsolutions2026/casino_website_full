<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2019_11_02_000003_create_games_blackjack_table.php
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
        Schema::create('games_blackjack', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->string('deck', 280); 
            $table->string('actions', 100);
            
            $table->string('dealer_hand', 100);
            $table->unsignedTinyInteger('dealer_score');
            $table->boolean('dealer_blackjack')->default(0); 
            
            $table->decimal('bet', 10, 2);
            $table->decimal('win', 10, 2);
            $table->string('player_hand', 100);
            $table->unsignedTinyInteger('player_score');
            $table->boolean('player_blackjack')->default(0); 
            
            $table->decimal('insurance_bet', 10, 2)->default(0); 
            $table->decimal('insurance_win', 10, 2)->default(0); 
            
            $table->decimal('bet2', 10, 2)->default(0);
            $table->decimal('win2', 10, 2)->default(0);
            $table->string('player_hand2', 100)->nullable();
            $table->unsignedTinyInteger('player_score2')->default(0);

            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_blackjack');
    }
};
