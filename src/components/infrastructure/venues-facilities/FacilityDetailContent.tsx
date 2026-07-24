"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { FacilityDetail } from '@/data/facilitiesData';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, UserGroupIcon, ArrowRight02Icon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';

interface Props {
  facility: FacilityDetail;
}

export default function FacilityDetailContent({ facility }: Props) {
  const router = useRouter();

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative h-[360px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-md">
            <Image
              src={facility.image}
              alt={facility.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="px-3.5 py-1 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-bold font-dm-sans self-start">
              {facility.status}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-satoshi">
              {facility.name}
            </h1>
            <p className="flex items-center gap-1.5 text-sm text-gray-600 font-dm-sans">
              <HugeiconsIcon icon={Location01Icon} size={16} className="text-orange shrink-0" />
              {facility.location}
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-6">
            <h3 className="text-xl font-bold font-satoshi text-navy">About the Venue</h3>
            <p className="text-gray-600 font-dm-sans leading-relaxed text-sm sm:text-base">
              {facility.fullDescription}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80 flex flex-col gap-6">
            <h3 className="text-xl font-bold font-satoshi text-navy">Venue Specifications</h3>
            
            <div className="flex flex-col gap-4 text-sm font-dm-sans">
              <div className="flex justify-between py-2 border-b border-gray-200/60">
                <span className="text-gray-500 font-medium">Spectator Capacity</span>
                <span className="font-bold text-navy">{facility.capacity} seats</span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-200/60">
                <span className="text-gray-500 font-medium">Primary Sports</span>
                <span className="font-bold text-purple">{facility.sports.join(', ')}</span>
              </div>

              <div className="flex flex-col gap-1 py-2 border-b border-gray-200/60">
                <span className="text-gray-500 font-medium">Facilities Included</span>
                <span className="font-semibold text-gray-800">{facility.facilitiesList}</span>
              </div>

              <div className="flex flex-col gap-1 py-2">
                <span className="text-gray-500 font-medium">Lighting &amp; Tech</span>
                <span className="font-semibold text-gray-800">{facility.technology}</span>
              </div>
            </div>

            <button
              onClick={() => router.push(`/infrastructure/venues-facilities/${facility.id}/book`)}
              className="w-full py-4 bg-orange hover:bg-orange/90 text-white font-bold font-satoshi text-base rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Venue Slot</span>
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
