/** @type {import('next').NextConfig} */
const nextConfig = {
  // ریدایرکت ساده از صفحه اصلی به پوشه انگلیسی
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  // غیرفعال کردن i18n پیچیده برای جلوگیری از ارور پوشه‌های حذف شده
  reactStrictMode: true,
};

export default nextConfig;