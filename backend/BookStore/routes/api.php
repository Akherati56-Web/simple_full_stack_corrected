<?php

use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\WsController;
use App\Http\Controllers\OrderController;
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

// Route for book resource
Route::resource('/book', BookController::class);
Route::resource('/order', OrderController::class);


// Routes for user signup and login
Route::post('/signup', [UserController::class, 'signup']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout'])->middleware(['auth:sanctum']);
Route::get("/orders/{id}", [UserController::class, 'getorders']);

// Route for testing authentication
Route::post('/test', [UserController::class, 'test'])->middleware(['auth:sanctum']);


Route::get("/ws", [WsController::class, 'test']);
Route::get("/db", [WsController::class, 'db']);

Route::post('/upload', [FileUploadController::class, 'upload']);