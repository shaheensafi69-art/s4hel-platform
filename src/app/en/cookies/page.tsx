"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cookie, Eye, ShieldCheck, Settings, ChevronLeft, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
  const lastUpdated = "May 19, 2026";

  const cookieSections = [
    {
      title: "1. What Are Cookies?",
      icon: <Cookie size={18} />,
      content: "Cookies are small text files packed with minimal data packets that are placed on your computer or mobile device by websites that you visit. They are widely utilized across global infrastructures to make websites work more efficiently, improve navigation velocity, and provide critical analytical telemetry to the owners of the network node."
    },
    {
      title: "2. How We Utilize Cookies",
      icon: <Eye size={18} />,
      content: "S4HEL Online University uses cookies to understand how you interact with our educational modules, preserve your regional preferences, and ensure our server resources adapt to your connection demands. This data is strictly compiled to elevate our global user experience and preserve structural framework performance."
    },
    {
      title: "3. Categories of Cookies We Deploy",
      icon: <Settings size={18} />,
      content: "We classify our structural cookies into three core layers: (A) Essential Cookies: Required strictly to execute core site operations, rendering, and security defenses. (B) Analytics Cookies: Powered by premium tracking networks to monitor aggregate user velocity, geographical density, and content engagement metrics. (C) Affiliate Tracking Cookies: Crucial for our operational survival; these allow our network partners (such as Awin) to verify that an external referral transaction was initiated from our educational nexus."
    },
    {
      title: "4. Your Autonomy and Cookie Management",
      icon: <ShieldCheck size={18} />,
      content: "You retain the absolute, unconstrained right to accept, limit, or entirely block cookies. Most modern web browser architectures allow you to manage your cookie preferences through their internal privacy settings. Please acknowledge that disabling essential cookies may introduce degradation patterns to certain automated features and dynamic content grids across the S4HEL ecosystem."
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
            Cookie <br /> <span className="text-[#64FFDA]">Policy Log</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-white/40">Protocol:</span>
            <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-md border border-[#64FFDA]/20 Fly items-center gap-1.5">
              <CheckCircle2 size={10} /> GDPR & ePrivacy Compliant
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/40">Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Cookie Policy Content Card */}
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-6 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="space-y-12 relative z-10">
            {cookieSections.map((item, idx) => (
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
                <FileText size={12} /> Privacy Infrastructure Authority
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

        {/* Final Educational Disclaimer */}
        <div className="mt-12 flex flex-col items-center text-center">
          <div className="w-16 h-[1px] bg-white/10 mb-6" />
          <p className="text-[10px] text-[#495670] uppercase tracking-wider leading-relaxed italic max-w-2xl">
            By remaining active on this educational domain, you comprehensively consent to our data architecture guidelines and tracking frameworks outlined within this cookie policy node. S4HEL reserves the explicit right to adjust these structural boundaries at any time.
          </p>
        </div>

      </div>
    </div>
  );
}