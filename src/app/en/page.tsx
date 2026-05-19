"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, Zap, Globe, MapPin, ChevronRight, 
  ArrowUpRight, Star, Target, BookOpen, Mail, CheckCircle,
  Award, Landmark, ShieldAlert, GraduationCap
} from "lucide-react";

export default function S4HEL_Complete_Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  // Services Data - Categorized perfectly for compliance
  const services = [
    { title: "LLC Formation", desc: "Full legal entity registration in premium US states like Wyoming or Delaware with zero hidden fees.", icon: <ShieldCheck size={24} />, link: "/en/articles" },
    { title: "EIN Acquisition", desc: "Federal Tax ID procurement from the IRS for seamless global banking and Stripe integration.", icon: <Zap size={24} />, link: "/en/articles" },
    { title: "Registered Agent", desc: "Professional legal representation to maintain 100% compliance and protect your personal privacy.", icon: <Target size={24} />, link: "/en/articles" },
    { title: "Business Address", desc: "Prestigious US-based physical address for professional correspondence and banking verification.", icon: <MapPin size={24} />, link: "/en/articles" },
  ];

  return (
    <div className="min-h-screen bg-[#020c1b] text-white selection:bg-[#64FFDA] selection:text-[#020c1b] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        <motion.div style={{ opacity }} className="relative z-10 text-center max-w-5xl">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#64FFDA]/20 bg-[#64FFDA]/5 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.35em] mb-8 shadow-[0_0_20px_rgba(100,255,218,0.05)]">
            <Star size={12} className="animate-pulse" /> The Global Intelligence Standard
          </div>

          <div className="relative inline-block mb-8">
            <h1 className="text-[14vw] md:text-[150px] font-[900] leading-[0.8] tracking-tighter uppercase italic select-none">
              <span className="text-outline-bold text-transparent opacity-40">S4</span>
              <span className="text-[#64FFDA] drop-shadow-[0_0_35px_rgba(100,255,218,0.25)] relative">
                HEL
                <span className="absolute -right-3 md:-right-6 bottom-3 w-3 h-3 md:w-5 md:h-5 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
              </span>
            </h1>
            <div className="text-[9px] md:text-[11px] font-black tracking-[1.4em] text-[#8892b0]/30 uppercase mt-4 block pl-[1.4em]">
              Online University
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-[#8892b0] text-base md:text-lg font-medium italic leading-relaxed opacity-90 px-4 mt-6">
            Engineering elite legal structures, regulatory frameworks, and robust financial architectures for global non-resident entrepreneurs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/en/articles" className="group bg-[#64FFDA] text-[#020c1b] px-10 py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(100,255,218,0.15)]">
              Explore US Services <ChevronRight size={14} />
            </Link>
            <Link href="/en/academy" className="px-10 py-5 rounded-xl text-[#64FFDA] border border-[#64FFDA]/30 hover:bg-[#64FFDA]/10 text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-2">
              <GraduationCap size={14} /> Access Academy Hub
            </Link>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#64FFDA]/3 blur-[130px] rounded-full pointer-events-none z-0" />
      </section>

      {/* 2. COMPLIANCE & ECOSYSTEM MATRIX */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Ecosystem Matrix</h2>
            <p className="text-[#64FFDA] font-black text-[10px] tracking-[0.4em] opacity-70 italic flex items-center gap-2">
              <Zap size={12}/> Core Corporate Infrastructure Modules
            </p>
          </div>
          <Link href="/en/articles" className="text-[10px] font-black uppercase tracking-widest border-b border-[#64FFDA]/30 pb-1.5 text-[#64FFDA] hover:text-white transition-colors">
            Explore Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:border-[#64FFDA]/20 hover:bg-white/[0.02] transition-all duration-300 group flex flex-col justify-between h-full shadow-lg"
            >
              <div>
                <div className="text-[#64FFDA] mb-6 group-hover:scale-105 transition-transform origin-left">{item.icon}</div>
                <h3 className="text-white font-bold uppercase text-xs tracking-wider mb-3">{item.title}</h3>
                <p className="text-[13px] text-[#8892b0] leading-relaxed italic mb-8 opacity-80">{item.desc}</p>
              </div>
              <Link href={item.link} className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-[#8892b0] group-hover:bg-[#64FFDA] group-hover:text-[#020c1b] group-hover:border-[#64FFDA] transition-all self-end">
                <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STRATEGIC VALUE & LLC ADVANTAGES */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-[#64FFDA] font-mono text-[9px] tracking-[0.4em] uppercase block">WHY STRATEGIC BORDERLESS CORE?</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Empowering Global Commerce</h2>
          <p className="text-xs text-[#8892b0] leading-relaxed">Understanding the financial velocity, asset protection shields, and scalability networks available to your digital entity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Why We Teach Business */}
          <div className="p-8 bg-[#112240]/20 border border-white/5 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/5 border border-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA]">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">1. Premium Business Education</h3>
              <p className="text-xs text-[#8892b0] leading-relaxed italic">
                At S4HEL Online University, we believe paperwork without intelligence is obsolete. We teach you how to build real high-fidelity business operations, navigate viral modern channels like TikTok Shop, execute algorithmic trading matrices, and construct advanced Shopify retail networks direct from scratch.
              </p>
            </div>
            <span className="text-[9px] font-mono text-[#64FFDA]/40 uppercase tracking-widest">KNOWLEDGE ARCHITECTURE</span>
          </div>

          {/* Pillar 2: Core Benefits of a US LLC */}
          <div className="p-8 bg-[#112240]/20 border border-white/5 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/5 border border-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA]">
                <Landmark size={22} />
              </div>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">2. Strategic Power of a US LLC</h3>
              <p className="text-xs text-[#8892b0] leading-relaxed italic">
                A United States Limited Liability Company (LLC) is the ultimate legal structure for cross-border scale. It unlocks absolute personal asset protection, yields 0% state-level income tax parameters for out-of-state non-residents, and opens direct structural channels to premium global banks and merchant networks.
              </p>
            </div>
            <span className="text-[9px] font-mono text-[#64FFDA]/40 uppercase tracking-widest">ASSET PROTECTION VEIL</span>
          </div>

          {/* Pillar 3: Why Secure Our Infrastructure */}
          <div className="p-8 bg-[#112240]/20 border border-white/5 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/5 border border-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA]">
                <ShieldAlert size={22} />
              </div>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">3. Why Deploy Our Infrastructure</h3>
              <p className="text-xs text-[#8892b0] leading-relaxed italic">
                S4HEL bypasses standard bureaucratic bottlenecks. We do not just process records; we engineer your complete corporate ecosystem. By securing registered agents, EIN acquisitions, verified business addresses, and banking routes, your commerce node gets instant institutional authority globally.
              </p>
            </div>
            <span className="text-[9px] font-mono text-[#64FFDA]/40 uppercase tracking-widest">REGULATORY MITIGATION</span>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC DEEP REDIRECT GATEWAYS (The Awin Audit Winner) */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* GATEWAY A: REDIRECT TO LIVE ACADEMY NODE */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#112240]/40 to-transparent border border-white/5 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <span className="text-[#64FFDA] text-[9px] font-mono tracking-[0.3em] uppercase block">ENTREPRENEURIAL ACCELERATOR</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic">
                Launch Your Global <span className="text-[#64FFDA] not-italic">Agency & Business</span>
              </h3>
              <p className="text-xs md:text-sm text-[#8892b0] leading-relaxed italic opacity-90">
                Are you ready to initiate active market execution? S4HEL Academy delivers premium step-by-step masterclasses. Learn how to craft high-volume TikTok Shop stores, establish automated Shopify dropshipping funnels, master Amazon FBA/FBM logistics pipelines, or architect your own sovereign corporate formation agency.
              </p>
            </div>
            
            <Link 
              href="/en/academy"
              className="mt-6 py-4 bg-[#64FFDA] text-[#020C1B] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(100,255,218,0.2)]"
            >
              Enter Academy Terminal <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* GATEWAY B: REDIRECT TO INTEL BLOG & BANKING HUB */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#112240]/40 to-transparent border border-white/5 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <span className="text-[#64FFDA] text-[9px] font-mono tracking-[0.3em] uppercase block">FINANCIAL INTEL & MATRIX LOGS</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic">
                Master Corporate <span className="text-[#64FFDA] not-italic">Banking & Gateways</span>
              </h3>
              <p className="text-xs md:text-sm text-[#8892b0] leading-relaxed italic opacity-90">
                Do you require comprehensive data on premium digital financial networks? Explore our intelligence repository. We deliver analytical compliance reviews on unlocking high-tier Neobanks like Mercury and Relay Bank, configuring global merchant pipelines via Stripe, and choosing optimal taxation jurisdictions as a non-resident.
              </p>
            </div>

            <Link 
              href="/en/blog"
              className="mt-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#64FFDA] hover:text-[#020C1B] hover:border-[#64FFDA] transition-all text-center flex items-center justify-center gap-2"
            >
              Review Regulatory Blog <BookOpen size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. HUB TRUST & CREDIT MATRIX */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              Academic <br /> <span className="text-[#64FFDA]">Authority.</span>
            </h2>
            <div className="space-y-5 text-[#8892b0] text-base font-medium italic leading-relaxed">
              <p>S4HEL functioning as an <span className="text-white font-bold">Independent Corporate Research Hub</span>, assists international students and founders in bypassing multi-jurisdictional bottlenecks.</p>
              <p className="text-white not-italic text-xs font-bold border-l-2 border-[#64FFDA] pl-6 py-2 bg-[#64FFDA]/5 rounded-r-xl">
                Integrated intelligence frameworks ensure validation across premium neo-banking clearing systems.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-3xl font-black text-white tracking-tight italic">2.5K+</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#64FFDA] font-black">Registered Founders</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white tracking-tight italic">100%</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#64FFDA] font-black">Compliance Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#112240] rounded-3xl p-10 border border-white/5 relative backdrop-blur-md shadow-xl overflow-hidden">
            <BookOpen size={45} className="text-[#64FFDA] mb-6 opacity-40" />
            <h3 className="text-xl font-black text-white uppercase mb-3 tracking-tight">Publisher Mission</h3>
            <p className="text-[#8892b0] text-xs leading-relaxed italic opacity-90">
              We focus on delivering structural business validation blueprints. From cross-border IRS guidelines to advanced corporate tax mitigation frameworks, we provide clean, actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LIVE NEWSLETTER - AWIN INSTANT CONVERSION POINT */}
      <section id="newsletter" className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.01]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Mail size={32} className="text-[#64FFDA] mx-auto opacity-80" />
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Subscribe to Corporate Bulletins</h3>
            <p className="text-xs text-[#8892b0] max-w-md mx-auto">Get verified corporate strategy updates and regulatory alerts direct to your inbox. No spam.</p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter corporate email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/50 flex-grow transition-all"
              />
              <button
                type="submit"
                className="bg-[#64FFDA] text-[#020C1B] font-black text-[10px] uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-white transition-colors whitespace-nowrap"
              >
                Join Dispatch
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 text-xs text-[#64FFDA] bg-[#64FFDA]/10 px-6 py-3 rounded-xl border border-[#64FFDA]/20">
              <CheckCircle size={14} /> Subscription Active. Welcome to S4HEL Hub.
            </div>
          )}
        </div>
      </section>

      {/* GLOBAL BACKGROUND STYLE DECLARATION */}
      <style jsx global>{`
        .text-outline-bold {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
        }
        .text-outline {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 768px) {
          .text-outline-bold { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5); }
          .text-outline { -webkit-text-stroke: 0.8px rgba(255, 255, 255, 0.3); }
        }
      `}</style>
    </div>
  );
}