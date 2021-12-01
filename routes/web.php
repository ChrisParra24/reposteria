<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', LoginController::class)->name('login');

Route::prefix('/panel')->name('panel.')->group(function () {
    //recipes
    Route::get('/receta',[RecipeController::class,'index'])->name('recipe.index');
    Route::get('/receta/create', [RecipeController::class,'create'])->name('recipe.create');
    Route::get('/receta/edit', [RecipeController::class,'edit'])->name('recipe.edit');

    //ingredients


    //cost
});
