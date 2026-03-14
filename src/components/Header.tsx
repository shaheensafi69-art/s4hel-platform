"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/en" },
    { name: "Services", href: "/en/services" },
    { name: "About", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
  ];

  const languages = [
    { name: "English", code: "EN", flag: "🇺🇸", active: true },
    { name: "Deutsch", code: "DE", flag: "🇩🇪", active: false },
    { name: "Français", code: "FR", flag: "🇫🇷", active: false },
    { name: "Русский", code: "RU", flag: "🇷🇺", active: false },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/en" className="group z-50">
          <motion.span 
            className="text-2xl lg:text-3xl font-black italic tracking-tighter text-white group-hover:text-[#64FFDA] transition-all duration-500"
          >
            S4HEL<span className="text-[#64FFDA]">.</span>
          </motion.span>
        </Link>

        {/* DESKTOP NAVIGATION */}
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
        <div className="flex items-center gap-3 lg:gap-5">
          
          {/* LANGUAGE (Desktop Only) */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-[#8892B0] hover:text-[#64FFDA] transition-colors"
            >
              <Globe size={14} className="text-[#64FFDA]" />
              <span>EN</span>
              <ChevronDown size={12} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-48 bg-[#0A192F] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl"
                >
                  {languages.map((lang) => (
                    <div 
                      key={lang.code}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                        lang.active ? "bg-[#64FFDA]/10 text-[#64FFDA]" : "opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{lang.flag}</span>
                        <span className="text-[11px] font-bold">{lang.name}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* GET STARTED (Desktop Only) */}
          <Link 
            href="https://www.registeredagentsinc.com/business-formation/" 
            target="_blank"
            className="hidden sm:block px-6 lg:px-8 py-3 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] transition-all duration-500"
          >
            Get Started
          </Link>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 p-2 text-[#64FFDA]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#020C1B] z-40 lg:hidden flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-[#8892B0] hover:text-[#64FFDA] transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
               <Link 
                href="https://www.registeredagentsinc.com/business-formation/" 
                className="px-10 py-4 bg-[#64FFDA] text-[#020C1B] rounded-full text-xs font-black uppercase tracking-widest"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isScrolled && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </motion.header>
  );
}