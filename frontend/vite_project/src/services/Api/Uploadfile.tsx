import axios from 'axios';

interface File {
    file: file;
}

const Uploadfile = (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            console.log('File uploaded successfully');
        } else {
            console.error('File upload failed');
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};


export default Uploadfile;


