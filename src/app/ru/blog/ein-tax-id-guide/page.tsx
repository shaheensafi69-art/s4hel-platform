"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function EINBlog() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت شناور - با SVG مستقیم برای جلوگیری از ارور */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-xl"
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

      {/* زمینه ستاره‌ای */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="stars-layer-ein" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* هیرو بخش EIN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-72 rounded-[60px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, #112240 0%, #020C1B 100%)`,
          }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            EIN <span className="text-[#64FFDA]">Mastery</span>
          </h1>
          <p className="text-[#8892B0] text-[10px] font-black uppercase tracking-[0.5em]">
            Federal Tax Identity for Non-Residents
          </p>
        </motion.div>

        <article className="space-y-16 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section>
            <h2 className="text-3xl font-black uppercase text-white mb-6 tracking-widest">What is an EIN?</h2>
            <p>
              The Employer Identification Number (EIN) is your business's legal identity in the US. For non-residents, it is the most critical document after formation to access the global financial system.
            </p>
          </section>

          {/* باکس آموزشی گرد (Pro Tip) */}
          <section className="p-10 bg-[#112240] rounded-[50px] border border-[#64FFDA]/10 relative">
            <div className="absolute -top-4 -left-4 px-6 py-2 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase">Tax Insight</div>
            <p className="text-white">
              International founders do NOT need a Social Security Number (SSN) to get an EIN. You can apply using Form SS-4 through our specialized channels.
            </p>
          </section>

          {/* لیست مراحل کپسولی */}
          <section>
            <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">Process Blueprint</h3>
            <div className="space-y-4">
              {[
                "Accurate SS-4 Preparation",
                "Designating the Responsible Party",
                "Submission via IRS Global Channels",
                "Digital Delivery of Confirmation"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-full border border-white/5">
                  <span className="text-[#64FFDA] font-black text-xs uppercase tracking-tighter">0{i+1}</span>
                  <p className="text-sm text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* دکمه نهایی */}
          <div className="text-center pt-10">
            <Link 
              href="https://www.registeredagentsinc.com/ein-tax-id/" 
              target="_blank"
              className="inline-block px-16 py-5 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all duration-500"
            >
              Get EIN Support
            </Link>
          </div>

        </article>
      </div>

      <style jsx global>{`
        .stars-layer-ein {
          width: 100%; height: 100%;
          background-image: radial-gradient(1px 1px at 50px 50px, white, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 150px 250px, #64FFDA, rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: slowStars 250s linear infinite;
        }
        @keyframes slowStars {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}