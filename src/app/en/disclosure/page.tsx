"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, DollarSign, Info, FileText, ChevronLeft, Handshake, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AffiliateDisclosure() {
  const lastUpdated = "May 19, 2026";

  const sections = [
    {
      title: "1. Transparency and Federal Compliance",
      icon: <Handshake size={18} />,
      content: "In alignment with the Federal Trade Commission (FTC) guidelines and international affiliate network transparency standards, S4HEL Online University formally discloses that we participate in professional affiliate marketing programs. This implies that certain outbound hyperlinks integrated within our educational guides, state matrices, and infrastructure breakdowns contain tracking codes that may yield a financial commission for our hub upon a user transaction."
    },
    {
      title: "2. Impact on Ultimate User Costs",
      icon: <DollarSign size={18} />,
      content: "We explicitly verify that the incorporation of affiliate tracking links introduces zero additional costs, hidden markups, or structural premium assessments to you as an entrepreneur. In numerous operational scenarios, our institutional integrations and partnerships allow S4HEL to deliver exclusive promotional discounts, optimized pricing matrices, or expedited setup velocities directly to our community."
    },
    {
      title: "3. Editorial Objectivity and Independence",
      icon: <ShieldAlert size={18} />,
      content: "S4HEL functions fundamentally as an independent corporate intelligence and academic research hub. The potential receipt of affiliate compensation does not influence our rigorous editorial auditing protocols, data evaluation pipelines, or jursidictional rating indices. We index, break down, and analyze services (such as registered agents, US corporate addresses, and digital neobanks) based strictly on speed, privacy compliance, and structural integrity."
    },
    {
      title: "4. Third-Party Brand Relations",
      icon: <Info size={18} />,
      content: "Our operational relationships with external vendors, affiliate networks (including Awin), and registered provider networks are strictly contractual on an enterprise level. S4HEL does not possess direct equity, regulatory liability, or internal executive control over the processing timelines, operational fulfillments, or support infrastructures of the third-party platforms referenced within our informational nexus."
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
            Affiliate <br /> <span className="text-[#64FFDA]">Disclosure</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-white/40">Protocol:</span>
            <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-md border border-[#64FFDA]/20 flex items-center gap-1.5">
              <CheckCircle2 size={10} /> FTC Compliant Node
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/40">Last Reviewed: {lastUpdated}</span>
          </div>
        </div>

        {/* Disclosure Content Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="space-y-12 relative z-10">
            {sections.map((section, idx) => (
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
                    {section.icon}
                  </div>
                  <h2 className="text-white text-base font-black uppercase tracking-wider">{section.title}</h2>
                </div>
                <p className="text-[#8892B0] text-xs md:text-[13px] leading-relaxed font-medium opacity-80 border-l border-white/5 pl-6 ml-4">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Corporate Address Footer Log */}
            <div className="pt-10 border-t border-white/5 ml-4 space-y-3">
              <h3 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <FileText size={12} /> Legal Operations Entity
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
            By accessing the research matrix and deploying configurations via S4HEL Online University, you acknowledge complete transparency concerning our commercial monetization routes. We preserve compliance frameworks strictly to ensure continuous, high-fidelity infrastructure access for global non-residents.
          </p>
        </div>

      </div>
    </div>
  );
}