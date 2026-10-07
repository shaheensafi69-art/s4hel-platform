import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "S4HEL LLC | Global Corporate Engineering, Tier-1 Banking & 400+ Platform Cashout",
  description: "Official Headquarters of S4HEL LLC (Kalispell, Montana). Directed by Sahel Salem (CEO) under Parent Company Safi International Capital Ltd. Premium Montana 0% Sales Tax LLCs, UK LTD, Tier-1 US & European Banking, and 400+ Platform Cashout Liquidity.",
  keywords: [
    "S4HEL LLC", "S4HEL Company", "Montana LLC Formation", "Kalispell Montana",
    "Sahel Salem", "US LLC Formation", "UK LTD", "Platform Cashout", "Upwork Amazon Payout",
    "Tier 1 Banking", "Mercury Bank Relay Financial", "SEPA Instant", "FinCEN BOI Compliance",
    "Corporate Engineering", "Safi Global Ecosystem", "Safi International Capital Ltd"
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