<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   2022_04_13_000000_alter_deposit_methods_table_add_banner.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterDepositMethodsTableAddBanner extends Migration
{
    
    public function up()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->string('banner')->nullable()->after('description');
        });
    }

    
    public function down()
    {
        Schema::table('deposit_methods', function (Blueprint $table) {
            $table->dropColumn('banner');
        });
    }
}
