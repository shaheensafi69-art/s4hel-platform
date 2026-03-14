import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست زبان‌هایی که پوشه‌هایشان را ساختی
const locales = ['en', 'de', 'fr', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. بررسی اینکه آیا مسیر فعلی از قبل شامل زبان هست یا خیر
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // ۲. اگر زبان در آدرس نبود، کاربر را به زبان پیش‌فرض (English) هدایت کن
  if (!pathnameHasLocale) {
    // نادیده گرفتن فایل‌های سیستم، تصاویر و API ها
    if (
      pathname.includes('.') || 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next')
    ) {
      return;
    }

    // هدایت به /en
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // اعمال روی تمام مسیرها به جز موارد خاص فنی برای حفظ سرعت سایت
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};