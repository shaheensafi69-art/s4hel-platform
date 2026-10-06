"use client";

import React from "react";
import Link from "next/link";
import AdSenseInFeed from "@/components/AdSenseInFeed";
import {
  Building2,
  ShieldCheck,
  CreditCard,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Landmark,
  Lock,
  MapPin,
  Clock,
  ArrowUpRight,
  UserCheck,
  Activity,
  Server,
  Layers,
  Banknote,
  Briefcase,
  ShoppingBag,
  Video,
  Star,
  Award,
  Sparkles,
  Droplets,
  Truck,
  Package,
  Sun,
  Moon,
  Leaf,
  GraduationCap,
  FileCheck2,
  BadgeCheck,
  Flame,
  ChevronRight,
  Shield,
  Eye
} from "lucide-react";

export default function S4HEL_Corporate_Home() {
  const trustMetrics = [
    { label: "Execution Latency", value: "< 90ms", icon: <Activity size={16} className="text-[#FF7A00] animate-pulse" /> },
    { label: "Headquarters Nexus", value: "Kalispell, MT", icon: <MapPin size={16} className="text-[#FF7A00]" /> },
    { label: "Global Cashout Hub", value: "400+ Platforms", icon: <Globe size={16} className="text-[#FF7A00]" /> },
    { label: "State Sales Tax", value: "0% Montana Rate", icon: <Landmark size={16} className="text-[#FF7A00]" /> },
    { label: "Clinical Skincare", value: "S4HEL Cosmeceuticals", icon: <Sparkles size={16} className="text-[#FF7A00]" /> },
  ];

  const featuredPlatforms = [
    {
      name: "Upwork Global Inc.",
      badge: "FREELANCER & AGENCY",
      speed: "< 15 Mins",
      payout: "USDT / Wire / Local Bank",
      desc: "Direct USD withdrawal routing via S4HEL US Mercury/Relay accounts. Zero non-resident holds.",
    },
    {
      name: "Amazon Seller Central",
      badge: "US / UK / EU STORES",
      speed: "Daily / Bi-Weekly",
      payout: "USD / EUR / USDT",
      desc: "Dedicated corporate account numbers eliminating foreign currency exchange penalties.",
    },
    {
      name: "Stripe & Treasury",
      badge: "0% ROLLING RESERVES",
      speed: "Instant / 24 Hours",
      payout: "Multi-Currency Sweep",
      desc: "Verified corporate Stripe accounts with high volume ceilings and immediate daily payouts.",
    },
    {
      name: "PayPal Business US",
      badge: "ANTI-FREEZE ROUTING",
      speed: "Immediate",
      payout: "Instant Cashout",
      desc: "Eliminates 21-day and 180-day limitation holds with verified Montana corporate tax backing.",
    },
    {
      name: "TikTok Shop US / UK",
      badge: "CREATOR & SELLER",
      speed: "Same-Day",
      payout: "USD / USDT",
      desc: "Unlocks US TikTok Shop seller approval and creator affiliate commissions for non-residents.",
    },
    {
      name: "Deel & Remote.com",
      badge: "GLOBAL CONTRACTORS",
      speed: "< 15 Mins",
      payout: "ACH / Direct Wire",
      desc: "Instant contractor salary clearing into stablecoins (USDT/USDC) or international accounts.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white overflow-hidden">
      
      {/* 3D Dynamic Ambient Orbs & Depth Lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-10 left-1/4 w-[850px] h-[850px] bg-[#FF7A00]/12 blur-[190px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[750px] h-[750px] bg-[#0A2540]/60 blur-[180px] rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-[650px] h-[650px] bg-[#FF7A00]/8 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-28">

        {/* 1. 3D HERO SECTION */}
        <section className="relative text-center space-y-8 pt-6 pb-6">
          
          {/* Floating 3D Headquarters Pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#FF7A00]/40 bg-[#091D34]/90 backdrop-blur-xl text-[#FF7A00] text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(255,122,0,0.25)] transform hover:scale-105 transition-transform duration-300">
            <Building2 size={14} className="animate-pulse" />
            <span>S4HEL LLC • 1001 S MAIN ST STE 500, KALISPELL, MT 59901</span>
          </div>

          {/* Main Headline with 3D Depth */}
          <div className="max-w-5xl mx-auto space-y-5">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] italic select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              GLOBAL CORPORATE, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
                400+ PLATFORMS CASHOUT
              </span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 font-bold not-italic">
                &amp; S4HEL SKIN SERUMS
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-lg font-medium leading-relaxed pt-2">
              Official enterprise portal of <strong className="text-white">S4HEL LLC</strong> (Kalispell, Montana). Directed by <strong className="text-white">Sahel Salem (CEO)</strong> with executive contract across the <strong className="text-[#FF7A00]">Safi Global Ecosystem</strong>. We engineer Montana 0% tax LLCs, universal cash-out gateways across 400+ platforms, and clinical-grade S4HEL Skin Serums.
            </p>
          </div>

          {/* 3D Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/en/platforms"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black uppercase text-xs tracking-[0.2em] shadow-[0_10px_35px_rgba(255,122,0,0.4)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.7)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Banknote size={16} />
              <span>400+ Cashout Platforms</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/en/serums"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#091D34] border border-[#FF7A00]/40 text-slate-100 hover:text-white hover:border-[#FF7A00] font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:shadow-[0_10px_30px_rgba(255,122,0,0.25)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className="text-[#FF7A00]" />
              <span>S4HEL Skin Serums</span>
            </Link>

            <Link
              href="/en/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#091D34] border border-white/10 hover:border-[#FF7A00] text-slate-200 hover:text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Building2 size={16} />
              <span>Corporate Services</span>
            </Link>
          </div>

          {/* Trust Metrics Bar with 3D Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-10 max-w-6xl mx-auto">
            {trustMetrics.map((tm, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-[#091D34]/80 backdrop-blur-xl border border-white/10 hover:border-[#FF7A00]/40 flex items-center justify-center gap-3 text-xs font-mono shadow-xl hover:shadow-[0_8px_25px_rgba(255,122,0,0.2)] transform hover:-translate-y-1 transition-all"
              >
                {tm.icon}
                <div className="text-left">
                  <div className="text-white font-bold text-sm">{tm.value}</div>
                  <div className="text-[10px] text-slate-400">{tm.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. S4HEL SKIN SERUMS 3D SHOWCASE (FEATURING USER'S /serum.jpeg IMAGE) */}
        <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#091D34] via-[#0A2540] to-[#07192F] border border-[#FF7A00]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: 3D Product Pedestal with /serum.jpeg */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Glowing Pedestal Light Behind Image */}
              <div className="absolute w-72 h-72 bg-[#FF7A00]/25 blur-[90px] rounded-full pointer-events-none" />
              
              <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden p-3 bg-gradient-to-b from-white/10 to-white/[0.02] border-2 border-[#FF7A00]/50 shadow-[0_20px_50px_rgba(255,122,0,0.3)] transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-500">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#061426] relative">
                  <img
                    src="/serum.jpeg"
                    alt="S4HEL Clinical Skin Serums"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192F] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating 3D Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#091D34]/95 border border-[#FF7A00]/40 backdrop-blur-xl flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-[#FF7A00] uppercase">S4HEL Cosmeceuticals</div>
                      <div className="text-xs font-black text-white">Active Bio-Radiance Formula</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#FF7A00] text-slate-950 font-black text-[9px] uppercase tracking-wider">
                      CLINICAL
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="flex gap-2 pt-4 text-[10px] font-mono">
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                  Dermatologist Approved
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[#FF7A00]">
                  Zero Irritation
                </span>
              </div>
            </div>

            {/* Right Column: Rich Scientific & Formulation Details (NO PRICES) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-[10px] font-mono uppercase tracking-widest">
                <Sparkles size={13} /> S4HEL PHYSICAL BRAND DIVISION
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                S4HEL Luxury Clinical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300">
                  Skin Serums Collection
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Distributed globally from Kalispell, Montana, <strong className="text-white">S4HEL Skin Serums</strong> represent the apex of dermatological science. Each formula utilizes micro-molecular penetration channels to deliver high-potency antioxidants, hyaluronic polymers, and cell-communicating peptides without synthetic fillers or fragrances.
              </p>

              {/* 3 Active Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#07192F] border border-white/10 hover:border-[#FF7A00]/40 transition-all space-y-1">
                  <div className="text-[10px] font-mono text-[#FF7A00] font-bold">20% VITAMIN C + E</div>
                  <div className="text-xs font-bold text-white">Bio-Radiance Glow</div>
                  <div className="text-[10px] text-slate-400">Reverses UV photo-damage</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#07192F] border border-white/10 hover:border-sky-400/40 transition-all space-y-1">
                  <div className="text-[10px] font-mono text-sky-400 font-bold">MULTI-WEIGHT HA 2%</div>
                  <div className="text-xs font-bold text-white">72h Cellular Moisture</div>
                  <div className="text-[10px] text-slate-400">Tri-depth epidermal plump</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#07192F] border border-white/10 hover:border-amber-400/40 transition-all space-y-1">
                  <div className="text-[10px] font-mono text-amber-400 font-bold">RETINOL &amp; PEPTIDES</div>
                  <div className="text-xs font-bold text-white">Night Cell Turnover</div>
                  <div className="text-[10px] text-slate-400">Fibroblast collagen renewal</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/en/serums"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A00]/25 flex items-center gap-2"
                >
                  <span>Explore Full Serum Dossier</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/en/contact"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Wholesale &amp; Private Label Inquiries
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3. PARENT COMPANY & SAFI ECOSYSTEM NEXUS */}
        <section className="border-t border-white/10 pt-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#142A4A]/90 via-[#0E2038]/90 to-[#091D34]/90 border-2 border-amber-400/60 shadow-[0_0_40px_rgba(251,191,36,0.15)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-amber-400/60 p-2.5 shadow-xl shrink-0 flex items-center justify-center">
                <img
                  src="/ecosystem/capital.png"
                  alt="Safi International Capital Ltd Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-[9px] font-mono uppercase tracking-wider font-bold">
                  ★ PARENT COMPANY: SAFI INTERNATIONAL CAPITAL LTD (شرکت مادر)
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Operating Under The Safi Global Ecosystem
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  S4HEL LLC is governed under parent corporation Safi International Capital Ltd, connecting banking (SafiPay), education (Safi Academy), telecommunications (Safi TopUp), software (Safi Pro), AI, and lifestyle applications.
                </p>
              </div>
            </div>

            <Link
              href="/en/about#ecosystem"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-[#FF7A00] text-slate-950 font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Explore Ecosystem &amp; Parent Company</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        {/* 4. 400+ CASHOUT PLATFORMS SPOTLIGHT */}
        <section className="space-y-10 border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
                UNIVERSAL LIQUIDITY NEXUS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Cash Out From 400+ Global Platforms
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Withdraw revenues from Upwork, Amazon, Stripe, PayPal, TikTok Shop, Deel, Steam, and over 400 platforms directly into stablecoins (USDT/USDC) or your local bank in under 15 minutes.
              </p>
            </div>

            <Link
              href="/en/platforms"
              className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] hover:text-white flex items-center gap-1.5 border-b border-[#FF7A00]/40 pb-1"
            >
              View Complete 400+ Directory <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlatforms.map((qp, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#091D34] border border-white/5 hover:border-[#FF7A00]/50 transition-all space-y-4 flex flex-col justify-between group shadow-xl transform hover:-translate-y-1.5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#FF7A00] px-2.5 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 font-bold">
                      {qp.badge}
                    </span>
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Clock size={11} /> {qp.speed}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase group-hover:text-[#FF7A00] transition-colors">
                    {qp.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {qp.desc}
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    <span className="text-[#FF7A00] font-bold">Settlement:</span> {qp.payout}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <Link
                    href="/en/platforms"
                    className="text-xs font-bold text-[#FF7A00] hover:text-white flex items-center gap-1"
                  >
                    Configure Cashout <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IN-FEED SPONSORED PARTNER BREAK (ELEGANT & NON-INTRUSIVE) */}
        <AdSenseInFeed label="Sponsored Partner" />

        {/* 5. EXECUTIVE LEADERSHIP (SAHEL SALEM - SAFI ECOSYSTEM CONTRACTED CEO) */}
        <section className="space-y-10 border-t border-white/10 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
              OFFICIAL EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Founder &amp; Chief Executive Officer
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Operating under official executive contract within the Safi Global Ecosystem.
            </p>
          </div>

          {/* 3D Dossier Card */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#091D34] border-2 border-[#FF7A00]/40 shadow-[0_20px_60px_rgba(255,122,0,0.2)] flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            
            {/* Sahel Photo with 3D Holographic Pedestal */}
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-[#FF7A00] shrink-0 bg-[#07192F] shadow-2xl relative group">
              <img
                src="/sahel.jpeg"
                alt="Sahel Salem"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-center text-[9px] font-mono text-[#FF7A00] font-bold">
                VERIFIED CEO
              </div>
            </div>

            <div className="text-center md:text-left space-y-3.5 flex-grow">
              
              {/* Official Contract Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/40 text-[#FF7A00] text-[10px] font-mono uppercase tracking-wider font-bold">
                <FileCheck2 size={13} /> SAFI ECOSYSTEM EXECUTIVE CONTRACT &bull; CEO
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Sahel Salem{" "}
                <span className="text-xl text-slate-400 font-normal font-sans not-italic">
                  (ساحل سالم)
                </span>
              </h3>

              <div className="text-xs font-bold text-white uppercase tracking-widest text-[#FF7A00]">
                Founder &amp; Chief Executive Officer (CEO) &bull; S4HEL LLC
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 text-justify">
                <strong className="text-white">Sahel Salem</strong> holds the official executive contract within the <strong className="text-[#FF7A00]">Safi Global Ecosystem</strong> as Chief Executive Officer (CEO). He orchestrates cross-border European SEPA/IBAN integrations, direct US banking arrangements (Mercury, Relay), and statutory corporate governance from S4HEL LLC&apos;s headquarters in Kalispell, Montana. Under his leadership, the group operates universal cash-out pipelines across 400+ platforms worldwide and manufactures S4HEL Clinical Skin Serums.
              </p>

              {/* Direct Verification Contacts */}
              <div className="pt-3 text-xs font-mono flex flex-wrap items-center justify-center md:justify-start gap-4 border-t border-white/10">
                <span className="text-[#FF7A00] font-bold">sahel@s4hel.com</span>
                <span className="text-slate-500">•</span>
                <a href="https://wa.me/93700582033" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors">
                  WhatsApp: +93 70 058 2033
                </a>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">+1 406 316 0317</span>
              </div>
            </div>

          </div>
        </section>

        {/* 6. MONTANA HEADQUARTERS STATUTORY LOCATION */}
        <section className="border-t border-white/10 pt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#091D34] border border-white/10 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
                  HEADQUARTERS STATUTORY LOCATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  1001 S Main St Ste 500, Kalispell, Montana
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Montana provides zero state general sales tax, supreme statutory privacy, and an unassailable commercial reputation. S4HEL LLC maintains an active physical and registered agent nexus in Kalispell, guaranteeing prompt document scanning, FinCEN BOI filing, and Tier-1 bank verification.
                </p>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right space-y-3">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#FF7A00]/25"
                >
                  <MapPin size={14} /> Contact Montana Office
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}