"use client";

import Link from "next/link";
import {
  ArrowRight02Icon,
  Calendar03Icon,
  ChampionIcon,
  FileValidationIcon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo, useState } from "react";

const quickAccessCards = [
  {
    icon: User03Icon,
    label: "REGISTER ATHLETE",
    href: "/registration",
  },
  {
    icon: Calendar03Icon,
    label: "BOOK A FACILITY",
    href: "/infrastructure/venues-facilities",
  },
  {
    icon: ChampionIcon,
    label: "VIEW TOURNAMENT",
    href: "/tournaments",
  },
  {
    icon: FileValidationIcon,
    label: "APPLY FOR SCHEME",
    href: "/schemes",
  },
];

interface QuickAccessPanelProps {
  onClose: () => void;
  className?: string;
  highlightFirstCard?: boolean;
  titleId?: string;
  descriptionId?: string;
}

export const QuickAccessPanel = memo(function QuickAccessPanel({
  onClose,
  className = "",
  highlightFirstCard = false,
  titleId,
  descriptionId,
}: QuickAccessPanelProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      className={`flex h-full w-full min-w-0 flex-col gap-6 overflow-y-auto bg-white p-4 sm:p-6 sm:gap-8 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <h2
          id={titleId}
          className="font-satoshi font-bold text-navy text-2xl tracking-wide"
        >
          Quick Access
        </h2>
        <p
          id={descriptionId}
          className="font-dm-sans text-gray-500 text-base font-medium leading-[150%]"
        >
          Jump straight to key actions and essential tools.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {quickAccessCards.map((card, idx) => {
          const isPrimary =
            hoveredIdx !== null ? hoveredIdx === idx : highlightFirstCard && idx === 0;

          return (
            <Link
              key={card.label}
              href={card.href}
              onClick={onClose}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative flex flex-col items-start gap-4 rounded-[20px] border border-neutral-100 bg-white p-4 overflow-hidden transition-all hover:border-transparent hover:shadow-md"
            >
              {/* <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2196F3] to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-l-[20px]" /> */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isPrimary ? "bg-purple-50" : "bg-gray-50"
                }`}
              >
                <HugeiconsIcon
                  icon={card.icon}
                  size={24}
                  className={`transition-colors ${
                    isPrimary ? "text-secondary" : "text-gray-500"
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-satoshi font-bold text-lg tracking-[0.01em] leading-[120%] transition-all ${
                    isPrimary
                      ? "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
                      : "text-navy"
                  }`}
                >
                  {card.label}
                </span>
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={18}
                  className={`shrink-0 transition-colors ${
                    isPrimary ? "text-primary" : "text-navy"
                  }`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
});
