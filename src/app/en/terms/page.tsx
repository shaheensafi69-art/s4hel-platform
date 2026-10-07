"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Scale, 
  Zap, 
  Gavel, 
  ChevronLeft, 
  AlertCircle, 
  Info, 
  ShieldCheck,
  Building2,
  DollarSign,
  Globe,
  Radio,
  CheckCircle2,
  Lock,
  Layers,
  Target,
  RefreshCw,
  Landmark
} from "lucide-react";
import Link from "next/link";
import AdSenseInFeed from "@/components/AdSenseInFeed";

export default function TermsOfService() {
  const lastUpdated = "October 2026";

  const terms = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms & Legal Authority to Contract",
      icon: <Scale size={18} />,
      content: `By accessing, browsing, interacting with, or purchasing corporate formation, statutory registered agent, banking facilitation, educational, or payment settlement services through S4HEL LLC (commercially operating as "S4hel Company"), you explicitly acknowledge and agree to be bound by these Terms of Service, our Privacy Policy, our Compliance Disclaimer, and all applicable statutory laws of the State of Montana and the United States of America.

If you are executing these terms on behalf of a corporation, partnership, commercial syndicate, or enterprise entity, you represent and warrant that you possess full legal power, corporate authorization, and operational capacity to bind that legal entity to these provisions. If you do not unreservedly agree with every covenant and condition set forth herein, you are strictly prohibited from utilizing our digital nodes, registered agent networks, filing portals, and corporate fulfillment channels.`
    },
    {
      id: "google-ads-advertising",
      title: "2. Google Ads, AdSense & Commercial Advertising Terms",
      icon: <Target size={18} />,
      highlight: true,
      content: `S4HEL LLC engages in active commercial advertising campaigns via Google Ads (Google LLC) and hosts programmatic third-party advertising units supplied by the Google AdSense publisher network (Publisher ID: ca-pub-6551903544426492). Users, visitors, and commercial clients agree to the following mandatory conditions:

A. Algorithmic Ad Serving & Non-Endorsement
Advertisements displayed across our website, articles, directories, and corporate knowledge bases are generated programmatically by Google AdSense based on algorithmic contextual analysis and user browsing telemetry. The display of any third-party commercial advertisement does NOT constitute an endorsement, warranty, recommendation, or verification by S4HEL LLC, its Chief Executive Officer Sahel Salem, or its parent holding company Safi International Capital Ltd.

B. Independent Third-Party Engagements
Any inquiries, transactions, software purchases, or contracts you enter into with third-party advertisers featured in Google Ads or AdSense units are strictly between you and that third party. S4HEL LLC expressly disclaims all legal liability for products, representations, pricing, fulfillment, or damages resulting from third-party advertising interactions.

C. Strict Prohibition of Invalid Click Activity & Fraudulent Traffic
Users and automated visitors are strictly prohibited from engaging in invalid click activity, including but not limited to:
• Utilizing automated click bots, web crawlers, headless browser clusters, or scraping scripts to inflate ad impressions or clicks.
• Participating in click-exchange rings, paid-to-click schemes, or incentivized browsing syndicates.
• Generating repetitive manual clicks designed to artificially consume advertiser budgets or manipulate publisher revenue.
Any party detected executing invalid traffic or click fraud against S4HEL LLC or our Google advertising assets will face immediate permanent IP banning, firewall blacklisting, and civil referral under the Computer Fraud and Abuse Act (18 U.S.C. § 1030) and Montana Code Annotated.

D. Compliance with Google Advertising Standards
S4HEL LLC manages its Google Ads campaigns and AdSense placements in strict conformity with Google Advertising Policies, maintaining transparent landing page experiences, zero deceptive content, and validated ads.txt declarations.`
    },
    {
      id: "scope-services",
      title: "3. Scope of Corporate Formation & Montana Registered Agent Services",
      icon: <Building2 size={18} />,
      content: `S4HEL LLC functions as a specialized commercial corporate filing service and statutory registered agent physically operating in Kalispell, Montana (1001 S Main St Ste 500, Kalispell, MT 59901). Our authorized scope of service comprises:

• Preparing, reviewing for completeness, and submitting Articles of Organization with the Montana Secretary of State, Wyoming Secretary of State, and Delaware Division of Corporations.
• Maintaining a bona fide statutory physical office in Kalispell, Montana, to serve as the registered agent for service of process, state correspondence, and official notifications during regular business hours.
• Assisting domestic and foreign-owned entities in preparing IRS Form SS-4 to obtain federal Employer Identification Numbers (EINs).
• Providing standard Operating Agreement templates, initial organizational minutes, and corporate resolution frameworks.
• Electronically receiving, digitizing, and forwarding official state and legal correspondence to the designated client contact portal.
• Assisting entities in filing initial and updated Beneficial Ownership Information (BOI) reports with FinCEN under the Corporate Transparency Act.`
    },
    {
      id: "non-legal-non-cpa",
      title: "4. No Legal, Tax, or Public Accounting Representation",
      icon: <AlertCircle size={18} />,
      content: `S4HEL LLC IS NOT A LAW FIRM, CERTIFIED PUBLIC ACCOUNTING (CPA) FIRM, OR LICENSED INVESTMENT ADVISORY PRACTICE. 

• No Attorney-Client Privilege: Interactions with our staff, educational materials, WhatsApp advisory desk, automated tools, or telephone agents do NOT create an attorney-client relationship, confidential legal privilege, or CPA-client fiduciary engagement.
• Informational Purpose Only: All jurisdictional guides, state tax comparisons, and corporate templates published across our domains are provided solely for general business administrative assistance. They do not constitute personalized legal counsel or formal tax advice.
• Duty to Seek Professional Counsel: Clients are strongly encouraged to retain certified international tax CPAs and licensed corporate attorneys in their home country and in the United States to assess cross-border tax liabilities, foreign reporting forms (such as IRS Form 5472/1120), withholding rules, and bilateral double-taxation treaties.`
    },
    {
      id: "platforms-cashout",
      title: "5. 400+ Platforms Universal Cashout & Settlement Rail Terms",
      icon: <Zap size={18} />,
      content: `S4HEL LLC provides strategic corporate architecture and liquidity routing frameworks enabling international entrepreneurs to receive, manage, and liquidate operational revenues from more than 400 freelance, e-commerce, gaming, and digital creator platforms (such as Upwork, Amazon Seller Central, Stripe, PayPal, TikTok Shop, Deel, Steam, and affiliate networks):

• Non-Custodial Facilitation: S4HEL LLC acts as an infrastructure facilitator. Corporate checking accounts established through partner banks (Mercury Bank, Relay Financial) and digital neobanking rails (SafiPay) are legally owned, titled, and controlled directly by the client's corporate entity. S4HEL LLC does not hold client operational funds in depository escrow or commingle balances.
• Platform Terms Adherence: Clients warrant that all commercial products sold, freelance contracts fulfilled, software engineered, or digital media published comply in full with the terms of service, acceptable use policies, and anti-fraud criteria of each respective platform. S4HEL LLC assumes zero responsibility for platform-level account freezes, rolling reserves, or merchant suspensions resulting from policy violations or suspicious transaction velocity.
• Settlement Liquidity & Latency: Estimated settlement windows (e.g., < 15-minute stablecoin conversions, same-day ACH, SEPA Instant) depend on underlying clearing network availability, bank holidays, and automated risk scoring.`
    },
    {
      id: "fincen-aml",
      title: "6. FinCEN Beneficial Ownership & Anti-Money Laundering (AML) Warranties",
      icon: <ShieldCheck size={18} />,
      content: `In accordance with the federal Corporate Transparency Act (CTA, 31 U.S.C. § 5336) and Bank Secrecy Act (BSA) regulations enforced by FinCEN:

• Accurate Disclosures: Clients warrant that all passport scans, identification documents, residential addresses, and beneficial ownership declarations provided to S4HEL LLC are authentic, accurate, and current.
• 30-Day Mandatory Update Window: Beneficial owners are legally required to report any change to beneficial ownership percentages, legal names, residential addresses, or passport renewals within thirty (30) calendar days of such modification. Failure to timely submit updates carries severe civil penalties of up to $591 per day and criminal fines.
• Zero Tolerance for Illicit Trade: S4HEL LLC enforces comprehensive OFAC sanctions screening and automated AML filtering. We reserve the absolute statutory right to refuse service, dissolve registered agent representation, and immediately notify federal law enforcement authorities if any entity is found to engage in terrorism financing, narcotics distribution, sanctions evasion, or unlawful fraud.`
    },
    {
      id: "banking-fintech",
      title: "7. Banking Introductions & Partner Institution Autonomy",
      icon: <Landmark size={18} />,
      content: `S4HEL LLC facilitates introductions and document preparation for business checking and treasury accounts with FDIC-insured partner banks (such as Mercury Bank / Choice Financial Group / Column N.A. and Relay Financial / Thread Bank) and European EMI partners (SafiPay Digital Bank):

• Underwriting Discretion: Partner banks retain sole, independent, and unmitigated underwriting discretion to approve, condition, or decline business account applications based on their proprietary risk appetite, prohibited industry guidelines, and KYC/AML reviews. S4HEL LLC CANNOT AND DOES NOT GUARANTEE BANK ACCOUNT APPROVAL.
• Regulatory Compliance: Clients agree to provide all requested operational documentation, customer invoices, supplier agreements, and source-of-wealth verifications directly to bank underwriting teams when requested.`
    },
    {
      id: "ecosystem-governance",
      title: "8. Conglomerate Structure & Safi International Capital Ltd Nexus",
      icon: <Globe size={18} />,
      content: `S4HEL LLC is a wholly owned commercial subsidiary operating under the strategic governance and capital framework of Safi International Capital Ltd (Parent Holding Company).

While Safi International Capital Ltd coordinates executive resource allocation across our conglomerate sister platforms (including SafiPay Digital Bank, Safi Academy, Safi TopUp, Safi Pro, Safi AI, and Zev App), each corporate agreement, registered agent appointment, and statutory engagement executed through s4hel.com is entered into exclusively and directly with S4HEL LLC (Kalispell, Montana).`
    },
    {
      id: "fees-renewals",
      title: "9. Fee Schedules, State Surcharges & Recurring Registered Agent Renewals",
      icon: <DollarSign size={18} />,
      content: `All corporate formation packages, statutory state filing fees, EIN acquisition costs, and registered agent retainers must be settled in full prior to the submission of formal documentation to state authorities:

• Non-Refundable State Fees: Once Articles of Organization or state filing fees have been submitted to the Montana, Wyoming, or Delaware Secretary of State, those state fee disbursements become 100% non-refundable by the state government and by S4HEL LLC.
• Annual Registered Agent Renewals: Registered agent representation is billed annually. Clients agree to maintain an active payment method on file. In the event of non-payment after sixty (60) days of formal notice, S4HEL LLC reserves the statutory right to file an official Resignation of Registered Agent with the Secretary of State, which may result in administrative dissolution of the client entity by the state.
• Transparent Pricing: S4HEL LLC charges zero hidden markups or unauthorized monthly surcharges.`
    },
    {
      id: "intellectual-property",
      title: "10. Intellectual Property & Proprietary Educational Content",
      icon: <Lock size={18} />,
      content: `All proprietary content published on s4hel.com—including corporate comparison matrices, state tax calculators, 400+ platform cashout guides, video masterclasses, graphics, and architectural workflows—is the exclusive intellectual property of S4HEL LLC and Safi International Capital Ltd, protected under US and international copyright and trademark laws.

Clients and visitors are granted a limited, revocable, non-exclusive license to view content for personal or internal enterprise use. Republication, automated scraping, commercial reselling, or unauthorized framing of S4HEL materials is strictly prohibited without prior written authorization from our executive office.`
    },
    {
      id: "limitation-liability",
      title: "11. Disclaimer of Warranties & Absolute Limitation of Liability",
      icon: <ShieldCheck size={18} />,
      content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, S4HEL LLC SERVICES, DIGITAL SYSTEMS, AND KNOWLEDGE BASES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.

IN NO EVENT SHALL S4HEL LLC, ITS PARENT COMPANY SAFI INTERNATIONAL CAPITAL LTD, ITS CHIEF EXECUTIVE OFFICER SAHEL SALEM, OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, BUSINESS INTERRUPTION, LOSS OF DATA, OR LOSS OF BANKING ACCESS) ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.

