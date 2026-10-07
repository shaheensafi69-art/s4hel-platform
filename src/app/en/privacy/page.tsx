"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Globe, 
  ChevronLeft, 
  Info, 
  Database, 
  UserCheck, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Cookie,
  Sliders,
  Server,
  Key,
  Layers,
  Scale,
  Target,
  Share2,
  RefreshCw,
  BellRing
} from "lucide-react";
import Link from "next/link";
import AdSenseInFeed from "@/components/AdSenseInFeed";

export default function PrivacyPolicy() {
  const lastUpdated = "October 2026";
  const [activeTab, setActiveTab] = useState<string>("all");

  const sections = [
    {
      id: "controller",
      title: "1. Data Controller, Entity Structure & Corporate Governance",
      icon: <Globe size={18} />,
      content: `S4HEL LLC (commercially operating as "S4hel Company"), registered under the statutory corporate laws of the State of Montana with physical headquarters established at 1001 S Main St Ste 500, Kalispell, MT 59901, United States of America, functions as the primary Data Controller for all personal telemetry, business filings, and technical information collected through s4hel.com and its affiliated application endpoints.

S4HEL LLC operates under the executive umbrella and strategic capital governance of its parent holding corporation, Safi International Capital Ltd. This Privacy Policy outlines the comprehensive, legally binding protocols through which our enterprise collects, processes, stores, discloses, and protects individual and corporate entity data when you engage with our registered agent infrastructure, corporate filing portals, educational repositories, financial technology settlement rails, and digital knowledge bases.

Our designated Data Protection Officer (DPO) and compliance legal desk in Kalispell, Montana, oversee strict data sovereignty, cross-border transmission security, and ongoing statutory adherence to the United States Privacy Act, European Union General Data Protection Regulation (GDPR), United Kingdom General Data Protection Regulation (UK GDPR), and California Consumer Privacy Act (CCPA/CPRA).`
    },
    {
      id: "google-adsense-ads",
      title: "2. Google Ads, Google AdSense & Third-Party Advertising Framework",
      icon: <Target size={18} />,
      highlight: true,
      content: `S4HEL LLC actively runs commercial advertising campaigns via Google Ads (Google LLC) and hosts programmatic advertising units provided through the Google AdSense publisher network under verified Publisher Account ID ca-pub-6551903544426492. In strict compliance with Google Publisher Policies, FTC 16 CFR Part 255 Guidelines, and global digital advertising transparency directives, we provide comprehensive disclosures regarding our advertising operations:

A. Google Ads Campaign Telemetry & Remarketing Tags
When we run Google Ads campaigns to promote our Montana LLC formation services, UK LTD setups, and 400+ platform cashout solutions, we utilize Google Ads conversion tracking pixels, remarketing tags, and Google Analytics 4 (GA4) measurement protocols. These technologies collect pseudonymous identifiers, click-through timestamps, referring ad copy IDs, and post-click interaction flows to measure marketing effectiveness and optimize return on advertising spend (ROAS).

B. DoubleClick DART Cookies & Interest-Based Advertising
Third-party vendors, including Google, utilize cookies (such as the DoubleClick DART cookie) to serve advertisements based on your prior visits to s4hel.com and other destinations across the Internet. Google's use of advertising cookies enables it and its certified partner network to serve targeted advertisements based on your browsing history, contextual page relevancy, and algorithmic topic affinities.

C. Google AdSense Dynamic Placements
Advertisements appearing within our free knowledge repositories, 50-state comparison matrices, and 400+ platform directories are generated programmatically by Google AdSense. These commercial units are clearly delineated with "Sponsored", "Ad", or "AdChoices" labels and never obscure primary navigational structures or contain deceptive click-inducing architecture.

D. User Rights & Universal Opt-Out Mechanisms
You maintain the absolute statutory right to disable, restrict, or opt out of personalized and interest-based advertising across all digital devices:
• Google Ads Preferences: You may customize or opt out of personalized Google advertisements by visiting Google Ads Settings at https://adssettings.google.com/.
• Digital Advertising Alliance (DAA): Opt out of targeted advertising from participating consortia at https://optout.aboutads.info/.
• Network Advertising Initiative (NAI): Utilize the multi-vendor opt-out portal at https://optout.networkadvertising.org/.
• European Interactive Digital Advertising Alliance (EDAA): European residents may manage tracking choices at https://www.youronlinechoices.eu/.
• Device-Level Controls: Manage iOS "Limit Ad Tracking" / "Ask App not to Track" and Android "Opt out of Ads Personalization" within your mobile operating system settings.

E. Impact of Opting Out
Opting out of personalized advertising does not eliminate advertisements from our digital portals. Advertisements will remain visible; however, they will be served contextually based solely on the current page content rather than your historical browsing profile.`
    },
    {
      id: "collection-categories",
      title: "3. Categories of Personal & Corporate Information Collected",
      icon: <Database size={18} />,
      content: `To execute statutory entity formations, secure IRS tax identifications, fulfill FinCEN beneficial ownership obligations, and route platform liquidation settlements, S4HEL LLC collects several distinct categories of information:

1. Statutory Beneficial Ownership Identifiers:
Full legal name, residential address, date of birth, country of citizenship, passport copy or government-issued national identification card, tax residency documentation, and beneficial ownership percentage shares. This information is strictly mandated under the federal Corporate Transparency Act (CTA, 31 U.S.C. 5336) for FinCEN reporting.

2. Enterprise Registration Data:
Proposed legal company names, state of formation (Montana, Wyoming, Delaware), principal place of business, North American Industry Classification System (NAICS) codes, corporate officer rosters, Articles of Organization, and initial Operating Agreements.

3. Tax Identification Processing Telemetry:
Form SS-4 application disclosures, non-resident foreign status certifications (Form W-8BEN / W-8BEN-E), Individual Taxpayer Identification Number (ITIN) application parameters, and IRS correspondence tracking records.

4. Banking & Settlement Rail Parameters:
Corporate checking account application disclosures submitted to partner banks (Mercury Bank, Relay Financial, SafiPay Digital Bank), external receiving wallet addresses (for stablecoin USDT/USDC conversions), international SEPA/SWIFT routing instructions, and platform cashout verification tokens.

5. Technical & Behavioral Log Data:
Internet Protocol (IP) addresses, browser family and build, client operating system, Internet Service Provider (ISP), referring URLs, timestamp sequences, page view latencies, and device hardware signatures collected automatically through server logs and Google Analytics 4.`
    },
    {
      id: "lawful-bases",
      title: "4. Lawful Bases for Processing (GDPR Article 6 & UK GDPR)",
      icon: <Scale size={18} />,
      content: `For individuals located within the European Economic Area (EEA), the United Kingdom, or Switzerland, all processing operations conducted by S4HEL LLC are strictly anchored to explicit lawful bases under Article 6 of the General Data Protection Regulation (GDPR):

• Contractual Necessity (Article 6(1)(b)): Processing required to prepare and file your Montana LLC Articles of Organization, draft your Operating Agreement, apply for your Federal EIN with the IRS, or execute 400+ platform cashout instructions.
• Legal & Statutory Obligation (Article 6(1)(c)): Fulfillment of mandatory compliance frameworks under US federal law, including FinCEN Beneficial Ownership Information (BOI) filings, IRS Form 5472/1120 information reporting, Bank Secrecy Act (BSA) rules, anti-money laundering (AML) verifications, and OFAC sanctions screenings.
• Legitimate Commercial Interests (Article 6(1)(f)): Detecting and mitigating fraudulent corporate applications, defending against invalid advertising click rings, maintaining network cybersecurity, and delivering relevant commercial updates to corporate clients.
• Explicit Consent (Article 6(1)(a)): Where you have explicitly opted into analytical tracking cookies, newsletter briefings, or targeted marketing communications. You retain the right to withdraw consent at any time without retroactive prejudice.`
    },
    {
      id: "processing-purposes",
      title: "5. Operational Purposes for Which Data Is Processed",
      icon: <Eye size={18} />,
      content: `S4HEL LLC utilizes collected information exclusively for legitimate corporate, legal, and operational objectives:

• State Corporate Filings: Drafting, submitting, and certifying Articles of Organization, Annual Reports, and Registered Agent certificates with the Montana Secretary of State and designated state divisions.
• IRS Federal Tax Registrations: Preparing and transmitting Form SS-4 to secure valid Employer Identification Numbers (EINs) for domestic and foreign-owned entities.
• FinCEN Beneficial Ownership Reporting: Securely compiling and submitting initial, updated, and corrected BOI reports to the Financial Crimes Enforcement Network.
• Tier-1 Banking Facilitation: Underwriting corporate account introductions with US depository partners (Mercury Bank, Relay Financial) and European EMI partners (SafiPay Digital Bank).
• 400+ Platforms Settlement Execution: Configuring compliant payment reception nodes for Upwork, Amazon Seller Central, Stripe, PayPal, TikTok Shop, Deel, Steam, and affiliate networks.
• Regulatory Service of Process: Fulfilling statutory Registered Agent duties in Kalispell, Montana, including receiving, scanning, and securely transmitting official legal notices and state compliance alerts.
• Advertising Performance & Fraud Prevention: Monitoring Google Ads campaigns, mitigating invalid click patterns, and ensuring full compliance with Google Publisher Policies.`
    },
    {
      id: "disclosures-transfers",
      title: "6. Third-Party Disclosures & International Data Transfers",
      icon: <Server size={18} />,
      content: `S4HEL LLC enforces an uncompromising policy: We DO NOT sell, lease, monetize, or trade your personal or corporate telemetry to third-party data brokers under any circumstances. Information is transferred strictly to vetted institutional partners:

1. Government Agencies & Registrars:
The Montana Secretary of State, US Internal Revenue Service (IRS), US Financial Crimes Enforcement Network (FinCEN), and UK Companies House (where UK entities are commissioned).

2. Depository Banking & Financial Technology Partners:
Mercury Bank (Choice Financial Group, Column N.A.), Relay Financial (Thread Bank), SafiPay Digital Bank (European EMI rails), Stripe Inc., and verified settlement gateway partners.

3. Conglomerate Sister Platforms (Safi Global Ecosystem):
S4HEL LLC collaborates with controlled entities under parent company Safi International Capital Ltd (including SafiPay, Safi Academy, Safi TopUp, Safi Pro, and Safi AI) solely for integrated enterprise fulfillment, centralized customer support, and system security.

4. International Data Transfers:
Because S4HEL LLC is headquartered in Montana, USA, data originating in the EEA, UK, or other foreign jurisdictions is transferred to secure cloud repositories in the United States. All such transfers are governed by standard contractual clauses (SCCs) approved by the European Commission, ensuring equivalent data protection safeguards.`
    },
    {
      id: "data-retention",
      title: "7. Data Retention & Statutory Recordkeeping Mandates",
      icon: <Key size={18} />,
      content: `S4HEL LLC retains corporate and personal information only for the duration necessary to fulfill the statutory purposes outlined in this policy, unless an extended retention period is mandated by federal law:

• Corporate Formation Records: Articles of Organization, Operating Agreements, and state filing confirmations are retained permanently throughout the legal lifespan of the entity to support continuous registered agent representation and corporate standing certifications.
• Tax & Beneficial Ownership Records: IRS Form SS-4, EIN confirmation notices (CP 575 / 147C), Form 5472 filings, and FinCEN BOI submission confirmations are retained for a minimum of seven (7) years following entity dissolution, in compliance with federal statutory audit requirements.
• Technical & Web Analytics Logs: Pseudonymous server logs, IP records, and Google Analytics session telemetry are automatically purged or aggregated after fourteen (14) months.
• Marketing Telemetry: Contact details retained for newsletter broadcasts and updates are purged within thirty (30) days upon receipt of an explicit unsubscribe request.`
    },
    {
      id: "user-rights",
      title: "8. Global Privacy Rights (GDPR, CCPA/CPRA & International)",
      icon: <UserCheck size={18} />,
      content: `Depending on your geographic location and statutory jurisdiction, you possess specific enforceable legal rights regarding your personal information:

A. European Union & United Kingdom Rights (GDPR / UK GDPR):
• Right of Access: You may request a complete copy of all personal records held by S4HEL LLC.
• Right to Rectification: You may request prompt correction of inaccurate or incomplete corporate ownership records.
• Right to Erasure ("Right to be Forgotten"): You may request deletion of your data, provided such deletion does not conflict with mandatory FinCEN, IRS, or state statutory recordkeeping mandates.
• Right to Restriction of Processing: You may restrict processing during ongoing legal disputes or verification inquiries.
• Right to Data Portability: You may receive your structured personal records in a commonly used, machine-readable format.
• Right to Object: You may object at any time to processing based on legitimate interests or direct marketing dispatches.

B. California Consumer Privacy Act (CCPA / CPRA) Rights:
• Right to Know: California residents may request disclosure of categories of personal information collected, sources, commercial purposes, and third parties with whom data was shared.
• Right to Delete: Request deletion of non-statutory personal telemetry.
• Right to Non-Discrimination: Exercising your privacy rights will never result in altered pricing, reduced service speed, or denial of corporate services.
• "Do Not Sell or Share My Personal Information": S4HEL LLC does not sell personal information. However, California users may opt out of cross-context behavioral advertising through our cookie consent banner.

To exercise any of these statutory rights, transmit an official request to our Montana desk at privacy@s4hel.com with the subject line "Formal Data Rights Request".`
    },
    {
      id: "cookies-tracking",
      title: "9. Cookies, Web Beacons & Analytics Technologies",
      icon: <Cookie size={18} />,
      content: `Our digital portals utilize cookies, pixel tags, web beacons, and local storage objects to maintain session security, remember language preferences, analyze interface performance, and serve programmatic advertisements:

1. Essential / Strictly Necessary Cookies: Required to navigate secure client portals, authenticate administrative sessions, and process checkout transactions. These cannot be disabled.
2. Performance & Analytical Cookies: Deployed via Google Analytics 4 to collect aggregated, anonymous statistics regarding visitor volume, bounce rates, and traffic sources. IP masking is enabled by default.
3. Functional Cookies: Store interface preferences, such as selected currency display, language toggles, and saved platform filter states.
4. Advertising & Remarketing Cookies: Placed by Google Ads and Google AdSense to track conversion efficiency, prevent ad repetition, and display contextually relevant business solutions across the Google Display Network.`
    },
    {
      id: "information-security",
      title: "10. Institutional Information Security & Encryption Architecture",
      icon: <Lock size={18} />,
      content: `S4HEL LLC implements institutional-grade physical, technical, and managerial safeguards to protect client documents, beneficial ownership data, and financial records against unauthorized access, alteration, destruction, or disclosure:

• Cryptographic Protocols: All communications between your client terminal and our web servers are encrypted using Transport Layer Security (TLS 1.3) with 256-bit Advanced Encryption Standard (AES-256) cipher suites.
• Encrypted Storage Repositories: Sensitive identity documents, passport scans, and IRS tax filings are stored within isolated, encrypted cloud buckets with zero public access.
• Role-Based Access Controls (RBAC): Internal access to client filing dossiers is restricted strictly to authorized executive compliance officers in Kalispell, Montana, subject to multi-factor authentication (MFA) and immutable audit logging.
• Continuous Threat Monitoring: Automated web application firewalls (WAF), DDoS mitigation networks, and intrusion detection systems inspect network traffic 24/7/365.`
    },
    {
      id: "children-privacy",
      title: "11. Children's Online Privacy Protection Act (COPPA)",
      icon: <AlertCircle size={18} />,
      content: `The services, educational curriculums, and platform cashout frameworks provided by S4HEL LLC are exclusively designed for legal adults, entrepreneurs, and corporate enterprises possessing full legal capacity to enter into binding commercial contracts. 

We do not knowingly solicit, collect, or process personal data from individuals under eighteen (18) years of age. If our Montana compliance desk discovers that an entity application or account has been submitted by a minor, all associated records and pending submissions will be immediately terminated and securely purged from our active databases in accordance with COPPA directives.`
    },
    {
      id: "policy-amendments",
      title: "12. Amendments to this Privacy Policy & Notification Protocols",
      icon: <RefreshCw size={18} />,
      content: `S4HEL LLC reserves the statutory right to periodically review, amend, and update this Privacy Policy to reflect modifications in corporate law, FinCEN regulatory guidelines, IRS administrative directives, or Google advertising policies.

Whenever material modifications are executed, we will update the "Last Updated" timestamp at the apex of this document. In the event of substantial operational modifications affecting how your personal data is utilized, registered corporate clients will receive formal notification via corporate email dispatch thirty (30) days prior to the effective enforcement date.`
    },
    {
      id: "contact-desk",
      title: "13. Statutory Contact Information & Regulatory Inquiries",
      icon: <FileText size={18} />,
      content: `For formal inquiries regarding this Privacy Policy, statutory data rights requests, or regulatory communications from state and federal agencies, contact our executive compliance desk:

S4HEL LLC (S4hel Company)
Corporate Compliance & Privacy Division
1001 S Main St Ste 500, Kalispell, MT 59901, Montana, USA
Executive Telephone: +1 406 316 0317
Official Email: contact@s4hel.com / privacy@s4hel.com
Chief Executive Officer: Sahel Salem
Parent Corporation: Safi International Capital Ltd`
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
            <Shield size={13} /> S4HEL LLC STATUTORY COMPLIANCE DOSSIER
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight italic leading-none">
            PRIVACY POLICY &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              DATA PROTECTION DISCLOSURE
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
            <span>Last Updated: <strong className="text-white">{lastUpdated}</strong></span>
            <span>•</span>
            <span>Jurisdiction: <strong className="text-white">State of Montana, USA</strong></span>
            <span>•</span>
            <span>Parent Entity: <strong className="text-amber-300">Safi International Capital Ltd</strong></span>
            <span>•</span>
            <span>Publisher ID: <strong className="text-white">ca-pub-6551903544426492</strong></span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl pt-2">
            This comprehensive Privacy Policy delineates the exact technical and operational procedures governed by S4HEL LLC regarding corporate information handling, individual privacy rights, automated tracking telemetry, and explicit compliance with Google Ads, Google AdSense publisher policies, GDPR, CCPA, and FinCEN statutory mandates.
          </p>
        </div>

        {/* AdSense In-Feed Fluid Integration */}
        <AdSenseInFeed label="Sponsored Partner Disclosures" />

        {/* Policy Sections */}
        <div className="space-y-8 pt-4">
          {sections.map((sec, idx) => (
            <motion.section
              key={sec.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-7 sm:p-9 rounded-3xl border ${
                sec.highlight 
                  ? "bg-gradient-to-br from-[#0E2038] via-[#091D34] to-[#07192F] border-amber-400/60 shadow-[0_0_35px_rgba(251,191,36,0.15)] ring-1 ring-amber-400/30" 
                  : "bg-[#091D34] border-white/10 hover:border-white/20 shadow-xl"
              } transition-all space-y-4`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl ${
                  sec.highlight ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20"
                } flex items-center justify-center shrink-0`}>
                  {sec.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {sec.title}
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 whitespace-pre-line text-justify font-normal">
                {sec.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom Contact Verification Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#091D34] via-[#0A2540] to-[#07192F] border border-white/10 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Have Specific Regulatory or Privacy Questions?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Our Montana compliance desk responds to official GDPR, CCPA, and data privacy requests within statutory timelines.
            </p>
          </div>
          <Link
            href="/en/contact"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg whitespace-nowrap shrink-0"
          >
            Contact Privacy Desk
          </Link>
        </div>

      </div>
    </div>
  );
}