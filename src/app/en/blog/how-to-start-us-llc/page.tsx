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
  Fingerprint, 
  FileCheck, 
  Scale,
  Globe,
  CheckCircle2
} from "lucide-react";

export default function HowToStartUSLLC() {
  const steps = [
    {
      id: "01",
      title: "Choose Your Ideal State",
      action: "Strategic Selection",
      desc: "The first lesson in US business is that not all states are equal. For global entrepreneurs, Wyoming and Delaware are the top picks. Wyoming offers the best privacy and low fees ($100), while Delaware is the gold standard for those seeking venture capital. You must also appoint a Registered Agent at this stage to handle your legal correspondence.",
      link: "https://www.registeredagentsinc.com/business-formation/",
      buttonText: "Compare States Now"
    },
    {
      id: "02",
      title: "Name Search & Formation",
      action: "Secure Your Identity",
      desc: "Your LLC name must be unique in your chosen state. Once you've verified availability, you'll file the 'Articles of Organization' with the Secretary of State. This is the official birth certificate of your business. Be prepared to pay the state filing fee, which varies by location (e.g., $100 for Wyoming).",
      link: "https://www.registeredagentsinc.com/wyoming-llc/name-search/",
      buttonText: "Check Name Availability"
    },
    {
      id: "03",
      title: "Obtain Your Employer ID (EIN)",
      action: "Tax ID Issuance",
      desc: "An EIN is your business's social security number. It is essential for opening a US bank account and hiring staff. The best part? As a non-resident, you do NOT need an SSN to get an EIN. You can apply via a professional service that handles the fax or mail correspondence with the IRS for you.",
      link: "https://www.registeredagentsinc.com/ein-number-service/",
      buttonText: "Get My EIN Tax ID"
    },
    {
      id: "04",
      title: "LLC Compliance & Legal Prep",
      action: "Finalize Your Structure",
      desc: "Registration is just the start. You must draft an 'Operating Agreement' to define ownership and protection. Additionally, check for any specific local business licenses and understand your annual reporting requirements to keep your LLC in 'Good Standing' with the government.",
      link: "https://www.registeredagentsinc.com/operating-agreement/",
      buttonText: "Draft Operating Agreement"
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
            HOW TO START <br /> AN <span className="text-[#64FFDA]">LLC GUIDE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            A step-by-step masterclass for global entrepreneurs. Learn the exact process to launch your US presence from anywhere in the world.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/how-to-start-us-llc/hero.jpg" 
            alt="LLC Formation Process Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- THE EDUCATIONAL JOURNEY --- */}
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
                  <span className="text-7xl font-black text-white/5 group-hover:text-[#64FFDA]/20 transition-all">{s.id}</span>
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

        {/* --- COMPARISON & BENEFITS SECTION --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <Scale className="text-[#64FFDA]" /> LLC vs. Others
              </h2>
              <ul className="space-y-4 text-sm text-[#8892B0] italic">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Liability Protection for assets</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Pass-Through Taxation efficiency</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#64FFDA] shrink-0" /> Unlimited Liability in Partnerships (Avoid this!)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic">
                <Globe className="text-[#64FFDA]" /> Who is this for?
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic">
                This guide is designed for Non-Residents, Startups with multiple owners, Foreign investors in US markets, and Real Estate Investors looking for a secure legal entity.
              </p>
            </div>
          </div>
        </section>

        {/* --- INTEGRATIONS & SUPPORT --- */}
        <section className="mb-32 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <Fingerprint className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2">Banking Ready</h4>
                <p className="text-[10px] text-[#8892B0]">Mercury, Relay, and Stripe compatible.</p>
            </div>
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <MapPin className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2">Virtual Office</h4>
                <p className="text-[10px] text-[#8892B0]">Use professional addresses for privacy.</p>
            </div>
            <div className="p-6 bg-[#112240] rounded-3xl border border-white/5">
                <FileCheck className="mx-auto text-[#64FFDA] mb-4" />
                <h4 className="text-white font-black text-xs uppercase mb-2">Compliance</h4>
                <p className="text-[10px] text-[#8892B0]">Automatic annual report reminders.</p>
            </div>
        </section>

        {/* --- FINAL CONVERSION --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Start Your US <br /> Journey Today</h2>
          <p className="text-[#8892B0] mb-12 max-w-xl mx-auto font-medium italic">
            Join thousands of global entrepreneurs who have successfully launched their US LLCs with our expert guidance.
          </p>
          <a 
            href="https://www.registeredagentsinc.com/business-formation/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            Launch My LLC Now
          </a>
        </div>

      </div>
    </div>
  );
}