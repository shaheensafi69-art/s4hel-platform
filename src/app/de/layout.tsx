import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"; 

export default function DeLayout({
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