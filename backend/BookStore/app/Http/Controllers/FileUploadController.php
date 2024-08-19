<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileUploadRequest;
// use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(FileUploadRequest $request)
    {

        try {
            $file = $request->file('file');
            $path = $file->store('uploads', 'public');
    
            return response()->json(['path' => $path], 201);
        }catch (\Exception $e) {
            return response()->json(['error' => 'File upload failed: ' . $e->getMessage()], 500);
        }
    }
}
