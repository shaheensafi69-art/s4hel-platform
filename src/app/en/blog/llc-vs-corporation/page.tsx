"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Layers, 
  Scale, 
  Users2, 
  BarChart3,
  CheckCircle2
} from "lucide-react";

export default function LLCvsCorporation() {
  const comparisonSteps = [
    {
      id: "01",
      title: "Define Your Presence",
      action: "Structural Analysis",
      desc: "An LLC (Limited Liability Company) offers a private, flexible structure with limited liability protection. The biggest advantage is 'Pass-Through Taxation', where profits go directly to owners without being taxed at the corporate level. Corporations, while more rigid, offer a global gateway for larger-scale operations.",
      link: "https://www.registeredagentsinc.com/llc-vs-corporation/",
      buttonText: "Compare Tax Structures"
    },
    {
      id: "02",
      title: "Analyze Key Features",
      action: "Management & Costs",
      desc: "LLCs are managed by Members or Managers with flexible profit-sharing rules and low initial costs. In contrast, Corporations require a formal Board of Directors and must hold annual shareholder meetings. If you plan to scale fast and issue stock, a Corporation is your path.",
      link: "https://www.registeredagentsinc.com/llc-vs-corporation/",
      buttonText: "View Management Rules"
    },
    {
      id: "03",
      title: "Evaluate Corporate Distributions",
      action: "Profit & Dividends",
      desc: "In a Corporation, profit is distributed as dividends to shareholders. This requires meticulous record-keeping and a mandatory board of directors. For an LLC, distributions are much more flexible, making it the preferred choice for small to medium-sized global ventures.",
      link: "https://www.registeredagentsinc.com/llc-vs-corporation/",
      buttonText: "Learn About Dividends"
    },
    {
      id: "04",
      title: "Plan for Long-Term Maintenance",
      action: "Compliance Strategy",
      desc: "Every business type has ongoing costs. Corporations face a higher administrative burden with mandatory meeting minutes and formal filings. LLCs enjoy minimum annual reporting in many states. You must verify which business type aligns with your 5-year fundraising and growth plan.",
      link: "https://www.registeredagentsinc.com/llc-vs-corporation/",
      buttonText: "Check Ongoing Costs"
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-6 leading-tight uppercase">
            LLC <span className="text-[#64FFDA]">VS</span> <br /> CORPORATION
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Your mandatory point of contact & comparison hub. A definitive guide for global entrepreneurs to choose the right legal gateway.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/llc-vs-corporation/hero.jpg" 
            alt="LLC vs Corporation Comparative Guide" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- EDUCATIONAL STEPS --- */}
        <div className="space-y-24 mb-32">
          {comparisonSteps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[150px_1fr] gap-10 items-start">
                <div className="hidden md:flex flex-col items-center text-center">
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

        {/* --- COMPARISON HUB --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Layers className="text-[#64FFDA]" /> Why Choose LLC?
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Limited liability protection for personal assets.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Direct pass-through taxation benefits.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Minimum annual reporting requirements.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Scale className="text-[#64FFDA]" /> Why Corporation?
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Stock issuance for professional fundraising.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> High credibility with international partners.</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Clear structure for a mandatory board of directors.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS & SUPPORT --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="p-8 bg-[#112240] rounded-[40px] border border-white/5">
                <Users2 className="text-[#64FFDA] mb-4" size={32} />
                <h4 className="text-white font-black uppercase mb-4 tracking-tighter italic">Support Services</h4>
                <p className="text-sm text-[#8892B0] italic leading-relaxed">
                    Our consultancy provides full compliance, legal filings, and banking support for both LLCs and Corporations.
                </p>
            </div>
            <div className="p-8 bg-[#112240] rounded-[40px] border border-white/5">
                <BarChart3 className="text-[#64FFDA] mb-4" size={32} />
                <h4 className="text-white font-black uppercase mb-4 tracking-tighter italic">Financial Tools</h4>
                <p className="text-sm text-[#8892B0] italic leading-relaxed">
                    Seamlessly integrate with QuickBooks, Mercury Bank, and Stripe for professional payment processing.
                </p>
            </div>
        </div>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Pick Your <br /> US Gateway</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Establish credibility and a solid business structure today. Prevent default state rules from controlling your future.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/llc-vs-corporation/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Start Formation Process
          </a>
        </div>

      </div>
    </div>
  );
}