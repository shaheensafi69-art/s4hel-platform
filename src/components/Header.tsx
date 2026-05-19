"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X, GraduationCap, Trophy, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/en" },
    { name: "Articles", href: "/en/articles" },
    { name: "About", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#020C1B]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-6 lg:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <Link href="/en" className="group flex items-center gap-2 relative z-50">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-black italic tracking-tighter text-white group-hover:text-[#64FFDA] transition-all duration-300">
              S4<span className="text-[#64FFDA]">HEL</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.4em] text-[#8892B0] uppercase -mt-1 group-hover:text-white transition-colors">
              University
            </span>
          </div>
        </Link>

        {/* CENTER NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8892B0] hover:text-[#64FFDA] transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64FFDA] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#64FFDA]" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3 relative z-50">
          
          {/* VICTORIES BUTTON - GLASS STYLE */}
          <Link
            href="/en/victories"
            className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#64FFDA]/10 hover:border-[#64FFDA]/30 text-white hover:text-[#64FFDA] text-[10px] font-black uppercase tracking-widest transition-all duration-300 group"
          >
            <Trophy size={14} className="group-hover:rotate-12 transition-transform" />
            Victories
          </Link>

          {/* ACADEMY BUTTON - GLASS STYLE */}
          <Link
            href="/en/academy"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#64FFDA]/10 hover:border-[#64FFDA]/30 text-white hover:text-[#64FFDA] text-[10px] font-black uppercase tracking-widest transition-all duration-300 group"
          >
            <GraduationCap size={16} className="group-hover:-rotate-12 transition-transform" />
            Academy
          </Link>

          {/* BLOG BUTTON - SOLID GLOW STYLE */}
          <Link
            href="/en/blog"
            className="hidden md:flex items-center gap-2 px-7 py-2.5 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Blog Hub
            <ArrowRight size={14} />
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#64FFDA] hover:bg-white/5 rounded-full transition-all border border-[#64FFDA]/20"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 bg-[#020C1B] z-40 lg:hidden flex flex-col justify-center items-center gap-8 transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-black uppercase italic tracking-widest text-white hover:text-[#64FFDA] transition-all transform hover:scale-110"
          >
            {link.name}
          </Link>
        ))}
        
        <div className="flex flex-col gap-4 w-full px-12 mt-10">
          <Link
            href="/en/victories"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 p-4 border border-[#64FFDA]/30 rounded-2xl text-[#64FFDA] font-black uppercase tracking-widest"
          >
            <Trophy size={18} /> Global Victories
          </Link>
          <Link
            href="/en/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 p-4 bg-[#64FFDA] text-[#020C1B] rounded-2xl font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(100,255,218,0.3)]"
          >
            Enter Blog Hub
          </Link>
        </div>
      </div>
    </header>
  );
}