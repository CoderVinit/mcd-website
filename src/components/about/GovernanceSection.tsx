"use client";

import React from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, Structure01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

const governancePrinciples = [
  {
    title: "Transparency",
    desc: "Clear regulations, competition rules, and operational processes."
  },
  {
    title: "Fair Play",
    desc: "Equal opportunities and unbiased competition management."
  },
  {
    title: "Child Safety",
    desc: "Safe sporting environments and participant welfare protocols."
  },
  {
    title: "Inclusivity",
    desc: "Accessible participation opportunities for boys and girls across Delhi."
  },
  {
    title: "Integrity",
    desc: "Ethical governance and responsible league administration."
  },
  {
    title: "Technology-Driven Operations",
    desc: "Digital registration, fixture management, performance tracking, and reporting systems."
  }
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="w-full bg-slate-50 py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={Shield01Icon} size={14} className="text-orange" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              4. GOVERNANCE FRAMEWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-navy-dark leading-tight font-satoshi tracking-tight">
            A Transparent &amp; Professional League Structure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-dm-sans leading-relaxed">
            The MCD Mini League operates under a robust governance framework to ensure transparency, fairness, safety, and operational excellence.
          </p>
        </div>

        {/* Strategic Partners Cards (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Strategic Partner */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 p-2 border border-gray-200 flex items-center justify-center shrink-0">
                <Image src="/logo/MCD/MCOD.png" alt="MCD Logo" width={48} height={48} className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold font-dm-sans tracking-wider text-purple uppercase">
                  STRATEGIC PARTNER
                </span>
                <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-navy-dark leading-snug">
                  Municipal Corporation of Delhi (MCD)
                </h3>
              </div>
            </div>

            <p className="font-dm-sans text-gray-600 text-base leading-relaxed">
              Provides strategic guidance, policy support, access to sporting infrastructure, and oversight to ensure the league aligns with Delhi&apos;s broader vision for grassroots sports development.
            </p>
          </div>

          {/* Card 2: League Management Partner */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 p-2 border border-gray-200 flex items-center justify-center shrink-0">
                <Image src="/logo/MCD/SITDS.png" alt="SITDS Logo" width={48} height={48} className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                  LEAGUE MANAGEMENT PARTNER
                </span>
                <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-navy-dark leading-snug">
                  Sports Infrastructure &amp; Talent Development Society (SITDS)
                </h3>
              </div>
            </div>

            <p className="font-dm-sans text-gray-600 text-base leading-relaxed">
              Responsible for league operations, club engagement, competition management, player registrations, scheduling, technology implementation, talent development programs, and stakeholder coordination.
            </p>
          </div>

        </div>

        {/* Key Governance Principles */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
              <HugeiconsIcon icon={Structure01Icon} size={22} className="text-purple" />
            </div>
            <h3 className="font-satoshi font-bold text-2xl text-navy-dark">
              Key Governance Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governancePrinciples.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col gap-3 hover:border-purple/30 transition-colors">
                <div className="flex items-center gap-2 text-purple">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                  <h4 className="font-satoshi font-bold text-lg text-navy-dark">
                    {item.title}
                  </h4>
                </div>
                <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Highlight Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h4 className="font-satoshi font-bold text-xl sm:text-2xl text-white">
              A Benchmark Model for Grassroots Sports
            </h4>
            <p className="font-dm-sans text-sm sm:text-base text-gray-300 leading-relaxed">
              Through strong governance and collaboration, the MCD Mini League aims to become a benchmark model for grassroots football development in India.
            </p>
          </div>
          <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-dm-sans text-xs font-bold uppercase tracking-wider shrink-0">
            Delhi Grassroots Ecosystem
          </div>
        </div>

      </div>
    </section>
  );
}
