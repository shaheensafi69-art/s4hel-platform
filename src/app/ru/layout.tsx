import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css";

/**
 * S4HEL Russian Layout
 * مدیریت قالب کلی صفحات در مسیر /ru/
 */
export default function RuLayout({
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