OUR AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY YOU TO S4HEL LLC FOR THE SPECIFIC SERVICE GIVING RISE TO THE DISPUTE DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.`
    },
    {
      id: "indemnification",
      title: "12. Client Indemnification Obligations",
      icon: <Layers size={18} />,
      content: `You agree to defend, indemnify, and hold harmless S4HEL LLC, its parent holding company Safi International Capital Ltd, its officers, directors, employees, affiliates, and registered agents from and against all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or resulting from:
• Any breach by you of these Terms of Service or our Compliance Disclaimer.
• Fraudulent, false, or inaccurate beneficial ownership information submitted to FinCEN or state registries.
• Commercial products sold, services provided, or financial transactions processed through your business entity.
• Violation of any third-party platform policy (Upwork, Amazon, Stripe, PayPal, TikTok Shop).
• Any violation by your entity of federal, state, or international tax or anti-money laundering laws.`
    },
    {
      id: "dispute-arbitration",
      title: "13. Mandatory Binding Arbitration & Montana Governing Law",
      icon: <Gavel size={18} />,
      content: `These Terms of Service and any dispute arising out of or related to your commercial engagement with S4HEL LLC shall be governed by, construed, and enforced in accordance with the substantive laws of the State of Montana, USA, without regard to its conflict of law principles.

