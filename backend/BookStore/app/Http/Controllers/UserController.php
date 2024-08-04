<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\Models\User
     */
    public function signup(Request $request)
    {

        // Validate the incoming request data
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // Return the created user instance
        return User::create([
            'name' => 'name',
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password'])
        ]);
    }

    /**
     * Authenticate a user and return a token.
     *
     * @param array $data
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // return $credentials;
        if (!Auth::attempt($credentials)) {
            return ['wrong'];
        }
        if (Auth::getUser()->tokens()->get()->first()) {
            Auth::user()->tokens()->delete();
            return Auth::getUser()->createToken('test', ['server'])->plainTextToken;
        }
        return Auth::getUser()->createToken('test', ['server'])->plainTextToken;
    }


    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();

        return 'log out';

    }

    /**
     * Test the authenticated user's token.
     *
     * @param array $data
     * @return \Illuminate\Http\Response
     */
    public function test(Request $request)
    {
        // Get the authenticated user
        $user = $request->user();
        // Get the user's ID
        $user_id = $user['id'];
        // Check if the user's token has the 'server' scope
        $data = $user->tokenCan('server');

        // Return an array containing the user's ID, email, and whether their token has the 'server' scope
        return ['can_edit' => $data, 'user_id' => $user_id, 'user_email' => $user['email']];
    }

    public function getorders($id) {

        $data = User::findorfail($id)->orders()->get();
        return [
            "status" => 400,
            "data" => $data
        ];
    }
}
