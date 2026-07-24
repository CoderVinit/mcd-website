"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Grid02Icon,
  LicenseIcon,
  Image02Icon,
  ComputerVideoIcon,
  DashboardCircleIcon,
  Image01Icon,
} from "@hugeicons/core-free-icons";
import { MediaFilter } from "./MediaCard";

interface MediaSidebarProps {
  activeFilter: MediaFilter;
  onFilterChange: (filter: MediaFilter) => void;
}

export default function MediaSidebar({ activeFilter, onFilterChange }: MediaSidebarProps) {
  const filterOptions = [
    { id: "all", label: "All", icon: DashboardCircleIcon },
    { id: "news", label: "News", icon: LicenseIcon },
    { id: "photos", label: "Photos", icon: Image01Icon },
    { id: "videos", label: "Videos", icon: ComputerVideoIcon },
  ] as const;

  return (
    <div className="w-full lg:w-[350px] shrink-0 flex flex-row lg:flex-col gap-[8px] lg:gap-[12px] h-auto lg:h-[276px] lg:sticky lg:top-[160px] overflow-x-auto pb-2 lg:pb-0 scrollbar-none scroll-smooth">
      {filterOptions.map((opt) => {
        const isActive = activeFilter === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onFilterChange(opt.id)}
            className={`flex items-center gap-[8px] lg:gap-[16px] px-[16px] lg:px-[24px] py-[10px] lg:py-0 h-[44px] lg:h-[60px] w-auto lg:w-full rounded-[12px] lg:rounded-[16px] font-satoshi font-semibold text-[16px] lg:text-[20px] transition-all duration-200 cursor-pointer shrink-0 ${
              isActive
                ? "bg-purple-50 text-purple-500"
                : "bg-transparent text-gray-500 hover:bg-gray-50/80"
            }`}
          >
            <HugeiconsIcon
              icon={opt.icon}
              size={24}
              className={`transition-colors duration-200 ${isActive ? "text-purple-500" : "text-gray-500"}`}
              strokeWidth={2}
            />
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
