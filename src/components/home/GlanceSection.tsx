'use client';
import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import {Medal05Icon,WorkoutRunIcon,Certificate01Icon,Building05Icon, ArrowRight02Icon} from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const stats = [
  {
    icon: Medal05Icon,
    value: '127',
    label: 'National Medals',
  },
  {
    icon: WorkoutRunIcon,
    value: '4,820+',
    label: 'Athletes Registered',
  },
  {
    icon: Certificate01Icon,
    value: '140+',
    label: 'Certified Coaches',
  },
  {
    icon: Building05Icon,
    value: '18',
    label: 'Associations',
  },
];

const GlanceSection = () => {
  const router = useRouter();
  return (
    <section
      className="w-full bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px]"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col xl:flex-row items-start gap-4">
        {/* Left Content */}
        <div className="flex flex-col justify-between w-full xl:w-[452px] xl:h-[500px] shrink-0 rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-8 gap-6 sm:gap-8">
          <div className="flex flex-col gap-4 w-full">
            <span className="text-purple text-[14px] font-bold tracking-[0.04em] leading-[150%] font-dm-sans">
              Live Performance Data
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-[36px] sm:text-[44px] lg:text-[60px] font-bold text-navy leading-[120%] font-satoshi tracking-[0%]">
                Meghalaya
              </span>
              <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-navy leading-[120%] font-satoshi tracking-[0%]">
                At a Glance
              </span>
            </div>
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] text-gray-500 font-dm-sans">
              Track medal tallies, athlete registrations, facility utilization, and sport-wise performance metrics — transparent data from Meghalaya&apos;s systems.
            </p>
          </div>
          <div>
            <button onClick={() => router.push('/coming-soon')} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-[12px] pt-[16px] pr-[26px] pb-[16px] pl-[32px] text-[14px] sm:text-[16px] font-normal text-white font-satoshi leading-[150%] tracking-[0%] transition-all duration-300 whitespace-nowrap bg-purple hover:opacity-90">
              Open Dashboard
              <HugeiconsIcon icon={ArrowRight02Icon} width={24} height={24} color={colors.white} strokeWidth={2.5}/>
            </button>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[24px] sm:rounded-[32px] bg-white p-4 sm:p-6 min-h-[180px] sm:min-h-[220px] lg:min-h-[242px]"
            >
              <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] rounded-[12px] sm:rounded-[16px] bg-purple-50 flex items-center justify-center">
                <HugeiconsIcon icon={stat.icon} width={40} height={40} color={colors.purple} strokeWidth={2} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[120%] text-navy font-satoshi tracking-[0.02em]">
                  {stat.value}
                </span>
                <span className="text-[13px] sm:text-[15px] lg:text-[18px] font-medium leading-[150%] text-gray-500 font-dm-sans tracking-[-0.02em]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlanceSection;
