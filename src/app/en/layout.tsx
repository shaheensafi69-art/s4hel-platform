import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"; // دو نقطه برای برگشت به پوشه app
import "../globals.css"; // دو نقطه برای دسترسی به فایل در پوشه app
export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#020C1B]">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}