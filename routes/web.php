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

Route::get('/users', function(){
    return  [
        'id' => 32232,
        'data' => [
        ['id' => 123,
        'name' => 'adrian',
        'role' => 'admin'
        ],
        ['id' => 1912,
        'name' => 'josef ',
        'role' => 'user'
        ],
        ['id' => 1911,
        'name' => 'adolf',
        'role' => 'super admin'
        ],
        ['id' => 4444,
        'name' => 'winston',
        'role' => 'user'
        ],
        ['id' => 369,
        'name' => 'harry',
        'role' => 'admin'
        ],
        ['id' => 545445,
        'name' => 'hirohito',
        'role' => 'super idol '
        ],
        ['id' => 77231,
        'name' => 'benito',
        'role' => 'super admin'
        ],]
    ];
});

Route::get('/items', function(){
    return [
        'category_id' => 32232,
        'category' => 'Perishables',
        'data' => [
        ['stock_keeping_unit' => 12312,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Produce' ,
        'image' => 'saba.jpeg',
        'item_name' => 'Banananana',
        'quantity' => 999999.99,
        'unit' => 'g'
        ],
        ['stock_keeping_unit' => 679,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Produce' ,
        'image' => 'patato.jpeg',
        'item_name' => 'Patatas',
        'quantity' => 234234234,
        'unit' => 'kg'
        ],
        ['stock_keeping_unit' => 2312,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Grains/Pasta' ,
        'image' => 'rays.jpeg',
        'item_name' => 'Brown rice',
        'quantity' => 700000000,
        'unit' => 'kg'
        ],
        ['stock_keeping_unit' => 9087,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Canned Goods' ,
        'image' => 'fish.jpeg',
        'item_name' => 'Sardinez',
        'quantity' => 867234,
        'unit' => 'pcs'
        ],
        ['stock_keeping_unit' => 0000,
        'stock_status' => 'low stock' ,
        'sub_category' => 'Eggz' ,
        'image' => 'xuehuaopiaopiao.jpeg',
        'item_name' => 'Eggs',
        'quantity' => 9,
        'unit' => 'pcs'
        ],]
    ];
});

Route::get('/equipment', function(){
    return [
        'category_id' => 32232,
        'category' => 'Equipment',
        'data' => [
        ['stock_keeping_unit' => 12312,
        'stock_status' => 'null' ,
        'sub_category' => 'cuttlery' ,
        'image' => 'blade69.jpeg',
        'item_name' => 'Damascus Knife',
        'quantity' => 100,
        'unit' => 'pcs'
        ],
        ['stock_keeping_unit' => 679,
        'stock_status' => 'null' ,
        'sub_category' => 'Utensils' ,
        'image' => 'f342sdfgw3rsgd.jpeg',
        'item_name' => 'Fork',
        'quantity' => 100,
        'unit' => 'pcs'
        ],
        ['stock_keeping_unit' => 2312,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Cookware' ,
        'image' => 'umai.jpeg',
        'item_name' => 'Wok',
        'quantity' => 700000000,
        'unit' => 'pcs'
        ],
        ['stock_keeping_unit' => 9087,
        'stock_status' => 'on stock' ,
        'sub_category' => 'Tumbler' ,
        'image' => 'bottle.jpeg',
        'item_name' => 'AQUAFLASK',
        'quantity' => 867234,
        'unit' => 'pcs'
        ],]
    ];
});