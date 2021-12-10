<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

/** Auth with social media */
use Laravel\Socialite\Facades\Socialite;

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

/*Route::prefix('/panel')->name('panel.')->group(function () {
    //recipes
    Route::get('/receta',[RecipeController::class,'index'])->name('recipe.index');
    Route::get('/receta/create', [RecipeController::class,'create'])->name('recipe.create');
    Route::get('/receta/edit', [RecipeController::class,'edit'])->name('recipe.edit');

    //ingredients


    //cost
});*/

Route::get('/panel/receta',[RecipeController::class,'index'])->name('panel.recipe.index');

Route::get('facebook/auth/redirect', function () {
    return Socialite::driver('facebook')->redirect();
});

Route::get('facebook/auth/callback', function () {
    $user = Socialite::driver('facebook')->user();
    // $user->token
});

Route::get('google/auth/redirect', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('google/auth/callback', function () {
    $user = Socialite::driver('google')->user();
    // $user->token
});
