"use client";

import React from "react";
import SameRouteScrollLink from "@/components/common/SameRouteScrollLink";
import { HugeiconsIcon } from "@hugeicons/react";
import { socialLinks } from "@/data/socialLinks";

export default function SocialSidebar() {
  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 p-2 sm:p-3 bg-white/15 backdrop-blur-md border-l border-t border-b border-white/20 rounded-l-[12px] sm:rounded-l-18px] shadow-2xl transition-all duration-300 hover:bg-white/25"
      aria-label="Social Media Links"
    >
      {socialLinks.map((social) => {
        const isExternal = social.href.startsWith("http");
        const className =
          "flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-[#e5e5e5] text-[#1e235a] rounded-sm sm:rounded-sm shadow-md hover:bg-purple-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer";

        if (isExternal) {
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className={className}
            >
              <HugeiconsIcon
                icon={social.icon}
                size={22}
                color="currentColor"
                strokeWidth={1.5}
              />
            </a>
          );
        }

        return (
          <SameRouteScrollLink
            key={social.name}
            href={social.href}
            aria-label={`Follow us on ${social.name}`}
            className={className}
          >
            <HugeiconsIcon
              icon={social.icon}
              size={22}
              color="currentColor"
              strokeWidth={1.5}
            />
          </SameRouteScrollLink>
        );
      })}
    </div>
  );
}
