'use client';

import { ArrowRight02Icon,UserMultipleIcon,Download01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from '@/components/common/ImageWithLoader';
import React from 'react';
import {useRouter} from 'next/navigation';
import { colors } from "@/theme/colors";

const schemes = [
  {
    type: 'Scholarship',
    typeColor: 'text-emerald',
    audience: 'Athletes',
    title: 'Eklavya Sports Scholarship',
    description: 'Financial support for promising athletes to pursue their sports career without economic burden.',
    benefit: '₹5,000–₹20,000/month based on performance level',
    deadline: '14 Apr, 2026',
  },
  {
    type: 'Grant',
    typeColor: 'text-emerald',
    audience: 'Club & Academies',
    title: 'Sports Infrastructure Grant',
    description: 'Capital grants for developing grassroots sports infrastructure in rural Meghalaya.',
    benefit: 'Up to ₹25 lakh for facility development',
    deadline: 'March 31, 2026',
  },
  {
    type: 'Funding',
    typeColor: 'text-emerald',
    audience: 'Elite Athlete',
    title: 'Coaches Honorarium Scheme',
    description: 'Monthly honorarium for qualified coaches mentoring athletes in government sports facilities.',
    benefit: '₹15,000–₹35,000/month honorarium',
    deadline: 'Rolling Applications',
  },
];

const SchemesSection = () => {
  const router = useRouter();

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px] flex flex-col gap-2">
      <div className="w-full flex flex-col gap-15">
        {/* Header */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between sm:items-end gap-6 sm:gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-purple text-[14px] font-bold tracking-[0.04em] leading-[150%] font-dm-sans">
              GOVERNMENT SUPPORT
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold text-navy-dark leading-[120%] tracking-normal font-satoshi">
              Sports Schemes & Awards
            </h2>
            <p className="max-w-[546px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] tracking-normal text-gray-500 font-dm-sans">
              Financial support, infrastructure grants, coaching honoraria, and awards from the Government of Meghalaya.
            </p>
          </div>
          <button onClick={() => router.push('/schemes')} className="w-full sm:w-auto flex items-center justify-center gap-3 border-[1.5px] border-gray-900 rounded-xl pt-4 pb-4 pr-[26px] pl-8 text-[16px] font-satoshi font-normal text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shrink-0">
            All Schemes
            <HugeiconsIcon icon={ArrowRight02Icon} width={24} height={24} color="currentColor" strokeWidth={2.5}/>
          </button>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col gap-5 sm:gap-8 border border-neutral-200"
            >
              {/* Tags */}
              <div className="flex justify-between items-center">
                <span className="flex flex-row items-center h-7 px-3 gap-[6px] rounded-lg bg-purple-50 text-[14px] font-semibold leading-[150%] text-purple font-dm-sans">
                  {scheme.type}
                </span>
                <span className="flex items-center gap-1 h-7 px-3 rounded-lg bg-neutral-100 text-sm font-semibold leading-[150%] text-navy font-dm-sans">
                  <HugeiconsIcon icon={UserMultipleIcon} width={16} height={16} color={colors.navy} />
                  {scheme.audience}
                </span>
              </div>

              {/* Title */}
              <div className="relative w-full group/title">
                <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[24px] font-bold text-black leading-[150%] tracking-[0.02em] font-satoshi cursor-pointer">
                  {scheme.title}
                </h3>
                <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden group-hover/title:block w-max max-w-[280px] rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-lg">
                  <span className="text-[13px] font-dm-sans font-normal text-gray-500 leading-[150%] whitespace-normal">
                    {scheme.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] font-normal leading-[150%] tracking-normal text-gray-500 font-dm-sans">
                {scheme.description}
              </p>

              {/* Benefit Badge */}
              <div className="w-full flex items-center gap-2 rounded-lg pt-2 pb-2 pr-3 pl-3 bg-emerald-dark/5 border border-emerald-dark/10">
                <span className="text-[12px] font-semibold leading-[150%] tracking-normal text-emerald-dark font-dm-sans">
                  {scheme.benefit}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border border-gray-200"></div>

              {/* Footer */}
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal leading-[150%] tracking-normal text-gray-500 font-dm-sans">Deadline</span>
                  <span className="text-[14px] font-medium leading-[150%] tracking-normal text-navy font-dm-sans">{scheme.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => router.push('/coming-soon')} className="flex flex-row items-center gap-2 h-[46px] pt-4 pb-4 pr-4 pl-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-300">
                    <HugeiconsIcon icon={Download01Icon} width={20} height={20} color={colors.gray500} />
                    <span className="text-[16px] font-normal leading-[150%] tracking-normal text-gray-500 font-satoshi">Pdf</span>
                  </button>
                  <button onClick={() => router.push('/coming-soon')} className="flex flex-row items-center gap-2 h-[46px] pt-4 pb-4 pr-3 pl-4 rounded-xl bg-purple hover:opacity-90 transition-all duration-300">
                    <span className="text-[16px] font-normal leading-[150%] tracking-normal text-white font-satoshi">Apply</span>
                   <HugeiconsIcon icon={ArrowRight02Icon} width={20} height={20} color={colors.white} strokeWidth={2}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
