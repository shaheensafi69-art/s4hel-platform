"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Globe, ShieldCheck, Banknote, ChevronRight, BookOpen, 
  Rocket, Star, Info, Landmark, HelpCircle, FileText, CheckCircle2, ThumbsUp, ThumbsDown 
} from "lucide-react";

// Types Declarations
interface StateGuideData {
  state: string;
  filingFee: string;
  processingTime: string;
  taxRating: string;
  annualReportFee: string;
  description: string;
  pros: string[];
  cons: string[];
  steps: string[];
  complianceRequirements: string[];
}

// Comprehensive 50-State Rich Intelligence Dataset for Instant Awin Validation
const stateGuidesDatabase: Record<string, StateGuideData> = {
  "Alabama": {
    state: "Alabama", filingFee: "$200", processingTime: "10-15 Days", taxRating: "Moderate (6.5%)", annualReportFee: "$100",
    description: "Alabama offers a steady economic ecosystem for localized industries, boasting strong traditional infrastructure and low property taxes.",
    pros: ["Low local property tax rates", "Strong traditional manufacturing hub", "Affordable local cost of operation"],
    cons: ["Higher initial filing fees compared to neighbors", "Mandatory annual privilege tax return", "Strict local permit regulations"],
    steps: ["Select a Unique Name ending with LLC", "Appoint an Alabama Registered Agent", "File Certificate of Formation with the Secretary of State", "Obtain Federal EIN Tax ID"],
    complianceRequirements: ["Annual Privilege Tax Return filing required", "Maintain business records locally", "Incorporate local operational permits if applicable"]
  },
  "Alaska": {
    state: "Alaska", filingFee: "$250", processingTime: "3-5 Days", taxRating: "Excellent (0% Sales Tax)", annualReportFee: "$100 Biennial",
    description: "Alaska has no state income tax or state sales tax, providing exceptional initial margin preservation for digital-first operational entities.",
    pros: ["No state income tax for individuals", "0% state sales tax rate", "Streamlined biennial report cycle"],
    cons: ["High initial business setup fee", "Complex corporate licensing for specific niches", "Remote physical banking nexus"],
    steps: ["Register a distinct Alaskan corporate name", "Secure an Alaska Registered Agent", "Submit Articles of Organization online", "Acquire Alaska Business License"],
    complianceRequirements: ["File Biennial Report before January 2nd", "Maintain active business privilege status", "Federal corporate declarations"]
  },
  "Arizona": {
    state: "Arizona", filingFee: "$50", processingTime: "7-10 Days", taxRating: "Highly Competitive", annualReportFee: "$0",
    description: "Arizona is an exploding tech-hub boasting zero annual report fees for LLCs and streamlined publication structures.",
    pros: ["Zero ongoing annual state report fees", "Incredibly low initial setup cost", "Rapidly expanding tech and startup ecosystem"],
    cons: ["Mandatory newspaper publication in certain counties", "Complex transaction privilege tax for physical goods"],
    steps: ["Verify name availability via AZCC database", "Designate an Arizona Statutory Agent", "File Articles of Organization with AZCC", "Publish corporate notice if required by county"],
    complianceRequirements: ["Update statutory agent changes instantly", "Maintain active state transaction privilege tax accounts if trading goods"]
  },
  "Arkansas": {
    state: "Arkansas", filingFee: "$45", processingTime: "2-3 Days", taxRating: "Favorable", annualReportFee: "$150",
    description: "Arkansas offers rapid electronic filing mechanisms and very low initial setup barriers for cross-border ecommerce setups.",
    pros: ["Cheap initial state filing fee", "Extremely fast online processing loop", "Simple single-member privacy options"],
    cons: ["Relatively high annual franchise tax flat rate", "Strict state level tracking on physical assets"],
    steps: ["Check corporate name compliance", "Appoint an Arkansas Registered Agent", "File Certificate of Organization online", "Obtain local operating authorization"],
    complianceRequirements: ["Pay Annual Franchise Tax to Secretary of State by May 1st annually", "Keep meticulous financial records"]
  },
  "California": {
    state: "California", filingFee: "$70", processingTime: "5-7 Days", taxRating: "High ($800 Franchise Tax)", annualReportFee: "$20",
    description: "The world's powerhouse economy. Essential for entities looking to integrate directly with venture networks and global premium tech ecosystems.",
    pros: ["Unmatched access to global venture capital markets", "Massive internal state consumer base", "High prestige corporate presence"],
    cons: ["Mandatory $800 annual franchise tax regardless of income", "Intense corporate regulatory and reporting oversight"],
    steps: ["Search California Secretary of State registry", "Appoint a California Registered Agent", "File Articles of Organization (LLC-1)", "Apply for California EIN and local business tax registration"],
    complianceRequirements: ["File Statement of Information (LLC-12) within 90 days of formation and biennially", "Pay $800 Annual Franchise Tax"]
  },
  "Colorado": {
    state: "Colorado", filingFee: "$50", processingTime: "Instant (Online)", taxRating: "Excellent", annualReportFee: "$10",
    description: "Colorado offers an instant online setup pipeline and incredibly cheap annual compliance protocols, making it a favorite for SaaS infrastructure.",
    pros: ["Instant automated online filing system", "Extremely cheap $10 annual reporting fee", "Flexible corporate governance laws"],
    cons: ["Flat flat-rate state flat income taxes", "Public director information transparency rules"],
    steps: ["Verify business name availability", "Appoint a Colorado Registered Agent", "File Articles of Organization instantly online", "Establish corporate operational guidelines"],
    complianceRequirements: ["File periodic report online annually", "Maintain digital tax account compliance via Colorado Department of Revenue"]
  },
  "Connecticut": {
    state: "Connecticut", filingFee: "$120", processingTime: "3-5 Days", taxRating: "Moderate", annualReportFee: "$80",
    description: "Connecticut provides robust access to financial corridors and high-net-worth operational networks within the New England landscape.",
    pros: ["Proximity to major financial capitals", "Highly educated corporate talent pool", "Strong legal asset structures"],
    cons: ["Strict annual reporting timelines", "Relatively high state operational overhead costs"],
    steps: ["Secure an available business name", "Appoint a Connecticut Registered Agent", "File Certificate of Organization online", "Acquire Federal tax parameters"],
    complianceRequirements: ["File Annual Report online by the anniversary date of formation", "Maintain active state tax registers"]
  },
  "Delaware": {
    state: "Delaware", filingFee: "$90", processingTime: "1-2 Days", taxRating: "Elite (No Out-of-State Corporate Tax)", annualReportFee: "$300 Flat",
    description: "The gold standard for corporate structuring globally. Delaware provides unmatched legal protection via the Court of Chancery and is favored by VC investors.",
    pros: ["Elite protection via specialized Court of Chancery", "Preferred by all venture capitalists and investors", "Complete privacy for members and managers"],
    cons: ["High $300 flat annual franchise tax structure", "Requires specialized corporate maintenance records"],
    steps: ["Perform Delaware corporate entity check", "Appoint an Authorized Delaware Registered Agent", "File Certificate of Formation", "Formulate an internal multi-member Operating Agreement"],
    complianceRequirements: ["Pay flat $300 Alternative Franchise Tax before June 1st annually", "Maintain pristine corporate separation guidelines"]
  },
  "Florida": {
    state: "Florida", filingFee: "$125", processingTime: "5-7 Days", taxRating: "Highly Favorable (No State Income Tax)", annualReportFee: "$138.75",
    description: "Florida combines a thriving consumer marketplace with zero personal state income tax, ideal for massive scale-out logistics operations.",
    pros: ["Zero personal state income tax constraints", "Massive regional and global trade infrastructure", "Simple digital filing mechanisms via Sunbiz"],
    cons: ["Severe late fees ($400) for missing annual reports", "Public disclosure of corporate officer roles"],
    steps: ["Search Division of Corporations Sunbiz portal", "Designate a Florida Registered Agent", "File Florida Articles of Organization", "Acquire Federal Employer Identification Number"],
    complianceRequirements: ["File Annual Report on Sunbiz between Jan 1st and May 1st to avoid a $400 late fee", "Maintain valid operational licensing"]
  },
  "Georgia": {
    state: "Georgia", filingFee: "$100", processingTime: "5-7 Days", taxRating: "Pro-Business", annualReportFee: "$50",
    description: "Georgia represents an economic juggernaut with exceptionally low operational costs and high corporate development velocity.",
    pros: ["Low cost of business operations", "Excellent logistics and corporate ecosystem", "Cheap annual report maintenance fee"],
    cons: ["Corporate tax rates apply to out-of-state entities", "Complex state employer registration parameters"],
    steps: ["Select a unique Georgia name structure", "Appoint a Georgia Registered Agent", "File Articles of Organization online via eCorp", "Register for state taxes"],
    complianceRequirements: ["File Annual Registration between Jan 1st and April 1st annually", "Keep local administrative records active"]
  },
  "Hawaii": {
    state: "Hawaii", filingFee: "$50", processingTime: "3-5 Days", taxRating: "Moderate", annualReportFee: "$15",
    description: "Hawaii provides strategic territorial access to pan-Asian corridors alongside standard US corporate structures.",
    pros: ["Strategic geographical Pacific trade hub Location", "Inexpensive annual reporting parameters", "Strong localized brand value"],
    cons: ["Complex General Excise Tax (GET) system on transactions", "Higher state-level remote operational costs"],
    steps: ["Confirm Hawaiian naming exclusivity", "Secure a Hawaii Registered Agent", "File Articles of Organization Form LLC-1", "Apply for state General Excise Tax (GET)"],
    complianceRequirements: ["File Annual Report during the quarter of registration anniversary", "Comply with state GET filing requirements"]
  },
  "Idaho": {
    state: "Idaho", filingFee: "$100", processingTime: "5-7 Days", taxRating: "Favorable", annualReportFee: "$0",
    description: "Idaho features zero cost annual report structures and rapid technology adoption models for fast-moving startups.",
    pros: ["$0 cost annual reporting workflow updates", "Extremely stable pro-business legislative pipeline", "Low state administrative friction"],
    cons: ["State income tax brackets apply over low limits", "Limited localized international banking structures"],
    steps: ["Check Idaho Business Registry", "Appoint an Idaho Registered Agent", "File Certificate of Organization online", "Secure operational tax pathways"],
    complianceRequirements: ["File free Annual Report online to remain in good standing", "Track statutory regulatory changes"]
  },
  "Illinois": {
    state: "Illinois", filingFee: "$150", processingTime: "1-2 Days", taxRating: "Moderate", annualReportFee: "$75",
    description: "Illinois represents a crucial Midwestern commercial framework, offering immense institutional infrastructure and banking density.",
    pros: ["Access to deep Midwestern commercial enterprise nodes", "High density of financial institutions and banks", "Expedited online filing options"],
    cons: ["Higher corporate state tax brackets", "Meticulous structural compliance requirements"],
    steps: ["Ensure compliance with Illinois LLC naming rules", "Appoint an Illinois Registered Agent", "File Articles of Organization online", "Establish corporate ledger"],
    complianceRequirements: ["File Annual Report and pay franchise fees before the first day of the formation anniversary month"]
  },
  "Indiana": {
    state: "Indiana", filingFee: "$95", processingTime: "Instant", taxRating: "Highly Favorable", annualReportFee: "$30 Biennial",
    description: "Indiana is known for fiscal stability, low business costs, and intuitive electronic government portals.",
    pros: ["Cheap biennial (every two years) report schedule", "Incredibly stable state fiscal policies", "Highly optimized online state gateway (INBiz)"],
    cons: ["Local county regulations might require extra tracking", "Information regarding corporate managers is searchable"],
    steps: ["Search INBiz corporate register", "Designate an Indiana Registered Agent", "File Articles of Organization through INBiz", "Acquire tax operational routing"],
    complianceRequirements: ["File a Business Entity Report biennially during the anniversary month of formation"]
  },
  "Iowa": {
    state: "Iowa", filingFee: "$50", processingTime: "1-2 Days", taxRating: "Stable", annualReportFee: "$45 Biennial",
    description: "Iowa offers safe, highly predictable legal frameworks and low administrative expenses over long horizons.",
    pros: ["Low initial incorporation overhead", "Biennial reporting preserves administrative bandwidth", "Highly safe corporate asset protections"],
    cons: ["Complex corporate tax filing architectures for large margins", "Strict timelines for corporate naming updates"],
    steps: ["Perform Iowa Secretary of State name query", "Secure an Iowa Registered Agent", "Submit Certificate of Organization online", "Apply for federal entity codes"],
    complianceRequirements: ["File Biennial Report online in odd-numbered years between January 1st and April 1st"]
  },
  "Kansas": {
    state: "Kansas", filingFee: "$160", processingTime: "Instant", taxRating: "Moderate", annualReportFee: "$55 Biennial",
    description: "Kansas is a central logistics node with fully automated cloud filing structures for quick market deployment.",
    pros: ["Automated cloud filing parameters", "Centralized geographic node", "Low cost ongoing biennial reports"],
    cons: ["Slightly higher up-front state filing fee", "Strict corporate franchise tax tracking triggers"],
    steps: ["Verify Kansas naming availability", "Appoint a Kansas Registered Agent", "File Articles of Organization instantly online", "Establish internal framework logs"],
    complianceRequirements: ["File Biennial Report with the Secretary of State every two years based on tax cycle"]
  },
  "Kentucky": {
    state: "Kentucky", filingFee: "$40", processingTime: "Instant", taxRating: "Highly Competitive", annualReportFee: "$15",
    description: "Kentucky combines cheap state filing fees with nominal annual upkeep requirements, yielding high investment returns.",
    pros: ["One of the lowest initial filing fees in the US", "Nominal $15 annual report maintenance cost", "Instant deployment tracking structures"],
    cons: ["State corporate income taxes apply flatly", "Complex county operational business licensing"],
    steps: ["Search Kentucky corporate directory", "Appoint a Kentucky Registered Agent", "Submit Articles of Organization electronically", "Acquire internal business codes"],
    complianceRequirements: ["File Annual Report online between January 1st and June 30th annually"]
  },
  "Louisiana": {
    state: "Louisiana", filingFee: "$100", processingTime: "2-3 Days", taxRating: "Moderate", annualReportFee: "$35",
    description: "Louisiana provides strategic maritime trade access and a distinct civil legal code structure offering specific corporate protective options.",
    pros: ["Strategic maritime port asset parameters", "Inexpensive annual reporting loop", "Strong unique civil law protective shields"],
    cons: ["Unique legal system requires specialized processing knowledge", "Complex franchise tax calculation tiers"],
    steps: ["Check geauxBIZ database for naming availability", "Designate a Louisiana Registered Agent", "File Articles of Organization via geauxBIZ", "Register for local state sales channels"],
    complianceRequirements: ["File Annual Report online on or before the anniversary date of formation"]
  },
  "Maine": {
    state: "Maine", filingFee: "$175", processingTime: "10-15 Days", taxRating: "Moderate", annualReportFee: "$85",
    description: "Maine features localized community economic systems paired with robust regional consumer trust vectors.",
    pros: ["High consumer trust and regional market integrity", "Moderate continuous asset maintenance costs", "Strong individual liability buffers"],
    cons: ["Slower manual processing loop times for state filings", "Severe suspension protocols for delayed reports"],
    steps: ["Confirm exclusive corporate name rights", "Secure a Maine Registered Agent", "File Certificate of Formation by mail or expedited service", "Configure internal governance docs"],
    complianceRequirements: ["File Annual Report online before June 1st to avoid severe administrative suspension protocols"]
  },
  "Maryland": {
    state: "Maryland", filingFee: "$100", processingTime: "5-7 Days", taxRating: "Moderate", annualReportFee: "$300",
    description: "Maryland provides unparalleled physical and operational access to federal acquisition frameworks and capital rings.",
    pros: ["Direct proximity to federal business acquisition portals", "Thriving affluent regional market", "Excellent commercial law frameworks"],
    cons: ["High $300 mandatory annual personal property filing fee", "Complicated local sales tax distributions"],
    steps: ["Search SDAT corporate registry", "Designate a Maryland Resident Agent", "File Articles of Organization online via Maryland Business Express", "Secure EIN data assets"],
    complianceRequirements: ["File Annual Report / Personal Property Return with SDAT by April 15th annually"]
  },
  "Massachusetts": {
    state: "Massachusetts", filingFee: "$500", processingTime: "1-2 Days", taxRating: "Stable", annualReportFee: "$500",
    description: "A premier legal jurisdiction for elite innovation networks, high-end academia integrations, technology ventures, and robust venture capital pipelines.",
    pros: ["Elite positioning for tech and academic innovation networks", "Direct channels to high-tier institutional venture funds", "Extremely fast 1-2 day electronic setup turnarounds"],
    cons: ["Extremely high $500 initial filing fee", "Equally high $500 recurring annual report cost"],
    steps: ["Verify naming premium exclusivity on the mass.gov registry", "Appoint a verified Massachusetts Registered Agent", "File Certificate of Organization with the Corporations Division", "Draft a comprehensive global Operating Agreement"],
    complianceRequirements: ["File precise Annual Report online on or before the exact anniversary date of formation to retain standard operational corporate velocity"]
  },
  "Michigan": {
    state: "Michigan", filingFee: "$50", processingTime: "2-3 Days", taxRating: "Competitive", annualReportFee: "$25",
    description: "Michigan is a massive manufacturing and engineering nucleus offering highly automated online administration systems.",
    pros: ["Very low initial entry cost parameters ($50)", "Minimal $25 annual compliance reporting maintenance", "Fully automated online platform (LARA)"],
    cons: ["Subject to localized corporate apportionment rules", "Public indexing of active entity directors"],
    steps: ["Search LARA database for naming compliance", "Appoint a Michigan Resident Agent", "File Articles of Organization online", "Establish corporate fiscal years"],
    complianceRequirements: ["File Annual Statement online before February 15th annually (except the year of formation)"]
  },
  "Minnesota": {
    state: "Minnesota", filingFee: "$155", processingTime: "Instant", taxRating: "Stable", annualReportFee: "$0",
    description: "Minnesota offers clear commercial laws and a zero-fee annual renewal architecture for streamlined operations.",
    pros: ["Zero recurring cost for annual corporate state renewals", "Instant online processing and confirmation loops", "Clear, well-established mercantile laws"],
    cons: ["Higher initial setup transaction costs", "High local corporate income tax indices if operating physically"],
    steps: ["Query Minnesota business filing index", "Secure a Minnesota Registered Agent", "File Articles of Organization online with the OSS", "Acquire internal accounting parameters"],
    complianceRequirements: ["File a free Annual Renewal online before December 31st each year"]
  },
  "Mississippi": {
    state: "Mississippi", filingFee: "$50", processingTime: "Instant", taxRating: "Favorable", annualReportFee: "$0",
    description: "Mississippi delivers incredibly cheap asset holding pathways coupled with fully digital rapid formation mechanisms.",
    pros: ["Zero ongoing annual report fees", "Inexpensive $50 initial organization baseline", "Completely digital instant deployment pipeline"],
    cons: ["Fewer specialized corporate banking options locally", "Strict documentation required for cross-border operations"],
    steps: ["Perform corporate name clearance", "Appoint a Mississippi Registered Agent", "File Certificate of Formation instantly online via SOS portal", "Obtain global banking credentials"],
    complianceRequirements: ["File a free Annual Report online between January 1st and April 15th yearly"]
  },
  "Missouri": {
    state: "Missouri", filingFee: "$50", processingTime: "Instant", taxRating: "Competitive", annualReportFee: "$0",
    description: "Missouri provides zero corporate franchise fees and zero cost annual maintenance filings for standard modern LLCs.",
    pros: ["No state-level annual report filing required for LLCs", "Extremely low initial registration cost", "Zero ongoing state maintenance fees"],
    cons: ["State tax filings are mandatory if any US source profit occurs", "Corporate name protection rules are highly localized"],
    steps: ["Check Missouri Secretary of State registry", "Designate a Missouri Registered Agent", "Submit Articles of Organization online instantly", "Draft internal governance charts"],
    complianceRequirements: ["No state-level annual report filing required for standard LLC structures; maintain local licenses"]
  },
  "Montana": {
    state: "Montana", filingFee: "$35", processingTime: "Instant", taxRating: "Elite (0% State Sales Tax)", annualReportFee: "$20",
    description: "An absolute premier asset protection tier. Montana boasts zero state sales tax, incredibly cheap filing parameters, and absolute structural corporate velocity.",
    pros: ["0% state sales tax baseline on all transactions", "One of the cheapest initial setup entries globally ($35)", "Extremely low annual upkeep friction ($20)"],
    cons: ["Strict deadlines: must file before April 15th to avoid penalties", "Requires robust registered agent network mapping"],
    steps: ["Search Montana Secretary of State business portal", "Secure a verified Montana Registered Agent", "File Articles of Organization instantly online", "Establish federal operational taxonomy"],
    complianceRequirements: ["File Annual Report online before April 15th annually to prevent immediate assessment of late penalties"]
  },
  "Nebraska": {
    state: "Nebraska", filingFee: "$110", processingTime: "2-3 Days", taxRating: "Stable", annualReportFee: "$13 Biennial",
    description: "Nebraska offers high institutional security and historically safe legal metrics for localized business expansions.",
    pros: ["Extremely low biennial state fee ($13)", "Highly stable regional economic policies", "Excellent structural privacy pathways"],
    cons: ["Strict statutory newspaper publishing criteria can apply", "Slower processing during peak fiscal cycles"],
    steps: ["Confirm Nebraskan name availability", "Appoint a Nebraska Registered Agent", "File Articles of Organization with the SOS", "Fulfill state publication regulations if mandatory"],
    complianceRequirements: ["File Biennial Report in odd-numbered years before April 1st"]
  },
  "Nevada": {
    state: "Nevada", filingFee: "$425 (Includes Business License)", processingTime: "1-2 Days", taxRating: "Elite (No State Income Tax)", annualReportFee: "$350",
    description: "Nevada is a globally renowned corporate haven featuring zero state income tax, zero corporate tax, and absolute institutional privacy for directors.",
    pros: ["Zero personal or corporate state income tax brackets", "Absolute anonymity and operational tracking blocks for owners", "No data sharing loops with the federal IRS"],
    cons: ["Very high initial registration and licensing overhead ($425)", "High recurring annual asset renewal fee ($350)"],
    steps: ["Verify naming metrics on SilverFlume portal", "Designate an official Nevada Registered Agent", "File Articles of Organization alongside Initial Member Lists", "Secure Nevada Business License"],
    complianceRequirements: ["File Annual List and State Business License Renewal annually by the end of the formation month"]
  },
  "New Hampshire": {
    state: "New Hampshire", filingFee: "$100", processingTime: "3-5 Days", taxRating: "Favorable", annualReportFee: "$100",
    description: "New Hampshire boasts zero general state sales tax and zero personal state income tax, providing extreme fiscal arbitrage opportunities.",
    pros: ["0% general state sales tax asset structures", "No personal state income tax overhead constraints", "Simple flat-fee compliance tracking"],
    cons: ["Business profits tax applies if gross income scales heavily", "Strict statutory state naming compliance matrix"],
    steps: ["Search NH QuickStart for name availability", "Appoint a New Hampshire Registered Agent", "File Certificate of Formation online", "Acquire internal tax matrices"],
    complianceRequirements: ["File Annual Report online before April 1st annually"]
  },
  "New Jersey": {
    state: "New Jersey", filingFee: "$125", processingTime: "Instant", taxRating: "Moderate", annualReportFee: "$75",
    description: "New Jersey represents an intense economic node directly bordering the global financial capital, boasting high connectivity.",
    pros: ["Supreme geographic access to East Coast corporate lines", "Rapid instant online electronic authorization systems", "Strong cross-border trading density"],
    cons: ["Highly complex state tax compliance registration mandates", "Mandatory filing within 60 days of initialization"],
    steps: ["Verify New Jersey business registry uniqueness", "Appoint a New Jersey Registered Agent", "File Public Records Filing online", "Register for mandatory state tax frameworks within 60 days"],
    complianceRequirements: ["File Annual Report online during the formation anniversary month"]
  },
  "New Mexico": {
    state: "New Mexico", filingFee: "$50", processingTime: "Instant", taxRating: "Elite (Absolute Privacy & $0 Upkeep)", annualReportFee: "$0",
    description: "One of the most cost-effective and private locations worldwide. New Mexico LLCs feature complete anonymity, zero annual fees, and permanent lifetime configurations.",
    pros: ["Complete structural owner anonymity & privacy", "Zero ($0) ongoing annual reporting fees permanently", "Extremely low $50 setup threshold metrics"],
    cons: ["Fewer localized premium corporate bank branches", "Complex state gross receipts taxes if operating physically"],
    steps: ["Search New Mexico SOS entity log", "Secure a New Mexico Registered Agent", "File Articles of Organization instantly online", "Establish corporate operational vaults"],
    complianceRequirements: ["Zero annual report filing required; preserve active registered agent standing perpetually"]
  },
  "New York": {
    state: "New York", filingFee: "$200", processingTime: "3-5 Days", taxRating: "High", annualReportFee: "$9 Biennial",
    description: "The economic nerve center of global capitalism. Crucial for massive multinational corporate structures and hyper-dense institutional integrations.",
    pros: ["Maximum prestige global corporate validation asset", "Direct access to the epicenter of financial integrations", "Very nominal $9 biennial maintenance fee"],
    cons: ["Incredibly strict and expensive 6-week publishing law", "High localized state and city corporate tax brackets"],
    steps: ["Search NYS Department of State index", "Designate a New York Registered Agent", "File Articles of Organization with NY DOS", "Complete strict statutory 6-week publication requirement"],
    complianceRequirements: ["File NYS Biennial Statement every two years online", "Comply with localized city franchise adjustments where applicable"]
  },
  "North Carolina": {
    state: "North Carolina", filingFee: "$125", processingTime: "3-5 Days", taxRating: "Highly Competitive", annualReportFee: "$200",
    description: "North Carolina features an explosive technology sector and highly progressive business tax reduction timelines.",
    pros: ["Booming technological research and innovation networks", "Rapidly declining state corporate tax schedules", "Intuitive automated tracking setups"],
    cons: ["Substantial $200 recurring annual report overhead", "Strict timelines matching April 15th frameworks"],
    steps: ["Search NC Secretary of State registry", "Appoint a North Carolina Registered Agent", "File Articles of Organization online", "Formulate corporate governance protocols"],
    complianceRequirements: ["File Annual Report online with the SOS by April 15th every single year"]
  },
  "North Dakota": {
    state: "North Dakota", filingFee: "$135", processingTime: "2-3 Days", taxRating: "Stable", annualReportFee: "$50",
    description: "North Dakota offers exceptional fiscal solvency indices and robust energy/agricultural corporate security matrices.",
    pros: ["Extreme financial solvency metrics at state level", "Low, steady $50 corporate upkeep protocols", "Highly automated FirstStop filing system"],
    cons: ["Late reporting triggers instant entity revocation cycles", "Specific corporate agriculture limitations apply"],
    steps: ["Check FirstStop portal for name compliance", "Appoint a North Dakota Registered Agent", "Submit Articles of Organization online", "Acquire accounting routing tracks"],
    complianceRequirements: ["File Annual Report online before November 15th each calendar year"]
  },
  "Ohio": {
    state: "Ohio", filingFee: "$99", processingTime: "3-5 Days", taxRating: "Highly Favorable (No State Corporate Income Tax)", annualReportFee: "$0",
    description: "Ohio features an incredible corporate infrastructure matrix highlighted by zero state-level income tax on standard LLC holding entities.",
    pros: ["Zero state corporate income tax on standard holding structures", "Zero ongoing recurring annual state maintenance fees", "Solid baseline mercantile legal codes"],
    cons: ["Commercial Activity Tax (CAT) triggers on massive scales", "Searchable manager index data pipelines"],
    steps: ["Perform Ohio business name search", "Appoint an Ohio Registered Agent", "File Articles of Organization online via Gateway", "Map operational accounting flows"],
    complianceRequirements: ["Maintain valid local statutory compliance; zero annual state fees required for standard setups"]
  },
  "Oklahoma": {
    state: "Oklahoma", filingFee: "$100", processingTime: "1-2 Days", taxRating: "Stable", annualReportFee: "$25",
    description: "Oklahoma presents rapid setup loops and exceptionally cheap yearly compliance maintenance protocols.",
    pros: ["Rapid 1-2 day turnaround processing setups", "Cheap $25 annual maintenance certificate validation", "Straightforward filing parameters"],
    cons: ["Immediate penalties applied on the formation date anniversary", "Public officer directory indexing protocols"],
    steps: ["Query Oklahoma corporate directory", "Designate an Oklahoma Registered Agent", "File Articles of Organization online", "Draft internal standard governance records"],
    complianceRequirements: ["File Annual Certificate with the Secretary of State on the exact formation anniversary date"]
  },
  "Oregon": {
    state: "Oregon", filingFee: "$100", processingTime: "Instant", taxRating: "Favorable (0% State Sales Tax)", annualReportFee: "$100",
    description: "Oregon combines zero state sales tax with deep eco-industrial and modern tech expansion networks.",
    pros: ["0% state sales tax optimization tracks", "Instantaneous electronic state processing loops", "Excellent position for West Coast asset holdings"],
    cons: ["Flat corporate minimum taxes can apply to operational entities", "Public directory listing requirements for organizers"],
    steps: ["Verify Oregon name uniqueness online", "Secure an Oregon Registered Agent", "File Articles of Organization instantly via SOS portal", "Establish corporate operational frameworks"],
    complianceRequirements: ["File Annual Report online during the formation anniversary window to avoid immediate termination"]
  },
  "Pennsylvania": {
    state: "Pennsylvania", filingFee: "$125", processingTime: "7-10 Days", taxRating: "Stable", annualReportFee: "$70 Decennial",
    description: "Pennsylvania represents a historically massive commercial framework with high institutional banking access densities.",
    pros: ["High prestige institutional banking density lines", "Unique decennial (every 10 years) report upkeep model", "Extremely robust asset classification boundaries"],
    cons: ["Slower manual processing turnarounds via state offices", "Complex local tax structure tracking metrics"],
    steps: ["Search Pennsylvania corporate database", "Designate a Pennsylvania Registered Agent", "File Certificate of Organization online", "Acquire internal regulatory licenses"],
    complianceRequirements: ["File Decennial Report every ten years based on state timelines; manage standard tax profiles"]
  },
  "Rhode Island": {
    state: "Rhode Island", filingFee: "$150", processingTime: "2-3 Days", taxRating: "Moderate", annualReportFee: "$50",
    description: "Rhode Island offers high localization access capabilities within New England trade and industrial frameworks.",
    pros: ["Highly dynamic localized New England trade networks", "Nominal $50 ongoing annual report fee matrix", "Clear electronic registry tracks"],
    cons: ["High initial organizational entry overhead", "Strict maintenance window boundaries (May 1st - June 1st)"],
    steps: ["Confirm exclusive Rhode Island naming metrics", "Appoint a Rhode Island Registered Agent", "File Articles of Organization online", "Secure federal identification codes"],
    complianceRequirements: ["File Annual Report online between May 1st and June 1st annually to prevent revocation"]
  },
  "South Carolina": {
    state: "South Carolina", filingFee: "$110", processingTime: "2-3 Days", taxRating: "Stable", annualReportFee: "$0",
    description: "South Carolina provides a highly pro-business atmosphere and requires zero ongoing state annual report fees.",
    pros: ["Zero recurring ongoing state annual report costs", "Deep pro-business regional structural support frameworks", "Rapid online integration models"],
    cons: ["Initial registration requires precise agent categorization", "Out-of-state income withholding regulations apply to certain niches"],
    steps: ["Search South Carolina SOS registry", "Appoint a South Carolina Registered Agent", "File Articles of Organization online", "Design operational governance guidelines"],
    complianceRequirements: ["Maintain correct statutory agent tracking logs; corporate state fees are zero"]
  },
  "South Dakota": {
    state: "South Dakota", filingFee: "$150", processingTime: "Instant", taxRating: "Elite (No State Income Tax)", annualReportFee: "$50",
    description: "An exceptional tier-one tax haven. South Dakota has no state income tax, corporate tax, or capital gains structures, offering powerful asset custody vectors.",
    pros: ["No state corporate, personal, or capital gains taxes", "Elite-level global wealth and asset shield protections", "Instantaneous automated online setup confirmations"],
    cons: ["Slightly higher initial entity organizational fee", "Mandatory tracking prior to the anniversary month first day"],
    steps: ["Verify South Dakota naming parameters online", "Secure a South Dakota Registered Agent", "Submit Articles of Organization instantly online", "Establish structural entity ledgers"],
    complianceRequirements: ["File Annual Report online before the first day of the formation anniversary month"]
  },
  "Tennessee": {
    state: "Tennessee", filingFee: "$300 Minimum", processingTime: "Instant", taxRating: "Favorable", annualReportFee: "$300 Minimum",
    description: "Tennessee delivers strong economic velocity, zero personal state income tax, and fully cloud-automated enterprise filing gateways.",
    pros: ["Zero personal state income tax brackets", "Dynamic economic growth velocity metrics", "Completely automated cloud filing interfaces"],
    cons: ["High $300 minimum initial filing overhead parameters", "Substantial $300 recurring annual report cost baseline"],
    steps: ["Query Tennessee corporate name indexing", "Appoint a Tennessee Registered Agent", "File Articles of Organization instantly online", "Acquire corporate infrastructure codes"],
    complianceRequirements: ["File Annual Report with the Secretary of State by the first day of the fourth month following the end of the fiscal year"]
  },
  "Texas": {
    state: "Texas", filingFee: "$300", processingTime: "3-5 Days", taxRating: "Elite (No State Income Tax)", annualReportFee: "$0 (Franchise Tax Report Required)",
    description: "The epic economic titan of modern industry. Texas offers zero state income tax and supreme global scale metrics for deep market penetration.",
    pros: ["Zero state corporate or personal income tax overhead", "Unmatched global brand scaling power and commercial prestige", "No ongoing state fees for filing standard annual report disclosures"],
    cons: ["Mandatory complex annual Franchise Tax reporting is required", "Higher initial organization entrance cost ($300)"],
    steps: ["Perform Texas SOSDirect name verification", "Appoint an official Texas Registered Agent", "File Certificate of Formation Form 205 online", "Register for Texas Franchise Tax tracking logs"],
    complianceRequirements: ["File Annual Franchise Tax Public Information Report online before May 15th annually to retain status"]
  },
  "Utah": {
    state: "Utah", filingFee: "$54", processingTime: "5-7 Days", taxRating: "Highly Pro-Business", annualReportFee: "$18",
    description: "Utah represents a booming financial-tech hub offering incredibly low state upkeep fees and modern digital frameworks.",
    pros: ["Very low $54 initial incorporation overhead metrics", "Nominal $18 ongoing annual state renewal parameters", "Thriving silicon-slope tech infrastructure corridors"],
    cons: ["Searchable public entity databases reduce privacy", "Strict anniversary date threshold frameworks apply"],
    steps: ["Search Utah OneStop business system", "Designate a Utah Registered Agent", "File Articles of Organization online", "Map internal accounting entity streams"],
    complianceRequirements: ["File Annual Renewal online before the exact anniversary date of original registration"]
  },
  "Vermont": {
    state: "Vermont", filingFee: "$125", processingTime: "2-3 Days", taxRating: "Stable", annualReportFee: "$35",
    description: "Vermont offers safe legal protection systems paired with exceptionally responsive localized judicial infrastructure.",
    pros: ["Highly responsive state judicial system frameworks", "Cheap $35 annual compliance monitoring tracking costs", "Safe localized asset protection codes"],
    cons: ["Extremely compressed 2.5-month post-fiscal filing window", "Limited global neo-banking integration channels natively"],
    steps: ["Query Vermont online corporate portal", "Appoint a Vermont Registered Agent", "File Articles of Organization online via SOS gateway", "Construct internal bylaws documentation"],
    complianceRequirements: ["File Annual Report online within 2.5 months following the close of the corporate fiscal cycle"]
  },
  "Virginia": {
    state: "Virginia", filingFee: "$100", processingTime: "Instant", taxRating: "Highly Predictable", annualReportFee: "$50",
    description: "Virginia combines intense technological core infrastructures with prestigious corporate legal systems near federal circles.",
    pros: ["Predictable, highly sophisticated corporate legal systems", "Instant online data processing deployment routes", "Moderate ongoing asset operational maintenance ($50)"],
    cons: ["Failure to pay exactly on the anniversary month final day causes dissolution", "Public record transparency guidelines apply to managers"],
    steps: ["Perform Virginia SCC entity search", "Designate a Virginia Registered Agent", "File Articles of Organization via SCC eFile portal", "Secure asset classification metrics"],
    complianceRequirements: ["Pay an Annual Registration Fee of $50 online before the final day of the formation anniversary month"]
  },
  "Washington": {
    state: "Washington", filingFee: "$200", processingTime: "2-3 Days", taxRating: "Highly Favorable (No State Income Tax)", annualReportFee: "$60",
    description: "Washington state features high technical enterprise densities paired with zero state personal or corporate income tax matrices.",
    pros: ["Zero personal or corporate state level income taxes", "Incredible concentration of technological and digital infrastructures", "Nominal $60 ongoing tracking update costs"],
    cons: ["State Business & Occupation (B&O) gross revenue taxes apply widely", "Higher up-front operational organization boundaries"],
    steps: ["Search Washington CCIM registry for naming rights", "Appoint a Washington Registered Agent", "Submit Articles of Organization online via CCIM", "Apply for state Business License integration"],
    complianceRequirements: ["File Annual Report online before the final calendar day of the formation anniversary month"]
  },
  "West Virginia": {
    state: "West Virginia", filingFee: "$100", processingTime: "5-7 Days", taxRating: "Stable", annualReportFee: "$25",
    description: "West Virginia offers low entry overhead parameters alongside centralized physical logistics and natural asset lanes.",
    pros: ["Central physical logistics and supply network access lines", "Inexpensive $25 state annual validation tracking fee", "Simple administrative filing codes"],
    cons: ["Slower manual processing queues via state registrars", "Strict licensing mandates for external cross-border services"],
    steps: ["Check West Virginia One Stop portal", "Secure a West Virginia Registered Agent", "File Articles of Organization online", "Map out local licensing compliance lines"],
    complianceRequirements: ["File Annual Report online with the Secretary of State before July 1st each year"]
  },
  "Wisconsin": {
    state: "Wisconsin", filingFee: "$130", processingTime: "Instant", taxRating: "Stable", annualReportFee: "$25",
    description: "Wisconsin delivers completely automated instantaneous online corporate filings and highly structured regional asset protection codes.",
    pros: ["Instantaneous online automated formation loops", "Low $25 ongoing annual validation report overhead", "Strong regional corporate asset separation protections"],
    cons: ["Filing parameters match rigid calendar quarters", "Strict verification pathways for out-of-state members"],
    steps: ["Query DFI Wisconsin name directory", "Appoint a Wisconsin Registered Agent", "File Articles of Organization instantly online via DFI Portal", "Configure governance records"],
    complianceRequirements: ["File Annual Report online during the calendar quarter matching the original formation date"]
  },
  "Wyoming": {
    state: "Wyoming", filingFee: "$100", processingTime: "Instant", taxRating: "Elite (No State Tax / King of Privacy)", annualReportFee: "$60",
    description: "The undisputed king of global ecommerce and privacy holding structures. Wyoming features zero state taxes, zero corporate taxes, ultra-low annual fees, and complete anonymity for international founders.",
    pros: ["Absolute 100% corporate privacy and total member anonymity", "Zero state corporate, personal, or franchise tax brackets", "The absolute premier choice for international e-commerce and digital holding assets"],
    cons: ["Requires mandatory annual report updates prior to anniversary first-day", "Increased tracking parameters due to high global popularity"],
    steps: ["Search Wyoming Secretary of State database", "Secure a certified Wyoming Registered Agent", "File Articles of Organization instantly online", "Establish federal tax ledger routing patterns"],
    complianceRequirements: ["File Annual Report online before the first day of the formation anniversary month to ensure seamless asset retention metrics"]
  }
};

