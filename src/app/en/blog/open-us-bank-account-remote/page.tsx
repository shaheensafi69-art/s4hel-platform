"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Globe, 
  ShieldCheck, 
  Video, 
  CreditCard,
  History,
  Lock
} from "lucide-react";

export default function RemoteUSBankGuide() {
  const steps = [
    {
      id: "01",
      title: "Digital Verification Process",
      action: "Biometric KYC",
      desc: "Remote banking begins with robust digital verification. You will undergo Biometric KYC (Know Your Customer), which often includes a brief video interview and secure document upload of your passport and company formation papers. This ensures top-tier security for global founders.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Start Verification"
    },
    {
      id: "02",
      title: "Regulatory Compliance",
      action: "Stay Legal",
      desc: "To operate a US account remotely, you must adhere to FATCA/CRS compliance and pass SEC/FinCEN checks. This infrastructure ensures your account remains secure and fully authorized to handle USD liquidity as a safe haven asset.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "View Compliance Info"
    },
    {
      id: "03",
      title: "International Transactions",
      action: "Global Connectivity",
      desc: "Once opened, your account provides full SWIFT/BIC support, enabling multi-currency accounts and global card access. You can move funds internationally with the same ease as a domestic business, all while managing your capital from anywhere in the world.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Explore Card Access"
    },
    {
      id: "04",
      title: "Easy Online Application",
      action: "Quick Approval",
      desc: "The application is 100% online. No US SSN is required (though an ITIN may be needed for some institutions). The process is streamlined for quick approval, allowing you to access the stability and safety of the US banking system in record time.",
      link: "https://www.registeredagentsinc.com/business-banking/",
      buttonText: "Apply Remotely"
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
            REMOTE <br /> <span className="text-[#64FFDA]">US BANKING</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A comprehensive guide for global entrepreneurs to open a US bank account remotely. Secure your capital and access the global market from anywhere.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/open-us-bank-account-remote/hero.jpg" 
            alt="Remote US Bank Account Opening Infographic" 
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

        {/* --- KEY BENEFITS SECTION --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <ShieldCheck className="text-[#64FFDA]" /> USD Stability & Safety
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CreditCard size={16} className="text-[#64FFDA] shrink-0" /> High USD Liquidity</li>
                <li className="flex gap-2"><CreditCard size={16} className="text-[#64FFDA] shrink-0" /> Safe Haven Asset Protection</li>
                <li className="flex gap-2"><CreditCard size={16} className="text-[#64FFDA] shrink-0" /> Reliable US Banking Infrastructure</li>
                <li className="flex gap-2"><CreditCard size={16} className="text-[#64FFDA] shrink-0" /> Worldwide Card Acceptance</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <Globe className="text-[#64FFDA]" /> Remote Access Power
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Manage your US business capital from London, Istanbul, or anywhere globally. This guide ensures your remote access remains secure and compliant with international banking standards.
              </p>
            </div>
          </div>
        </section>

        {/* --- TECH ICONS --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Global Banking Stack</h4>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2"><Video size={20}/> <span className="font-bold">Video KYC</span></div>
                <div className="flex items-center gap-2"><Lock size={20}/> <span className="font-bold">SEC/FinCEN</span></div>
                <div className="flex items-center gap-2"><History size={20}/> <span className="font-bold">FATCA/CRS</span></div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <CreditCard className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Open Your US <br /> Account Today</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Bridge the gap between your global location and US financial markets. Professional, remote, and fully compliant.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/business-banking/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Apply for Remote Banking
          </a>
        </div>

      </div>
    </div>
  );
}