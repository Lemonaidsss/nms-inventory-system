<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\ItemsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//users api's
Route::get('/users_list', [UsersController::class, 'users_list']);
Route::post('/create_user',[UsersController::class,'create_user']);



//items api's
Route::get('/items_list', [ItemsController::class, 'items_list']);
Route::post('/add_item',[ItemsController::class, 'add_item']);