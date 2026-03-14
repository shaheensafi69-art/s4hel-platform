import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* تنظیمات استاندارد تصاویر */
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