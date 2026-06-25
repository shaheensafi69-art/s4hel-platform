"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, ShoppingBag, Award, ShieldCheck, Database, Layers, 
  Globe, Star, Users, CheckCircle, Code, Landmark, ChevronRight, MapPin, Building2 
} from "lucide-react";

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

  // Comprehensive Educational Matrix Configured for Instant Affiliate/Awin Verification
  const educationalPrograms = [
    {
      title: "TikTok Shop Complete Mastery",
      category: "SOCIAL COMMERCE",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      icon: <ShoppingBag size={22} className="text-[#64FFDA]" />,
      desc: "Full operational mechanics on establishing and verifying non-resident TikTok Shop accounts. Learn product research criteria, sourcing from China, viral marketing frameworks, and shipping preparation protocols."
    },
    {
      title: "Amazon FBA & FBM Infrastructure",
      category: "E-COMMERCE LOGISTICS",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      icon: <Layers size={22} className="text-[#64FFDA]" />,
      desc: "Deep-dive systems on account verification pipelines, product research indexes, and sourcing from China. Master target market execution, shipping optimization, Wholesale structures, Private Label scaling, and FBA/FBM dual operations."
    },
    {
      title: "Shopify Enterprise & Dropshipping",
      category: "DIGITAL RETAIL NETWORKS",
      instructor: "Shaheen Safi",
      avatar: "/shaheen.jpeg",
      icon: <Globe size={22} className="text-[#64FFDA]" />,
      desc: "Full-stack configuration for independent custom web stores. Master trending product procurement, dropshipping automation pipelines, marketing campaign layouts, White Label testing blueprints, and high-tier Private Label brand separation."
    },
    {
      title: "Forex, Crypto, Commodities & Indexes Matrix",
      category: "FINANCIAL INTELLIGENCE",
      instructor: "Mujtaba Rahmani",
      avatar: "/mujtaba.jpeg",
      icon: <Database size={22} className="text-[#64FFDA]" />,
      desc: "Decode advanced market structure delivery models. Includes macro-fundamental tracking, institutional Inner Circle Trader (ICT) rules, Smart Money Concepts (SMC), classic technical systems, Central Range Theory (CRT), Swing/Scalp trade management, and bio-emotional discipline tracking."
    },
    {
      title: "Full-Stack Web Coding & Flutter Apps",
      category: "SOFTWARE ENGINEERING",
      instructor: "Shaheen Safi",
      avatar: "/shaheen.jpeg",
      icon: <Code size={22} className="text-[#64FFDA]" />,
      desc: "Proprietary software engineering blueprints for modern builders. Learn how to launch clean responsive websites, build AI-driven platforms, configure complex API integrations, and develop multi-platform native mobile apps utilizing Google's Flutter framework."
    },
    {
      title: "US Corporate LLC Formation & Brand Identity",
      category: "PREMIUM REGULATORY LEGAL",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      icon: <Landmark size={22} className="text-[#64FFDA]" />,
      desc: "The absolute legal foundation of out-of-state operations. Step-by-step masterclasses on LLC registration (WY, DE, NM), USPTO Trademark filing, Registered Agent vetting, corporate banking setups (Mercury, Relay), operational US phone/hosting assets, and professional corporate email deployment."
    }
  ];

  // --- NEW: TEAM MEMBERS FOR LARGE IMAGE SECTION ---
  const coreTeamMembers = [
    {
      name: "Nik Mohammad Sarwari",
      title: "Lead Marketing & Acquisition Strategist, Real Estate Division",
      photo: "nikm.jpeg", // Using the prompt-specified image
      email: "shernoor437@gmail.com",
      company: "Sarwari Trade LLC",
      address: "1001 S MAIN ST STE 500, Kalispell, Montana, 59901, USA",
      details: [
        "Marketing & Lead Generation Architect",
        "Strategic Acquisition Support Services",
        "Real Estate Investment Portfolio Management",
        "Corporate Wholesaling Activities Lead"
      ],
      description: "Nik provides critical operational support, driving market presence and lead pipeline generation for the company's real estate investment and wholesaling ventures. He navigates complex acquisition strategies with data-driven precision."
    },
    {
      name: "Sahel Salem",
      title: "University Director & Strategic Compliance Officer",
      photo: "/sahel.jpeg",
      description: "Sahel masterminds the academic vision, ensuring global educational content is perfectly mapped to corporate legal frameworks and advanced tax strategies."
    },
    {
      name: "Shaheen Safi",
      title: "Global E-Commerce Architect & Software Engineer",
      photo: "/shaheen.jpeg",
      description: "Shaheen designs and builds the digital network infrastructure that empowers borderless commerce, from high-tier Private Label Shopify systems to complex AI-driven API platforms."
    },
    {
      name: "Mujtaba Rahmani",
      title: "Head of Global Financial Intelligence & Advanced Market Structure",
      photo: "/mujtaba.jpeg",
      description: "Mujtaba decodes advanced market delivery models across Forex, Crypto, and Commodities, providing students with a deep, institutional-level understanding of global finance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-32 px-6 relative overflow-hidden font-sans selection:bg-[#64FFDA]/30">
      
      {/* Dynamic Background Grid Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#64FFDA]/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#112240]/40 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-32">
        
        {/* --- SECTION 1: THE EXECUTIVE VISION --- */}
        <header className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-4 py-1.5 rounded-full border border-[#64FFDA]/20 font-mono text-[10px] uppercase tracking-[0.4em] inline-block">
            <Star size={10} className="inline mr-2 animate-pulse" /> GLOBAL INTELLECTUAL ECOSYSTEM
          </span>
          <h1 className="text-5xl md:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.85] italic">
            THE S4HEL <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-white to-[#64FFDA] not-italic">UNIVERSITY</span>
          </h1>
          <p className="text-sm md:text-lg text-[#8892B0] font-medium italic leading-relaxed opacity-95">
            S4HEL Online University stands as an elite global academic authority. We specialize in transforming structural corporate complexity and cross-border commercial friction into highly optimized, sovereign business systems.
          </p>
        </header>

        {/* --- SECTION 2: CORE CURRICULUM ARCHIVE & FACULTY PROFILING --- */}
        <section className="space-y-12">
          <div className="text-center lg:text-left space-y-2 border-b border-white/5 pb-6">
            <span className="text-[#64FFDA] font-mono text-[9px] tracking-[0.4em] uppercase block">ENTERPRISE ACADEMIC BLUEPRINTS</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Our Core Curriculums & Faculty</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalPrograms.map((course, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:border-[#64FFDA]/20 transition-all duration-300 group flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#64FFDA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64FFDA] font-black text-[8px] tracking-widest bg-[#64FFDA]/5 px-2.5 py-1 rounded border border-[#64FFDA]/10 uppercase font-mono">
                      {course.category}
                    </span>
                    <div className="p-2 bg-white/5 rounded-xl transition-transform group-hover:scale-105">
                      {course.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-[#64FFDA] transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-[#8892B0] text-xs leading-relaxed italic opacity-85">
                    {course.desc}
                  </p>
                </div>

                {/* Integrated Instructor Meta Log Block */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-white/10 overflow-hidden bg-[#020C1B] shrink-0">
                      <img 
                        src={course.avatar} 
                        alt={course.instructor} 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase block leading-none">PROFESSOR</span>
                      <span className="text-white text-xs font-black uppercase tracking-tight block mt-1">{course.instructor}</span>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono tracking-wider text-[#64FFDA] bg-[#64FFDA]/5 px-2 py-1 rounded border border-[#64FFDA]/10 uppercase">
                    ACTIVE MAPPED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2.5: CORE OPERATIONAL LEADERSHIP --- */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Users size={32} className="text-[#64FFDA] mx-auto opacity-70" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Our Core Operational Team</h2>
            <p className="text-[#8892B0] text-sm md:text-base leading-relaxed italic font-medium opacity-90">
              Meet the architects of our sovereign systems, combining marketing mastery, financial intelligence, and legal precision to drive global success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreTeamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`p-8 md:p-10 bg-white/[0.01] border ${member.name.startsWith('Nik') ? 'border-[#64FFDA]/30' : 'border-white/5'} rounded-3xl hover:border-[#64FFDA]/30 transition-all duration-300 group shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8`}
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Large Profile Photo */}
                <div className="w-full md:w-60 h-80 md:h-96 rounded-2xl border border-white/10 overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform shadow-lg relative">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none" />
                </div>

                <div className="flex flex-col flex-grow space-y-6">
                  <div className="space-y-3">
                    <span className={`text-[#64FFDA] font-mono text-[9px] tracking-[0.4em] uppercase block`}>
                      {member.title.split(',')[1]?.trim() || "GLOBAL STRATEGIST"}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#64FFDA] transition-colors leading-none">
                      {member.name}
                    </h3>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider opacity-80 pt-1">
                      {member.title.split(',')[0]}
                    </h4>
                  </div>
                  
                  <p className="text-[#8892B0] text-sm leading-relaxed italic opacity-95">
                    {member.description}
                  </p>

                  {/* Specialized Skill/Detail Block */}
                  {member.details && (
                    <div className="pt-6 border-t border-white/5 space-y-2">
                      <h5 className="text-[#64FFDA] text-[10px] font-black font-mono tracking-widest uppercase">Key Operational Mandate</h5>
                      {member.details.map((detail, idx2) => (
                        <div key={idx2} className="flex items-center gap-2.5 text-[#8892B0] text-xs leading-none italic">
                          <ChevronRight size={12} className="text-[#64FFDA] shrink-0" /> {detail}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Integrated Contact/Address Block (for large photos) */}
                  <div className="mt-auto pt-6 border-t border-white/5 space-y-2.5">
                    {member.email && (
                      <div className="flex items-center gap-2 text-[#CCD6F6] text-[11px] leading-none opacity-80 font-medium">
                        <BookOpen size={14} className="text-[#64FFDA] shrink-0 opacity-50" /> Email: {member.email}
                      </div>
                    )}
                    {member.company && (
                      <div className="flex items-center gap-2 text-[#CCD6F6] text-[11px] leading-none opacity-80 font-medium italic">
                        <Building2 size={14} className="text-[#64FFDA] shrink-0 opacity-50" /> Company: {member.company}
                      </div>
                    )}
                    {member.address && (
                      <div className="flex items-start gap-2 text-[#CCD6F6] text-[11px] leading-relaxed opacity-80 font-medium italic">
                        <MapPin size={14} className="text-[#64FFDA] shrink-0 opacity-50 mt-0.5" /> Address: {member.address}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: COMPREHENSIVE MISSION MANDATE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider border-l-2 border-[#64FFDA] pl-6 italic">
              Our Strategic Mandate
            </h2>
            <div className="space-y-5 text-[#8892B0] text-sm md:text-base leading-relaxed italic font-medium opacity-90">
              <p>
                S4HEL Online University was founded on the principle that geographical boundaries should not limit entrepreneurial potential. In an increasingly complex global regulatory environment, international founders require more than just paperwork; they require a sophisticated ecosystem that guarantees compliance and longevity.
              </p>
              <p>
                We provide the essential administrative and legal backbone for non-resident entities. Our platform streamlines the integration into the U.S. market by navigating the intricacies of state-level filings, IRS tax identification, and corporate governance standards.
              </p>
              <p>
                By combining technical training in global sales architectures like TikTok Shop and Amazon FBA with verified registered agent frameworks, S4HEL ensures that every student operates with clean, bulletproof legal precision.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {corporatePillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-[#112240]/20 rounded-2xl border border-white/5 backdrop-blur-md hover:border-[#64FFDA]/20 transition-all">
                <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">{pillar.t}</h4>
                <p className="text-xs text-[#8892B0] leading-relaxed italic opacity-80">{pillar.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: OPERATIONAL METHODOLOGY --- */}
        <section className="p-6 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-[#112240]/40 to-transparent">
          <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-12 text-center italic">Methodology of Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Academic Training", d: "Deep education across modern digital markets including Amazon FBA pipelines, Shopify setups, and TikTok Shop conversion models." },
              { n: "02", t: "Architecture Check", d: "Execution of robust Articles of Organization with elite registered agent integration based on your model." },
              { n: "03", t: "Tax Registry (EIN)", d: "Securing corporate Federal Tax Identification data from the IRS and establishing compliance tracking cycles." },
              { n: "04", t: "Global Scale", d: "Deploying high-tier neo-banking frameworks, merchant accounts, and payment systems like Stripe globally." }
            ].map((step, i) => (
              <div key={i} className="space-y-3">
                <span className="text-3xl font-black text-[#64FFDA]/20 font-mono block">{step.n}</span>
                <h5 className="text-white font-bold uppercase text-xs tracking-wider">{step.t}</h5>
                <p className="text-[11px] text-[#8892B0] leading-relaxed italic opacity-80">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ETHICAL COMPLIANCE PROTOCOL --- */}
        <section className="bg-white text-[#020C1B] p-6 md:p-12 rounded-3xl flex flex-col items-center text-center shadow-xl">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Strict Compliance Protocol</h2>
            <p className="text-xs md:text-sm font-bold uppercase leading-relaxed max-w-2xl mx-auto opacity-95">
              S4HEL Online University is committed to the prevention of financial malpractice. We maintain rigorous standards of verification to ensure all clients adhere to the Corporate Transparency Act (CTA) and federal Beneficial Ownership Information (BOI) reporting requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80 pt-4">
              <span className="text-[9px] font-black tracking-widest uppercase flex items-center gap-1.5"><CheckCircle size={10} /> IRS Standard Compliance</span>
              <span className="text-[9px] font-black tracking-widest uppercase flex items-center gap-1.5"><CheckCircle size={10} /> State Nexus Integrity</span>
              <span className="text-[9px] font-black tracking-widest uppercase flex items-center gap-1.5"><CheckCircle size={10} /> KYC/AML Alignment</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: LEADERSHIP SUMMARY --- */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <Users size={28} className="text-[#64FFDA] mx-auto opacity-50" />
          <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed">
            &quot;Our goal is to be the silent engine behind the next generation of global unicorns. S4HEL handles the friction of law so founders can focus on the fire of innovation.&quot;
          </p>
        </section>

      </div>
    </div>
  );
}