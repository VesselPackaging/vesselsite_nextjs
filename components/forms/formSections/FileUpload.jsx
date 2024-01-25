'use client'
import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (!file) {
      console.error('No file selected.');
      return;
    }

    // Check if the file type is allowed
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedFileTypes.includes(file.type)) {
      console.error('Invalid file type. Please upload a JPEG, PNG, or PDF.');
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log([...formData.entries()]);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully!');
      } else {
        console.error('Failed to upload file. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
