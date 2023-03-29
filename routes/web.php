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

Route::get('/items', function(){
    return [
        'category_id' => 32232,
        'category' => 'Equipment',
        'data' => [
        ['sku' => 12312,
        'stock_status' => 'asd Stock' ,
        'subcat' => 'cuttlery' ,
        'img' => 'blade69.jpeg',
        'item_name' => 'Chukchak',
        'qty' => 100,
        'unit' => 'pcs'
        ],
        ['sku' => 679,
        'stock_status' => 'Low Stock' ,
        'subcat' => 'Utensils' ,
        'img' => 'georgeWbush.jpeg',
        'item_name' => 'Fork',
        'qty' => 100,
        'unit' => 'pcs'
        ],
        ['sku' => 2312,
        'stock_status' => 'wala na gagi' ,
        'subcat' => 'Pang luto' ,
        'img' => 'umai.jpeg',
        'item_name' => 'Kaldero ng Diyos',
        'qty' => 700000000,
        'unit' => 'pcs'
        ],
        ['sku' => 9087,
        'stock_status' => 'meron pa' ,
        'subcat' => 'Pang INOM' ,
        'img' => 'bottle.jpeg',
        'item_name' => 'AQUAFLASK',
        'qty' => 867234,
        'unit' => 'pcs'
        ],]
    ];
});