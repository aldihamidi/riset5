<?php

namespace App\Controllers;

use App\Models\admin_model;

class Testing extends BaseController
{
    public function index()
    {
        return view('admin/testing');
    }
}
