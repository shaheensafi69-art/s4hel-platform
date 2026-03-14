"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function MaintenanceBlog() {
  const complianceTasks = [
    { t: "BOI Reporting", d: "A mandatory federal filing with FinCEN. Failure to file can lead to massive daily fines." },
    { t: "Annual Reports", d: "Yearly filings with the Secretary of State to keep your entity in 'Good Standing'." },
    { t: "Registered Agent", d: "Your legal point of contact in the US. This service must be renewed annually." },
    { t: "Tax Compliance", d: "Even if you owe $0, you must file information returns (like Form 5472) to the IRS." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت کپسولی */}
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
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      {/* انیمیشن زمینه ستاره‌ای */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="stars-field-maintenance" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* هیرو بخش نگهداری */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(135deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Keep It <span className="text-[#64FFDA]">Active</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xl">
            The Science of LLC Longevity & Compliance
          </p>
        </motion.div>

        {/* محتوای تخصصی */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">Post-Formation Survival</h2>
            <p>
              Registering your LLC is just the beginning. To protect your limited liability shield and avoid the "Administrative Dissolution" of your company, you must adhere to state and federal maintenance requirements. In the eyes of the US government, a neglected LLC is a non-existent one.
            </p>
          </section>

          {/* تسک‌های مدیریتی - کارت‌های نئونی */}
          <section className="grid md:grid-cols-2 gap-8">
            {complianceTasks.map((task, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 hover:border-[#64FFDA]/30 transition-all group"
              >
                <div className="w-12 h-12 mb-6 rounded-full bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] font-black">
                  0{i + 1}
                </div>
                <h4 className="font-black text-white uppercase text-sm tracking-widest mb-4 group-hover:text-[#64FFDA]">{task.t}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{task.d}</p>
              </motion.div>
            ))}
          </section>

          {/* بخش هشدار BOI - بسیار مهم */}
          <section className="p-12 bg-[#64FFDA]/5 rounded-[60px] border border-[#64FFDA]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
            </div>
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">Crucial: BOI Reporting</h3>
            <p className="text-sm leading-loose mb-6 text-white/80">
              Starting January 1, 2024, the Corporate Transparency Act requires most LLCs to file a Beneficial Ownership Information (BOI) report with FinCEN. This is not a tax filing—it is a federal security requirement.
            </p>
            <div className="inline-block px-6 py-2 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase">
              Deadline: 90 Days after Formation
            </div>
          </section>

          {/* تمدید ایالتی */}
          <section>
            <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">State Renewal Cycles</h3>
            <p className="mb-8 text-sm">Every state has its own rhythm. Missing these deadlines can lead to your bank account being frozen and your company losing its legal protections.</p>
            <div className="space-y-4">
              <div className="flex justify-between p-6 bg-[#0A192F] rounded-3xl border border-white/5 items-center">
                <span className="text-white font-bold uppercase text-xs tracking-widest">Wyoming</span>
                <span className="text-xs text-[#64FFDA] italic">Due 1st day of anniversary month</span>
              </div>
              <div className="flex justify-between p-6 bg-[#0A192F] rounded-3xl border border-white/5 items-center">
                <span className="text-white font-bold uppercase text-xs tracking-widest">Delaware</span>
                <span className="text-xs text-[#64FFDA] italic">Due by June 1st annually</span>
              </div>
              <div className="flex justify-between p-6 bg-[#0A192F] rounded-3xl border border-white/5 items-center">
                <span className="text-white font-bold uppercase text-xs tracking-widest">New Mexico</span>
                <span className="text-xs text-[#64FFDA] italic">No Annual Report required</span>
              </div>
            </div>
          </section>

          {/* دکمه نهایی */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/contact" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Let Us Handle Compliance
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .stars-field-maintenance {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1px 1px at 40% 10%, #fff, rgba(0,0,0,0)),
            radial-gradient(1.2px 1.2px at 20% 80%, #64FFDA, rgba(0,0,0,0));
          background-size: 250px 250px;
          animation: driftMaintenance 120s linear infinite;
        }
        @keyframes driftMaintenance {
          from { background-position: 0 0; }
          to { background-position: 1000px 500px; }
        }
      `}</style>
    </div>
  );
}