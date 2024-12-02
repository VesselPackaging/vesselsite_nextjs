import { NextRequest, NextResponse } from 'next/server';

// Define the target website for redirection
const TARGET_WEBSITE = 'https://ordercans.tricorbraun.ca/';

export default function middleware(request: NextRequest) {
  // Redirect logic
  if (!request.nextUrl.pathname.startsWith('/api')) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting...</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
          }
          p {
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <div>
          <p>Redirecting you to <a href="${TARGET_WEBSITE}">${TARGET_WEBSITE}</a>...</p>
        </div>
        <script>
          setTimeout(() => {
            window.location.href = "${TARGET_WEBSITE}";
          }, 3000); // Redirect after 3 seconds
        </script>
      </body>
      </html>
    `;

    // Respond with the custom HTML
    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  // Default response (no redirect for API routes, for instance)
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'], // Match all routes
};
