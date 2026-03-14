import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css";

/**
 * S4HEL French Layout
 * این فایل قالب کلی تمامی صفحات مسیر /fr/ را مدیریت می‌کند.
 */
export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020C1B]">
      {/* هدر سایت */}
      <Header />

      {/* بخش اصلی محتوا */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}