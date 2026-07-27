"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/common/PageBanner";
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiAward,
  FiUserCheck,
  FiCalendar,
  FiClock,
  FiSearch,
  FiChevronDown,
  FiDownload,
  FiHelpCircle,
  FiInfo,
  FiArrowRight,
  FiDollarSign,
  FiAlertCircle,
  FiUsers,
  FiMapPin,
  FiCheck
} from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineDocumentCheck, HiOutlineBuildingOffice2, HiOutlineAcademicCap } from "react-icons/hi2";

// Overview Stats / Highlights
const highlightCards = [
  {
    icon: FiShield,
    title: "Official MCD Affiliation",
    desc: "Recognized participation in Delhi Municipal Corporation leagues & sanctioned tournaments.",
    accent: "from-purple-500/20 to-indigo-500/20 text-purple-600",
    border: "border-purple-200"
  },
  {
    icon: FiClock,
    title: "Quick 3-5 Day Verification",
    desc: "Streamlined digital document verification and External Supervisor audit process.",
    accent: "from-blue-500/20 to-cyan-500/20 text-blue-600",
    border: "border-blue-200"
  },
  {
    icon: FiUserCheck,
    title: "Age-Audit Verified Rosters",
    desc: "Centralized digital player cards preventing age fraud and ensuring fair competition.",
    accent: "from-emerald-500/20 to-teal-500/20 text-emerald-600",
    border: "border-emerald-200"
  },
  {
    icon: FiAward,
    title: "Facility & Infrastructure Access",
    desc: "Priority access to MCD sports complexes, certified grounds, and training grants.",
    accent: "from-amber-500/20 to-orange-500/20 text-amber-600",
    border: "border-amber-200"
  }
];

// Tab Navigation Config
const tabs = [
  { id: "eligibility", label: "Eligibility & Criteria", icon: FiCheckCircle },
  { id: "process", label: "Step-by-Step Guide", icon: FiFileText },
  { id: "documents", label: "Required Documents", icon: HiOutlineDocumentCheck },
  { id: "fees", label: "Fee Structure", icon: FiDollarSign },
  { id: "governance", label: "Rules & Fair Play", icon: FiShield }
];

// Step-by-Step Workflow Data (Aligned with Online Portal)
const workflowSteps = [
  {
    step: "01",
    title: "Official Club Registration (Step 1)",
    subtitle: "Submit Basic Club & Contact Information",
    duration: "5 Mins",
    details: [
      "Provide Club Name, Address / School Name, and Representative Contact Name.",
      "Select your MCD Zone (Central Delhi, South Delhi, North Delhi, East Delhi, West Delhi, Karol Bagh, Rohini, or Shahdara Zone).",
      "Enter primary contact phone number and official club registration email address."
    ],
    status: "Step 1"
  },
  {
    step: "02",
    title: "Team Division Selection",
    subtitle: "Choose Participating Squad Categories",
    duration: "2 Mins",
    details: [
      "Select participating team categories: U-11 Boys, U-11 Girls, U-9 Boys, and/or U-9 Girls.",
      "Clubs must select at least one team category to proceed.",
      "Clubs may field multiple squads across all 4 eligible age divisions."
    ],
    status: "Step 1"
  },
  {
    step: "03",
    title: "Automated Email Link Dispatch",
    subtitle: "Student Data Submission Link",
    duration: "Instant",
    details: [
      "Upon submitting Step 1, an automated email is dispatched to your registered club email address.",
      "The email contains a secure, dedicated Student Athlete Data Form link for your club.",
      "Authorized club representatives can open this link to enter student roster details."
    ],
    status: "System Automated"
  },
  {
    step: "04",
    title: "Student Athlete Roster Entry (Step 2)",
    subtitle: "Submit Player Credentials & Positions",
    duration: "15 Mins",
    details: [
      "Enter student full name, Date of Birth (DOB), and Class & Roll Number (e.g. Class 5B Roll 14).",
      "Assign selected team category (U-11 Boys, U-11 Girls, U-9 Boys, U-9 Girls).",
      "Specify playing position (Forward / Striker, Midfielder, Defender, Goalkeeper) & Parent/Guardian Phone."
    ],
    status: "Step 2"
  },
  {
    step: "05",
    title: "Age Proof & School ID Audit",
    subtitle: "Digital Document Cross-Verification",
    duration: "1-2 Days",
    details: [
      "Upload birth certificate, Aadhaar card copy, and school identification card per student.",
      "MCD External Club Supervisors (ECS) audit player age against Municipal Birth Registry records.",
      "Strict verification to ensure zero age fraud across U-9 and U-11 age categories."
    ],
    status: "Verification"
  },
  {
    step: "06",
    title: "GMS Digital Player Card & License",
    subtitle: "Final Accreditation & Squad Approval",
    duration: "3-5 Days",
    details: [
      "System issues QR-verified GMS Digital Player IDs for all verified athletes.",
      "Club receives Official MCD Mini League Registration Certificate & League Entry Pass.",
      "Squad rosters unlocked for match fixture scheduling and zonal tournament play."
    ],
    status: "Final Stage"
  }
];

