import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { Filter } from './projectsData';

interface ProjectsFilterBarProps {
  filter: Filter;
  search: string;
  yearFilter: string;
  typeFilter: string;
  years: number[];
  types: string[];
  onFilterChange: (f: Filter) => void;
  onSearchChange: (v: string) => void;
  onYearChange: (v: string) => void;
  onTypeChange: (v: string) => void;
}

export default function ProjectsFilterBar({
  filter,
  search,
  yearFilter,
  typeFilter,
  years,
  types,
  onFilterChange,
  onSearchChange,
  onYearChange,
  onTypeChange,
}: ProjectsFilterBarProps) {
  return (
    <div className="font-dm-sans w-full flex flex-col gap-3">
      {/* search + dropdowns */}
      <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="relative w-full sm:flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <HugeiconsIcon icon={Search01Icon} size={16} color="currentColor" strokeWidth={1.5} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-12 pl-10 pr-4 py-3 font-dm-sans text-base rounded-xl border border-gray-300 bg-white outline-none focus:border-focus-blue text-gray-500 placeholder:text-gray-500 gap-4"
          />
        </div>

        <div className="relative w-full sm:w-[116px] sm:shrink-0">
          <select
            value={yearFilter}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full h-12 appearance-none font-dm-sans px-4 text-base rounded-xl border border-gray-300 outline-none text-gray-500 placeholder:text-gray-500 bg-white cursor-pointer pr-8"
          >
            <option value="">Year</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <HugeiconsIcon icon={ArrowDown01Icon} size={14} color="currentColor" strokeWidth={1.5} />
          </span>
        </div>

        <div className="relative w-full sm:w-[174px] sm:shrink-0">
          <select
            value={typeFilter}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full h-12 appearance-none font-dm-sans px-4 text-base rounded-xl border border-gray-300 outline-none text-gray-500 placeholder:text-gray-500 bg-white cursor-pointer pr-8"
          >
            <option value="">Project Type</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <HugeiconsIcon icon={ArrowDown01Icon} size={14} color="currentColor" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* filter tabs */}
      <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
        {(['All', 'Ongoing', 'Completed'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`flex-1 sm:flex-none h-10 px-3 sm:px-4 rounded-lg cursor-pointer transition-colors font-semibold text-[14px] sm:text-[16px] leading-[150%] tracking-[0] ${
              filter === f
                ? 'bg-info text-white'
                : 'bg-neutral-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
