import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"; // دسترسی به استایل‌های اصلی از پوشه app

/**
 * S4HEL French Locale Layout
 * این لایوت هدر و فوتر را برای تمام مسیرهای /fr مدیریت می‌کند.
 */
export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020C1B]">
      {/* هدر سایت با منوی زبان جدید */}
      <Header />

      {/* محتوای صفحات فرانسوی */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}