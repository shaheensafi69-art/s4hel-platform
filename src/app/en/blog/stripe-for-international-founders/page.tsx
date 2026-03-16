"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  CreditCard, 
  Globe, 
  DollarSign, 
  Code2,
  BarChart3,
  ShieldCheck
} from "lucide-react";

export default function StripeSetupGuide() {
  const steps = [
    {
      id: "01",
      title: "Establishing US Payments Presence",
      action: "Financial Hub",
      desc: "Setting up Stripe is a critical step for global founders. It grants you access to the US banking system, allowing you to accept USD payments globally and link them directly to your US business checking account. This streamlines your finances for a truly international reach.",
      link: "https://stripe.com/atlas",
      buttonText: "Explore US Payments"
    },
    {
      id: "02",
      title: "Payment Service Specification",
      action: "Feature Suite",
      desc: "Choose from diverse Stripe features including credit & debit card processing, recurring billing for SaaS, and access to a developer-friendly API. This flexibility ensures that whether you're selling digital goods or services, your payment stack is robust.",
      link: "https://stripe.com/payments",
      buttonText: "View Payment Features"
    },
    {
      id: "03",
      title: "Real-time Transaction Management",
      action: "Live Monitoring",
      desc: "Receive Stripe payments and view logs in real-time. The platform allows you to reconcile accounts easily and integrate with diverse platforms like QuickBooks or Xero, giving you full visibility into your cash flow and financial health.",
      link: "https://stripe.com/dashboard",
      buttonText: "Check Dashboard Tools"
    },
    {
      id: "04",
      title: "Strategic Gateway Comparison",
      action: "Scale Globally",
      desc: "Evaluate Stripe against other gateways by reviewing fee structures and global reach. Stripe’s favorability with VCs and its ease of fundraising make it the preferred choice for startups looking to establish credibility with US partners and investors.",
      link: "https://stripe.com/global",
      buttonText: "Compare Gateways"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 selection:bg-[#64FFDA] selection:text-[#020C1B]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- BACK BUTTON --- */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link 
            href="/en/blog" 
            className="group inline-flex items-center gap-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors font-black uppercase tracking-[0.3em] text-[10px]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </Link>
        </motion.div>

        {/* --- HERO --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-6 leading-tight uppercase">
            STRIPE <br /> <span className="text-[#64FFDA]">SETUP GUIDE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A critical step for global entrepreneurs to secure a US payment presence. Master the Stripe Acquisition Process and scale your revenue.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/stripe-for-international-founders/hero.jpg" 
            alt="Stripe Setup Guide for Global Entrepreneurs" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- EDUCATIONAL STEPS --- */}
        <div className="space-y-24 mb-32">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[150px_1fr] gap-10 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-7xl font-black text-white/5 group-hover:text-[#64FFDA]/20 transition-all italic">{s.id}</span>
                  <div className="w-[2px] h-32 bg-gradient-to-b from-[#64FFDA]/50 to-transparent mt-4" />
                </div>
                
                <div className="bg-[#112240] p-8 md:p-12 rounded-[50px] border border-white/5 hover:border-[#64FFDA]/30 transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4 text-[#64FFDA]">
                    <MousePointer2 size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">{s.action}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase italic leading-tight">{s.title}</h3>
                  <p className="text-[#8892B0] leading-relaxed mb-8 text-lg">{s.desc}</p>
                  
                  <a 
                    href={s.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg"
                  >
                    {s.buttonText} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- INTEGRATIONS & WHY STRIPE --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <ShieldCheck className="text-[#64FFDA]" /> Why Have It?
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><DollarSign size={16} className="text-[#64FFDA] shrink-0" /> Accept USD payments globally</li>
                <li className="flex gap-2"><DollarSign size={16} className="text-[#64FFDA] shrink-0" /> Link to US business checking</li>
                <li className="flex gap-2"><DollarSign size={16} className="text-[#64FFDA] shrink-0" /> Establish credibility with US partners</li>
                <li className="flex gap-2"><DollarSign size={16} className="text-[#64FFDA] shrink-0" /> Favored by VCs for easy fundraising</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Code2 className="text-[#64FFDA]" /> Tech Stack
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Stripe integrates seamlessly with <strong>Google Drive</strong>, <strong>QuickBooks</strong>, and <strong>CRM</strong> systems. For developers, the API provides granular control over recurring billing and real-time reconciliation.
              </p>
            </div>
          </div>
        </section>

        {/* --- TOOLS & SUPPORT --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Stripe Partner Ecosystem</h4>
            <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold italic"><Globe size={24}/> RingCentral</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><BarChart3 size={24}/> Grasshopper</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><CreditCard size={24}/> US Virtual Phone</div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <CreditCard className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready to Get <br /> Paid?</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't let borders limit your revenue. Set up your Stripe account and join the ranks of global entrepreneurs.
          </p>
          <a 
            href="https://stripe.com/atlas" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Launch My Stripe
          </a>
        </div>

      </div>
    </div>
  );
}