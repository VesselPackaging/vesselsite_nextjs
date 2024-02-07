import fetch from 'node-fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }

  const refreshToken = process.env.DBX_REFRESH_TOKEN;
  const clientId = process.env.DBX_APP_KEY;
  const clientSecret = process.env.DBX_APP_SECRET;

  const url = 'https://api.dropbox.com/oauth2/token';
  const data = new URLSearchParams();
  data.append('refresh_token', refreshToken);
  data.append('grant_type', 'refresh_token');
  data.append('client_id', clientId);
  data.append('client_secret', clientSecret);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error response from Dropbox API:', errorResponse);
      throw new Error('Failed to refresh access token');
    }
    
    const responseData = await response.json();
    const accessToken = responseData.access_token;
    return NextResponse.json({ access_token: accessToken }, { status: 200 });
  } catch (error) {
    console.error('Error refreshing access token:', error.message);
    return NextResponse.json(
      { error: 'Failed to refresh access token' },
      { status: 500 },
    );
  }
}
