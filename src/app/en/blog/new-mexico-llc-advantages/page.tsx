"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  ShieldAlert, 
  PiggyBank, 
  UserCheck, 
  FileSearch,
  CheckCircle2,
  Lock
} from "lucide-react";

export default function NewMexicoLLCGuide() {
  const steps = [
    {
      id: "01",
      title: "Strict Privacy Protection",
      action: "Strategic Anonymity",
      desc: "New Mexico is one of the few states that offers total anonymity for LLC owners. Your personal name does not appear on public records, providing a 'Private NM' shield. This is the gold standard for entrepreneurs who prioritize asset protection and confidentiality from day one.",
      link: "https://www.registeredagentsinc.com/new-mexico-llc/",
      buttonText: "Learn About NM Privacy"
    },
    {
      id: "02",
      title: "Lowest Formation Costs",
      action: "Lean Budgeting",
      desc: "If you're looking for a cost-effective entry into the US market, New Mexico is unbeatable. With low state filing fees (typically $50) and flexible operating agreement fees, it's designed for startups with lean budgets and diversified asset holders.",
      link: "https://www.registeredagentsinc.com/new-mexico-llc/filing-fee/",
      buttonText: "View Fee Breakdown"
    },
    {
      id: "03",
      title: "Formation Requirements",
      action: "Document Prep",
      desc: "Starting a New Mexico LLC requires a unique name, the appointment of a Registered Agent, and filing the 'Articles of Organization'. Unlike other states, the process is incredibly efficient with online filing, making it highly global-founder friendly.",
      link: "https://www.registeredagentsinc.com/new-mexico-llc/articles-of-organization/",
      buttonText: "Start My Application"
    },
    {
      id: "04",
      title: "Ongoing Compliance & Maintenance",
      action: "Keep It Legal",
      desc: "To maintain your LLC, you must manage business tax filings and keep your Operating Agreement current. While NM is flexible, you must always maintain a Registered Agent to ensure you stay in 'Good Standing' with the Secretary of State.",
      link: "https://www.registeredagentsinc.com/new-mexico-llc/compliance/",
      buttonText: "Check Compliance Rules"
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
            NEW MEXICO <br /> <span className="text-[#64FFDA]">LLC ADVANTAGES</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A comprehensive guide for global business. Discover why New Mexico is the ultimate state for privacy-conscious founders and lean startups.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/new-mexico-llc-advantages/hero.jpg" 
            alt="New Mexico LLC Formation Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- EDUCATIONAL JOURNEY --- */}
        <div className="space-y-24 mb-32">
          {steps.map((s, i) => (
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

        {/* --- WHY CHOOSE NM SECTION --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <ShieldAlert className="text-[#64FFDA]" /> Key Benefits
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Asset Protection & Liability Shield</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Anonymity (Owner info stays private)</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Pass-Through Taxation efficiency</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Extreme Flexibility in Structure</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <UserCheck className="Who is this for?" /> Who is this for?
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Ideal for Private Business Owners, Non-US Residents, Startups with lean budgets, and Diversified Asset Holders looking for the lowest possible maintenance overhead.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS & TECH --- */}
        <section className="mb-32 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <Lock className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2 italic">Anonymous</h4>
                <p className="text-[10px] text-[#8892B0]">Owner names are not public record.</p>
            </div>
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <PiggyBank className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2 italic">Budget Friendly</h4>
                <p className="text-[10px] text-[#8892B0]">One of the lowest filing fees in the US.</p>
            </div>
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <FileSearch className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2 italic">Fast Filing</h4>
                <p className="text-[10px] text-[#8892B0]">Efficient online processing system.</p>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Launch Your <br /> Private LLC</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Secure your privacy and protect your assets today with a New Mexico LLC. The smartest choice for lean global founders.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/new-mexico-llc/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Start My NM LLC
          </a>
        </div>

      </div>
    </div>
  );
}