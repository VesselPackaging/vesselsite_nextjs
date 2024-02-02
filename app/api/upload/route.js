import { Dropbox } from 'dropbox';
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fetch from 'node-fetch';
import { join } from "path";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");
  const dbx = new Dropbox({
    accessToken: process.env.DBX_ACCESS_TOKEN,
    fetch: fetch
  });

  if(!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    dbx.filesUpload({ path: '/test.pdf', contents: buffer })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });

    return NextResponse.json({ message: "File uploaded to Dropbox", status: 200 });
  } catch (error) {
    console.error('Error uploading file to Dropbox:', error);
    return NextResponse.json({ message: "Failed to uploaded file to Dropbox", status: 500 });
  }
}


