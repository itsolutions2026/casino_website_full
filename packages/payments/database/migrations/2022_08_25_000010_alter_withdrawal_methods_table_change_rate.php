<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2022_08_25_000010_alter_withdrawal_methods_table_change_rate.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterWithdrawalMethodsTableChangeRate extends Migration
{
    
    public function up()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->decimal('rate', 18, 8)->change();
        });
    }

    
    public function down()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->decimal('rate', 12, 2)->change();
        });
    }
}
