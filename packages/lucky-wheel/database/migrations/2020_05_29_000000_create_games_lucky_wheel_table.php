<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_05_29_000000_create_games_lucky_wheel_table.php
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
        Schema::create('games_lucky_wheel', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->unsignedTinyInteger('variation'); 
            $table->unsignedTinyInteger('position'); 
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('games_lucky_wheel');
    }
};
