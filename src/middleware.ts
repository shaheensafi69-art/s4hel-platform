import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست زبان‌های پشتیبانی شده در S4HEL
const locales = ['en', 'de', 'fr', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. بررسی اینکه آیا مسیر فعلی شامل زبان هست یا خیر
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // ۲. اگر زبان در مسیر نبود، کاربر را به زبان پیش‌فرض هدایت کن
  if (!pathnameHasLocale) {
    // استثنا برای فایل‌های استاتیک و تصاویر (تا در روتینگ تداخل ایجاد نشود)
    if (
      pathname.includes('.') || 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next')
    ) {
      return;
    }

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

// تنظیمات Matcher برای بهینه‌سازی عملکرد middleware
export const config = {
  matcher: [
    // اعمال روی تمام مسیرها به جز موارد خاص فنی
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};