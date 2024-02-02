'use client';
import axios from 'axios';
import { useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [uploadStatus, setUploadStatus] = useState('');

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
    };

    const fileUploadHandler = () => {
        setUploadStatus('Uploading...');
        const formData = new FormData();
        formData.append('file', selectedFile); 
        axios.post('/api/upload', formData)
            .then(response => {
                console.log(response);
                setUploadStatus('File uploaded successfully');
            })
            .catch(error => {
                console.error(error);
                setUploadStatus('An error occurred while uploading the file');
            });
    };

    return (
        <div>
            <input type="file" onChange={fileSelectedHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    );
}

export default FileUpload;