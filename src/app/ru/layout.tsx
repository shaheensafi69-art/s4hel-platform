import { ReactNode } from "react";
import "../../globals.css"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default function RuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}