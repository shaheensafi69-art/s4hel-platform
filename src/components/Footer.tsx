"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // لینک‌ها دقیقاً بر اساس نام پوشه‌های اسکرین‌شات شما تنظیم شده‌اند
  const footerLinks = {
    services: [
      { name: "How to Start LLC", href: "/en/blog/how-to-start-us-llc" },
      { name: "EIN Tax ID Guide", href: "/en/blog/ein-tax-id-guide" },
      { name: "Registered Agent", href: "/en/blog/registered-agent-importance" },
      { name: "US Business Address", href: "/en/blog/us-business-address-service" },
    ],
    intelligence: [
      { name: "ITIN for Non-Residents", href: "/en/blog/itin-for-non-residents" },
      { name: "Stripe Setup", href: "/en/blog/stripe-for-internati...ounders" }, // نام پوشه ناقص بود، نام کامل را در کد جایگزین کنید
      { name: "LLC vs Corporation", href: "/en/blog/llc-vs-corporation" },
      { name: "Mercury vs Relay", href: "/en/blog/mercury-vs-relay-bank" },
    ],
    compliance: [
      { name: "Annual Report Info", href: "/en/blog/annual-report-info" },
      { name: "Operating Agreement", href: "/en/blog/operating-agreem...template" }, // نام پوشه ناقص بود، نام کامل را در کد جایگزین کنید
      { name: "Wyoming LLC Guide", href: "/en/blog/wyoming-llc-guide" },
      { name: "New Mexico LLC", href: "/en/blog/new-mexico-llc-advantages" },
    ]
  };

  return (
    <footer className="relative z-10 bg-[#020C1B] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter uppercase">
              S4<span className="text-[#64FFDA]">HEL</span>
            </Link>
            <p className="text-[#8892B0] text-xs leading-relaxed italic pr-4">
              Providing professional infrastructure and corporate intelligence for global founders.
            </p>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#8892B0] text-[11px] font-medium hover:text-[#64FFDA] transition-colors italic uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Intelligence */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8">Intelligence</h4>
            <ul className="space-y-4">
              {footerLinks.intelligence.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#8892B0] text-[11px] font-medium hover:text-[#64FFDA] transition-colors italic uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compliance */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8">Compliance</h4>
            <ul className="space-y-4">
              {footerLinks.compliance.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#8892B0] text-[11px] font-medium hover:text-[#64FFDA] transition-colors italic uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#8892B0] text-[9px] font-mono uppercase tracking-[0.2em]">
            © {currentYear} S4HEL INTELLIGENCE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <Link href="/en/privacy" className="text-[#8892B0] text-[9px] uppercase hover:text-[#64FFDA]">Privacy</Link>
            <Link href="/en/terms" className="text-[#8892B0] text-[9px] uppercase hover:text-[#64FFDA]">Terms</Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[#495670] text-[8px] leading-relaxed max-w-4xl mx-auto italic uppercase tracking-widest opacity-50">
            S4HEL is a technology platform and consultancy. We are not a law firm and do not provide legal or tax advice.
          </p>
        </div>
      </div>
    </footer>
  );
}