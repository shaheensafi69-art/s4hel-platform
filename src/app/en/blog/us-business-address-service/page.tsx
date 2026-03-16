"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Building,
  Globe2,
  Lock
} from "lucide-react";

export default function BusinessAddressGuide() {
  const steps = [
    {
      id: "01",
      title: "Defining the US Business Address",
      action: "Physical Presence",
      desc: "A US Business Address is a mandatory requirement for LLC formation filings. It must be a physical location in the US that discloses your correct business location. This address is distinct from your personal residence, ensuring a professional front for your global enterprise.",
      link: "https://www.registeredagentsinc.com/local-presence/business-address/",
      buttonText: "Why Need a US Address?"
    },
    {
      id: "02",
      title: "Obtaining & Verifying the Address",
      action: "Acquisition Process",
      desc: "Global founders can secure an address through Registered Agents, Virtual Mailboxes, or P.O. Boxes. The process involves submitting Form 1583 to authorize mail handling and verifying your identity to ensure compliance with USPS regulations.",
      link: "https://www.registeredagentsinc.com/local-presence/virtual-mailbox/",
      buttonText: "Start Acquisition"
    },
    {
      id: "03",
      title: "Privacy vs. Public Records",
      action: "Identity Shielding",
      desc: "Since principal office addresses are publicly accessible, using a professional business address prevents your personal home address from being disclosed. This maintains the founder group's privacy and protects you from unwanted solicitations and junk mail.",
      link: "https://www.registeredagentsinc.com/registered-agent/privacy/",
      buttonText: "Protect My Privacy"
    },
    {
      id: "04",
      title: "Usage in Legal Documents",
      action: "Operational Use",
      desc: "Your US address is essential for Articles of Organization, business licenses, EIN applications, and vendor contracts. It establishes your credibility with US partners and ensures all official state and federal correspondence is handled professionally.",
      link: "https://www.registeredagentsinc.com/llc/articles-of-organization/",
      buttonText: "Check Legal Usage"
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
            US BUSINESS <br /> <span className="text-[#64FFDA]">ADDRESS GUIDE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Establishing a credible US presence is more than just a legal mandate—it's your bridge to the global market and founder privacy.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/us-business-address-service/hero.jpg" 
            alt="US Business Address Acquisition Process for Founders" 
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

        {/* --- WHY HAVE IT? --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <ShieldCheck className="text-[#64FFDA]" /> Key Benefits
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Prevents personal address disclosure</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Mandatory for LLC formation filings</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Establishes credibility with US partners</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Prevents default state rule complications</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Globe2 className="text-[#64FFDA]" /> Global Reach
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                For founders in Europe, Asia, or Latin America, a US Business Address provides a professional "Front Door" to the American market, simplifying mail forwarding and banking setup.
              </p>
            </div>
          </div>
        </section>

        {/* --- ECOSYSTEM --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Address & Mail Tools</h4>
            <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold italic"><Mail size={24}/> Online Mail Manager</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><Building size={24}/> Mercury Bank</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><MapPin size={24}/> Registered Agent Inc</div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <MapPin className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Secure Your <br /> US Mailbox</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't let lack of a physical address stop your expansion. Get your official US Business Address and start your LLC journey today.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/local-presence/business-address/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Get My Address
          </a>
        </div>

      </div>
    </div>
  );
}