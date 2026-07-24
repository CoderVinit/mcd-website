"use client";

import React from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon, WorkoutRunIcon, Calendar04Icon, Flag01Icon } from "@hugeicons/core-free-icons";

export default function WhoWeAreSection() {
  return (
    <section id="about-league" className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20 w-fit">
            <HugeiconsIcon icon={Flag01Icon} size={14} className="text-purple" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-purple uppercase">
              1. ABOUT THE LEAGUE
            </span>
          </div>
          
          <h2 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[115%] text-navy-dark">
            Building Delhi&apos;s Largest Grassroots Football Ecosystem
          </h2>
        </div>

        {/* Top Content Row: Description + Logos Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Paragraphs Column */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-gray-600 font-dm-sans text-base sm:text-lg leading-relaxed">
            <p>
              The <strong className="text-navy-dark font-semibold">MCD Mini League</strong> is a first-of-its-kind grassroots football initiative designed to establish a structured, sustainable, and competitive football ecosystem for young players across Delhi. Developed in partnership with the <strong className="text-navy-dark font-semibold">Municipal Corporation of Delhi (MCD)</strong> and implemented by <strong className="text-navy-dark font-semibold">Sports Infrastructure & Talent Development Society (SITDS)</strong>, the league aims to provide children with regular access to organized football competitions, professional development pathways, and talent identification opportunities.
            </p>
            <p>
              Unlike traditional short-duration tournaments, the MCD Mini League follows a league-based model featuring promotion and relegation, ensuring meaningful competition throughout the season. The league brings together football clubs from across Delhi, creating an environment where young athletes can compete, learn, and grow while developing essential life skills through sport.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="p-2 bg-white rounded-xl shadow-xs flex items-center gap-2 shrink-0">
                <Image src="/logo/MCD/MCOD.png" alt="MCD Logo" width={38} height={38} className="object-contain" unoptimized />
                <span className="text-gray-400 font-light text-base select-none">/</span>
                <Image src="/logo/MCD/SITDS.png" alt="SITDS Logo" width={38} height={38} className="object-contain" unoptimized />
              </div>
              <div>
                <h4 className="font-satoshi font-bold text-navy-dark text-lg leading-tight">Inaugural Season</h4>
                <p className="font-dm-sans text-xs text-gray-500">MCD &amp; SITDS Joint Initiative</p>
              </div>
            </div>

            <p className="font-dm-sans text-sm text-gray-700 leading-relaxed font-medium">
              The inaugural season will feature <span className="text-purple font-bold">80 football clubs</span>, <span className="text-purple font-bold">320 teams</span>, and <span className="text-purple font-bold">800+ matches</span> across the Under-9 and Under-11 age categories for both boys and girls.
            </p>
          </div>
        </div>

        {/* 4 Stat Cards Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col gap-2 hover:border-purple/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-2">
              <HugeiconsIcon icon={UserGroupIcon} size={24} className="text-purple" />
            </div>
            <span className="font-satoshi font-extrabold text-3xl sm:text-4xl text-navy-dark">80</span>
            <span className="font-satoshi font-bold text-base text-gray-900">Football Clubs</span>
            <span className="font-dm-sans text-xs text-gray-500">Across Delhi</span>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col gap-2 hover:border-purple/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-2">
              <HugeiconsIcon icon={WorkoutRunIcon} size={24} className="text-orange" />
            </div>
            <span className="font-satoshi font-extrabold text-3xl sm:text-4xl text-navy-dark">320</span>
            <span className="font-satoshi font-bold text-base text-gray-900">Teams Competing</span>
            <span className="font-dm-sans text-xs text-gray-500">Structured League Model</span>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col gap-2 hover:border-purple/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-2">
              <HugeiconsIcon icon={Calendar04Icon} size={24} className="text-purple" />
            </div>
            <span className="font-satoshi font-extrabold text-3xl sm:text-4xl text-navy-dark">800+</span>
            <span className="font-satoshi font-bold text-base text-gray-900">Matches Scheduled</span>
            <span className="font-dm-sans text-xs text-gray-500">Full Season Fixtures</span>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col gap-2 hover:border-purple/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-2">
              <span className="font-satoshi font-bold text-orange text-lg">U9/U11</span>
            </div>
            <span className="font-satoshi font-extrabold text-2xl sm:text-3xl text-navy-dark">U-9 &amp; U-11</span>
            <span className="font-satoshi font-bold text-base text-gray-900">Age Categories</span>
            <span className="font-dm-sans text-xs text-gray-500">Boys &amp; Girls Competitions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
