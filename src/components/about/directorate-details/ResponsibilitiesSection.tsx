"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const primaryResponsibilities: string[] = [
  "Formulating State-Level Sports Policies And Development Strategies",
  "Implementing Central And State Government Sports Schemes",
  "Planning And Executing Sports Infrastructure Projects",
  "Talent Identification And Athlete Development Programs",
  "Organizing State-Level Tournaments And Championships",
  "Coordination With National Sports Bodies And Federations",
];

const supportServices: string[] = [
  "Financial Assistance For Athletes And Sports Associations",
  "Coaching And Training Support Programs",
  "Sports Equipment And Facility Management",
  "Recognition And Awards For Outstanding Athletes",
  "Capacity Building For Coaches And Technical Officials",
  "Liaison With Educational Institutions For Sports Integration",
];

export default function ResponsibilitiesSection() {
  return (
    <section className="w-full bg-[#F9FAFB] pt-[60px] pb-[60px] px-4 md:pt-[100px] md:pb-[100px] md:px-[64px] border-t border-b border-neutral-100">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[60px]">
        {/* Title */}
        <h2 className="font-satoshi text-[32px] sm:text-[48px] font-bold text-navy-dark text-center leading-[120%] tracking-tight">
          Our Role In Sports Development
        </h2>

        {/* Cards Row */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-[40px]">
          {/* Primary Responsibilities Card */}
          <div className="flex-1 bg-white border border-neutral-200/60 rounded-[32px] p-6 md:p-[40px] shadow-[0_4px_25px_rgba(16,24,40,0.02)] flex flex-col gap-6">
            <h3 className="font-satoshi text-lg sm:text-2xl font-bold text-secondary leading-[130%]">
              Primary Responsibilities
            </h3>
            <ul className="flex flex-col gap-4">
              {primaryResponsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {/* Thick purple caret */}
                  <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={3} className="text-secondary" />
                  <span className="font-satoshi text-sm sm:text-base text-black font-normal leading-[130%]">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Services Card */}
          <div className="flex-1 bg-white border border-neutral-200/60 rounded-[32px] p-6 md:p-[40px] shadow-[0_4px_25px_rgba(16,24,40,0.02)] flex flex-col gap-6">
            <h3 className="font-satoshi text-lg sm:text-[24px] font-bold text-secondary leading-[130%]">
              Support Services
            </h3>
            <ul className="flex flex-col gap-4">
              {supportServices.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {/* Thick purple caret */}
                  <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={3} className="text-secondary" />
                  <span className="font-satoshi text-sm sm:text-base text-black font-normal leading-[130%]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
