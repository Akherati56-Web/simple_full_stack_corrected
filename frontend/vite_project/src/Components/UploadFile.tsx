import axios from 'axios';
import { useState } from 'react';

import Uploadfile from '../services/Api/Uploadfile'

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUploadfile=()=>{
        Uploadfile(file)
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadfile}>Upload</button>
        </div>
    );
};

export default FileUpload;
