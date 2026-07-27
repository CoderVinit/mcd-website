"use client";

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Award01Icon } from '@hugeicons/core-free-icons';

interface Partner {
  name: string;
  category: string;
  logo?:string
}

const partners: Partner[] = [
  { name: 'Municipal Corporation of Delhi', category: 'Title Partner', logo: '/logo/MCD/MCOD.png' },
  { name: 'SITDS Delhi', category: 'Implementation Partner', logo: '/logo/MCD/SITDS.png' },
  { name: 'Vector X', category: 'Equipment Partner', logo: '/logo/MCD/vectorxindia_logo.jpg' },
  { name: 'Powerade', category: 'Hydration Partner' },
  { name: 'Sports Authority of India', category: 'Government Partner' },
  { name: 'Khelo Tech', category: 'Technology Partner' },
  { name: 'AIFF Grassroots', category: 'Governing Body' },
];

export default function SponsorsSection() {
  // Duplicate array 4x for smooth continuous infinite marquee scroll
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-white py-16 px-4 border-t border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={Award01Icon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              OFFICIAL PARTNERS &amp; SPONSORS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-satoshi">
            Supported by Leading Sports &amp; Institutional Partners
          </h2>
        </div>

        {/* Marquee Track Container with Side Gradient Fade Overlays */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left Fade Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Right Fade Gradient */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Infinite Marquee Track */}
          <div className="flex items-center gap-6 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer select-none">
            {marqueeItems.map((partner, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3.5 bg-slate-50/90 hover:bg-white border border-gray-200/80 hover:border-purple/30 rounded-2xl px-5 py-3.5 shadow-2xs hover:shadow-lg transition-all duration-300 group shrink-0"
              >
                {partner.logo && (
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-xl bg-white p-1 border border-gray-200/60 shadow-2xs">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center">
                  <span className="text-sm sm:text-base font-extrabold text-navy group-hover:text-purple tracking-wider font-satoshi uppercase whitespace-nowrap transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 font-dm-sans">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
