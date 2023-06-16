<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_07_08_000000_create_games_slots_3d_table.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesSlots3DTable extends Migration
{
    
    public function up()
    {
        Schema::create('games_slots_3d', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->string('positions', 10); 
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('games_slots_3d');
    }
}
