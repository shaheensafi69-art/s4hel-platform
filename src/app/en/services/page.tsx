"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap, Globe, ShieldCheck, Banknote, ChevronRight, BookOpen, Rocket, Star } from "lucide-react";

const ServiceButton = ({ title, href, delay }: { title: string, href: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <Link 
      href={href} 
      target="_blank"
      className="block px-6 py-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center hover:border-[#64FFDA]/40 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors">
        {title}
      </span>
    </Link>
  </motion.div>
);

const allStateNames = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export default function S4HEL_Service_Hub() {
  const [selectedState, setSelectedState] = useState<string | null>("Massachusetts");

  const mainServices = [
    { t: "Domain Name", l: "https://www.registeredagentsinc.com/domain-name/" },
    { t: "Business Identity", l: "https://www.registeredagentsinc.com/business-identity/" },
    { t: "Business Website", l: "https://www.registeredagentsinc.com/business-website/" },
    { t: "Email Address", l: "https://www.registeredagentsinc.com/email-address/" },
    { t: "Phone Number", l: "https://www.registeredagentsinc.com/business-phone-number/" },
    { t: "Registered Agent", l: "https://www.registeredagentsinc.com/registered-agent/" },
    { t: "Business Formation", l: "https://www.registeredagentsinc.com/business-formation/" },
    { t: "DBA Registration", l: "https://www.registeredagentsinc.com/dba-registration/" },
    { t: "Trademark Registration", l: "https://www.registeredagentsinc.com/trademark-registration/" },
    { t: "Annual Report", l: "https://www.registeredagentsinc.com/annual-report-service/" },
    { t: "BOC-3 Blanket Agent", l: "https://www.registeredagentsinc.com/boc-3-blanket-agent/" },
    { t: "Nonprofit Guide", l: "https://www.registeredagentsinc.com/nonprofit-organization/" },
  ];

  return (
    <div className="min-h-screen bg-[#020c1b] text-[#8892b0] pt-32 pb-20 px-6 relative overflow-hidden selection:bg-[#64FFDA]/30">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#64FFDA]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION 1: ABOUT US (Educational Intro) --- */}
        <section className="text-center mb-32 space-y-8">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex justify-center gap-1 mb-4"
          >
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-[#64FFDA] fill-[#64FFDA]" />)}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic"
          >
            S4<span className="text-[#64FFDA]">HEL</span> <span className="font-thin opacity-30 text-3xl md:text-6xl not-italic">EDUCATION</span>
          </motion.h1>

          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-[50px] shadow-2xl">
            <h2 className="text-[#64FFDA] font-black uppercase tracking-[0.4em] text-xs mb-6 flex items-center justify-center gap-2">
              <BookOpen size={16}/> Your Strategic Business Guide
            </h2>
            <p className="text-[#CCD6F6] text-xl md:text-2xl font-medium leading-relaxed italic">
              S4HEL is an advanced educational ecosystem designed for global entrepreneurs. 
              We don't just provide links; we provide the <span className="text-[#64FFDA]">foundational intelligence</span> required to launch, 
              manage, and scale online businesses in the United States and beyond.
            </p>
          </div>
        </section>

        {/* --- SECTION 2: SERVICES MATRIX --- */}
        <section className="mb-48">
          <h2 className="text-center text-white font-black uppercase text-[10px] tracking-[0.6em] mb-12 opacity-40">Operational Infrastructure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mainServices.map((service, i) => (
              <ServiceButton key={service.t} title={service.t} href={service.l} delay={i * 0.05} />
            ))}
          </div>
        </section>

        {/* --- SECTION 3: STATE SELECTION (Overlap Fix Applied) --- */}
        <section className="mb-16">
          <h2 className="text-center text-white font-black uppercase text-[10px] tracking-[0.6em] mb-12 opacity-60 italic flex items-center justify-center gap-3">
            <Rocket size={14}/> Select Jurisdiction
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {allStateNames.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-5 py-2.5 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedState === state 
                  ? 'bg-[#64FFDA] text-[#020c1b] border-[#64FFDA] shadow-[0_0_20px_rgba(100,255,218,0.5)] scale-110' 
                  : 'bg-white/5 border-white/10 text-[#CCD6F6] hover:border-[#64FFDA]/50'
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: DETAILS PANEL (The "Big Name" Fix) --- */}
        <div className="relative min-h-[600px] mt-10">
            <AnimatePresence mode="wait">
            {selectedState && (
                <motion.div
                  key={selectedState}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="bg-[#112240]/40 backdrop-blur-3xl border border-white/10 rounded-[60px] p-8 md:p-20 shadow-3xl overflow-hidden"
                >
                <div className="flex flex-col xl:flex-row gap-12 items-center">
                    
                    {/* LEFT SIDE: Name and Description (Auto-Sizing Font) */}
                    <div className="xl:w-2/3 w-full space-y-8 text-center xl:text-left z-10">
                        <h3 className={`font-black text-white tracking-tighter italic uppercase leading-none break-words
                            ${selectedState.length > 12 ? 'text-5xl md:text-8xl' : 'text-7xl md:text-[130px]'}
                        `}>
                            {selectedState}
                        </h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-[#8892b0] font-medium italic max-w-2xl">
                            Establish your legacy in <span className="text-[#64FFDA] font-black">{selectedState}</span>. 
                            A premier choice for entrepreneurs seeking privacy, international credibility, and tax efficiency.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Feature Box (Avoids Overlap) */}
                    <div className="xl:w-1/3 w-full relative z-20">
                      <div className="bg-[#0a192f]/80 backdrop-blur-md p-10 rounded-[40px] border border-white/10 shadow-2xl space-y-6">
                          {[
                            { icon: ShieldCheck, text: "Elite Asset Protection" },
                            { icon: Globe, text: "Global Credibility" },
                            { icon: Zap, text: "Zero Personal Liability" },
                            { icon: Banknote, text: "Rapid Banking Access" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#64FFDA]">
                                <item.icon size={18} />
                                </div>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{item.text}</span>
                            </div>
                          ))}
                          
                          <Link 
                            href="https://www.registeredagentsinc.com/business-formation/" 
                            target="_blank"
                            className="flex items-center justify-center gap-3 mt-10 py-7 bg-[#64FFDA] text-[#020c1b] rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:shadow-[0_0_40px_rgba(100,255,218,0.6)] hover:scale-[1.05] transition-all"
                          >
                            Initialize Formation <ChevronRight size={16} />
                          </Link>
                      </div>
                    </div>
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        body { background-color: #020c1b; margin: 0; padding: 0; }
        .stars-background {
          position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.1;
          background-image: radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 100px, #64FFDA, rgba(0,0,0,0));
          background-size: 200px 200px;
        }
      `}</style>
      <div className="stars-background" />
    </div>
  );
}