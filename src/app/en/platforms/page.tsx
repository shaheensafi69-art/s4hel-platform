"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import AdSenseInFeed from "@/components/AdSenseInFeed";
import {
  Banknote,
  Search,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Briefcase,
  ShoppingBag,
  CreditCard,
  Video,
  Layers,
  Globe,
  Camera,
  Code,
  GraduationCap,
  Home,
  Music,
  Share2,
  Coins,
  Cpu,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function S4HEL_PlatformsDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All 400+ Platforms", icon: <Globe size={13} /> },
    { id: "freelance", label: "Freelancing & Talent (45+)", icon: <Briefcase size={13} /> },
    { id: "ecommerce", label: "E-Commerce Marketplaces (60+)", icon: <ShoppingBag size={13} /> },
    { id: "payments", label: "Payment Gateways (30+)", icon: <CreditCard size={13} /> },
    { id: "payroll", label: "Global Payroll & Contractors (25+)", icon: <Briefcase size={13} /> },
    { id: "creators", label: "Creators & Streaming (40+)", icon: <Video size={13} /> },
    { id: "stock", label: "Stock Media & Assets (35+)", icon: <Camera size={13} /> },
    { id: "software", label: "App Stores & Software (30+)", icon: <Code size={13} /> },
    { id: "education", label: "Courses & Tutoring (30+)", icon: <GraduationCap size={13} /> },
    { id: "hospitality", label: "Hospitality & Rentals (20+)", icon: <Home size={13} /> },
    { id: "music", label: "Music & Audio Royalties (25+)", icon: <Music size={13} /> },
    { id: "affiliate", label: "Affiliate & CPA Networks (35+)", icon: <Share2 size={13} /> },
    { id: "crypto", label: "Crypto & Web3 Liquidity (40+)", icon: <Coins size={13} /> },
    { id: "microtasks", label: "Testing & Micro-tasks (25+)", icon: <Cpu size={13} /> },
  ];

  const allPlatforms = [
    // Freelance & Remote
    { name: "Upwork Global Inc.", cat: "freelance", speed: "< 15 Mins", method: "USDT / Wire", highlight: "Agency & Freelancer Direct Withdrawal" },
    { name: "Fiverr International", cat: "freelance", speed: "Instant Sweep", method: "USDT / Local Bank", highlight: "Revenue Card & Direct Deposit" },
    { name: "Toptal Elite Network", cat: "freelance", speed: "Same-Day", method: "USD ACH / Wire", highlight: "High-Ticket Tech & Design Payouts" },
    { name: "Freelancer.com", cat: "freelance", speed: "Daily", method: "SEPA / USDT", highlight: "Direct Express Withdrawal" },
    { name: "PeoplePerHour UK", cat: "freelance", speed: "24 Hours", method: "GBP / EUR / USDT", highlight: "UK Escrow Clearing" },
    { name: "Guru.com", cat: "freelance", speed: "Instant", method: "USD ACH", highlight: "Zero-Hold SafePay Sweep" },
    { name: "Contra Independent", cat: "freelance", speed: "Same-Day", method: "Stripe Treasury / USDT", highlight: "Commission-Free Clearing" },
    { name: "Workana Latin America", cat: "freelance", speed: "Daily", method: "USD / USDT", highlight: "Cross-Border LatAm Settlement" },
    { name: "Malt Europe", cat: "freelance", speed: "Same-Day", method: "EUR SEPA Instant", highlight: "European Freelance Nexus" },
    { name: "Twine Creative", cat: "freelance", speed: "24 Hours", method: "USD / GBP", highlight: "Audio & VFX Direct Clearance" },

    // E-Commerce & Retail
    { name: "Amazon Seller Central US", cat: "ecommerce", speed: "Bi-Weekly/Daily", method: "USD ACH / USDT", highlight: "Zero Surcharge US Routing Number" },
    { name: "Amazon Seller Central Europe", cat: "ecommerce", speed: "Bi-Weekly", method: "EUR SEPA", highlight: "VAT Compliant Dedicated IBAN" },
    { name: "Amazon Seller Central Japan", cat: "ecommerce", speed: "Bi-Weekly", method: "JPY / USD", highlight: "Direct JPY Multi-Currency Clearing" },
    { name: "TikTok Shop US", cat: "ecommerce", speed: "Daily Sweep", method: "USD / USDT", highlight: "Montana LLC Merchant & Creator Nexus" },
    { name: "TikTok Shop UK", cat: "ecommerce", speed: "Daily", method: "GBP Faster Payments", highlight: "Turnkey UK LTD Account Backing" },
    { name: "Shopify Payments", cat: "ecommerce", speed: "Daily Payout", method: "USD / EUR / USDT", highlight: "0% Rolling Reserves Routing" },
    { name: "eBay Managed Payments", cat: "ecommerce", speed: "Same-Day", method: "ACH Direct", highlight: "Eliminates Account Geo-Blocks" },
    { name: "Etsy Global Marketplace", cat: "ecommerce", speed: "Daily", method: "USD / EUR", highlight: "Direct Deposit to S4HEL US Entity" },
    { name: "Walmart Marketplace US", cat: "ecommerce", speed: "Weekly", method: "USD ACH", highlight: "Enterprise US Corporate Gateway" },
    { name: "Shopee Southeast Asia", cat: "ecommerce", speed: "Weekly", method: "USD / USDT", highlight: "Cross-Border Seller Clearing" },
    { name: "Lazada Group", cat: "ecommerce", speed: "Weekly", method: "USD / USDT", highlight: "Alibaba Cross-Border Settlement" },
    { name: "Mercado Libre", cat: "ecommerce", speed: "Daily", method: "USD / Local", highlight: "Latin American Merchant Sweep" },
    { name: "Allegro Poland", cat: "ecommerce", speed: "2-3 Days", method: "PLN / EUR", highlight: "Eastern European Commerce Nexus" },
    { name: "Poshmark & Mercari", cat: "ecommerce", speed: "Instant", method: "Direct ACH", highlight: "US Reseller Direct Cashout" },

    // Payment Gateways & Merchant Processors
    { name: "Stripe & Stripe Treasury", cat: "payments", speed: "Instant / 24h", method: "Multi-Currency", highlight: "High-Limit Accounts, 0% Rolling Holds" },
    { name: "PayPal Business US", cat: "payments", speed: "Instant Sweep", method: "Instant Cashout", highlight: "21 & 180-Day Limitation Unfreezing" },
    { name: "Square Merchant", cat: "payments", speed: "Next Business Day", method: "USD ACH", highlight: "Point-of-Sale & Online Invoicing" },
    { name: "2Checkout (Verifone)", cat: "payments", speed: "Weekly", method: "USD / EUR / USDT", highlight: "Global Merchant Tax Clearing" },
    { name: "Authorize.Net", cat: "payments", speed: "Daily", method: "USD Direct Deposit", highlight: "Traditional High-Volume Merchant" },
    { name: "Wise Business Multi-Currency", cat: "payments", speed: "Instant", method: "SWIFT / SEPA", highlight: "Dedicated Account & Routing Numbers" },
    { name: "Payoneer Enterprise", cat: "payments", speed: "Instant", method: "Local Bank / USDT", highlight: "Marketplace Receiving Accounts" },
    { name: "Skrill & Neteller Commercial", cat: "payments", speed: "Same-Day", method: "EUR / USD / USDT", highlight: "Digital Wallet Fast Clearing" },
    { name: "Revolut Business", cat: "payments", speed: "Instant", method: "SEPA Instant", highlight: "Multi-Currency Corporate Banking" },
    { name: "WorldFirst Foreign Exchange", cat: "payments", speed: "Same-Day", method: "USD / CNH / EUR", highlight: "Import / Export Sourcing Settlement" },

    // Global Payroll & Contractors
    { name: "Deel Global Payroll", cat: "payroll", speed: "< 15 Mins", method: "ACH / USDT", highlight: "Contractor Invoice Instant Cashout" },
    { name: "Remote.com", cat: "payroll", speed: "Same-Day", method: "Direct Deposit", highlight: "Zero Intermediary Deductions" },
    { name: "OysterHR", cat: "payroll", speed: "24 Hours", method: "USD / EUR", highlight: "Global Employment Salary Clearing" },
    { name: "Rippling International", cat: "payroll", speed: "Same-Day", method: "USD ACH", highlight: "Direct Corporate Benefit & Pay Sweep" },
    { name: "Papaya Global", cat: "payroll", speed: "Same-Day", method: "Multi-Currency", highlight: "Enterprise Cross-Border Salaries" },
    { name: "Multiplier Technologies", cat: "payroll", speed: "Instant", method: "USD / USDT", highlight: "Asia-Pacific Contractor Settlement" },

    // Creator Economy & Streaming
    { name: "YouTube Partner Program", cat: "creators", speed: "Monthly Direct", method: "USD ACH", highlight: "Google AdSense US ACH Clearing" },
    { name: "Twitch Creator Payouts", cat: "creators", speed: "Net-15", method: "USD ACH / Wire", highlight: "Sub & Bit Revenue Direct Settlement" },
    { name: "Kick Streaming", cat: "creators", speed: "Instant / Daily", method: "USDT / USD", highlight: "95/5 Creator Split Immediate Cashout" },
    { name: "TikTok Creator Rewards", cat: "creators", speed: "Monthly", method: "USD / USDT", highlight: "US & European Fund Withdrawal" },
    { name: "Meta / Facebook & Instagram", cat: "creators", speed: "Monthly", method: "ACH Direct", highlight: "Reels & Performance Bonus Cashout" },
    { name: "Patreon Creator Platform", cat: "creators", speed: "Instant Sweep", method: "Stripe / PayPal", highlight: "Membership Monthly Revenue" },
    { name: "Substack Newsletter Payouts", cat: "creators", speed: "Rolling Daily", method: "Stripe Treasury", highlight: "Paid Subscriber Direct Deposits" },
    { name: "OnlyFans & Fansly Creators", cat: "creators", speed: "Daily", method: "Direct Bank / USDT", highlight: "Confidential High-Volume Clearance" },
    { name: "Rumble Video Monetization", cat: "creators", speed: "Monthly", method: "USD Direct", highlight: "Alternative Video Ad Revenue" },

    // Stock Media & Creative Assets
    { name: "Adobe Stock Contributor", cat: "stock", speed: "Instant", method: "PayPal / Payoneer", highlight: "Direct Royalties Conversion" },
    { name: "Shutterstock", cat: "stock", speed: "Monthly", method: "ACH / USDT", highlight: "Stock Footage & Image Cashout" },
    { name: "Getty Images & iStock", cat: "stock", speed: "Monthly", method: "USD Wire", highlight: "Editorial & Commercial Licensing" },
    { name: "Freepik Contributor", cat: "stock", speed: "Monthly", method: "EUR / USD", highlight: "Vector & Graphic Asset Clearing" },
    { name: "Envato Elements & ThemeForest", cat: "stock", speed: "Monthly", method: "USD Direct", highlight: "Web Templates & Code Royalties" },
    { name: "Pond5 Media", cat: "stock", speed: "Monthly", method: "USD / USDT", highlight: "High-Resolution Video Royalties" },

    // App Stores, Software & Coding
    { name: "Apple App Store Connect", cat: "software", speed: "Monthly", method: "USD Wire / ACH", highlight: "iOS App In-App Purchase Clearance" },
    { name: "Google Play Developer Console", cat: "software", speed: "Monthly", method: "USD Direct Deposit", highlight: "Android App Revenue Settlement" },
    { name: "Steam (Valve Corporation)", cat: "software", speed: "Monthly", method: "USD Wire", highlight: "Indie Game Sales & DLC Clearing" },
    { name: "Epic Games Store", cat: "software", speed: "Monthly", method: "USD Wire", highlight: "Unreal Engine & Game Royalties" },
    { name: "GitHub Sponsors", cat: "software", speed: "Monthly", method: "Stripe Connect", highlight: "Open Source Developer Sponsorships" },
    { name: "HackerOne Bug Bounty", cat: "software", speed: "Instant", method: "USD / USDT", highlight: "White-Hat Cybersecurity Bounties" },
    { name: "Bugcrowd Vulnerability Payouts", cat: "software", speed: "Immediate", method: "ACH / Wire", highlight: "Security Audit Reward Clearing" },

    // Courses & Education
    { name: "Udemy Instructor Payouts", cat: "education", speed: "Monthly", method: "Payoneer / PayPal", highlight: "Global Course Sales Sweep" },
    { name: "Teachable & Thinkific", cat: "education", speed: "Instant / Daily", method: "Stripe Backed", highlight: "Academy Student Tuition Revenue" },
    { name: "Skillshare Teacher", cat: "education", speed: "Monthly", method: "Direct ACH", highlight: "Watch-Time Royalty Clearance" },
    { name: "Preply & Cambly Tutors", cat: "education", speed: "Weekly", method: "Wise / USDT", highlight: "Online Language Tutoring Cashout" },
    { name: "Coursera Partner Consortium", cat: "education", speed: "Quarterly", method: "Corporate Wire", highlight: "Institutional Course Revenue" },

    // Hospitality & Mobility
    { name: "Airbnb Host Disbursements", cat: "hospitality", speed: "Same-Day", method: "USD / EUR ACH", highlight: "Vacation Rental Revenue Sweeps" },
    { name: "Booking.com Partner Network", cat: "hospitality", speed: "Bi-Weekly", method: "Dedicated IBAN", highlight: "Hotel & Apartment Payouts" },
    { name: "VRBO & Expedia Partner", cat: "hospitality", speed: "Weekly", method: "USD Direct", highlight: "Short-Term Rental Clearance" },
    { name: "Turo & Getaround Carshare", cat: "hospitality", speed: "Weekly", method: "Direct ACH", highlight: "Fleet Rental Commercial Revenue" },

    // Music & Audio
    { name: "DistroKid Royalties", cat: "music", speed: "Instant", method: "PayPal / ACH", highlight: "Streaming Royalties Direct Sweep" },
    { name: "TuneCore & CD Baby", cat: "music", speed: "Monthly", method: "USD / USDT", highlight: "Music Publishing Rights Revenue" },
    { name: "Spotify for Artists", cat: "music", speed: "Monthly", method: "Corporate ACH", highlight: "Direct Label & Artist Royalty" },
    { name: "Bandcamp Direct Fan Revenue", cat: "music", speed: "24-48 Hours", method: "PayPal / Stripe", highlight: "Merchandise & Music Album Sales" },

    // Affiliate & CPA Networks
    { name: "Amazon Associates Program", cat: "affiliate", speed: "Net-60", method: "Direct Deposit", highlight: "Global Affiliate Commission Sweep" },
    { name: "ClickBank Marketplace", cat: "affiliate", speed: "Weekly / Bi-Weekly", method: "ACH / Wire", highlight: "Digital Product Affiliate Clearance" },
    { name: "CJ Affiliate (Commission Junction)", cat: "affiliate", speed: "Monthly", method: "USD Wire", highlight: "Enterprise Brand Affiliate Payouts" },
    { name: "ShareASale & Awin Group", cat: "affiliate", speed: "Monthly", method: "Direct ACH", highlight: "Retail Publisher Revenue Sweep" },
    { name: "Impact.com Partnership Cloud", cat: "affiliate", speed: "Monthly", method: "USD / EUR", highlight: "SaaS & Influencer Partnership Pay" },
    { name: "Digistore24 International", cat: "affiliate", speed: "Weekly", method: "SEPA / ACH", highlight: "Automated Software Affiliate Cashout" },

    // Crypto Exchanges & Web3
    { name: "Binance Institutional OTC", cat: "crypto", speed: "< 10 Mins", method: "USDT / SEPA", highlight: "High-Volume Fiat-to-Crypto Clearing" },
    { name: "Coinbase Prime & Retail", cat: "crypto", speed: "Instant", method: "Fedwire / ACH", highlight: "US Regulated Crypto Liquidity" },
    { name: "Kraken Exchange", cat: "crypto", speed: "Same-Day", method: "EUR SEPA / USD", highlight: "Tier-1 Fiat Off-Ramp" },
    { name: "OKX & Bybit Liquidity", cat: "crypto", speed: "Instant", method: "USDT / Local Wire", highlight: "P2P & OTC Institutional Settlement" },
    { name: "OpenSea & Magic Eden NFT", cat: "crypto", speed: "Instant", method: "ETH / SOL / USDC", highlight: "Digital Collectibles Cashout" },

    // Microtasks & User Testing
    { name: "UserTesting.com Platform", cat: "microtasks", speed: "7 Days", method: "PayPal / USDT", highlight: "UX Audit Reward Cashout" },
    { name: "Appen & Remotasks AI Data", cat: "microtasks", speed: "Weekly", method: "USD / Local Bank", highlight: "AI Model Annotation Earnings" },
    { name: "Amazon Mechanical Turk (MTurk)", cat: "microtasks", speed: "Daily", method: "US Bank ACH", highlight: "Micro-task USD Direct Deposit" },
    { name: "Prolific Academic Studies", cat: "microtasks", speed: "Instant", method: "GBP / USD", highlight: "Behavioral Research Study Payments" },
  ];

  const filtered = useMemo(() => {
    return allPlatforms.filter((p) => {
      const matchCat = selectedCategory === "all" || p.cat === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.highlight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.method.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [allPlatforms, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Background Architectural Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 right-1/4 w-[750px] h-[750px] bg-[#FF7A00]/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-[650px] h-[650px] bg-[#0A2540]/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-20">

        {/* 1. HERO */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]">
            <Banknote size={13} className="animate-pulse" /> UNIVERSAL CASHOUT MATRIX • 400+ PLATFORMS
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            GLOBAL PLATFORM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              CASHOUT DIRECTORY
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
            From Upwork and Amazon to TikTok Shop, Stripe, Deel, and Steam — S4HEL LLC provides non-resident founders with compliant US and European corporate bank accounts (including our partner banking rails at <a href="https://safipay.net/" target="_blank" rel="noopener noreferrer" className="text-[#FF7A00] underline font-bold">SafiPay</a>) to withdraw revenues from over 400 worldwide platforms into stablecoins (USDT/USDC) or local fiat in under 15 minutes.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto relative pt-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search any platform (e.g. Upwork, Amazon, TikTok, Stripe, Deel, Steam, Binance)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#091D34] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF7A00] shadow-2xl transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
            <div className="text-left pt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Showing {filtered.length} matching platforms</span>
              <span className="text-[#FF7A00] font-mono">100% Guaranteed Anti-Freeze Protection</span>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY SELECTOR PILLS */}
        <section className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-300 text-center">
            Select Platform Category:
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  selectedCategory === c.id
                    ? "bg-[#FF7A00] text-slate-950 shadow-[0_0_15px_rgba(255,122,0,0.35)]"
                    : "bg-[#091D34] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF7A00]/40"
                }`}
              >
                {c.icon}
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 3. PLATFORMS MATRIX GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#091D34] border border-white/5 hover:border-[#FF7A00]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#FF7A00] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20">
                    {item.speed}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {item.highlight}
                </p>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-1 border-t border-white/5">
                  <span className="text-[#FF7A00] font-bold">Settlement:</span>
                  <span className="text-slate-200">{item.method}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <Link
                  href="/en/contact"
                  className="text-xs font-bold text-[#FF7A00] hover:text-white flex items-center gap-1 transition-colors"
                >
                  Setup Cashout Pipeline <ArrowUpRight size={13} />
                </Link>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle size={10} /> Active
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* IN-FEED SPONSORED PARTNER BREAK (ELEGANT & NON-INTRUSIVE) */}
        <AdSenseInFeed label="Global Liquidity Sponsor" />

        {/* 4. TURNKEY VERIFIED PLATFORM ACCOUNTS */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#091D34] via-[#0A2540] to-[#07192F] border border-[#FF7A00]/30 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase">
                INSTANT TURNKEY ACCOUNTS &amp; BANKING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Pre-Verified Platform &amp; Merchant Accounts
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Don&apos;t want to wait weeks for identity vetting and corporate utility bills? S4HEL LLC provides turnkey, fully approved accounts backed by Montana LLC entities and our partner banking gateway at SafiPay:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00]" />
                  <span>Amazon US/UK Fully Approved Seller Accounts</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00]" />
                  <span>Upwork High-Reputation Agency Profiles</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00]" />
                  <span>Stripe Merchant Accounts with 0% Rolling Reserves</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#FF7A00]" />
                  <span>TikTok Shop US Verified Merchant Nexus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#07192F] border border-white/10 space-y-4 text-center shadow-xl">
              <div className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider">
                MONTANA DESK CLEARING
              </div>
              <h4 className="text-white font-bold text-sm uppercase">
                Speak With Sahel Salem (CEO)
              </h4>
              <p className="text-xs text-slate-400">
                Direct consultation for institutional cash-out pipelines and verified platform accounts.
              </p>
              <Link
                href="/en/contact"
                className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#FF7A00]/25"
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
