"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// رنگ‌بندی هماهنگ با تم اعتماد و آرامش
const ACCENT = "#64FFDA"; // سبز-آبی روشن (آکوآ)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اصلاح مسیرها برای هدایت درست به پوشه en
  const navLinks = [
    { name: "Home", href: "/en" },
    { name: "Services", href: "/en/services" },
    { name: "About", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-[#020C1B]/90 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]" 
          : "bg-transparent py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* LOGO: S4HEL */}
        <Link href="/en" className="group flex items-center">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black italic tracking-tighter text-white group-hover:text-[#64FFDA] transition-all duration-500"
          >
            S4HEL<span className="text-[#64FFDA]">.</span>
          </motion.span>
        </Link>

        {/* CENTER NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8892B0] hover:text-[#64FFDA] transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#64FFDA] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#64FFDA]" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-5">
          {/* دکمه بلاگ - هدایت به مسیر دقیق src/app/en/blog/page.tsx */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/en/blog" 
              className="hidden md:block px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-[#64FFDA] border border-[#64FFDA]/20 rounded-full hover:bg-[#64FFDA]/5 hover:border-[#64FFDA] transition-all duration-500"
            >
              Intelligence
            </Link>
          </motion.div>

          {/* دکمه Get Started - کپسولی و درخشان */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://www.registeredagentsinc.com/business-formation/" 
              target="_blank"
              className="px-8 py-3 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] transition-all duration-500"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* خط ظریف کهکشانی */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </motion.header>
  );
}