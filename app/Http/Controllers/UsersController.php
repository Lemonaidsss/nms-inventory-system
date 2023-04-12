<?php


namespace App\Http\Controllers;

use App\Models\users;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function users_list (Request $request){
        $user = users::all();
        return response()->json([
            'users' => $user
        ], 200);
    }

   public function create_user(Request $request){

        $user = new users();

        $user -> name = $request -> name;
        $user -> username = $request -> username;
        $user -> password = $request -> password;
        $user -> role = $request -> role;
        $user -> save();
   }
}
