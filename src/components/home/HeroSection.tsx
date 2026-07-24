"use client";

import React, { useState, useEffect } from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowLeft02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const slides = [
  {
    id: 1,
    image: "/images/MCD/heroBanner.png",
    alt: "MCD Mini League Official Banner",
    hasOverlayText: false,
  },
  {
    id: 2,
    image: "/images/hero-sports.jpg",
    alt: "MCD Mini League Youth Football Action",
    hasOverlayText: true,
    titleTop: "MCD MINI",
    titleBottom: "LEAGUE",
    subtitle: "Building Delhi's Largest Grassroots Community Football Ecosystem.",
    description: "Organized by Municipal Corporation of Delhi (MCD) & SITDS across Under-9 and Under-11 divisions featuring 80 registered clubs and 320 teams.",
    primaryCta: { label: "Register Club", href: "/registration" },
    secondaryCta: { label: "View Match Fixtures", href: "/tournaments/fixtures" },
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="relative w-full bg-[#07192e] overflow-hidden flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Container */}
      <div className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[720px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className={slide.id === 1 ? "object-cover object-top bg-[#07192e]" : "object-cover object-center"}
                priority={index === 0}
                unoptimized
                sizes="100vw"
              />

              {/* Gradient Overlay for Slide 2 text readability or Slide 1 subtle mask */}
              {slide.hasOverlayText ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07192e]/85 via-[#07192e]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192e]/70 via-transparent to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192e]/20 via-transparent to-transparent" />
              )}

              {/* Overlay Content (Rendered on Slide 2 with sports image) */}
              {slide.hasOverlayText && (
                <div className="relative z-10 w-full max-w-[1312px] h-full mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col justify-center items-start gap-5">
                  {/* Main Stacked Headline */}
                  <div className="flex flex-col leading-none font-extrabold tracking-tight font-satoshi">
                    <span className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[100px] text-white uppercase drop-shadow-md">
                      {slide.titleTop}
                    </span>
                    <span className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[100px] text-[#F58220] uppercase drop-shadow-md">
                      {slide.titleBottom}
                    </span>
                  </div>

                  {/* Subheadline */}
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-satoshi leading-tight max-w-xl">
                    {slide.subtitle}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-200 font-dm-sans max-w-lg leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
                    {slide.primaryCta && (
                      <button
                        onClick={() => router.push(slide.primaryCta.href)}
                        className="bg-[#F58220] hover:bg-[#e07318] text-white px-7 py-3.5 rounded-xl font-extrabold text-[16px] font-satoshi transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <HugeiconsIcon icon={ArrowRight02Icon} size={20} color={colors.white} strokeWidth={2.5} />
                      </button>
                    )}

                    {slide.secondaryCta && (
                      <button
                        onClick={() => router.push(slide.secondaryCta.href)}
                        className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-[16px] font-satoshi transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
                      >
                        {slide.secondaryCta.label}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? "w-8 bg-[#F58220]" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
