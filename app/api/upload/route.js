import { formidable } from 'formidable';
import { fileTypeFromFile } from 'file-type';
const sanitizeFilename = require('sanitize-filename'); 
import fs from 'fs';
import { log } from 'console';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req, res) => {
    const formData = await req.formData();
    // console.log("FORMDATAAA", formData);
    console.log("BLEURGH", Object.fromEntries(formData.entries()));
    try {
        if (req.method === 'POST') {
          const options = {
            uploadDir : '/',
          }
          const form = formidable(options);
          form.parse(req, async (err, fields, files) => {
            if (err) {
              console.error('Error parsing form:', err);
              return new Response('Error parsing form.', { status: 400 });
            }
          
            const file = files.file;
            console.log('File:', file);
          
            if (!file || !file.path) {
              console.log('Invalid file data:', file);
              return new Response('Invalid file data.', { status: 400 });
            }
          
            const type = await fileTypeFromFile(file.path);
            console.log('File type:', type);
          
            if (!type || !['image/jpeg', 'image/png', 'application/pdf'].includes(type.mime)) {
              console.log('Invalid file type:', type);
              return new Response('Invalid file type.', { status: 400 });
            }
          
            const sanitizedFileName = sanitizeFilename(file.name);
            console.log("HELLO");
            const savePath = `./uploads/${sanitizedFileName}`;
            const writeStream = fs.createWriteStream(savePath);
          
            writeStream.on('error', (error) => {
              console.error('Error saving file:', error);
              return new Response('Error saving file.', { status: 500 });
            });
          
            file.pipe(writeStream);
          
            return new Response(JSON.stringify({ success: true }), { status: 200 });
          });
    } else {
      return new Response('Method Not Allowed', { status: 405 });
    }
  } catch (error) {
    console.error('Unhandled error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
