<?php

namespace App\Controllers;

class Login extends BaseController
{
    public function index()
    {
        return view('Login/login.php');
    }
    public function resetpass()
    {
        return view('Login/resetpass.php');
    }

    public function daftar()
    {
        return view('Login/daftar.php');
    }
}
