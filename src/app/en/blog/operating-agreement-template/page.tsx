"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function OperatingAgreementBlog() {
  const sections = [
    { t: "Ownership Percentage", d: "Clearly defining who owns what percentage of the LLC to avoid future disputes." },
    { t: "Management Structure", d: "Specifying whether the LLC is Member-Managed or Manager-Managed." },
    { t: "Profit Distribution", d: "Rules on how and when profits are shared among the members." },
    { t: "Dissolution Protocol", d: "A clear exit strategy and instructions on how to close the business if needed." }
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

      {/* Galaxy Background Effect */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="stars-agreement" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(225deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Operating <span className="text-[#64FFDA]">Agreement</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xl text-center">
            The Private Constitution of Your Business Entity
          </p>
        </motion.div>

        {/* Content */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">Beyond Incorporation</h2>
            <p>
              While the Articles of Organization create your LLC in the eyes of the state, the Operating Agreement creates the internal rules of your company. This is a <strong>private internal document</strong> that governs the financial and functional decisions of the business, including rules, regulations, and provisions.
            </p>
          </section>

          {/* Core Pillars */}
          <section className="grid md:grid-cols-2 gap-8">
            {sections.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 shadow-xl"
              >
                <h4 className="font-black text-[#64FFDA] uppercase text-xs tracking-widest mb-4">{item.t}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </section>

          {/* Why Banks Require It */}
          <section className="bg-white/5 p-12 rounded-[60px] border border-white/10">
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">The Banking Key</h3>
            <p className="text-sm leading-loose">
              If you are a non-resident opening a US bank account remotely (e.g., with Mercury or Relay), the bank will almost certainly ask for your Operating Agreement. They use this to verify who has the legal authority to sign on behalf of the company and to ensure the business is structured properly. Without it, your banking application is likely to be rejected.
            </p>
          </section>

          {/* Professional Tip */}
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="p-8 border-l-4 border-[#64FFDA] bg-[#112240] rounded-r-[30px]"
          >
            <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">Pro Strategy:</p>
            <p className="text-xs opacity-60">Even for Single-Member LLCs, an Operating Agreement is vital to separate your personal assets from your business assets, reinforcing the "Limited Liability" protection of your entity.</p>
          </motion.div>

          {/* Call to Action */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/services" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Draft My Agreement
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .stars-agreement {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1.2px 1.2px at 30% 40%, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 70% 80%, #64FFDA, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: moveStars 150s linear infinite;
        }
        @keyframes moveStars {
          from { background-position: 0 0; }
          to { background-position: -1000px 500px; }
        }
      `}</style>
    </div>
  );
}