• Mandatory Arbitration: Any dispute, controversy, or claim arising out of or relating to this contract, or the breach, termination, or invalidity thereof, shall be settled by binding commercial arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules.
• Exclusive Venue: The place of arbitration shall be Flathead County, Montana, USA, or conducted virtually by mutual agreement.
• Class Action Waiver: YOU AND S4HEL LLC AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.`
    },
    {
      id: "entire-agreement",
      title: "14. Severability, Force Majeure & Entire Agreement",
      icon: <RefreshCw size={18} />,
      content: `These Terms of Service, together with our Privacy Policy and Compliance Disclaimer, constitute the entire, integrated agreement between you and S4HEL LLC concerning your use of our corporate services and digital platforms.

• Severability: If any provision of these terms is deemed unlawful, void, or unenforceable by an arbitrator or court of competent jurisdiction, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect.
• Force Majeure: S4HEL LLC shall not be held liable for delays or failure in performance resulting from acts of God, state filing system outages, IRS processing backlogs, bank underwriting moratoria, civil unrest, or telecommunication network failures beyond our reasonable control.`
    },
    {
      id: "contact-terms",
      title: "15. Statutory Corporate Headquarters & Formal Notices",
      icon: <FileText size={18} />,
      content: `Formal legal notices, commercial communications, and corporate inquiries must be transmitted in writing to:

