import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function LanguageLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}