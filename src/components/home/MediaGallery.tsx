"use client";

import React from "react";
import Image from "@/components/common/ImageWithLoader";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Image01Icon, PlayIcon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";

interface MediaItem {
  id: number;
  url: string;
  alt: string;
  title: string;
  gridClass: string;
  isVideo?: boolean;
}

export default function MediaGallery() {
  const router = useRouter();

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      url: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784273075_Rectangle%203463336.png",
      alt: "Stadium crowd watching a football match",
      title: "League Stadium Atmosphere",
      gridClass: "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3",
    },
    {
      id: 2,
      url: "/images/hero-sports.jpg",
      alt: "Grassroots youth football action",
      title: "Grassroots Talent Action",
      gridClass: "md:col-start-1 md:col-span-2 md:row-start-4 md:row-span-1",
    },
    {
      id: 3,
      url: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784273091_Rectangle%203463339.png",
      alt: "Footballer running with ball on green pitch",
      title: "Fast Break & Dribble",
      gridClass: "md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-4",
    },
    {
      id: 4,
      url: "/images/events/four.png",
      alt: "Official match football on pitch grass",
      title: "Official Match Ball",
      gridClass: "md:col-start-1 md:col-span-3 md:row-start-5 md:row-span-1",
    },
    {
      id: 5,
      url: "/images/venues/Pa_Sangma_Sports_Complex.jpg",
      alt: "Football stadium complex with crowd",
      title: "Stadium Complex Highlights",
      gridClass: "md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-3",
      isVideo: true,
    },
    {
      id: 6,
      url: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784273090_Rectangle%203463341.png",
      alt: "Football players action in competitive match",
      title: "Matchday Competitive Action",
      gridClass: "md:col-start-4 md:col-span-2 md:row-start-4 md:row-span-2",
    },
    {
      id: 7,
      url: "/images/events/two.png",
      alt: "Stadium celebrating goal with confetti",
      title: "Championship Goal Celebration",
      gridClass: "md:col-start-6 md:col-span-2 md:row-start-1 md:row-span-1",
    },
    {
      id: 8,
      url: "/images/news1.png",
      alt: "Fast-paced indoor football match action",
      title: "Indoor Futsal Showcase",
      gridClass: "md:col-start-6 md:col-span-2 md:row-start-2 md:row-span-1",
      isVideo: true,
    },
    {
      id: 9,
      url: "https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784273090_Rectangle%203463342.png",
      alt: "Spectators in a football stadium at night under floodlights",
      title: "Night Match Under Floodlights",
      gridClass: "md:col-start-6 md:col-span-2 md:row-start-3 md:row-span-3",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14">
        
        {/* Header Section matching theme */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
              <HugeiconsIcon icon={Image01Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                MEDIA GALLERY
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
              Photos &amp; Videos From Recent Activities
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans leading-relaxed">
              Capturing key moments of grassroots football excitement, skill, and sportsmanship across Delhi-NCR.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => router.push('/media')}
            className="flex items-center justify-center gap-2.5 bg-[#F58220] hover:bg-[#e07318] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base font-satoshi transition-all duration-300 shadow-md shadow-orange-500/20 cursor-pointer shrink-0 whitespace-nowrap"
          >
            <span>View Feed</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Media Bento Grid */}
        <div className="flex flex-row md:grid md:grid-cols-7 md:grid-rows-5 gap-4 h-auto md:h-[700px] w-full overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push('/media')}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl group bg-gray-100 cursor-pointer w-[280px] sm:w-[360px] md:w-full h-[340px] sm:h-[450px] md:h-full shrink-0 md:shrink snap-start transition-all duration-300 ${item.gridClass}`}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                unoptimized
              />
              
              {/* Dark Gradient + Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="font-satoshi font-bold text-white text-base leading-snug">
                  {item.title}
                </span>
                <span className="font-dm-sans text-xs text-white/80">
                  {item.isVideo ? "Video Clip" : "Photo Gallery"}
                </span>
              </div>

              {/* Video Play Overlay Badge */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#F58220] group-hover:border-[#F58220] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <HugeiconsIcon icon={PlayIcon} size={24} className="text-white fill-current translate-x-[1px]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
