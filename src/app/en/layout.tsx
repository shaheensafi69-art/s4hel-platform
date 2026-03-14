import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"; 

/**
 * S4HEL English Layout
 * این لایوت مخصوص مسیر /en است و هدر و فوتر را به صفحات اضافه می‌کند.
 */
export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020C1B]">
      {/* هدر سایت */}
      <Header />

      {/* محتوای صفحات (Home, About, etc.) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}