"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, Send, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function EliteContactPage() {
  // Input Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [subject, setSubject] = useState("General Compliance Query");
  const [message, setMessage] = useState("");
  
  // Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      label: "Official Location",
      value: "1001 S Main St Ste 500, Kalispell, Montana 59901",
      icon: <MapPin size={24} />,
      link: "#"
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

  // LIVE TELEGRAM TICKET DISPATCH GATEWAY
  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const BOT_TOKEN = "8596813220:AAF9MDvHYag9H2h_HpnKoAVvcVkJxEGeOKw";
    const CHAT_ID = "6222427797";

    const telegramMessage = `
📩 *S4HEL NEXUS NEW SUPPORT TICKET* 📩
──────────────────
👤 *Sender Name:* ${name}
📧 *Email Address:* ${email}
📞 *Phone/Contact:* ${phoneNum || "Not Provided"}
📌 *Subject:* ${subject}
──────────────────
📝 *Message / Request Details:*
"${message}"
──────────────────
🌐 *Node Status:* Direct Dispatch Active
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
        setName("");
        setEmail("");
        setPhoneNum("");
        setMessage("");
      } else {
        alert("Transmission failure. Telegram interface rejected package.");
      }
    } catch (error) {
      console.error(error);
      alert("API Gateway routing timeout.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-20 px-6 relative overflow-hidden font-sans selection:bg-[#64FFDA]/30">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#64FFDA]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* HEADER: MASSIVE & BOLD */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#64FFDA]"></div>
            <span className="text-[#64FFDA] font-black text-[10px] uppercase tracking-[0.6em]">Nexus Connection</span>
          </motion.div>
          
          <h1 className="text-[12vw] md:text-[120px] font-black text-white uppercase tracking-tighter leading-[0.85] mb-6 italic">
            LET'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] via-white to-[#64FFDA] italic-shifter">CONNECT</span>
          </h1>
        </div>

        {/* CONTACT INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              className="group p-8 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-md flex flex-col justify-between h-[260px] hover:border-[#64FFDA]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/5 border border-[#64FFDA]/10 flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#020C1B] transition-all duration-300">
                {info.icon}
              </div>
              
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#8892B0]/40 block">{info.label}</span>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#64FFDA] transition-colors break-words">{info.value}</h3>
              </div>

              <div className="flex justify-end opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-[#64FFDA]" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* LIVE TICKETING & WHATSAPP INTERCEPT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT AREA: DISPATCH ENCRYPTED SUPPORT TICKET */}
          <div className="lg:col-span-7 bg-[#112240]/20 backdrop-blur-2xl border border-white/5 p-6 md:p-12 rounded-3xl shadow-2xl space-y-6">
            <div className="border-b border-white/5 pb-4 flex items-center gap-3">
              <MessageSquare size={22} className="text-[#64FFDA]" />
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">DISPATCH COMPLIANCE TICKET</h2>
                <p className="text-[11px] text-[#8892B0] italic mt-0.5">Fill out your parameters. Requests parse instantly to our central Telegram operations panel.</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  onSubmit={handleTicketSubmit} className="space-y-4"
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Your Name / Identity</label>
                      <input
                        type="text" required placeholder="Enter full name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Corporate Email Address</label>
                      <input
                        type="email" required placeholder="founder@yourdomain.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Contact Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Phone Parameter (Optional)</label>
                      <input
                        type="text" placeholder="+1 (000) 000-0000" value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all"
                      />
                    </div>
                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Ticket Core Subject</label>
                      <select
                        value={subject} onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#0A192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all cursor-pointer"
                      >
                        <option value="General Compliance Query">General Compliance Query</option>
                        <option value="TikTok Shop Verification Dispute">TikTok Shop Verification Dispute</option>
                        <option value="Corporate Entity Scaling Help">Corporate Entity Scaling Help</option>
                        <option value="Technical Gateway Glitch">Technical Gateway Glitch</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Description */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase opacity-40 block text-white">Detailed Request / Issue Manual</label>
                    <textarea
                      required rows={5} placeholder="Describe your operational bottleneck or request completely..." value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#64FFDA]/40 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full mt-2 py-4 bg-[#64FFDA] text-[#020C1B] rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:shadow-[0_4px_20px_rgba(100,255,218,0.3)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">ROUTING SECURE ENCRYPTED TICKET...</span>
                    ) : (
                      <>
                        Transmit Support Request <Send size={11} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="p-8 border border-[#64FFDA]/20 bg-[#64FFDA]/5 rounded-2xl text-center space-y-4 py-12"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={44} className="text-[#64FFDA] mx-auto animate-bounce" />
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">TICKET DISPATCH TRANSMITTED</h4>
                  <p className="text-xs text-[#8892B0] leading-relaxed italic max-w-md mx-auto">
                    Your transmission has successfully bypassed firewalls. The S4HEL Telegram Monitoring Bot has notified our live support grid. Our terminal agents will trace your handle/email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-[9px] font-mono text-[#64FFDA] uppercase border-b border-[#64FFDA]/20 pb-0.5 pt-2 hover:text-white transition-colors"
                  >
                    Open Another Support Ticket
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT AREA: WHATSAPP ELITE INTERCEPT PANEL */}
          <div className="lg:col-span-5 bg-[#0A192F] rounded-3xl border border-white/5 p-8 md:p-10 flex flex-col justify-between h-full min-h-[480px] shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/10 text-[#25D366] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#25D366]/20">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping"></span>
                Active Operational Support
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Instant WhatsApp <br /> Intelligence</h2>
              <p className="text-xs text-[#8892B0] italic leading-relaxed opacity-80">Direct, immediate encrypted connection parameters targeting our senior operations desk. Ideal for urgent international structure audits.</p>
            </div>

            <div className="space-y-4 pt-12">
              <a 
                href="https://wa.me/14063160317" target="_blank" rel="noopener noreferrer"
                className="group relative w-full py-4 bg-[#25D366] text-[#020C1B] rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center hover:bg-white hover:shadow-[0_4px_25px_rgba(37,211,102,0.3)] transition-all"
              >
                Start Telemetry Chat
                <div className="absolute -top-2.5 -right-1.5 bg-white text-[#020C1B] px-2 py-0.5 rounded-md text-[8px] font-black tracking-normal shadow-md">TEXT ONLY</div>
              </a>
              <span className="text-[9px] font-bold text-[#8892B0]/40 uppercase tracking-widest block text-center">Protected Encryption • No Voice Dispatch</span>
            </div>
          </div>

        </div>

        {/* FOOTER INFO */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px]">S4HEL Intelligence Hub</h4>
            <p className="text-[#495670] text-xs leading-relaxed italic max-w-xl">
              S4HEL functions as an independent premium infrastructure partner for global builders. Our registered operations in Montana serve as a stable nexus bridging foreign innovation vectors into the United States landscape.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-3">
            <div className="flex gap-6 text-[#64FFDA] font-black text-[9px] uppercase tracking-wider opacity-60">
              <Link href="/en/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/en/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <p className="text-[#495670] text-[9px] font-mono tracking-wider">© 2026 S4HEL HUB • ALL RIGHTS RESERVED</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .italic-shifter { font-style: italic; letter-spacing: -0.03em; }
      `}</style>
    </div>
  );
}