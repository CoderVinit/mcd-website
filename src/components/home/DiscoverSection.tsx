import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';
import { colors } from "@/theme/colors";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface DiscoverSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  featureCards: FeatureCard[];
  buttonText: string;
}

const DiscoverSection = ({
  image,
  imageAlt,
  title,
  description,
  featureCards,
  buttonText,
}: DiscoverSectionProps) => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:py-14 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-20">

        {/* Left - Image */}
        <div className="w-full md:w-[45%] lg:w-auto shrink-0">
          <div className="relative w-full md:w-full lg:w-[520px] xl:w-[560px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[560px] xl:h-[600px] rounded-3xl lg:rounded-4xl overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:flex-1 flex flex-col justify-between gap-6 md:gap-8 lg:gap-14">
          {/* Title and Description */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[52px] xl:text-[60px] font-bold text-navy leading-[110%] tracking-normal font-satoshi">
              {title}
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[18px] font-normal leading-[150%] text-gray-500 font-dm-sans">
              {description}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {featureCards.map((card, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="w-[52px] h-[52px] sm:w-[80px] sm:h-[80px] flex items-center justify-center rounded-xl bg-purple-50 shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] sm:text-[19px] lg:text-[20px] leading-[120%] tracking-[1%] text-navy font-satoshi font-bold">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-normal leading-[150%] text-gray-500 font-dm-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/about">
            <button className="w-fit bg-purple hover:opacity-90 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-normal text-[14px] sm:text-[16px] leading-[150%] transition-all duration-300 flex items-center gap-2 font-satoshi cursor-pointer">
              {buttonText}
              <HugeiconsIcon icon={ArrowRight02Icon} width={22} height={22} color={colors.white} strokeWidth={2.5}/>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
