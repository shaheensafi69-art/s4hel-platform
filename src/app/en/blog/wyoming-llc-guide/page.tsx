"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // برای مسیریابی بازگشت
import { 
  ArrowLeft, // آیکون بازگشت
  ArrowRight, 
  MousePointer2, 
  CheckCircle2, 
  Info, 
  FileSearch, 
  ShieldCheck,
  CreditCard
} from "lucide-react";

export default function WyomingLLCGuide() {
  const steps = [
    {
      id: "01",
      title: "Initiate Formation",
      action: "Visit Registered Agents Inc",
      desc: "Go to the official portal. On the homepage, click on 'Start a Business' or 'Hire Us'. This will take you to the selection screen where you'll choose your state.",
      link: "https://www.registeredagentsinc.com/business-formation/",
      buttonText: "Start Formation Portal"
    },
    {
      id: "02",
      title: "Select Wyoming & Entity Type",
      action: "Choose 'LLC' and 'Wyoming'",
      desc: "In the dropdown menus, select 'LLC' as your business type and 'Wyoming' as your state. This ensures you get the low $100 state filing fee and maximum privacy.",
      link: "https://www.registeredagentsinc.com/wyoming-llc/",
      buttonText: "Choose Wyoming"
    },
    {
      id: "03",
      title: "Enter Your Business Name",
      action: "Finalize Name & Suffix",
      desc: "Type your desired business name. Make sure to add 'LLC' at the end. The system will alert you if the name is available for registration in Wyoming.",
      link: "https://www.registeredagentsinc.com/wyoming-llc/name-search/",
      buttonText: "Search Name"
    },
    {
      id: "04",
      title: "The Registered Agent Advantage",
      action: "Select Professional Representation",
      desc: "Registered Agents Inc will automatically be set as your agent. This is crucial: they provide their own address to the state so your personal home address stays off public records.",
      link: "https://www.registeredagentsinc.com/wyoming-registered-agent/",
      buttonText: "View Agent Details"
    },
    {
      id: "05",
      title: "Add EIN & Operating Agreement",
      action: "Check the 'Tax ID' Box",
      desc: "For non-residents, we highly recommend checking the box for 'EIN Service'. They will handle the IRS paperwork for you. Also, ensure you get a professional 'Operating Agreement' drafted.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "Add EIN Service"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 selection:bg-[#64FFDA] selection:text-[#020C1B]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- BACK BUTTON (بخش اضافه شده) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
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
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-6 leading-tight">
            THE <span className="text-[#64FFDA]">CLICK-BY-CLICK</span> <br /> FORMATION GUIDE
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Stop guessing. Follow this exact technical path to register your Wyoming LLC via Registered Agents Inc in under 10 minutes.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image src="/blog/wyoming-llc-guide/hero.jpg" alt="Formation Steps" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- THE STEPS --- */}
        <div className="space-y-24 mb-32">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
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

        {/* --- REQUIREMENTS CHECKLIST --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <h2 className="text-3xl font-black text-white mb-10 text-center italic uppercase tracking-widest">Pre-Flight Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "A unique business name",
              "Valid ID/Passport (for EIN)",
              "Digital Payment Method",
              "A physical address (Agent provides this)",
              "Email address for documents",
              "Clear understanding of your niche"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#020C1B] p-5 rounded-3xl border border-white/5">
                <CheckCircle2 className="text-[#64FFDA]" size={20} />
                <span className="text-sm font-bold text-[#CCD6F6]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CONVERSION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <ShieldCheck className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready to secure <br /> your future?</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium">
            Join thousands of global entrepreneurs who launched their US presence via our certified partner.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/business-formation/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Launch My LLC Now
          </a>
        </div>

      </div>
    </div>
  );
}