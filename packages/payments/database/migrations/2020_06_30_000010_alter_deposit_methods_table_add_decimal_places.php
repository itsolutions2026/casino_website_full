<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_06_30_000010_alter_deposit_methods_table_add_decimal_places.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterDepositMethodsTableAddDecimalPlaces extends Migration
{
    
    public function up()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->unsignedTinyInteger('decimal_places')->nullable()->after('rate');
        });
    }

    
    public function down()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->dropColumn('decimal_places');
        });
    }
}
