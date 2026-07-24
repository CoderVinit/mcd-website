"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { colors } from "@/theme/colors";
import {
  Copy01Icon,
  Tick01Icon,
  Award05Icon,
  Award01Icon,
  ArrowRight02Icon,
  Notification01Icon,
  Agreement02Icon,
  ChartAnalysisIcon,
  Shield01Icon,
  Building02Icon,
  UserGroup02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

/* ── MML Key Stats ── */
const stats = [
  { label: "Community Clubs", value: "80", icon: UserGroup02Icon },
  { label: "Participating Teams", value: "320", icon: Award05Icon },
  { label: "Verified Athletes", value: "5,100+", icon: Award01Icon },
  { label: "Delhi Stadium Venues", value: "8", icon: Building02Icon },
];

/* ── Official MML Sponsors & Partners ── */
const officialPartners = [
  {
    category: "Title & Organizing Body",
    name: "Municipal Corporation of Delhi (MCD)",
    description: "Lead municipal authority organizing Delhi's largest grassroots primary school football league.",
    role: "Host & Principal Organizer",
  },
  {
    category: "Implementation Partner",
    name: "SITDS Delhi",
    description: "Sports Infrastructure & Talent Development Society managing ground logistics, refs, and player GMS verification.",
    role: "League Operations & GMS",
  },
  {
    category: "Equipment & Kit Partner",
    name: "Decathlon Sports India",
    description: "Providing certified training gear, footballs, bibs, and player kits for 320 participating teams.",
    role: "Official Apparel & Kit",
  },
  {
    category: "Official Hydration Partner",
    name: "Powerade India",
    description: "Ensuring electrolyte hydration and player recovery stations at all stadium match venues.",
    role: "Hydration & Recovery",
  },
  {
    category: "Governing Technical Body",
    name: "AIFF Grassroots & Football Delhi",
    description: "Technical oversight, certified match referees, and talent scouting pathways for state excellence.",
    role: "Referees & Technical Audit",
  },
  {
    category: "Official Match Ball",
    name: "Nivia Sports",
    description: "Official matchday football supplier designed for optimum performance across Delhi pitches.",
    role: "Match Ball Partner",
  },
];

/* ── Why Partner Cards ── */
const whyPartnerCards = [
  {
    icon: ChartAnalysisIcon,
    title: "Unmatched Delhi Reach",
    description: "Direct access to 320+ primary schools, 5,100+ young athletes, and over 50,000+ parents and spectators across Delhi-NCR.",
    color: "#8A38F5",
    bgColor: "rgba(138, 56, 245, 0.08)",
  },
  {
    icon: Shield01Icon,
    title: "Institutional & CSR Impact",
    description: "Align your brand with high-impact municipal sports development, youth health, and grassroots talent empowerment.",
    color: "#22C55E",
    bgColor: "rgba(34, 197, 94, 0.08)",
  },
  {
    icon: Award05Icon,
    title: "High-Visibility Branding",
    description: "Prominent logo placement on stadium A-boards, digital matchday streams, jersey sleeves, and media backdrops.",
    color: "#F58220",
    bgColor: "rgba(245, 130, 32, 0.08)",
  },
];

export default function PartnerSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("partnerships@mcd.gov.in");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = "partnerships@mcd.gov.in";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full bg-slate-50/50 py-12 md:py-16 lg:py-[80px] px-4 sm:px-8 lg:px-[64px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">

        {/* ── Notice Bar ── */}
        <div className="w-full bg-orange/10 border border-orange/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange text-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Notification01Icon} size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-satoshi font-bold text-sm sm:text-base text-navy">
                MCD Mini League Sponsorship Desk
              </h3>
              <p className="font-dm-sans text-xs sm:text-sm text-gray-600">
                Corporate sponsorship opportunities for Season 2026 are open. Contact our secretariat at{" "}
                <span className="font-bold text-navy">partnerships@mcd.gov.in</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-gray-200 rounded-xl text-xs font-bold font-dm-sans text-navy cursor-pointer transition-colors shrink-0"
          >
            <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} size={15} color={copied ? colors.green : colors.gray700} />
            <span>{copied ? "Copied Email" : "Copy Email"}</span>
          </button>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow"
            >
              <span className="font-dm-sans font-bold text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple shrink-0">
                  <HugeiconsIcon icon={stat.icon} size={24} strokeWidth={2} />
                </div>
                <span className="font-satoshi font-extrabold text-2xl sm:text-3xl text-navy">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={Award01Icon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              OFFICIAL PARTNER NETWORK
            </span>
          </div>
          <h2 className="font-satoshi font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Official Partners &amp; Sponsors
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-gray-600 leading-relaxed">
            Collaborating with leading public institutions, sports brands, and equipment partners to power grassroots football excellence across Delhi.
          </p>
        </div>

        {/* ── Official Partners Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officialPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col justify-between gap-6 p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-3.5">
                <div className="self-start px-3 py-1 rounded-full bg-purple-50 text-purple font-dm-sans font-bold text-xs">
                  {partner.category}
                </div>
                <h3 className="font-satoshi font-extrabold text-xl sm:text-2xl text-navy group-hover:text-purple transition-colors">
                  {partner.name}
                </h3>
                <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100 font-dm-sans text-xs font-bold text-gray-500">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} color="#22C55E" />
                <span>Role: {partner.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Why Partner Section ── */}
        <div className="flex flex-col gap-8 p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-dm-sans text-xs font-bold text-purple uppercase tracking-wider">
                COMMUNITY &amp; BRAND VALUE
              </span>
              <h2 className="font-satoshi font-extrabold text-2xl sm:text-3xl text-navy">
                Why Partner with MCD Mini League?
              </h2>
            </div>
            <a
              href="mailto:partnerships@mcd.gov.in"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white hover:bg-navy-dark font-satoshi font-bold text-sm rounded-xl transition-all"
            >
              <span>Download Sponsor Deck</span>
              <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPartnerCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50/70 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <HugeiconsIcon icon={card.icon} size={24} color={card.color} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-satoshi font-extrabold text-lg text-navy">
                    {card.title}
                  </h3>
                  <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Call To Action Banner ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#753FC9] to-[#8A38F5] text-white shadow-xl">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-satoshi font-extrabold text-3xl sm:text-4xl text-white">
              Interested in Becoming an Official Sponsor?
            </h2>
            <p className="font-dm-sans text-sm sm:text-base text-white/90 leading-relaxed">
              Join hands with Municipal Corporation of Delhi (MCD) to empower youth football talent, upgrade school pitches, and build Delhi&apos;s football future.
            </p>
          </div>

          <a
            href="mailto:partnerships@mcd.gov.in"
            className="px-8 py-4 bg-orange hover:bg-orange/90 text-white font-satoshi font-extrabold text-base rounded-2xl transition-all shadow-lg shrink-0"
          >
            Connect with Partner Desk →
          </a>
        </div>

      </div>
    </section>
  );
}
