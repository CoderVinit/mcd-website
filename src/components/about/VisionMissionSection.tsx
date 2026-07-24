"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Target01Icon, RocketIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

const missionPoints = [
  "To increase football participation among children across Delhi.",
  "To create a structured competition framework for grassroots football development.",
  "To strengthen club culture and community engagement through sport.",
  "To identify and nurture emerging football talent at an early age.",
  "To promote gender-inclusive sporting opportunities for young athletes.",
  "To support holistic child development through teamwork, discipline, leadership, and sportsmanship.",
  "To leverage technology and data-driven assessments for talent development and player progression.",
];

export default function VisionMissionSection() {
  return (
    <section id="vision" className="w-full bg-slate-50 py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={Target01Icon} size={14} className="text-orange" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              2. VISION &amp; MISSION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-navy-dark leading-tight font-satoshi tracking-tight">
            Our Vision &amp; Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-dm-sans leading-relaxed">
            Guiding Delhi&apos;s Grassroots Football Towards Excellence &amp; Inclusivity
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Vision Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col justify-between gap-8 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center">
                <HugeiconsIcon icon={Target01Icon} size={34} className="text-purple" />
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold font-dm-sans tracking-widest text-purple uppercase">
                  OUR VISION
                </span>
                <h3 className="font-satoshi font-bold text-2xl sm:text-3xl text-navy-dark leading-tight">
                  Sustainable &amp; Inclusive Ecosystem
                </h3>
              </div>

              <p className="font-dm-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                To create Delhi&apos;s most inclusive and sustainable grassroots football ecosystem that nurtures young talent, promotes active lifestyles, and establishes a clear pathway from community participation to sporting excellence.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple/5 border border-purple/10 font-dm-sans text-xs font-semibold text-purple">
              Building grassroots football excellence across Delhi-NCR
            </div>
          </div>

          {/* Mission Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col gap-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center shrink-0">
                <HugeiconsIcon icon={RocketIcon} size={30} className="text-orange" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold font-dm-sans tracking-widest text-orange uppercase">
                  OUR MISSION
                </span>
                <h3 className="font-satoshi font-bold text-2xl sm:text-3xl text-navy-dark leading-tight">
                  Strategic Goals &amp; Objectives
                </h3>
              </div>
            </div>

            <ul className="flex flex-col gap-3.5">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 font-dm-sans text-sm sm:text-base leading-snug">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-orange shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
