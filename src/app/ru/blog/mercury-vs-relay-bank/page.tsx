"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function BankingComparison() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت شناور */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-xl"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back</span>
        </Link>
      </motion.div>

      {/* انیمیشن پس‌زمینه: ذرات معلق (Floating Particles) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-[#64FFDA] rounded-full blur-xl"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* هیرو با انیمیشن ورود کشویی */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full py-20 rounded-[80px] mb-20 overflow-hidden border border-white/5 text-center"
          style={{ background: `radial-gradient(circle at top, #112240 0%, #020C1B 100%)` }}
        >
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.8em] mb-4 block"
          >
            The Ultimate Showdown
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Mercury <span className="text-[#64FFDA] italic font-light">vs</span> Relay
          </h1>
        </motion.div>

        {/* بخش مقایسه با کارت‌های انیمیشنی */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Mercury Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-[#112240] rounded-[60px] border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase italic">Mercury</h3>
            <p className="text-[#8892B0] mb-8 italic">The gold standard for tech startups. Known for its sleek UI and powerful investor-ready features.</p>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full" /> No Monthly Fees </li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full" /> High Yield Savings (Treasury) </li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full" /> Best-in-class API </li>
            </ul>
          </motion.div>

          {/* Relay Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-[#0A192F] rounded-[60px] border border-[#64FFDA]/10 relative group overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="text-3xl font-black text-[#64FFDA] mb-6 uppercase italic">Relay</h3>
            <p className="text-[#8892B0] mb-8 italic">The ultimate operational bank. Perfect for small teams needing detailed bookkeeping and multiple cards.</p>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-white rounded-full" /> Up to 20 Checking Accounts </li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-white rounded-full" /> 50 Physical/Virtual Cards </li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-white rounded-full" /> Direct QuickBooks Sync </li>
            </ul>
          </motion.div>
        </div>

        {/* نتیجه‌گیری نهایی */}
        <section className="text-center space-y-10">
          <h2 className="text-2xl font-black uppercase text-white tracking-widest">Which one to choose?</h2>
          <p className="text-[#8892B0] italic max-w-2xl mx-auto">
            If you are a solo-founder looking for a clean, professional experience: **Choose Mercury.** <br/>
            If you have a team and need complex spending controls: **Choose Relay.**
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-block"
          >
            <Link 
              href="/en/services" 
              className="px-20 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_0_50px_rgba(100,255,218,0.2)] hover:shadow-[0_0_80px_rgba(100,255,218,0.5)] transition-all duration-700"
            >
              Get Expert Advice
            </Link>
          </motion.div>
        </section>

      </div>
    </div>
  );
}