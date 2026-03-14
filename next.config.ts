import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ۱. معرفی زبان‌ها و ریدایرکت هوشمند
  async redirects() {
    return [
      {
        // اگر کاربر فقط آدرس اصلی را زد، او را به انگلیسی بفرست
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },

  // ۲. اجازه به ورسل برای شناسایی مسیرهای بین‌المللی
  // این بخش باعث می‌شود تمام پوشه‌های en, de, fr, ru به رسمیت شناخته شوند
  i18n: {
    locales: ['en', 'de', 'fr', 'ru'],
    defaultLocale: 'en',
    localeDetection: false, // جلوگیری از تداخل با ریدایرکت دستی ما
  },

  // ۳. تنظیمات بهینه‌سازی تصاویر (لوگو و بنرها)
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