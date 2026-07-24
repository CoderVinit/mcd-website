import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ListViewIcon,
  BadgeIndianRupeeIcon,
  UserMultiple02Icon,
} from '@hugeicons/core-free-icons';
import { Project, District, Filter, allProjects, getExplorerProjectsForDistrict } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectsFilterBar from './ProjectsFilterBar';
import Image from '@/components/common/ImageWithLoader';

interface ProjectsDetailPanelProps {
  activeDistrict: string;
  districtData: District;
  filter: Filter;
  search: string;
  yearFilter: string;
  typeFilter: string;
  onFilterChange: (f: Filter) => void;
  onSearchChange: (v: string) => void;
  onYearChange: (v: string) => void;
  onTypeChange: (v: string) => void;
}

export default function ProjectsDetailPanel({
  activeDistrict,
  districtData,
  filter,
  search,
  yearFilter,
  typeFilter,
  onFilterChange,
  onSearchChange,
  onYearChange,
  onTypeChange,
}: ProjectsDetailPanelProps) {
  const years = [...new Set(allProjects.map((p) => p.year))].sort((a, b) => b - a);
  const types = [...new Set(allProjects.map((p) => p.type))];

  const districtProjects = getExplorerProjectsForDistrict(activeDistrict);

  const filtered: Project[] = districtProjects.filter((p) => {
    const matchFilter = filter === 'All' || p.status === filter;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    const matchYear   = !yearFilter || String(p.year) === yearFilter;
    const matchType   = !typeFilter || p.type === typeFilter;
    return matchFilter && matchSearch && matchYear && matchType;
  });

  const visibleBeneficiaries = filtered.reduce((sum, p) => sum + p.beneficiaries, 0);

  return (
    <div className="w-full flex-1 min-w-0 flex flex-col gap-6 lg:gap-10 p-4 sm:p-6 lg:p-8 rounded-3xl border border-neutral-200 bg-white">

      {/* district name + meta stats */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="font-satoshi font-bold text-2xl leading-[120%] tracking-[0] text-navy-dark">{activeDistrict}</h3>
        <div className="flex flex-row flex-wrap items-center gap-4 text-base text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className='w-6 h-6 flex items-center justify-center bg-blue-50 rounded-[4.8px]'>
                <Image
                src="/logo/infra/category.svg"
                alt="Projects Icon"
                width={15}
                height={15}
            />
            </div>
            <span className='font-satoshi text-base text-navy font-medium'>{filtered.length} Projects</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className='w-6 h-6 flex items-center justify-center bg-blue-50 rounded-[4.8px]'>
                <Image
                src="/logo/infra/rupee_blue.svg"
                alt="Budget Icon"
                width={12}
                height={12}
            />
            </div>
            <span className='font-satoshi text-base text-navy font-medium'>{districtData.budget}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className='w-6 h-6 flex items-center justify-center bg-blue-50 rounded-[4.8px]'>
                <Image
                src="/logo/infra/person.svg"
                alt="Beneficiaries Icon"
                width={15}
                height={15}
                className='text-blue-900'
            />
            </div>
            <span className='font-satoshi text-base text-navy font-medium'>{visibleBeneficiaries.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <ProjectsFilterBar
        filter={filter}
        search={search}
        yearFilter={yearFilter}
        typeFilter={typeFilter}
        years={years}
        types={types}
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        onYearChange={onYearChange}
        onTypeChange={onTypeChange}
      />

      {/* project cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-400 text-[14px] font-satoshi">
          No projects found for the selected filters.
        </div>
      )}
    </div>
  );
}
