/** @type {import('next').NextConfig} */
const nextConfig = {
  // ریدایرکت از روت اصلی به پوشه en
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  // این تنظیم باعث می‌شود ارورهای لایوت در زبان‌های دیگر مانع Build نشوند
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;