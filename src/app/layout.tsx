// app/[locale]/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import Script from "next/script"; // ۱. این ایمپورت را اضافه کنید

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <head>
        {/* ۲. کد گوگل ادسنس را اینجا قرار دهید */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2430648749257681"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />
      </head>
      <body className="antialiased bg-[#020C1B]">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}