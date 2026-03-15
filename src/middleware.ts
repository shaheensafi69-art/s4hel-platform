import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // اگر کاربر فقط آدرس اصلی را تایپ کرد (مثلاً safipay.net/)
  if (pathname === '/') {
    // او را به پوشه انگلیسی هدایت کن
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  return NextResponse.next();
}

// این بخش بسیار مهم است؛ می‌گوید میدل‌ویر فقط روی ریشه اجرا شود
export const config = {
  matcher: ['/'],
};