// Document Checklist Items
const documentList = [
  {
    id: "doc-1",
    title: "Club Registration Certificate / Incorporation Proof",
    category: "Legal Proof",
    mandatory: true,
    description: "Certificate of Registration under Societies Registration Act 1860, Trust Act, or School Affiliation Letter.",
    fileFormat: "PDF / JPG (Max 5MB)"
  },
  {
    id: "doc-2",
    title: "Memorandum of Association (MoA) & Bye-Laws",
    category: "Legal Proof",
    mandatory: true,
    description: "Official copy of club rules, aims, and executive committee structure.",
    fileFormat: "PDF (Max 10MB)"
  },
  {
    id: "doc-3",
    title: "Office Bearers' Identity & Address Proof",
    category: "Identity Proof",
    mandatory: true,
    description: "Aadhaar Card / Voter ID / Passport of President & General Secretary.",
    fileFormat: "PDF / JPG (Max 5MB)"
  },
  {
    id: "doc-4",
    title: "Training Venue NOC / Playground Access Letter",
    category: "Infrastructure",
    mandatory: true,
    description: "NOC from MCD sports department, school authority, or private ground owner.",
    fileFormat: "PDF (Max 5MB)"
  },
  {
    id: "doc-5",
    title: "Coaching Staff Qualification Certificates",
    category: "Technical Staff",
    mandatory: true,
    description: "Certificates from NIS, National Sports Federations (AIFF, BCCI, BWF, SAI, etc.).",
    fileFormat: "PDF (Max 5MB)"
  },
  {
    id: "doc-6",
    title: "Player Identity & Age Verification Proofs",
    category: "Player Roster",
    mandatory: true,
    description: "Digital copies of Aadhaar Card, Municipal Birth Certificate, and School ID for all squad members.",
    fileFormat: "ZIP / PDF Bundle"
  },
  {
    id: "doc-7",
    title: "Club Bank Account & Cancelled Cheque",
    category: "Financial",
    mandatory: true,
    description: "Cancelled cheque or bank passbook copy in the name of the registered club/society.",
    fileFormat: "PDF / JPG (Max 2MB)"
  },
  {
    id: "doc-8",
    title: "Child Safeguarding & Medical Fitness Undertaking",
    category: "Compliance",
    mandatory: true,
    description: "Signed declaration agreeing to MCD child safety protocols and medical emergency standards.",
    fileFormat: "PDF (Max 2MB)"
  }
];

