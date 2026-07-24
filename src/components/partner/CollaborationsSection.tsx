"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Agreement02Icon,
  ArrowRight02Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

interface Partner {
  id: number;
  name: string;
  logo: string;
  isCustomLogo?: boolean;
}

type ProposalFormValues = {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  collaborationType: string;
  message: string;
};

export default function CollaborationsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners: Partner[] = [
    {
      id: 1,
      name: "Company 1",
      logo: "/images/venues/JN_Sports_Complex.jpg",
    },
    {
      id: 2,
      name: "Company 2",
      logo: "/images/venues/JN_Sports_Complex.jpg",
    },
    {
      id: 3,
      name: "Company 3",
      logo: "/images/venues/Mawkhanu_Sports_Complex.jpg",
    },
    {
      id: 4,
      name: "Company 4",
      logo: "/images/venues/PA_Togan_Athletics_Stadium.jpg",
    },
    {
      id: 5,
      name: "Company 5",
      logo: "/images/venues/Pa_Sangma_Sports_Complex.jpg",
    },
    {
      id: 6,
      name: "Company 6",
      logo: "/images/venues/Umswali_Sports_Complex.jpg",
    },
    {
      id: 7,
      name: "Company 7",
      logo: "/images/venues/Wahiajer_Sports_complex.jpg",
    },
    {
      id: 8,
      name: "Company 8",
      logo: "/images/venues/Gymnastics_Indoor_Hall.jpg",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProposalFormValues>({
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      collaborationType: "",
      message: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: ProposalFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    showSweetAlert({
      type: "success",
      title: "Proposal Submitted!",
      text: `Thank you, ${values.contactPerson}. Your collaboration proposal for ${values.organizationName} has been successfully submitted. Our team will contact you shortly.`,
    });

    setIsModalOpen(false);
    reset();
  };

  return (
    <section className="w-full bg-white font-dm-sans">
      <div className="w-full max-w-[1440px] mx-auto px-[16px] py-[60px] md:px-[32px] md:py-[80px] lg:px-[64px] lg:py-[100px] flex flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
        
        {/* ─── Page Title & Subtitle ─── */}
        <div className="flex flex-col items-center gap-[16px] text-center max-w-[1312px] mx-auto w-full">
          <h2 className="font-satoshi font-bold text-[28px] md:text-[48px] lg:text-[60px] leading-[120%] tracking-tight text-navy-dark">
            Collaborations & Engagements
          </h2>
          <p className="font-dm-sans text-gray-500 text-sm md:text-lg font-medium leading-[150%] max-w-[910px]">
            Strengthening sports development through partnerships, strategic collaborations, and global engagements.
          </p>
        </div>


        {/* ─── Stats Card ─── */}
        <div className="w-full md:max-w-[1000px] lg:max-w-[1200px] mx-auto rounded-[32px] bg-purple-500 py-[40px] px-8 md:px-[64px] shadow-lg relative overflow-hidden">
          {/* Background pattern details */}
          <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-[32px] relative z-10 w-full divide-y md:divide-y-0 divide-white/10 md:divide-none">
            {/* Stat 1 */}
            <div className="w-full md:w-auto flex-1 flex flex-col items-center justify-center text-center gap-2 pb-6 md:pb-0">
              <span className="font-satoshi font-bold text-[40px] md:text-[48px] lg:text-[52px] text-white leading-[100%] tracking-tight">
                24+
              </span>
              <span className="font-satoshi font-medium text-[13px] md:text-[20px] text-center text-white/50 tracking-[0.02em]">
                Active Mous
              </span>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-[1px] h-[72px] bg-white/20 shrink-0" />

            {/* Stat 2 */}
            <div className="w-full md:w-auto flex-1 flex flex-col items-center justify-center text-center gap-2 py-6 md:py-0 md:px-4">
              <span className="font-satoshi font-bold text-[40px] md:text-[48px] lg:text-[52px] text-white leading-[100%] tracking-tight">
                ₹50cr+
              </span>
              <span className="font-satoshi font-medium text-[13px] md:text-[20px] text-center text-white/50 tracking-[0.02em]">
                CSR Funds Mobilized
              </span>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-[1px] h-[72px] bg-white/30 shrink-0" />

            {/* Stat 3 */}
            <div className="w-full md:w-auto flex-1 flex flex-col items-center justify-center text-center gap-2 pt-6 md:pt-0">
              <span className="font-satoshi font-bold text-[40px] md:text-[48px] lg:text-[52px] text-white leading-[100%] tracking-tight">
                12
              </span>
              <span className="font-satoshi font-medium text-[13px] md:text-[20px] text-center text-white/50 tracking-[0.02em]">
                International Partners
              </span>
            </div>
          </div>
        </div>


        {/* ─── Strategic Partners Section ─── */}
        <div className="flex flex-col gap-10 max-w-[1312px] mx-auto w-full">
          <h3 className="font-satoshi font-medium text-[18px] md:text-[24px] text-black text-center leading-[120%]">
            Our Strategic Partners
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto w-full">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-full bg-[#FFFFFF] border border-[#EAECF0] rounded-[16px] p-[24px] flex flex-col items-center justify-center gap-[20px] group hover:shadow-[0_8px_16px_rgba(16,24,40,0.04)] hover:-translate-y-0.5 transition-all duration-300 h-auto md:h-[147px]"
              >
                {/* Logo Container */}
                <div className="w-[56px] h-[56px] rounded-[12px] border border-[#EAECF0] shadow-sm flex items-center justify-center overflow-hidden bg-gray-50 relative group-hover:border-purple/20 transition-colors shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="60px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                
                {/* Partner Name */}
                <span className="font-satoshi font-bold text-[14px] text-gray-800 text-center tracking-[0.01em] line-clamp-1">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ─── Bottom CTA Banner ─── */}
        <div className="w-full max-w-[1200px] mx-auto bg-[#151F2D] rounded-[24px] p-8 md:p-[60px] text-white flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[32px] xl:gap-[80px] relative overflow-hidden shadow-xl border border-white/5">

          <div className="absolute inset-0 bg-gradient-to-tr from-purple/10 to-transparent pointer-events-none" />
          
          <div className="flex gap-5 items-start max-w-[800px] relative z-10">
            <div className="w-[52px] h-[52px] flex justify-center shrink-0 text-purple-200">
              <HugeiconsIcon icon={Agreement02Icon} size={40} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-satoshi text-2xl md:text-[32px] font-bold leading-[120%] tracking-tight">
                Want to partner with us?
              </h4>
              <p className="font-dm-sans text-gray-300 text-sm md:text-base font-normal leading-[150%]">
                We Are Actively Looking For Corporate Sponsors, NGOs, And Technical Partners To Help Elevate Meghalaya's Sports Infrastructure And Athlete Development.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full xl:w-auto">
            <button
              className="flex w-full xl:w-[268px] h-[56px] items-center justify-center gap-[8px] pt-[16px] pb-[16px] pr-[34px] pl-[40px] bg-purple-500 hover:opacity-90 active:scale-95 transition-all text-white font-satoshi font-medium text-sm md:text-base rounded-[12px] cursor-pointer whitespace-nowrap"
            >
              Propose Collaboration
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
