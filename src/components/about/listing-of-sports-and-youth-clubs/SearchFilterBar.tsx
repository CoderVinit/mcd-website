import { HugeiconsIcon } from "@hugeicons/react";
import { FilterIcon, Search01Icon } from "@hugeicons/core-free-icons";
import React, { useState } from "react";

interface SearchFilterBarProps {
  activeTab: "Association" | "Clubs";
  onTabChange: (tab: "Association" | "Clubs") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSportFilter: string;
  onSportFilterChange: (sport: string) => void;
  uniqueSports: string[];
}

export default function SearchFilterBar({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  selectedSportFilter,
  onSportFilterChange,
  uniqueSports,
}: SearchFilterBarProps) {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  return (
    <div className="w-full bg-white border border-[#FAFAFA] rounded-[12px] p-[20px] shadow-[0_0_12px_0_rgba(16,24,40,0.08)] flex flex-col gap-[16px]">
      
      {/* Top Row: Search Input & Filter Button */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full relative">
        
        {/* Search Box */}
        <div className="flex items-center gap-3 w-full sm:flex-1 min-w-0 h-[48px] rounded-[8px] border border-gray-300 bg-white px-[14px] focus-within:border-purple-500 transition-all duration-200">
          <HugeiconsIcon icon={Search01Icon} width={18} height={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder={
              activeTab === "Association"
                ? "Search Association With Name Or Sport"
                : "Search Club With Name Or Sport"
            }
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 min-w-0 font-dm-sans text-[14px] text-gray-700 placeholder-gray-400 leading-[150%] outline-none bg-transparent"
          />
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className={`h-[48px] px-4 rounded-[8px] border flex items-center gap-2 font-dm-sans text-sm font-semibold transition-all duration-200 cursor-pointer ${
              showFilterDropdown || selectedSportFilter !== "All"
                ? "border-purple-500 bg-purple-50 text-purple-700"
                : "border-gray-300 bg-white text-gray-500 hover:bg-neutral-50"
            }`}
          >
            <HugeiconsIcon icon={FilterIcon} size={24} color="currentColor" className="shrink-0" />
            <span>{selectedSportFilter === "All" ? "Filter" : `Sport: ${selectedSportFilter}`}</span>
          </button>

          {/* Filter Dropdown */}
          {showFilterDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-[12px] shadow-lg z-20 py-2">
              <span className="block px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Filter by Sport
              </span>
              {uniqueSports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => {
                    onSportFilterChange(sport);
                    setShowFilterDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
                    selectedSportFilter === sport
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Bottom Row: Tab Switcher */}
      <div className="flex items-center p-[4px] bg-neutral-200 rounded-[12px] self-start w-[168px] h-[36px]">
        <button
          onClick={() => onTabChange("Association")}
          className={`flex-1 h-full flex items-center justify-center rounded-[8px] font-dm-sans text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "Association"
              ? "bg-white text-neutral-800 shadow-sm"
              : "text-neutral-700 hover:text-neutral-800"
          }`}
        >
          Association
        </button>
        <button
          onClick={() => onTabChange("Clubs")}
          className={`flex-1 h-full flex items-center justify-center rounded-[8px] font-dm-sans text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "Clubs"
              ? "bg-white text-neutral-800 shadow-sm"
              : "text-neutral-700 hover:text-neutral-800"
          }`}
        >
          Clubs
        </button>
      </div>

    </div>
  );
}
