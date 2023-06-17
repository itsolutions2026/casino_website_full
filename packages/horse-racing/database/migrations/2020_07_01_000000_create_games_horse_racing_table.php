<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_07_01_000000_create_games_horse_racing_table.php
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
        Schema::create('games_horse_racing', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->text('bets'); 
            $table->string('positions', 50); 
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_horse_racing');
    }
};