// Fee Structure Data
const feeTiers = [
  {
    title: "MCD Primary & Govt Schools",
    subtitle: "Institutional School Teams",
    fee: "FREE / 100% Subsidized",
    period: "Annual Affiliation",
    badge: "Government Sponsored",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    features: [
      "Full fee waiver for all MCD primary and municipal schools",
      "Free match kits and equipment support",
      "Unlimited player registrations across all categories",
      "Direct entry into MCD Inter-Zone School Tournaments",
      "Free access to MCD zonal grounds & coaching clinics"
    ],
    highlight: false
  },
  {
    title: "Community Youth & Sports Clubs",
    subtitle: "Registered Non-Profit Clubs",
    fee: "₹2,500",
    period: "Per Annum + Tax",
    badge: "Most Popular",
    badgeColor: "bg-purple text-white border-purple",
    features: [
      "Affiliation for Under-9 and Under-11 categories (Girls & Boys teams)",
      "Official MCD League accreditation badge & digital portal",
      "Access to centralized player transfer & registration system",
      "Priority booking for MCD sports complexes at subsidized rates",
      "Eligibility for MCD Youth Sports Development Grants"
    ],
    highlight: true
  },
  {
    title: "Commercial Academies & Sports Entities",
    subtitle: "Private Sports Training Centers",
    fee: "₹7,500",
    period: "Per Annum + Tax",
    badge: "Commercial / Private",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    features: [
      "Affiliation across all Under-9 & Under-11 competitive age categories",
      "Commercial league participation and sponsorship opportunities",
      "Advanced player analytics and performance tracking access",
      "Multi-venue ground booking privileges",
      "Dedicated account supervisor for fast-track verification"
    ],
    highlight: false
  }
];

// FAQs List
const faqItems = [
  {
    q: "How does the online club registration process work?",
    a: "Registration is a 2-step process. In Step 1, you submit your Club Name, MCD Zone, Address/School Name, Representative Contact, Email, and select team divisions (U-11 Boys, U-11 Girls, U-9 Boys, U-9 Girls). Upon submission, an automated Student Athlete Form link is sent to your email for Step 2 player roster entry.",
    category: "General"
  },
  {
    q: "Which team categories can our club enter?",
    a: "Clubs can field teams in 4 sanctioned categories: Under-11 Boys (U-11 Boys), Under-11 Girls (U-11 Girls), Under-9 Boys (U-9 Boys), and Under-9 Girls (U-9 Girls). You must select at least one category during Step 1.",
    category: "General"
  },
  {
    q: "Which MCD Zones are eligible to register?",
    a: "Clubs operating across all 8 MCD Zones are eligible: Central Delhi Zone, South Delhi Zone, North Delhi Zone, East Delhi Zone, West Delhi Zone, Karol Bagh Zone, Rohini Zone, and Shahdara Zone.",
    category: "General"
  },
  {
    q: "What student information is required during athlete roster entry?",
    a: "For each student athlete, you will provide: Full Name, Date of Birth (DOB), Class & Roll Number (e.g. Class 5B Roll 14), Selected Team Category, Playing Position (Forward/Striker, Midfielder, Defender, Goalkeeper), and Parent/Guardian Phone Number.",
    category: "Player Roster"
  },
  {
    q: "What if our club does not own a private sports ground?",
    a: "Ownership of a private ground is not mandatory. You can submit a No Objection Certificate (NOC) or facility agreement letter with an MCD sports facility, DDA ground, school playground, or private venue where your club regularly conducts training.",
    category: "Infrastructure"
  },
  {
    q: "What is the penalty for age fraud or submitting forged documents?",
    a: "MCD maintains a zero-tolerance policy. Any club found submitting altered birth certificates or fraudulent identity documents will face immediate cancellation of registration, a minimum 2-year suspension from all MCD competitions, and legal referral under relevant statutory laws.",
    category: "Compliance"
  },
  {
    q: "Can a player be registered under more than one club during a single season?",
    a: "No. A player can only be registered under one club roster per sports discipline per season. Dual registration without an official digital transfer certificate issued via the portal will invalidate the player's eligibility.",
    category: "Player Roster"
  },
  {
    q: "How long does document verification take?",
    a: "Digital verification typically takes 3 to 5 business days after complete document submission. If any document requires clarification, the portal will notify the Club Secretary via SMS and email.",
    category: "Verification"
  }
];

