import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { MapsLocation01Icon, BadgeIndianRupeeIcon } from '@hugeicons/core-free-icons';
import { District, districts, getExplorerDistrictProjectCount } from './projectsData';
import Image from '@/components/common/ImageWithLoader';

interface DistrictSidebarProps {
  activeDistrict: string;
  onSelect: (name: string) => void;
}

export default function DistrictSidebar({ activeDistrict, onSelect }: DistrictSidebarProps) {
  return (
    <div className="w-full xl:w-[432px] xl:shrink-0 flex flex-col gap-10 p-6 xl:p-8 rounded-3xl border border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Image
            src="/logo/infra/explore.svg"
            alt="Districts Icon"
            width={32}
            height={32}
        />
        <span className="font-satoshi font-bold text-2xl leading-[120%] tracking-[0] text-navy-dark">Explore District</span>
      </div>

      {/* 2-column grid of district cards */}
      <div className="grid grid-cols-2 gap-4">
        {districts.map((d: District) => {
          const active = d.name === activeDistrict;
          return (
            <button
              key={d.name}
              onClick={() => onSelect(d.name)}
              className={`w-full text-left flex flex-col gap-3 p-4 rounded-2xl transition-colors cursor-pointer ${
                active
                  ? 'bg-info-light border-2 border-info shadow-[0_0_0_3px_var(--color-info-ring)]'
                  : 'bg-white border border-neutral-200 hover:bg-gray-50'
              }`}
            >
              <span className={`font-satoshi font-medium text-sm leading-[120%] tracking-[0] ${active ? 'text-info' : 'text-gray-400'}`}>
                {getExplorerDistrictProjectCount(d.name)} Projects
              </span>
              <span className={`font-satoshi font-bold text-base leading-[120%] tracking-[0] text-navy`}>
                {d.name}
              </span>
              <div className="flex items-center gap-1.5">
                <div className='w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center'>
                    <Image
                    src="/logo/infra/rupee.svg"
                    alt="Budget Icon"
                    width={12}                    
                    height={12}
                />
                </div>
                <span className={`font-satoshi font-bold text-sm leading-[120%] tracking-[0] ${active ? 'text-info' : 'text-gray-500'}`}>
                  {d.budget}
                </span>
              </div>
            </button>
          );    
        })}
      </div>
    </div>
  );
}
