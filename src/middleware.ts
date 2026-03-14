import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست زبان‌های پشتیبانی شده در سایت S4HEL
const locales = ['en', 'fr', 'de', 'ru', 'ps', 'fa', 'ar', 'tr'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. بررسی اینکه آیا مسیر فعلی همین حالا شامل کد زبان هست یا خیر
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // ۲. اگر کاربر به ریشه سایت آمد یا مسیری بدون زبان زد، او را به زبان پیش‌فرض هدایت کن
  // مثال: s4hel.com/about  =>  s4hel.com/en/about
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // این بخش مشخص می‌کند که میدل‌ویر روی چه فایل‌هایی اجرا نشود (مثل تصاویر و فایل‌های سیستمی)
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.ts).*)',
  ],
};