<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __invoke()
    {
        //nos debe de regresar la vista del login
        return view('login.index');
    }
}
