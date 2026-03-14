import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S4HEL | Architecture for Global Founders",
  description: "Official platform for US LLC registration and business solutions",
};

// این تابع لیست زبان‌های مجاز را به Next.js معرفی می‌کند
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'de' },
    { lang: 'fr' },
    { lang: 'ru' }
  ];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // اگر زبان مشخص نبود، پیش‌فرض انگلیسی قرار می‌گیرد
  const displayLang = params?.lang || "en";

  return (
    <html lang={displayLang}>
      <body className={`${inter.className} bg-[#020C1B] text-white`}>
        {children}
      </body>
    </html>
  );
}