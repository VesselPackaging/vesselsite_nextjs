import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';

const dbx = new Dropbox({ 
  accessToken: process.env.DBX_ACCESS_TOKEN, 
  fetch: fetch 
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    console.log(req.body);
    const fileContent = req.body; 

    const uploadSessionStartResult = await dbx.filesUploadSessionStart({ close: false, contents: fileContent });
    const sessionId = uploadSessionStartResult.session_id;

    // You might want to use this sessionId for subsequent calls to upload chunks.

    return NextResponse.json('File uploaded to Dropbox');
  } catch (error) {
    console.error(error);
    return NextResponse.json('Error uploading file to Dropbox', { status: 500 });
  }
}