"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function StripeSetupBlog() {
  const steps = [
    { t: "LLC Documentation", d: "Upload your Articles of Organization and EIN Confirmation Letter (CP 575) for verification." },
    { t: "US Bank Link", d: "Connect your Mercury or Relay bank account to receive payouts in USD." },
    { t: "Physical Address", d: "Use your professional US business address to pass Stripe's location requirements." },
    { t: "Tax Information", d: "Provide your EIN as the tax identification number to avoid 30% withholding tax." }
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
            backgroundImage: `radial-gradient(circle at 80% 20%, #635BFF, rgba(0,0,0,0)), radial-gradient(circle at 20% 80%, ${ACCENT}, rgba(0,0,0,0))`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(135deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Stripe <span className="text-[#635BFF]">Global</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.5em] max-w-xl">
            Accept Payments Anywhere in the World
          </p>
        </motion.div>

        {/* Content Section */}
        <article className="space-y-20 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">The Gateway to Revenue</h2>
            <p>
              For international entrepreneurs, Stripe is the ultimate gold standard for payment processing. Having a US LLC unlocks the full potential of Stripe, allowing you to bypass regional restrictions and access advanced features like Stripe Atlas, Climate, and Treasury.
            </p>
          </section>

          {/* Setup Steps */}
          <section className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, backgroundColor: "#112240" }}
                className="p-10 bg-[#0A192F] rounded-[50px] border border-white/5 transition-all"
              >
                <div className="text-[#635BFF] font-black mb-4 tracking-widest uppercase text-xs">Step 0{i+1}</div>
                <h4 className="font-black text-white uppercase text-sm mb-4">{step.t}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </section>

          {/* Compliance Warning */}
          <section className="bg-[#635BFF]/5 p-12 rounded-[60px] border border-[#635BFF]/20">
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">Avoid Account Bans</h3>
            <p className="text-sm leading-loose">
              Stripe&apos;s risk algorithms are strict. To ensure your account remains active, never use a VPN when accessing your dashboard. Always use a dedicated US IP address or your local IP if you have correctly provided your international home address in the &quot;Representative&quot; section while keeping the business address as US-based.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/services" 
                className="inline-block px-24 py-7 bg-[#635BFF] text-white rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(99,91,255,0.4)] transition-all duration-700"
              >
                Start Stripe Setup
              </Link>
            </motion.div>
          </section>

        </article>
      </div>
    </div>
  );
}