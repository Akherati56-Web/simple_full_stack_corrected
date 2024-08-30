import axios from 'axios';

const Uploadfile = (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = axios.post('/ai/recognize-digit', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((res) => {
        console.log('File uploaded successfully');
    })
        .catch((err) => {
            // Handle validation errors or other errors
            if (err.response && err.response.status === 422) {
                console.error(err.response.data.errors);
            } else {
                console.error('File upload failed');
            }
        });
};




export default Uploadfile;


