import { ReactNode } from "react";
// استفاده از @ باعث می‌شود نکس‌جی‌اس خودش از ریشه پروژه فایل را پیدا کند
import "@/app/globals.css"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

export default async function EnLayout({ 
  children, 
  params 
}: { 
  children: ReactNode, 
  params: Promise<{ locale: string }> 
}) {
  // این خط برای ساکت کردن تایپ‌اسکریپت در نکس ۱۶ حیاتی است
  await params; 

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}