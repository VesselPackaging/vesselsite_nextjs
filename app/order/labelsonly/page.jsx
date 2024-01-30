'use client'
import React, { useState } from 'react';
import { Dropbox } from 'dropbox';
// import { Buffer } from 'buffer';
import fetch from 'node-fetch';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const dbx = new Dropbox({ 
    accessToken: process.env.DBX_ACCESS_TOKEN,
    fetch: fetch
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (selectedFile) {
      dbx.filesUpload({ path: '/' + selectedFile.name, contents: selectedFile })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;