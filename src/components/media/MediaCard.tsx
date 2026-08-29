"use client";

import React, { useState } from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Share01Icon,
  Download02Icon,
  PlayIcon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";

export type MediaType = "news" | "photos" | "videos";
export type MediaFilter = "all" | MediaType;

export interface MediaCardData {
  id: number;
  type: MediaType;
  category?: string;
  title?: string;
  description: string;
  date: string;
  image?: string;
  images?: string[];
  duration?: string;
}

interface MediaCardProps {
  data: MediaCardData;
}

export default function MediaCard({ data }: MediaCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const truncatedText =
    data.description.length > 140 && !expanded
      ? `${data.description.substring(0, 140)}...`
      : data.description;

  const slides = data.images || (data.image ? [data.image] : []);

  const handleNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <article className="w-full bg-[#FFFFFF] rounded-[24px] border border-[#EAECF0] p-[16px] flex flex-col gap-[16px] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`relative w-full ${
        data.type === "photos" ? "h-[320px] sm:h-[450px] md:h-[570px]" : "aspect-[1.91/1]"
      }`}>
        {data.type === "photos" && slides.length > 0 ? (
          <div className="relative w-full h-full rounded-[16px] overflow-hidden group/slider">
            <Image
              src={slides[currentSlide]}
              alt={`${data.title || "Photo"} - Slide ${currentSlide + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-[16px]"
              unoptimized
            />
            {currentSlide > 0 && (
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-gray-50 text-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Previous slide"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={20} strokeWidth={2.5} />
              </button>
            )}
            {currentSlide < slides.length - 1 && (
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white hover:bg-gray-50 text-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Next slide"
              >
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2.5} />
              </button>
            )}
            {slides.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-[12px]">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentSlide(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      currentSlide === index ? "bg-[#753FC9]" : "bg-[#EAECF0]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : data.type === "videos" ? (
          <div className="relative w-full h-full group/video">
            <Image
              src={data.image || ""}
              alt={data.description}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/25 transition-colors rounded-2xl duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/video:bg-white/45 group-hover/video:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                <HugeiconsIcon icon={PlayIcon} size={24} strokeWidth={2} />
              </div>
            </div>
            
            {data.duration && (
              <span className="absolute bottom-4 right-4 bg-black/75 text-white font-satoshi font-medium text-xs px-2.5 py-1 rounded-md tracking-wider">
                {data.duration}
              </span>
            )}
          </div>
        ) : (
          <Image
            src={data.image || ""}
            alt={data.title || "News"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-2xl"
            unoptimized
          />
        )}
      </div>

      
      <div className="flex flex-col gap-[8px] w-full">
        {data.type === "news" && data.category && (
          <span className="self-start bg-purple-50 text-purple-500 font-satoshi font-bold text-sm px-3.5 py-1.5 rounded-[8px] tracking-wide">
            {data.category}
          </span>
        )}

        {data.type === "news" && data.title && (
          <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
            {data.title}
          </h3>
        )}

        <p className="font-satoshi font-normal text-gray-500 text-sm sm:text-base leading-relaxed">
          {truncatedText}{" "}
          {data.description.length > 140 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 font-bold hover:underline cursor-pointer focus:outline-none"
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </p>

        <div className="flex items-center justify-between mt-1">
          {/* Date */}
          <span className="font-dm-sans font-medium text-gray-900 text-sm">
            {data.date}
          </span>
        </div>
        
      </div>
      <div className="flex items-end justify-end gap-6">
            <button
              type="button"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-600 font-dm-sans font-medium text-base transition-colors duration-200 cursor-pointer"
            >
              <HugeiconsIcon icon={Share01Icon} size={24} strokeWidth={2} />
              <span>Share</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-600 font-dm-sans font-medium text-base transition-colors duration-200 cursor-pointer"
            >
              <HugeiconsIcon icon={Download02Icon} size={24} strokeWidth={2} />
              <span>Download</span>
            </button>
          </div>
    </article>
  );
}
