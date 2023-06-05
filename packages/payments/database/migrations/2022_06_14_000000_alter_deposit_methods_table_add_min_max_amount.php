<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2022_06_14_000000_alter_deposit_methods_table_add_min_max_amount.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterDepositMethodsTableAddMinMaxAmount extends Migration
{
    
    public function up()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->unsignedBigInteger('min_amount')->after('rate');
            $table->unsignedBigInteger('max_amount')->after('min_amount');
        });
    }

    
    public function down()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->dropColumn('min_amount', 'max_amount');
        });
    }
}
