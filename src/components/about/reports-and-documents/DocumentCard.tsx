import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Files01Icon, Calendar03Icon, Download01Icon } from "@hugeicons/core-free-icons";

export interface DocumentItem {
  title: string;
  category: "Financial Document" | "Policy Document" | "Annual Report" | "Official Notification";
  description: string;
  date: string;
  year: string;
  type: string;
  size: string;
  downloadUrl: string;
}

interface DocumentCardProps {
  document: DocumentItem;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <div className="group w-full flex flex-col sm:flex-row bg-white border border-neutral-200 rounded-[20px] sm:rounded-[32px] p-[16px] sm:p-[24px] gap-4 sm:gap-[32px] transition-all duration-300 hover:border-purple-200 hover:shadow-[0_8px_30px_rgba(16,24,40,0.06)] min-h-0 md:min-h-[207px]">
      {/* Left: Icon Container */}
      <div className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-[12px] sm:rounded-[16px] bg-brand-purple-light flex items-center justify-center text-brand-purple shrink-0">
        <HugeiconsIcon icon={Files01Icon} size={24} className="sm:w-[28px] sm:h-[28px]" strokeWidth={2} />
      </div>

      {/* Middle: Content Details */}
      <div className="flex flex-col gap-3 sm:gap-4 flex-grow min-w-0">
        {/* Badge */}
        <span className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-600 text-xs font-semibold font-dm-sans self-start">
          {document.category}
        </span>

        {/* Title */}
        <h3 className="font-satoshi text-base sm:text-[20px] font-bold text-slate-900 leading-tight">
          {document.title}
        </h3>

        {/* Description */}
        <p className="font-dm-sans text-sm text-neutral-500 leading-relaxed">
          {document.description}
        </p>

        {/* Footer Details */}
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <HugeiconsIcon icon={Calendar03Icon} size={18} className="text-neutral-400" />
          <span className="font-dm-sans text-xs sm:text-sm text-gray-500 font-regular">
            {document.date}
          </span>
          <span className="text-neutral-400 font-medium text-xs">•</span>
          <span className="font-dm-sans text-xs sm:text-sm text-gray-500 font-regular">
            {document.type}
          </span>
          <span className="text-neutral-400 font-medium text-xs">•</span>
          <span className="font-dm-sans text-xs sm:text-sm text-gray-500 font-regular">
            {document.size}
          </span>
        </div>
      </div>

      {/* Right: Download Action */}
      <a
        href={document.downloadUrl}
        className="flex items-center justify-center gap-2 h-[44px] sm:h-[40px] px-4 border border-purple-200 sm:border-neutral-200 rounded-[12px] bg-purple-50 sm:bg-white text-sm font-semibold sm:font-normal text-purple-700 sm:text-gray-500 shrink-0 cursor-pointer w-full sm:w-auto self-stretch sm:self-start hover:bg-purple-100 sm:hover:bg-neutral-50 transition-colors"
      >
        <HugeiconsIcon icon={Download01Icon} size={20} strokeWidth={2} color="currentColor"/>
        <span className="md:text-base text-sm">Download</span>
      </a>
    </div>
  );
}