S4HEL LLC (S4hel Company)
Executive Corporate Office
1001 S Main St Ste 500, Kalispell, MT 59901, Montana, USA
Telephone: +1 406 316 0317
Email: contact@s4hel.com / legal@s4hel.com
Chief Executive Officer: Sahel Salem
Parent Holding Corporation: Safi International Capital Ltd`
    }
  ];

  return (
    <div className="min-h-screen bg-[#07192F] text-slate-100 pt-32 sm:pt-40 pb-28 px-4 sm:px-6 lg:px-10 font-sans selection:bg-[#FF7A00] selection:text-white relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-10 right-1/4 w-[750px] h-[750px] bg-[#FF7A00]/15 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-1/4 w-[650px] h-[650px] bg-[#0A2540]/60 blur-[160px] rounded-full" />
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
            <Scale size={13} /> S4HEL LLC STATUTORY TERMS OF SERVICE
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight italic leading-none">
            TERMS OF SERVICE &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-orange-400 to-amber-300 not-italic">
              COMMERCIAL COVENANTS
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
            <span>Last Updated: <strong className="text-white">{lastUpdated}</strong></span>
            <span>•</span>
            <span>Governing Law: <strong className="text-white">State of Montana, USA</strong></span>
            <span>•</span>
            <span>Parent Entity: <strong className="text-amber-300">Safi International Capital Ltd</strong></span>
            <span>•</span>
            <span>Publisher: <strong className="text-white">ca-pub-6551903544426492</strong></span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl pt-2">
            These statutory Terms of Service govern your commercial engagement with S4HEL LLC across US corporate formations, Montana registered agent operations, 400+ platform cashout liquidations, Google Ads interactions, and institutional banking introductions.
          </p>
        </div>

        {/* AdSense In-Feed Fluid Integration */}
        <AdSenseInFeed label="Sponsored Partner Disclosures" />

        {/* Terms Sections */}
        <div className="space-y-8 pt-4">
          {terms.map((term, idx) => (
            <motion.section
              key={term.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-7 sm:p-9 rounded-3xl border ${
                term.highlight 
                  ? "bg-gradient-to-br from-[#0E2038] via-[#091D34] to-[#07192F] border-amber-400/60 shadow-[0_0_35px_rgba(251,191,36,0.15)] ring-1 ring-amber-400/30" 
                  : "bg-[#091D34] border-white/10 hover:border-white/20 shadow-xl"
              } transition-all space-y-4`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl ${
                  term.highlight ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20"
                } flex items-center justify-center shrink-0`}>
                  {term.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {term.title}
                </h2>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 whitespace-pre-line text-justify font-normal">
                {term.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom Contact Verification Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#091D34] via-[#0A2540] to-[#07192F] border border-white/10 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Questions Regarding Our Terms or Commercial Covenants?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Our legal and commercial agreements team is available during regular Montana business hours.
            </p>
          </div>
          <Link
            href="/en/contact"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A00] to-orange-500 hover:from-white hover:to-white text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg whitespace-nowrap shrink-0"
          >
            Contact Legal Desk
          </Link>
        </div>

      </div>
    </div>
  );
}