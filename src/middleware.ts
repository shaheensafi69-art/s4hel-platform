import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // اگر کاربر دقیقاً آدرس اصلی را زد (مثلاً localhost:3000/)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
}

export const config = {
  // این کد باعث می‌شود میدل‌ویر فقط روی صفحه اصلی اجرا شود
  matcher: '/',
};