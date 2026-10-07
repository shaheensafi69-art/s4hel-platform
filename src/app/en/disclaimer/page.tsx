"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Scale, 
  ShieldCheck, 
  HelpCircle, 
  ChevronLeft, 
  FileText, 
  CheckCircle2,
  Building2,
  Landmark,
  Radio,
  Zap,
  Globe,
  Coins,
  DollarSign,
  Target,
  Layers,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import AdSenseInFeed from "@/components/AdSenseInFeed";

export default function ComplianceDisclaimer() {
  const lastUpdated = "October 2026";

  const disclaimers = [
    {
      id: "legal-status",
      title: "1. No Legal Advice & Absence of Attorney-Client Privilege",
      icon: <Scale size={18} />,
      content: `S4HEL LLC (commercially operating as "S4hel Company"), registered under the corporate statutes of the State of Montana with physical headquarters at 1001 S Main St Ste 500, Kalispell, MT 59901, functions as a professional document preparation service, corporate registration filing facilitator, and statutory registered agent.

S4HEL LLC IS NOT A LAW FIRM. ITS OFFICERS, DIRECTORS, MANAGERS, EMPLOYEES, AND AGENTS ARE NOT ACTING AS YOUR ATTORNEYS OR LEGAL COUNSEL.

All informational resources, 50-state formation matrices, Operating Agreement templates, tax guides, and knowledge articles published across s4hel.com are formulated exclusively for educational, operational, and administrative utility. Utilizing our digital portals, submitting forms, or corresponding with our executive desk does NOT create an attorney-client relationship, confidential legal privilege, or fiduciary engagement. If your enterprise requires specific legal counsel regarding commercial litigation, trademark protection, complex multi-jurisdictional equity splits, or international treaty disputes, you must retain a qualified attorney licensed within the relevant jurisdiction.`
    },
    {
      id: "google-adsense-disclosure",
      title: "2. Google Ads, Google AdSense & Commercial Advertising Disclosure",
      icon: <Target size={18} />,
      highlight: true,
      content: `In accordance with Federal Trade Commission (FTC) 16 CFR Part 255 Guidelines, international digital advertising consumer protection directives, and Google Publisher Policies, S4HEL LLC provides the following comprehensive commercial advertising disclosures:

A. Commercial Monetization & Google Ads Execution
S4HEL LLC actively finances its international outreach through Google Ads commercial campaigns and displays automated third-party advertisements served by the Google AdSense network under certified Publisher Account ID ca-pub-6551903544426492. These programmatic units generate revenue that sustains our free 50-state tax comparison matrices, corporate educational curriculums, and universal 400+ platform cashout directories.

B. Algorithmic Content Matching & Non-Endorsement
All advertising units, banners, in-feed sponsored placements, and text links delivered through Google AdSense are generated algorithmically by Google LLC based on contextual relevance, geography, and historical browsing telemetry. THE APPEARANCE OF ANY THIRD-PARTY ADVERTISEMENT ON S4HEL.COM DOES NOT CONSTITUTE AN ENDORSEMENT, SPONSORSHIP, VERIFICATION, OR WARRANTY BY S4HEL LLC, ITS CHIEF EXECUTIVE OFFICER SAHEL SALEM, OR ITS PARENT COMPANY SAFI INTERNATIONAL CAPITAL LTD.

C. User Discretion & Absence of Transaction Liability
S4HEL LLC conducts zero pre-screening of third-party goods, software, or financial services promoted through Google AdSense. Any commercial engagement, transaction, credit card submission, or contract entered into with an advertiser featured on this website is executed strictly at your independent discretion and risk. S4HEL LLC disclaims all legal liability for claims, losses, misrepresentations, or damages resulting from interactions with Google AdSense advertisers.

D. Tracking Cookies & Opt-Out Protocols
Google utilizes cookies (including DoubleClick DART cookies) to serve targeted advertisements based on prior visits to our website and other websites across the web. You may opt out of personalized advertising at any time by configuring your preferences at Google Ads Settings (https://adssettings.google.com/) or visiting the Digital Advertising Alliance Consumer Choice Portal (https://optout.aboutads.info/). For complete technical details, review our Privacy Policy.`
    },
    {
      id: "tax-cpa-status",
      title: "3. Tax, Accounting & IRS Foreign-Owned LLC Disclosures",
      icon: <DollarSign size={18} />,
      content: `S4HEL LLC IS NOT A CERTIFIED PUBLIC ACCOUNTING (CPA) FIRM, ENROLLED AGENT PRACTICE, OR LICENSED TAX ADVISORY INSTITUTION.

The federal and state tax liabilities of owning a US Limited Liability Company (LLC) or UK Private Limited (LTD) depend entirely on the beneficial owner's personal tax residency, source of revenues, and operational nexus:

• Foreign-Owned Single-Member LLCs (Disregarded Entities): Under Section 6038A of the Internal Revenue Code and Treasury Regulations § 1.6038A-2, US single-member LLCs owned directly or indirectly by foreign non-resident individuals are treated as domestic corporations solely for information reporting purposes. Such entities must annually file IRS Form 5472 accompanied by a pro-forma Form 1120 by April 15 of each calendar year. Willful or negligent failure to timely file carries an automatic statutory minimum penalty of $25,000 per occurrence.
• Effectively Connected Income (ECI): If your US entity has employees, a dependent physical sales agent, or continuous physical business operations in the United States, your income may be deemed Effectively Connected Income, subject to federal graduated corporate tax rates.
• Independent Tax Review Mandate: S4HEL LLC strongly advises all clients to retain licensed international tax CPAs to evaluate bilateral double-taxation treaties, Foreign Account Tax Compliance Act (FATCA) filings, and local home-country tax declarations.`
    },
    {
      id: "fincen-boi-statute",
      title: "4. Corporate Transparency Act (CTA) & FinCEN BOI Notice",
      icon: <ShieldCheck size={18} />,
      content: `Under the federal Corporate Transparency Act (CTA, codified at 31 U.S.C. § 5336) administered by the Financial Crimes Enforcement Network (FinCEN), all newly formed and existing domestic reporting companies (including Montana, Wyoming, and Delaware LLCs) must submit a Beneficial Ownership Information (BOI) report:

• Strict Reporting Windows: Domestic reporting companies formed after January 1, 2024 must file their initial BOI report within 90 calendar days of official registration (or 30 calendar days for entities registered after January 1, 2025). Any subsequent change to beneficial ownership, principal address, legal name, or passport renewal must be reported to FinCEN within thirty (30) calendar days.
• Severe Statutory Penalties: Willfully failing to file a complete or updated BOI report, or willfully submitting fraudulent beneficial ownership information, carries civil penalties of up to $591 per day for each day the violation continues, as well as criminal fines of up to $10,000 and imprisonment for up to two (2) years.
• Client Verification Warranty: While S4HEL LLC offers automated electronic filing conduits to assist in transmitting BOI dossiers to FinCEN, the client assumes complete and ultimate statutory legal liability for the timeliness, veracity, and completeness of all submitted ownership disclosures.`
    },
    {
      id: "banking-fintech-scope",
      title: "5. Banking, Depository & FinTech Intermediary Disclaimers",
      icon: <Landmark size={18} />,
      content: `S4HEL LLC is a corporate engineering, registered agent, and financial technology facilitation firm. S4HEL LLC IS NOT A CHARTERED BANK, DEPOSITORY INSTITUTION, LOAN BROKER, OR LENDING CORPORATION.

• Partner Depository Institutions: Business checking accounts established for our clients through neobanking partners (such as Mercury Bank or Relay Financial) are maintained at FDIC-insured depository partner banks (including Choice Financial Group, Column N.A., and Thread Bank). Deposited funds are eligible for FDIC pass-through deposit insurance up to $250,000 per entity (or up to $5,000,000 through automated sweep account networks).
• Sole Underwriting Authority: Partner banks and financial institutions maintain exclusive, sovereign underwriting discretion. Account approvals, feature authorizations (such as physical debit cards or domestic wire access), and risk evaluations are governed independently by partner bank compliance officers. S4HEL LLC CANNOT AND DOES NOT GUARANTEE THAT ANY BANK APPLICATION WILL BE APPROVED.
• SafiPay Digital Bank Rails: European SEPA Instant connectivity, EUR/GBP virtual collection accounts, and cross-border settlement channels are provided through sister platform SafiPay (safipay.net) via licensed European Electronic Money Institution (EMI) authorized partners governed by European central banking authorities.`
    },
    {
      id: "platforms-cashout-scope",
      title: "6. 400+ Platforms Liquidity & Platform Independence Disclaimer",
      icon: <Zap size={18} />,
      content: `S4HEL LLC assists digital enterprises, global contractors, and e-commerce merchants in establishing compliant US corporate entities and banking connections to clear revenues from over 400 global platforms (including Upwork, Amazon Seller Central, Stripe, PayPal, TikTok Shop, Deel, Steam, and affiliate networks):

• Platform Autonomy: Each third-party platform operates under its own contractual terms of service, merchant risk evaluations, and automated anti-fraud algorithms. S4HEL LLC is an independent corporate facilitator and is NOT affiliated with, sponsored by, or endorsed by Upwork Global Inc., Amazon.com Inc., Stripe Inc., PayPal Holdings Inc., ByteDance / TikTok, or Valve Corporation.
• Policy Compliance: S4HEL LLC does not override, circumvent, or alter third-party platform security policies. Clients are exclusively responsible for maintaining active, verified accounts that comply with platform community guidelines. Platform account suspensions, rolling reserves, or merchant holds resulting from policy breaches remain the sole responsibility of the merchant.
• Liquidation Velocities: Advertised liquidation speeds (such as < 15-minute stablecoin conversions or same-day ACH) are dependent upon interbank settlement schedules, blockchain confirmations, and automated AML risk clearings.`
    },
    {
      id: "earnings-results",
      title: "7. Business Results, Earnings & Commercial Success Disclaimer",
      icon: <AlertCircle size={18} />,
      content: `In compliance with FTC guidelines regarding commercial business claims:

S4HEL LLC MAKES ZERO WARRANTIES, PROMISES, OR GUARANTEES REGARDING THE REVENUE, PROFITABILITY, OR COMMERCIAL SUCCESS OF ANY BUSINESS FORMED THROUGH OUR FIRM.

Forming a Montana LLC, securing a Federal EIN, or configuring a corporate bank account provides legal operational infrastructure; it does not guarantee customer sales, contract awards on Upwork, e-commerce marketplace success on Amazon, or venture capital funding. Case studies, metrics, and testimonials presented across our digital hubs reflect historical experiences of specific enterprise clients and are not intended to represent typical or guaranteed outcomes for all founders.`
    },
    {
      id: "crypto-settlement",
      title: "8. Cryptographic Asset & Stablecoin Settlement Disclaimer",
      icon: <Coins size={18} />,
      content: `Where clients elect to liquidate corporate platform revenues into stablecoins (such as USDT or USDC on TRON, Ethereum, or Solana networks):

• Non-Custodial Conversion: S4HEL LLC facilitates liquidation via licensed liquidity providers and automated OTC payment rails. S4HEL LLC does not operate an unregulated depository crypto wallet service.
• Blockchain Risk & Irreversibility: Blockchain transactions are mathematically immutable and irreversible. Clients warrant the absolute accuracy of provided public receiving wallet addresses. S4HEL LLC bears zero liability for lost funds resulting from client address entry errors, smart contract vulnerabilities, or network hard forks.
• Regulatory Evolution: Digital asset regulations vary across international jurisdictions. Clients are responsible for verifying local legalities regarding cryptographic asset receipts within their respective domestic tax domains.`
    },
    {
      id: "ecosystem-liability",
      title: "9. Parent Holding Structure & Segregated Entity Liabilities",
      icon: <Globe size={18} />,
      content: `S4HEL LLC operates as a specialized commercial division within the global capital ecosystem directed by parent holding corporation Safi International Capital Ltd.

The Safi Global Ecosystem encompasses seven discrete operational platforms: Safi International Capital Ltd (Parent Company), SafiPay Digital Bank, Safi Academy, Safi TopUp, Safi Pro, Safi AI, and Zev App. Each platform constitutes an independent corporate or operational entity. Statements referencing ecosystem capabilities represent synergistic collaborations and do not imply legal commingling of corporate liabilities or reciprocal guarantees across distinct sister platforms.`
    },
    {
      id: "montana-nexus-scope",
      title: "10. Montana 0% Sales Tax & Geographic Scope Disclaimer",
      icon: <Building2 size={18} />,
      content: `Under Montana Code Annotated (MCA Title 15), the State of Montana does not assess a general state sales tax on retail transactions:

• In-State Benefit: Goods purchased, titled, or maintained within Montana enjoy 0% state sales tax.
• Multi-State Economic Nexus: If your Montana LLC establishes physical offices, stores inventory in Amazon FBA fulfillment centers, or exceeds economic sales thresholds (typically $100,000 or 200 transactions annually) in states such as California, Texas, or New York, you may be required to register as a foreign entity and collect sales tax in those respective states. S4HEL LLC advises all e-commerce clients to configure automated sales tax compliance software (e.g., TaxJar or Avalara) across active multi-state sales channels.`
    },
    {
      id: "trademark-disclaimer",
      title: "11. Third-Party Trademarks & Proprietary Brand Names Notice",
      icon: <Layers size={18} />,
      content: `All third-party brand names, company logos, service marks, and trade designations cited throughout s4hel.com—including but not limited to Upwork, Amazon, Stripe, PayPal, TikTok, Deel, Mercury, Relay Financial, Steam, Google, and Apple—are the exclusive registered trademarks of their respective corporate owners.

Their display across our educational resources and platform cashout guides serves strictly nominative fair use purposes to identify compatible payout destinations and integration corridors. Nominative use does not imply any affiliation, sponsorship, endorsement, or contractual partnership between S4HEL LLC and the respective trademark owners.`
    },
    {
      id: "corporate-contact-compliance",
      title: "12. Statutory Headquarters Nexus & Compliance Inquiries",
      icon: <FileText size={18} />,
      content: `For formal compliance inquiries, statutory regulatory communications, or verification requests regarding this Compliance Disclaimer, contact our executive headquarters:

S4HEL LLC (S4hel Company)
Statutory Headquarters & Registered Agent Division
1001 S Main St Ste 500, Kalispell, MT 59901, Montana, USA
Telephone: +1 406 316 0317
Email: contact@s4hel.com / compliance@s4hel.com
Founder & Chief Executive Officer: Sahel Salem
Parent Holding Corporation: Safi International Capital Ltd`
    }
  ];

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-32 sm:pt-40 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-10 left-1/4 w-[750px] h-[750px] bg-[#FF7A00]/15 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-[#0A2540]/60 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Back Link */}
        <Link 
          href="/en" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF7A00] hover:text-white transition-colors"
        >
          <ChevronLeft size={16} /> Return to Corporate Portal
        </Link>

        {/* Header Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-[10px] font-mono uppercase tracking-widest">
            <AlertTriangle size={13} /> S4HEL LLC STATUTORY COMPLIANCE &amp; LEGAL DISCLAIMERS
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight italic leading-none">
            COMPLIANCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              DISCLAIMER &amp; DISCLOSURES
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
            <span>Last Updated: <strong className="text-white">{lastUpdated}</strong></span>
            <span>•</span>
            <span>Statutory Nexus: <strong className="text-white">Kalispell, Montana, USA</strong></span>
            <span>•</span>
            <span>Parent Entity: <strong className="text-amber-300">Safi International Capital Ltd</strong></span>
            <span>•</span>
            <span>Publisher: <strong className="text-white">ca-pub-6551903544426492</strong></span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl pt-2">
            This comprehensive statutory Compliance Disclaimer sets forth mandatory legal, regulatory, banking, tax, and Google advertising disclosures governing all interactions with S4HEL LLC, our registered agent services, and 400+ platform cashout facilitation rails.
          </p>
        </div>

        {/* AdSense In-Feed Fluid Integration */}
        <AdSenseInFeed label="Sponsored Partner Disclosures" />

        {/* Disclaimer Sections */}
        <div className="space-y-8 pt-4">
          {disclaimers.map((disc, idx) => (
            <motion.section
              key={disc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-7 sm:p-9 rounded-3xl border ${
                disc.highlight 
                  ? "bg-gradient-to-br from-[#0E2038] via-[#091D34] to-[#07192F] border-amber-400/60 shadow-[0_0_35px_rgba(251,191,36,0.15)] ring-1 ring-amber-400/30" 
                  : "bg-[#091D34] border-white/10 hover:border-white/20 shadow-xl"
              } transition-all space-y-4`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl ${
                  disc.highlight ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20"
                } flex items-center justify-center shrink-0`}>
                  {disc.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {disc.title}
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 whitespace-pre-line text-justify font-normal">
                {disc.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom Contact Verification Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#091D34] via-[#0A2540] to-[#07192F] border border-white/10 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Require Additional Statutory or Compliance Documentation?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Our Montana corporate compliance desk coordinates with legal representatives and financial institutions.
            </p>
          </div>
          <Link
            href="/en/contact"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg whitespace-nowrap shrink-0"
          >
            Contact Compliance Desk
          </Link>
        </div>

      </div>
    </div>
  );
}