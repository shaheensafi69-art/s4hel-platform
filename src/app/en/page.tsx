"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function HomePage() {
  const services = [
    { title: "LLC Formation", desc: "Complete legal registration in Wyoming, Delaware, or New Mexico with all state fees included.", icon: "🏛️", link: "/en/services" },
    { title: "EIN Acquisition", desc: "Secure your Federal Tax ID from the IRS for banking and global payment processing.", icon: "🔑", link: "/en/services" },
    { title: "Registered Agent", desc: "Maintain a professional legal presence and shield your personal privacy from public records.", icon: "🛡️", link: "/en/services" },
    { title: "Business Address", desc: "Get a prestigious US physical address for banking and professional correspondence.", icon: "📍", link: "/en/services" },
  ];

  const blogs = [
    { 
      title: "Stripe Setup", 
      preview: "Unlock global revenue by integrating Stripe with your US entity. Learn the hidden compliance steps...", 
      category: "Payments",
      link: "/en/blog/stripe-for-international-founders"
    },
    { 
      title: "LLC vs Corp", 
      preview: "Pass-through taxation or venture capital? Deciding between an LLC and a C-Corp for your US empire...", 
      category: "Legal Architecture",
      link: "/en/blog/llc-vs-corporation"
    },
    { 
      title: "Annual Report", 
      preview: "Your company is a living entity. Stay in good standing by mastering state filing deadlines and fees...", 
      category: "Compliance",
      link: "/en/blog/annual-report-compliance"
    },
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] selection:bg-[#64FFDA] selection:text-[#020C1B] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] md:h-[600px] bg-gradient-to-b from-[#64FFDA]/5 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full"
        >
          <span className="text-[#64FFDA] font-mono text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.8em] mb-4 md:mb-6 block">
            Infrastructure for International Founders
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[120px] font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9] break-words">
            S4HEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-white to-[#64FFDA] animate-gradient-x">
              INTELLIGENCE
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#8892B0] text-sm md:text-xl font-medium italic mb-10 md:mb-14 leading-relaxed opacity-80 px-4">
            Expert LLC formation, compliance monitoring, and financial architecture designed specifically for non-resident entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 px-6">
            <Link href="/en/services" className="group relative px-8 md:px-14 py-4 md:py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] overflow-hidden transition-all duration-500">
              <span className="relative z-10">Launch My LLC</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link href="/en/contact" className="px-8 md:px-14 py-4 md:py-6 border border-white/20 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-white/5 transition-all text-white">
              Consultation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20 md:py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">The Ecosystem</h2>
            <p className="text-[#8892B0] text-sm md:text-base italic font-medium">Everything you need to operate a US business from anywhere in the world.</p>
          </div>
          <Link href="/en/services" className="text-[#64FFDA] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:opacity-70 transition-opacity border-b border-[#64FFDA] pb-2">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 md:p-10 bg-[#112240]/50 rounded-[40px] md:rounded-[60px] border border-white/5 backdrop-blur-sm flex flex-col h-full"
            >
              <div className="text-3xl mb-6">{service.icon}</div>
              <h3 className="text-white font-black uppercase text-xs md:text-sm tracking-widest mb-4">{service.title}</h3>
              <p className="text-[11px] md:text-xs text-[#8892B0] leading-loose mb-8 flex-grow italic">{service.desc}</p>
              <Link href={service.link} className="text-[#64FFDA] text-[10px] font-black uppercase tracking-widest group">
                Explore <span className="group-hover:pl-2 transition-all">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intelligence (Blog) Section */}
      <section className="relative z-10 py-20 md:py-32 px-6 bg-[#112240]/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">Intelligence</h2>
            <p className="text-[#64FFDA] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Global Business Insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((blog, i) => (
              <Link key={i} href={blog.link} className="group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative h-[400px] md:h-[450px] rounded-[50px] md:rounded-[70px] overflow-hidden border border-white/10 bg-[#020C1B] shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center overflow-hidden px-4">
                    <span className="text-6xl md:text-[120px] font-black uppercase leading-none break-all text-center">
                      {blog.title}
                    </span>
                  </div>

                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <span className="text-[#64FFDA] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] block border-l-2 border-[#64FFDA] pl-4">
                      {blog.category}
                    </span>
                    
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#64FFDA] transition-colors leading-none">
                        {blog.title}
                      </h4>
                      <p className="text-[12px] md:text-sm text-[#8892B0] font-medium leading-relaxed italic line-clamp-3 mb-6">
                        {blog.preview}
                      </p>
                      <span className="text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest border border-white/10 px-5 py-2.5 rounded-full group-hover:bg-white group-hover:text-[#020C1B] transition-all inline-block">
                        Read Analysis
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative z-10 py-24 md:py-40 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-8 md:space-y-12"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">Ready to expand?</h2>
          <p className="text-lg md:text-xl text-[#8892B0] italic px-4">S4HEL handles the bureaucracy, you focus on the growth. Secure your legacy today.</p>
          <div className="pt-6">
            <Link href="/en/pricing" className="px-10 md:px-20 py-5 md:py-8 bg-white text-[#020C1B] rounded-full font-black uppercase text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] hover:bg-[#64FFDA] transition-all shadow-2xl inline-block">
              Pricing & Plans
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}