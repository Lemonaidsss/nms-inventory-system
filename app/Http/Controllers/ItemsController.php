<?php

namespace App\Http\Controllers;


use App\Models\items;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ItemsController extends Controller
{

    public function items_list (Request $request){
        $item = items::all();
        return response()->json([
            'items' => $item
        ], 200);
    }
    public function add_item(Request $request)
    {

        $item = new items();

        $item->stock_keeping_unit = $request->stock_keeping_unit;
 //       if ($request->image != "") {
 //           $strpos = strpos($request->image,';');
 //           $sub = substr($request->image,0, $strpos);
 //           $ex = explode('/',$sub)[1];
 //           $name = time() . "." . $ex;
 //           $image = Image::make($request->image)->resize(117, 100);
 //           $upload_path = public_path()."/upload/";
 //           $image->save($upload_path.$name);
 //           $item->image = $name;
 //       } else {
 //           $item->image = "image.png";
 //       }
        $item -> image = $request -> image;
        $item -> stock_status = $request -> stock_status;
        $item -> sub_category = $request -> sub_category;
        $item -> item_name = $request -> item_name;
        $item -> quantity = $request -> quantity;
        $item -> unit = $request -> unit;
        $item -> save();
    }
}
