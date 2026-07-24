'use client';

import React, { useState } from 'react';
import { Filter, districts } from './projectsData';
import ProjectsExplorerHeader from './ProjectsExplorerHeader';
import DistrictSidebar from './DistrictSidebar';
import ProjectsDetailPanel from './ProjectsDetailPanel';

export default function ProjectsExplorerSection() {
  const [activeDistrict, setActiveDistrict] = useState('East Khasi Hills');
  const [filter, setFilter]= useState<Filter>('All');
  const [search, setSearch]= useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const districtData = districts.find((d) => d.name === activeDistrict) ?? districts[0];

  const handleDistrictSelect = (name: string) => {
    setActiveDistrict(name);
    setFilter('All');
    setSearch('');
    setYearFilter('');
    setTypeFilter('');
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10">
      <ProjectsExplorerHeader />

      <div className="w-full flex flex-col xl:flex-row gap-6 items-start">
        <DistrictSidebar
          activeDistrict={activeDistrict}
          onSelect={handleDistrictSelect}
        />

        <ProjectsDetailPanel
          activeDistrict={activeDistrict}
          districtData={districtData}
          filter={filter}
          search={search}
          yearFilter={yearFilter}
          typeFilter={typeFilter}
          onFilterChange={setFilter}
          onSearchChange={setSearch}
          onYearChange={setYearFilter}
          onTypeChange={setTypeFilter}
        />
      </div>
    </div>
  );
}
