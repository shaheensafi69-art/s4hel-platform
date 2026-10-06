"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  Banknote,
  ArrowRight,
  Landmark,
  Scale,
  GraduationCap,
  CreditCard,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#050E1A] border-t border-white/10 pt-20 pb-12 relative overflow-hidden font-sans selection:bg-[#FF7A00] selection:text-white">
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#FF7A00 1px, transparent 1px)', backgroundSize: '36px 36px' }} 
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* TOP ROW: BRAND & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/en" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-[#FF7A00]/40 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/logo.png"
                  alt="S4HEL LLC Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic tracking-tighter text-white group-hover:text-[#FF7A00] transition-colors leading-none">
                  S4<span className="text-[#FF7A00]">HEL</span>
                  <span className="text-xs ml-1.5 not-italic font-bold tracking-widest text-slate-400">LLC</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#FF7A00] uppercase mt-0.5">
                  S4HEL COMPANY • KALISPELL, MONTANA
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              S4HEL LLC is a multi-division international corporate enterprise headquartered in Kalispell, Montana. We engineer cross-border US &amp; UK corporate entities, universal cash-out gateways across 400+ platforms worldwide, and clinical-grade S4HEL Skin Serums distributed globally.
            </p>

            {/* Official Montana Address Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 max-w-md">
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <MapPin size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Registered Corporate Headquarters:</div>
                  <div className="text-slate-300 font-mono text-[11px]">1001 S Main St Ste 500, Kalispell, MT 59901, Montana, USA</div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Phone size={12} className="text-[#FF7A00]" />
                  <a href="tel:+14063160317" className="hover:text-white transition-colors">+1 406 316 0317</a>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail size={12} className="text-[#FF7A00]" />
                  <a href="mailto:contact@s4hel.com" className="hover:text-white transition-colors">contact@s4hel.com</a>
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <Globe size={14} className="text-[#FF7A00]" />
              Official Corporate Dispatch &amp; Bulletin
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              Subscribe for Montana corporate alerts, 400+ platform cash-out rate updates, Safi Academy courses, and S4HEL Skin Serums wholesale release schedules.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="executive@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF7A00] flex-grow transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FF7A00] to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-white transition-colors"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <p className="text-[#FF7A00] text-[11px] font-mono">
                  ✓ Confirmed. You are subscribed to S4HEL official briefings.
                </p>
              )}
            </form>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-[#FF7A00]" />
                FinCEN BOI Compliant
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Landmark size={12} className="text-[#FF7A00]" />
                Montana 0% Sales Tax Nexus
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles size={12} className="text-[#FF7A00]" />
                Clinical Skin Serums
              </span>
            </div>
          </div>

        </div>

        {/* MIDDLE ROW: CATEGORIZED DIRECTORY WITH ECOSYSTEM INCLUDED */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 border-b border-white/10">
          
          {/* 1. Corporate Formations */}
          <div className="space-y-3">
            <h5 className="text-white font-black text-xs uppercase tracking-wider">
              Corporate Formations
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">Montana LLC (Headquarters)</Link></li>
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">Wyoming Privacy LLC</Link></li>
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">Delaware LLC &amp; C-Corp</Link></li>
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">UK Private Limited (LTD)</Link></li>
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">Federal EIN &amp; ITIN Processing</Link></li>
              <li><Link href="/en/services" className="hover:text-[#FF7A00] transition-colors">US Registered Agent Services</Link></li>
            </ul>
          </div>

          {/* 2. 400+ Cashout Platforms */}
          <div className="space-y-3">
            <h5 className="text-white font-black text-xs uppercase tracking-wider">
              400+ Cash-Out Hub
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">Upwork &amp; Freelance Hubs</Link></li>
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">Amazon Seller Central Clearing</Link></li>
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">Stripe &amp; PayPal Anti-Freeze</Link></li>
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">TikTok Shop US/UK Payouts</Link></li>
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">Deel &amp; Remote Global Payroll</Link></li>
              <li><Link href="/en/platforms" className="hover:text-[#FF7A00] transition-colors">All 400+ Categories Directory</Link></li>
            </ul>
          </div>

          {/* 3. S4HEL Skin Serums */}
          <div className="space-y-3">
            <h5 className="text-white font-black text-xs uppercase tracking-wider text-[#FF7A00]">
              S4HEL Skin Serums
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Bio-Radiance Vitamin C 20%</Link></li>
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Multi-Molecular Hyaluronic Acid</Link></li>
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Cellular Renewal Retinol 2.5%</Link></li>
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Clarifying Niacinamide 10%</Link></li>
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Multi-Peptide Matrixyl 3000</Link></li>
              <li><Link href="/en/serums" className="hover:text-[#FF7A00] transition-colors font-medium">Cica Barrier Recovery Serum</Link></li>
            </ul>
          </div>

          {/* 4. Official Safi Ecosystem (7 Platforms) */}
          <div className="space-y-3">
            <h5 className="text-white font-black text-xs uppercase tracking-wider text-[#FF7A00]">
              Safi Global Ecosystem
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://safiinternationalcapitalltd.site/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors flex items-center gap-1 font-bold text-amber-400">
                  <span>Safi International Capital Ltd (Parent Holding)</span>
                  <ExternalLink size={10} className="text-amber-500" />
                </a>
              </li>
              <li>
                <a href="https://safipay.net/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-1 font-semibold text-slate-200">
                  <span>SafiPay (Digital Bank)</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://safiacademy.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1 font-semibold text-slate-200">
                  <span>Safi Academy</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://safitopup.site/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Safi TopUp</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://safipro.site/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>Safi Pro</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.safiai.site/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Safi AI</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.zevapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <span>Zev App</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.zevapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <span>Zev App</span>
                  <ExternalLink size={10} className="text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Company & Legal */}
          <div className="space-y-3">
            <h5 className="text-white font-black text-xs uppercase tracking-wider">
              Company &amp; Legal
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/en/about" className="hover:text-[#FF7A00] transition-colors">About S4HEL LLC</Link></li>
              <li><Link href="/en/about#founder" className="hover:text-[#FF7A00] transition-colors">Sahel Salem (CEO)</Link></li>
              <li><Link href="/en/articles" className="hover:text-[#FF7A00] transition-colors">Articles &amp; 50-State Guides</Link></li>
              <li><Link href="/en/contact" className="hover:text-[#FF7A00] transition-colors">Contact Montana Desk</Link></li>
              <li><Link href="/en/privacy" className="hover:text-[#FF7A00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/en/terms" className="hover:text-[#FF7A00] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-mono">
          <div>
            © {currentYear} S4HEL LLC (S4hel Company). Registered in Montana, USA. 1001 S Main St Ste 500, Kalispell, MT 59901.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/en/privacy" className="hover:text-[#FF7A00] transition-colors">Privacy Policy</Link>
            <Link href="/en/terms" className="hover:text-[#FF7A00] transition-colors">Terms of Service</Link>
            <Link href="/en/disclaimer" className="hover:text-[#FF7A00] transition-colors">Compliance Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}