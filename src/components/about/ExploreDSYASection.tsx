import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Target01Icon, ChartIcon, Shield01Icon } from "@hugeicons/core-free-icons";

const cards = [
  {
    icon: Target01Icon,
    title: "Vision & Mission",
    description: "Explore our vision and strategic goals for grassroots football in Delhi.",
    href: "/about/vision-and-mission",
    color: "var(--color-primary)",
    bgClass: "bg-primary/10"
  },
  {
    icon: ChartIcon,
    title: "League Impact",
    description: "Discover the participation, talent development, and community impact.",
    href: "/about/impact",
    color: "var(--color-violet)",
    bgClass: "bg-violet/10"
  },
  {
    icon: Shield01Icon,
    title: "Governance & Structure",
    description: "Learn about MCD & SITDS governance framework and structure.",
    href: "/about/governance",
    color: "var(--color-cyan)",
    bgClass: "bg-cyan/10"
  },
];

export default function ExploreDSYASection() {
  return (
    <section className="w-full bg-slate-50 border-t border-gray-100 px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20 flex flex-col items-center gap-10 md:gap-14">
      {/* Header */}
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-3 text-center">
        <span className="font-dm-sans font-bold text-xs md:text-sm tracking-wider text-purple uppercase">
          EXPLORE ABOUT SECTIONS
        </span>
        <h2 className="font-satoshi font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-navy-dark max-w-3xl">
          Discover Our Vision, Impact, and Governance Framework
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow gap-6"
          >
            <div className="flex flex-col gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.bgClass}`}>
                <HugeiconsIcon icon={card.icon} size={28} color={card.color} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-satoshi font-bold text-xl text-navy-dark">
                  {card.title}
                </h3>
                <p className="font-dm-sans font-normal text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
            <Link
              href={card.href}
              className="inline-flex items-center gap-2 font-satoshi font-bold text-sm text-purple hover:text-purple-dark transition-colors"
            >
              Explore Section
              <span className="text-base">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
