"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Wallet, 
  BarChart4, 
  ShieldCheck, 
  Zap,
  Building2,
  Users
} from "lucide-react";

export default function MercuryVsRelay() {
  const comparisonSteps = [
    {
      id: "01",
      title: "Mercury: The Startup Choice",
      action: "Tech-Focused Banking",
      desc: "Mercury is built for startups and VC-backed companies. It offers a sleek API for developers, seamless integrations with Venture Capital tools, and allows for multiple debit and credit cards. If your business is tech-heavy and needs a modern interface, Mercury is the gold standard.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Explore Mercury Features"
    },
    {
      id: "02",
      title: "Relay: Team-First Banking",
      action: "Collaborative Finance",
      desc: "Relay Bank excels in team collaboration. It offers rich financial insights, the ability to open multiple checking accounts for different departments, and automated bookkeeping. It’s the perfect choice for agencies and businesses with multiple team members who need specific access levels.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Explore Relay Features"
    },
    {
      id: "03",
      title: "Understanding Pricing Models",
      action: "No Hidden Fees",
      desc: "Both banks offer competitive pricing. Mercury is famous for having no minimum balance, free domestic wires, and free international wires (both incoming and outgoing). Relay focuses on affordability with no hidden fees and affordable domestic wires, though international wire fees may vary.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Compare Bank Fees"
    },
    {
      id: "04",
      title: "Final Decision: Which to Choose?",
      action: "Strategic Selection",
      desc: "Choose Mercury if you are a VC-backed startup or need heavy API access. Choose Relay if you prioritize team collaboration, automated workflows, and in-depth financial visibility. Both are modern, digital-first solutions that understand the needs of global entrepreneurs.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Open Your Bank Account"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 selection:bg-[#64FFDA] selection:text-[#020C1B]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- BACK BUTTON --- */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link 
            href="/en/blog" 
            className="group inline-flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors font-black uppercase tracking-[0.3em] text-[10px]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </Link>
        </motion.div>

        {/* --- HERO --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-6 leading-tight uppercase">
            MERCURY <span className="text-[#64FFDA]">VS</span> <br /> RELAY BANK
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A comparative guide for business banking solutions. Learn which financial partner will power your global business expansion.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/mercury-vs-relay-bank/hero.jpg" 
            alt="Mercury vs Relay Bank Comparison Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- EDUCATIONAL STEPS --- */}
        <div className="space-y-24 mb-32">
          {comparisonSteps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[150px_1fr] gap-10 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-7xl font-black text-white/5 group-hover:text-[#64FFDA]/20 transition-all italic">{s.id}</span>
                  <div className="w-[2px] h-32 bg-gradient-to-b from-[#64FFDA]/50 to-transparent mt-4" />
                </div>
                
                <div className="bg-[#112240] p-8 md:p-12 rounded-[50px] border border-white/5 hover:border-[#64FFDA]/30 transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4 text-[#64FFDA]">
                    <MousePointer2 size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">{s.action}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase italic leading-tight">{s.title}</h3>
                  <p className="text-[#8892B0] leading-relaxed mb-8 text-lg">{s.desc}</p>
                  
                  <a 
                    href={s.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg"
                  >
                    {s.buttonText} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SUMMARY BOX --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <Building2 className="text-[#64FFDA]" /> Mercury is for:
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> VCs & Tech Startups</li>
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> API-heavy business needs</li>
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> Businesses doing high-volume international wires</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <Users className="text-[#64FFDA]" /> Relay is for:
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> Agencies & Collaborative Teams</li>
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> Founders needing in-depth visibility</li>
                <li className="flex gap-2"><ShieldCheck size={16} className="text-[#64FFDA] shrink-0" /> Automated Bookkeeping workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS --- */}
        <div className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-10 tracking-[0.5em]">Seamless Financial Ecosystem</h4>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold"><Zap size={24}/> QuickBooks</div>
                <div className="flex flex-col items-center gap-2 font-bold"><Zap size={24}/> Xero</div>
                <div className="flex flex-col items-center gap-2 font-bold"><Zap size={24}/> Stripe</div>
            </div>
        </div>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <Wallet className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Secure Your <br /> Business Capital</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't leave your finances to chance. Pick the bank that grows with you.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/business-banking/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Start Banking Now
          </a>
        </div>

      </div>
    </div>
  );
}