"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  ShieldCheck, 
  MailWarning, 
  Building2, 
  Gavel,
  BellRing,
  UserCheck
} from "lucide-react";

export default function RegisteredAgentGuide() {
  const steps = [
    {
      id: "01",
      title: "Official State Representation",
      action: "Defining the RA",
      desc: "A Registered Agent (RA) is your official state representative. They provide a physical address, open during business hours, to act as the primary point of contact between your LLC and the state. This is a legal mandate in all 50 states to ensure your business is always reachable.",
      link: "https://www.registeredagentsinc.com/registered-agent/",
      buttonText: "What is an RA?"
    },
    {
      id: "02",
      title: "Accept Service of Process",
      action: "Legal Protection",
      desc: "The most critical role of an RA is receiving 'Service of Process'—legal documents like lawsuits or trial summons. By having a professional agent, you ensure these sensitive documents are handled discreetly and promptly, protecting your LLC's interests from legal defaults.",
      link: "https://www.registeredagentsinc.com/registered-agent/service-of-process/",
      buttonText: "Learn About SOP"
    },
    {
      id: "03",
      title: "Privacy & Identity Shielding",
      action: "Anonymity First",
      desc: "Without a professional RA, your personal home or office address would be on public record. A Registered Agent uses their address on all state filings, keeping your personal owner address private and preventing unwanted solicitations or junk mail from reaching your doorstep.",
      link: "https://www.registeredagentsinc.com/registered-agent/privacy/",
      buttonText: "Secure Your Privacy"
    },
    {
      id: "04",
      title: "Maintaining Good Standing",
      action: "Compliance Alerts",
      desc: "Your RA receives IRS and State mail, including tax filing notifications and franchise tax notices. Their role is to ensure you never miss a deadline, which is essential for maintaining your company's 'Good Standing' status and avoiding administrative dissolution.",
      link: "https://www.registeredagentsinc.com/registered-agent/good-standing/",
      buttonText: "Stay Compliant"
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
            REGISTERED <br /> <span className="text-[#64FFDA]">AGENT ROLE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Your mandatory point of contact for all official communications. A step-by-step guide for global entrepreneurs to master LLC compliance.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/registered-agent-importance/hero.jpg" 
            alt="Role of a Registered Agent in LLC Formation" 
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
                <ShieldCheck className="text-[#64FFDA]" /> Core Benefits
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><UserCheck size={16} className="text-[#64FFDA] shrink-0" /> Professional Privacy Protection</li>
                <li className="flex gap-2"><UserCheck size={16} className="text-[#64FFDA] shrink-0" /> Reliable Service of Process Receipt</li>
                <li className="flex gap-2"><UserCheck size={16} className="text-[#64FFDA] shrink-0" /> Continuous Availability during hours</li>
                <li className="flex gap-2"><UserCheck size={16} className="text-[#64FFDA] shrink-0" /> Prevention of legal consequences</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <BellRing className="text-[#64FFDA]" /> Crucial Alerts
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Your agent acts as a filter, sorting through official state mail, tax notices, and legal summons to ensure you only deal with what matters, exactly when it matters.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">RA Compliance Ecosystem</h4>
            <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold italic"><Building2 size={24}/> QuickBooks</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><Building2 size={24}/> Stripe RA</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><Building2 size={24}/> Mercury Bank</div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <Gavel className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Protect Your <br /> Business ID</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't risk your privacy or legal standing. Secure a professional Registered Agent and keep your global focus on growth.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/registered-agent/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Hire My Agent
          </a>
        </div>

      </div>
    </div>
  );
}