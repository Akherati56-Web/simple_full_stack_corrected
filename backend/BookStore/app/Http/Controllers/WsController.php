<?php

namespace App\Http\Controllers;

use App\Events\testwebsocket;
use Illuminate\Http\Request;

class WsController extends Controller
{
    public function test() {
        event(new testwebsocket );

    }
}
