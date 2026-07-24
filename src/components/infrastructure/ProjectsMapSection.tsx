'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ListViewIcon,
  BadgeIndianRupeeIcon,
  Group01Icon,
  MapsLocation01Icon,
} from '@hugeicons/core-free-icons';
import Image from '@/components/common/ImageWithLoader';

const MeghalayaMap = dynamic(() => import('@/components/home/MeghalayaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] rounded-t-2xl bg-gray-50 flex items-center justify-center">
      <span className="text-gray-400 font-dm-sans text-[15px]">Loading map…</span>
    </div>
  ),
});

const stats = [
  {
    icon: '/logo/infra/category.svg',
    label: 'Projects',
    value: '76',
  },
  {
    icon: '/logo/infra/rupee_blue.svg',
    label: 'Invested',
    value: '₹73.1 Cr',
  },
  {
    icon: '/logo/infra/person.svg',
    label: 'Beneficiaries',
    value: '1,88,650',
  },
  {
    icon: '/logo/infra/explore.svg',
    label: 'Districts',
    value: '12',
  },
];

const ProjectsMapSection = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
      {/* Map */}
      <div className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden">
        <MeghalayaMap />
      </div>

      {/* Stats bar */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 rounded-2xl border border-neutral-200 bg-white"
          >
            <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-gray-500 font-satoshi">
              {stat.label}
            </span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-status-planned-bg flex items-center justify-center shrink-0">
                <Image
                  src={stat.icon}
                  alt={`${stat.label} Icon`}
                  width={stat.label === 'Invested' ? 20 : 22}
                  height={stat.label === 'Invested' ? 20 : 22}
                />
              </div>
              <span className="text-[16px] sm:text-[20px] lg:text-[28px] font-bold font-dm-sans text-navy leading-tight">
                {stat.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMapSection;
