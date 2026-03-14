import { ReactNode } from "react";
import "../globals.css"; // فقط دو نقطه و یک اسلش
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function EnLayout({ children, params }: LayoutProps) {
  await params; 

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}