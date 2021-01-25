<?php

use App\Models\admin_model;
use Config\Services;

$str = ['1' => 'A', '3' => 'B'];


$init = new admin_model();
$check = $init->insert_permission(["1", "37"]);
var_dump($check);
die;
// $string = Services::authorization()->group(5);
