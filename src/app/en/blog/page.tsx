"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, ArrowRight, ShieldCheck, Database, LayoutGrid 
} from "lucide-react";

const blogPosts = [
  { title: "Wyoming LLC Guide", slug: "wyoming-llc-guide", category: "JURISDICTION", desc: "The gold standard for privacy and asset protection.", learningOutcome: "Learn to build an impenetrable privacy shield and save on state overhead." },
  { title: "Delaware Benefits", slug: "delaware-formation-benefits", category: "JURISDICTION", desc: "Why top investors prefer the First State.", learningOutcome: "Master the equity structures required to attract high-tier Venture Capital." },
  { title: "Open US Bank Account", slug: "open-us-bank-account-remote", category: "BANKING", desc: "Step-by-step guide to remote banking setup.", learningOutcome: "Unlock remote access to the global US financial clearing system." },
  { title: "EIN Tax ID Guide", slug: "ein-tax-id-guide", category: "TAX", desc: "Everything you need to know about your Federal Tax ID.", learningOutcome: "Understand how to secure your corporate tax identity without an SSN." },
  { title: "Mercury vs Relay Bank", slug: "mercury-vs-relay-bank", category: "BANKING", desc: "Choosing the best digital bank for your LLC.", learningOutcome: "Compare API-first banking vs. team-centric collaboration tools." },
  { title: "New Mexico LLC", slug: "new-mexico-llc-advantages", category: "JURISDICTION", desc: "The most affordable anonymous LLC option.", learningOutcome: "Establish zero-cost maintenance entities for long-term holding." },
  { title: "ITIN for Non-Residents", slug: "itin-for-non-residents", category: "TAX", desc: "Do you really need an ITIN for your business?", learningOutcome: "Navigate the IRS ITIN processing loop to manage personal US assets." },
  { title: "How to Start an LLC", slug: "how-to-start-us-llc", category: "GUIDE", desc: "A 5-step blueprint for international founders.", learningOutcome: "Get a clear 10-minute master-path to US entity initialization." },
  { title: "Registered Agent Role", slug: "registered-agent-importance", category: "COMPLIANCE", desc: "Why a professional agent is mandatory.", learningOutcome: "Learn how to filter legal service-of-process and protect identity." },
  { title: "Operating Agreement", slug: "operating-agreement-template", category: "LEGAL", desc: "Defining ownership and management structure.", learningOutcome: "Draft the internal governance constitution to bulletproof your assets." },
  { title: "Annual Report Info", slug: "annual-report-compliance", category: "COMPLIANCE", desc: "Keep your entity active and avoid penalties.", learningOutcome: "Stay compliant with state deadlines to prevent corporate dissolution." },
  { title: "US Business Address", slug: "us-business-address-service", category: "IDENTITY", desc: "How to get a premium physical address in the USA.", learningOutcome: "Establish a legitimate commercial nexus for federal compliance." },
  { title: "Virtual Phone Guide", slug: "virtual-phone-number-guide", category: "IDENTITY", desc: "Best US business phone services for global use.", learningOutcome: "Master professional cloud-based communication and 2FA loops." },
  { title: "Stripe Setup Guide", slug: "stripe-for-international-founders", category: "BANKING", desc: "Connecting Stripe to your non-resident LLC.", learningOutcome: "Build a high-velocity payment gateway with zero onboarding friction." },
  { title: "LLC vs Corporation", slug: "llc-vs-corporation", category: "LEGAL", desc: "Choosing the right structure for your vision.", learningOutcome: "Decide between tax-neutral pass-throughs or equity-ready corporations." },
];

const BlogCard = ({ post, index }: { post: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -10 }}
    className="group"
  >
    <Link href={`/en/blog/${post.slug}`}>
      <div className="bg-[#112240]/40 border border-white/5 rounded-[30px] h-full flex flex-col overflow-hidden hover:border-[#64FFDA]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 relative">
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={`/blog/${post.slug}/hero.jpg`} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] to-transparent" />
          <span className="absolute bottom-4 left-6 bg-[#64FFDA] text-[#020C1B] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
            {post.category}
          </span>
        </div>
        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-black text-white leading-tight mb-2 group-hover:text-[#64FFDA] transition-colors">{post.title}</h3>
            <p className="text-sm text-[#8892B0] font-medium italic mb-6">{post.desc}</p>
            <div className="p-4 bg-[#020C1B]/50 rounded-2xl border border-white/5">
                <p className="text-[11px] text-[#64FFDA] font-bold uppercase tracking-wide">What you will learn:</p>
                <p className="text-[12px] text-[#CCD6F6] mt-1 italic">{post.learningOutcome}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="mb-24 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-[90px] font-black text-white tracking-tighter uppercase italic mb-8">
            CORPORATE <span className="text-[#64FFDA]">INTELLIGENCE</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-[#8892B0] max-w-2xl mx-auto italic">
            Strategic blueprints for global founders. Choose your learning path to scale your borderless empire.
          </p>
        </header>

        <section className="mb-24 p-8 md:p-12 rounded-[40px] bg-gradient-to-r from-[#112240] to-[#0a1529] border border-[#64FFDA]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
              <GraduationCap className="text-[#64FFDA]" /> Build Your Own Formation Agency
            </h3>
            <p className="text-sm text-[#8892B0] max-w-xl italic">
              Don't just read about formation—master it. Join our Academy to learn step-by-step how to launch your own US formation agency, master TikTok Shop compliance, or build independent fintech platforms.
            </p>
          </div>
          <Link href="/en/academy" className="px-8 py-4 bg-[#64FFDA] text-[#020C1B] rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all flex items-center gap-2">
            Enter Academy Hub <ArrowRight size={14} />
          </Link>
        </section>

        <section>
          <div className="mb-12 border-l-4 border-[#64FFDA] pl-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Knowledge Library</h2>
            <p className="text-[11px] font-mono tracking-widest uppercase text-[#64FFDA]/60 mt-2">TECHNICAL DOCUMENTATION & COMPLIANCE LOGS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} post={post} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-32 py-20 border-t border-white/5">
            <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                    <ShieldCheck className="mx-auto text-[#64FFDA]" size={32}/>
                    <h4 className="font-black uppercase tracking-widest text-sm">Verified Compliance</h4>
                    <p className="text-[12px] text-[#8892B0]">Audited against current IRS & State standards.</p>
                </div>
                <div className="space-y-4">
                    <Database className="mx-auto text-[#64FFDA]" size={32}/>
                    <h4 className="font-black uppercase tracking-widest text-sm">Deep Intelligence</h4>
                    <p className="text-[12px] text-[#8892B0]">Zero-fluff technical manuals for startup growth.</p>
                </div>
                <div className="space-y-4">
                    <LayoutGrid className="mx-auto text-[#64FFDA]" size={32}/>
                    <h4 className="font-black uppercase tracking-widest text-sm">Structured Scaling</h4>
                    <p className="text-[12px] text-[#8892B0]">Every module indexed for your enterprise success.</p>
                </div>
            </div>
        </section>
      </div>

      <div className="stars-field" />
      <style jsx global>{`
        .stars-field {
          position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.05;
          background-image: radial-gradient(1px 1px at 40px 60px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 150px, #64FFDA, rgba(0,0,0,0));
          background-size: 300px 300px;
        }
      `}</style>
    </div>
  );
}