"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Globe, Users, BookOpen, User, Rocket, TrendingUp, Award 
} from "lucide-react";

const stats = [
  { label: "Active Countries", value: "50+", desc: "Operating legal and educational frameworks across five continents." },
  { label: "Graduated Founders", value: "2,500+", desc: "Successful entrepreneurs launched into the global market." },
  { label: "Specialized Courses", value: "160+", desc: "Deep-dive technical modules for borderless scaling." },
  { label: "Student Nationalities", value: "30+", desc: "A diverse community of founders from 30+ distinct nations." },
];

const instructors = [
  { 
    name: "Shaheen Safi", 
    role: "Lead Strategist", 
    course: "Shopify & Corporate Formation", // این بخش اضافه شد تا ارور ندهد
    graduated: "1,200+ Founders", 
    desc: "Shaheen is the pioneer who introduced professional Shopify training in Afghanistan and Pakistan. He architected the S4HEL formation framework, allowing founders to launch US entities with 100% compliance.", 
    image: "/shaheen.jpeg"
  },
  { 
    name: "Sahel Salem", 
    role: "Global Retail Director", 
    course: "Amazon FBA/FBM & TikTok Shop", 
    graduated: "850+ Founders", 
    desc: "Sahel specializes in viral e-commerce pipelines. His expertise in Amazon logistics and TikTok Shop strategy has enabled students across the globe to build high-velocity retail empires.", 
    image: "/sahel.jpeg"  
  },
  { 
    name: "Mujtaba Rahmani", 
    role: "Financial Architect", 
    course: "Algorithmic Trading & Liquidity", 
    graduated: "450+ Founders", 
    desc: "Mujtaba leads our financial systems division. His focus is on institutional-level trading algorithms, liquidity analysis, and the deployment of advanced financial modeling for international traders.", 
    image: "/mujtaba.jpeg" 
  },
];

export default function S4HEL_Victories() {
  return (
    <div className="min-h-screen bg-[#020c1b] text-white pt-40 pb-20 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-32">
          <span className="text-[#64FFDA] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Institutional Milestones</span>
          <h1 className="text-6xl md:text-[120px] font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
            Global <span className="text-[#64FFDA]">Victories</span>
          </h1>
          <p className="text-lg text-[#8892b0] max-w-4xl mx-auto italic leading-relaxed">
            S4HEL is the measurable impact of borderless entrepreneurship. We have pioneered professional e-commerce and corporate education, empowering founders from 30+ nations to scale their retail empires across 50+ countries.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 bg-[#112240]/40 border border-white/5 rounded-[40px] text-center">
              <h3 className="text-5xl font-black uppercase mb-2 text-[#64FFDA]">{stat.value}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4">{stat.label}</p>
              <p className="text-[11px] text-[#8892b0] italic">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* INSTRUCTORS SECTION (Zig-Zag) */}
        <section className="space-y-24 mb-32">
          <h2 className="text-4xl font-black uppercase italic text-center mb-20 tracking-tighter">Academic Lead Instructors</h2>
          {instructors.map((ins, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 p-12 bg-[#112240]/20 rounded-[50px] border border-white/5`}
            >
              {/* عکس استاد */}
              <div className="w-64 h-64 rounded-[40px] border border-[#64FFDA]/20 overflow-hidden shrink-0 relative">
                  <Image 
                    src={ins.image} 
                    alt={ins.name} 
                    fill 
                    className="object-cover"
                  />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-4xl font-black uppercase italic">{ins.name}</h3>
                <span className="text-[#64FFDA] font-black uppercase text-xs tracking-widest block">{ins.role}</span>
                <p className="text-[#8892b0] leading-relaxed italic text-lg">{ins.desc}</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-[#020c1b] rounded-2xl border border-white/5">
                        <span className="text-[#64FFDA] text-[10px] font-black uppercase block">Expertise</span>
                        <span className="font-bold text-sm">{ins.course}</span>
                    </div>
                    <div className="p-4 bg-[#020c1b] rounded-2xl border border-white/5">
                        <span className="text-[#64FFDA] text-[10px] font-black uppercase block">Graduates</span>
                        <span className="font-bold text-sm">{ins.graduated}</span>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}