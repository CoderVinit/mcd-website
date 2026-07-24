import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // 👈 ye line add kar

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      ],
    },
  ],
};

export default nextConfig;