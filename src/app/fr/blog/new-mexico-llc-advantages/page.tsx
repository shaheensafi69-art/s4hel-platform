"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function NewMexicoBlog() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت با انیمیشن ورود */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-[0_0_20px_rgba(100,255,218,0.1)] backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Library</span>
        </Link>
      </motion.div>

      {/* زمینه کهکشانی غنی */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="stars-field-nm" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* هیرو بخش نیومکزیکو */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full py-24 rounded-[70px] mb-24 overflow-hidden border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `radial-gradient(circle at center, #112240 0%, #020C1B 100%)` }}
        >
          <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            New <span className="text-[#64FFDA]">Mexico</span>
          </h1>
          <p className="text-[#8892B0] text-sm md:text-base font-black uppercase tracking-[0.7em] italic">
            The Ghost Entity Strategy
          </p>
        </motion.div>

        {/* محتوای متنی جامع */}
        <article className="space-y-20">
          
          {/* بخش ۱: مقدمه */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black uppercase text-white tracking-widest flex items-center gap-4">
              <span className="w-10 h-[2px] bg-[#64FFDA]"></span>
              The Invisible Shield
            </h2>
            <p className="text-xl leading-relaxed text-[#8892B0] font-medium italic">
              While Wyoming and Delaware capture most of the headlines, savvy entrepreneurs often turn their gaze toward New Mexico. It is the only state in the U.S. that offers <strong>Statutory Anonymity</strong> by default, meaning the state does not collect or store the names of LLC members in its public database.
            </p>
          </motion.section>

          {/* بخش ۲: کارت‌های مزایا */}
          <section className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Ultimate Anonymity", d: "Your name will never appear on the Secretary of State website. Period." },
              { t: "No Annual Reports", d: "Zero yearly filing requirements or ongoing state fees to maintain status." },
              { t: "Economic Efficiency", d: "The most cost-effective jurisdiction for global founders and startups." },
              { t: "Asset Protection", d: "Strong charging order protections prevent personal creditors from seizing your business." }
            ].map((perk, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 hover:border-[#64FFDA]/30 transition-all group"
              >
                <h3 className="text-[#64FFDA] font-black uppercase text-sm tracking-widest mb-4">{perk.t}</h3>
                <p className="text-sm text-[#8892B0] leading-relaxed italic">{perk.d}</p>
              </motion.div>
            ))}
          </section>

          {/* بخش ۳: محتوای عمیق آموزشی */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white/5 p-12 rounded-[60px] border border-white/5 space-y-8"
          >
            <h3 className="text-2xl font-black uppercase text-white tracking-widest">A Deep Dive into Privacy</h3>
            <p className="text-[#8892B0] leading-loose">
              In most states, when you form an LLC, your name is entered into a public database. New Mexico operates differently. The "Articles of Organization" filed with the state only require the name of the LLC and the Registered Agent. <br/><br/>
              This creates a <strong>"Double-Blind"</strong> privacy structure. When combined with a professional Registered Agent service, your personal home address and legal name remain completely disconnected from your business entity in all public records.
            </p>
            <div className="p-8 bg-[#020C1B] rounded-[40px] border-l-4 border-[#64FFDA] italic text-sm">
              "For founders in sensitive industries or those who simply value their peace of mind, New Mexico provides a level of sovereign privacy that is unmatched in North America."
            </div>
          </motion.section>

          {/* بخش ۴: مقایسه استراتژیک (بدون قیمت) */}
          <section className="space-y-10">
            <h3 className="text-2xl font-black uppercase text-white tracking-widest text-center">Efficiency Comparison</h3>
            <div className="overflow-hidden rounded-[40px] border border-white/5 bg-[#112240]">
              <div className="grid grid-cols-3 p-8 border-b border-white/5 font-black uppercase text-[10px] tracking-widest text-[#64FFDA]">
                <div>State</div>
                <div>Formation Complexity</div>
                <div>Annual Maintenance</div>
              </div>
              <div className="grid grid-cols-3 p-8 border-b border-white/5 text-sm">
                <div className="text-white font-bold">New Mexico</div>
                <div className="text-white/60">Minimal</div>
                <div className="text-[#64FFDA] font-black uppercase italic text-xs">Zero Requirement</div>
              </div>
              <div className="grid grid-cols-3 p-8 border-b border-white/5 text-sm opacity-50">
                <div>Wyoming</div>
                <div>Low</div>
                <div>Annual Report Required</div>
              </div>
              <div className="grid grid-cols-3 p-8 text-sm opacity-50">
                <div>Delaware</div>
                <div>Moderate</div>
                <div>Franchise Tax Required</div>
              </div>
            </div>
          </section>

          {/* دکمه نهایی با انیمیشن Glow */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center pt-10"
          >
            <Link 
              href="https://www.registeredagentsinc.com/new-mexico-llc/" 
              target="_blank"
              className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_0_60px_rgba(100,255,218,0.3)] hover:shadow-[0_0_100px_rgba(100,255,218,0.6)] transition-all duration-700"
            >
              Go Anonymous Now
            </Link>
          </motion.div>

        </article>
      </div>

      <style jsx global>{`
        .stars-field-nm {
          width: 100%; height: 100%;
          background-image: radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 150px 150px, #64FFDA, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: driftNM 180s linear infinite;
        }
        @keyframes driftNM {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(5deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}