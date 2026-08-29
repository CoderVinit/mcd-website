"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon, ArrowUpRight01Icon, News01Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';

const mmlNews = [
  {
    category: 'League Launch',
    date: 'Oct 24, 2026',
    title: 'MCD & Khelo Tech Announce Launch of MCD Mini League across Delhi-NCR',
    description: 'Flagship grassroots sports initiative targeting Under-9 & Under-11 children in Football (11v11) with full CSR subsidy for MCD schools.',
    image: '/images/news1.png',
  },
  {
    category: 'Registration SOP',
    date: 'Oct 28, 2026',
    title: 'School Registration & Cluster Formation Guidelines Released by MCD',
    description: 'Schools unable to field full rosters can join multi-school clusters facilitated by Khelo Tech within a 3km radius.',
    image: '/images/news2.png',
  },
  {
    category: 'GMS Milestone',
    date: 'Nov 02, 2026',
    title: 'Over 5,100 Young Athletes Registered on GMS Portal with Verified Age Proofs',
    description: 'Digital tracking system goes live with neutral External Club Supervisors conducting multi-layer document audits.',
    image: '/images/news3.png',
  },
];

const NewsSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
              <HugeiconsIcon icon={News01Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                LATEST NEWS &amp; UPDATES
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
              3 Featured League Stories
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans">
              Official announcements, press notices, and tournament coverage for the MCD Mini League.
            </p>
          </div>

          <button
            onClick={() => router.push('/events/blog')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-2 border-navy rounded-xl px-7 py-3.5 text-sm text-navy font-satoshi font-bold hover:bg-navy hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            All News Stories
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* 3 Featured Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mmlNews.map((news, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onClick={() => router.push('/events/blog')}
            >
              <div>
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-navy/90 text-white text-xs font-bold font-dm-sans backdrop-blur-md">
                    {news.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col gap-3">
                  <span className="text-xs font-bold text-gray-400 font-dm-sans">
                    {news.date}
                  </span>
                  <h3 className="text-lg font-bold text-navy font-satoshi group-hover:text-orange transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-dm-sans leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 flex items-center gap-1.5 text-xs font-bold text-orange font-satoshi">
                Read Full Story
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
