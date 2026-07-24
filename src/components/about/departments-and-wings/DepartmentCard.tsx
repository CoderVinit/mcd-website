import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export interface Department {
  title: string;
  description: string;
  icon: any;
  bgClass: string;
  textClass: string;
  linkText?: string;
  href?: string;
  responsibilities?: string[];
  leader?: {
    name: string;
    role: string;
    image: string;
  };
}

interface DepartmentCardProps {
  department: Department;
  onViewDetails?: () => void;
}

export default function DepartmentCard({ department, onViewDetails }: DepartmentCardProps) {
  return (
    <div 
      onClick={onViewDetails}
      className="group flex flex-col justify-between w-full h-full min-h-[280px] bg-white border border-neutral-200 rounded-[24px] p-[24px] gap-[32px] transition-all duration-300 hover:border-purple-300 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)] hover:-translate-y-1 cursor-pointer"
    >
      
      {/* Top: Icon + Info Content */}
      <div className="flex flex-col gap-[32px]">
        {/* Icon Container */}
        <div className={`w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shrink-0 ${department.bgClass} ${department.textClass}`}>
          <HugeiconsIcon icon={department.icon} size={32} strokeWidth={2} />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 max-w-[336px]">
          <h3 className="font-satoshi text-lg sm:text-[20px] font-bold text-navy-dark leading-[150%]">
            {department.title}
          </h3>
          <p className="font-satoshi text-base text-gray-500 leading-relaxed">
            {department.description}
          </p>
        </div>
      </div>

      {/* Bottom: Action Link */}
      <div className="mt-auto gap-3">
        <span className="inline-flex items-center gap-1.5 font-dm-sans text-base font-semibold text-purple-600 tracking-wider group-hover:text-purple-700 transition-colors">
          {department.linkText || "View Details"}
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2.25} />
        </span>
      </div>
    </div>
  );
}
