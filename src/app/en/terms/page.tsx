"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Zap, Gavel, ChevronLeft, AlertCircle, Info, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const lastUpdated = "May 19, 2026";

  const terms = [
    {
      title: "1. Acceptance of Terms",
      icon: <Scale size={18} />,
      content: "By accessing and interacting with the platforms, educational frameworks, and digital interfaces of S4HEL Online University, you formally agree to be bound by these Terms of Service, all applicable United States federal laws, and local state regulations. If you do not concur with any section of these terms, you are legally restricted from utilizing our online hub resources."
    },
    {
      title: "2. Educational Scope and Financial Disclaimer",
      icon: <Zap size={18} />,
      content: "S4HEL functions exclusively as an independent corporate research and academic intelligence hub. The content, articles, and guides provided are intended solely for educational and informational purposes. S4HEL is not a law firm, a financial institution, or an official certified public accounting provider. No materials hosted on this node constitute binding legal or financial advice."
    },
    {
      title: "3. Permitted Intellectual Use and Limitations",
      icon: <FileText size={18} />,
      content: "All proprietary methodologies, publication layout systems, core design matrix assets, and analysis archives hosted on S4HEL are the exclusive intellectual property of S4HEL LLC. Users are granted a limited, non-exclusive, non-transferable license to access our educational content for individual research. Reproduction or extraction of our frameworks for corporate distribution is strictly prohibited."
    },
    {
      title: "4. User Compliance and Lawful Intent",
      icon: <ShieldCheck size={18} />,
      content: "As a user, you warrant that all information provided during newsletter enrollment, database interaction, or query dispatch is completely accurate. You agree not to utilize our infrastructure to deploy malicious code, disrupt digital banking telemetry tracking networks, or simulate unlawful business formation intent within any global jurisdiction."
    },
    {
      title: "5. Limitation of Liability",
      icon: <AlertCircle size={18} />,
      content: "In no scenario shall S4HEL LLC, its directors, or partners be held accountable for any indirect, consequential, or accidental losses arising from the utilization or inability to utilize our research guides, structural corporate tools, or affiliate links. The final legal configuration and management of any commercial entity remain the absolute responsibility of the founder."
    },
    {
      title: "6. Governing Law and Governing Jurisdiction",
      icon: <Gavel size={18} />,
      content: "These statutory provisions are constructed, executed, and interpreted in full accordance with the laws of the State of Montana, United States. Any formal legal disputes, mediation routines, or structural corporate claims concerning S4HEL LLC must be initiated exclusively within the state and federal courts located in Kalispell, Montana, USA."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#8892B0] pt-40 pb-20 px-6 font-sans selection:bg-[#64FFDA] selection:text-[#020C1B] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/en" className="inline-flex items-center gap-2 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all">
            <ChevronLeft size={14} /> Return to Operations
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 italic leading-none"
          >
            Terms of <br /> <span className="text-[#64FFDA]">Service</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-white/40">Status:</span>
            <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-md border border-[#64FFDA]/20">Active & Enforceable</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/40">Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Terms Content - Glassmorphism Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Icon */}
          <AlertCircle className="absolute -top-10 -right-10 text-white/[0.01] pointer-events-none" size={300} />
          
          <div className="space-y-12 relative z-10">
            {terms.map((term, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#64FFDA] bg-white/5 p-2 rounded-xl group-hover:scale-105 transition-transform">
                    {term.icon}
                  </div>
                  <h2 className="text-white text-base font-black uppercase tracking-wider">{term.title}</h2>
                </div>
                <p className="text-[#8892B0] text-xs md:text-[13px] leading-relaxed font-medium opacity-80 border-l border-white/5 pl-6 ml-4">
                  {term.content}
                </p>
              </motion.div>
            ))}

            {/* Corporate Address Footer Information */}
            <div className="pt-10 border-t border-white/5 ml-4 space-y-3">
              <h3 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <Info size={12} /> Corporate Governance Identity
              </h3>
              <p className="text-white font-bold text-base font-mono leading-none">
                S4HEL LLC
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 leading-normal font-mono">
                1001 S Main St Ste 500, Kalispell <br />
                Montana 59901, United States <br />
                Inquiries: legal@s4hel.com
              </p>
            </div>
          </div>
        </div>

        {/* Final Legal Footer Note */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="w-16 h-[1px] bg-white/10 mb-6" />
          <p className="text-[10px] text-[#495670] uppercase tracking-wider leading-relaxed italic max-w-2xl">
            By proceeding with our institutional research matrices, you comprehensively acknowledge that you understand these governance frameworks. S4HEL reserves the explicit right to adjust these terms to maintain integration velocity with international business networks.
          </p>
        </div>

      </div>
    </div>
  );
}