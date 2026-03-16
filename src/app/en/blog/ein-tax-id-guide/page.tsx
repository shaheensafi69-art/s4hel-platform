"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  FileText, 
  ShieldCheck, 
  Building2, 
  Users,
  BadgeDollarSign
} from "lucide-react";

export default function EINTaxIDGuide() {
  const steps = [
    {
      id: "01",
      title: "Understand the EIN Purpose",
      action: "Determine Your Need",
      desc: "An Employer Identification Number (EIN) is essential for any new business. You need it to hire employees, open a US business bank account (like Mercury or Relay), and file your federal tax returns. Think of it as a Social Security Number for your business.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "Why do I need an EIN?"
    },
    {
      id: "02",
      title: "Who Needs an EIN?",
      action: "Identify Your Entity Type",
      desc: "Whether you are a Sole Proprietor, a Corporation, or an LLC (even a single-member LLC), you generally require an EIN. Partnerships and Non-profit organizations must also obtain one to operate legally in the US.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "Check My Eligibility"
    },
    {
      id: "03",
      title: "Gather Required Information",
      action: "Prepare Your Documents",
      desc: "Before you apply, have these ready: Your Business Legal Name, Physical Business Address, Entity Type, and the details of the 'Responsible Party'. If you don't have an SSN or ITIN, don't worry—special rules apply for international founders.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "View Documentation List"
    },
    {
      id: "04",
      title: "Choose Your Application Method",
      action: "Select the Fastest Route",
      desc: "Online application is the fastest for those with an SSN/ITIN. However, for international founders, we recommend the 'Fax Form SS-4' or 'Mail' methods. If you are outside the US, a telephone application is also an option.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "Start Application Process"
    },
    {
      id: "05",
      title: "Usage & Compliance",
      action: "Maintain Your Tax Status",
      desc: "Once issued, use your EIN for employer responsibilities and business tax filings. Remember to avoid using personal info where your EIN should be used. Ensure you follow address change rules to keep the IRS updated.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
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
            EIN TAX ID <br /> <span className="text-[#64FFDA]">MASTER GUIDE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A comprehensive resource for global business. Learn how to obtain and use your US Tax ID without the headache.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/ein-tax-id-guide/hero.jpg" 
            alt="EIN Tax ID Guide Infographic" 
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

        {/* --- ADDITIONAL KNOWLEDGE SECTION --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center justify-center md:justify-start gap-3 italic">
                <Building2 className="text-[#64FFDA]" /> Where EIN is Used
              </h2>
              <ul className="text-sm text-[#8892B0] space-y-3 italic">
                <li>• US Federal Taxes & Filings</li>
                <li>• Opening US Business Bank Accounts</li>
                <li>• Business License Applications</li>
                <li>• Professional Vendor Applications</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center justify-center md:justify-start gap-3 italic">
                <Users className="text-[#64FFDA]" /> Non-Resident Support
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Global founders often struggle with the IRS. Our partner specializes in securing EINs for non-residents without requiring an SSN, making your US entry seamless.
              </p>
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <BadgeDollarSign className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready to Get Your <br /> EIN Tax ID?</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't let IRS paperwork stop your business growth. Get professional help today.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/ein-number-service/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Obtain My EIN Now
          </a>
        </div>

      </div>
    </div>
  );
}