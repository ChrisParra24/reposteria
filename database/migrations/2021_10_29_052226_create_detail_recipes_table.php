<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_recipes', function (Blueprint $table) {
            // $table->id();

            $table->unsignedBigInteger('id_ingredient');
            $table->unsignedBigInteger('id_recipe');

            $table->foreign('id_ingredient')->references('id')->on('ingredients');
            $table->foreign('id_recipe')->references('id')->on('recipes');

            $table->primary(['id_ingredient','id_recipe']);

            $table->double('cantidad',8,3);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_recipes');
    }
}
