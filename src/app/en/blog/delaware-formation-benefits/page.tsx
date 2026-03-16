"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Gavel, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Coins
} from "lucide-react";

export default function DelawareFormationBenefits() {
  const benefits = [
    {
      id: "01",
      title: "The Court of Chancery",
      action: "Legal Excellence",
      desc: "Delaware has a specialized court for business disputes with judges who are experts in corporate law. This means faster and more predictable legal outcomes for your business.",
      link: "https://www.registeredagentsinc.com/delaware-incorporation/",
      buttonText: "Explore Delaware Law"
    },
    {
      id: "02",
      title: "Tax Optimization",
      action: "Maximize Profits",
      desc: "If you don't conduct business within the state of Delaware, there is no state corporate income tax. It's the perfect environment for holding companies and tech startups.",
      link: "https://www.registeredagentsinc.com/delaware-registered-agent/",
      buttonText: "View Tax Benefits"
    },
    {
      id: "03",
      title: "Investor Magnet",
      action: "Venture Capital Ready",
      desc: "Most Venture Capitalists and Angel Investors prefer Delaware C-Corps. Forming here makes your business significantly more attractive for future fundraising and IPOs.",
      link: "https://www.registeredagentsinc.com/delaware-incorporation/",
      buttonText: "Start Fundraising Path"
    },
    {
      id: "04",
      title: "Privacy & Anonymity",
      action: "Identity Protection",
      desc: "Delaware offers high levels of privacy for directors and officers. Your personal information can be kept off the public record, providing a layer of security.",
      link: "https://www.registeredagentsinc.com/delaware-registered-agent/",
      buttonText: "Secure Your Identity"
    },
    {
      id: "05",
      title: "Operational Flexibility",
      action: "Global Management",
      desc: "You can be the sole director, shareholder, and officer. There are no requirements to be a US citizen or resident to manage your Delaware entity globally.",
      link: "https://www.registeredagentsinc.com/delaware-incorporation/",
      buttonText: "Launch Delaware Entity"
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
            WHY INCORPORATE <br /> IN <span className="text-[#64FFDA]">DELAWARE?</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            The gold standard for US business. Learn why 60% of Fortune 500 companies call Delaware their legal home.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/delaware-formation-benefits/hero.jpg" 
            alt="Advantages of Incorporating in Delaware Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- THE BENEFITS STEPS --- */}
        <div className="space-y-24 mb-32">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[150px_1fr] gap-10 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-7xl font-black text-white/5 group-hover:text-[#64FFDA]/20 transition-all">{b.id}</span>
                  <div className="w-[2px] h-32 bg-gradient-to-b from-[#64FFDA]/50 to-transparent mt-4" />
                </div>
                
                <div className="bg-[#112240] p-8 md:p-12 rounded-[50px] border border-white/5 hover:border-[#64FFDA]/30 transition-all shadow-xl">
                  <div className="flex items-center gap-3 mb-4 text-[#64FFDA]">
                    <MousePointer2 size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">{b.action}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase italic leading-tight">{b.title}</h3>
                  <p className="text-[#8892B0] leading-relaxed mb-8 text-lg">{b.desc}</p>
                  
                  <a 
                    href={b.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg"
                  >
                    {b.buttonText} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- COMPARISON BOX --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center justify-center md:justify-start gap-3 italic">
                <Gavel className="text-[#64FFDA]" /> Legal Framework
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Unlike other states, Delaware's Court of Chancery uses no juries, only judges who are specialists in business law, ensuring efficient and sophisticated resolution for founders.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center justify-center md:justify-start gap-3 italic">
                <TrendingUp className="text-[#64FFDA]" /> Scalability
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                As your business grows from a solo project to a global corporation, Delaware's flexible structure accommodates every stage of your evolution seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* --- THE INVESTOR'S CHOICE --- */}
        <section className="mb-32 border-l-4 border-[#64FFDA]/50 bg-[#64FFDA]/5 p-8 rounded-r-[30px]">
          <h4 className="text-[#64FFDA] font-black mb-4 uppercase tracking-widest flex items-center gap-2 italic">
            <Coins size={20} /> Venture Capital Standard
          </h4>
          <p className="text-sm text-[#8892B0] italic leading-relaxed">
            Did you know? Over 65% of all Fortune 500 companies are incorporated in Delaware. If you plan to raise money from US investors, a Delaware C-Corp is often non-negotiable.
          </p>
        </section>

        {/* --- FINAL CTA --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <Zap className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready for <br /> Global Growth?</h2>
          <a 
            href="https://www.registeredagentsinc.com/delaware-incorporation/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Incorporate in Delaware
          </a>
        </div>

      </div>
    </div>
  );
}