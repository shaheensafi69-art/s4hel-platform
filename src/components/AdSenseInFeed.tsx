"use client";

import React, { useEffect, useRef } from "react";

interface AdSenseInFeedProps {
  className?: string;
  label?: string;
}

export default function AdSenseInFeed({
  className = "",
  label = "Sponsored Partner",
}: AdSenseInFeedProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    // Only push once and only in client environment
    if (typeof window !== "undefined" && !isPushed.current) {
      try {
        const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || [];
        adsbygoogle.push({});
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = adsbygoogle;
        isPushed.current = true;
      } catch (err) {
        // Suppress errors during development or when blocked by ad blockers
        console.debug("AdSense push note:", err);
      }
    }
  }, []);

  return (
    <div
      className={`w-full max-w-5xl mx-auto my-12 px-2 transition-all duration-300 ${className}`}
      aria-label="Sponsored Content"
    >
      <div className="relative rounded-3xl bg-[#091D34]/70 border border-white/10 hover:border-[#FF7A00]/40 p-4 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 group">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF7A00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Minimalist Professional Header (Discreet & Non-Intrusive) */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 font-bold">
              {label}
            </span>
          </div>
          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
            Verified Partner Network
          </span>
        </div>

        {/* Fluid Variable-Height AdSense Unit */}
        <div className="w-full min-h-[90px] flex items-center justify-center overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-ad-client="ca-pub-6551903544426492"
            data-ad-slot="5714273286"
          />
        </div>
      </div>
    </div>
  );
}
