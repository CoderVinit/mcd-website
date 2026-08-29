"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon, Target01Icon, HandshakeIcon, Analytics01Icon, InformationCircleIcon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const AboutMovementSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side - Image Container */}
        <div className="w-full lg:w-1/2 relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 shrink-0 group">
          <Image
            src="/images/hero-sports.jpg"
            alt="MCD Mini League Youth Action"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-orange font-dm-sans">
              GRASSROOTS TALENT PATHWAY
            </span>
            <p className="text-sm sm:text-base font-bold text-navy font-satoshi mt-1 leading-snug">
              Developing 4,400+ young athletes across Delhi-NCR in Football (11v11).
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
            <HugeiconsIcon icon={InformationCircleIcon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              ABOUT THE MOVEMENT
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
            Grassroots Scouting &amp; Digital Tracking Ecosystem
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-[160%] text-gray-600 font-dm-sans">
            The MCD Mini League (MML) is a landmark grassroots sports initiative by the Municipal Corporation of Delhi (MCD) in partnership with Khelo Tech. Each club fields 4 teams (12-14 players per team: U-11 Girls, U-11 Boys, U-9 Girls &amp; U-9 Boys) competing in Football (11v11).
          </p>


          <div className="pt-2">
            <button
              onClick={() => router.push('/about')}
              className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy/90 text-white px-7 py-4 rounded-xl font-bold text-[15px] font-satoshi transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
            >
              Learn More About MML Movement
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} color={colors.white} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovementSection;
