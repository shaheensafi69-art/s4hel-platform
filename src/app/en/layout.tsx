import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * S4HEL English Layout
 * این قالب برای تمام مسیرهای زیرمجموعه /en/ استفاده می‌شود.
 */
export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* هدر سایت */}
      <Header />

      {/* محتوای صفحات */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}