"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Scale, 
  Users, 
  ShieldCheck, 
  Gavel,
  CheckSquare,
  FileText
} from "lucide-react";

export default function OperatingAgreementGuide() {
  const steps = [
    {
      id: "01",
      title: "Internal Company Governance",
      action: "Defining Roles",
      desc: "An Operating Agreement is a mandatory legal guide that spells out the roles and rights of each member. It is a flexible, non-public document that serves as the internal constitution of your LLC, ensuring everyone is aligned on management powers and voting rights.",
      link: "https://www.registeredagentsinc.com/llc/operating-agreement/",
      buttonText: "Learn About Governance"
    },
    {
      id: "02",
      title: "Member Liability & Indemnification",
      action: "Asset Protection",
      desc: "This document reconfirms limited liability for members, shielding personal assets from LLC debts. It includes crucial indemnification clauses that protect the founder group from legal personal liability, a must-have for any serious entrepreneur.",
      link: "https://www.registeredagentsinc.com/llc/operating-agreement/liability/",
      buttonText: "View Protection Rules"
    },
    {
      id: "03",
      title: "Dissolution & Membership Changes",
      action: "Future Planning",
      desc: "What happens if a member leaves or the LLC needs to dissolve? Your agreement outlines procedures for member withdrawal, terms for adding new members, and the exact process for closing the entity, preventing future disputes between partners.",
      link: "https://www.registeredagentsinc.com/llc/operating-agreement/dissolution/",
      buttonText: "Check Exit Strategies"
    },
    {
      id: "04",
      title: "Mandatory Corporate Formalities",
      action: "Stay Compliant",
      desc: "Even in states where it isn't strictly required by law, having an agreement maintains corporate formalities. This prevents 'piercing the corporate veil' and ensures that default state rules do not control your business operations.",
      link: "https://www.registeredagentsinc.com/llc/operating-agreement/formalities/",
      buttonText: "Establish Formalities"
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
            OPERATING <br /> <span className="text-[#64FFDA]">AGREEMENT</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Your definitive guide to internal LLC rules and member responsibilities. A mandatory point of contact for every global founder.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/operating-agreement-template/hero.jpg" 
            alt="LLC Operating Agreement Process Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- EDUCATIONAL STEPS --- */}
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

        {/* --- WHY EVERY LLC NEEDS ONE --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Scale className="text-[#64FFDA]" /> Core Functions
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CheckSquare size={16} className="text-[#64FFDA] shrink-0" /> Spells out roles and ownership shares (%)</li>
                <li className="flex gap-2"><CheckSquare size={16} className="text-[#64FFDA] shrink-0" /> Protects member rights & limits liability</li>
                <li className="flex gap-2"><CheckSquare size={16} className="text-[#64FFDA] shrink-0" /> Solves potential member conflicts early</li>
                <li className="flex gap-2"><CheckSquare size={16} className="text-[#64FFDA] shrink-0" /> Prevents default state law takeover</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Users className="text-[#64FFDA]" /> Management Types
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                The agreement defines whether your LLC is <strong>Member-managed</strong> (owners run daily operations) or <strong>Manager-managed</strong> (designated managers handle operations). This clarity is vital for investors and diverse founder groups.
              </p>
            </div>
          </div>
        </section>

        {/* --- TOOLS & INTEGRATIONS --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Compliance Dashboard Tools</h4>
            <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold italic"><FileText size={24}/> QuickBooks</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><FileText size={24}/> Stripe RA</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><FileText size={24}/> Mercury Bank</div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <Gavel className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Solidify Your <br /> Governance</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't leave your business to state default rules. Create your customized Operating Agreement and protect your global empire today.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/llc/operating-agreement/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Draft My Agreement
          </a>
        </div>

      </div>
    </div>
  );
}