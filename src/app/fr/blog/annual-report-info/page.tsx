"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function AnnualReportBlog() {
  const requirements = [
    { t: "Good Standing", d: "Filing your annual report is the only way to keep your LLC in 'Active' status with the state." },
    { t: "Updated Information", d: "A chance to update the state on any changes to your business address or management." },
    { t: "State Fees", d: "Most states require a convenience fee to process your annual filing and keep your license valid." },
    { t: "Avoid Dissolution", d: "Missing the deadline can lead to 'Administrative Dissolution,' where the state shuts down your LLC." }
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Intelligence</span>
        </Link>
      </motion.div>

      {/* Background Stars (Fixed for Next.js) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 10% 20%, white, rgba(0,0,0,0)), radial-gradient(1.2px 1.2px at 80% 80%, ${ACCENT}, rgba(0,0,0,0))`,
            backgroundSize: '300px 300px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(135deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Annual <span className="text-[#64FFDA]">Reports</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.6em] max-w-xl">
            Ensuring Your Entity&apos;s Survival & Compliance
          </p>
        </motion.div>

        {/* Content Section */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">The Compliance Clock</h2>
            <p>
              In the United States, an LLC is a &quot;living&quot; entity that requires periodic check-ins with the Secretary of State. The <strong>Annual Report</strong> is a mandatory filing that confirms your business is still operational.
            </p>
          </section>

          {/* Core Requirements Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 hover:border-[#64FFDA]/20 transition-all"
              >
                <h4 className="font-black text-white uppercase text-xs tracking-widest mb-4">{req.t}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{req.d}</p>
              </motion.div>
            ))}
          </section>

          {/* State Comparison Box */}
          <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 space-y-8">
            <h3 className="text-2xl font-black uppercase text-white tracking-widest">State-Specific Deadlines</h3>
            <div className="grid gap-4">
              {[
                { s: "Wyoming", d: "Due 1st day of anniversary month" },
                { s: "Delaware", d: "Due by June 1st annually" },
                { s: "New Mexico", d: "No Annual Reports required" }
              ].map((state, idx) => (
                <div key={idx} className="flex justify-between p-6 bg-[#020C1B] rounded-3xl border border-white/5">
                  <span className="text-[#64FFDA] font-bold uppercase text-xs tracking-widest">{state.s}</span>
                  <span className="text-xs italic text-white/50 text-right">{state.d}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Warning Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-10 border-l-4 border-red-500/50 bg-red-500/5 rounded-r-[40px]"
          >
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">The Ultimate Risk</h4>
            <p className="text-xs opacity-70">If the state dissolves your LLC for non-compliance, you lose your personal liability protection. This means your personal assets could be at risk.</p>
          </motion.div>

          {/* Final Button */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/contact" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Manage My Compliance
              </Link>
            </motion.div>
          </section>

        </article>
      </div>
    </div>
  );
}