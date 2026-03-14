"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA"; // سبز-آبی روشن (آکوآ)

export default function DelawareBlog() {
  const advantages = [
    { t: "The Chancery Court", d: "A specialized court for business disputes with expert judges, not juries." },
    { t: "Investor Preference", d: "Venture capitalists and Angel investors often require a Delaware entity." },
    { t: "Tax Efficiency", d: "No state income tax for companies that do not conduct business within the state." },
    { t: "Flexible Structure", d: "Highly customizable management and ownership rules for founders." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت شناور و کپسولی */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-2xl backdrop-blur-md"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back</span>
        </Link>
      </motion.div>

      {/* زمینه ستاره‌ای متحرک */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="stars-layer" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* هیرو بخش دلاور - طراحی انتزاعی Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-80 md:h-[400px] rounded-[60px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center p-10"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${ACCENT}15 0%, transparent 50%), 
                        linear-gradient(135deg, #0A192F 0%, #020C1B 100%)`,
          }}
        >
          <div className="relative z-10">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
              Delaware <span className="text-[#64FFDA] font-light italic">Edge</span>
            </h1>
            <p className="text-[#8892B0] text-sm md:text-base font-bold uppercase tracking-[0.5em]">
              The Corporate Capital of the World
            </p>
          </div>
          {/* افکت نوری متحرک */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#64FFDA05_0%,transparent_70%)]" 
          />
        </motion.div>

        {/* محتوای متنی با فونت شیک */}
        <article className="space-y-16 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section>
            <h2 className="text-3xl font-black uppercase text-white mb-6 tracking-widest">Why Delaware?</h2>
            <p>
              More than 60% of Fortune 500 companies are incorporated in Delaware. For international founders, choosing Delaware is not just about taxes—it is about joining a globally recognized legal ecosystem that provides unparalleled stability and prestige for your business.
            </p>
          </section>

          {/* بخش مزایا با کارت‌های گرد برآمده */}
          <section className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#112240] p-10 rounded-[50px] border border-white/5 shadow-xl group hover:border-[#64FFDA]/30 transition-all"
              >
                <h4 className="font-black text-white uppercase text-sm tracking-widest mb-4 group-hover:text-[#64FFDA]">{adv.t}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{adv.d}</p>
              </motion.div>
            ))}
          </section>

          {/* نقل قول مدیریتی */}
          <section className="border-l-2 border-[#64FFDA] pl-10 py-4">
            <p className="text-2xl text-white font-light">
              "Delaware is the preferred jurisdiction for companies aiming for an IPO or seeking venture capital investment."
            </p>
          </section>

          {/* دکمه نهایی کپسولی */}
          <section className="text-center pt-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://www.registeredagentsinc.com/business-formation/" 
                target="_blank"
                className="inline-block px-20 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(100,255,218,0.3)] hover:shadow-[0_0_50px_rgba(100,255,218,0.6)] transition-all duration-700"
              >
                Incorporate in Delaware
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .stars-layer {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1px 1px at 30px 40px, white, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 120px 200px, #64FFDA, rgba(0,0,0,0));
          background-size: 250px 250px;
          animation: moveStars 200s linear infinite;
        }
        @keyframes moveStars {
          from { background-position: 0 0; }
          to { background-position: 1000px -1000px; }
        }
      `}</style>
    </div>
  );
}