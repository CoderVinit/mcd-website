"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon, WorkoutRunIcon, Building05Icon, StarAward02Icon, ChartIcon } from "@hugeicons/core-free-icons";

const impactCategories = [
  {
    icon: UserGroupIcon,
    title: "Participation Impact",
    badgeColor: "bg-purple/10 text-purple",
    iconColor: "text-purple",
    points: [
      "80 football clubs participating across Delhi.",
      "320 teams competing in structured league competition.",
      "Thousands of young footballers engaged annually.",
      "Equal opportunities for boys and girls in grassroots football."
    ]
  },
  {
    icon: WorkoutRunIcon,
    title: "Talent Development Impact",
    badgeColor: "bg-orange/10 text-orange",
    iconColor: "text-orange",
    points: [
      "Regular competitive match exposure for young athletes.",
      "Scientific player assessment and performance tracking.",
      "Early-stage talent identification and development pathways.",
      "Access to professional league structures from a young age."
    ]
  },
  {
    icon: Building05Icon,
    title: "Community Impact",
    badgeColor: "bg-purple/10 text-purple",
    iconColor: "text-purple",
    points: [
      "Strengthening local football clubs and grassroots infrastructure.",
      "Encouraging active lifestyles and physical well-being among children.",
      "Building stronger community engagement through sport.",
      "Creating a culture of participation, inclusion, and healthy competition."
    ]
  },
  {
    icon: StarAward02Icon,
    title: "Educational & Social Impact",
    badgeColor: "bg-orange/10 text-orange",
    iconColor: "text-orange",
    points: [
      "Development of teamwork, leadership, discipline, and resilience.",
      "Enhanced confidence and social interaction among participants.",
      "Promotion of sportsmanship, respect, and fair play.",
      "Contribution to the overall physical and mental development of young athletes."
    ]
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20">
            <HugeiconsIcon icon={ChartIcon} size={14} className="text-purple" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-purple uppercase">
              3. LEAGUE IMPACT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-navy-dark leading-tight font-satoshi tracking-tight">
            Transforming Grassroots Football in Delhi
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-dm-sans leading-relaxed">
            The MCD Mini League is designed to create lasting impact beyond the football field.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {impactCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
                <div className={`w-14 h-14 rounded-2xl ${cat.badgeColor.split(" ")[0]} flex items-center justify-center shrink-0`}>
                  <HugeiconsIcon icon={cat.icon} size={28} className={cat.iconColor} />
                </div>
                <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-navy-dark leading-tight">
                  {cat.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-3">
                {cat.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 font-dm-sans text-sm sm:text-base text-gray-600 leading-snug">
                    <span className="w-2 h-2 rounded-full bg-purple shrink-0 mt-2" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
