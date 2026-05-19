"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, CheckCircle, Clock, Award, ShieldCheck, 
  Sparkles, Tv, Users, GraduationCap, ChevronRight 
} from "lucide-react";

export default function S4HEL_Academy_Registration() {
  // Navigation & Interactive Tabs State
  const [activeTab, setActiveTab] = useState("tiktok");
  
  // Registration Form Flow States
  const [showForm, setShowForm] = useState(false);
  const [studyType, setStudyType] = useState<"recorded" | "live" | null>(null);
  
  // Input Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telegramHandle, setTelegramHandle] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("TikTok Shop Complete Mastery");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fully Detailed Business Hub Curriculum Database in English with Dedicated Instructor Profiles
  const businessKnowledge = {
    tiktok: {
      title: "TikTok Shop E-Commerce Engine",
      tag: "HIGH VELOCITY TRAFFIC",
      desc: "Master the fastest growing social commerce architecture globally. This program covers everything from initial merchant onboarding to driving explosive viral transaction volume.",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      bullets: [
        "How to construct and securely verify a professional TikTok Shop merchant store.",
        "Advanced product research mechanics to pinpoint high-margin, winning assets.",
        "Sourcing logistics: How to safely procure products from China and route them to global fulfillment centers.",
        "Organic and paid marketing frameworks powered by advanced AI video targeting strategies.",
        "Order orchestration: Preparing inventory metrics for flawless cross-border shipping and customer delivery."
      ]
    },
    amazon: {
      title: "Amazon FBA & FBM Global Distribution Logistics",
      tag: "LOGISTICS HEAVY ACADEMY",
      desc: "Navigate the largest marketplace pipeline worldwide. This architecture trains founders on implementing corporate asset automation from private label launches to volume operations.",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      bullets: [
        "How to successfully initialize and fully pass identity verification for Amazon Seller Central.",
        "Utilizing premium telemetry data index tools to source profitable product listings.",
        "Procuring direct from tier-one manufacturers in China with optimal tariff minimization algorithms.",
        "Strategic market launch models to rank products on page-one search results.",
        "Mastering shipping templates, custom clearance documentation, and strict warehouse routing standards.",
        "How to safely launch a high-volume Wholesale model backed by corporate authorization.",
        "Engineering your sovereign asset via Private Label infrastructure.",
        "Deploying and managing optimized FBA (Fulfillment by Amazon) and FBM (Fulfillment by Merchant) systems simultaneously."
      ]
    },
    shopify: {
      title: "Shopify Enterprise Infrastructure & Dropshipping",
      tag: "SOVEREIGN DIGITAL RETAIL",
      desc: "Build bulletproof independent storefronts engineered to scale. S4HEL maps the transition from third-party networks to sovereign, high-converting digital storefronts backed by premium payment gateways.",
      instructor: "Shaheen Safi",
      avatar: "/shaheen.jpeg",
      bullets: [
        "How to build high-converting, professional custom-coded Shopify storefronts.",
        "Sourcing trending products with dynamic buyer metrics and extreme conversion coefficients.",
        "Configuring zero-inventory infrastructure: Sourcing from China directly to global consumer doors.",
        "Designing high-ROI ad funnels for enterprise-level product monetization.",
        "Expedited global shipping matrices and automated customer notification tracks.",
        "How to build low-overhead White Label ventures for fast cash-flow testing.",
        "Transitioning into complex Private Label ecosystems with absolute brand custody.",
        "Automating custom Dropshipping networks with continuous telemetry tracking loops."
      ]
    },
    trading: {
      title: "Forex, Crypto, Commodities & Indexes Matrix",
      tag: "LIQUIDITY & ALGORITHMS",
      desc: "Decode the algorithms governing global capital delivery. S4HEL delivers state-of-the-art price action mechanics designed to comprehend corporate liquidity positions with absolute emotional control.",
      instructor: "Mujtaba Rahmani",
      avatar: "/mujtaba.jpeg",
      bullets: [
        "How to interpret global economic metrics and macro-fundamental cycles.",
        "Comprehensive training in institutional Inner Circle Trader (ICT) logic.",
        "Advanced deployment of Smart Money Concepts (SMC) structure tracking.",
        "Classic technical analysis hybridized with modern structural liquidity sweeps.",
        "Mastery of Central Range Theory (CRT) entry and exit delivery patterns.",
        "Executing systematic high-risk-reward Swing Trading structures over macro horizons.",
        "Advanced order-flow execution pipelines for micro-level Scalp Trading runs.",
        "Market Psychology: Overcoming human behavioral traps inside structural execution.",
        "Elite account funding metrics and institutional risk mitigation charts.",
        "Biological self-control and strict discipline management under intense market exposure."
      ]
    },
    development: {
      title: "Full-Stack Web Development & Flutter Applications",
      tag: "AI INTEGRATED SOFTWARE CODE",
      desc: "Formulate proprietary corporate software infrastructure. This module trains global non-residents to construct responsive websites and multi-platform native mobile applications using cutting-edge development tech.",
      instructor: "Shaheen Safi",
      avatar: "/shaheen.jpeg",
      bullets: [
        "How to build fast, modern, responsive websites optimized for high conversion velocity.",
        "Constructing fully automated dynamic web layers integrated with artificial intelligence (AI).",
        "Developing cross-platform mobile apps from raw engineering specs.",
        "How to execute seamless API integrations for financial checkout routing and relational databases.",
        "Building multi-platform native mobile solutions utilizing Google's powerful Flutter framework."
      ]
    },
    formation: {
      title: "US Corporate LLC Formation & Brand Identity",
      tag: "PREMIUM LEGAL ARCHITECTURE (HIGH-TIER)",
      desc: "The core foundation of your global enterprise. Learn how to legally register, fortify, and maintain United States business structures with premium compliance access and verified corporate infrastructure.",
      instructor: "Sahel Salem",
      avatar: "/sahel.jpeg",
      bullets: [
        "How to register a secure US Limited Liability Company (LLC) in premium states (WY, DE, NM).",
        "Navigating USPTO systems for official Trademark and intellectual property registration.",
        "Acquiring elite Registered Agent services to maintain perpetual Good Standing status.",
        "Holistic audit benchmarking of the industry's highest rated corporate registration networks.",
        "Opening robust US Business Banking accounts (Mercury, Relay) from any global location.",
        "Securing prestigious, permanent US business phone tracks and corporate communication links.",
        "Procuring enterprise hosting solutions and secure digital routing infrastructure.",
        "Constructing verified professional corporate emails under your sovereign business domain."
      ]
    }
  };

  // REAL LIVE TELEGRAM BOT DISPATCH GATEWAY - INCLUDES EVERY SINGLE FIELD
  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studyType) return;
    setIsSubmitting(true);

    const BOT_TOKEN = "8596813220:AAF9MDvHYag9H2h_HpnKoAVvcVkJxEGeOKw";
    const CHAT_ID = "6222427797";

    const telegramMessage = `
⚡️ *S4HEL ACADEMY NEW REGISTRATION* ⚡️
──────────────────
👤 *Founder Name:* ${fullName}
📧 *Corporate Email:* ${email}
✈️ *Telegram Handle:* @${telegramHandle.replace("@", "")}
📚 *Target Course:* ${selectedCourse}
🎓 *Learning Track:* ${studyType === "recorded" ? "🔴 RECORDED CLASSES" : "🔵 LIVE SCREEN INTERCEPT"}
──────────────────
🌐 *Status:* Verified Operational Request
🕒 *Timestamp:* ${new Date().toLocaleString()}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFullName("");
        setEmail("");
        setTelegramHandle("");
      } else {
        alert("Transmission failure. Telegram Node network error.");
      }
    } catch (error) {
      console.error(error);
      alert("API Gateway timeout. Check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-32 px-6 relative overflow-hidden font-sans selection:bg-[#64FFDA]/30">
      
      {/* Dynamic Network Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#64FFDA]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        
        {/* --- SECTION 1: ACADEMY CREDIBILITY HEADER --- */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="text-[#64FFDA] bg-[#64FFDA]/10 px-4 py-1.5 rounded-full border border-[#64FFDA]/20 font-mono text-[10px] uppercase tracking-[0.4em] inline-block">
            S4HEL ACADEMIC INTEL INFRASTRUCTURE
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">
            ONE OF THE PREMIER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-white to-[#64FFDA] not-italic">GLOBAL EDUCATION</span> ACADEMIES
          </h1>
          <p className="text-sm md:text-base text-[#8892B0] font-medium leading-relaxed italic opacity-90 max-w-3xl mx-auto">
            S4HEL Online University stands as an absolute authority for digital commerce development. We convert multi-jurisdictional bottlenecks into clean enterprise revenue systems. Explore our operational spheres below.
          </p>
        </section>

        {/* --- SECTION 2: INTERACTIVE BUSINESS EXPLORATION MATRIX --- */}
        <section className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase text-[#64FFDA]">ACADEMY SPECIALIZATIONS</h2>
            <p className="text-white text-lg font-bold uppercase tracking-tight">Click Modules to Inspect Curriculums</p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {[
              { id: "tiktok", label: "TikTok Shop Mastery" },
              { id: "amazon", label: "Amazon FBA/FBM Logistics" },
              { id: "shopify", label: "Shopify Infrastructure" },
              { id: "trading", label: "Forex & Crypto Trading" },
              { id: "development", label: "Web & Flutter App Coding" },
              { id: "formation", label: "US LLC Formation (VIP)" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  activeTab === tab.id
                    ? "bg-[#64FFDA] text-[#020C1B] border-[#64FFDA] shadow-[0_4px_15px_rgba(100,255,218,0.25)] scale-105"
                    : "bg-white/5 border-white/5 text-[#CCD6F6] hover:border-[#64FFDA]/20"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Knowledge Content Display with Large Box Instructor Profiling */}
          <div className="bg-[#112240]/20 border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl max-w-5xl mx-auto min-h-[400px] flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              {Object.entries(businessKnowledge).map(([key, value]) => key === activeTab && (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Left Side: Course Details */}
                  <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
                    <div>
                      <span className="text-[#64FFDA] font-mono text-[9px] tracking-widest uppercase block mb-1">{value.tag}</span>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{value.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#8892B0] leading-relaxed italic opacity-90">{value.desc}</p>
                    
                    <ul className="space-y-3 pt-2">
                      {value.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-white/90 font-medium leading-relaxed">
                          <ChevronRight size={14} className="text-[#64FFDA] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: PREMIUM LARGE BOX INSTRUCTOR CARD */}
                  <div className="lg:col-span-5 bg-[#0A192F]/80 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-6 text-center shadow-xl relative overflow-hidden group min-h-[350px]">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#64FFDA] to-transparent opacity-40" />
                    
                    <span className="text-[9px] font-mono tracking-[0.3em] text-[#8892B0]/50 uppercase block">ACADEMY FACULTY DIRECT LEVEL</span>
                    
                    {/* Large Photo Frame */}
                    <div className="relative w-40 h-40 rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#020C1B] transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={value.avatar} 
                        alt={value.instructor} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-white font-black uppercase tracking-tight text-lg leading-none">{value.instructor}</h4>
                      <p className="text-[10px] text-[#64FFDA] font-mono uppercase tracking-widest pt-1">S4HEL Senior Chief Faculty</p>
                    </div>

                    <div className="pt-4 border-t border-white/5 w-full flex items-center justify-center gap-4 text-[9px] font-mono text-[#8892B0]/60">
                      <span>VERIFIED PROFILE</span>
                      <div className="w-1 h-1 bg-[#64FFDA] rounded-full" />
                      <span>LIVE DISPATCH ACTIVE</span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>

            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-[10px] text-[#8892B0]/40 italic">Note: Full premium module execution maps require authorization terminal configuration below.</p>
              <span className="text-[9px] font-mono tracking-wider text-white/20 uppercase">S4HEL ACADEMIC PROTOCOL UNLOCKED</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: STEP-BY-STEP FLOW ENROLLMENT PORTAL --- */}
        <section id="enrollment-terminal" className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <GraduationCap size={28} className="text-[#64FFDA] mx-auto opacity-70" />
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Academy Terminal Access</h2>
            <p className="text-xs text-[#8892B0]">Initialize your verification parameter ledger inside our main core data cluster.</p>
          </div>

          <div className="bg-[#112240]/10 border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: INITIAL ACTION TRIGGER BUTTON */}
              {!showForm && (
                <motion.div className="text-center py-6" exit={{ opacity: 0, scale: 0.95 }}>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-14 py-5 bg-[#64FFDA] text-[#020C1B] rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white hover:shadow-[0_4px_25px_rgba(100,255,218,0.35)] transition-all duration-300 scale-105"
                  >
                    Register for Course
                  </button>
                </motion.div>
              )}

              {/* STEP 2: CLASS TYPE SELECTOR (RECORDED OR LIVE) */}
              {showForm && !studyType && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 text-center py-4"
                >
                  <h3 className="text-white text-base font-bold uppercase tracking-wide">Select Learning Modality</h3>
                  <p className="text-xs text-[#8892B0] max-w-md mx-auto">Choose how you wish to process our operational intelligence models before loading terminal forms.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl mx-auto">
                    <button
                      onClick={() => setStudyType("recorded")}
                      className="p-5 bg-white/5 border border-white/10 rounded-xl text-left hover:border-[#64FFDA]/40 hover:bg-white/[0.06] transition-all group"
                    >
                      <Tv size={18} className="text-[#64FFDA] mb-2" />
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Recorded Classes</h4>
                      <p className="text-[11px] text-[#8892B0] italic mt-1 leading-relaxed">I want to study recorded courses. S4HEL administrators will transmit complete archives to your handle.</p>
                    </button>

                    <button
                      onClick={() => setStudyType("live")}
                      className="p-5 bg-white/5 border border-white/10 rounded-xl text-left hover:border-[#64FFDA]/40 hover:bg-white/[0.06] transition-all group"
                    >
                      <Users size={18} className="text-[#64FFDA] mb-2" />
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Live Classes</h4>
                      <p className="text-[11px] text-[#8892B0] italic mt-1 leading-relaxed">I want to participate in live cohort sessions, interactive sprints, and diagnostic tracking runs.</p>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CORE DATA DISPATCH INPUT FORM */}
              {showForm && studyType && !submitSuccess && (
                <motion.form
                  initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleRegistration} className="space-y-4"
                >
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[9px] font-mono text-[#64FFDA] bg-[#64FFDA]/5 border border-[#64FFDA]/10 px-3 py-1 rounded-md uppercase font-bold">
                      TRACK: {studyType === "recorded" ? "RECORDED MANIFEST" : "LIVE COHORT INTERCEPT"}
                    </span>
                    <button 
                      type="button" onClick={() => setStudyType(null)}
                      className="text-[9px] font-mono text-[#8892B0] hover:text-white uppercase border-b border-white/5"
                    >
                      Change Track
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Full Name</label>
                      <input
                        type="text" required placeholder="Legal or brand name" value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Corporate Email Address</label>
                      <input
                        type="email" required placeholder="founder@yourdomain.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Telegram Handle */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Telegram Handle Username</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-xs font-mono text-[#64FFDA]/40">@</span>
                        <input
                          type="text" required placeholder="username" value={telegramHandle}
                          onChange={(e) => setTelegramHandle(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Target Learning Stream</label>
                      <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all cursor-pointer"
                      >
                        <option value="TikTok Shop Complete Mastery">TikTok Shop Complete Mastery</option>
                        <option value="Amazon FBA/FBM Global Logistics">Amazon FBA/FBM Global Logistics</option>
                        <option value="Shopify Enterprise Infrastructure">Shopify Enterprise Infrastructure</option>
                        <option value="Forex & Crypto Trading Matrix">Forex & Crypto Trading Matrix</option>
                        <option value="Full-Stack Web & Flutter App Coding">Full-Stack Web & Flutter App Coding</option>
                        <option value="US LLC Formation & Corporate Identity (VIP)">US LLC Formation & Corporate Identity (VIP)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Terminal Trigger */}
                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 bg-[#64FFDA] text-[#020C1B] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:shadow-[0_4px_20px_rgba(100,255,218,0.3)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">DISPATCHING TELEGRAM TELEMETRY PIPELINE...</span>
                    ) : (
                      <>
                        Submit & Complete Enrollment <Send size={11} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}

              {/* SUCCESS NOTIFICATION HOOK */}
              {submitSuccess && (
                <motion.div 
                  className="p-6 border border-[#64FFDA]/20 bg-[#64FFDA]/5 rounded-2xl text-center space-y-4 py-8"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={36} className="text-[#64FFDA] mx-auto animate-bounce" />
                  <h4 className="text-white font-black text-xs uppercase tracking-wide">REGISTRATION STORED SUCCESSFULLY</h4>
                  <p className="text-xs text-[#8892B0] leading-relaxed italic max-w-md mx-auto">
                    Your enrollment request has successfully breached our central node. The S4HEL Telegram Bot has notified our administration squad. We will dispatch your course materials to your username shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitSuccess(false); setShowForm(false); setStudyType(null); }}
                    className="text-[9px] font-mono text-[#64FFDA] uppercase border-b border-[#64FFDA]/20 pb-0.5 pt-2 hover:text-white transition-colors"
                  >
                    Connect New Registration Term
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </section>

        {/* --- SECTION 4: PROTECTION DISCLOSURE NOTE --- */}
        <div className="p-6 border border-white/5 bg-white/[0.005] rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-[#64FFDA] shrink-0 opacity-80" />
            <p className="text-[11px] italic text-[#8892B0] leading-relaxed max-w-2xl">
              Compliance Framework: S4HEL Education Hub enforces extreme telemetry data protection regulations. Internal automation channels guarantee automated validation pipelines matching premium network standards.
            </p>
          </div>
          <div className="text-[9px] font-mono uppercase tracking-widest text-white/20 whitespace-nowrap">
            NODE-ID: S4HEL_ACADEMY_2026
          </div>
        </div>

      </div>
    </div>
  );
}