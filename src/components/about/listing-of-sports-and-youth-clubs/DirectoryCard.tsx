import React from "react";
import type { SportsClub } from "@/data/sportsClubs";
import { HugeiconsIcon } from "@hugeicons/react";
import { Award01Icon } from "@hugeicons/core-free-icons";

interface DirectoryCardProps {
  item: SportsClub;
  activeTab: "Association" | "Clubs";
}

export default function DirectoryCard({ item, activeTab }: DirectoryCardProps) {
  return (
    <div className="w-full bg-white border border-neutral-200 rounded-[32px] p-[24px] flex flex-col sm:flex-row items-start gap-[16px] sm:gap-[24px] transition-all duration-300 hover:border-purple-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5">
      
      {/* Left Icon Container */}
      <div className="w-[80px] h-[80px] rounded-2xl bg-purple-50 flex items-center justify-center text-brand-purple shrink-0">
        <HugeiconsIcon icon={Award01Icon} size={32} strokeWidth={2} />
      </div>

      {/* Right Side Content Container */}
      <div className="flex flex-col flex-1 w-full">
        <div className="gap-3 flex flex-col">
          {/* Badge */}
        <span className="px-3 flex items-center justify-center rounded-lg w-[97px] h-[28px] bg-green-light text-green text-sm font-semibold font-dm-sans mb-2">
          {item.status}
        </span>

        {/* Title */}
        <h3 className="font-satoshi text-lg sm:text-[20px] font-bold text-slate-900 leading-tight tracking-[0.02] mb-1">
          {item.name}
        </h3>

        {/* Subtitle Details */}
        <p className="font-dm-sans text-sm text-neutral-500 mb-4">
          {item.sport} • President: {item.president}
        </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full mb-4" />

        {/* Stats Section */}
        <div className="w-full flex items-center justify-between">
          
          {/* Stat Column 1 */}
          <div className="flex flex-col gap-2 text-center">
            <span className="font-dm-sans text-[16px] sm:text-[18px] font-bold text-gray-500 leading-tight">
              {item.affiliatedClubsCount}
            </span>
            <span className="font-dm-sans text-xs sm:text-sm text-gray-500 font-medium">
              {activeTab === "Association" ? "Affiliated Clubs" : "Branches"}
            </span>
          </div>

          {/* Stat Column 2 */}
          <div className="flex flex-col gap-2 text-center">
            <span className="ont-dm-sans text-[16px] sm:text-[18px] font-bold text-gray-500 leading-tight">
              {item.athletesCount}
            </span>
            <span className="font-dm-sans text-xs sm:text-sm text-gray-500">
              Athletes
            </span>
          </div>

          {/* Stat Column 3 */}
          <div className="flex flex-col gap-2 text-center">
            <span className="ont-dm-sans text-[16px] sm:text-[18px] font-bold text-gray-500 leading-tight">
              {item.eventsCount}
            </span>
            <span className="font-dm-sans text-xs sm:text-sm text-gray-500 font-medium">
              Events/Yr
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
