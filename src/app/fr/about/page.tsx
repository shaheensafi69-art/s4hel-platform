"use client";
import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#64FFDA";

export default function DeepAboutPage() {
  const corporatePillars = [
    { 
      t: "Regulatory Compliance", 
      d: "Our primary objective is maintaining the 'Good Standing' of our clients' entities. We monitor state-specific requirements, including franchise taxes and biennial reports, with military precision." 
    },
    { 
      t: "Data Privacy & Security", 
      d: "We implement advanced encryption and professional registered agent protocols to ensure that founders' sensitive information is shielded from public databases where possible." 
    },
    { 
      t: "Strategic Infrastructure", 
      d: "S4HEL is not just a filing service; we are architects of corporate presence. We provide the digital and physical nexus required for modern, borderless commerce." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-32 px-6 relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#64FFDA]/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#112240]/40 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section 1: The Executive Vision */}
        <header className="mb-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#64FFDA] font-mono text-[10px] uppercase tracking-[1em] mb-8 block">
              Corporate Intelligence & Legal Infrastructure
            </span>
            <h1 className="text-7xl md:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.8] mb-16">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-white to-[#64FFDA]">S4HEL</span> LEGACY
            </h1>
            <p className="max-w-5xl mx-auto text-xl md:text-3xl text-[#8892B0] font-light italic leading-relaxed">
              Established as a bridge between global innovation and United States legal frameworks, S4HEL operates at the intersection of law, technology, and international finance.
            </p>
          </motion.div>
        </header>

        {/* Section 2: Comprehensive Mission Statement */}
        <section className="grid lg:grid-cols-2 gap-24 mb-48 items-start">
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-widest border-l-4 border-[#64FFDA] pl-8 italic">
              Our Strategic Mandate
            </h2>
            <div className="space-y-6 text-[#8892B0] text-lg leading-loose italic font-medium">
              <p>
                S4HEL was founded on the principle that geographical boundaries should not limit entrepreneurial potential. In an increasingly complex global regulatory environment, international founders require more than just paperwork; they require a sophisticated ecosystem that guarantees compliance and longevity.
              </p>
              <p>
                We provide the essential administrative and legal backbone for non-resident entities. Our platform streamlines the integration into the U.S. market by navigating the intricacies of state-level filings, IRS tax identification, and corporate governance standards.
              </p>
              <p>
                By leveraging professional partnerships with elite Registered Agent networks and financial technology providers, S4HEL ensures that every client operates within the highest ethical and legal standards of the United States.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-12">
            {corporatePillars.map((pillar, idx) => (
              <div key={idx} className="p-10 bg-[#112240]/30 rounded-[50px] border border-white/5 backdrop-blur-md hover:border-[#64FFDA]/20 transition-all">
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4 italic">{pillar.t}</h4>
                <p className="text-sm text-[#8892B0] leading-relaxed italic">{pillar.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Operational Methodology (Very important for partners) */}
        <section className="mb-48 p-16 rounded-[100px] border border-white/5 bg-gradient-to-br from-[#112240]/50 to-transparent">
          <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-16 text-center italic">Methodology of Excellence</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { n: "01", t: "Discovery", d: "Deep analysis of the founder's business model to select the optimal jurisdiction (WY, DE, NM)." },
              { n: "02", t: "Architecture", d: "Execution of Articles of Organization with professional registered agent integration." },
              { n: "03", t: "Compliance", d: "Securing Federal Tax IDs (EIN) and establishing 24/7 compliance monitoring cycles." },
              { n: "04", t: "Scaling", d: "Connecting the entity to banking portals and global payment gateways like Stripe." }
            ].map((step, i) => (
              <div key={i} className="space-y-6">
                <span className="text-4xl font-black text-[#64FFDA]/30">{step.n}</span>
                <h5 className="text-white font-black uppercase text-xs tracking-widest">{step.t}</h5>
                <p className="text-xs text-[#8892B0] leading-relaxed italic">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Ethical Commitment & Legal Shield */}
        <section className="bg-white text-[#020C1B] p-20 rounded-[100px] flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 italic">Strict Compliance Protocol</h2>
            <p className="text-lg font-bold uppercase leading-relaxed mb-12">
              S4HEL is committed to the prevention of financial malpractice. We maintain rigorous standards of verification to ensure all clients adhere to the Corporate Transparency Act (CTA) and federal Beneficial Ownership Information (BOI) reporting requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-10 opacity-70">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">IRS Standard Compliance</span>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">State Nexus Integrity</span>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase">KYC/AML Alignment</span>
            </div>
          </motion.div>
        </section>

        {/* Section 5: Leadership Vision */}
        <section className="mt-48 text-center max-w-3xl mx-auto">
          <h3 className="text-[#64FFDA] font-mono text-xs uppercase tracking-[0.5em] mb-8">Executive Summary</h3>
          <p className="text-2xl text-white font-medium italic leading-relaxed">
            &quot;Our goal is to be the silent engine behind the next generation of global unicorns. S4HEL handles the friction of law so founders can focus on the fire of innovation.&quot;
          </p>
        </section>

      </div>
    </div>
  );
}