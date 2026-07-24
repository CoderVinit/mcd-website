"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award05Icon,
  UserGroup02Icon,
  Calendar03Icon,
  MessageMultiple01Icon,
  Location06Icon,
} from "@hugeicons/core-free-icons";

interface VolunteerOpportunity {
  id: number;
  title: string;
  description: string;
  icon: any;
  bgClass: string;
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 1,
    title: "Sports Event Support",
    description: "Assist in organizing and managing sports events, tournaments, and competitions",
    icon: Award05Icon,
    bgClass: "bg-dept-blue",
  },
  {
    id: 2,
    title: "Youth Outreach",
    description: "Engage with youth communities and promote sports participation at grassroots level",
    icon: UserGroup02Icon,
    bgClass: "bg-dept-teal",
  },
  {
    id: 3,
    title: "Event Operations",
    description: "Support logistics, crowd management, and operational activities during events",
    icon: Calendar03Icon,
    bgClass: "bg-dept-purple",
  },
  {
    id: 4,
    title: "Communications Support",
    description: "Help with social media, documentation, photography, and content creation",
    icon: MessageMultiple01Icon,
    bgClass: "bg-dept-red",
  },
  {
    id: 5,
    title: "District Coordination",
    description: "Assist district-level sports programs and community engagement initiatives",
    icon: Location06Icon,
    bgClass: "bg-dept-orange",
  },
];

export default function VolunteerOpportunities() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[100px] px-4 md:px-[64px] flex flex-col gap-[80px]">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-satoshi text-[48px] md:text-[60px] font-bold text-navy-dark leading-[120%] tracking-tight">
          Volunteer Opportunities
        </h2>
      </div>

      {/* Opportunities Grid */}
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteerOpportunities.map((op) => (
          <div
            key={op.id}
            className="bg-white rounded-[24px] p-6 border border-[#EAECF0] flex flex-col items-start gap-8 hover:shadow-md transition-shadow animate-fade-in"
          >
            <div className={`w-15 h-15 rounded-xl ${op.bgClass} text-white flex items-center justify-center shrink-0`}>
              <HugeiconsIcon icon={op.icon} size={32} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-satoshi text-[20px] font-bold text-gray-900 leading-[120%]">
                {op.title}
              </h3>
              <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                {op.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
