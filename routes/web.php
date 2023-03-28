<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('react');
});

Route::get('/data', function(){
    return  [
        'code' => 32232,
        'data' => [
        ['id' => 123,
        'name' => 'aids'
        ],
        ['id' => 369,
        'name' => 'aaaa'
        ],
        ['id' => 369,
        'name' => 'dsdwe'
        ],]
    ];
});