"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Award, Users, Globe, BookOpen, TrendingUp, 
  CheckCircle, Landmark, MapPin, Zap, Rocket 
} from "lucide-react";

const stats = [
  { label: "Active Countries", value: "50+", icon: <Globe size={32} /> },
  { label: "Graduated Founders", value: "2,500+", icon: <Users size={32} /> },
  { label: "Specialized Courses", value: "160+", icon: <BookOpen size={32} /> },
  { label: "Nations Served", value: "35+", icon: <MapPin size={32} /> },
  { label: "Corporate Structures", value: "1,200+", icon: <Landmark size={32} /> },
  { label: "Compliance Rate", value: "100%", icon: <CheckCircle size={32} /> },
];

export default function S4HEL_Victories() {
  return (
    <div className="min-h-screen bg-[#020c1b] text-white pt-40 pb-20 px-6 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-32">
          <span className="text-[#64FFDA] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Institutional Milestones</span>
          <h1 className="text-6xl md:text-[120px] font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
            Global <span className="text-[#64FFDA]">Victories</span>
          </h1>
          <p className="text-lg text-[#8892b0] max-w-3xl mx-auto italic leading-relaxed">
            From the initial formation of our first agency in Afghanistan to a global network of 50+ countries. S4HEL is the measured impact of borderless entrepreneurship.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, borderColor: "rgba(100, 255, 218, 0.3)" }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-[#112240]/40 border border-white/5 rounded-[40px] transition-all text-center group backdrop-blur-sm"
            >
              <div className="text-[#64FFDA] mb-8 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-6xl font-black uppercase mb-3 text-white tracking-tight">{stat.value}</h3>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8892b0]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* DETAILED IMPACT STORY */}
        <section className="bg-gradient-to-b from-[#112240]/40 to-transparent p-12 md:p-24 rounded-[60px] border border-white/5 shadow-2xl">
          <div className="flex items-center justify-center mb-16">
             <Rocket className="text-[#64FFDA] mr-4" size={40} />
             <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Our Academic Reach</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="border-l-2 border-[#64FFDA] pl-6">
                <h4 className="text-[#64FFDA] font-black uppercase text-[10px] tracking-widest mb-2">Pioneering in Frontier Markets</h4>
                <p className="text-[#8892b0] leading-relaxed italic text-lg">
                  S4HEL is proud to be the foundational pioneer in Afghanistan and Pakistan for modern e-commerce education. We initiated the first professional Shopify and Amazon FBA training pipelines in the region, effectively transitioning thousands of local founders from traditional retail models to high-velocity, borderless global merchant platforms.
                </p>
              </div>
              
              <div className="border-l-2 border-[#64FFDA] pl-6">
                <h4 className="text-[#64FFDA] font-black uppercase text-[10px] tracking-widest mb-2">Institutional Compliance Excellence</h4>
                <p className="text-[#8892b0] leading-relaxed italic text-lg">
                  Our formation agency track has empowered over 1,200 entities to achieve 'Good Standing' status in Wyoming and Delaware. We provide the technical blueprints for IRS filings, multi-jurisdictional tax mitigation, and robust corporate governance that our students use to scale their own formation agencies today.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#020c1b] p-10 rounded-[30px] border border-white/5 hover:border-[#64FFDA]/20 transition-all">
                <TrendingUp className="text-[#64FFDA] mb-6" size={30} />
                <h5 className="font-bold uppercase text-sm mb-3">Trading & Liquidity Analysis</h5>
                <p className="text-xs text-[#8892b0] italic leading-relaxed">We have successfully deployed advanced trading algorithms and Central Range Theory models to traders across 35+ countries. Our focus remains on institutional block execution and professional liquidity management.</p>
              </div>
              
              <div className="bg-[#020c1b] p-10 rounded-[30px] border border-white/5 hover:border-[#64FFDA]/20 transition-all">
                <Award className="text-[#64FFDA] mb-6" size={30} />
                <h5 className="font-bold uppercase text-sm mb-3">Technical Manual Library</h5>
                <p className="text-xs text-[#8892b0] italic leading-relaxed">With 160+ specialized courses, we have curated the web's deepest library of technical blueprints—spanning from complex API integration for e-commerce to federal taxation compliance for non-residents.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}