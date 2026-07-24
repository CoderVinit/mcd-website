"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon, StarIcon, User02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { featuredAthletes, type AthleteProfile } from '@/data/athletes';

const AthleteCard = ({ athlete, featured = false }: { athlete: AthleteProfile; featured?: boolean }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/sports-ecosystem/athletes-directory/${athlete.slug}`)}
      className={`flex cursor-pointer flex-col items-center rounded-3xl border border-gray-200/80 bg-white w-full ${
        featured ? 'lg:w-[420px]' : 'lg:w-[360px]'
      } p-3.5 gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
    >
      {/* Image with name overlay */}
      <div className={`relative w-full rounded-2xl overflow-hidden ${featured ? 'h-[320px] sm:h-[380px]' : 'h-[260px] sm:h-[320px]'}`}>
        <Image src={athlete.image} alt={athlete.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-orange/90 text-white text-xs font-bold font-dm-sans backdrop-blur-md shadow-sm">
          MML Scouting Top Performer
        </div>

        {/* Name plate */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
          <span className="text-white font-satoshi font-extrabold text-xl sm:text-2xl leading-tight">
            {athlete.name}
          </span>
          <span className="text-xs text-white/80 font-dm-sans">
            {athlete.sport} • MML Talent Pool
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between w-full px-4 py-2.5 bg-slate-50 rounded-xl text-xs font-dm-sans font-bold text-navy">
        <span className="flex items-center gap-1.5 text-orange">
          <HugeiconsIcon icon={StarIcon} size={15} />
          U-11 Division
        </span>
        <span className="text-gray-500 font-medium">MML Digital ID Verified</span>
      </div>
    </div>
  );
};

const FeaturedAthletesSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-slate-50/80 py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
              <HugeiconsIcon icon={User02Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                FEATURED ATHLETES
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
              MCD Mini League Rising Stars
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans">
              Scouted grassroots talent from U-9 and U-11 Football divisions across Delhi-NCR.
            </p>
          </div>

          <button
            onClick={() => router.push('/sports-ecosystem/athletes-directory')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-2 border-navy rounded-xl px-7 py-3.5 text-sm text-navy font-satoshi font-bold hover:bg-navy hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            All MML Athletes
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Athletes Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 sm:gap-8">
          <AthleteCard athlete={featuredAthletes[0]} />
          <AthleteCard athlete={featuredAthletes[1]} featured />
          <AthleteCard athlete={featuredAthletes[2]} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedAthletesSection;
