"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { socialLinks } from "@/data/socialLinks";
import { Clock01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

export default function SocialSidebar() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSocialClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setToastMessage(`Official ${name} channel for MCD Mini League is coming soon! Stay tuned.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <>
      {/* Floating Sidebar */}
      <aside 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2.5 p-2 sm:p-3 bg-white/90 backdrop-blur-md border-l border-t border-b border-gray-200/80 rounded-l-2xl shadow-xl transition-all duration-300"
        aria-label="Social Media Links"
      >
        {socialLinks.map((social) => {
          return (
            <div key={social.name} className="relative group flex items-center">
              {/* Hover Tooltip */}
              <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 bg-navy text-white text-[11px] font-bold font-dm-sans px-2.5 py-1 rounded-md whitespace-nowrap shadow-md flex items-center gap-1">
                <span>{social.name}</span>
                <span className="text-orange">• Coming Soon</span>
              </div>

              {/* Social Icon Button */}
              <button
                type="button"
                onClick={(e) => handleSocialClick(e, social.name)}
                aria-label={`Follow us on ${social.name} - Coming Soon`}
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-slate-100 text-navy hover:bg-orange hover:text-white rounded-xl shadow-xs hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <HugeiconsIcon
                  icon={social.icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          );
        })}
      </aside>

      {/* Floating "Coming Soon" Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-navy text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-start gap-3 animate-bounce-short">
          <div className="w-8 h-8 rounded-xl bg-orange/20 text-orange flex items-center justify-center shrink-0 mt-0.5">
            <HugeiconsIcon icon={Clock01Icon} size={18} />
          </div>
          <div className="flex flex-col gap-0.5 flex-1">
            <span className="font-satoshi font-extrabold text-sm text-orange">
              Coming Soon!
            </span>
            <p className="font-dm-sans text-xs text-gray-200 leading-relaxed">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer p-0.5"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={14} />
          </button>
        </div>
      )}
    </>
  );
}
