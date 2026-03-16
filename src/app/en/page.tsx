"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, Zap, Globe, MapPin, ChevronRight, 
  ArrowUpRight, Star, Target, Users, BookOpen
} from "lucide-react";

export default function S4HEL_Complete_Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Services Data
  const services = [
    { title: "LLC Formation", desc: "Full legal entity registration in premium states like Wyoming or Delaware with zero hidden fees.", icon: <ShieldCheck size={28} />, link: "/en/services" },
    { title: "EIN Acquisition", desc: "Federal Tax ID procurement from the IRS for seamless global banking and Stripe integration.", icon: <Zap size={28} />, link: "/en/services" },
    { title: "Registered Agent", desc: "Professional legal representation to maintain 100% compliance and protect your personal privacy.", icon: <Target size={28} />, link: "/en/services" },
    { title: "Business Address", desc: "Prestigious US-based physical address for professional correspondence and banking verification.", icon: <MapPin size={28} />, link: "/en/services" },
  ];

  // Blog Data - Configured to your folder structure (hero.jpg)
  const actualBlogs = [
    { 
      cat: "PAYMENTS", 
      title: "Stripe for International Founders", 
      preview: "Unlock global revenue by integrating Stripe with your US entity. Learn the hidden compliance steps and verification secrets.",
      link: "/en/blog/stripe-for-international-founders",
      image: "/blog/stripe-for-international-founders/hero.jpg" 
    },
    { 
      cat: "STRATEGY", 
      title: "LLC vs Corporation", 
      preview: "Pass-through taxation or venture capital? Deciding between an LLC and a C-Corp for your international US-based empire.",
      link: "/en/blog/llc-vs-corporation",
      image: "/blog/llc-vs-corporation/hero.jpg"
    },
    { 
      cat: "BANKING", 
      title: "Mercury vs Relay Bank", 
      preview: "Choosing the right digital banking architecture. A deep dive into the best Neobank features for non-resident founders.",
      link: "/en/blog/mercury-vs-relay-bank",
      image: "/blog/mercury-vs-relay-bank/hero.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020c1b] text-white selection:bg-[#64FFDA] selection:text-[#020c1b] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION - DESIGNER LOGO TITLE */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        <motion.div style={{ opacity }} className="relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#64FFDA]/20 bg-[#64FFDA]/5 text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_20px_rgba(100,255,218,0.1)]"
          >
            <Star size={14} className="animate-pulse" /> The Global Intelligence Standard
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block mb-12"
          >
            <h1 className="text-[16vw] md:text-[180px] font-[900] leading-[0.75] tracking-tighter uppercase italic select-none">
              <span className="text-outline-bold text-transparent opacity-80">S4</span>
              <span className="text-[#64FFDA] drop-shadow-[0_0_40px_rgba(100,255,218,0.35)] relative">
                HEL
                <span className="absolute -right-4 md:-right-8 bottom-4 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.8)]"></span>
              </span>
            </h1>
            
            <div className="absolute -bottom-6 left-0 w-full flex justify-between px-2 text-[8px] md:text-[12px] font-black tracking-[1.2em] text-white/20 uppercase">
              <span>Elite</span>
              <span>Intelligence</span>
            </div>
          </motion.div>

          <p className="mt-20 max-w-2xl mx-auto text-[#8892b0] text-lg md:text-xl font-medium italic leading-relaxed opacity-80 px-4">
            Engineering elite legal structures and financial architectures for international entrepreneurs. Build your legacy from anywhere.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/en/services" className="group bg-[#64FFDA] text-[#020c1b] px-14 py-7 rounded-full font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-4 hover:scale-105 transition-all shadow-[0_0_50px_rgba(100,255,218,0.2)]">
              Launch Formation <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      </section>

      {/* 2. SERVICES SECTION - ECOSYSTEM MATRIX */}
      <section className="py-40 px-6 max-w-[1400px] mx-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">Ecosystem</h2>
            <p className="text-[#64FFDA] font-black text-xs uppercase tracking-[0.5em] opacity-60 italic flex items-center gap-2">
              <Zap size={14}/> Core Operational Modules
            </p>
          </div>
          <Link href="/en/services" className="text-[10px] font-black uppercase tracking-widest border-b border-[#64FFDA] pb-2 text-[#64FFDA] hover:opacity-70 transition-opacity">Explore All Services</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12 }}
              className="p-12 bg-white/[0.02] border border-white/5 rounded-[60px] hover:border-[#64FFDA]/30 transition-all group backdrop-blur-3xl flex flex-col h-full shadow-2xl"
            >
              <div className="text-[#64FFDA] mb-10 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-4">{item.title}</h3>
              <p className="text-xs text-[#8892b0] leading-relaxed italic mb-10 flex-grow">{item.desc}</p>
              <Link href={item.link} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#020c1b] transition-all">
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTELLIGENCE HUB - BLOGS WITH REAL THUMBNAILS */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic leading-none">Intelligence</h2>
            <div className="h-1 w-24 bg-[#64FFDA] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {actualBlogs.map((blog, i) => (
              <Link href={blog.link} key={i} className="group">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="relative h-[580px] rounded-[70px] overflow-hidden border border-white/10 bg-[#0a192f] shadow-2xl"
                >
                  {/* BACKGROUND IMAGE FROM YOUR DIRECTORIES */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-[#020c1b]/90 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                    <span className="text-[#64FFDA] font-black text-[10px] tracking-[0.5em] uppercase border-l-2 border-[#64FFDA] pl-4">{blog.cat}</span>
                    <div className="space-y-6">
                      <h4 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter group-hover:text-[#64FFDA] transition-colors">{blog.title}</h4>
                      <p className="text-xs text-[#8892b0] italic line-clamp-2 leading-relaxed">{blog.preview}</p>
                      <span className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white bg-white/5 px-8 py-4 rounded-full group-hover:bg-[#64FFDA] group-hover:text-[#020C1B] transition-all">
                        Read Analysis <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION - EDUCATIONAL HUB CREDIBILITY */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] italic">
              Global <br /> <span className="text-[#64FFDA]">Authority.</span>
            </h2>
            <div className="space-y-8 text-[#8892b0] text-lg md:text-xl font-medium italic leading-relaxed">
              <p>S4HEL is the <span className="text-white font-bold">Intelligence Hub</span> for international founders. We translate complex bureaucracy into actionable business architectures.</p>
              <p className="text-white not-italic font-bold border-l-4 border-[#64FFDA] pl-8 py-3 bg-[#64FFDA]/5 rounded-r-2xl">
                Powered by the SafiPay ecosystem, we ensure your expansion is backed by elite banking and legal verification standards.
              </p>
            </div>
            <div className="flex gap-16 pt-10">
              <div>
                <div className="text-5xl font-black text-white tracking-tighter italic">2.5K+</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#64FFDA] font-black">Trusted Founders</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white tracking-tighter italic">100%</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#64FFDA] font-black">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
             <div className="bg-[#112240] rounded-[100px] p-20 border border-white/10 relative z-10 backdrop-blur-3xl overflow-hidden shadow-3xl">
                <BookOpen size={80} className="text-[#64FFDA] mb-12 opacity-30 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-4xl font-black text-white uppercase mb-6 tracking-tighter italic leading-none">Intelligence Hub</h3>
                <p className="text-[#8892b0] italic leading-loose text-lg">
                  Beyond formation, we provide the knowledge. From navigating IRS regulations to mastering multi-currency banking, we build your empire with precision.
                </p>
             </div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#64FFDA]/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-60 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-[160px] font-black uppercase tracking-tighter leading-none mb-16 italic">
            Ready to <span className="text-outline text-transparent opacity-30 italic">Scale?</span>
          </h2>
          <Link href="/en/pricing" className="inline-block px-24 py-10 bg-white text-[#020c1b] rounded-full font-black uppercase text-xs tracking-[0.5em] hover:bg-[#64FFDA] transition-all hover:scale-105 shadow-[0_0_100px_rgba(255,255,255,0.15)]">
            Explore Pricing & Plans
          </Link>
        </div>
        {/* Abstract background footer elements */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent" />
      </section>

      {/* SHARED STYLES */}
      <style jsx global>{`
        .text-outline-bold {
          -webkit-text-stroke: 3px rgba(255, 255, 255, 0.6);
        }
        .text-outline {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
        }
        @media (max-width: 768px) {
          .text-outline-bold { -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.6); }
          .text-outline { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4); }
        }
      `}</style>
    </div>
  );
}