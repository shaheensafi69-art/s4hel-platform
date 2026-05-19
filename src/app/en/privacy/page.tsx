"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Globe, ChevronLeft, Info, Database, UserCheck, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "May 19, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Database size={18} />,
      content: "S4HEL Online University collects personal identifiers, contact information (such as email addresses and legal names), and business intent parameters. This data is collected explicitly when you interact with our educational resource forms, register for corporate intelligence modules, or subscribe to our global corporate dispatches."
    },
    {
      title: "2. How We Use Your Data",
      icon: <Eye size={18} />,
      content: "Your information is processed to optimize your learning experience, deliver requested analytical updates, and fulfill regulatory compliance requirements. Additionally, aggregate, non-identifying interaction data is used via premium analytics platforms to monitor site performance, traffic patterns, and user engagement trends."
    },
    {
      title: "3. Data Retention and Security Protocols",
      icon: <Lock size={18} />,
      content: "All data transmissions across the S4HEL infrastructure are fortified using industry-standard SSL/TLS encryption mechanisms. We enforce strict administrative and technical safeguards to store your information securely, ensuring total mitigation against unauthorized access, disclosure, or alteration."
    },
    {
      title: "4. Cookies and Tracking Technologies",
      icon: <Info size={18} />,
      content: "We utilize operational cookies and standard tracking identifiers to preserve user preferences, enhance navigation velocity, and gather holistic market telemetry. You maintain full autonomy to modify your cookie preferences through your individual web browser architecture at any time."
    },
    {
      title: "5. Third-Party Sharing and Disclosures",
      icon: <Shield size={18} />,
      content: "S4HEL Online University does not sell, trade, or rent individual user data metrics to third-party marketing networks. Data is only shared with verified technical infrastructure providers or compliance agents strictly necessary to perform operational routines, or when mandated by federal United States legal jurisdictions."
    },
    {
      title: "6. Your Privacy Rights (GDPR & CCPA)",
      icon: <UserCheck size={18} />,
      content: "Depending on your geographical jurisdiction, you possess the absolute statutory right to request access to, correction of, or permanent deletion of your stored personal records. To exercise these compliance privileges, please submit a formal inquiry to our designated data administration channels."
    },
    {
      title: "7. Regulatory Governance Jurisdiction",
      icon: <Globe size={18} />,
      content: "S4HEL LLC is registered and governed under the state regulations of Montana, USA. Our structural data protection frameworks are engineered to operate in accordance with federal US privacy laws and international compliance benchmarks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#8892B0] pt-40 pb-20 px-6 font-sans selection:bg-[#64FFDA] selection:text-[#020C1B] relative overflow-hidden">
      
      {/* Background Architectural Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#64FFDA]/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/en" className="inline-flex items-center gap-2 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all">
            <ChevronLeft size={14} /> Back to Nexus
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 italic leading-none"
          >
            Privacy <br /> <span className="text-[#64FFDA]">Policy Statement</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-white/40">Status:</span>
            <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-md border border-[#64FFDA]/20">Active & Compliant</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/40">Last Reviewed: {lastUpdated}</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-16 backdrop-blur-3xl shadow-2xl">
          <div className="space-y-12">
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

            {/* Data Protection Officer Contact */}
            <div className="pt-10 border-t border-white/5 ml-4">
              <h3 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                <FileText size={12} /> Data Protection Officer Contact
              </h3>
              <p className="text-white font-bold text-lg md:text-xl font-mono">
                legal@s4hel.com
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mt-3 leading-normal max-w-md font-mono">
                S4HEL LLC <br />
                1001 S Main St Ste 500, Kalispell, Montana 59901, United States
              </p>
            </div>
          </div>
        </div>

        {/* Support Legal Disclaimer */}
        <div className="mt-12 p-8 border border-white/5 bg-white/[0.005] rounded-2xl text-center">
          <p className="text-[10px] text-[#495670] uppercase tracking-wider leading-relaxed italic">
            Disclaimer: S4HEL Online University functions as an independent education provider. All metrics and content hosted on this node are for informational purposes. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}