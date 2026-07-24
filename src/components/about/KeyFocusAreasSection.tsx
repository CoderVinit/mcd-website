import React from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import {StarAward02Icon,ChartNoAxesCombinedIcon,Building05Icon} from "@hugeicons/core-free-icons";
import { colors } from "@/theme/colors";

const bulletPoints = [
  "Policy formulation for sports and youth development",
  "Implementation of state and central government schemes",
  "Infrastructure development and facility management",
  "Athlete identification, training, and support programs",
  "Coordination with sports associations and stakeholders",
  "Organization of state-level tournaments and events",
];

const highlights = [
  {
    icon: StarAward02Icon,
    title: "Excellence in Traditional Sports",
    description:
      "Meghalaya leads in archery, football, and indigenous sports development",
  },
  {
    icon: ChartNoAxesCombinedIcon,
    title: "Growing Athlete Base",
    description:
      "Over 5,000 registered athletes competing at state and national levels",
  },
  {
    icon: Building05Icon,
    title: "Infrastructure Expansion",
    description:
      "132 sports facilities across 12 districts with ongoing modernization",
  },
];

export default function KeyFocusAreasSection() {
  return (
    <section className="w-full bg-gray-100 px-[16px] py-[40px] md:px-[32px] md:py-[60px] lg:px-[64px] lg:py-[100px] flex flex-col items-center gap-[40px] md:gap-[60px] lg:gap-[80px]">
      {/* Header */}
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-[12px] md:gap-[16px] text-center">
        <span className="font-dm-sans font-bold text-[12px] md:text-[14px] leading-[150%] tracking-[0.04em] text-purple">
          Our Key Focus Areas
        </span>
        <h2 className="font-satoshi font-bold text-[24px] md:text-[40px] lg:text-[60px] leading-[120%] text-navy-dark capitalize">
          DSYA works across multiple dimensions to create a thriving sports
          ecosystem in Meghalaya.
        </h2>
      </div>

      {/* Content Cards */}
      <div className="w-full max-w-[1312px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] md:gap-[24px]">
        {/* Our Role in Meghalaya */}
        <div
          className="flex flex-col gap-[24px] md:gap-[32px] bg-white rounded-[12px] p-[16px] md:p-[24px] max-w-[644px] w-full h-full md:h-[728px] border border-gray-100"
          style={{ boxShadow: "0px 0px 8px 0px rgba(16, 24, 40, 0.05)" }}
        >
          <h3 className="font-satoshi font-bold text-[22px] md:text-[40px] leading-[120%] text-navy-dark">
            Our Role in Meghalaya
          </h3>
          <div className="flex flex-col gap-[16px] w-full max-w-[596px]">
            <p className="font-dm-sans font-normal text-[13px] md:text-[14px] lg:text-[20px] leading-[150%] text-gray-600">
              The Directorate serves as the primary government body responsible for formulating policies, implementing programs, and coordinating sports development initiatives across all districts.
            </p>
            <ul className="flex flex-col gap-[8px]">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[8px] font-dm-sans font-normal text-[13px] md:text-[20px] leading-[150%] text-gray-600 capitalize"
                >
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-gray-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sports Development Highlights */}
        <div
          className="flex flex-col gap-[24px] md:gap-[32px] bg-white rounded-[12px] p-[16px] md:p-[24px] max-w-[644px] w-full h-full md:h-[728px] border border-gray-100"
          style={{ boxShadow: "0px 0px 8px 0px rgba(16, 24, 40, 0.05)" }}
        >
          <div className="relative w-full aspect-[16/9] rounded-[8px] md:rounded-[12px] overflow-hidden">
            <Image
              src="https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779096498_sao-chang.png"
              alt="Sports Development"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-satoshi font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[120%] text-navy-dark">
            Sports Development Highlights
          </h3>
          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-[12px]">
                <div className="w-[44px] h-[44px] md:w-[60px] md:h-[60px] rounded-[8px] md:rounded-[12px] bg-primary/5 flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={item.icon} width={30} height={30} color={colors.primary}/>
                </div>
                <div className="flex flex-col gap-[8px] md:gap-[16px]">
                  <h4 className="font-satoshi font-bold text-[16px] md:text-[20px] leading-[120%] text-navy-dark">
                    {item.title}
                  </h4>
                  <p className="font-dm-sans font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
