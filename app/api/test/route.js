// import { Dropbox } from 'dropbox';
// import fetch from 'node-fetch';
// import fs from 'fs';

// const dbx = new Dropbox({ 
//   accessToken: process.env.DBX_ACCESS_TOKEN, 
//   fetch: fetch 
// });

// const filePath = 'public/assets/hero1.png';
// const fileStream = fs.createReadStream(filePath);

// dbx.filesUploadSessionStart({ close: false, contents: fileStream })
//   .then(function(response) {
//     const sessionId = response.session_id;
//   })
//   .catch(function(error) {
//     console.error(error);
//   });
