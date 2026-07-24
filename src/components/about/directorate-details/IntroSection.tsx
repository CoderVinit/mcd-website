"use client";

import React from "react";
import Image from "@/components/common/ImageWithLoader";

export default function IntroSection() {
  return (
    <section className="w-full pt-[60px] pb-[60px] px-4 md:pt-[100px] md:pb-[100px] md:px-[64px] bg-white">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col xl:flex-row xl:items-stretch xl:h-[600px] gap-[40px] xl:gap-[80px]">
        {/* Left Column: Image */}
        <div className="w-full xl:w-[500px] h-[380px] xl:h-full shrink-0">
          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-100 shadow-md">
            <Image
              src="https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779097661_cup.png"
              alt="Empowering Sports & Youth Development"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Copy text */}
        <div className="w-full xl:w-[560px] h-auto xl:h-[600px] flex flex-col gap-[24px] shrink-0">
          <h2 className="font-satoshi text-[32px] sm:text-[48px] font-bold text-navy-dark leading-[120%] tracking-tight">
            Empowering Sports & Youth Development In Meghalaya
          </h2>
          <p className="font-dm-sans text-sm sm:text-lg text-gray-500 leading-relaxed font-medium">
            The Directorate of Sports & Youth Affairs (DSYA) serves as the primary government agency responsible for the formulation, implementation, and monitoring of sports and youth development policies across the state of Meghalaya.
          </p>
          <p className="font-dm-sans text-sm sm:text-lg text-gray-500 leading-relaxed font-medium">
            Established in 1981, DSYA has been at the forefront of nurturing athletic talent, building sports infrastructure, and creating opportunities for youth engagement in sports and physical activities.
          </p>
          <p className="font-dm-sans text-sm sm:text-lg text-gray-500 leading-relaxed font-medium">
            Our mandate extends across all 12 districts of Meghalaya, working closely with state and district sports associations, educational institutions, and community organizations to build a robust sports ecosystem that benefits all residents.
          </p>
        </div>
      </div>
    </section>
  );
}
