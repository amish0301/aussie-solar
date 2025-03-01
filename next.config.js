/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  compress: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  },
};

module.exports = nextConfig;
