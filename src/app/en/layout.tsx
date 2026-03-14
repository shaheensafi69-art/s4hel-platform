import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * S4HEL English Layout
 * این فایل قالب کلی تمامی صفحات مسیر /en/ را مدیریت می‌کند.
 * شامل هدر، محتوای اصلی و فوتر است.
 */
export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* هدر سایت که در تمام صفحات انگلیسی ثابت است */}
      <Header />

      {/* بخش اصلی محتوا: 
          استفاده از flex-grow باعث می‌شود که اگر محتوای صفحه کم باشد، 
          فوتر همچنان در پایین صفحه باقی بماند.
      */}
      <main className="flex-grow">
        {children}
      </main>

      {/* فوتر سایت که حاوی لینک‌های ضروری و اطلاعات کپی‌رایت است */}
      <Footer />
    </div>
  );
}