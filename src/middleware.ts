import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * S4HEL Middleware
 * این فایل وظیفه مدیریت مسیرها و هدایت کاربر به زبان پیش‌فرض (en) را دارد.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. اگر کاربر مستقیماً وارد سایت شد (روت اصلی)، او را به بخش انگلیسی ببر
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

// این بخش باعث می‌شود میدل‌ویر روی فایل‌های سیستمی و تصاویر اجرا نشود و سرعت سایت کم نشود
export const config = {
  matcher: [
    /*
     * استثنا کردن مسیرهای زیر:
     * - api (مسیرهای ای‌پی‌آی)
     * - _next/static (فایل‌های استاتیک)
     * - _next/image (بهینه‌سازی تصویر)
     * - favicon.ico (آیکون سایت)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};