"use client";

import React, { useState } from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Search01Icon, UserGroupIcon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { facilitiesData, FacilityDetail } from '@/data/facilitiesData';
import { useRouter } from 'next/navigation';

export default function SportsComplexesSection() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filteredFacilities = facilitiesData.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.location.toLowerCase().includes(search.toLowerCase()) ||
    f.sports.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:px-10 lg:py-24 lg:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase bg-orange/10 px-3.5 py-1 rounded-full border border-orange/20">
            LEAGUE VENUES &amp; STADIUMS
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy font-satoshi">
            Sports Complexes &amp; Venues
          </h2>
          <p className="text-gray-600 font-dm-sans text-base">
            High-standard football pitch complexes and multi-purpose sports arenas hosting MCD Mini League matches across Delhi-NCR.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto w-full">
          <HugeiconsIcon icon={Search01Icon} size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search venue by stadium name, location or sport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm font-dm-sans text-gray-800 shadow-xs focus:outline-none focus:border-purple"
          />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility: FacilityDetail) => (
            <div
              key={facility.id}
              onClick={() => router.push(`/infrastructure/venues-facilities/${facility.id}`)}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold font-dm-sans text-navy shadow-xs">
                  {facility.status}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-satoshi text-navy group-hover:text-purple transition-colors">
                    {facility.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-dm-sans">
                    <HugeiconsIcon icon={Location01Icon} size={15} className="text-orange shrink-0" />
                    <span className="line-clamp-1">{facility.location}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-dm-sans line-clamp-2 mt-1">
                    {facility.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-dm-sans">
                  <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                    <HugeiconsIcon icon={UserGroupIcon} size={15} className="text-gray-400" />
                    Capacity: {facility.capacity}
                  </span>
                  <span className="font-bold text-purple flex items-center gap-1">
                    View Details
                    <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
