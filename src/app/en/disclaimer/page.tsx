"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Scale, ShieldCheck, HelpCircle, ChevronLeft, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GeneralDisclaimer() {
  const lastUpdated = "May 19, 2026";

  const disclaimers = [
    {
      title: "1. Informational and Educational Purposes Only",
      icon: <HelpCircle size={18} />,
      content: "All content, analytical frameworks, legal matrices, processing state metrics, and reference breakdowns hosted on S4HEL Online University are provided strictly for informational and educational purposes. The data distributed across this nexus is designed to assist global founders in understanding corporate landscapes but does not constitute formal legal, financial, or tax advice."
    },
    {
      title: "2. No Attorney-Client or Professional Relationship",
      icon: <Scale size={18} />,
      content: "Utilization of our research hub, interaction with our compliance dispatch vectors, or subscription to our corporate dispatches does not formulate an attorney-client, accountant-client, or professional consulting relationship between you and S4HEL LLC. For complex structural corporate execution, users are strongly urged to consult with licensed attorneys or certified public accountants within the respective United States jurisdictions."
    },
    {
      title: "3. Guarantee of Accuracy and Processing Velocities",
      icon: <ShieldCheck size={18} />,
      content: "While S4HEL exerts exhaustive measures to ensure that our jurisdictional data metrics (such as state filing fees, annual upkeep costs, and IRS processing times) remain continuously verified and updated, all state and federal regulations are subject to sudden adjustments. S4HEL makes no warranties, explicit or implied, regarding the absolute completeness, accuracy, or real-time reliability of the data assets presented."
    },
    {
      title: "4. External Resources and Outbound Hyperlinks",
      icon: <AlertTriangle size={18} />,
      content: "This online educational node contains hyperlinks directed toward third-party domains, enterprise registered agents, and international financial gateways. S4HEL explicitly disclaims any liability or administrative control over the operational safety, privacy protocols, billing integrity, or structural compliance of these external channels. Interaction with external links is performed at your own personal and commercial discretion."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#8892B0] pt-40 pb-20 px-6 font-sans selection:bg-[#64FFDA] selection:text-[#020C1B] relative overflow-hidden">
      
      {/* Background Architectural Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#64FFDA]/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Link Back */}
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
            General <br /> <span className="text-[#64FFDA]">Disclaimer</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-white/40">Protocol:</span>
            <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-md border border-[#64FFDA]/20 flex items-center gap-1.5">
              <CheckCircle2 size={10} /> Certified Disclaimer Node
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/40">Last Reviewed: {lastUpdated}</span>
          </div>
        </div>

        {/* Disclaimer Content Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="space-y-12 relative z-10">
            {disclaimers.map((item, idx) => (
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
                    {item.icon}
                  </div>
                  <h2 className="text-white text-base font-black uppercase tracking-wider">{item.title}</h2>
                </div>
                <p className="text-[#8892B0] text-xs md:text-[13px] leading-relaxed font-medium opacity-80 border-l border-white/5 pl-6 ml-4">
                  {item.content}
                </p>
              </motion.div>
            ))}

            {/* Corporate Address Footer Log */}
            <div className="pt-10 border-t border-white/5 ml-4 space-y-3">
              <h3 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <FileText size={12} /> Corporate Governance Identity
              </h3>
              <p className="text-white font-bold text-base font-mono leading-none">
                S4HEL LLC
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 leading-normal font-mono">
                1001 S Main St Ste 500, Kalispell <br />
                Montana 59901, United States <br />
                Compliance Dispatch: legal@s4hel.com
              </p>
            </div>
          </div>
        </div>

        {/* Final Educational Disclaimer */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="w-16 h-[1px] bg-white/10 mb-6" />
          <p className="text-[10px] text-[#495670] uppercase tracking-wider leading-relaxed italic max-w-2xl">
            By proceeding with our analytical infrastructure models and research databases, you comprehensively acknowledge that you accept all corporate boundaries outlined within this general disclaimer node. S4HEL reserves the explicit right to modify these operational thresholds at any time.
          </p>
        </div>

      </div>
    </div>
  );
}