"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// رنگ‌بندی جدید برای حس اعتماد و آرامش
const PRIMARY = "#0A192F"; // سرمه‌ای عمیق
const ACCENT = "#64FFDA"; // سبز-آبی روشن برای حس تکنولوژی
const SOFT_BLUE = "#E6F1FF"; // آبی بسیار ملایم برای متن

const ServiceButton = ({ title, href, delay }: { title: string, href: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative"
  >
    <Link 
      href={href} 
      target="_blank"
      className="block px-6 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-[#64FFDA]/50 transition-all duration-500 group"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CCD6F6] group-hover:text-[#64FFDA]">
        {title}
      </span>
    </Link>
  </motion.div>
);

const allStateNames = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

export default function S4HEL_Trust_Edition() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[#020c1b] text-[#8892b0] pt-40 pb-20 px-6 relative overflow-hidden">
      
      {/* پس‌زمینه ستاره‌ای (Star Field) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="stars-container" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* هدر صفحه */}
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-[#64FFDA] mb-6 tracking-tight"
          >
            S4HEL <span className="text-white font-light">Service Hub</span>
          </motion.h1>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Premium corporate solutions tailored for international visionaries. Secure, efficient, and reliable.
          </p>
        </div>
        
        {/* دکمه‌های خدمات (Glassmorphism) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-48">
          {mainServices.map((service, i) => (
            <ServiceButton key={i} title={service.t} href={service.l} delay={i * 0.05} />
          ))}
        </div>

        {/* گرید ایالت‌ها با طراحی دایره‌ای */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold text-white mb-12 uppercase tracking-widest">Select Your Jurisdiction</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allStateNames.map((state) => (
              <motion.button
                key={state}
                onClick={() => setSelectedState(state)}
                whileHover={{ scale: 1.1, backgroundColor: "#64FFDA", color: "#020c1b" }}
                className={`px-5 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedState === state ? 'bg-[#64FFDA] text-[#020c1b] shadow-[0_0_20px_#64FFDA]' : 'bg-white/5'
                }`}
              >
                {state}
              </motion.button>
            ))}
          </div>
        </div>

        {/* پنل جزئیات ایالت */}
        <AnimatePresence mode="wait">
          {selectedState && (
            <motion.div
              key={selectedState}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="bg-[#112240] border border-white/10 rounded-[50px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#64FFDA]/10 blur-[120px] rounded-full" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-7xl md:text-9xl font-black text-white mb-8">{selectedState}</h3>
                  <p className="text-xl leading-relaxed font-light text-[#8892b0]">
                    Elevate your business in <span className="text-[#64FFDA]">{selectedState}</span>. Experience a jurisdiction that prioritizes legal integrity, global accessibility, and superior corporate flexibility.
                  </p>
                </div>
                
                <div className="md:w-1/2 w-full">
                  <div className="bg-[#0a192f] p-10 rounded-[40px] border border-white/5 space-y-6">
                    {["Maximum Asset Protection", "Global Credibility", "Zero Personal Liability", "Fast US Banking Setup"].map((p) => (
                      <div key={p} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-[#64FFDA] rounded-full shadow-[0_0_10px_#64FFDA]" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">{p}</span>
                      </div>
                    ))}
                    <Link 
                      href="https://www.registeredagentsinc.com/business-formation/" 
                      target="_blank"
                      className="block text-center mt-10 py-6 bg-[#64FFDA] text-[#020c1b] rounded-full font-black uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] transition-all"
                    >
                      Start Formation
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .stars-container {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1px 1px at 25px 35px, white, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 100px, #64FFDA, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0));
          background-size: 150px 150px;
          animation: moveStars 150s linear infinite;
        }
        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </div>
  );
}