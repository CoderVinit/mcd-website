"use client";

import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar03Icon, Location01Icon, ArrowRight02Icon, Clock01Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const sampleFixtures = [
  {
    date: 'Saturday, Nov 15',
    time: '09:00 AM',
    sport: 'Football 11v11',
    category: 'U-11 Boys (Pool A)',
    teamA: 'Central MCD Strikers',
    teamB: 'Rohini Lions Club',
    venue: 'Thyagaraj Stadium (Main Pitch 1)',
  },
  {
    date: 'Saturday, Nov 15',
    time: '10:30 AM',
    sport: 'Football 11v11',
    category: 'U-11 Girls (Pool B)',
    teamA: 'South Delhi United',
    teamB: 'Civil Lines Cluster',
    venue: 'Chhatrasal Stadium (Main Pitch 2)',
  },
  {
    date: 'Sunday, Nov 16',
    time: '09:30 AM',
    sport: 'Football 11v11',
    category: 'U-9 Boys (Pool C)',
    teamA: 'Shahdara East Warriors',
    teamB: 'Najafgarh Champions',
    venue: 'Thyagaraj Stadium (Main Pitch 3)',
  },
  {
    date: 'Sunday, Nov 16',
    time: '11:00 AM',
    sport: 'Football 11v11',
    category: 'U-9 Girls (Pool D)',
    teamA: 'Karol Bagh Tigers',
    teamB: 'West Delhi Academy',
    venue: 'Chhatrasal Stadium (Main Pitch 1)',
  },
];

const UpcomingFixturesSection = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'U-11' | 'U-9'>('All');
  const router = useRouter();

  const filteredFixtures = sampleFixtures.filter((item) => {
    if (activeTab === 'U-11') return item.category.includes('U-11');
    if (activeTab === 'U-9') return item.category.includes('U-9');
    return true;
  });

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
              <HugeiconsIcon icon={Calendar03Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                SEASON FIXTURES &amp; SCHEDULE
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
              Upcoming Football Schedule
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans">
              Phase 1 Qualification &amp; Phase 2 Knockout Football matches across 2 Stadium Venues.
            </p>
          </div>

          {/* Right Controls: Filter Tabs + View All Button */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
              {(['All', 'U-11', 'U-9'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-satoshi transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-navy text-white shadow-md'
                      : 'text-gray-600 hover:text-navy hover:bg-white/60'
                  }`}
                >
                  {tab === 'All' ? 'All Divisions' : `${tab} Division`}
                </button>
              ))}
            </div>

            <button
              onClick={() => router.push('/tournaments/fixtures')}
              className="flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#e07318] text-white px-5 py-3 rounded-xl font-satoshi font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-orange-500/20 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>View All</span>
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Clean & Simple Fixtures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredFixtures.map((fixture, index) => (
            <div
              key={index}
              onClick={() => router.push('/tournaments/fixtures')}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 gap-6 cursor-pointer"
            >
              {/* Top Bar: Category Pill + Date/Time */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-700 font-bold text-xs font-dm-sans border border-amber-200/60">
                  {fixture.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium font-dm-sans">
                  <HugeiconsIcon icon={Clock01Icon} size={15} className="text-gray-400" />
                  <span>{fixture.date}</span>
                  <span>•</span>
                  <span>{fixture.time}</span>
                </div>
              </div>

              {/* Middle Row: Matchup */}
              <div className="grid grid-cols-11 items-center gap-2 py-3">
                <div className="col-span-5 text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 font-satoshi leading-snug">
                    {fixture.teamA}
                  </h4>
                </div>
                <div className="col-span-1 flex justify-center">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-black font-satoshi border border-amber-200/60">
                    VS
                  </span>
                </div>
                <div className="col-span-5 text-center sm:text-right">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 font-satoshi leading-snug">
                    {fixture.teamB}
                  </h4>
                </div>
              </div>

              {/* Bottom Bar: Venue + Sport */}
              <div className="flex items-center justify-between gap-4 text-xs font-dm-sans pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-gray-600 font-medium min-w-0">
                  <HugeiconsIcon icon={Location01Icon} size={15} color={colors.amber} className="shrink-0" />
                  <span className="truncate">{fixture.venue}</span>
                </div>
                <span className="font-bold text-gray-800 shrink-0">{fixture.sport}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Calendar Link */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => router.push('/tournaments/fixtures')}
            className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange/90 text-white font-bold text-base px-8 py-4 rounded-xl font-satoshi transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg shadow-orange-500/20"
          >
            View Complete Football Match Schedule &amp; Results
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} color={colors.white} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFixturesSection;
