import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* فقط تنظیمات ضروری تصاویر */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;