import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'de', 'fr', 'ru'];

// نام تابع حتماً باید proxy باشد تا ارور برطرف شود
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // ریدایرکت پیش‌فرض به انگلیسی
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

// تنظیمات مسیرها
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};