import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "S4HEL LLC | Global Corporate Engineering, 400+ Platform Cashout & S4HEL Skin Serums",
  description: "Official Headquarters of S4HEL LLC (Kalispell, Montana). Led by Sahel Salem (CEO). Premium US LLC Formations, Tier-1 Banking, 400+ Global Platform Cashout, and S4HEL Luxury Skin Serums.",
  keywords: [
    "S4HEL LLC", "S4HEL Company", "S4HEL Skin Serums", "Montana LLC", "Kalispell Montana",
    "Sahel Salem", "US LLC Formation", "UK LTD", "Platform Cashout", "Upwork Amazon Payout",
    "Skin Serum", "Vitamin C Serum", "Hyaluronic Acid", "Skincare Cosmeceuticals"
  ],
  authors: [{ name: "Sahel Salem" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6551903544426492" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6551903544426492"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />
      </head>
      <body className="antialiased bg-[#07192F] text-slate-100 selection:bg-[#FF7A00] selection:text-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}