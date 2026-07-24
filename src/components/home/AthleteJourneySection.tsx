"use client";

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserGroupIcon,
  Home01Icon,
  Target01Icon,
  ChampionIcon,
  GlobalIcon,
  ArrowRight02Icon,
  WorkflowSquare01Icon,
  LicenseIcon,
} from '@hugeicons/core-free-icons';

const journeySteps = [
  {
    step: '01',
    title: 'Community Outreach',
    subtitle: 'Identification',
    icon: Home01Icon,
    description: 'Schools & local communities across Delhi-NCR identify interested kids aged 8-11.',
    highlight: 'Grassroots Level',
  },
  {
    step: '02',
    title: 'Club Formation',
    subtitle: 'Team Building',
    icon: UserGroupIcon,
    description: 'Schools register as Single-School or Cluster Clubs (4 teams of 12-14 players: U-11 & U-9).',
    highlight: '4 Squads / Club',
  },
  {
    step: '03',
    title: 'Athlete Registration',
    subtitle: 'GMS Onboarding',
    icon: LicenseIcon,
    description: 'Athletes complete digital registration on GMS portal with verified age and identity proof.',
    highlight: 'Digital Verification',
  },
  {
    step: '04',
    title: 'Sub-League Comp',
    subtitle: 'Pool Matches',
    icon: ChampionIcon,
    description: 'Phase 1: Round-robin pool matches generate real-time performance data on GMS portal.',
    highlight: 'Phase 1 Competition',
  },
  {
    step: '05',
    title: 'Main League',
    subtitle: 'Knockout Stage',
    icon: ChampionIcon,
    description: 'Phase 2: 32-team knockout bracket to crown Delhi State Champions.',
    highlight: 'Phase 2 Championship',
  },
  {
    step: '06',
    title: 'Talent Pathway',
    subtitle: 'Scouting & Growth',
    icon: GlobalIcon,
    description: 'State & AIFF scouting database selection for long-term athletic development.',
    highlight: 'National Pathway',
  },
];

const AthleteJourneySection = () => {
  return (
    <section className="relative w-full bg-[#07192e] text-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 overflow-hidden">
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F58220]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
            <HugeiconsIcon icon={WorkflowSquare01Icon} size={15} color="#F58220" />
            <span className="text-xs sm:text-sm font-bold font-dm-sans tracking-wider text-white uppercase">
              ATHLETE DEVELOPMENT PATHWAY
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold text-white leading-tight font-satoshi tracking-tight">
            The MCD Mini League <span className="text-[#F58220]">Athlete Journey</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-white/80 font-dm-sans leading-relaxed">
            A structured, technology-backed 6-step pathway taking young grassroots talent from local communities to national sports recognition.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {journeySteps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white/[0.04] backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-[#F58220]/60 hover:bg-white/[0.08] transition-all duration-300 group relative shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
            >
              <div className="flex flex-col gap-5">
                {/* Step Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black text-[#F58220] font-satoshi px-3 py-1 rounded-full bg-[#F58220]/15 border border-[#F58220]/30 tracking-wide uppercase">
                      Step {item.step}
                    </span>
                    <span className="text-xs font-semibold text-white/50 font-dm-sans">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#F58220] flex items-center justify-center transition-all duration-300 shadow-inner group-hover:shadow-orange-500/30">
                    <HugeiconsIcon
                      icon={item.icon}
                      size={24}
                      color="#FFFFFF"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title & Highlight Tag */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-satoshi leading-snug group-hover:text-[#F58220] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-[#F58220]/90 font-dm-sans">
                    {item.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 font-dm-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Step Indicator Bar */}
              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/60 font-dm-sans">
                <span>Phase 0{index + 1} of 06</span>
                <span className="flex items-center gap-1 text-[#F58220] opacity-0 group-hover:opacity-100 transition-opacity font-bold font-satoshi">
                  Learn Details
                  <HugeiconsIcon icon={ArrowRight02Icon} size={14} color="#F58220" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteJourneySection;
