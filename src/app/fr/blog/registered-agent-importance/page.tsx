"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function RegisteredAgentBlog() {
  const responsibilities = [
    { t: "Legal Correspondence", d: "Receiving service of process and official government notices on behalf of your LLC." },
    { t: "Privacy Protection", d: "Using the agent's address on public records instead of your personal home address." },
    { t: "Compliance Alerts", d: "Notifying you of upcoming annual report deadlines to keep your company active." },
    { t: "Global Accessibility", d: "Allowing international founders to meet the 'physical presence' requirement in the US." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت به آرشیو بلاگ */}
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

      {/* افکت زمینه ذرات معلق */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="particles-agent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* هیرو بخش Registered Agent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `radial-gradient(circle at top right, #112240 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            The <span className="text-[#64FFDA]">Registered</span> Agent
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.6em] max-w-2xl">
            Your Legal Gateway and Privacy Shield in the United States
          </p>
        </motion.div>

        {/* محتوای بلاگ */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">Why is it Mandatory?</h2>
            <p>
              Every US state requires an LLC to have a Registered Agent. This is not a suggestion—it is a legal requirement. A Registered Agent must have a physical address in the state of formation and be available during normal business hours to receive official legal documents, such as tax notices or lawsuits.
            </p>
          </section>

          {/* مسئولیت‌ها - کارت‌های طراحی شده */}
          <section className="grid md:grid-cols-2 gap-8">
            {responsibilities.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: ACCENT }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 transition-all"
              >
                <h4 className="font-black text-white uppercase text-sm tracking-widest mb-4">{item.t}</h4>
                <p className="text-sm opacity-70 leading-relaxed italic">{item.d}</p>
              </motion.div>
            ))}
          </section>

          {/* بخش محافظت از حریم خصوصی */}
          <section className="bg-gradient-to-r from-[#112240] to-transparent p-12 rounded-[60px] border-l-4 border-[#64FFDA]">
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">Privacy is Power</h3>
            <p className="text-sm leading-loose">
              Without a professional Registered Agent, you would have to list your personal home address on the public Articles of Organization. This means anyone—creditors, marketers, or the public—could find your location. By using our professional service, our address is the only one that appears on public records, keeping your private life <strong>strictly private</strong>.
            </p>
          </section>

          {/* بخش سوالات متداول کوتاه */}
          <section className="space-y-8">
            <h3 className="text-2xl font-black uppercase text-white tracking-widest text-center">Important FAQ</h3>
            <div className="space-y-4">
              <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
                <h5 className="text-white font-bold mb-2">Can I be my own Registered Agent?</h5>
                <p className="text-sm opacity-60">Technically yes, but only if you have a physical address in the state and are always present. For international founders, this is impossible, making a professional service essential.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
                <h5 className="text-white font-bold mb-2">What happens if I don't have one?</h5>
                <p className="text-sm opacity-60">The state will likely dissolve your LLC, and you will lose your "Good Standing" status, which can lead to bank account closures and legal penalties.</p>
              </div>
            </div>
          </section>

          {/* دکمه نهایی */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/services" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Get a Registered Agent
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .particles-agent {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1.5px 1.5px at 15% 25%, #64FFDA, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 85% 75%, white, rgba(0,0,0,0));
          background-size: 200px 200px;
          animation: moveParticles 100s linear infinite;
        }
        @keyframes moveParticles {
          from { background-position: 0 0; }
          to { background-position: 500px 1000px; }
        }
      `}</style>
    </div>
  );
}