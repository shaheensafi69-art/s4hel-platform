"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  ShieldCheck,
  CheckCircle,
  Star,
  ShoppingBag,
  ArrowRight,
  Sun,
  Moon,
  Clock,
  Layers,
  Heart,
  Package,
  Award,
  ChevronRight,
  Truck,
  Leaf,
  FlaskConical,
  Flame,
  ArrowUpRight,
  FileText,
  BadgeCheck,
  TestTube2,
  Microscope,
  Info
} from "lucide-react";

export default function S4HEL_SkinSerumsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeRoutine, setActiveRoutine] = useState<"morning" | "night">("morning");

  // CLINICAL FORMULATION DATA - STRICTLY NO PRICES, RICH SCIENTIFIC SPECIFICATIONS
  const serumProducts = [
    {
      id: "vitamin-c",
      name: "Bio-Radiance Vitamin C 20%",
      subname: "Ferulic Acid 0.5% + Pure Vitamin E Complex (pH 3.2)",
      category: "brightening",
      badge: "CLINICAL GOLD STANDARD",
      skinType: "All Skin Types • Dull • Hyperpigmented",
      rating: "4.9 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "UV-Shielded Amber Dropper Glass",
      usage: "Morning Protocol (Daily)",
      timeIcon: <Sun size={14} className="text-[#FF7A00]" />,
      accentColor: "border-[#FF7A00]/40 hover:border-[#FF7A00]",
      glowColor: "text-[#FF7A00]",
      badgeBg: "bg-[#FF7A00]/15 text-[#FF7A00] border-[#FF7A00]/30",
      desc: "Ultra-potent pharmaceutical-grade antioxidant formulation designed to neutralize atmospheric free radicals, inhibit tyrosinase activity, reverse solar photo-damage, and accelerate natural collagen synthesis.",
      scientificSpecs: {
        activeConcentration: "20.0% Pure L-Ascorbic Acid",
        phLevel: "pH 3.2 ± 0.2 (Optimal Bioavailability)",
        texture: "Lightweight aqueous quick-penetrating essence",
        shelfLife: "24 Months (12 Months after seal puncture)",
      },
      keyIngredients: [
        "20% Ultra-Fine Pharmaceutical L-Ascorbic Acid",
        "0.5% Pure Ferulic Acid (Photoprotective Stabilizer)",
        "1.0% d-Alpha-Tocopherol (Bio-Active Vitamin E)",
        "Micro-Molecular Low Dalton Hyaluronic Acid",
      ],
      clinicalBenefits: [
        "Inhibits melanin overproduction & lightens stubborn dark spots",
        "Provides 8x biological photoprotection against UV solar radiation",
        "Boosts dermal collagen density by up to 34% within 28 days",
        "Non-comedogenic, zero silicone, zero artificial fragrance",
      ],
    },
    {
      id: "hyaluronic-acid",
      name: "Multi-Molecular Hyaluronic Acid 2%",
      subname: "Provitamin B5 (Panthenol 2%) + Marine Oligopeptides",
      category: "hydration",
      badge: "72H MULTI-DEPTH HYDRATION",
      skinType: "Dehydrated • Sensitive • Post-Procedure",
      rating: "4.9 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "Aero-Seal Pharmaceutical Dropper",
      usage: "Morning & Night Protocol",
      timeIcon: <Droplets size={14} className="text-sky-400" />,
      accentColor: "border-sky-500/40 hover:border-sky-400",
      glowColor: "text-sky-400",
      badgeBg: "bg-sky-500/15 text-sky-400 border-sky-500/30",
      desc: "Three-tier molecular weight dermal hydration matrix. High molecular weights shield the stratum corneum, while ultra-low Dalton polymers migrate deep into cellular layers to lock in 72 hours of persistent moisture.",
      scientificSpecs: {
        activeConcentration: "2.0% Multi-Depth Sodium Hyaluronate",
        phLevel: "pH 5.5 ± 0.3 (Bio-Identical Skin Mantle)",
        texture: "Silky, cooling, non-sticky dew gel",
        shelfLife: "36 Months (Sealed)",
      },
      keyIngredients: [
        "Tri-Molecular Weight Sodium Hyaluronate (High, Mid, Low)",
        "2.0% Provitamin B5 (D-Panthenol Tissue Repair)",
        "Hydrolyzed Deep Marine Collagen Peptides",
        "Organic Aloe Vera Barbadensis Inner Leaf Juice",
      ],
      clinicalBenefits: [
        "Increases epidermal moisture saturation by +145% instantly",
        "Plumps dehydration micro-creases and reinforces barrier lipids",
        "Accelerates skin re-epithelialization following dermatological peels",
        "Hypoallergenic, ophthalmologist and dermatologist approved",
      ],
    },
    {
      id: "retinol",
      name: "Cellular Renewal Retinol 2.5%",
      subname: "Micro-Encapsulated Retinoid + 100% Plant Squalane",
      category: "antiaging",
      badge: "NOCTURNAL CELLULAR TURNOVER",
      skinType: "Mature • Fine Lines • Uneven Texture",
      rating: "4.8 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "Opaque UV Amber Protection Bottle",
      usage: "Night Protocol Only (PM)",
      timeIcon: <Moon size={14} className="text-amber-400" />,
      accentColor: "border-amber-500/40 hover:border-amber-400",
      glowColor: "text-amber-400",
      badgeBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      desc: "Lipid-encapsulated slow-release retinol system that delivers cellular renewal deep into dermal fibroblast matrices overnight without the flaking, irritation, or erythema associated with standard retinoids.",
      scientificSpecs: {
        activeConcentration: "2.5% Encapsulated Retinoid Complex",
        phLevel: "pH 6.0 ± 0.2 (Maximum Stability)",
        texture: "Silky nourishing botanical lipid emulsion",
        shelfLife: "24 Months",
      },
      keyIngredients: [
        "2.5% Micro-Encapsulated Active Retinol Microspheres",
        "100% Pure Plant-Derived Olive Squalane",
        "Centella Asiatica (Cica) Soothing Triterpenes",
        "Oenothera Biennis (Evening Primrose) Fatty Acid Complex",
      ],
      clinicalBenefits: [
        "Accelerates cell cycle turnover from 45 days down to 21 days",
        "Diminishes glabellar lines, crow's feet, and deep forehead creases",
        "Refines rough skin texture and diminishes enlarged solar pores",
        "Time-release encapsulation prevents cutaneous irritation",
      ],
    },
    {
      id: "niacinamide",
      name: "Clarifying Niacinamide 10%",
      subname: "Zinc PCA 1% + Sebum-Normalizing Botanicals",
      category: "clarifying",
      badge: "BLEMISH & PORE ARCHITECTURE",
      skinType: "Oily • Congested • Enlarged Pores • Acne-Prone",
      rating: "4.9 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "Sterile Frosted Dropper Bottle",
      usage: "Morning & Night Protocol",
      timeIcon: <Sun size={14} className="text-emerald-400" />,
      accentColor: "border-emerald-500/40 hover:border-emerald-400",
      glowColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      desc: "High-concentration clinical vitamin and mineral complex formulated to normalize sebaceous gland hyperactivity, refine stretched pore walls, clear blemish congestion, and restore balanced dermal clarity.",
      scientificSpecs: {
        activeConcentration: "10.0% Pure Niacinamide + 1.0% Zinc PCA",
        phLevel: "pH 5.8 ± 0.2 (Neutral Clarifying Balance)",
        texture: "Rapid-evaporating watery fluid (Zero residue)",
        shelfLife: "36 Months",
      },
      keyIngredients: [
        "10.0% Highly Purified Niacinamide (Vitamin B3)",
        "1.0% Zinc PCA (Pyrrolidone Carboxylic Acid Salt)",
        "Organic Hamamelis Virginiana (Witch Hazel)",
        "Camellia Sinensis (Green Tea) Polyphenols",
      ],
      clinicalBenefits: [
        "Reduces excess dermal sebum production by 42% in 14 days",
        "Visibly reduces pore circumference and micro-comedones",
        "Fades stubborn post-inflammatory erythema (PIE) red marks",
        "Fortifies intercellular ceramides to resist microbial invasion",
      ],
    },
    {
      id: "peptides",
      name: "Multi-Peptide Matrixyl 3000",
      subname: "Copper Tripeptide-1 (GHK-Cu) + Argireline Firming",
      category: "antiaging",
      badge: "ARCHITECTURAL FIBROBLAST LIFT",
      skinType: "Sagging Skin • Loss of Density • Mature",
      rating: "4.9 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "Laboratory Amber Dropper Bottle",
      usage: "Morning & Night Protocol",
      timeIcon: <Moon size={14} className="text-[#FF7A00]" />,
      accentColor: "border-[#FF7A00]/40 hover:border-[#FF7A00]",
      glowColor: "text-[#FF7A00]",
      badgeBg: "bg-[#FF7A00]/15 text-[#FF7A00] border-[#FF7A00]/30",
      desc: "Bio-engineered multi-peptide complex mimicking skin's natural matrikines. Transmits cellular messenger signals to dermal fibroblasts, commanding the synthesis of new structural collagen and elastin fibres.",
      scientificSpecs: {
        activeConcentration: "8.0% Matrixyl 3000 + 1.5% GHK-Cu Complex",
        phLevel: "pH 5.2 ± 0.3 (Peptide Integrity Optimized)",
        texture: "Concentrated micro-droplet elixir",
        shelfLife: "24 Months",
      },
      keyIngredients: [
        "Palmitoyl Tripeptide-1 & Palmitoyl Tetrapeptide-7",
        "Bio-Active Copper Tripeptide-1 (GHK-Cu Complex)",
        "Acetyl Hexapeptide-8 (Argireline Botulinum Mimic)",
        "Marine Laminaria Algae Bio-Polymers",
      ],
      clinicalBenefits: [
        "Triggers type I, type III, and type IV collagen synthesis",
        "Improves mandibular jawline firmness and neck contour elasticity",
        "Relaxes muscular micro-tensions to soften dynamic wrinkles",
        "Accelerates cutaneous scar remodeling and cellular repair",
      ],
    },
    {
      id: "cica-soothing",
      name: "Cica Barrier Recovery Serum",
      subname: "Madecassoside 95% Purity + Ceramide NP Complex",
      category: "soothing",
      badge: "INTENSIVE EPIDERMAL RESCUE",
      skinType: "Compromised Barrier • Rosacea • Post-Laser",
      rating: "4.9 / 5.0",
      volume: "30ml / 1.0 fl oz",
      packaging: "Airless Hermetic Dropper",
      usage: "Daily Barrier Repair (AM & PM)",
      timeIcon: <Leaf size={14} className="text-teal-400" />,
      accentColor: "border-teal-500/40 hover:border-teal-400",
      glowColor: "text-teal-400",
      badgeBg: "bg-teal-500/15 text-teal-400 border-teal-500/30",
      desc: "Clinical botanical rescue serum designed to calm flare-ups, eliminate acute flushing, and reconstruct lipid bilayers in skin compromised by harsh retinoids, chemical peels, sun exposure, or environmental pollution.",
      scientificSpecs: {
        activeConcentration: "5.0% Centella Asiatica Titrated Extract",
        phLevel: "pH 5.4 ± 0.2 (Optimal Barrier Recovery)",
        texture: "Ultra-soothing milky aqueous suspension",
        shelfLife: "36 Months",
      },
      keyIngredients: [
        "High-Purity Madecassoside, Asiaticoside & Asiatic Acid",
        "Ceramide NP, Ceramide AP, Ceramide EOP Complex",
        "Beta-Glucan Yeast Membrane Polysaccharides",
        "Natural Alpha-Bisabolol (German Chamomile)",
      ],
      clinicalBenefits: [
        "Subdues acute stinging, facial erythema, and irritation in < 10 mins",
        "Repairs micro-fissures in damaged stratum corneum within 48 hours",
        "Forms a breathable moisture shield preventing trans-epidermal water loss",
        "Sterile formulation safe for post-aesthetic procedure recovery",
      ],
    },
  ];

  const filteredSerums = selectedCategory === "all"
    ? serumProducts
    : serumProducts.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white">
      
      {/* Background Architectural Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-25 z-0">
        <div className="absolute top-20 right-1/4 w-[750px] h-[750px] bg-[#FF7A00]/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-[650px] h-[650px] bg-[#0A2540]/30 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10 space-y-24">

        {/* 1. HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em]">
            <Sparkles size={13} className="animate-pulse" /> S4HEL LLC • CLINICAL COSMECEUTICALS DIVISION
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            S4HEL CLINICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              SKIN SERUMS
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
            Engineered under rigorous dermatological quality standards and distributed worldwide by <strong className="text-white">S4HEL LLC</strong> (Kalispell, Montana). High-concentration active cosmeceuticals formulated for maximum bio-availability, cellular restoration, and barrier protection. Available for global direct retail, Amazon FBA, TikTok Shop US, and custom OEM private label.
          </p>

          {/* Clinical Standards Badges Bar */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono">
            <span className="px-4 py-2 rounded-xl bg-[#091D34] border border-white/10 text-[#FF7A00] flex items-center gap-1.5">
              <FlaskConical size={14} /> Dermatologist Formulated
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#091D34] border border-white/10 text-white flex items-center gap-1.5">
              <Leaf size={14} /> Cruelty-Free &amp; 100% Vegan
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#091D34] border border-white/10 text-sky-400 flex items-center gap-1.5">
              <ShieldCheck size={14} /> ISO 22716 GMP Certified
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#091D34] border border-white/10 text-emerald-400 flex items-center gap-1.5">
              <Truck size={14} /> Amazon FBA &amp; TikTok Shop Ready
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#091D34] border border-white/10 text-amber-300 flex items-center gap-1.5">
              <Package size={14} /> OEM Private Label &amp; Wholesale
            </span>
          </div>

          {/* 3D Serum Image Spotlight Card (Featuring /serum.jpeg) */}
          <div className="max-w-4xl mx-auto my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#091D34] via-[#0A2540] to-[#07192F] border-2 border-[#FF7A00]/40 shadow-[0_20px_50px_rgba(255,122,0,0.25)] relative overflow-hidden text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 flex justify-center relative">
                <div className="absolute w-56 h-56 bg-[#FF7A00]/30 blur-[70px] rounded-full pointer-events-none" />
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#FF7A00]/60 shadow-2xl bg-[#061426] group transform hover:scale-105 transition-all duration-500">
                  <img
                    src="/serum.jpeg"
                    alt="S4HEL Clinical Skin Serums"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#07192F]/90 border border-[#FF7A00]/40 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-mono font-bold text-[#FF7A00]">S4HEL LLC MONTANA</div>
                      <div className="text-xs font-black text-white">Active Skin Serums</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-[#FF7A00] text-slate-950 font-black text-[8px] uppercase">
                      CLINICAL
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-[9px] font-mono uppercase tracking-wider">
                  <Award size={11} /> Dermatological Grade Physical Cosmeceuticals
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  High-Potency Active Cosmeceutical Formulations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  S4HEL Skin Serums are formulated for rapid trans-epidermal delivery without greasy occlusives. Manufactured in registered facilities with full batch testing, stability analytics, and zero synthetic fragrance.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[#FF7A00] font-bold block">Amazon FBA Ready</span>
                    <span className="text-slate-400 text-[10px]">Prepped &amp; barcoded</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[#FF7A00] font-bold block">TikTok Shop Approved</span>
                    <span className="text-slate-400 text-[10px]">Creator &amp; seller nexus</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "Complete Serum Portfolio (6)" },
              { id: "brightening", label: "Vitamin C & Brightening" },
              { id: "hydration", label: "Hyaluronic Multi-Hydration" },
              { id: "antiaging", label: "Retinol & Copper Peptides" },
              { id: "clarifying", label: "Niacinamide Pore Refine" },
              { id: "soothing", label: "Cica Barrier Recovery" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#FF7A00] text-slate-950 shadow-[0_0_20px_rgba(255,122,0,0.4)]"
                    : "bg-[#091D34] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF7A00]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* 2. SERUM PRODUCTS GRID (NO PRICES - COMPREHENSIVE CLINICAL INFORMATION) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSerums.map((p) => (
            <div
              key={p.id}
              className={`p-8 rounded-3xl bg-[#091D34] border ${p.accentColor} transition-all duration-300 shadow-2xl flex flex-col justify-between group space-y-6 relative overflow-hidden`}
            >
              <div className="space-y-5">
                
                {/* Header Badge & Rating */}
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] font-mono font-black uppercase px-3 py-1 rounded-full border ${p.badgeBg}`}>
                    {p.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>{p.rating}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#FF7A00] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mt-1">
                    {p.subname}
                  </div>
                  
                  {/* Protocol & Packaging Specs */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400 mt-3 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1 text-white">
                      {p.timeIcon} {p.usage}
                    </span>
                    <span>•</span>
                    <span>{p.volume}</span>
                    <span>•</span>
                    <span className="text-[#FF7A00]">{p.skinType}</span>
                  </div>
                </div>

                {/* Clinical Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>

                {/* Scientific Parameters Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A00] font-bold flex items-center gap-1.5">
                    <Microscope size={12} /> Formulation Specifications:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div>
                      <span className="text-slate-400 block text-[9px]">ACTIVE CONCENTRATION</span>
                      <span className="text-white font-bold">{p.scientificSpecs.activeConcentration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px]">BIOLOGICAL PH</span>
                      <span className="text-white font-bold">{p.scientificSpecs.phLevel}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[9px]">TEXTURE PROFILE</span>
                      <span className="text-slate-200">{p.scientificSpecs.texture}</span>
                    </div>
                  </div>
                </div>

                {/* Key Active Ingredients */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-1">
                    <TestTube2 size={12} className={p.glowColor} /> Clinical Actives Breakdown:
                  </div>
                  {p.keyIngredients.map((ing, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle size={12} className="text-[#FF7A00] shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>

                {/* Proven Clinical Efficacy */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Observed Clinical Results:
                  </div>
                  {p.clinicalBenefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action & Inquiry Row (STRICTLY NO PRICES - USER INSTRUCTION HONORED) */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <BadgeCheck size={14} /> Full COA &amp; MSDS Available
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Retail Units &bull; Wholesale Master Cartons
                  </div>
                </div>

                <Link
                  href="/en/contact"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#FF7A00]/20"
                >
                  <FileText size={13} />
                  Inquire / Order
                </Link>
              </div>

            </div>
          ))}
        </section>

        {/* 3. CLINICAL ROUTINE PROTOCOL */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#091D34] border border-white/10 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase block">
                MAXIMIZE DERMAL BIO-ABSORPTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                The S4HEL Skincare Protocol &amp; Layering Science
              </h2>
            </div>

            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveRoutine("morning")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  activeRoutine === "morning"
                    ? "bg-[#FF7A00] text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sun size={14} /> Morning Protocol
              </button>
              <button
                onClick={() => setActiveRoutine("night")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  activeRoutine === "night"
                    ? "bg-[#FF7A00] text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Moon size={14} /> Night Protocol
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {activeRoutine === "morning" ? [
              { step: "01. Cleanse", title: "Gentle Barrier-Friendly Cleanser", desc: "Cleanse with lukewarm water. Avoid stripping essential sebum and acid mantle lipids." },
              { step: "02. Antioxidant Shield", title: "S4HEL Vitamin C 20% Serum", desc: "Apply 4-5 drops over face and decolletage. Shields against free radicals, ozone, and solar stress." },
              { step: "03. Multi-Depth Moisture", title: "S4HEL Hyaluronic Acid 2%", desc: "Pat gently onto damp skin. Sodium Hyaluronate polymers pull water into deep epidermal tissues." },
              { step: "04. Solar Defense", title: "Broad Spectrum Mineral SPF 50", desc: "Seal active cosmeceuticals and provide physical reflection against ultraviolet photo-damage." },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[#FF7A00] font-mono font-bold">{s.step}</span>
                <h4 className="text-white font-bold text-sm uppercase">{s.title}</h4>
                <p className="text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            )) : [
              { step: "01. Double Cleanse", title: "Lipid & Water Phase Cleansing", desc: "Completely dissolve airborne particulates, sunscreen, and daily cosmetics to prepare porous dermal channels." },
              { step: "02. Cellular Turnover", title: "S4HEL Retinol 2.5% Complex", desc: "Apply 3-4 drops to dry skin. Encapsulated spheres penetrate overnight to boost fibroblast renewal." },
              { step: "03. Architecture Peptide", title: "S4HEL Matrixyl 3000 Drops", desc: "Deliver bioactive copper peptides directly to dermal tissue to trigger collagen type I & III synthesis." },
              { step: "04. Barrier Reconstruction", title: "S4HEL Cica Recovery Cream", desc: "Seal with soothing Madecassoside and Ceramides to prevent trans-epidermal water loss while you sleep." },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[#FF7A00] font-mono font-bold">{s.step}</span>
                <h4 className="text-white font-bold text-sm uppercase">{s.title}</h4>
                <p className="text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. WHOLESALE, AMAZON FBA & TIKTOK SHOP PRIVATE LABEL */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#091D34] via-[#0B2545] to-[#07192F] border border-[#FF7A00]/30 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#FF7A00] font-mono text-[10px] tracking-[0.3em] uppercase">
                COMMERCIAL OEM &amp; PRIVATE LABEL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Bulk Wholesale &amp; Custom Brand Cosmeceutical Formulation
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Are you an Amazon FBA brand, TikTok Shop beauty merchant, or aesthetic medical clinic? <strong className="text-white">S4HEL LLC</strong> manufactures and supplies bulk batches and private-label boxed units of our clinically validated skin serums. We provide full FDA-compliant safety data sheets (MSDS), certificates of analysis (COA), custom outer packaging, and GTIN barcodes ready for immediate retail fulfillment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[#FF7A00] font-bold">MOQ From 100 Units</div>
                  <div className="text-slate-400 text-[10px]">Low barrier private label start</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[#FF7A00] font-bold">Custom Labeling &amp; Boxes</div>
                  <div className="text-slate-400 text-[10px]">Your brand branding &amp; barcode</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[#FF7A00] font-bold">Amazon FBA Turnkey</div>
                  <div className="text-slate-400 text-[10px]">Pre-labeled &amp; warehouse prepped</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 rounded-2xl bg-[#07192F] border border-white/10 space-y-4 text-center shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] mx-auto">
                <Package size={24} />
              </div>
              <h4 className="text-white font-bold text-sm uppercase">
                Order S4HEL Serums Specification Pack
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly with our Montana executive desk to request formulation spec sheets, sample kits, or wholesale master cartons.
              </p>
              <Link
                href="/en/contact"
                className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#FF7A00]/25"
              >
                Inquire With Executive Desk
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
