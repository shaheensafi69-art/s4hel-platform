"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, Globe } from "lucide-react";

const ACCENT = "#64FFDA";

export default function EliteContactPage() {
  const contactInfo = [
    {
      label: "Official Location",
      value: "1001 S Main St Ste 500, Kalispell, Montana 59901",
      icon: <MapPin size={24} />,
      link: "https://maps.google.com/?q=1001+S+Main+st+ste+500+Kalispell+Montana+59901"
    },
    {
      label: "Executive Email",
      value: "Contact@s4hel.com",
      icon: <Mail size={24} />,
      link: "mailto:Contact@s4hel.com"
    },
    {
      label: "Global Hotline",
      value: "+1 406 316 0317",
      icon: <Phone size={24} />,
      link: "tel:+14063160317"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-20 px-6 relative overflow-hidden font-sans">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: MASSIVE & BOLD */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#64FFDA]"></div>
            <span className="text-[#64FFDA] font-black text-[10px] uppercase tracking-[0.6em]">Nexus Connection</span>
          </motion.div>
          
          <h1 className="text-[12vw] md:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.8] italic mb-12">
            LET'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-[#112240] italic-shifter">CONNECT</span>
          </h1>
        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              target="_blank"
              whileHover={{ y: -10 }}
              className="group p-12 bg-white/[0.02] border border-white/5 rounded-[60px] backdrop-blur-3xl flex flex-col justify-between h-[400px] hover:border-[#64FFDA]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#020C1B] transition-all duration-500">
                {info.icon}
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64FFDA]/60">{info.label}</span>
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#64FFDA] transition-colors">{info.value}</h3>
              </div>

              <div className="flex justify-end">
                <ArrowUpRight className="text-white/20 group-hover:text-[#64FFDA] transition-colors" size={32} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* WHATSAPP ELITE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[80px] p-1 bg-gradient-to-r from-[#64FFDA]/20 to-transparent"
        >
          <div className="bg-[#0A192F] rounded-[78px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#25D366]/20">
                <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
                Active Support
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">Instant WhatsApp <br /> Intelligence</h2>
              <p className="text-[#8892B0] max-w-md italic">Direct access to our senior consultants. Strictly for text inquiries regarding international formation and banking.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://wa.me/14063160317" 
                target="_blank"
                className="group relative px-16 py-8 bg-[#25D366] text-[#020C1B] rounded-full font-black uppercase text-sm tracking-[0.4em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(37,211,102,0.2)]"
              >
                Start Chat
                <div className="absolute -top-2 -right-2 bg-white px-3 py-1 rounded-md text-[8px] font-black shadow-lg">TEXT ONLY</div>
              </a>
              <span className="text-[10px] font-bold text-[#8892B0] uppercase tracking-widest opacity-50">No Voice Calls • Messages Only</span>
            </div>
          </div>
        </motion.div>

        {/* FOOTER INFO */}
        <div className="mt-40 grid md:grid-cols-2 gap-20 border-t border-white/5 pt-20">
           <div className="space-y-6">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">S4HEL Intelligence Hub</h4>
              <p className="text-[#495670] text-sm leading-relaxed italic">
                S4HEL is an elite strategic partner for global entrepreneurs. Our Montana headquarters serves as the bridge between international visionaries and the United States market infrastructure.
              </p>
           </div>
           <div className="flex flex-col md:items-end justify-center gap-4">
              <div className="flex gap-8 text-[#64FFDA] font-black text-[10px] uppercase tracking-widest">
                <span className="opacity-40">Privacy Policy</span>
                <span className="opacity-40">Terms of Service</span>
              </div>
              <p className="text-[#495670] text-[10px] uppercase tracking-[0.3em]">© 2026 S4HEL • All Rights Reserved</p>
           </div>
        </div>

      </div>

      <style jsx>{`
        .italic-shifter { font-style: italic; letter-spacing: -0.05em; }
        .text-outline { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2); }
      `}</style>
    </div>
  );
}