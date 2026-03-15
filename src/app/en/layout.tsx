import { ReactNode } from "react";
import "../globals.css"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default async function LanguageLayout({ 
  children, 
  params 
}: { 
  children: ReactNode, 
  params: Promise<{ locale: string }> 
}) {
  // این خط برای پاس کردن بیلد ورسل در نکس ۱۶ الزامی است
  await params; 

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}