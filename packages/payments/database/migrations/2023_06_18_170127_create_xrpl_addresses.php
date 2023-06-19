<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if(!Schema::hasTable('xrpl_addresses')){
            Schema::create('xrpl_addresses', function (Blueprint $table) {

                $table->id();
                $table->foreignId('user_id');
                $table->string('address', 44);
                $table->string('message', 50);
                $table->boolean('confirmed')->default(FALSE);
                $table->timestamps();

                $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

                $table->unique(['user_id', 'address']);
                $table->index('confirmed');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('xrpl_addresses');
    }
};
