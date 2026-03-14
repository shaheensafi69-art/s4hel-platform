/** @type {import('next').NextConfig} */
const nextConfig = {
  // ۱. تنظیمات استاندارد زبان (i18n) برای جایگزینی Middleware
  i18n: {
    locales: ['en', 'de', 'fr', 'ru'], // زبان‌های موجود در پوشه app شما
    defaultLocale: 'en',               // زبان پیش‌فرض
    localeDetection: true,            // تشخیص خودکار زبان مرورگر کاربر
  },

  // ۲. مدیریت ریدایرکت‌ها برای جلوگیری از ارور مسیرهای بدون زبان
  async redirects() {
    return [
      {
        // اگر کاربر مستقیماً به آدرس اصلی آمد، او را به بخش انگلیسی هدایت کن
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },

  // ۳. تنظیمات بهینه‌سازی تصویر و خروجی (اختیاری برای سرعت بیشتر)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // فعال‌سازی حالت فشرده‌سازی برای لود سریع‌تر در Vercel
  compress: true,
};

export default nextConfig;