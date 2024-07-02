/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COUNTRIES: process.env.COUNTRIES,
  },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "upload.wikimedia.org",
        protocol: "https",
      },
      {
        hostname: "flagcdn.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
