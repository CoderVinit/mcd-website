'use client';

import React, { useState, useEffect } from 'react';
import Image from '@/components/common/ImageWithLoader';

interface LeaderMessage {
  id: string;
  role: string;
  name: string;
  image: string;
  quoteParagraphs: string[];
}

const leaderMessages: LeaderMessage[] = [
  {
    id: 'cm',
    role: 'Honourable Chief Minister',
    name: 'Conrad Sangma',
    image: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784797925_images-Photoroom%201.png',
    quoteParagraphs: [
      'It is a matter of great pride to extend my warm greetings on the occasion of the 39th National Games in Meghalaya. This prestigious event reflects the spirit of unity, excellence, and sportsmanship.I congratulate the Government of Meghalaya and all organisers for hosting this grand event. I wish all athletes, officials, and participants great success and memorable moments.',
      'May the Games inspire our youth and strengthen India\'s sporting future.',
    ],
  },
  {
    id: 'pm',
    role: 'Honourable Prime Minister',
    name: 'Narendra Modi',
    image: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784798004_narendra-modi-38498.png',
    quoteParagraphs: [
      'Sports is a powerful medium to unite people and inspire our nation\'s youth. The 39th National Games in Meghalaya will provide a vibrant platform to showcase athletic brilliance, foster sportsmanship, and propel India toward becoming a global sporting powerhouse.',
      'I extend my warmest best wishes to the government and people of Meghalaya for hosting this grand sporting spectacle.',
    ],
  },
];

// Append first item for seamless infinite looping
const extendedSlides = [...leaderMessages, { ...leaderMessages[0], id: 'cm-clone' }];

const PMOSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= leaderMessages.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <section className="relative w-full bg-[#F9FAFB] pt-[120px] lg:pt-[157px] pb-[60px] lg:pb-[100px] px-6 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        {/* Infinite Sliding Track */}
        <div 
          className={`flex flex-row ${
            isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((leader, index) => (
            <div 
              key={`${leader.id}-${index}`} 
              className="w-full shrink-0 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-[40px] max-w-[1200px] mx-auto"
            >
              {/* Left Side - Portrait Card (Fixed 280px x 350px, Gap 12px) */}
              <div className="flex flex-col items-center shrink-0 w-[280px] h-[350px] gap-[12px]">
                <div className="relative w-[280px] h-[280px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gradient-to-b from-[#B48BF6] to-[#53239D] shadow-sm">
                  {/* Image with exact 291px x 275px and -6px left offset per Figma specs */}
                  <div className="absolute left-[-6px] bottom-0 w-[291px] h-[275px]">
                    <Image
                      src={leader.image}
                      alt={`${leader.role} ${leader.name}`}
                      fill
                      sizes="291px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="font-satoshi font-normal text-[13px] sm:text-base text-gray-600 leading-[150%]">
                    {leader.role}
                  </span>
                  <h3 className="font-satoshi font-bold text-2xl text-navy leading-[120%]">
                    {leader.name}
                  </h3>
                </div>
              </div>

              {/* Right Side - Quote Card (Radius 24px, Padding 32px, Gap 24px) */}
              <div className="flex-1 w-full md:w-[880px] min-h-[350px] bg-white rounded-[24px] p-[32px] flex flex-col justify-start gap-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-100/80 font-satoshi">
                {/* Quote Mark Icon */}
                <div>
                  <Image
                    src={"https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1784798207_Frame%201707481109.png"}
                    alt="quote"
                    width={68.57}
                    height={40}
                    className="w-[36px] h-[26px] sm:w-[68.57px] sm:h-[40px] font-satoshi"
                  />
                </div>

                {/* Quote Text */}
                <div className="flex flex-col font-satoshi italic font-medium text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[160%] lg:leading-[170%] text-slate-800 tracking-[0.01em]">
                  {leader.quoteParagraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PMOSection;
