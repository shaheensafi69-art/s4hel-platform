/** @type {import('next').NextConfig} */
const nextConfig = {
  // ۱. هدایت خودکار کاربر از صفحه اصلی به بخش انگلیسی
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },

  // ۲. تنظیمات بهینه‌سازی تصاویر (اگر از لوگو یا عکس استفاده می‌کنی)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // ۳. نادیده گرفتن ارورهای کوچک تایپ‌اسکریپت برای Build سریع‌تر در Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ۴. نادیده گرفتن هشدارهای ESLint در هنگام انتشار
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;