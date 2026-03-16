// مسیر: app/[locale]/layout.tsx
import { ReactNode } from "react";
// هدر و فوتر را از اینجا حذف می‌کنیم چون در لایوت اصلی وجود دارند
import "@/app/globals.css";

export default function LanguageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* تگ <section> یا یک Fragment ساده کافی است.
          هدر و فوتر را از اینجا پاک کردیم تا با لایوت اصلی تداخل نکند.
      */}
      <main>
        {children}
      </main>
    </>
  );
}