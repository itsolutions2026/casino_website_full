<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_04_21_000001_create_games_multiplayer_blackjack_table.php
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
        Schema::create('games_multiplayer_blackjack', function (Blueprint $table) {
            
            $table->id();
            $table->string('deck', 280); 
            $table->text('hands');
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_multiplayer_blackjack');
    }
};
