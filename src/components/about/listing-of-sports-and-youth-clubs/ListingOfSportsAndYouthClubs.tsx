"use client";

import React, { useState } from "react";
import { associationsData, clubsData } from "@/data/sportsClubs";
import StatsCard from "./StatsCard";
import SearchFilterBar from "./SearchFilterBar";
import DirectoryCard from "./DirectoryCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { Medal06Icon, Award01Icon, UserGroup03Icon, Calendar04Icon } from "@hugeicons/core-free-icons";

export default function ListingOfSportsAndYouthClubs() {
  const [activeTab, setActiveTab] = useState<"Association" | "Clubs">("Association");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSportFilter, setSelectedSportFilter] = useState("All");

  const currentDataset = activeTab === "Association" ? associationsData : clubsData;

  // Filter dataset by search query & sport filter
  const filteredData = currentDataset.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sport.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport =
      selectedSportFilter === "All" ||
      item.sport.toLowerCase().includes(selectedSportFilter.toLowerCase());

    return matchesSearch && matchesSport;
  });

  // Extract all unique sports from current dataset for the filter dropdown
  const uniqueSports = ["All", ...Array.from(new Set(currentDataset.map((item) => item.sport)))];

  // Dynamic statistics sums based on active dataset
  const totalAssociationsCount = associationsData.length;
  const totalClubsCount = clubsData.length;

  return (
    <section className="w-full px-4 sm:px-8 lg:px-[64px] xl:px-0 py-12 lg:py-[100px] bg-white">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-[80px]">
        
        {/* Top Header + Stats Section (Flow: Vertical, Width: 1200px, Gap: 40px) */}
        <div className="w-full flex flex-col gap-10">
          
          {/* Title / Header */}
          <div className="flex flex-col gap-3">
            <span className="font-dm-sans text-xs sm:text-sm font-bold text-purple-500 tracking-wider uppercase">
              Government Support
            </span>
            <h2 className="font-satoshi text-[32px] sm:text-[48px] lg:text-[60px] font-bold text-slate-900 leading-[120%] tracking-tight">
              Zonal Councils &amp; Registered Clubs
            </h2>
            <p className="font-dm-sans text-sm sm:text-base lg:text-lg text-gray-500">
              The official zonal bodies and grassroots football clubs participating in the MCD Mini League across Delhi-NCR.
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Total Associations Card */}
            <StatsCard
              label="Total Associations"
              value={totalAssociationsCount}
              icon={
                <HugeiconsIcon icon={Medal06Icon} size={32} strokeWidth={2} color="currentColor" />
              }
            />

            {/* Total Clubs Card */}
            <StatsCard
              label="Total Clubs"
              value={totalClubsCount}
              icon={
                <HugeiconsIcon icon={Award01Icon} size={32} strokeWidth={2} color="currentColor"/>
              }
            />

            {/* Active Athletes Card */}
            <StatsCard
              label="Active Athletes"
              value="12"
              icon={
                <HugeiconsIcon icon={UserGroup03Icon} size={32} strokeWidth={2} color="currentColor"/>
              }
            />

            {/* Annual Events Card */}
            <StatsCard
              label="Annual Events"
              value="4"
              icon={
                <HugeiconsIcon icon={Calendar04Icon} size={32} strokeWidth={2} color="currentColor"/>
              }
            />

          </div>
        </div>

        {/* Search & Filter Bar */}
        <SearchFilterBar
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setSelectedSportFilter("All");
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedSportFilter={selectedSportFilter}
          onSportFilterChange={setSelectedSportFilter}
          uniqueSports={uniqueSports}
        />

        {/* Directory Grid Area */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {filteredData.map((item, idx) => (
              <DirectoryCard key={idx} item={item} activeTab={activeTab} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16 bg-white border border-neutral-200 rounded-2xl">
            <p className="font-dm-sans text-base text-gray-400 font-medium mb-2">No results found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSportFilter("All");
              }}
              className="text-purple-600 font-semibold font-dm-sans text-sm hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
