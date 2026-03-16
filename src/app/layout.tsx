// app/[locale]/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className="antialiased bg-[#020C1B]">
        <Header />
        {/* استفاده از min-h-screen باعث می‌شود فوتر همیشه در انتهای صفحه بماند */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}