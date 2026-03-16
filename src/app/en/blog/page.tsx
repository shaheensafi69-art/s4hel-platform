"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // اضافه کردن برای بهینه‌سازی تصاویر

const ACCENT = "#64FFDA";

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
    <Link href={`/en/blog/${post.slug}`}>
      <div className="bg-[#112240] border border-white/5 rounded-[30px] h-full flex flex-col overflow-hidden hover:border-[#64FFDA]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 relative">
        
        {/* بخش تصویر تامنیل */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={`/blog/${post.slug}/hero.jpg`} // مسیر داینامیک بر اساس اسلاگ
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#020C1B]/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* لیبل دسته‌بندی روی عکس */}
          <div className="absolute bottom-4 left-6">
             <span className="bg-[#64FFDA] text-[#020C1B] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                {post.category}
             </span>
          </div>
        </div>

        {/* بخش محتوا */}
        <div className="p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-black text-white leading-tight mb-4 group-hover:text-[#64FFDA] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-[#8892B0] font-medium italic leading-relaxed line-clamp-2">
              {post.desc}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Read Intelligence</span>
            <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-[#64FFDA]/30 transition-all" />
          </div>
        </div>

        {/* افکت نوری */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#64FFDA]/5 blur-2xl group-hover:bg-[#64FFDA]/10 transition-all" />
      </div>
    </Link>
  </motion.div>
);

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-[#020C1B] text-[#CCD6F6] pt-40 pb-20 px-6 relative">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-field" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
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