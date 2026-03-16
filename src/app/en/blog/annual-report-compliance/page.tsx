"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  MousePointer2, 
  CheckCircle2, 
  ShieldAlert, 
  CalendarClock,
  ClipboardCheck,
  Globe2
} from "lucide-react";

export default function AnnualReportCompliance() {
  const steps = [
    {
      id: "01",
      title: "Identify Your Due Date",
      action: "Check State Requirements",
      desc: "Every state has different deadlines. Some require filing on the anniversary of formation, while others have a fixed date (like May 1st in Florida). Missing this date can lead to administrative dissolution.",
      link: "https://www.registeredagentsinc.com/annual-reports/",
      buttonText: "View Deadlines by State"
    },
    {
      id: "02",
      title: "Verify LLC Information",
      action: "Update Principal Address",
      desc: "Before filing, ensure your principal office address and Registered Agent information are current. The Annual Report is the official way to notify the state of any internal changes.",
      link: "https://www.registeredagentsinc.com/registered-agent/",
      buttonText: "Check Agent Status"
    },
    {
      id: "03",
      title: "Pay the State Filing Fee",
      action: "Process State Payment",
      desc: "Wyoming charges $62, while California is $25 (Statement of Information). You must pay this fee via the Secretary of State portal to maintain your 'Good Standing' status.",
      link: "https://www.registeredagentsinc.com/annual-reports/wyoming/",
      buttonText: "Pay Wyoming Fee"
    },
    {
      id: "04",
      title: "Confirm Member/Manager Privacy",
      action: "Manage Public Records",
      desc: "In states like Wyoming, you can maintain privacy by using a professional service. Ensure your personal home address isn't being exposed in this year's filing.",
      link: "https://www.registeredagentsinc.com/wyoming-registered-agent/",
      buttonText: "Secure Your Privacy"
    },
    {
      id: "05",
      title: "File the BOI Report (FinCEN)",
      action: "New Federal Compliance",
      desc: "In addition to the state annual report, almost all LLCs must now file the Beneficial Ownership Information (BOI) report with FinCEN. Failure to do this results in massive daily fines.",
      link: "https://www.registeredagentsinc.com/beneficial-ownership-information-report/",
      buttonText: "File BOI Report"
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
            ANNUAL REPORT <br /> <span className="text-[#64FFDA]">COMPLIANCE</span>
          </h1>
          <p className="text-xl text-[#8892B0] font-medium max-w-2xl border-l-2 border-[#64FFDA] pl-6 italic">
            Your definitive guide to mandatory annual filing. Don't let your LLC be dissolved over a simple administrative deadline.
          </p>
        </motion.div>

        {/* --- MASTER IMAGE --- */}
        <div className="relative h-[450px] w-full rounded-[40px] overflow-hidden mb-20 border border-white/10 shadow-2xl">
          <Image 
            src="/blog/annual-report-compliance/hero.jpg" 
            alt="Annual Report Compliance Infographic" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* --- THE STEPS --- */}
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

        {/* --- QUICK TIPS & INTEGRATIONS --- */}
        <section className="bg-white/5 p-12 rounded-[60px] border border-white/10 mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <CalendarClock className="text-[#64FFDA]" /> Pro Filing Tips
              </h2>
              <ul className="space-y-4">
                {[
                  "Mark your calendar 30 days before deadline",
                  "Review state requirements early each year",
                  "Set up auto-reminders via email",
                  "File early to avoid late penalties"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm italic">
                    <CheckCircle2 size={16} className="text-[#64FFDA] mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <Globe2 className="text-[#64FFDA]" /> Global Support
              </h2>
              <p className="text-sm text-[#8892B0] leading-relaxed italic mb-4">
                Operating from Europe or Asia? Registered Agents Inc provides a seamless portal for global entrepreneurs to manage US compliance without a US phone number.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-[#64FFDA]/10 rounded text-[10px] text-[#64FFDA] font-bold">Stripe</span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 rounded text-[10px] text-[#64FFDA] font-bold">Mercury Bank</span>
                <span className="px-3 py-1 bg-[#64FFDA]/10 rounded text-[10px] text-[#64FFDA] font-bold">Xero</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- CRITICAL PENALTY WARNING --- */}
        <section className="mb-32 border-l-4 border-red-500/50 bg-red-500/5 p-8 rounded-r-[30px]">
          <h4 className="text-red-400 font-black mb-4 uppercase tracking-widest flex items-center gap-2">
            <ShieldAlert size={20} /> Administrative Dissolution
          </h4>
          <p className="text-sm text-[#8892B0] italic leading-relaxed">
            If you miss your filing, the state will move your LLC to 'Delinquent' status. Within months, your entity will be dissolved. You will lose legal protection, and your business name becomes available for anyone else to take.
          </p>
        </section>

        {/* --- FINAL CTA --- */}
        <div className="text-center bg-gradient-to-b from-transparent to-[#112240] p-16 rounded-[80px] border border-white/5">
          <ClipboardCheck className="mx-auto text-[#64FFDA] mb-8" size={60} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Maintain Your <br /> Good Standing</h2>
          <a 
            href="https://www.registeredagentsinc.com/annual-reports/" 
            target="_blank"
            className="inline-block px-16 py-6 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_50px_rgba(100,255,218,0.4)] transition-all"
          >
            File My Report Now
          </a>
        </div>

      </div>
    </div>
  );
}