"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react"; // نیاز به نصب lucide-react دارید

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

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
          
          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
            >
              <Globe size={14} className="text-[#64FFDA]" />
              <span>EN</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
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
                        lang.active 
                          ? "bg-[#64FFDA]/10 text-[#64FFDA] cursor-pointer" 
                          : "opacity-40 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{lang.flag}</span>
                        <span className="text-[11px] font-bold tracking-wider">{lang.name}</span>
                      </div>
                      {!lang.active && (
                        <span className="text-[7px] bg-white/5 px-1.5 py-0.5 rounded text-[#8892B0] uppercase">Soon</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* INTELLIGENCE BUTTON */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/en/blog" 
              className="hidden md:block px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-[#64FFDA] border border-[#64FFDA]/20 rounded-full hover:bg-[#64FFDA]/5 hover:border-[#64FFDA] transition-all duration-500"
            >
              Intelligence
            </Link>
          </motion.div>

          {/* GET STARTED BUTTON */}
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

      {!isScrolled && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </motion.header>
  );
}