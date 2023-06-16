<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2022_04_13_000010_alter_withdrawal_methods_table_add_banner.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterWithdrawalMethodsTableAddBanner extends Migration
{
    
    public function up()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->string('banner')->nullable()->after('description');
        });
    }

    
    public function down()
    {
        Schema::table('withdrawal_methods', function (Blueprint $table) {
            $table->dropColumn('banner');
        });
    }
}
