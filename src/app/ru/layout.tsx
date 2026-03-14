import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"; // بازگشت به پوشه app برای دسترسی به استایل کلی

/**
 * S4HEL Russian Locale Layout
 * این لایوت هدر و فوتر را برای تمام صفحات مسیر /ru مدیریت می‌کند.
 */
export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020C1B]">
      {/* هدر بین‌المللی با قابلیت انتخاب زبان */}
      <Header />

      {/* محتوای صفحات روسی (فعلاً نسخه انگلیسی در این مسیر نمایش داده می‌شود) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}