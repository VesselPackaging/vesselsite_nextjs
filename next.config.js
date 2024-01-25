/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/order',
          permanent: true,
        },
      ]
    },
};
  module.exports = nextConfig;
