import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست زبان‌های پشتیبانی شده در S4HEL
const locales = ['en', 'de', 'fr', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. بررسی اینکه آیا مسیر فعلی همین الان شامل زبان هست یا خیر
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // ۲. اگر مسیر شامل زبان بود، اجازه بده درخواست ادامه پیدا کند
  if (pathnameHasLocale) return NextResponse.next();

  // ۳. اگر کاربر در صفحه اصلی (/) بود یا زبانی در آدرس نبود، او را به انگلیسی هدایت کن
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  
  // استفاده از NextResponse.redirect برای انتقال فیزیکی کاربر به آدرس درست
  return NextResponse.redirect(request.nextUrl);
}

// ۴. تنظیمات Matcher برای اینکه میدل‌ویر روی فایل‌های سیستمی و تصاویر اجرا نشود
export const config = {
  matcher: [
    // اجرا نشدن روی تمام مسیرهای داخلی نکس (api, _next/static, _next/image, favicon.ico)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};