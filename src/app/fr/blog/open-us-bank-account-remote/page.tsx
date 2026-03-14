"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA";

export default function BankingBlog() {
  const documents = [
    { t: "Articles of Organization", d: "The state-approved document proving your LLC's legal existence." },
    { t: "EIN Confirmation Letter", d: "IRS Form CP 575 or 147C. Digital copies are accepted by most fintechs." },
    { t: "Valid Passport", d: "Must be a high-quality color scan. Drivers licenses are usually not enough for non-residents." },
    { t: "Physical US Address", d: "A verified business address. Virtual offices are often flagged; use a premium mailroom address." },
    { t: "Operating Agreement", d: "A document outlining ownership. Crucial for multi-member LLCs." }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* دکمه بازگشت شناور (Back Button) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-32 left-6 md:left-12 z-50"
      >
        <Link 
          href="/en/blog" 
          className="flex items-center gap-2 px-6 py-3 bg-[#112240] border border-white/10 rounded-full text-[#64FFDA] font-bold text-xs uppercase tracking-widest hover:bg-[#64FFDA] hover:text-[#020C1B] transition-all duration-500 shadow-2xl backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Archive</span>
        </Link>
      </motion.div>

      {/* انیمیشن زمینه ستاره‌ای */}
      <div className="fixed inset-0 z-0 opacity-25">
        <div className="stars-field-banking" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* بخش هیرو */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-80 md:h-[400px] rounded-[70px] mb-20 overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center p-10"
          style={{ background: `linear-gradient(225deg, #0A192F 0%, #020C1B 100%)` }}
        >
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#64FFDA]/10 blur-[80px] rounded-full" />
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6">
            Global <span className="text-[#64FFDA]">Banking</span>
          </h1>
          <p className="text-[#8892B0] text-xs md:text-sm font-black uppercase tracking-[0.6em] max-w-xl">
            The Complete 2026 Remote Setup Guide
          </p>
        </motion.div>

        {/* محتوای آموزشی بسیار مفصل */}
        <article className="space-y-24 text-lg leading-relaxed text-[#8892B0] font-medium italic">
          
          <section className="space-y-8">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest">The Banking Revolution</h2>
            <p>
              In the past, opening a US business bank account required a physical trip to the United States, a US Social Security Number (SSN), and a mountain of paperwork. For an international founder, this was the ultimate barrier. 
              <br/><br/>
              Today, the landscape has shifted. Digital-first banks (Neobanks) have built sophisticated compliance engines that allow non-residents to verify their identity and business standing entirely online. This means you can manage your USD cash flow from anywhere in the world.
            </p>
          </section>

          {/* بخش مدارک - آپدیت شده */}
          <section className="bg-[#112240] p-12 rounded-[60px] border border-white/5 relative">
            <div className="absolute -top-6 left-12 px-8 py-3 bg-[#64FFDA] text-[#020C1B] rounded-full text-[10px] font-black uppercase tracking-widest">Required Intel</div>
            <h3 className="text-2xl font-black uppercase text-white mb-12 mt-4 tracking-widest">Master Checklist</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {documents.map((doc, i) => (
                <div key={i} className="p-8 bg-[#0A192F] rounded-[40px] border border-white/5 hover:border-[#64FFDA]/30 transition-all group">
                  <h4 className="font-black text-[#64FFDA] uppercase text-xs tracking-widest mb-4">{doc.t}</h4>
                  <p className="text-sm opacity-80 leading-relaxed">{doc.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* محتوای تخصصی: چرا آدرس مهم است؟ */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8 border-l-2 border-[#64FFDA]/30 pl-10"
          >
            <h3 className="text-2xl font-black uppercase text-white tracking-widest">The "Physical Presence" Trap</h3>
            <p>
              Many banks will reject an application if they detect a "CMRA" (Commercial Mail Receiving Agency) address that is overused. To increase your approval odds, use a <strong>unique residential-styled business address</strong>. Banks like Mercury and Relay are becoming stricter about seeing a real connection to the US, so providing a clear description of your US-based customers or vendors is vital.
            </p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3"> <span className="text-[#64FFDA]">✔</span> No P.O. Boxes allowed.</li>
              <li className="flex items-center gap-3"> <span className="text-[#64FFDA]">✔</span> Phone number should be a US-based VOIP or SIM.</li>
              <li className="flex items-center gap-3"> <span className="text-[#64FFDA]">✔</span> Website must be professional and active.</li>
            </ul>
          </motion.section>

          {/* مقایسه بانک‌ها */}
          <section className="space-y-12">
            <h3 className="text-2xl font-black uppercase text-white mb-10 tracking-widest text-center">Top Banking Gateways</h3>
            <div className="overflow-hidden rounded-[50px] border border-white/5 bg-[#112240]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-[#64FFDA] font-black uppercase text-xs">Platform</th>
                    <th className="p-8 text-[#64FFDA] font-black uppercase text-xs">Focus</th>
                    <th className="p-8 text-[#64FFDA] font-black uppercase text-xs text-right">Approval Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-8 text-white font-bold">Mercury</td>
                    <td className="p-8 text-sm">Tech Startups & VC Backed</td>
                    <td className="p-8 text-right text-xs font-black">HIGH</td>
                  </tr>
                  <tr>
                    <td className="p-8 text-white font-bold">Relay Financial</td>
                    <td className="p-8 text-sm">E-commerce & Small Ops</td>
                    <td className="p-8 text-right text-xs font-black">EXTREME</td>
                  </tr>
                  <tr>
                    <td className="p-8 text-white font-bold">Airwallex</td>
                    <td className="p-8 text-sm">International FX & Multi-Currency</td>
                    <td className="p-8 text-right text-xs font-black">STABLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* بخش نهایی: استراتژی تایید شدن */}
          <section className="p-12 bg-gradient-to-br from-[#112240] to-transparent rounded-[60px] border border-white/5">
            <h3 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">Founder Strategy</h3>
            <p className="text-sm leading-loose">
              Always apply for your EIN <strong>before</strong> trying to open a bank account. Neobanks verify your EIN against the IRS database, which can take up to 2-3 weeks to update. If you apply too early, the bank might not find your record and automatically decline your application. Patience is the key to a successful global setup.
            </p>
          </section>

          {/* دکمه نهایی */}
          <section className="text-center pt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/en/services" 
                className="inline-block px-24 py-7 bg-[#64FFDA] text-[#020C1B] rounded-full font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_-15px_rgba(100,255,218,0.4)] transition-all duration-700"
              >
                Launch Financial Shield
              </Link>
            </motion.div>
          </section>

        </article>
      </div>

      <style jsx global>{`
        .stars-field-banking {
          width: 100%; height: 100%;
          background-image: 
            radial-gradient(1px 1px at 10% 20%, white, rgba(0,0,0,0)),
            radial-gradient(1.2px 1.2px at 80% 70%, #64FFDA, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: driftBanking 150s linear infinite;
        }
        @keyframes driftBanking {
          from { background-position: 0 0; }
          to { background-position: -500px 1000px; }
        }
      `}</style>
    </div>
  );
}