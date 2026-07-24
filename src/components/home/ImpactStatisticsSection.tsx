"use client";

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon, WorkoutRunIcon, Building05Icon, ChartIcon } from '@hugeicons/core-free-icons';
import { colors } from "@/theme/colors";

const stats = [
  {
    icon: UserGroupIcon,
    value: '80',
    label: 'Total Clubs',
    subtext: '12 MCD + 68 Non-MCD Clubs',
  },
  {
    icon: WorkoutRunIcon,
    value: '4,400+',
    label: 'Total Athletes',
    subtext: '4 Teams per Club (U-9 & U-11)',
  },
  {
    icon: Building05Icon,
    value: '2',
    label: 'Venues',
    subtext: 'Football Stadium Facilities',
  },
];

const ImpactStatisticsSection = () => {
  return (
    <section className="w-full bg-slate-50/80 py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-2xl mx-auto">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={ChartIcon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              IMPACT BY NUMBERS
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
            League Impact Statistics
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans leading-relaxed">
            Real-time numbers driving grassroots sports talent identification across Delhi-NCR.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-[#F58220] transition-colors duration-300">
                <HugeiconsIcon
                  icon={stat.icon}
                  size={32}
                  color={colors.orange}
                  className="group-hover:text-white transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[36px] sm:text-[44px] font-extrabold leading-none text-navy font-satoshi tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[17px] sm:text-[19px] font-bold text-gray-900 font-satoshi">
                  {stat.label}
                </span>
                <span className="text-[13px] sm:text-[14px] text-gray-500 font-dm-sans font-medium">
                  {stat.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatisticsSection;
