<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return [
            'status' => 400,
            'data' => Response::json(Book::paginate(15))
        ];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'nullable',
            'title' => 'nullable',
        ]);

        $book = Book::create($request->all());
        return [
            "status" => 400,
            "data" => $book
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return [Book::get()->find($book)];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $request->validate([
            'name' => 'nullable',
            'title' => 'nullable',
        ]);

        $book = $book->update($request->all());
        return [
            "status" => 400,
            "data" => $book
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return [
            "status" => 400,
            "data" => $book
        ];
    }
}
