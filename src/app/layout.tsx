import { ReactNode } from "react";

// تعریف دقیق تایپ منطبق با استانداردهای سخت‌گیرانه نکس ۱۶
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale?: string }>; // علامت سوال یعنی ممکن است در لود اولیه خالی باشد
}

export default async function RootLayout(props: LayoutProps) {
  // گرفتن پارامترها به صورت ایمن
  const { children, params } = props;
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en'; // اگر نبود، پیش‌فرض انگلیسی

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}