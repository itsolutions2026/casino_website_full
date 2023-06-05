<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2020_06_30_000020_alter_withdrawal_methods_table_add_decimal_places.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterWithdrawalMethodsTableAddDecimalPlaces extends Migration
{
    
    public function up()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->unsignedTinyInteger('decimal_places')->nullable()->after('rate');
        });
    }

    
    public function down()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->dropColumn('decimal_places');
        });
    }
}
