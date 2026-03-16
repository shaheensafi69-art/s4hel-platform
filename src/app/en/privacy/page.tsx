"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Globe, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "March 16, 2026";

  const sections = [
    {
      title: "1. Data Sovereignty",
      icon: <Shield size={20} />,
      content: "At S4HEL, we treat your business data as a sovereign asset. We collect essential information such as legal names, contact details, and business intent solely to facilitate your US-based formation and financial architecture."
    },
    {
      title: "2. Strategic Intelligence Gathering",
      icon: <Eye size={20} />,
      content: "We utilize advanced analytics to optimize our Global Intelligence Hub. This includes monitoring site interaction to refine our educational resources and ensure our high-tech infrastructure meets your scaling needs."
    },
    {
      title: "3. Secure Encryption Standards",
      icon: <Lock size={20} />,
      content: "All sensitive transmissions are protected by elite-level encryption protocols. Your business intelligence is stored in secure environments, shielded from unauthorized access or international data leaks."
    },
    {
      title: "4. Global Compliance",
      icon: <Globe size={20} />,
      content: "As a Montana-based entity (1001 S Main St Ste 500, Kalispell), we adhere to both US federal regulations and international privacy benchmarks, ensuring your global expansion is legally fortified."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#8892B0] pt-40 pb-20 px-6 font-sans selection:bg-[#64FFDA] selection:text-[#020C1B]">
      
      {/* Background Architectural Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#64FFDA]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/en" className="inline-flex items-center gap-2 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all">
            <ChevronLeft size={14} /> Back to Nexus
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 italic leading-none"
          >
            Privacy <br /> <span className="text-[#64FFDA]">Protocols</span>
          </motion.h1>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em]">
            <span className="text-white/40">Status:</span>
            <span className="text-[#64FFDA] animate-pulse">Classified & Secure</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40">Updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[60px] p-10 md:p-20 backdrop-blur-3xl shadow-2xl">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#64FFDA] group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <h2 className="text-white text-xl font-black uppercase tracking-widest italic">{section.title}</h2>
                </div>
                <p className="text-[#8892B0] text-lg leading-relaxed font-medium italic opacity-80 border-l border-white/10 pl-8">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <div className="pt-12 border-t border-white/5">
              <h3 className="text-[#64FFDA] text-xs font-black uppercase tracking-[0.5em] mb-6">Data Officer Contact</h3>
              <p className="text-white font-bold italic text-xl">
                Contact@s4hel.com
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mt-4 leading-loose">
                1001 S Main St Ste 500, Kalispell, Montana 59901, USA
              </p>
            </div>
          </div>
        </div>

        {/* Support Disclaimer */}
        <div className="mt-20 p-10 border border-white/5 rounded-[50px] text-center">
          <p className="text-[11px] text-[#495670] uppercase tracking-widest leading-loose italic">
            All business intelligence processed through the S4HEL ecosystem is subject to international data protection standards. We do not sell or trade your strategic information.
          </p>
        </div>

      </div>
    </div>
  );
}