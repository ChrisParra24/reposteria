<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\SocialProfile;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function image(){
        $social_profile = $this->socialProfile->first();
        if($social_profile){
            return $social_profile->social_avatar;
        }else{
            return 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.stickpng.com%2Fthumbs%2F585e4be1cb11b227491c3398.png&f=1&nofb=1';
        }
    }
    public function username(){
        $social_profile = $this->socialProfile->first();
        if($social_profile){
            return $social_profile->user->name;
        }else{
            return 'Usuario';
        }
    }

    /** Relación uno a muchos */
    public function socialProfile(){
        return $this->hasMany(socialProfile::class);
    }
}
