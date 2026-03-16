"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  Smartphone, 
  ShieldCheck, 
  MessagesSquare, 
  Globe,
  Lock,
  Headphones
} from "lucide-react";

export default function VirtualPhoneGuide() {
  const steps = [
    {
      id: "01",
      title: "Defining a US Virtual Phone Number",
      action: "Cloud Presence",
      desc: "A US Virtual Phone Number is a cloud-based service that provides a US-based local or toll-free number. Accessed via app or web browser, it allows global founders to manage business calls while keeping their personal phone number strictly private.",
      link: "https://www.registeredagentsinc.com/local-presence/phone-service/",
      buttonText: "What is a Virtual Number?"
    },
    {
      id: "02",
      title: "Specifying Business Services",
      action: "Feature Selection",
      desc: "Choose from various features like local numbers for specific states (e.g., Delaware, Wyoming) or professional 800-numbers. Advanced options include call handling, IVR menus, and automated greetings to give your startup a professional corporate image.",
      link: "https://www.registeredagentsinc.com/local-presence/toll-free-number/",
      buttonText: "View Phone Features"
    },
    {
      id: "03",
      title: "Virtual vs. Physical Phone Records",
      action: "Data Management",
      desc: "Digital phone logs are manageable and prevent your personal number from appearing in public filings. This maintains the founder group's privacy, as the virtual service number can be used for all public-facing documentation and state registrations.",
      link: "https://www.registeredagentsinc.com/registered-agent/privacy/",
      buttonText: "Privacy Benefits"
    },
    {
      id: "04",
      title: "Receiving Business Communications",
      action: "Operational Hub",
      desc: "Receive US business calls, SMS, and MMS messages directly on your devices. Modern services offer voicemail-to-email transcription and detailed call analytics, ensuring you never miss a critical client or state notification regardless of your location.",
      link: "https://www.registeredagentsinc.com/local-presence/",
      buttonText: "Setup Communication"
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
            VIRTUAL <br /> <span className="text-[#64FFDA]">PHONE GUIDE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Secure your mandatory point of contact. A professional US phone presence for global founders to establish credibility and safeguard privacy.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/virtual-phone-number-guide/hero.jpg" 
            alt="Virtual Phone Service Process for Global Entrepreneurs" 
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

        {/* --- WHY EVERY LLC NEEDS ONE --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <ShieldCheck className="text-[#64FFDA]" /> Core Benefits
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Essential for US business filings</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Protects personal number from public records</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Establishes instant US credibility</li>
                <li className="flex gap-2"><Lock size={16} className="text-[#64FFDA] shrink-0" /> Prevents default state administrative issues</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic underline decoration-[#64FFDA]">
                <Globe className="text-[#64FFDA]" /> Professional Reach
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                Whether you are in <strong>Europe</strong>, <strong>Asia</strong>, or <strong>Latin America</strong>, a virtual number ensures you can receive SMS/MMS and voice calls as if you were sitting in a US office.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS --- */}
        <section className="mb-32 text-center">
            <h4 className="text-[#64FFDA] font-black text-xs uppercase mb-8 tracking-[0.5em]">Partner Ecosystem</h4>
            <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-2 font-bold italic"><MessagesSquare size={24}/> RingCentral</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><Headphones size={24}/> Grasshopper</div>
                <div className="flex flex-col items-center gap-2 font-bold italic"><Smartphone size={24}/> Google Voice</div>
            </div>
        </section>

        {/* --- FINAL ACTION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <Smartphone className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Call Like a <br /> US Local</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Don't let distance disconnect you from your clients. Get your professional US virtual number and scale your business globally.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/local-presence/phone-service/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Activate My Number
          </a>
        </div>

      </div>
    </div>
  );
}