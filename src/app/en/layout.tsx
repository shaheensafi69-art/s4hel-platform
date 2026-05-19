// مسیر: src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import "@/app/globals.css";

interface LanguageLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // تغییر تایپ به Promise
}

export default async function LanguageLayout({ children, params }: LanguageLayoutProps) {
  // استفاده از await برای باز کردن params
  const { locale } = await params;
  const currentLocale = locale || "en";

  return (
    <html lang={currentLocale}>
      <body className="bg-[#020C1B] antialiased selection:bg-[#64FFDA]/30">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}