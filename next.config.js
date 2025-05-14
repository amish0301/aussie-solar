/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Uncomment this line to enable static export
  compress: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
