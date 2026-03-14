"use client";
import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#64FFDA";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#64FFDA]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#64FFDA] font-mono text-[10px] uppercase tracking-[0.8em] mb-6 block"
          >
            Global Support Nexus
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64FFDA] to-white">TOUCH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#8892B0] text-lg font-medium italic">
            Connect with our strategic consultants to begin your United States business journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-10 border-l-4 border-[#64FFDA] pl-6">
              Official Channels
            </h2>

            {/* Email Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 bg-[#112240] rounded-[40px] border border-white/5 flex flex-col gap-4"
            >
              <span className="text-[#64FFDA] text-[10px] font-black uppercase tracking-widest">Executive Email</span>
              <a href="mailto:sahelsalem@s4hel.com" className="text-xl md:text-2xl font-bold text-white hover:text-[#64FFDA] transition-colors">
                sahelsalem@s4hel.com
              </a>
            </motion.div>

            {/* Phone & WhatsApp Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-10 bg-[#112240] rounded-[40px] border border-white/5 flex flex-col gap-4"
            >
              <span className="text-[#64FFDA] text-[10px] font-black uppercase tracking-widest">Global Hotline & WhatsApp</span>
              <a href="tel:+447740589731" className="text-xl md:text-2xl font-bold text-white hover:text-[#64FFDA] transition-colors">
                +44 7740 589731
              </a>
              <div className="pt-4">
                <a 
                  href="https://wa.me/447740589731" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 text-[#25D366] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.321 1.389 5.166 1.39h.005c5.732 0 10.396-4.662 10.399-10.393 0-2.779-1.081-5.391-3.044-7.354s-4.575-3.042-7.354-3.042c-5.732 0-10.395 4.664-10.398 10.397 0 2.128.63 4.2 1.819 5.969l-.996 3.637 3.714-.974zm11.367-7.44c-.273-.137-1.617-.798-1.867-.89-.25-.09-.432-.137-.613.137s-.705.89-.864 1.072-.318.204-.591.068c-.273-.137-1.154-.425-2.2-1.358-.813-.726-1.362-1.622-1.521-1.895s-.017-.421.119-.557c.124-.124.273-.318.409-.477.136-.159.182-.273.273-.455s.045-.341-.023-.477c-.068-.137-.613-1.477-.841-2.022-.222-.534-.446-.462-.613-.471l-.523-.006c-.182 0-.477.068-.727.341s-.954.932-.954 2.273 1.023 2.636 1.159 2.818c.136.182 2.014 3.076 4.88 4.319.682.296 1.214.474 1.628.606.685.217 1.307.186 1.8.113.55-.082 1.617-.66 1.844-1.297.227-.636.227-1.183.159-1.297-.069-.114-.25-.204-.523-.341z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#112240]/50 p-12 rounded-[60px] border border-white/5 backdrop-blur-sm shadow-2xl">
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 italic">Secure Inquiry Form</h3>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#64FFDA] ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#0A192F] border border-white/10 rounded-full px-8 py-5 text-sm focus:border-[#64FFDA] outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#64FFDA] ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="office@example.com" 
                  className="w-full bg-[#0A192F] border border-white/10 rounded-full px-8 py-5 text-sm focus:border-[#64FFDA] outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#64FFDA] ml-4">Message / Business Intent</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your business goals..." 
                  className="w-full bg-[#0A192F] border border-white/10 rounded-[30px] px-8 py-6 text-sm focus:border-[#64FFDA] outline-none transition-all text-white resize-none"
                />
              </div>
              <button className="w-full py-6 bg-white text-[#020C1B] rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-[#64FFDA] transition-all shadow-xl">
                Transmit Inquiry
              </button>
            </form>
          </div>

        </div>

        {/* Support Disclaimer */}
        <div className="mt-32 p-10 border border-white/5 rounded-[50px] text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-[#495670] uppercase tracking-widest leading-loose italic">
            Priority Support: Our executive consultants typically respond within 12-24 business hours. All data transmitted through this portal is encrypted and handled according to our international privacy standards.
          </p>
        </div>

      </div>
    </div>
  );
}