// Downloads List
const downloadableForms = [
  {
    title: "MCD Club Registration Application Form 2026",
    size: "PDF • 1.2 MB",
    description: "Printable offline registration application for initial documentation.",
    icon: FiFileText
  },
  {
    title: "Ground Utilization NOC Template",
    size: "DOCX • 450 KB",
    description: "Standard venue permission letter format for ground owners and schools.",
    icon: FiMapPin
  },
  {
    title: "Player Medical & Age Verification Undertaking",
    size: "PDF • 850 KB",
    description: "Mandatory health declaration form signed by parents and club medical officer.",
    icon: FiShield
  },
  {
    title: "Executive Committee Declaration Affidavit",
    size: "PDF • 600 KB",
    description: "Affidavit template for club office bearers and governing body details.",
    icon: FiUserCheck
  }
];

export default function RegistrationGuidelines() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState("All");

  // Toggle document checklist state
  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercent = Math.round((checkedCount / documentList.length) * 100);

  // Filtered FAQs
  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory = faqCategory === "All" || item.category === faqCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full bg-[#F9FAFB] min-h-screen text-slate-800 font-dm-sans">
      {/* Banner */}
      <PageBanner
        title="Club Registration Guidelines"
        watermarkText="GUIDELINES"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "CLUBS", href: "/about/listing-of-sports-and-youth-clubs" },
          { label: "REGISTRATION GUIDELINES" }
        ]}
      />

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider">
              <HiOutlineSparkles className="w-4 h-4 text-purple" />
              MCD Sports & Youth Development Directorate
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-satoshi leading-tight">
              Official Guidelines for Registering Sports Clubs & Associations
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Welcome to the official MCD Mini League registration portal guidelines. This document outlines the mandatory eligibility criteria, document requirements, registration workflow, and operational standards required for sports clubs, academies, and school teams to obtain official affiliation with the Municipal Corporation of Delhi sports ecosystem.
            </p>
          </div>

          {/* Key Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 sm:p-5 rounded-2xl bg-slate-50/80 border ${card.border} space-y-2 relative overflow-hidden group`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-navy font-satoshi text-base">{card.title}</h3>
                  <p className="text-xs text-gray-600 leading-normal">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tab Navigation Section */}
        <section className="space-y-8">
          {/* Navigation Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-satoshi font-bold text-sm sm:text-base whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-navy text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/60"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-amber-400" : "text-gray-400"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {/* TAB 1: ELIGIBILITY & CRITERIA */}
              {activeTab === "eligibility" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Entity Types */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple">
                          <HiOutlineBuildingOffice2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-satoshi text-navy">Eligible Entity Categories</h3>
                          <p className="text-xs text-gray-500">Who can apply for MCD Club Affiliation</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
                          <div className="flex items-center gap-2 text-purple font-bold text-sm">
                            <FiCheckCircle className="w-4 h-4 shrink-0" />
                            Registered Sports Societies
                          </div>
                          <p className="text-xs text-gray-600">
                            Registered under the Societies Registration Act, XXI of 1860, with sports promotion as a primary objective.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                            <HiOutlineAcademicCap className="w-4 h-4 shrink-0" />
                            MCD & Government Schools
                          </div>
                          <p className="text-xs text-gray-600">
                            All municipal primary schools, Delhi government schools, and recognized private institutions.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-2">
                          <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                            <FiAward className="w-4 h-4 shrink-0" />
                            Charitable Sports Trusts
                          </div>
                          <p className="text-xs text-gray-600">
                            Public charitable trusts dedicated to grassroots sports development, athlete welfare, and coaching.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                            <FiUsers className="w-4 h-4 shrink-0" />
                            Recognized Private Academies
                          </div>
                          <p className="text-xs text-gray-600">
                            Private sports academies operating with certified coaches, dedicated ground access, and GST registration.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Minimum Infrastructure & Technical Staff Standards */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
                      <h3 className="text-xl font-bold font-satoshi text-navy flex items-center gap-2">
                        <FiMapPin className="text-purple" />
                        Infrastructure & Technical Requirements
                      </h3>

                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                          <div>
                            <strong className="text-gray-900 font-semibold">Training Ground Access:</strong> Must possess own ground or a valid written NOC/lease agreement for at least 1 year with a recognized sports complex or school ground in Delhi-NCR.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                          <div>
                            <strong className="text-gray-900 font-semibold">Certified Head Coach:</strong> Minimum NIS diploma holder, AIFF/BWF/BCCI certified coach, or National player certification per discipline.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                          <div>
                            <strong className="text-gray-900 font-semibold">Safety & First-Aid Kit:</strong> Certified sports medical kit, trained first-aider on field during all official sessions, and emergency vehicle contact.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                          <div>
                            <strong className="text-gray-900 font-semibold">Minimum Athlete Roster:</strong> Minimum 12 verified players per age division; maximum 25 players per squad card.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Age Categories Card */}
                  <div className="bg-gradient-to-br from-navy via-navyDark to-[#1f0d3d] text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase">
                        <FiCalendar className="w-4 h-4" />
                        Age Divisions 2026
                      </div>
                      
                      <h3 className="text-2xl font-bold font-satoshi text-white">
                        Sanctioned Age Groups & Categories
                      </h3>

                      <p className="text-gray-300 text-xs leading-relaxed">
                        Player eligibility is strictly restricted to Under-9 and Under-11 age categories. Age cutoff date is 31st December of the competition year.
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-sm text-white">Under-9 (Girls &amp; Boys)</div>
                            <div className="text-[11px] text-gray-300">Born on or after Jan 1, 2017</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-navy font-extrabold text-xs">U-9</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-sm text-white">Under-11 (Girls &amp; Boys)</div>
                            <div className="text-[11px] text-gray-300">Born on or after Jan 1, 2015</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-purple text-white font-extrabold text-xs">U-11</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-amber-200 text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-amber-300">
                        <FiAlertCircle className="w-4 h-4 shrink-0" />
                        Strict Age Limit Notice
                      </div>
                      Only players in Under-9 and Under-11 divisions are eligible. All registered players undergo mandatory age audit by MCD External Supervisors.
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: STEP-BY-STEP WORKFLOW */}
              {activeTab === "process" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-sm space-y-8">
                  <div className="max-w-2xl space-y-2">
                    <h3 className="text-2xl font-bold font-satoshi text-navy">7-Step Online Registration Process</h3>
                    <p className="text-sm text-gray-600">
                      Follow these sequential steps on the portal to complete your club registration smoothly.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="relative border-l-2 border-purple/20 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
                    {workflowSteps.map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Circle Bullet */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-navy text-white font-extrabold text-xs flex items-center justify-center ring-4 ring-white shadow-md group-hover:bg-purple transition-colors">
                          {item.step}
                        </div>

                        {/* Card */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-gray-200/70 hover:border-purple/40 hover:shadow-md transition-all space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <span className="text-xs font-bold text-purple uppercase tracking-wider">{item.status}</span>
                              <h4 className="text-lg font-bold text-navy font-satoshi">{item.title}</h4>
                            </div>
                            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600">
                              <FiClock className="w-3.5 h-3.5 text-purple" />
                              {item.duration}
                            </div>
                          </div>

                          <p className="text-xs font-medium text-gray-500">{item.subtitle}</p>

                          <ul className="space-y-1.5 text-xs text-gray-600 pt-1">
                            {item.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <span className="text-purple font-bold">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Need help during registration? Contact our helpdesk at <strong className="text-navy">support@mcdleague.in</strong>
                    </p>
                    <Link
                      href="/registration"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple text-white font-satoshi font-bold text-sm shadow-md hover:bg-secondary transition-all"
                    >
                      Proceed to Registration Portal
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* TAB 3: REQUIRED DOCUMENTS CHECKLIST */}
              {activeTab === "documents" && (
                <div className="space-y-6">
                  {/* Readiness Progress Header */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold font-satoshi text-navy">Interactive Document Preparation Checklist</h3>
                        <p className="text-xs text-gray-500">
                          Tick off the documents you have ready to calculate your registration readiness score.
                        </p>
                      </div>

                      <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-gray-200">
                        <div className="text-right">
                          <div className="text-xs text-gray-500 font-semibold">Readiness Score</div>
                          <div className="text-lg font-extrabold text-purple font-satoshi">{readinessPercent}% Ready</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center text-purple font-extrabold text-sm">
                          {checkedCount}/{documentList.length}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-purple to-indigo-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${readinessPercent}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Checklist Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentList.map((doc) => {
                      const isChecked = !!checkedDocs[doc.id];
                      return (
                        <div
                          key={doc.id}
                          onClick={() => toggleDoc(doc.id)}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer select-none space-y-3 ${
                            isChecked
                              ? "bg-purple-50/40 border-purple-300 shadow-sm"
                              : "bg-white border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                              <button
                                type="button"
                                className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                                  isChecked ? "bg-purple text-white" : "border-2 border-gray-300 bg-white"
                                }`}
                              >
                                {isChecked && <FiCheck className="w-4 h-4 stroke-[3]" />}
                              </button>
                              <div>
                                <h4 className={`font-bold text-sm font-satoshi ${isChecked ? "text-purple" : "text-navy"}`}>
                                  {doc.title}
                                </h4>
                                <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                                  <span className="px-2 py-0.5 rounded bg-gray-100 font-semibold">{doc.category}</span>
                                  <span>{doc.fileFormat}</span>
                                </div>
                              </div>
                            </div>

                            {doc.mandatory && (
                              <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold shrink-0">
                                Mandatory
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-gray-600 pl-9 leading-relaxed">{doc.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: FEE STRUCTURE */}
              {activeTab === "fees" && (
                <div className="space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h3 className="text-2xl font-bold font-satoshi text-navy">Affiliation Fee Breakdown 2026</h3>
                    <p className="text-sm text-gray-600">
                      Transparent fee tiers designed for public school participation, grassroots youth clubs, and professional sports academies.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {feeTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`bg-white rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative shadow-sm transition-all ${
                          tier.highlight
                            ? "border-purple ring-2 ring-purple/20 shadow-md scale-[1.02]"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="space-y-6">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${tier.badgeColor}`}>
                              {tier.badge}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold font-satoshi text-navy">{tier.title}</h4>
                            <p className="text-xs text-gray-500">{tier.subtitle}</p>
                          </div>

                          <div className="py-3 border-y border-gray-100">
                            <div className="text-3xl font-extrabold text-navy font-satoshi">{tier.fee}</div>
                            <div className="text-xs text-gray-500 font-medium">{tier.period}</div>
                          </div>

                          <ul className="space-y-2.5 text-xs text-gray-600">
                            {tier.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <FiCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6">
                          <Link
                            href="/registration"
                            className={`w-full py-3 rounded-xl font-satoshi font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                              tier.highlight
                                ? "bg-purple text-white hover:bg-secondary shadow-md"
                                : "bg-slate-100 text-navy hover:bg-slate-200"
                            }`}
                          >
                            Apply Under This Tier
                            <FiArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 text-xs text-amber-900">
                    <FiInfo className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Fee Waiver Policy:</strong> MCD primary school teams receive 100% waiver on affiliation and entry fees upon endorsement by the Zonal Education Officer (ZEO).
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: RULES & GOVERNANCE */}
              {activeTab === "governance" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-sm space-y-8">
                  <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                      <FiShield className="w-4 h-4" />
                      MCD Fair Play & Governance Charter
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-satoshi text-navy">
                      Code of Conduct &amp; Compliance Protocols
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All affiliated clubs are bound by MCD sports governance regulations to protect player welfare, enforce sportsmanship, and ensure absolute operational integrity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        🚫
                      </div>
                      <h4 className="font-bold text-navy font-satoshi text-base">Zero-Tolerance Age Fraud Policy</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Random MRI bone density audits and physical document cross-verification conducted by External Club Supervisors (ECS). Offending clubs face immediate disqualification and a 2-year league ban.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple flex items-center justify-center font-bold">
                        🛡️
                      </div>
                      <h4 className="font-bold text-navy font-satoshi text-base">Child Protection &amp; Safety Policy</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Clubs must appoint a designated Child Protection Officer (CPO). All coaches and technical staff undergo background checks before pitch-side accreditation is granted.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        ⚖️
                      </div>
                      <h4 className="font-bold text-navy font-satoshi text-base">Disciplinary &amp; Protest Protocol</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Match protests must be lodged formally within 4 hours of match completion via the portal alongside the prescribed protest security deposit fee.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        🤝
                      </div>
                      <h4 className="font-bold text-navy font-satoshi text-base">Referee &amp; Official Respect Code</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Verbal or physical abuse directed towards referees, line officials, or event staff results in instant team forfeiture and financial sanctions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Downloadable Documents & Templates Section */}
        <section className="bg-gradient-to-r from-navy via-navyDark to-[#192847] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-lg space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Official Templates &amp; Downloads</div>
              <h3 className="text-2xl font-bold font-satoshi text-white mt-1">Download Guidelines Dossier</h3>
            </div>
            <span className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              Updated for Season 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {downloadableForms.map((item, idx) => {
              const FormIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:bg-white/10 transition-all group"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      <FormIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-white font-satoshi line-clamp-2">{item.title}</h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="text-gray-400">{item.size}</span>
                    <button
                      type="button"
                      onClick={() => alert(`Downloading ${item.title}...`)}
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <FiDownload className="w-3.5 h-3.5" />
                      Get File
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Searchable FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple uppercase tracking-wider">
                <FiHelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h3 className="text-2xl font-bold font-satoshi text-navy mt-1">Club Registration FAQ</h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search guidelines, fees, docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/10"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {["All", "General", "Infrastructure", "Player Roster", "Verification", "Compliance"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  faqCategory === cat
                    ? "bg-purple text-white"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left bg-slate-50/70 hover:bg-slate-100/80 flex items-center justify-between gap-4 font-satoshi font-bold text-sm sm:text-base text-navy transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-purple/10 text-purple text-xs flex items-center justify-center shrink-0">
                          Q
                        </span>
                        {faq.q}
                      </span>
                      <FiChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-purple" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-5 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500 text-sm">
                No matching guidelines found for &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        </section>

        {/* Bottom Call To Action Banner */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#07192e] via-[#3F2271] to-[#07192e] p-8 sm:p-12 text-white overflow-hidden shadow-xl text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-satoshi text-white">
              Ready to Register Your Club?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Start your online application today and join Delhi&apos;s largest grassroots sports league. Digital registration takes less than 15 minutes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <Link
              href="/registration"
              className="px-8 py-3.5 rounded-full bg-white text-navy font-satoshi font-extrabold text-sm sm:text-base shadow-lg hover:bg-amber-400 hover:text-navy transition-all duration-200 flex items-center gap-2"
            >
              Start Club Registration
              <FiArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/20 font-satoshi font-bold text-sm sm:text-base hover:bg-white/20 transition-all"
            >
              Contact Support Team
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
