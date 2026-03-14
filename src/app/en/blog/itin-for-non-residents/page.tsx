"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function ITINBlog() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت هوشمند */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-2xl"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Intelligence</span>
        </Link>
      </motion.div>

      {/* انیمیشن ذرات معلق یخی در پس‌زمینه */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, 50, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{ duration: Math.random() * 20 + 10, repeat: Infinity }}
            className="absolute w-1 h-1 bg-[#64FFDA] rounded-full blur-sm"
            style={{ top: Math.random() * 100 + "%", left: Math.random() * 100 + "%" }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* هیرو بخش ITIN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full py-24 rounded-[80px] mb-24 overflow-hidden border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(135deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            ITIN <span className="text-[#64FFDA] italic font-light">Protocol</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.8em]">
            Personal Tax Identity for Global Citizens
          </p>
        </motion.div>

        <article className="space-y-24">
          
          {/* بخش ۱: تعریف مفهوم */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">Beyond the Corporate Veil</h2>
            <p className="text-xl leading-relaxed text-[#8892B0] font-medium italic">
              While your LLC has its own EIN, you as a non-resident individual may require an **Individual Taxpayer Identification Number (ITIN)**. This is a tax processing number issued by the IRS for those who are not eligible for a Social Security Number but have US tax filing or reporting requirements.
            </p>
          </motion.section>

          {/* بخش ۲: چرا به آن نیاز دارید؟ (باکس‌های کپسولی) */}
          <section className="space-y-10">
            <h3 className="text-2xl font-black uppercase text-white tracking-widest text-center">Strategic Necessity</h3>
            <div className="grid gap-6">
              {[
                { t: "Compliance", d: "Legally file your US federal tax returns (Form 1040-NR) as a foreign owner." },
                { t: "Financial Access", d: "Some high-tier banks and payment processors require an ITIN for identity verification." },
                { t: "Tax Treaties", d: "Claim tax treaty benefits to reduce or eliminate withholding on US-source income." },
                { t: "Credit Building", d: "An ITIN is the first step toward building a personal US credit history." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 20 }}
                  className="p-8 bg-[#112240] rounded-full border border-white/5 flex items-center gap-8 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#020C1B] border border-[#64FFDA]/20 flex items-center justify-center text-[#64FFDA] font-black group-hover:bg-[#64FFDA] group-hover:text-[#020C1B] transition-all">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">{item.t}</h4>
                    <p className="text-sm text-[#8892B0] italic">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* بخش ۳: فرآیند بدون پاسپورت فیزیکی */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#112240] p-16 rounded-[70px] border border-white/5 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#64FFDA]/5 blur-[100px] rounded-full" />
             <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">The Certified Acceptance Agent (CAA) Path</h3>
             <p className="text-[#8892B0] leading-loose italic mb-10">
               The biggest fear for international founders is mailing their original passport to the IRS. By utilizing a **Certified Acceptance Agent**, you can avoid this entirely. A CAA is authorized by the IRS to verify your identity documents in person or via video call, allowing you to keep your passport safely in your hands while the ITIN is processed.
             </p>
             <div className="inline-block px-8 py-3 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-[10px] font-black uppercase tracking-widest">
               Secure Verification Protocol
             </div>
          </motion.section>

          {/* بخش ۴: مراحل نهایی */}
          <section className="space-y-12">
            <h3 className="text-2xl font-black uppercase text-white tracking-widest text-center">Workflow Sequence</h3>
            <div className="flex flex-col md:flex-row gap-8">
              {["Document Review", "Identity Verification", "IRS Submission", "ITIN Assignment"].map((step, i) => (
                <div key={i} className="flex-1 p-8 bg-white/5 rounded-[40px] border border-white/5 text-center hover:bg-[#64FFDA]/5 transition-all">
                  <div className="text-[#64FFDA] font-black mb-4">Step {i+1}</div>
                  <div className="text-sm text-white font-bold uppercase tracking-widest leading-tight">{step}</div>
                </div>
              ))}
            </div>
          </section>

          {/* دکمه نهایی */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center pt-10"
          >
            <Link 
              href="/en/services" 
              className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-10px_rgba(100,255,218,0.3)] transition-all duration-700"
            >
              Secure Your ITIN Identity
            </Link>
          </motion.div>

        </article>
      </div>
    </div>
  );
}