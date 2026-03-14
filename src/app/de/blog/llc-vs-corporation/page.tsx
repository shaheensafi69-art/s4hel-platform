"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function ComparisonBlog() {
  const diffs = [
    { t: "Taxation", llc: "Pass-through (No double tax)", corp: "Double Taxation (Corp + Dividends)" },
    { t: "Ownership", llc: "Flexible (Members)", corp: "Strict (Shareholders & Board)" },
    { t: "Complexity", llc: "Simple / Minimal Paperwork", corp: "High / Formal Meetings Required" },
    { t: "Funding", llc: "Limited to Members", corp: "Ideal for VC & Stock Issuance" }
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

      {/* Background Glow */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, ${ACCENT}, rgba(0,0,0,0)), radial-gradient(circle at 70% 70%, #112240, rgba(0,0,0,0))`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(135deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            LLC vs <span className="text-[#64FFDA]">Corp</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xl">
            Choosing the Right Legal Architecture
          </p>
        </motion.div>

        {/* Comparison Table Section */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">The Great Debate</h2>
            <p>
              One of the first and most critical decisions you will make as a founder is choosing your business structure. While both offer liability protection, they differ significantly in tax treatment, management flexibility, and their ability to attract outside capital.
            </p>
          </section>

          {/* Comparison Cards */}
          <section className="grid gap-6">
            {diffs.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="grid md:grid-cols-3 p-8 bg-[#112240] rounded-[40px] border border-white/5 items-center"
              >
                <div className="text-white font-black uppercase text-xs tracking-widest mb-4 md:mb-0">{item.t}</div>
                <div className="text-sm border-l border-white/10 pl-6 mb-2 md:mb-0">
                   <span className="text-[#64FFDA] block text-[10px] uppercase font-black mb-1">LLC</span>
                   {item.llc}
                </div>
                <div className="text-sm border-l border-white/10 pl-6">
                   <span className="text-white/40 block text-[10px] uppercase font-black mb-1">Corporation</span>
                   {item.corp}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Why LLC is usually better for you */}
          <section className="bg-white/5 p-12 rounded-[60px] border border-white/10">
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">The Winner for Non-Residents?</h3>
            <p className="text-sm leading-loose">
              For 90% of international entrepreneurs, the <strong>LLC (Limited Liability Company)</strong> is the superior choice. It offers the protection of a corporation without the administrative headache. Most importantly, an LLC allows for &quot;Pass-Through Taxation,&quot; meaning the company itself doesn&apos;t pay taxes; instead, the profits flow directly to the owners, avoiding double taxation.
            </p>
          </section>

          {/* Expert Insight */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-10 border-l-4 border-[#64FFDA] bg-[#64FFDA]/5 rounded-r-[40px]"
          >
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">When to Choose Corporation:</h4>
            <p className="text-xs opacity-70">If your ultimate goal is to raise money from Silicon Valley VCs or eventually go public (IPO), a Delaware C-Corp is the industry standard. Otherwise, stick with the flexibility of an LLC.</p>
          </motion.div>

          {/* Call to Action */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/contact" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Get Expert Advice
              </Link>
            </motion.div>
          </section>

        </article>
      </div>
    </div>
  );
}