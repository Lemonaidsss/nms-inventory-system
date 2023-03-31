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
        'code' => 32232,
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
        ['sku' => 12312,
        'stock_status' => 'on stock' ,
        'subcat' => 'Produce' ,
        'img' => 'saba.jpeg',
        'item_name' => 'Banananana',
        'qty' => 999999.99,
        'unit' => 'g'
        ],
        ['sku' => 679,
        'stock_status' => 'on stock' ,
        'subcat' => 'Produce' ,
        'img' => 'patato.jpeg',
        'item_name' => 'Patatas',
        'qty' => 234234234,
        'unit' => 'kg'
        ],
        ['sku' => 2312,
        'stock_status' => 'on stock' ,
        'subcat' => 'Grains/Pasta' ,
        'img' => 'rays.jpeg',
        'item_name' => 'Brown rice',
        'qty' => 700000000,
        'unit' => 'kg'
        ],
        ['sku' => 9087,
        'stock_status' => 'on stock' ,
        'subcat' => 'Canned Goods' ,
        'img' => 'fish.jpeg',
        'item_name' => 'Sardinez',
        'qty' => 867234,
        'unit' => 'pcs'
        ],
        ['sku' => 0000,
        'stock_status' => 'low stock' ,
        'subcat' => 'Eggz' ,
        'img' => 'xuehuaopiaopiao.jpeg',
        'item_name' => 'Eggs',
        'qty' => 9,
        'unit' => 'pcs'
        ],]
    ];
});

Route::get('/equipment', function(){
    return [
        'category_id' => 32232,
        'category' => 'Equipment',
        'data' => [
        ['sku' => 12312,
        'stock_status' => 'null' ,
        'subcat' => 'cuttlery' ,
        'img' => 'blade69.jpeg',
        'item_name' => 'Damascus Knife',
        'qty' => 100,
        'unit' => 'pcs'
        ],
        ['sku' => 679,
        'stock_status' => 'null' ,
        'subcat' => 'Utensils' ,
        'img' => 'f342sdfgw3rsgd.jpeg',
        'item_name' => 'Fork',
        'qty' => 100,
        'unit' => 'pcs'
        ],
        ['sku' => 2312,
        'stock_status' => 'on stock' ,
        'subcat' => 'Cookware' ,
        'img' => 'umai.jpeg',
        'item_name' => 'Wok',
        'qty' => 700000000,
        'unit' => 'pcs'
        ],
        ['sku' => 9087,
        'stock_status' => 'on stock' ,
        'subcat' => 'Tumbler' ,
        'img' => 'bottle.jpeg',
        'item_name' => 'AQUAFLASK',
        'qty' => 867234,
        'unit' => 'pcs'
        ],]
    ];
});