"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Building2, 
  CreditCard, 
  Sparkles, 
  Globe, 
  GraduationCap, 
  Banknote, 
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  Droplets,
  Layers,
  Smartphone,
  Cpu,
  TrendingUp,
  Bot,
  Compass
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dropdown states for desktop
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    // FLOATING ROUNDED PILL HEADER
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] sm:w-[94%] max-w-[1520px] z-50 transition-all duration-500">
      <div
        className={`w-full transition-all duration-300 rounded-2xl lg:rounded-full ${
          isScrolled
            ? "bg-[#061426]/95 backdrop-blur-2xl border border-[#FF7A00]/35 py-2 sm:py-2.5 px-4 sm:px-6 shadow-[0_15px_45px_rgba(0,0,0,0.85)] shadow-black/80 ring-1 ring-white/10"
            : "bg-[#07192F]/90 backdrop-blur-xl border border-white/15 py-2.5 sm:py-3.5 px-4 sm:px-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/5"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* BRAND LOGO WITH OFFICIAL S4HEL LOGO IMAGE */}
          <Link href="/en" className="flex items-center gap-3 group" onClick={closeDropdown}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white p-1 shadow-md border border-[#FF7A00]/40 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,122,0,0.5)] transition-all shrink-0">
              <img
                src="/logo.png"
                alt="S4HEL LLC Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black italic tracking-tight text-white group-hover:text-[#FF7A00] transition-colors">
                  S4<span className="text-[#FF7A00]">HEL</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#94A3B8]">LLC</span>
              </div>
              <span className="text-[8px] font-mono tracking-[0.2em] text-[#FF7A00] uppercase mt-0.5">
                MONTANA • GLOBAL COMMERCE
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION WITH CLEAN DROPDOWNS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* 1. HOME */}
            <Link
              href="/en"
              onClick={closeDropdown}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:text-[#FF7A00] transition-colors rounded-full hover:bg-white/5"
            >
              Home
            </Link>

            {/* 2. CORPORATE SERVICES (DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors rounded-full ${
                  activeDropdown === "services" ? "text-[#FF7A00] bg-white/5" : "text-slate-200 hover:text-[#FF7A00]"
                }`}
              >
                <span>Services</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl bg-[#081B30]/98 border border-[#FF7A00]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 space-y-1 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[9px] font-mono font-bold text-[#FF7A00] uppercase tracking-wider border-b border-white/5">
                    Corporate &amp; Legal Formations
                  </div>
                  <Link
                    href="/en/services"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <Building2 size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">Montana LLC (Headquarters)</div>
                      <div className="text-[10px] text-slate-400">0% State Sales Tax • Supreme Privacy</div>
                    </div>
                  </Link>
                  <Link
                    href="/en/services"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <ShieldCheck size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">Wyoming &amp; Delaware Entities</div>
                      <div className="text-[10px] text-slate-400">Asset protection &amp; Venture standard</div>
                    </div>
                  </Link>
                  <Link
                    href="/en/services"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <Globe size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">UK Private Limited (LTD)</div>
                      <div className="text-[10px] text-slate-400">Companies House 24h setup</div>
                    </div>
                  </Link>
                  <Link
                    href="/en/services"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <CreditCard size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">US &amp; EU Business Banking</div>
                      <div className="text-[10px] text-slate-400">Mercury, Relay &amp; Dedicated SEPA IBANs</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. 400+ CASHOUT PLATFORMS (DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("platforms")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors rounded-full ${
                  activeDropdown === "platforms" ? "text-[#FF7A00] bg-white/5" : "text-slate-200 hover:text-[#FF7A00]"
                }`}
              >
                <span>400+ Platforms</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === "platforms" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "platforms" && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-3xl bg-[#081B30]/98 border border-[#FF7A00]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2.5 space-y-1 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[9px] font-mono font-bold text-[#FF7A00] uppercase tracking-wider border-b border-white/5">
                    Universal Cashout Hub
                  </div>
                  <Link
                    href="/en/platforms"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <Banknote size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">All 400+ Platforms Directory</div>
                      <div className="text-[10px] text-slate-400">Search &amp; filter across 14 global sectors</div>
                    </div>
                  </Link>
                  <Link
                    href="/en/platforms"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <Zap size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">Freelance &amp; Remote Work</div>
                      <div className="text-[10px] text-slate-400">Upwork, Fiverr, Deel &amp; Toptal cashout</div>
                    </div>
                  </Link>
                  <Link
                    href="/en/platforms"
                    onClick={closeDropdown}
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors"
                  >
                    <Globe size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold">E-Commerce &amp; Gateways</div>
                      <div className="text-[10px] text-slate-400">Amazon, TikTok Shop, Stripe &amp; PayPal</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. ABOUT & LEADERSHIP */}
            <Link
              href="/en/about"
              onClick={closeDropdown}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:text-[#FF7A00] transition-colors rounded-full hover:bg-white/5"
            >
              About &amp; CEO
            </Link>

            {/* 5. OUR ECOSYSTEM (7 PLATFORMS IN DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("ecosystem")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors rounded-full ${
                  activeDropdown === "ecosystem" ? "text-[#FF7A00] bg-white/5" : "text-slate-200 hover:text-[#FF7A00]"
                }`}
              >
                <span>Ecosystem (7)</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === "ecosystem" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "ecosystem" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-3xl bg-[#081B30]/98 border border-[#FF7A00]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-3 space-y-1.5 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 max-h-[75vh] overflow-y-auto">
                  <div className="px-3 py-1 text-[9px] font-mono font-bold text-[#FF7A00] uppercase tracking-wider border-b border-white/5 flex items-center justify-between">
                    <span>Safi Global Ecosystem</span>
                    <span className="text-white/60">7 Official Networks</span>
                  </div>
                  
                  {/* 1. SAFIPAY */}
                  <a
                    href="https://safipay.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-sky-500/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/safipay.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-sky-400">
                        <span>SafiPay (Digital Bank)</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Digital Banking • European SEPA IBAN &amp; Rails</div>
                    </div>
                  </a>

                  {/* 2. SAFI ACADEMY */}
                  <a
                    href="https://safiacademy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-[#FF7A00]/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/academy.png" alt="Safi Academy Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-[#FF7A00]">
                        <span>Safi Academy (Education Hub)</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Online Business &amp; E-Commerce Courses</div>
                    </div>
                  </a>

                  {/* 3. SAFI TOPUP */}
                  <a
                    href="https://safitopup.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-emerald-500/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/topup.png" alt="Safi TopUp Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-emerald-400">
                        <span>Safi TopUp</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Instant Mobile Recharge &amp; Digital Gift Cards</div>
                    </div>
                  </a>

                  {/* 4. SAFI PRO */}
                  <a
                    href="https://safipro.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-purple-500/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/safipro.png" alt="Safi Pro Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-purple-400">
                        <span>Safi Pro</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Professional Software Tools &amp; Enterprise Services</div>
                    </div>
                  </a>

                  {/* 5. SAFI INTERNATIONAL CAPITAL LTD (PARENT COMPANY) */}
                  <a
                    href="https://safiinternationalcapitalltd.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl bg-amber-500/5 hover:bg-amber-500/15 border border-amber-400/30 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-amber-400/60 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/capital.png" alt="Safi Capital Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-amber-300 group-hover:text-amber-200">
                        <span>Safi International Capital (Parent Company)</span>
                        <ExternalLink size={10} className="text-amber-400" />
                      </div>
                      <div className="text-[10px] text-slate-300">Official Parent Holding Company • Institutional Governance</div>
                    </div>
                  </a>

                  {/* 6. SAFI AI */}
                  <a
                    href="https://www.safiai.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-teal-500/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/ai.png" alt="Safi AI Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-teal-400">
                        <span>Safi AI</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Artificial Intelligence &amp; Autonomous Agents</div>
                    </div>
                  </a>

                  {/* 7. ZEV APP */}
                  <a
                    href="https://www.zevapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-2xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 border border-indigo-500/30 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                      <img src="/ecosystem/zev.jpeg" alt="Zev App Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold flex items-center gap-1.5 text-white group-hover:text-indigo-400">
                        <span>Zev App</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Next-Gen Consumer Technology &amp; Lifestyle App</div>
                    </div>
                  </a>

                </div>
              )}
            </div>

            {/* 6. ABOUT & LEADERSHIP (SAHEL SALEM CEO) */}
            <Link
              href="/en/about"
              onClick={closeDropdown}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:text-[#FF7A00] transition-colors rounded-full hover:bg-white/5"
            >
              About
            </Link>

            {/* 7. CONTACT */}
            <Link
              href="/en/contact"
              onClick={closeDropdown}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 hover:text-[#FF7A00] transition-colors rounded-full hover:bg-white/5"
            >
              Contact
            </Link>

          </nav>

          {/* RIGHT SIDE QUICK ACTION BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Link to SafiPay */}
            <a
              href="https://safipay.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white hover:bg-sky-500/20 text-[10px] font-bold uppercase tracking-wider transition-all"
            >
              <CreditCard size={11} />
              SafiPay
              <ExternalLink size={9} className="text-slate-400" />
            </a>

            {/* Primary Action Button */}
            <Link
              href="/en/platforms"
              onClick={closeDropdown}
              className="px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-[10px] uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,122,0,0.35)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]"
            >
              400+ Platforms
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#FF7A00] hover:bg-white/5 rounded-full border border-[#FF7A00]/25 transition-all"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-x-0 top-16 sm:top-20 mx-auto w-[95%] max-w-lg bg-[#07192F]/98 border border-[#FF7A00]/30 shadow-2xl rounded-3xl backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-start p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest pb-3 border-b border-white/10 mb-4 flex items-center justify-between">
          <span>S4HEL LLC • Main Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-2 text-xs font-bold uppercase">
          <Link
            href="/en"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00]"
          >
            Home
          </Link>

          <Link
            href="/en/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00]"
          >
            Corporate &amp; Bank Services
          </Link>

          <Link
            href="/en/platforms"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00]"
          >
            400+ Platforms Cash-Out
          </Link>

          <Link
            href="/en/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00]"
          >
            About &amp; CEO
          </Link>

          {/* ECOSYSTEM COLLAPSIBLE HEADER */}
          <div className="pt-3 pb-1 border-t border-white/10">
            <span className="text-[10px] font-mono text-[#FF7A00] tracking-widest uppercase">
              Safi Global Ecosystem (7)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1.5 pl-2">
            <a
              href="https://safipay.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/safipay.png" alt="SafiPay" className="w-full h-full object-contain" />
                </span>
                SafiPay (Digital Bank)
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://safiacademy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/academy.png" alt="Safi Academy" className="w-full h-full object-contain" />
                </span>
                Safi Academy
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://safitopup.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/topup.png" alt="Safi TopUp" className="w-full h-full object-contain" />
                </span>
                Safi TopUp
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://safipro.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/safipro.png" alt="Safi Pro" className="w-full h-full object-contain" />
                </span>
                Safi Pro
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://safiinternationalcapitalltd.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/capital.png" alt="Safi Capital" className="w-full h-full object-contain" />
                </span>
                Safi International Capital (Parent Company)
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://www.safiai.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/ai.png" alt="Safi AI" className="w-full h-full object-contain" />
                </span>
                Safi AI
              </span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://www.zevapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-white/10 p-0.5 inline-flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/ecosystem/zev.jpeg" alt="Zev App" className="w-full h-full object-contain rounded-sm" />
                </span>
                Zev App
              </span>
              <ExternalLink size={12} />
            </a>
          </div>

          <Link
            href="/en/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00] mt-2"
          >
            About &amp; Sahel Salem (CEO)
          </Link>

          <Link
            href="/en/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/5 text-white hover:text-[#FF7A00]"
          >
            Contact Desk
          </Link>
        </div>
      </div>
    </header>
  );
}