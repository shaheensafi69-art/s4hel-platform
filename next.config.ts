import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* تنظیمات اصلی */
  typescript: {
    // بی‌خیال ارورهای تایپ‌اسکریپت موقع بیلد
    ignoreBuildErrors: true,
  },
  eslint: {
    // بی‌خیال ارورهای لایه ESLint موقع بیلد
    ignoreDuringBuilds: true,
  },
  // اگر تصاویر از دامین‌های دیگر داری
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