"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, SparklesIcon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] bg-[#07192e] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Left Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sports.jpg"
          alt="MCD Mini League Sports Action"
          fill
          className="object-cover object-center"
          priority
          unoptimized
          sizes="100vw"
        />
        {/* Dark Blue Gradient Overlays matching reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/95 via-[#09223f]/85 to-[#0b284c]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192e] via-transparent to-[#07192e]/20" />
      </div>

      {/* Hero Content Box (Left-Aligned Layout) */}
      <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-20">
        <div className="flex flex-col items-start text-left max-w-2xl gap-5 sm:gap-6">
          {/* Main Stacked Headline */}
          <div className="flex flex-col leading-none font-extrabold tracking-tight font-satoshi">
            <span className="text-[52px] sm:text-[72px] md:text-[88px] lg:text-[104px] text-white uppercase drop-shadow-sm">
              MCD MINI
            </span>
            <span className="text-[52px] sm:text-[72px] md:text-[88px] lg:text-[104px] text-[#F58220] uppercase drop-shadow-sm">
              LEAGUE
            </span>
          </div>

          {/* Subheadline */}
          <h2 className="text-[20px] sm:text-[26px] md:text-[30px] font-bold text-white font-satoshi leading-tight">
            Building Delhi&apos;s Largest Community Sports Ecosystem.
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-[17px] font-normal leading-[160%] text-white/85 max-w-xl font-dm-sans">
            A city-wide grassroots initiative transforming Delhi&apos;s sporting landscape through community participation, club development, athlete growth and structured competition.
          </p>

          {/* CTA Buttons Row (Left Aligned) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
            {/* Orange Main CTA */}
            <button
              onClick={() => router.push('/registration')}
              className="bg-[#F58220] hover:bg-[#e07318] text-white px-7 py-3.5 rounded-xl font-bold text-[16px] font-satoshi transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              Register Now
              <HugeiconsIcon icon={ArrowRight02Icon} size={20} color={colors.white} strokeWidth={2.5} />
            </button>

            {/* Outlined Button */}
            <button
              onClick={() => router.push('/about/listing-of-sports-and-youth-clubs')}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-[16px] font-satoshi transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
            >
              Explore Clubs
            </button>

            {/* Ghost Link Button */}
            <button
              onClick={() => router.push('/events')}
              className="text-white hover:text-[#F58220] px-4 py-3.5 font-semibold text-[16px] font-satoshi transition-colors cursor-pointer text-center"
            >
              View Fixtures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
