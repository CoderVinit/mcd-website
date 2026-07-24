'use client';

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {Megaphone01Icon} from '@hugeicons/core-free-icons';
import { colors } from "@/theme/colors";

const notices = [
  'NOTICE: ONLINE REGISTRATION FOR THE 5TH MEGHALAYA GAMES 2026 IS NOW OPEN. LAST DATE TO APPLY IS 15TH APRIL 2026.',
  'TENDER: UPGRADATION OF PA SANGMA SPORTS COMPLEX, TURA — BID SUBMISSION DEADLINE: 20TH APRIL 2026.',
  'NOTICE: COACHING CAMP FOR ATHLETICS BEGINS 1ST MAY 2026 AT J.N. SPORTS COMPLEX, SHILLONG.',
];

const NoticeBar = () => {
  return (
    <div
      className="w-full h-[60px] flex items-center px-4 sm:px-6 md:px-10 lg:px-[64px] py-[10px] gap-4 overflow-hidden bg-orange/5"
    >
      {/* Latest Badge */}
      <span className="shrink-0 w-[77px] h-[28px] rounded-[100%] flex items-center justify-center pl-3 pr-[14px] py-2 rounded-full bg-orange text-white text-[12px] sm:text-[12px] font-dm-sans leading-[150%] gap-1">
        <HugeiconsIcon icon={Megaphone01Icon} width={14} height={14} color={colors.white} strokeWidth={1.5} />
        Latest
      </span>

      {/* Scrolling Text */}
      <div className="flex-1 overflow-hidden relative rounded-lg px-4 py-2 group">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-2 shrink-0 group-hover:[animation-play-state:paused]">
            {notices.map((notice, i) => (
              <span
                key={i}
                className="text-[14px] font-semibold text-navy font-dm-sans leading-[150%] tracking-[0%] inline-flex items-center"
              >
                {notice}
                <span className="mx-4 text-gray-300">|</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center gap-2 shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {notices.map((notice, i) => (
              <span
                key={i}
                className="text-[14px] font-semibold text-navy font-dm-sans leading-[150%] tracking-[0%] inline-flex items-center"
              >
                {notice}
                <span className="mx-4 text-gray-300">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
