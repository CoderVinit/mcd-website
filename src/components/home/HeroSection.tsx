"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full bg-[#07192e] overflow-hidden flex flex-col items-center">
      {/* Hero Banner Image Container */}
      <div className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[940px] flex items-center">
        <Image
          src="/images/MCD/heroBanner.png"
          alt="MCD Mini League Delhi Hero Banner"
          fill
          className="object-cover object-center"
          priority
          unoptimized
          sizes="100vw"
        />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/70 via-[#07192e]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192e]/60 via-transparent to-transparent" />

        {/* Hero Overlay Content */}
        <div className="relative z-10 w-full max-w-[1312px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col items-start gap-5">
          {/* Main Stacked Headline */}
          <div className="flex flex-col leading-none font-extrabold tracking-tight font-satoshi">
            <span className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[100px] text-white uppercase drop-shadow-md">
              MCD MINI
            </span>
            <span className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[100px] text-[#F58220] uppercase drop-shadow-md">
              LEAGUE
            </span>
          </div>

          {/* Subheadline */}
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-satoshi leading-tight max-w-xl">
            Building Delhi&apos;s Largest Grassroots Community Football Ecosystem.
          </h2>

          <p className="text-sm sm:text-base text-gray-200 font-dm-sans max-w-lg leading-relaxed">
            Organized by Municipal Corporation of Delhi (MCD) &amp; SITDS across Under-9 and Under-11 divisions featuring 80 registered clubs and 320 teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
            <button
              onClick={() => router.push('/registration')}
              className="bg-[#F58220] hover:bg-[#e07318] text-white px-7 py-3.5 rounded-xl font-extrabold text-[16px] font-satoshi transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <span>Register Club</span>
              <HugeiconsIcon icon={ArrowRight02Icon} size={20} color={colors.white} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => router.push('/tournaments/fixtures')}
              className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-[16px] font-satoshi transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
            >
              View Match Fixtures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
