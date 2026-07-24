import React from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import {Location06Icon, WorkoutRunIcon, StarAward02Icon, Calendar04Icon, Shield01Icon, DocumentValidationIcon, Location10Icon, Building05Icon, Agreement01Icon} from "@hugeicons/core-free-icons";


const stats = [
  {
    icon: Location06Icon,
    value: "12",
    label: "District Covered",
  },
  {
    icon: WorkoutRunIcon,
    value: "5000+",
    label: "Athlete Support",
  },
  {
    icon: StarAward02Icon,
    value: "25+",
    label: "Sports Supported",
  },
  {
    icon: Calendar04Icon,
    value: "45",
    label: "Years Of Service",
  },
  {
    icon: Shield01Icon,
    value: "240+",
    label: "Stakeholders Connected",
  },
  {
    icon: DocumentValidationIcon,
    value: "18",
    label: "Active Schemes",
  },
  {
    icon: Location10Icon,
    value: "92",
    label: "Infrastructure",
  },
  {
    icon: Building05Icon,
    value: "132",
    label: "Facilities Managed",
  },
  {
    icon: Agreement01Icon,
    value: "50,000+",
    label: "Youth Engagement",
  },
];

export default function AboutGlanceSection() {
  return (
    <section className="w-full bg-banner-dark px-[16px] py-[40px] md:px-[32px] md:py-[60px] lg:px-[64px] lg:py-[100px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-[12px] md:gap-[16px] text-center">
        <span
          className="font-dm-sans font-bold text-[12px] md:text-[14px] leading-[150%] tracking-[0.04em] text-white"
          style={{ letterSpacing: '0.04em' }}
        >
          At A Glance
        </span>
        <h2
          className="font-satoshi font-bold text-[28px] md:text-[40px] lg:text-[60px] leading-[120%] tracking-[0] text-white"
          style={{ letterSpacing: 0 }}
        >
          DSYA At A Glance
        </h2>
        <p
          className="font-dm-sans font-normal text-[14px] md:text-[16px] leading-[150%] tracking-[0] text-white text-center max-w-[900px]"
          style={{ letterSpacing: 0 }}
        >
          The Directorate of Sports & Youth Affairs is the nodal agency for sports development, youth empowerment, and sports infrastructure management in Meghalaya.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-[12px] md:gap-[24px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-[16px] md:rounded-[32px] bg-white/10 border border-white/10 p-[16px] md:p-[24px] min-h-[140px] md:min-h-[180px] lg:min-h-[213px] gap-[16px] md:gap-[32px]"
            style={{ boxShadow: 'inset 0 0 10px 0 rgba(255,255,255,0.08)' }}
          >
            <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-[8px] md:rounded-[12px] bg-white/10 flex items-center justify-center">
              <HugeiconsIcon icon={stat.icon} width={30} height={30} color="white" strokeWidth={1.88}/>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="text-[24px] md:text-[30px] lg:text-[32px] leading-[120%] text-white font-satoshi font-bold tracking-[2%]">
                {stat.value}
              </span>
              <span className="text-[13px] md:text-[14px] lg:text-[18px] font-medium leading-[150%] text-white/70 font-dm-sans">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
