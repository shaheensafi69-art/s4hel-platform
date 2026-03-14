"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function BusinessAddressBlog() {
  const addressTypes = [
    { t: "Physical Presence", d: "A real commercial location that proves your business has a legitimate footprint in the US." },
    { t: "Mail Forwarding", d: "Digital scanning and physical forwarding of your IRS and legal documents to any country." },
    { t: "Bank Acceptance", d: "A verified address that meets strict KYC/AML requirements for US bank account approval." },
    { t: "Professional Image", d: "A prestigious US address to display on your website, invoices, and marketing materials." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-2xl backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Intelligence</span>
        </Link>
      </motion.div>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="address-glow-field" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(225deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#64FFDA]/5 blur-[120px] rounded-full" />
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Business <span className="text-[#64FFDA]">Address</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.6em] max-w-xl">
            Establishing Your Virtual Corporate Presence
          </p>
        </motion.div>

        {/* Article Body */}
        <article className="space-y-24 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-8">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">More Than Just a Mailbox</h2>
            <p>
              For a non-resident founder, a US Business Address is the foundation of your corporate identity. It’s not just about receiving mail; it’s about establishing a "Nexus" in the United States. Banks, payment processors like Stripe, and the IRS all require a valid physical address to verify that your entity is operational and reachable.
            </p>
          </section>

          {/* Core Pillars */}
          <section className="grid md:grid-cols-2 gap-8">
            {addressTypes.map((type, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, border: `1px solid ${ACCENT}40` }}
                className="p-12 bg-[#112240] rounded-[60px] border border-white/5 transition-all group"
              >
                <h4 className="font-black text-white uppercase text-xs tracking-[0.3em] mb-4 group-hover:text-[#64FFDA]">{type.t}</h4>
                <p className="text-sm opacity-60 leading-loose">{type.d}</p>
              </motion.div>
            ))}
          </section>

          {/* Banking Compliance Section */}
          <section className="relative p-12 bg-white/5 rounded-[60px] border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#64FFDA]/10 blur-3xl" />
            <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">The Banking Compliance Shield</h3>
            <p className="text-sm leading-relaxed mb-6">
              Modern fintech banks have advanced algorithms to detect "CMRA" (Commercial Mail Receiving Agency) addresses. If you use a cheap, generic virtual mailbox, your bank account application will likely be flagged. A <strong>Premium Business Address</strong> provides a unique suite number that appears as a physical office, significantly increasing your chances of approval.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xs uppercase font-bold text-white/80">
                <span className="w-2 h-2 bg-[#64FFDA] rounded-full shadow-[0_0_10px_#64FFDA]" />
                Avoid Automated Rejections
              </li>
              <li className="flex items-center gap-3 text-xs uppercase font-bold text-white/80">
                <span className="w-2 h-2 bg-[#64FFDA] rounded-full shadow-[0_0_10px_#64FFDA]" />
                Pass KYC Identity Verification
              </li>
            </ul>
          </section>

          {/* Final Call to Action */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/services" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Get Your US Address
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .address-glow-field {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1px 1px at 25% 15%, white, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 75% 65%, #64FFDA, rgba(0,0,0,0));
          background-size: 350px 350px;
          animation: driftAddress 180s linear infinite;
        }
        @keyframes driftAddress {
          from { background-position: 0 0; }
          to { background-position: -1000px 1000px; }
        }
      `}</style>
    </div>
  );
}