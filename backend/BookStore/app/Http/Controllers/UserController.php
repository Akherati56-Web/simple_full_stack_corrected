<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function signup(Request $request) {
        
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = new User();

        $user->name = $credentials['email']; 
        
        $user->fill($request->only('email', 'password'))->save();

        $user->save();


        return User::create($user);
    }

    public function login(Request $request){
 
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $user = User::get()->find($user['id']);
            return $user->createToken('test', ['server'])->plainTextToken;  
        }
        return 'wrong credentials';
    }

    public function test(Request $request){
        $user = $request->user();
        $user_id = $user['id'];
        $data = $user->tokenCan('server');

        return ['can_edit' => $data  , 'user_id' => $user_id , 'user_email' => $user['email']];
    }
}

