<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

/** Auth with social media */
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Models\SocialProfile;

use Illuminate\Http\Request;
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

Route::get('login/facebook', function () {
    return Socialite::driver('facebook')->redirect();
});

Route::get('login/facebook/callback', function (Request $request) {
    if($request->get('error')){
        return redirect()->route('login');
    }

    /** Recupera información del perfil */
    $userSocialite = Socialite::driver('facebook')->user();

    /** Busca registro en SocialProfile */
    $social_profile = SocialProfile::where('social_id', $userSocialite->getId())
    ->where('social_name', 'facebook')->first();

    if(!$social_profile){
        /** Comprueba que no haya registro */
        $user = User::where('email', $userSocialite->getEmail())->first();
        if(!$user){
            $user = User::create([
                'name'=> $userSocialite->getName(),
                'email'=> $userSocialite->getEmail(),
            ]);
        }

        $social_profile = SocialProfile::create([
            'user_id' => $user->id,
            'social_id' => $userSocialite->getId(),
            'social_name' => 'facebook',
            'social_avatar' => $userSocialite->getAvatar(),
        ]);
    }
    auth()->login($social_profile->$user);
    return redirect()->route('panel.recipe.index');
    // $user->token
});

Route::get('login/google', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('login/google/callback', function (Request $request) {
    if($request->get('error')){
        return redirect()->route('login');
    }
    /** Recupera información del perfil */
    $userSocialite = Socialite::driver('google')->user();

    /** Busca registro en SocialProfile */
    $social_profile = SocialProfile::where('social_id', $userSocialite->getId())
    ->where('social_name', 'google')->first();

    if(!$social_profile){
        /** Comprueba que no haya registro */
        $user = User::where('email', $userSocialite->getEmail())->first();
        if(!$user){
            $user = User::create([
                'name'=> $userSocialite->getName(),
                'email'=> $userSocialite->getEmail(),
            ]);
        }

        $social_profile = SocialProfile::create([
            'user_id' => $user->id,
            'social_id' => $userSocialite->getId(),
            'social_name' => 'google',
            'social_avatar' => $userSocialite->getAvatar(),
        ]);
    }
    auth()->login($social_profile->user);
    return redirect()->route('panel.recipe.index');
    // $user->token
});