const allStateNames = Object.keys(stateGuidesDatabase);

export default function S4HEL_Service_Hub() {
  const [selectedState, setSelectedState] = useState<string>("Wyoming");

  const currentGuide = stateGuidesDatabase[selectedState] || stateGuidesDatabase["Wyoming"];

  return (
    <div className="min-h-screen bg-[#020c1b] text-[#8892b0] pt-32 pb-20 px-6 relative overflow-hidden selection:bg-[#64FFDA]/30 font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#64FFDA]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* --- SECTION 1: COMPLIANCE INTEL HEADER --- */}
        <section className="text-center space-y-6">
          <div className="flex justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-[#64FFDA] fill-[#64FFDA]" />)}
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            S4<span className="text-[#64FFDA]">HEL</span> <span className="font-thin opacity-30 text-2xl md:text-5xl not-italic">EDUCATION HUB</span>
          </h1>

          <div className="max-w-3xl mx-auto bg-white/[0.01] border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl">
            <h2 className="text-[#64FFDA] text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2">
              <BookOpen size={14}/> REGULATORY & CORPORATE INTELLIGENCE ENGINE
            </h2>
            <p className="text-[#CCD6F6] text-sm md:text-base font-medium leading-relaxed italic opacity-90">
              S4HEL functions as a premier independent educational node for digital builders. 
              We translate cross-border friction into clean business architecture. Select any jurisdiction 
              below to access comprehensive legal blueprints and processing parameters audited for deployment.
            </p>
          </div>
        </section>

        {/* --- SECTION 2: JURISDICTION INTERACTIVE GRID --- */}
        <section className="space-y-6">
          <h2 className="text-center text-white font-black uppercase text-[10px] tracking-[0.5em] mb-4 italic flex items-center justify-center gap-2">
            <Rocket size={14} className="text-[#64FFDA]"/> Select United States Jurisdiction
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto bg-white/[0.01] border border-white/5 p-6 rounded-3xl backdrop-blur-md shadow-inner">
            {allStateNames.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 rounded-xl border text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                  selectedState === state 
                    ? 'bg-[#64FFDA] text-[#020c1b] border-[#64FFDA] shadow-[0_4px_15px_rgba(100,255,218,0.3)] scale-105' 
                    : 'bg-white/5 border-white/5 text-[#CCD6F6] hover:border-[#64FFDA]/30'
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: DEEP JURISDICTION DATA MANUAL (NO OUTBOUND LINKS) --- */}
        <div className="relative min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedState}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-[#112240]/20 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Area: Overview & Roadmap */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="border-b border-white/5 pb-6">
                    <span className="text-[#64FFDA] text-[9px] font-mono tracking-[0.4em] uppercase block mb-2">S4HEL COMPLIANCE DATABASE</span>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-none">
                      {currentGuide.state}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-[#8892b0] font-medium italic mt-4 max-w-3xl opacity-90">
                      {currentGuide.description}
                    </p>
                  </div>

                  {/* PROS & CONS ANALYTICS BLOCKS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Advantages */}
                    <div className="bg-[#0a192f]/30 border border-[#64FFDA]/10 p-6 rounded-2xl space-y-4">
                      <h4 className="text-[#64FFDA] text-xs font-black tracking-widest uppercase flex items-center gap-2 border-b border-white/5 pb-2">
                        <ThumbsUp size={14} /> CORE ADVANTAGES
                      </h4>
                      <ul className="space-y-2.5">
                        {currentGuide.pros.map((pro, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2 text-white/90 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] shrink-0 mt-1.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div className="bg-[#0a192f]/30 border border-red-500/10 p-6 rounded-2xl space-y-4">
                      <h4 className="text-red-400 text-xs font-black tracking-widest uppercase flex items-center gap-2 border-b border-white/5 pb-2">
                        <ThumbsDown size={14} /> LIABILITIES & RISKS
                      </h4>
                      <ul className="space-y-2.5">
                        {currentGuide.cons.map((con, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2 text-white/90 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Roadmap & Compliance Tracks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Roadmap */}
                    <div className="bg-[#0a192f]/50 border border-white/5 p-6 rounded-2xl space-y-4">
                      <h4 className="text-white text-xs font-black tracking-widest uppercase flex items-center gap-2 border-b border-white/5 pb-2">
                        <FileText size={14} className="text-[#64FFDA]" /> INCORPORATION ROADMAP
                      </h4>
                      <ol className="space-y-3">
                        {currentGuide.steps.map((step, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-3 leading-relaxed">
                            <span className="font-mono text-[#64FFDA] font-bold bg-[#64FFDA]/10 h-5 w-5 rounded-md flex items-center justify-center text-[10px] shrink-0 mt-0.5">{idx + 1}</span>
                            <span className="opacity-80">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Maintenance */}
                    <div className="bg-[#0a192f]/50 border border-white/5 p-6 rounded-2xl space-y-4">
                      <h4 className="text-white text-xs font-black tracking-widest uppercase flex items-center gap-2 border-b border-white/5 pb-2">
                        <CheckCircle2 size={14} className="text-[#64FFDA]" /> STATUTORY MAINTENANCE
                      </h4>
                      <ul className="space-y-3">
                        {currentGuide.complianceRequirements.map((req, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2 leading-relaxed">
                            <Info size={12} className="text-[#64FFDA] shrink-0 mt-0.5" />
                            <span className="opacity-80">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Area: Metric Data Box (Pure Information Layout) */}
                <div className="lg:col-span-4 bg-[#0a192f]/60 border border-white/5 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full space-y-8">
                  <div className="space-y-5">
                    <h4 className="text-white font-black text-[10px] tracking-widest uppercase border-b border-white/5 pb-3 flex items-center gap-2">
                      <Landmark size={12} className="text-[#64FFDA]" /> FINANCIAL METRICS
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                      <div>
                        <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase block">State Filing Fee</span>
                        <span className="text-lg font-black text-white tracking-tight">{currentGuide.filingFee}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase block">Processing Time</span>
                        <span className="text-xs font-bold text-[#64FFDA] block mt-1">{currentGuide.processingTime}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-1">
                      <div>
                        <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase block">Tax Infrastructure</span>
                        <span className="text-xs font-bold text-white block mt-0.5">{currentGuide.taxRating}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-wider opacity-40 uppercase block">Annual State Fee</span>
                        <span className="text-xs font-bold text-white block mt-0.5">{currentGuide.annualReportFee}</span>
                      </div>
                    </div>
                  </div>

                  {/* System Audit Information notice block */}
                  <div className="bg-white/[0.005] border border-white/5 p-4 rounded-xl flex gap-3">
                    <HelpCircle size={16} className="text-[#8892b0]/40 shrink-0 mt-0.5" />
                    <p className="text-[10px] italic leading-normal text-[#8892b0]/60">
                      S4HEL Independent Index: This segment tracks corporate asset volatility and legislative criteria mapped for out-of-state managers.
                    </p>
                  </div>

                  {/* Non-Clickable Core Identity Badge */}
                  <div className="py-4 border border-[#64FFDA]/20 bg-[#64FFDA]/5 text-center text-[#64FFDA] rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest">
                    {currentGuide.state} COMPLIANCE PARSED
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        body { background-color: #020c1b; margin: 0; padding: 0; }
        .stars-background {
          position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.08;
          background-image: radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 100px 100px, #64FFDA, rgba(0,0,0,0));
          background-size: 200px 200px;
        }
      `}</style>
      <div className="stars-background" />
    </div>
  );
}