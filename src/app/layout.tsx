// استفاده از @ باعث می‌شود فرقی نکند فایل در چه عمقی از پوشه‌هاست
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
    <html lang={locale}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}