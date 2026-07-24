'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';
import {UserMultipleIcon,Shield01Icon,DocumentValidationIcon,Files01Icon,Location01Icon,Briefcase09Icon,Download01Icon,QuestionIcon} from '@hugeicons/core-free-icons';
import { colors } from "@/theme/colors";

interface QuickAccessItem {
  id: string;
  label: string;
  icon: IconSvgElement;
  link?: string;
}

const quickAccessItems: QuickAccessItem[] = [
  {
    id: 'athlete-directory',
    label: 'ATHLETE DIRECTORY',
    icon: UserMultipleIcon,
    link: '/sports-ecosystem/athletes-directory',
  },
  {
    id: 'associations',
    label: 'ASSOCIATIONS',
    icon: Shield01Icon,
  },
  {
    id: 'schemes',
    label: 'SCHEMES',
    icon: DocumentValidationIcon,
    link:'/schemes'
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    icon: Files01Icon,
    link:"/infrastructure/projects"
  },
  {
    id: 'venues',
    label: 'VENUES',
    icon: Location01Icon,
    link:'/infrastructure/venues-facilities'
  },
  {
    id: 'tenders',
    label: "TENDERS / RFP'S",
    icon: Briefcase09Icon,
  },
  {
    id: 'media-doc',
    label: 'MEDIA & DOC',
    icon: Download01Icon,
  },
  {
    id: 'grievance',
    label: 'GRIEVANCE',
    icon: QuestionIcon,
  },
];

const QuickAccess = () => {
  const [hoveredItem, setHoveredItem] = useState('');
  const router = useRouter();
  const FALLBACK_COMING_SOON_ROUTE = '/coming-soon';

  const handleCardClick = (link?: string) => {
    router.push(link ?? FALLBACK_COMING_SOON_ROUTE);
  };

  return (
    <section className="relative z-20 h-0 overflow-visible w-full">
      <div className="w-full max-w-[1392px] mx-auto -translate-y-1/2 px-4 lg:px-0">
        <div className="flex flex-row gap-4 py-4 h-[224px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickAccessItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem('')}
              className={`
                relative rounded-[24px] sm:rounded-[32px] min-w-[120px] sm:min-w-[140px] md:min-w-[160px] w-[120px] sm:w-[140px] md:w-[160px] h-[140px] sm:h-[160px] md:h-[176px] transition-transform duration-300 shrink-0 shadow-[0_0_30px_0_rgba(16,24,40,0.12)]
                ${hoveredItem === item.id 
                  ? '-translate-y-4 p-[1px]' 
                  : 'border border-neutral-100'
                }
              `}
              style={{
                ...(hoveredItem === item.id && {
                  background: 'var(--color-purple)',
                }),
              }}
            >
              <button
                onClick={() => handleCardClick(item.link)}
                className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 gap-4 sm:gap-8 rounded-[23px] sm:rounded-[31px] bg-white transition-all duration-200"
              >
                <div className="w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-xl px-1 bg-primary/5">
                  <HugeiconsIcon icon={item.icon} width={32} height={32} color={colors.primary} strokeWidth={1.5}/>
                </div>
                {hoveredItem === item.id ? (
                  <span className="flex items-center gap-1 font-satoshi text-[14px] sm:text-[18px] font-bold leading-[120%] tracking-[0.01em] bg-clip-text text-center">
                    {item.label}
                  </span>
                ) : (
                  <span className="text-[14px] sm:text-[18px] font-bold text-navy tracking-[0.01em] font-satoshi text-center leading-[120%]">
                    {item.label}
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
