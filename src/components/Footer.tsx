"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Globe, Shield, Zap, ChevronRight, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#020C1B] border-t border-[#64FFDA]/10 pt-24 pb-12 relative overflow-hidden font-sans">
      {/* Decorative Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#64FFDA 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand, Concept & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/en" className="inline-block group">
              <span className="text-3xl font-black text-white tracking-[-0.05em] uppercase italic flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.2em] text-[#8892B0] not-italic mb-1">WELCOME TO</span>
                <div>
                  S4<span className="text-[#64FFDA] transition-all duration-500 group-hover:tracking-widest">HEL</span>
                  <span className="text-xs font-light tracking-normal text-[#8892B0] ml-2 not-italic">UNIVERSITY</span>
                </div>
              </span>
            </Link>
            <p className="text-[#8892B0] text-sm leading-relaxed max-w-md font-medium opacity-80 italic">
              Your premier destination for business education, LLC formation guides, and professional registered agent services. Expert-led content for entrepreneurs worldwide.
            </p>
            
            {/* Stay Updated - Newsletter Form required for Awin verification */}
            <div className="space-y-3 max-w-md">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#64FFDA]/50 flex-grow transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#64FFDA] text-[#020C1B] font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[#8892B0]/60 text-[10px]">No spam. Unsubscribe anytime.</p>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Shield size={20} /></div>
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Globe size={20} /></div>
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Zap size={20} /></div>
            </div>
          </div>

          {/* Rapid Access Navigation & Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { 
                label: "Quick Links", 
                items: [
                  { name: "Home", href: "/en" },
                  { name: "All Articles", href: "/en/articles" },
                  { name: "About Us", href: "/en/about" },
                  { name: "Contact Us", href: "/en/contact" }
                ] 
              },
              { 
                label: "Legal", 
                items: [
                  { name: "Privacy Policy", href: "/en/privacy" },
                  { name: "Cookie Policy", href: "/en/cookies" },
                  { name: "Terms of Service", href: "/en/terms" },
                  { name: "Affiliate Disclosure", href: "/en/disclosure" },
                  { name: "General Disclaimer", href: "/en/disclaimer" }
                ] 
              },
              { 
                label: "Categories", 
                items: [
                  { name: "Business", href: "#" },
                  { name: "Registered Agent For LLC", href: "#" },
                  { name: "USA LLC Formation", href: "#" }
                ] 
              }
            ].map((col, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white font-black text-[10px] tracking-[0.3em] uppercase opacity-60">{col.label}</h4>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="text-[#8892B0] text-[11px] font-bold uppercase italic hover:text-[#64FFDA] flex items-center group transition-all">
                        <ChevronRight size={10} className="mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info Section - Synced with S4HEL */}
            <div className="space-y-6">
              <h4 className="text-white font-black text-[10px] tracking-[0.3em] uppercase opacity-60">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-[#8892B0] text-[11px] font-mono">
                  <Mail size={12} className="text-[#64FFDA]" />
                  <span className="break-all">contact@s4hel.com</span>
                </li>
                <li className="flex items-center gap-2 text-[#8892B0] text-[11px] font-mono">
                  <Globe size={12} className="text-[#64FFDA]" />
                  <span>s4hel.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Status & Legal Footer Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#64FFDA] animate-pulse" />
              <span className="text-[#495670] text-[9px] font-mono tracking-widest uppercase">Global Educational Systems Operational</span>
            </div>
            
            <p className="text-[#8892B0] text-[9px] font-bold tracking-tighter italic uppercase">
              © {currentYear} S4HEL Online University / S4HEL LLC. All rights reserved.
            </p>
            {/* Disclaimer critical for affiliate approvals */}
            <p className="text-[#8892B0]/40 text-[9px] max-w-2xl leading-normal">
              Designed & Developed with ♥ for the business community. All content is for informational and educational purposes only. Not legal or financial advice.
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="/en/privacy" className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all border-b border-[#64FFDA]/20 pb-1">
              Privacy_Log
            </Link>
            <Link href="/en/terms" className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all border-b border-[#64FFDA]/20 pb-1">
              Terms_Of_Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}