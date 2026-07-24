import React from "react";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-[16px] p-4 h-[124px] shadow-[0_0_8px_0_rgba(16,24,40,0.05)] border border-neutral-100/50 hover:border-neutral-200 transition-all duration-300">
      <span className="font-satoshi text-base font-bold text-gray-700">{label}</span>
      <div className="flex items-center gap-3">
        <div className="w-[52px] h-[52px] rounded-[8px] bg-purple-50 flex items-center justify-center text-secondary shrink-0">
          {icon}
        </div>
        <span className="font-satoshi text-[32px] font-bold text-slate-900 leading-none">{value}</span>
      </div>
    </div>
  );
}
