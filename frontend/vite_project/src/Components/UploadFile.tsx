import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import Uploadfile from '../services/Api/Uploadfile'

type Filestate = File | null

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<Filestate>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const selectedFile = event.target.files ? event.target.files[0] : null;

        setFile(selectedFile);
    };
    const handleUploadfile = (): void => {
        if (file) {
            Uploadfile(file);
        } else {
            console.error('No file selected');
        }
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadfile}>Upload</button>
        </div>
    );
};

export default FileUpload;
