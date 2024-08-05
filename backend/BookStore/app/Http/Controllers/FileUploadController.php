<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the request
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,pdf|max:2048', // Adjust validation rules as needed
        ]);

        // Handle the file upload
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filePath = $file->store('uploads', 'public');

            return response()->json([
                'status' => 'success'
            ]);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }
}
