"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Zap, Gavel, ChevronLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const lastUpdated = "March 16, 2026";

  const terms = [
    {
      title: "1. Executive Agreement",
      icon: <Scale size={20} />,
      content: "By accessing S4HEL, you enter into a strategic agreement to utilize our US-based infrastructure for educational and formation purposes. You confirm that all business intent provided is lawful and aligned with international financial standards."
    },
    {
      title: "2. Scope of Intelligence",
      icon: <Zap size={20} />,
      content: "S4HEL provides strategic guidance and assistance for LLC formation and digital banking architectures. We are an intelligence hub; while we engineer the bridge to the US market, the final operational management of the business remains with the founder."
    },
    {
      title: "3. Compliance & Jurisdictional Authority",
      icon: <Gavel size={20} />,
      content: "All services are governed by the laws of the State of Montana, USA. Any disputes or legal inquiries shall be resolved under the jurisdiction of the courts in Kalispell, Montana, ensuring a transparent and structured legal process."
    },
    {
      title: "4. Intellectual Property",
      icon: <FileText size={20} />,
      content: "The S4HEL brand, its proprietary 'Elite' design systems, and educational methodologies are the exclusive intellectual property of S4HEL. Unauthorized replication of our strategic frameworks is strictly prohibited."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#8892B0] pt-40 pb-20 px-6 font-sans selection:bg-[#64FFDA] selection:text-[#020C1B]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/en" className="inline-flex items-center gap-2 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all">
            <ChevronLeft size={14} /> Return to Operations
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 italic leading-none"
          >
            Terms of <br /> <span className="text-[#64FFDA]">Service</span>
          </motion.h1>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em]">
            <span className="text-white/40">Protocol:</span>
            <span className="text-white">Active Engagement</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40">Revision: {lastUpdated}</span>
          </div>
        </div>

        {/* Terms Content - Glassmorphism Card */}
        <div className="bg-[#112240]/40 border border-white/5 rounded-[60px] p-10 md:p-20 backdrop-blur-3xl shadow-3xl relative overflow-hidden">
          {/* Subtle Decorative Icon */}
          <AlertCircle className="absolute -top-10 -right-10 text-white/[0.02]" size={300} />
          
          <div className="space-y-16 relative z-10">
            {terms.map((term, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#020C1B] transition-all duration-500">
                    {term.icon}
                  </div>
                  <h2 className="text-white text-xl font-black uppercase tracking-widest italic">{term.title}</h2>
                </div>
                <p className="text-[#8892B0] text-lg leading-relaxed font-medium italic opacity-80 border-l-2 border-[#64FFDA]/20 pl-8">
                  {term.content}
                </p>
              </motion.div>
            ))}

            <div className="pt-12 border-t border-white/5 space-y-4">
              <h3 className="text-[#64FFDA] text-xs font-black uppercase tracking-[0.5em]">Executive Jurisdiction</h3>
              <p className="text-white/60 font-medium italic text-sm leading-loose">
                S4HEL Operations Hub <br />
                1001 S Main St Ste 500, Kalispell <br />
                Montana 59901, United States
              </p>
            </div>
          </div>
        </div>

        {/* Final Legal Footer Note */}
        <div className="mt-20 flex flex-col items-center text-center">
          <div className="w-20 h-[1px] bg-white/10 mb-8" />
          <p className="text-[10px] text-[#495670] uppercase tracking-[0.4em] leading-loose max-w-2xl">
            By proceeding with our services, you acknowledge that you have read and understood the tactical requirements of these terms. S4HEL reserves the right to update these protocols to maintain global compliance.
          </p>
        </div>

      </div>
    </div>
  );
}