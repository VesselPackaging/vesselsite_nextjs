import { Dropbox } from 'dropbox';
import { NextRequest, NextResponse } from "next/server";
import fetch from 'node-fetch';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");
  const filename = data.get("filename");

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  try {
    // Fetch the access token from the /api/token endpoint
    const tokenResponse = await fetch('https://vesselsite-nextjs.vercel.app/api/token', {
      method: 'POST'
    });
    const { access_token } = await tokenResponse.json();

    const dbx = new Dropbox({
      accessToken: access_token,
      fetch: fetch
    });

    // Convert the file to a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload the file to Dropbox
    await dbx.filesUpload({ path: `/${filename}.pdf`, contents: buffer });

    return NextResponse.json({ message: "File uploaded to Dropbox", status: 200 });
  } catch (error) {
    console.error('Error uploading file to Dropbox:', error);
    return NextResponse.json({ message: "Failed to upload file to Dropbox", status: 500 });
  }
}


