"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Sparkles,
  Award,
  GraduationCap,
  ExternalLink
} from "lucide-react";

export default function S4HEL_ServicesPage() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<"montana" | "wyoming" | "delaware" | "uk">("montana");

  const jurisdictions = {
    montana: {
      name: "Montana LLC",
      tagline: "Corporate Headquarters • 0% State Sales Tax • Supreme Asset Privacy",
      fee: "From $299",
      speed: "2-3 Business Days",
      tax: "0% State Sales Tax • 0% Out-of-State Income Tax",
      highlights: [
        "Headquarters Nexus: 1001 S Main St Ste 500, Kalispell, MT",
        "Zero state-level general sales tax on goods or services",
        "Member privacy protected from public Secretary of State search",
        "Ideal for E-Commerce (Amazon/Shopify), high-value asset holdings & SaaS",
        "No mandatory franchise tax for out-of-state trade",
      ],
      includes: [
        "Articles of Organization officially filed with Montana Secretary of State",
        "1 Year Registered Agent service at Kalispell corporate office",
        "Federal Employer Identification Number (EIN) from IRS without SSN",
        "Custom Operating Agreement & Corporate Banking Resolution",
        "FinCEN Beneficial Ownership Information (BOI) compliance filing",
        "Complimentary S4HEL Encrypted Document Vault Access",
      ],
    },
    wyoming: {
      name: "Wyoming LLC",
      tagline: "The Gold Standard for Non-Resident Privacy & Charging Order Protection",
      fee: "From $279",
      speed: "1-2 Business Days",
      tax: "0% Personal & Corporate State Income Tax",
      highlights: [
        "Pioneer of statutory charging order protection for single-member LLCs",
        "Complete anonymity — member names not listed in state public records",
        "Lowest annual report filing fees ($62 state minimum)",
        "Zero state capital gains tax",
        "Ideal for digital freelancers, crypto holding, and international consultants",
      ],
      includes: [
        "Wyoming Articles of Organization filing",
        "1 Year Statutory Registered Agent representation",
        "Official IRS EIN Tax ID for Stripe and Mercury Bank",
        "Customized LLC Operating Agreement",
        "Initial BOI report to federal FinCEN",
        "Full S4HEL Client Vault integration",
      ],
    },
    delaware: {
      name: "Delaware LLC / C-Corp",
      tagline: "Venture Capital Standard • Prestigious Court of Chancery",
      fee: "From $349",
      speed: "3-5 Business Days",
      tax: "0% State Corporate Tax on Out-of-State Revenue",
      highlights: [
        "The world's most respected business law jurisdiction (Court of Chancery)",
        "Mandatory requirement for Y-Combinator, venture capital, and US accelerators",
        "Flexible corporate governance statutes",
        "Recognized by all Tier-1 global institutional investors",
      ],
      includes: [
        "Certificate of Formation / Incorporation",
        "1 Year Delaware Registered Agent service",
        "IRS Federal EIN assignment",
        "Corporate Bylaws or Operating Agreement",
        "FinCEN BOI submission",
        "S4HEL digital document vault access",
      ],
    },
    uk: {
      name: "UK Private Limited (LTD)",
      tagline: "European Commerce Gateway • Companies House Registration",
      fee: "From £199",
      speed: "24 Hours (Instant)",
      tax: "19% - 25% Corporation Tax (UK profits only)",
      highlights: [
        "Direct incorporation with UK Companies House within 24 hours",
        "Gateway to European single-market trade and dedicated SEPA IBANs",
        "Prestigious London or Manchester registered office address",
        "Seamless integration with Stripe UK and Wise Business Europe",
      ],
      includes: [
        "Certificate of Incorporation from Companies House",
        "Memorandum and Articles of Association",
        "1 Year Prestigious UK Registered Office Address",
        "UK Corporate Bank Account Setup Assistance (Wise / Revolut)",
        "HMRC Corporation Tax registration",
        "S4HEL European entity management vault",
      ],
    },
  };

  const coreServices = [
    {
      title: "US LLC Formations (Montana & 50 States)",
      desc: "Full legal entity registration, certified Articles of Organization, Montana/Wyoming statutory registered agent, and custom Operating Agreements.",
      icon: <Building2 className="text-[#FF7A00]" size={24} />,
      link: "#jurisdictions",
    },
    {
      title: "Federal EIN & ITIN Procurement",
      desc: "Direct federal Tax ID procurement from the IRS without requiring a US Social Security Number (SSN). Essential for Stripe, PayPal, and US bank accounts.",
      icon: <ShieldCheck className="text-[#FF7A00]" size={24} />,
      link: "#jurisdictions",
    },
    {
      title: "Remote US & EU Business Bank Accounts (SafiPay)",
      desc: "Remote corporate setup with Mercury Bank, Relay Financial, Wise Business, and our digital banking partner SafiPay (safipay.net) for European SEPA IBANs.",
      icon: <Landmark className="text-[#FF7A00]" size={24} />,
      link: "/en/platforms",
    },
    {
      title: "Universal 400+ Platform Cashout & Escrow",
      desc: "Instant automated revenue withdrawal pipelines from Upwork, Amazon Seller Central, Stripe, PayPal, and TikTok Shop into stablecoins or local wire.",
      icon: <Zap className="text-[#FF7A00]" size={24} />,
      link: "/en/platforms",
    },
    {
      title: "FinCEN BOI & Federal Corporate Compliance",
      desc: "Mandatory Corporate Transparency Act (CTA) reporting, Beneficial Ownership Information filing, FinCEN ID management, and statutory shields.",
      icon: <ShieldCheck className="text-[#FF7A00]" size={24} />,
      link: "/en/services",
    },
    {
      title: "Business Education & Training (Safi Academy)",
      desc: "Access premier e-commerce, international business, and digital skills courses through our official group partner Safi Academy (safiacademy.org).",
      icon: <GraduationCap className="text-[#FF7A00]" size={24} />,
      link: "https://safiacademy.org/",
    },
  ];

  const currentJur = jurisdictions[selectedJurisdiction];

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Background Architectural Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 right-1/4 w-[750px] h-[750px] bg-[#FF7A00]/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-[650px] h-[650px] bg-[#0A2540]/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-24">

        {/* 1. HERO */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]">
            <Building2 size={13} className="animate-pulse" /> S4HEL LLC • FULL CORPORATE SUITE
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            GLOBAL CORPORATE &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              FINANCIAL SERVICES
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
            From our corporate headquarters in Kalispell, Montana, S4HEL LLC engineers end-to-end corporate infrastructures for founders worldwide. Register entities, open bank accounts via SafiPay, cash out 400+ platform revenues, enroll in Safi Academy, and scale institutional financial capabilities.
          </p>
        </section>

        {/* 2. CORE SERVICES CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((svc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#091D34] border border-white/10 hover:border-[#FF7A00]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#FF7A00] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                {svc.link.startsWith("http") ? (
                  <a
                    href={svc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    Visit Partner Website <ExternalLink size={13} />
                  </a>
                ) : (
                  <Link
                    href={svc.link}
                    className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    View Solution <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* 3. JURISDICTIONS COMPARISON MATRIX */}
        <section id="jurisdictions" className="p-8 sm:p-12 rounded-3xl bg-[#091D34] border border-white/10 space-y-8 scroll-mt-28 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
                COMPREHENSIVE JURISDICTION SELECTOR
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">
                Choose Your Corporate Nexus
              </h2>
            </div>

            {/* JURISDICTION TABS */}
            <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              {[
                { id: "montana", label: "Montana LLC (HQ)" },
                { id: "wyoming", label: "Wyoming LLC" },
                { id: "delaware", label: "Delaware LLC" },
                { id: "uk", label: "UK LTD" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedJurisdiction(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                    selectedJurisdiction === tab.id
                      ? "bg-[#FF7A00] text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE JURISDICTION DISPLAY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider">
                  {currentJur.tagline}
                </span>
                <h3 className="text-3xl font-black text-white uppercase mt-1">
                  {currentJur.name} Formation Package
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-slate-400 uppercase text-[10px]">Processing Speed</div>
                  <div className="text-white font-bold text-sm">{currentJur.speed}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-slate-400 uppercase text-[10px]">Tax Profile</div>
                  <div className="text-[#FF7A00] font-bold text-xs">{currentJur.tax}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                  Strategic Advantages:
                </h4>
                <div className="space-y-2">
                  {currentJur.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07192F] border border-[#FF7A00]/40 space-y-6 shadow-xl">
              <div className="flex justify-between items-baseline pb-4 border-b border-white/10">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Full Turnkey Formation</div>
                  <div className="text-2xl font-black text-white">{currentJur.name}</div>
                </div>
                <div className="text-xl font-black text-[#FF7A00] font-mono">
                  {currentJur.fee}
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Included in Formation:
                </div>
                {currentJur.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle size={12} className="text-[#FF7A00] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/en/contact"
                className="block text-center w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:from-white hover:to-white transition-all shadow-lg shadow-[#FF7A00]/25"
              >
                Incorporate {currentJur.name} Now
              </Link>
            </div>

          </div>
        </section>

        {/* 4. MONTANA HEADQUARTERS ADDRESS */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#091D34] border border-white/10 space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase">
                MONTANA PHYSICAL ADDRESS &amp; MAIL SCANNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Prestigious US Commercial Address Included
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every entity formed with S4HEL LLC receives our prestigious physical commercial address: <strong className="text-white">1001 S Main St Ste 500, Kalispell, MT 59901</strong>. We scan and digitize all official IRS and state correspondence directly to your encrypted S4HEL client portal.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07192F] border border-white/10 hover:border-[#FF7A00] text-white hover:text-[#FF7A00] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MapPin size={14} className="text-[#FF7A00]" /> Contact Montana Office
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
