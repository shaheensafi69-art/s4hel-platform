"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#64FFDA"; // سبز-آبی روشن (آکوآ) برای حس آرامش

const blogPosts = [
  { title: "Wyoming LLC Guide", slug: "wyoming-llc-guide", category: "Jurisdiction", desc: "The gold standard for privacy and asset protection." },
  { title: "Delaware Benefits", slug: "delaware-formation-benefits", category: "Jurisdiction", desc: "Why top investors prefer the First State." },
  { title: "Open US Bank Account", slug: "open-us-bank-account-remote", category: "Banking", desc: "Step-by-step guide to remote banking setup." },
  { title: "EIN Tax ID Guide", slug: "ein-tax-id-guide", category: "Tax", desc: "Everything you need to know about your Federal Tax ID." },
  { title: "Mercury vs Relay Bank", slug: "mercury-vs-relay-bank", category: "Banking", desc: "Choosing the best digital bank for your LLC." },
  { title: "New Mexico LLC", slug: "new-mexico-llc-advantages", category: "Jurisdiction", desc: "The most affordable anonymous LLC option." },
  { title: "ITIN for Non-Residents", slug: "itin-for-non-residents", category: "Tax", desc: "Do you really need an ITIN for your business?" },
  { title: "How to Start an LLC", slug: "how-to-start-us-llc", category: "Guide", desc: "A 5-step blueprint for international founders." },
  { title: "Registered Agent Role", slug: "registered-agent-importance", category: "Compliance", desc: "Why a professional agent is mandatory." },
  { title: "Operating Agreement", slug: "operating-agreement-template", category: "Legal", desc: "Defining ownership and management structure." },
  { title: "Annual Report Info", slug: "annual-report-compliance", category: "Compliance", desc: "Keep your entity active and avoid penalties." },
  { title: "US Business Address", slug: "us-business-address-service", category: "Identity", desc: "How to get a premium physical address in the USA." },
  { title: "Virtual Phone Guide", slug: "virtual-phone-number-guide", category: "Identity", desc: "Best US business phone services for global use." },
  { title: "Stripe Setup Guide", slug: "stripe-for-international-founders", category: "Banking", desc: "Connecting Stripe to your non-resident LLC." },
  { title: "LLC vs Corporation", slug: "llc-vs-corporation", category: "Legal", desc: "Choosing the right structure for your vision." },
];

const BlogCard = ({ post, index }: { post: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -10 }}
    className="group"
  >
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-[#112240] border border-white/5 rounded-[45px] p-8 h-full flex flex-col justify-between hover:border-[#64FFDA]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden">
        {/* افکت نوری گوشه کارت */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#64FFDA]/5 blur-2xl group-hover:bg-[#64FFDA]/10 transition-all" />
        
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64FFDA] mb-4 block">
            {post.category}
          </span>
          <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-[#64FFDA] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-[#8892B0] font-medium italic leading-relaxed">
            {post.desc}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Read Intelligence</span>
          <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-[#64FFDA]/30 transition-all" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-20 px-6 relative">
      
      {/* زمینه ستاره‌ای */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-field" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* هدر بخش بلاگ */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter italic mb-4"
          >
            THE <span className="text-[#64FFDA]">LIBRARY</span>
          </motion.h1>
          <p className="text-xl text-[#8892B0] max-w-2xl font-medium">
            Strategic blueprints and corporate intelligence for the next generation of global entrepreneurs.
          </p>
        </div>

        {/* گرید بلاگ‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <BlogCard key={i} post={post} index={i} />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .stars-field {
          width: 100%; height: 100%;
          background-image: radial-gradient(1px 1px at 40px 60px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 150px, #64FFDA, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: drift 200s linear infinite;
        }
        @keyframes drift {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </div>
  );
}