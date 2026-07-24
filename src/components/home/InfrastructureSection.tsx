'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {Location01Icon,Calendar02Icon, ArrowRight02Icon, ArrowLeft02Icon} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const MeghalayaMap = dynamic(() => import('./MeghalayaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[1200px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden border border-neutral-200 bg-gray-50 flex items-center justify-center" style={{ boxShadow: '0 0 12px 0 rgba(16, 24, 40, 0.08)' }}>
      <span className="text-gray-500 font-dm-sans text-[16px]">Loading map...</span>
    </div>
  ),
});

const projects = [
  {
    status: 'Completed',
    statusColor: 'bg-emerald',
    title: 'Tura Indoor Stadium Upgrade',
    location: 'Tura',
    budget: '₹ 35.5 Cr',
    date: '25 Mar, 2026',
  },
  {
    status: 'Ongoing',
    statusColor: 'bg-warning',
    title: 'Indoor Multi-Purpose Sports Hall',
    location: 'West Garo Hills',
    budget: '₹ 1.5 Cr',
    date: '28 May, 2026',
  },
  {
    status: 'Completed',
    statusColor: 'bg-emerald',
    title: 'District Swimming Pool Complex',
    location: 'Shillong',
    budget: '₹ 5 Cr',
    date: '12 Apr, 2027',
  },
  {
    status: 'Completed',
    statusColor: 'bg-emerald',
    title: 'Tura Indoor Stadium Upgrade',
    location: 'Jowai',
    budget: '₹ 35.5 Cr',
    date: '25 Mar, 2026',
  },
  {
    status: 'Ongoing',
    statusColor: 'bg-warning',
    title: 'Indoor Multi-Purpose Sports Hall',
    location: 'Nongstoin',
    budget: '₹ 1.5 Cr',
    date: '28 May, 2026',
  },
  {
    status: 'Completed',
    statusColor: 'bg-emerald',
    title: 'District Swimming Pool Complex',
    location: 'Tura',
    budget: '₹ 5 Cr',
    date: '12 Apr, 2027',
  },
];

const InfrastructureSection = () => {
  const startOffset = projects.length;
  const [activeIndex, setActiveIndex] = useState(startOffset);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); 
  // Duplicate projects for seamless infinite loop
  const extendedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();

    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Seamless loop: jump back to middle copy when reaching edges
  useEffect(() => {
    if (!isTransitioning) return;
    const handleTransitionEnd = () => {
      if (activeIndex >= startOffset + projects.length) {
        setIsTransitioning(false);
        setActiveIndex(startOffset + (activeIndex % projects.length));
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      } else if (activeIndex < startOffset) {
        setIsTransitioning(false);
        setActiveIndex(startOffset + (activeIndex % projects.length));
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(true));
        });
      }
    };

    const el = innerRef.current;
    if (el) {
      el.addEventListener('transitionend', handleTransitionEnd);
      return () => el.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [activeIndex, isTransitioning, startOffset]);

  const dotIndex = ((activeIndex - startOffset) % projects.length + projects.length) % projects.length;

  const goNext = () => setActiveIndex((prev) => prev + 1);
  const goPrev = () => setActiveIndex((prev) => prev - 1);

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px] flex flex-col gap-2">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-[60px]">
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center gap-4">
          <span className="text-purple text-[14px] font-bold tracking-[0.04em] leading-[150%] font-dm-sans">
            Projects & Infra
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] max-w-[902px] font-bold text-navy-dark leading-[120%] tracking-[0%] font-satoshi">
            Infrastructure & Projects Tracker
          </h2>
          <p className="max-w-[776px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] tracking-[0%] text-gray-500 font-dm-sans">
            Transparent tracking of sports infrastructure development across all districts of Meghalaya.
          </p>
        </div>
    
        {/* Map + Projects Section */}
        <div className="w-full max-w-[1200px] flex flex-col gap-4 sm:gap-[24px]">
          <MeghalayaMap />

          {/* Recently Updated Projects */}
          <div className="w-full flex flex-col gap-4 sm:gap-6">
          {/* Section Header */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-satoshi font-normal tracking-[0%] leading-[150%] text-neutral-600">
              Recently Updated Projects
            </h3>
            <button
              onClick={() => router.push('/infrastructure/projects')}
              className="flex items-center gap-2 h-[46px] rounded-[12px] px-[16px] pr-[12px] text-white font-satoshi font-normal text-[16px] leading-[150%] hover:opacity-90 transition-opacity duration-300"
              style={{ background: "var(--color-purple)" }}
            >
              View All Projects
              <HugeiconsIcon icon={ArrowRight02Icon} width={20} height={20} color="currentColor" strokeWidth={2}/>
            </button>
          </div>

          {/* Project Cards Carousel */}
          <div
            className="w-full flex items-center gap-3"
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-gray-50"
              aria-label="Previous"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} width={18} height={18} color={colors.navyDeeper} strokeWidth={2} />
            </button>

            <div className="flex-1 overflow-hidden">
              <div
                ref={innerRef}
                className={`flex gap-4 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(calc(-${activeIndex} * (100% + 16px) / ${visibleCards}))` }}
              >
                {extendedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[16px] p-[24px] flex flex-col gap-[12px] border border-neutral-200 hover:shadow-md transition-shadow duration-300 shrink-0"
                    style={{ width: `calc((100% - ${(visibleCards - 1) * 16}px) / ${visibleCards})` }}
                  >
                    {/* Status Badge */}
                    <div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-[12px] font-medium leading-[150%] font-satoshi border ${
                          project.status === 'Completed'
                            ? 'border-green-300 text-green-700 bg-green-100'
                            : 'border-yellow-300 text-yellow-700 bg-yellow-100'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Budget */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-[18px] font-bold leading-[150%] text-navy-dark font-satoshi">
                        Budget:
                      </span>
                      <span className="text-[18px] font-bold leading-[150%] text-navy-dark font-satoshi">
                        {project.budget}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-[16px] font-normal text-gray-600 leading-[140%] tracking-[0.02em] font-dm-sans">
                      {project.title}
                    </h4>

                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                      <HugeiconsIcon icon={Location01Icon} width={20} height={20} color={colors.gray500} strokeWidth={1.5}/>
                      <span className="text-[14px] font-medium leading-[150%] text-gray-500 font-satoshi">
                        {project.location}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center justify-end gap-1.5">
                      <HugeiconsIcon icon={Calendar02Icon} width={16} height={16} color={colors.gray500} strokeWidth={1.13}/>
                      <span className="text-[13px] font-medium leading-[150%] text-gray-500 font-satoshi">
                        {project.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={goNext}
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-gray-50"
              aria-label="Next"
            >
              <HugeiconsIcon icon={ArrowRight02Icon} width={18} height={18} color={colors.navyDeeper} strokeWidth={2} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-2">
            <div
              className="flex items-center rounded-full bg-gray-50"
              style={{ height: '24px', padding: '8px 12px', gap: '8px' }}
            >
              {Array.from({ length: 5 }).map((_, index) => {
                const distance = Math.abs(index - (dotIndex % 5));
                const sizes = [10, 8, 8, 6, 5];
                const opacities = [1, 0.5, 0.4, 0.3, 0.2];
                const sizeIdx = Math.min(distance, 4);
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(startOffset + index)}
                    className="rounded-full bg-primary transition-all duration-300"
                    style={{
                      width: `${sizes[sizeIdx]}px`,
                      height: `${sizes[sizeIdx]}px`,
                      opacity: distance === 0 ? 1 : opacities[sizeIdx],
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
