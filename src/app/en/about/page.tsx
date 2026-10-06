"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Globe,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Award,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Landmark,
  Zap,
  Sparkles,
  ArrowUpRight,
  CreditCard,
  ExternalLink,
  FileCheck2
} from "lucide-react";

export default function S4HEL_AboutPage() {
  // 7 OFFICIAL ECOSYSTEM PLATFORMS (HEADED BY PARENT COMPANY)
  const ecosystemPlatforms = [
    {
      name: "Safi International Capital Ltd",
      tag: "OFFICIAL PARENT COMPANY (شرکت مادر)",
      badge: "PARENT HOLDING & ASSETS",
      desc: "The supreme sovereign parent holding company of the Safi Conglomerate. Safi International Capital Ltd directs group treasury, institutional private equity, asset allocation, and umbrella governance across all subsidiary platforms.",
      url: "https://safiinternationalcapitalltd.site/",
      logo: "/ecosystem/capital.png",
      color: "border-amber-400/80 bg-gradient-to-b from-[#142A4A] to-[#091D34] shadow-[0_0_40px_rgba(251,191,36,0.3)] ring-1 ring-amber-400/50",
      badgeBg: "bg-amber-400/20 text-amber-300 border-amber-400/60 font-black",
      isParent: true,
    },
    {
      name: "SafiPay Digital Bank",
      tag: "OFFICIAL DIGITAL BANK & SEPA",
      badge: "BANKING & SEPA",
      desc: "Our premier digital banking institution providing direct European SEPA IBANs, multi-currency corporate accounts, and global payment rails.",
      url: "https://safipay.net/",
      logo: "/ecosystem/safipay.png",
      color: "border-sky-500/40 hover:border-sky-400 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] bg-[#091D34]",
      badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      isParent: false,
    },
    {
      name: "Safi Academy",
      tag: "OFFICIAL EDUCATION HUB",
      badge: "ONLINE ACADEMY",
      desc: "Comprehensive online academy providing certified masterclasses in international e-commerce, digital business management, and freelance scaling.",
      url: "https://safiacademy.org/",
      logo: "/ecosystem/academy.png",
      color: "border-[#FF7A00]/40 hover:border-[#FF7A00] group-hover:shadow-[0_0_30px_rgba(255,122,0,0.25)] bg-[#091D34]",
      badgeBg: "bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/30",
      isParent: false,
    },
    {
      name: "Safi TopUp",
      tag: "TELECOM & DIGITAL RECHARGE",
      badge: "INSTANT VOUCHERS",
      desc: "Instant worldwide mobile recharge, telecom airtime, game cards, and digital vouchers with automated high-speed fulfillment.",
      url: "https://safitopup.site/",
      logo: "/ecosystem/topup.png",
      color: "border-emerald-500/40 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] bg-[#091D34]",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      isParent: false,
    },
    {
      name: "Safi Pro",
      tag: "ENTERPRISE SOFTWARE SUITE",
      badge: "LICENSES & APIS",
      desc: "Commercial enterprise software licenses, verified professional digital services, developer APIs, and productivity infrastructure.",
      url: "https://safipro.site/",
      logo: "/ecosystem/safipro.png",
      color: "border-purple-500/40 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.25)] bg-[#091D34]",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      isParent: false,
    },
    {
      name: "Safi AI",
      tag: "NEXT-GEN ARTIFICIAL INTELLIGENCE",
      badge: "AUTONOMOUS AGENTS",
      desc: "State-of-the-art artificial intelligence models, autonomous workflow engines, and enterprise machine intelligence architectures.",
      url: "https://www.safiai.site/",
      logo: "/ecosystem/ai.png",
      color: "border-teal-500/40 hover:border-teal-400 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] bg-[#091D34]",
      badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      isParent: false,
    },
    {
      name: "Zev App",
      tag: "CONSUMER TECHNOLOGY & LIFESTYLE",
      badge: "DIGITAL LIFESTYLE",
      desc: "Modern consumer application delivering financial convenience, digital utility services, encrypted communications, and smart interactions.",
      url: "https://www.zevapp.com/",
      logo: "/ecosystem/zev.jpeg",
      color: "border-indigo-500/40 hover:border-indigo-400 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.25)] bg-[#091D34]",
      badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      isParent: false,
    },
  ];

  const corporatePillars = [
    {
      title: "Statutory Good Standing & Regulatory Shield",
      desc: "We strictly oversee compliance under the US Corporate Transparency Act (CTA) and FinCEN Beneficial Ownership Information (BOI), ensuring our clients operate with zero legal vulnerabilities.",
      icon: <ShieldCheck size={22} className="text-[#FF7A00]" />,
    },
    {
      title: "Direct Banking Corridors & SEPA Instant",
      desc: "Eliminating the barriers of global finance. Connecting non-resident entrepreneurs directly to US Tier-1 institutions (Mercury, Relay) and our partner banking rails at SafiPay (safipay.net).",
      icon: <Landmark size={22} className="text-[#FF7A00]" />,
    },
    {
      title: "Universal 400+ Platform Cashout",
      desc: "Robust clearance and settlement pipelines for revenue earned on Upwork, Amazon, Stripe, PayPal, TikTok Shop, Deel, and over 400 platforms worldwide into stablecoins or local fiat.",
      icon: <Zap size={22} className="text-[#FF7A00]" />,
    },
    {
      title: "S4HEL Cosmeceuticals & Skin Serums Division",
      desc: "Developing and distributing clinical-grade skin serums (Vitamin C, Hyaluronic Acid, Retinol, Niacinamide) sold across Amazon FBA, TikTok Shop, and private label cosmetic networks.",
      icon: <Sparkles size={22} className="text-[#FF7A00]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Background Architectural Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 right-1/4 w-[750px] h-[750px] bg-[#FF7A00]/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-[650px] h-[650px] bg-[#0A2540]/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-28">

        {/* 1. HERO */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]">
            <Building2 size={13} className="animate-pulse" /> S4HEL LLC • ABOUT OUR ENTERPRISE
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            GLOBAL CORPORATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              &amp; COMMERCIAL LEADERSHIP
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
            S4HEL LLC (S4hel Company) is an elite multi-faceted corporate firm headquartered in Kalispell, Montana. We empower international entrepreneurs with sovereign US LLC and UK corporate registrations, universal cash-out infrastructures across 400+ platforms worldwide, and high-performance physical consumer brands including S4HEL Skin Serums.
          </p>

          {/* Montana Official Headquarters Card */}
          <div className="p-6 rounded-3xl bg-[#091D34] border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-2xl">
            <div className="flex items-start gap-3">
              <MapPin size={22} className="text-[#FF7A00] shrink-0 mt-1" />
              <div>
                <div className="text-white font-bold text-xs uppercase tracking-wider">
                  Official Corporate Headquarters
                </div>
                <div className="text-xs text-slate-300 font-mono mt-0.5">
                  1001 S Main St Ste 500, Kalispell, MT 59901, Montana, USA
                </div>
                <div className="text-[10px] text-[#FF7A00] font-mono mt-1">
                  Active Entity: S4HEL LLC • Montana Secretary of State Registered
                </div>
              </div>
            </div>
            <Link
              href="/en/contact"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-md"
            >
              Contact Desk
            </Link>
          </div>
        </section>

        {/* 2. EXECUTIVE LEADERSHIP (SAHEL SALEM ONLY) */}
        <section id="founder" className="space-y-12 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] font-mono uppercase tracking-widest border border-[#FF7A00]/30">
              <Award size={12} /> CHIEF EXECUTIVE OFFICER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Executive Leadership
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Guided by founder Sahel Salem, S4HEL LLC unites cross-border financial strategy, regulatory mastery, and global commercial operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#091D34] border border-white/10 hover:border-[#FF7A00]/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pb-8 border-b border-white/10">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#FF7A00]/40 shadow-2xl shrink-0 bg-[#07192F]">
                <img
                  src="/sahel.jpeg"
                  alt="Sahel Salem"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left space-y-3 flex-grow">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] font-mono uppercase tracking-wider font-bold">
                  <FileCheck2 size={13} /> OFFICIAL EXECUTIVE CONTRACT &bull; PARENT COMPANY: SAFI INTERNATIONAL CAPITAL LTD (شرکت مادر)
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                  Sahel Salem{" "}
                  <span className="text-xl text-slate-400 font-normal font-sans not-italic">
                    (ساحل سالم)
                  </span>
                </h3>
                <div className="text-sm font-bold text-white/90 uppercase tracking-wider text-[#FF7A00]">
                  Founder &amp; Chief Executive Officer (CEO)
                </div>
                <div className="text-xs text-slate-300 font-mono flex items-center justify-center md:justify-start gap-1.5 pt-1">
                  <GraduationCap size={15} className="text-[#FF7A00]" />
                  <span>BBA in Business Administration • Global Financial Law Focus</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Born: March 19, 2007 (۱۹ مارچ ۲۰۰۷) • Montana Registered Officer
                </div>
              </div>
            </div>

            {/* Sahel's Executive Quote */}
            <div className="my-8 p-5 rounded-2xl bg-[#07192F] border border-amber-400/40 italic text-slate-200 text-sm sm:text-base leading-relaxed">
              &quot;Under our executive mandate governed by our parent holding entity, Safi International Capital Ltd (شرکت مادر), we engineer sovereign financial corridors, multi-currency corporate networks, and legally bulletproof banking infrastructures that give international founders complete dominion over their worldwide wealth.&quot;
            </div>

            {/* Detailed Bio */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify">
              <p>
                <strong className="text-white">Sahel Salem (ساحل سالم)</strong> is the Founder and Chief Executive Officer (CEO) of S4HEL LLC and holds the official <strong className="text-amber-400">Executive Management Contract under our parent holding corporation, Safi International Capital Ltd (شرکت مادر)</strong>. Under his direction, the parent company oversees our interconnected multi-national conglomerate uniting institutional capital, digital banking (SafiPay), digital education (Safi Academy), telecommunications (Safi TopUp), software (Safi Pro), artificial intelligence (Safi AI), consumer technology (Zev App), and commercial corporate engineering (S4HEL LLC).
              </p>
              <p>
                Sahel&apos;s executive focus centers on direct European banking integration (dedicated SEPA Instant &amp; dedicated EUR/GBP IBAN accounts), establishing Tier-1 US corporate banking accounts with Mercury Bank and Relay Financial, and structuring compliant US corporate entities in Montana, Wyoming, and Delaware under the parent umbrella of Safi International Capital Ltd.
              </p>
              <p>
                With deep expertise in anti-money laundering (AML) protocols, the US Corporate Transparency Act (CTA), and FinCEN Beneficial Ownership reporting, Sahel oversees client relationships, corporate governance, universal cashout channels across more than 400 global platforms, and our partner banking ecosystem at SafiPay.
              </p>
            </div>

            {/* Core Mandates */}
            <div className="space-y-3 pt-6 mt-6 border-t border-white/10">
              <h4 className="text-xs font-black font-mono tracking-widest text-[#FF7A00] uppercase">
                Executive Leadership Mandates:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>Contracted CEO across the 7 platforms of the Safi Global Ecosystem</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>Director of S4HEL Montana Corporate Headquarters &amp; Statutory Office</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>European SEPA &amp; US Banking Direct Integration Architect</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>Universal 400+ Platform Cash-Out &amp; Clearing Network Oversight</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>Universal 400+ Platform Cash-Out &amp; Clearing Network Oversight</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <span>S4HEL Cosmeceuticals &amp; Skin Serums International Distribution</span>
                </div>
              </div>
            </div>

            {/* Contact Sahel Desk */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <a href="mailto:sahel@s4hel.com" className="flex items-center gap-2 text-[#FF7A00] hover:text-white transition-colors">
                <Mail size={14} /> sahel@s4hel.com
              </a>
              <a href="tel:+14063160317" className="flex items-center gap-2 text-slate-300 hover:text-[#FF7A00] transition-colors">
                <Phone size={14} /> +1 406 316 0317 (Montana Office)
              </a>
              <a href="https://wa.me/93700582033" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors">
                <span>WhatsApp: +93 70 058 2033</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. SAFI GLOBAL ECOSYSTEM & PARENT HOLDING COMPANY */}
        <section id="ecosystem" className="space-y-12 scroll-mt-28 border-t border-white/10 pt-16">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-[10px] font-mono uppercase tracking-[0.25em]">
              <Sparkles size={12} className="text-amber-400" /> CONGLOMERATE ARCHITECTURE &bull; PARENT COMPANY &amp; 7 NETWORKS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Safi Global Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Headed by supreme parent corporation <strong className="text-amber-300">Safi International Capital Ltd (شرکت مادر)</strong>, our conglomerate operates an interconnected network of institutional asset management, European SEPA banking, global digital education, enterprise software, AI, and commercial corporate engineering.
            </p>
          </div>

          {/* PARENT COMPANY HIGHLIGHT HERO BANNER */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#142A4A] via-[#0E2038] to-[#091D34] border-2 border-amber-400/80 shadow-[0_0_50px_rgba(251,191,36,0.25)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 border-2 border-amber-400/60 p-3 shadow-2xl shrink-0 backdrop-blur-xl flex items-center justify-center">
                  <img
                    src="/ecosystem/capital.png"
                    alt="Safi International Capital Ltd Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/60 text-amber-300 text-[10px] font-mono uppercase tracking-widest font-black">
                    ★ OFFICIAL PARENT COMPANY (شرکت مادر)
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    Safi International Capital Ltd
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    The supreme parent holding company governing corporate assets, treasury allocation, private equity, and statutory compliance across all subsidiaries including S4HEL LLC, SafiPay, Safi Academy, and technological platforms.
                  </p>
                </div>
              </div>

              <a
                href="https://safiinternationalcapitalltd.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-[#FF7A00] text-slate-950 font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Visit Parent Company</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* ALL 7 PLATFORMS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ecosystemPlatforms.map((eco, idx) => (
              <a
                key={idx}
                href={eco.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-7 rounded-3xl border ${eco.color} transition-all duration-300 flex flex-col justify-between group shadow-xl transform hover:-translate-y-2 relative overflow-hidden`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 p-2 flex items-center justify-center group-hover:scale-105 group-hover:border-[#FF7A00]/50 transition-all backdrop-blur-md overflow-hidden shrink-0 shadow-inner">
                      <img
                        src={eco.logo}
                        alt={`${eco.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className={`text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border ${eco.badgeBg}`}>
                      {eco.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block">
                      {eco.tag}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#FF7A00] transition-colors mt-0.5">
                      {eco.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {eco.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 flex items-center justify-between mt-4">
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">
                    Official Portal
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#FF7A00]">
                    <span>Launch</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. FOUR CORPORATE PILLARS */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
              INSTITUTIONAL FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Corporate Divisions of S4HEL LLC
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our multidisciplinary operational pillars designed to serve the global marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#091D34] border border-white/5 hover:border-[#FF7A00]/40 transition-all space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 text-[9px] font-mono text-[#FF7A00]/80 uppercase tracking-widest">
                  DIVISION 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MONTANA ADVANTAGE & ECOSYSTEM */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#091D34] via-[#0A2540] to-[#07192F] border border-[#FF7A00]/30 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase">
                COMMERCIAL SOVEREIGNTY &amp; ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Why Kalispell, Montana?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Montana is universally recognized as one of the most advantageous corporate jurisdictions in the United States. With <strong className="text-white">0% General State Sales Tax</strong>, zero public disclosure requirements for LLC ownership, and zero franchise tax on out-of-state trade, it offers supreme margin protection and asset confidentiality.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                From our corporate headquarters at <strong className="text-white">1001 S Main St Ste 500, Kalispell, MT 59901</strong>, S4HEL LLC manages dedicated registered agent operations, certified document scanning, and physical proof of commercial nexus essential for Tier-1 US bank accounts, our digital banking arm <a href="https://safipay.net/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A00] font-bold underline">SafiPay</a>, and education partner <a href="https://safiacademy.org/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A00] font-bold underline">Safi Academy</a>.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07192F] border border-white/10 space-y-4 font-mono text-xs shadow-xl">
              <h4 className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
                <MapPin size={16} className="text-[#FF7A00]" /> Montana Statutory Headquarters
              </h4>
              <div className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-slate-300">
                <div className="text-[#FF7A00] font-bold">S4HEL LLC (S4hel Company)</div>
                <div>1001 S Main St Ste 500</div>
                <div>Kalispell, MT 59901</div>
                <div>State of Montana, USA</div>
                <div className="text-[10px] text-slate-400 pt-2">Corporate Office: +1 406 316 0317</div>
                <div className="text-[10px] text-slate-400">Contact: contact@s4hel.com</div>
              </div>
              <Link
                href="/en/contact"
                className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 text-slate-950 font-black uppercase text-xs tracking-wider hover:from-white hover:to-white transition-all shadow-md"
              >
                Inquire With Executive Desk
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}