<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileUploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'file' => 'required|file|mimes:jpeg,png,pdf|max:2048',
        ];
    }


    public function messages()
    {
        return [
            'file.required' => 'A file is required.',
            'file.file' => 'The uploaded file must be a valid file.',
            'file.mimes' => 'Only jpeg, png, and pdf files are allowed.',
            'file.max' => 'The file size may not be greater than 2 MB.',
        ];
    }
}
