<?php

namespace App\Controllers;

use Config\Services;
use App\Models\admin_model;
use Config\Email;
use Myth\Auth\Entities\User;


class Cek extends BaseController
{
    public function index()
    {
        return view('admin/testing');
    }
}
