"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  UserGroup02Icon,
  Building05Icon,
  PromotionIcon,
  ComputerPhoneSyncIcon,
  Target03Icon,
  BookOpen02Icon,
  UserMultiple02Icon,
  Medal02Icon,
  UserGroup03Icon,
  UserMultiple03Icon,
  Shield01Icon,
  ChatIcon,
} from "@hugeicons/core-free-icons";

interface WorkDomain {
  icon: any;
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
}

const workDomains: WorkDomain[] = [
  {
    icon: Medal02Icon,
    title: "Sports Development",
    description: "Promoting competitive sports culture, organizing tournaments, and supporting talent development programs across all age groups and disciplines.",
    bgClass: "bg-dept-blue",
    textClass: "text-white",
  },
  {
    icon: UserMultiple03Icon,
    title: "Athlete Support",
    description: "Providing financial assistance, training facilities, coaching support, and recognition programs for athletes representing Meghalaya at various levels.",
    bgClass: "bg-dept-green",
    textClass: "text-white",
  },
  {
    icon: Target03Icon,
    title: "Youth Engagement",
    description: "Creating opportunities for youth participation in sports, life skills development, and community engagement through structured programs.",
    bgClass: "bg-dept-purple",
    textClass: "text-white",
  },
  {
    icon: Building05Icon,
    title: "Infrastructure & Facilities",
    description: "Planning, developing, and maintaining world-class sports infrastructure including stadiums, training centres, and community facilities.",
    bgClass: "bg-dept-orange",
    textClass: "text-white",
  },
  {
    icon: Shield01Icon,
    title: "Stakeholder Coordination",
    description: "Collaborating with sports associations, clubs, educational institutions, and government bodies to strengthen the sports ecosystem.",
    bgClass: "bg-dept-red",
    textClass: "text-white",
  },
  {
    icon: ChatIcon,
    title: "Public Communication",
    description: "Maintaining transparency through regular communication, media engagement, and public outreach initiatives.",
    bgClass: "bg-dept-blue",
    textClass: "text-white",
  },
  {
    icon: UserMultiple03Icon,
    title: "For Athletes",
    description: "Training programs, financial support, competition opportunities, and recognition schemes to help athletes achieve their full potential at state, national, and international levels.",
    bgClass: "bg-dept-sky",
    textClass: "text-white",
  },
  {
    icon: Shield01Icon,
    title: "For Associations",
    description: "Funding support, infrastructure access, event coordination, and policy guidance to strengthen sports associations and federations across all disciplines.",
    bgClass: "bg-dept-green",
    textClass: "text-white",
  },
  {
    icon: Building05Icon,
    title: "For Communities",
    description: "Accessible sports facilities, grassroots programs, community tournaments, and youth engagement initiatives to promote sports participation at the local level.",
    bgClass: "bg-dept-purple",
    textClass: "text-white",
  },
];

export default function WorksOnSection() {
  return (
    <section className="w-full py-[80px] px-4 md:py-[100px] md:px-[64px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-12 lg:gap-[60px]">
        {/* Header Block */}
        <div className="w-full flex flex-col gap-3 text-center">
          <span className="font-dm-sans text-xs sm:text-sm font-bold text-purple-600 tracking-wider uppercase">
            Title
          </span>
          <h2 className="font-satoshi text-[40px] sm:text-[60px] font-bold text-navy-dark leading-[120%] tracking-tight">
            What The Directorate Works On
          </h2>
          <p className="font-dm-sans text-sm sm:text-lg text-gray-500 max-w-[848px] mx-auto">
            Our work spans across multiple domains to create a comprehensive sports ecosystem in Meghalaya
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {workDomains.map((domain, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-[24px] p-[24px] flex flex-col gap-[32px] transition-all duration-300 hover:border-purple-200 hover:shadow-[0_8px_30px_rgba(16,24,40,0.06)] hover:-translate-y-1 md:min-h-[272px]"
            >
              {/* Icon Wrapper */}
              <div className={`w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0 ${domain.bgClass} ${domain.textClass}`}>
                <HugeiconsIcon icon={domain.icon} size={24} strokeWidth={2} />
              </div>
              {/* Text Details Container */}
              <div className="flex flex-col gap-[12px]">
                {/* Title */}
                <h3 className="font-satoshi text-base sm:text-[20px] font-bold text-black leading-[120%] tracking-[1%]">
                  {domain.title}
                </h3>
                {/* Description */}
                <p className="font-satoshi text-sm sm:text-base text-gray-500 leading-[150%] font-regular">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
