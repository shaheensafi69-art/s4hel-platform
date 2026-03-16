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
  FileText, 
  Globe2, 
  History,
  BadgePercent
} from "lucide-react";

export default function ITINGuide() {
  const steps = [
    {
      id: "01",
      title: "Discover ITIN Benefits",
      action: "Why You Need It",
      desc: "An Individual Taxpayer Identification Number (ITIN) is your key to the US financial system. It allows you to open personal bank accounts, build a US credit history, and file tax returns—which is often required for income earned in the US. Most importantly, it grants you access to Tax Treaty Benefits, potentially reducing your tax burden.",
      link: "https://www.registeredagentsinc.com/itin/",
      buttonText: "See All ITIN Benefits"
    },
    {
      id: "02",
      title: "Check Your Eligibility",
      action: "Who Needs an ITIN?",
      desc: "This is for non-US residents earning US income, international students, researchers, and foreign investors in US assets. If you are a foreign spouse of a US citizen or resident and don't qualify for an SSN, the ITIN is designed specifically for you to ensure tax transparency.",
      link: "https://www.registeredagentsinc.com/itin/",
      buttonText: "Am I Eligible?"
    },
    {
      id: "03",
      title: "Gather Application Requirements",
      action: "Document Preparation",
      desc: "To apply, you'll need a completed Form W-7 and a valid passport (either the original or a certified copy). If you don't have a passport, a foreign state ID or driver's license might be required along with a tax return or an 'Exception Document' to prove your need for the number.",
      link: "https://www.registeredagentsinc.com/itin/",
      buttonText: "View Document Checklist"
    },
    {
      id: "04",
      title: "Pricing & Professional Support",
      action: "Understand the Costs",
      desc: "While IRS filing itself is affordable, many choose professional CAA (Certifying Acceptance Agent) services to avoid sending original passports to the IRS. Costs typically include expedited processing and tax return preparation to ensure your application isn't rejected by the IRS ITIN Acceptance Office.",
      link: "https://www.registeredagentsinc.com/itin/",
      buttonText: "Get Professional Help"
    },
    {
      id: "05",
      title: "Ongoing IRS Compliance",
      action: "Maintain Your Status",
      desc: "Getting the number is just the start. You must file annual tax returns if required, keep your personal information current with the IRS, and report any changes in your data. Maintaining secure copies of all filed documents is critical for your long-term US financial health.",
      link: "https://www.registeredagentsinc.com/itin/",
      buttonText: "Learn Compliance Rules"
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
            ITIN FOR <br /> <span className="text-[#64FFDA]">NON-RESIDENTS</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A comprehensive guide for global taxpayers. Navigate the IRS ITIN process step-by-step and unlock US financial opportunities.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/itin-for-non-residents/hero.jpg" 
            alt="IRS ITIN Process Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- THE EDUCATIONAL STEPS --- */}
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
                  <span className="text-7xl font-black text-white/5 group-hover:text-[#64FFDA]/20 transition-all">{s.id}</span>
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

        {/* --- KEY TAKEAWAYS SECTION --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <ShieldCheck className="text-[#64FFDA]" /> Final Takeaways
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><BadgePercent size={16} className="text-[#64FFDA] shrink-0" /> Standardize US Tax Presence</li>
                <li className="flex gap-2"><BadgePercent size={16} className="text-[#64FFDA] shrink-0" /> Facilitate Banking & Lending</li>
                <li className="flex gap-2"><BadgePercent size={16} className="text-[#64FFDA] shrink-0" /> Claim Refundable Tax Credits</li>
                <li className="flex gap-2"><BadgePercent size={16} className="text-[#64FFDA] shrink-0" /> Achieve Total Tax Transparency</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <History className="text-[#64FFDA]" /> Credit History
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Unlike the SSN, which is for residents, the ITIN allows you to start a US credit journey from abroad. This is the first step toward securing US loans or credit cards in the future.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS & GLOBAL REACH --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Global Tax Integrations</h4>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2"><Globe2 size={20}/> <span className="font-bold">QuickBooks</span></div>
                <div className="flex items-center gap-2"><Globe2 size={20}/> <span className="font-bold">Xero</span></div>
                <div className="flex items-center gap-2"><Globe2 size={20}/> <span className="font-bold">Stripe</span></div>
                <div className="flex items-center gap-2"><Globe2 size={20}/> <span className="font-bold">US Banking</span></div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <FileText className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Start Your ITIN <br /> Journey</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't let the lack of an SSN stop your US expansion. Get your ITIN and unlock the full potential of the US market.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/itin/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Apply for ITIN Now
          </a>
        </div>

      </div>
    </div>
  );
}