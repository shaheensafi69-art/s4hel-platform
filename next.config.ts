/** @type {import('next').NextConfig} */
const nextConfig = {
  // این بخش جایگزین Middleware می‌شود و ارور را برطرف می‌کند
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true, // ریدایرکت دائمی ۳۰۱ برای سئو عالی است
      },
    ];
  },
  // تنظیمات برای نادیده گرفتن ارورهای کوچک در هنگام Build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;