"use client";
import React from "react";
import Link from "next/link";
import { Globe, Shield, Zap, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020C1B] border-t border-[#64FFDA]/10 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#64FFDA 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Concept */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-4xl font-black text-white tracking-[ -0.05em] uppercase">
                S4<span className="text-[#64FFDA] transition-all duration-500 group-hover:tracking-widest">HEL</span>
              </span>
            </Link>
            <p className="text-[#8892B0] text-sm leading-relaxed max-w-md font-medium opacity-80">
              Forging the digital frontier for global founders. We provide the elite-level infrastructure and regulatory intelligence required to scale without boundaries.
            </p>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Shield size={20} /></div>
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Globe size={20} /></div>
              <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64FFDA] hover:scale-110 transition-transform cursor-crosshair"><Zap size={20} /></div>
            </div>
          </div>

          {/* Rapid Access Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { label: "Solutions", items: ["How to Start LLC", "EIN Tax ID Guide", "Registered Agent"] },
              { label: "Intelligence", items: ["ITIN Guide", "Stripe Setup", "LLC vs Corp"] },
              { label: "Compliance", items: ["Annual Reports", "Operating Agreement", "State Guides"] }
            ].map((col, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white font-black text-[10px] tracking-[0.5em] uppercase opacity-50">{col.label}</h4>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-[#8892B0] text-[11px] font-bold uppercase italic hover:text-[#64FFDA] flex items-center group transition-all">
                        <ChevronRight size={10} className="mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Status & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#64FFDA] animate-pulse" />
              <span className="text-[#495670] text-[9px] font-mono tracking-widest uppercase">Global Systems Operational</span>
            </div>
            <p className="text-[#8892B0] text-[9px] font-bold tracking-tighter italic">© {currentYear} S4HEL INTELLIGENCE. RECOGNIZED WORLDWIDE.</p>
          </div>
          
          <div className="flex gap-12">
            <Link href="#" className="text-[#495670] text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy_Log</Link>
            <Link href="#" className="text-[#495670] text-[9px] uppercase tracking-[0.2em] hover:text-white transition-colors">Terms_Of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}