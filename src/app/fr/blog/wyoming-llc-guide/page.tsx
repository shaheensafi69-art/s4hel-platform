"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// رنگ‌بندی جدید (Deep Navy & Ice Blue)
const ACCENT = "#64FFDA"; // سبز-آبی روشن (آکوآ)

export default function WyomingLLCGuide() {
  const formationSteps = [
    { title: "Choose a Name", desc: "Select a unique name that includes 'LLC' and check availability." },
    { title: "Appoint Registered Agent", desc: "Designate a Registered Agent with a physical address in Wyoming." },
    { title: "File Articles of Organization", desc: "Submit your formation documents to the Wyoming Secretary of State." },
    { title: "Create Operating Agreement", desc: "Outline your LLC's ownership and operating procedures (Internal)." },
    { title: "Obtain an EIN", desc: "Apply for a Federal Tax ID from the IRS for banking and taxes." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت هوشمند و کپسولی */}
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

      {/* ۱. پس‌زمینه ستاره‌ای متحرک (Pure CSS) */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="stars-layer" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ۲. بخش هیرو (جایگزین عکس) - Glassmorphism Gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[50px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center text-center p-10"
          style={{
            background: `radial-gradient(circle at 70% 20%, ${ACCENT}20 0%, transparent 40%), 
                        radial-gradient(circle at 10% 80%, #112240 0%, #0A192F 100%)`,
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.7), inset 0 0 100px rgba(100,255,218,0.05)`
          }}
        >
          {/* افکت نوری کهکشانی */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#64FFDA10_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Wyoming <span className="font-light">LLC</span>
            </h1>
            <p className="text-[#64FFDA] text-lg font-bold uppercase tracking-[0.4em] drop-shadow-[0_2px_5px_rgba(100,255,218,0.2)]">
              The Sovereign Shield for Global Assets
            </p>
          </div>
        </motion.div>

        {/* ۳. محتوای متنی بلاگ */}
        <article className="space-y-16 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-black uppercase text-white mb-6 tracking-wide">The Gold Standard of Privacy</h2>
            <p>
              Establishing a US LLC in Wyoming is widely considered the ultimate strategic move for international entrepreneurs. Known for its business-friendly laws and ironclad asset protection statutes, a Wyoming LLC provides the prestige of a US entity while maintaining maximum global confidentiality.
            </p>
          </section>

          {/* Core Advantages - گرید لوکس */}
          <section className="bg-[#112240] p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#64FFDA]/5 blur-[80px] rounded-full" />
             <h3 className="text-2xl font-black uppercase text-[#64FFDA] mb-10 tracking-widest relative z-10">Strategic Perks</h3>
             <div className="grid md:grid-cols-2 gap-10 relative z-10">
                {[
                  { t: "Absolute Anonymity", d: "Wyoming does not require LLC members or managers to be listed in public records." },
                  { t: "Zero State Income Tax", d: "Benefit from no state taxes on corporate income, personal income, or franchise fees." },
                  { t: "Robust Asset Protection", d: "Superior charging order protection limits creditor access to your business assets." },
                  { t: "Global Accessibility", d: "100% foreign ownership is allowed, with no residency requirements." }
                ].map(perk => (
                  <div key={perk.t} className="flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 bg-[#64FFDA] rounded-full shadow-[0_0_10px_#64FFDA]" />
                    <div>
                      <h4 className="font-black text-white uppercase text-sm tracking-widest mb-2">{perk.t}</h4>
                      <p className="text-sm opacity-80">{perk.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Formation Steps - لیست گرد */}
          <section>
            <h3 className="text-2xl font-black uppercase text-white mb-10 tracking-widest">Formation Blueprint</h3>
            <div className="space-y-6">
              {formationSteps.map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-[#0A192F] rounded-full border border-white/5 items-center hover:border-[#64FFDA]/30 transition-all duration-500">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#112240] border border-[#64FFDA]/20 text-[#64FFDA] font-black text-2xl shadow-[0_0_15px_rgba(100,255,218,0.1)]">
                    {i + 1}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <h4 className="font-black text-white uppercase tracking-widest text-sm mb-1">{step.title}</h4>
                     <p className="text-xs opacity-70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Call - دکمه گرد پر زرق و برق */}
          <section className="text-center pt-20">
            <Link 
              href="https://www.registeredagentsinc.com/business-formation/" 
              target="_blank"
              className="inline-block px-20 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(100,255,218,0.4)] hover:shadow-[0_0_80px_rgba(100,255,218,0.7)] transition-all duration-700"
            >
              Form Your Shield
            </Link>
          </section>

        </article>

      </div>

      {/* استایل کهکشانی و ستاره‌ای */}
      <style jsx global>{`
        body { background: #020C1B; }
        ::-webkit-scrollbar { width: 5px; background: #0A192F; }
        ::-webkit-scrollbar-thumb { background: #64FFDA; border-radius: 10px; }
        .stars-layer {
          position: fixed; inset: 0;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 100px, #64FFDA, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: moveStars 180s linear infinite;
        }
        @keyframes moveStars {
          from { background-position: 0 0; }
          to { background-position: 1000px 1000px; }
        }
      `}</style>
    </div>
  );
}