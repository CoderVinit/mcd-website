"use client";
import React, { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import Image from "@/components/common/ImageWithLoader";
import { Department } from "./DepartmentCard";

interface DepartmentModalProps {
  department: Department;
  onClose: () => void;
}

export default function DepartmentModal({ department, onClose }: DepartmentModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Background click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-[900px] bg-white rounded-[32px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.15)] flex flex-col animate-scaleUp z-10 max-h-[90vh]"
        style={{ height: "auto" }}
      >
        {/* Header Section */}
        <div className={`relative p-[32px] flex flex-col gap-4 text-white shrink-0 ${department.bgClass}`}>
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-[32px] right-[32px] w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={2} />
          </button>

          {/* Icon Box */}
          <div className="w-[64px] h-[64px] rounded-[16px] bg-white/20 flex items-center justify-center shrink-0">
            <HugeiconsIcon icon={department.icon} size={32} strokeWidth={2} className="text-white" />
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-1 max-w-[700px]">
            <h2 className="font-satoshi text-2xl sm:text-[32px] font-bold leading-tight">
              {department.title}
            </h2>
            <p className="font-dm-sans text-sm sm:text-base text-white/80 leading-relaxed">
              {department.description}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-[32px] overflow-y-auto flex-grow flex flex-col md:flex-row gap-8">
          {/* Left Column: Key Responsibilities */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-satoshi text-lg sm:text-[20px] font-bold text-navy-dark mb-6">
              Key Responsibility
            </h3>
            
            <ul className="flex flex-col gap-4">
              {department.responsibilities?.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-purple-600 shrink-0 mt-1" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M9 5l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="3.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                  <span className="font-dm-sans text-sm sm:text-base text-gray-700 leading-relaxed">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Leadership Team */}
          {department.leader && (
            <div className="w-full md:w-[280px] shrink-0 flex flex-col">

              <div className="bg-[#F8F9FA] rounded-[24px] border border-neutral-100 p-4 flex flex-col">
                <h3 className="font-satoshi text-lg sm:text-[20px] font-bold text-navy-dark mb-3">
                Leadership Team
              </h3>
                <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden mb-4 bg-gray-200">
                  <Image 
                    src={department.leader.image} 
                    alt={department.leader.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <span className="font-satoshi text-base font-bold text-navy-dark text-center block">
                  {department.leader.name}
                </span>
                <span className="font-dm-sans text-xs text-neutral-400 text-center block mt-1">
                  {department.leader.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
