"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';


interface Sport {
  name: string;
  icon: string;
  height?: number;
  width?: number;
}

const sports: Sport[] = [
  { name: 'Mawpoin', icon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098676_mawpion.svg',height:150,width:150 },
  { name: 'Rah Moo Khrah', icon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098687_RahMooKhrah.svg',height:150,width:171.09 },
  // { name: 'Koinde Baal', icon: '/images/KoindeBaal.svg',height:150,width:150 },
  { name: "Wa'pong Sika", icon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098693_WapongSika.svg',height:165.42,width:157.01 },
];

const TraditionalSportsSection = () => {
  const router = useRouter();

  return (
    <section
      className="w-full bg-purple flex flex-col items-center py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px] gap-8 sm:gap-10 lg:gap-[60px]"
    >
      {/* Header */}
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center gap-4">
        <span className="text-blue-50 text-[14px] font-bold tracking-[0.04em] leading-[150%] font-dm-sans">
          Heritage & Culture
        </span>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold text-white leading-[120%] font-satoshi tracking-[0%]">
          Traditional Sports of Meghalaya
        </h2>
        <p className="max-w-[756px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] text-gray-50 tracking-[0%] font-dm-sans">
          Susegad Meghalaya&apos;s living sporting heritage — preserved and promoted by Meghalaya.
        </p>
      </div>

      {/* Inner container */}
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-10 sm:gap-12 lg:gap-[80px]">
        {/* Sport Cards */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full aspect-square max-w-[300px] mx-auto rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden px-4 sm:px-6 lg:px-[32px] pt-4 sm:pt-6 lg:pt-[24px] pb-4 sm:pb-6 lg:pb-[20px]"
            style={{ background: 'rgba(255, 255, 255, 0.1)', boxShadow: 'inset 0 10px 10px rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex w-full flex-1 items-center justify-center">
              <Image
                src={sport.icon}
                alt={sport.name}
                width={sport.width || 150}
                height={sport.height || 150}
                className="opacity-90 w-[60px] sm:w-[80px] lg:w-auto max-w-full h-auto"
              />
            </div>
            <span className="w-full text-white font-satoshi text-[16px] sm:text-[18px] lg:text-[24px] font-bold tracking-[0.02em] leading-[150%] text-center">
              {sport.name}
            </span>
          </div>
        ))}
        </div>

        {/* Button */}
        <button onClick={() => router.push('/sports')} className="flex items-center gap-2 border border-white rounded-[12px] pt-[16px] pr-[26px] pb-[16px] pl-[32px] text-[16px] font-normal text-white font-satoshi leading-[150%] tracking-[0%] hover:bg-white hover:text-secondary transition-all duration-300">
          Explore all sports
          <HugeiconsIcon icon={ArrowRight02Icon} width={24} height={24} color="currentColor" strokeWidth={2.5}/>
        </button>
      </div>
    </section>
  );
};

export default TraditionalSportsSection;
