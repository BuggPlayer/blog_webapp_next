/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blog-img-testing.s3.ap-south-1.amazonaws.com'], //make it 'your-domain.com'
  },
  swcMinify: true,
  experimental: {
    serverActions: true,
    appDir: true,
  },
};

module.exports = nextConfig;
