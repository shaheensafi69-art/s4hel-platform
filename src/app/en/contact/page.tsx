"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, Send, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
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
      label: "Official Corporate Headquarters",
      value: "1001 S Main St Ste 500, Kalispell, Montana 59901, USA",
      icon: <MapPin size={24} />,
      link: "#"
    },
    {
      label: "Executive CEO Desk (Sahel Salem)",
      value: "sahel@s4hel.com • WhatsApp: +93 70 058 2033",
      icon: <Mail size={24} />,
      link: "mailto:sahel@s4hel.com"
    },
    {
      label: "Global Operations & Phone Desk",
      value: "contact@s4hel.com • +1 406 316 0317",
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
📩 *S4HEL LLC NEW SUPPORT TICKET* 📩
──────────────────
👤 *Sender Name:* ${name}
📧 *Email Address:* ${email}
📞 *Phone/Contact:* ${phoneNum || "Not Provided"}
📌 *Subject:* ${subject}
──────────────────
📝 *Message / Request Details:*
"${message}"
──────────────────
🌐 *Jurisdiction:* S4HEL LLC Montana Executive Desk
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
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF7A00]/10 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A2540]/40 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-20">
        
        {/* HEADER */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-[#FF7A00]"></div>
            <span className="text-[#FF7A00] font-black text-[10px] uppercase tracking-[0.5em]">Executive Communications Nexus</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 italic">
            CONNECT WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">S4HEL LLC</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Reach out directly to Sahel Salem (CEO) and our Montana corporate desk for US LLC formations, 400+ platform cashout routes, SafiPay banking integration, or S4HEL Skin Serums wholesale inquiries.
          </p>
        </div>

        {/* CONTACT INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              className="group p-8 bg-[#091D34] border border-white/10 rounded-3xl backdrop-blur-md flex flex-col justify-between h-[250px] hover:border-[#FF7A00]/50 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-slate-950 transition-all duration-300">
                {info.icon}
              </div>
              
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">{info.label}</span>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#FF7A00] transition-colors break-words">{info.value}</h3>
              </div>

              <div className="flex justify-end opacity-40 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-[#FF7A00]" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* LIVE TICKETING & WHATSAPP INTERCEPT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT AREA: DISPATCH ENCRYPTED SUPPORT TICKET */}
          <div className="lg:col-span-7 bg-[#091D34] border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl space-y-6">
            <div className="border-b border-white/5 pb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00]">
                <MessageSquare size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">TRANSMIT EXECUTIVE TICKET</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">Dispatches instantly to our central executive operations monitoring grid.</p>
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
                      <label className="text-[10px] font-mono tracking-widest uppercase text-slate-300 block">Your Name / Identity</label>
                      <input
                        type="text" required placeholder="Enter full name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#07192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7A00] transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-slate-300 block">Corporate Email Address</label>
                      <input
                        type="email" required placeholder="founder@yourdomain.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#07192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7A00] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Contact Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-slate-300 block">Phone Parameter (Optional)</label>
                      <input
                        type="text" placeholder="+1 (406) 000-0000" value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        className="w-full bg-[#07192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7A00] transition-all"
                      />
                    </div>
                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-widest uppercase text-slate-300 block">Ticket Core Subject</label>
                      <select
                        value={subject} onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#07192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF7A00] transition-all cursor-pointer"
                      >
                        <option value="Montana LLC Formation & 0% Sales Tax">Montana LLC Formation &amp; 0% Sales Tax</option>
                        <option value="400+ Platforms Cashout Clearance">400+ Platforms Cashout Clearance</option>
                        <option value="S4HEL Skin Serums Wholesale & Private Label">S4HEL Skin Serums Wholesale &amp; Private Label</option>
                        <option value="SafiPay Banking Gateway Integration">SafiPay Banking Gateway Integration</option>
                        <option value="Safi Academy Educational Partnerships">Safi Academy Educational Partnerships</option>
                        <option value="General Executive Inquiry">General Executive Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Description */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-slate-300 block">Detailed Request / Issue Parameters</label>
                    <textarea
                      required rows={5} placeholder="Describe your corporate, cashout, serum formulation, or banking inquiry..." value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#07192F] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7A00] transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full mt-2 py-4 bg-gradient-to-r from-[#FF7A00] to-orange-500 text-slate-950 rounded-xl font-black uppercase tracking-widest text-[11px] hover:from-white hover:to-white hover:shadow-[0_4px_25px_rgba(255,122,0,0.4)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">TRANSMITTING ENCRYPTED TICKET...</span>
                    ) : (
                      <>
                        Transmit Support Request <Send size={13} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="p-8 border border-[#FF7A00]/30 bg-[#FF7A00]/10 rounded-2xl text-center space-y-4 py-12"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={44} className="text-[#FF7A00] mx-auto animate-bounce" />
                  <h4 className="text-white font-black text-sm uppercase tracking-wide">TICKET DISPATCH TRANSMITTED</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your transmission has been forwarded directly to the S4HEL Telegram Monitoring grid and Sahel Salem&apos;s executive desk. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-[10px] font-mono text-[#FF7A00] uppercase border-b border-[#FF7A00]/30 pb-0.5 pt-2 hover:text-white transition-colors"
                  >
                    Open Another Support Ticket
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT AREA: WHATSAPP DIRECT DESK */}
          <div className="lg:col-span-5 bg-[#091D34] rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[480px] shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/10 text-[#25D366] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#25D366]/20">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping"></span>
                Active WhatsApp Executive Desk
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                Direct WhatsApp <br /> Consultation
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Sahel Salem (CEO) on WhatsApp for fast response times on urgent Montana corporate formations, large-volume 400+ platform cashout requests, and SafiPay banking corridors.
              </p>
            </div>

            <div className="space-y-4 pt-10">
              <a 
                href="https://wa.me/93700582033" target="_blank" rel="noopener noreferrer"
                className="group relative w-full py-4 bg-[#25D366] text-slate-950 rounded-xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center hover:bg-white hover:shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all"
              >
                Chat on WhatsApp (+93 70 058 2033)
                <div className="absolute -top-2.5 -right-1.5 bg-slate-950 text-[#25D366] border border-[#25D366]/30 px-2 py-0.5 rounded-md text-[8px] font-black tracking-normal shadow-md">DIRECT CEO</div>
              </a>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block text-center">
                Montana Office: +1 406 316 0317
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}