"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function VirtualPhoneBlog() {
  const benefits = [
    { t: "SMS Verification", d: "Receive mandatory 2FA codes for US banks, Stripe, and Amazon without a physical SIM card." },
    { t: "Professionalism", d: "Give your international clients a familiar +1 country code to call for support." },
    { t: "Global Access", d: "Manage your business calls and messages via a mobile app from anywhere in the world." },
    { t: "Cost Control", d: "Avoid expensive international roaming fees while keeping a permanent US presence." }
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

      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 50% 50%, white, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 20% 30%, ${ACCENT}, rgba(0,0,0,0))`,
            backgroundSize: '250px 250px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(45deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Virtual <span className="text-[#64FFDA]">Phone</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xl">
            The Digital Link to Your US Customers
          </p>
        </motion.div>

        {/* Content Section */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">Why You Need a US Number</h2>
            <p>
              Operating a US company from abroad requires seamless communication. A virtual phone service allows you to obtain a legitimate US phone number that works over the internet. This is essential for bypassing 2FA (Two-Factor Authentication) security layers that many US financial institutions require.
            </p>
          </section>

          {/* Benefits Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, border: `1px solid ${ACCENT}30` }}
                className="p-10 bg-[#112240] rounded-[50px] border border-white/5 transition-all"
              >
                <h4 className="font-black text-white uppercase text-xs tracking-widest mb-4">{benefit.t}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{benefit.d}</p>
              </motion.div>
            ))}
          </section>

          {/* Recommended Tools Box */}
          <section className="bg-white/5 p-12 rounded-[60px] border border-white/10">
            <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">Top Solutions for Founders</h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#020C1B] rounded-3xl border border-white/5 gap-4">
                <div>
                  <span className="text-white font-bold block uppercase tracking-wider">OpenPhone</span>
                  <span className="text-xs text-[#8892B0]">Best for professional team use and CRM integration.</span>
                </div>
                <span className="text-[#64FFDA] text-[10px] font-black uppercase border border-[#64FFDA]/30 px-3 py-1 rounded-full">Recommended</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#020C1B] rounded-3xl border border-white/5 gap-4">
                <div>
                  <span className="text-white font-bold block uppercase tracking-wider">Tello (E-Sim)</span>
                  <span className="text-xs text-[#8892B0]">Real US cellular number via E-Sim, ideal for banking SMS.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Tip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-10 border-l-4 border-[#64FFDA] bg-[#64FFDA]/5 rounded-r-[40px]"
          >
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Technical Note:</h4>
            <p className="text-xs opacity-70">Avoid using &quot;VOIP&quot; numbers for sensitive bank verifications if possible. Banks like Chase or Bank of America prefer numbers from real carriers. We always recommend Tello E-Sim for the highest compatibility.</p>
          </motion.div>

          {/* Call to Action */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/contact" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Get Support
              </Link>
            </motion.div>
          </section>

        </article>
      </div>
    </div>
  );
}