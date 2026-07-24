"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { colors } from "@/theme/colors";
import {
    Copy01Icon,
    Tick01Icon,
    Briefcase01Icon,
    UserMultiple02Icon,
    Store01Icon,
    Award05Icon,
    ArrowRight02Icon,
    Clock01Icon,
    Notification01Icon,
    FavouriteIcon,
    Agreement02Icon,
    ChartAnalysisIcon,
    Shield01Icon,
    Files01Icon,
    Briefcase09Icon,
    Building05Icon,
} from "@hugeicons/core-free-icons";

/* ── Stats ── */
const stats = [
    { label: "Active Tenders", value: 5, icon: Files01Icon },
    { label: "Open Positions", value: 8, icon: Briefcase09Icon },
    { label: "Collaboration Requests", value: 12, icon: Agreement02Icon },
    { label: "Registered Volunteers", value: 4, icon: FavouriteIcon },
];

/* ── Partnership Cards ── */
const partnershipCards = [
    {
        icon: Files01Icon,
        title: "Tenders & RFPs",
        description:
            "Access procurement opportunities for sports infrastructure and services.",
        activeCount: 5,
        activeLabel: "ACTIVE TENDER",
    },
    {
        icon: Briefcase09Icon,
        title: "Careers",
        description:
            "Join our team and contribute to sports development in Meghalaya.",
        activeCount: 12,
        activeLabel: "OPEN POSITIONS",
    },
    {
        icon: FavouriteIcon,
        title: "Volunteer Programs",
        description:
            "Support sports events and community programs as a volunteer.",
        activeCount: 3,
        activeLabel: "REGISTERED VOLUNTEERS",
    },
    {
        icon: Agreement02Icon,
        title: "Collaboration Opportunities",
        description:
            "Partner with DSYA for sports development projects and events.",
        activeCount: 4,
        activeLabel: "ACTIVE PARTNERSHIPS",
    },
    {
        icon: Building05Icon,
        title: "Vendor & Empanelment",
        description:
            "Register as an empaneled vendor for sports equipment, infrastructure, and services.",
        activeCount: 3,
        activeLabel: "OPEN CATEGORIES",
    },
];

/* ── Why Partner Cards ── */
const whyPartnerCards = [
    {
        icon: ChartAnalysisIcon,
        title: "Social Impact",
        description:
            "Contribute to the development of sports infrastructure, athlete welfare, and youth empowerment across all 12 districts of Meghalaya.",
        color: "var(--color-purple)",
        bgColor: "var(--color-blue-50)"
    },
    {
        icon: Shield01Icon,
        title: "Government Partnership",
        description:
            "Work alongside state government initiatives with transparent processes and recognized contribution to public sports development.",
        color: "var(--color-green)",
        bgColor: "var(--color-green-light)"
    },
    {
        icon: Award05Icon,
        title: "Recognition & Growth",
        description:
            "Gain recognition for supporting youth development and access opportunities for professional growth and community impact.",
        color: "var(--color-purple)",
        bgColor: "var(--color-purple-light)",
    },
];

/* ── Open Opportunities ── */
const opportunities = [
    {
        type: "Closeing Soon",
        title: "RFP for Sports Facility Maintenance - Closes May 15, 2026",
        urgent: true,
    },
    {
        type: "New Position",
        title: "Technical Support Coordinator - Apply by May 22, 2026",
        urgent: false,
    },
];

export default function PartnerSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("procurement@dsya.gov.in");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textArea = document.createElement("textarea");
            textArea.value = "procurement@dsya.gov.in";
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="w-full bg-section-bg">
            <div className="w-full max-w-[1440px] mx-auto px-[16px] py-[40px] md:px-[32px] md:py-[60px] lg:px-[64px] lg:py-[100px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">

                {/* ─── Important Notice Bar ─── */}
                <div className="w-full max-w-[1312px] mx-auto flex items-center gap-[24px] h-[80px] px-[14px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(198, 40, 40, 0.05)" }}>
                    <span className="shrink-0 w-[52px] h-[52px] rounded-[54px] bg-[var(--color-red)] flex items-center justify-center p-[10px] gap-[10px]">
                        <HugeiconsIcon icon={Notification01Icon} width={32} height={32} color={colors.white} strokeWidth={1.5} />
                    </span>
                    <div className="flex-1 flex flex-col gap-0 overflow-hidden">
                        <h3 className="font-satoshi font-bold text-[20px] leading-[120%] tracking-[0.01em] text-[var(--color-red)]">
                            Important Notice
                        </h3>
                        <p className="font-dm-sans text-[12px] md:text-[14px] text-[var(--color-red)] leading-[150%] truncate">
                            All tender submissions must be made through the official portal. Deadlines are strictly enforced. For any queries, contact our procurement department at{" "}
                            <a href="mailto:procurement@dsya.gov.in" className="text-[var(--color-red)] underline">
                                procurement@dsya.gov.in
                            </a>
                            <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} width={20} height={20} color={copied ? colors.green : colors.gray700} strokeWidth={1.5} className="inline-block ml-[4px] cursor-pointer" onClick={handleCopy} />
                        </p>
                    </div>
                </div>

                {/* ─── Stats Row ─── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] lg:gap-[24px]">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col gap-[16px] p-[16px] rounded-[16px] bg-white shadow-[0_0_8px_rgba(16,24,40,0.05)]"
                        >
                            <span className="font-satoshi font-bold text-[12px] md:text-[16px] text-gray-700 leading-[150%]">
                                {stat.label}
                            </span>
                            <div className="flex items-center gap-[12px]">
                                <div className="w-[52px] h-[52px] rounded-[8px] bg-purple-light flex items-center justify-center">
                                    <HugeiconsIcon icon={stat.icon} size={32} color={colors.purple} strokeWidth={1.5} />
                                </div>
                                <span className="font-satoshi font-medium text-[24px] md:text-[28px] lg:text-[32px] text-navy-dark leading-[120%]">
                                    {stat.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ─── Header ─── */}
                <div className="flex flex-col items-center gap-[16px] text-center max-w-[1200px] mx-auto w-full">
                    <span className="font-dm-sans text-[12px] md:text-[14px] font-bold tracking-[0.04em] leading-[150%] text-purple">
Explore Opportunities                    </span>
                    <h2 className="font-satoshi font-bold text-[24px] md:text-[48px] lg:text-[60px] leading-[120%] tracking-[0%] text-navy-dark max-w-[1082px]">
                        Explore Partnership Options to Support DSYA and Sports Growth.
                    </h2>
                </div>

                {/* ─── Partnership Cards Grid ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[20px] lg:gap-[24px]">
                    {partnershipCards.map((card) => (
                        <div
                            key={card.title}
                            className="flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-white border border-gray-100"
                        >
                            <div className="flex flex-col gap-4 max-w-[373.34px]">

                                {/* Icon */}
                                <div className="w-[60px] h-[60px] rounded-[12px] bg-[var(--color-purple-light)] flex items-center justify-center">
                                    <HugeiconsIcon icon={card.icon} size={32} color={colors.purple} strokeWidth={1.5} />
                                </div>
                                {/* Title */}
                                <h3 className="font-satoshi font-bold text-[16px] md:text-[20px] leading-[150%] tracking-[0.02em] text-gray-900">
                                    {card.title}
                                </h3>
                                {/* Description */}
                                <p className="font-dm-sans text-[13px] md:text-[18px] text-gray-600 font-medium leading-[150%]">
                                    {card.description}
                                </p>
                            </div>
                            {/* Active badge & CTA */}
                            <div className="flex items-center justify-between max-w-[373.34px]">
                                <div className="flex flex-col gap-[4px]">
                                    <span className="font-satoshi font-normal text-[24px] text-purple leading-[120%]">
                                        {card.activeCount}
                                    </span>
                                    <span className="font-dm-sans text-[16px] font-medium text-gray-500 leading-[150%] tracking-[0.04em]">
                                        {card.activeLabel}
                                    </span>
                                </div>
                                <button className="flex items-center cursor-pointer">
                                    <HugeiconsIcon icon={ArrowRight02Icon} size={24} color={colors.gray500} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ─── Why Partner With DSYA? ─── */}
                <div className="flex flex-col gap-[32px] p-[24px] rounded-[12px] bg-white border border-border-muted shadow-[0_0_8px_rgba(16,24,40,0.05)]">
                    <div className="flex items-center justify-between">
                        <h2 className="font-satoshi font-bold text-[20px] md:text-[24px] lg:text-[33.33px] leading-[120%] tracking-[0%] text-navy">
                            Why Partner With DSYA?
                        </h2>
                        <button className="flex items-center gap-[8px] font-satoshi font-bold text-[13px] md:text-[16px] text-gray-500 hover:underline cursor-pointer bg-transparent border-none p-0 whitespace-nowrap">
                            Learn More
                            <HugeiconsIcon icon={ArrowRight02Icon} size={24} color={colors.gray500} strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]">
                        {whyPartnerCards.map((card) => (
                            <div
                                key={card.title}
                                className="flex flex-col gap-[16px]"
                            >
                                <div
                                    className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center"
                                    style={{ backgroundColor: card.bgColor }}
                                >
                                    <HugeiconsIcon icon={card.icon} size={24} color={card.color} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col gap-3 max-w-[400px]">
                                    <h3 className="font-satoshi font-bold text-[14px] md:text-[20px] leading-[150%] tracking-[0.02em] text-navy-dark">
                                    {card.title}
                                </h3>
                                <p className="font-dm-sans text-[13px] md:text-[18px] text-gray-600 font-medium leading-[150%]">
                                    {card.description}
                                </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── Current Open Opportunities ─── */}
                <div className="flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] py-[40px] px-[16px] md:py-[60px] md:px-[32px] lg:py-[100px] lg:px-[64px] rounded-[16px] md:rounded-[20px] lg:rounded-[25px]" style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-purple))" }}>
                    {/* Header */}
                    <div className="flex flex-col gap-[16px] max-w-[1200px] w-full">
                        <h2 className="font-satoshi font-bold text-[24px] md:text-[36px] lg:text-[48px] leading-[120%] tracking-[0%] text-white">
                            Current Open Opportunities
                        </h2>
                        <p className="font-dm-sans text-[13px] md:text-[14px] text-white/70 leading-[150%]">
                            Don&apos;t miss out on these time-sensitive opportunities to partner with DSYA
                        </p>
                    </div>

                    {/* Opportunity Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
                        {opportunities.map((opp, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-[12px] p-[16px] md:p-[20px] lg:p-[24px] rounded-[12px] bg-white/10"
                                style={{ boxShadow: "inset 0 0 10px 0 rgba(255, 255, 255, 0.08)" }}
                            >
                                <span className="inline-flex items-center gap-[8px] md:gap-[12px] font-satoshi font-bold text-[16px] md:text-[24px] lg:text-[32px] leading-[150%] tracking-[0.04em] text-white">
                                    <span className="w-[40px] h-[40px] rounded-[8px] bg-white/10 flex items-center justify-center shrink-0">
                                        <HugeiconsIcon
                                            icon={opp.urgent ? Clock01Icon : Notification01Icon}
                                            size={20}
                                            color={colors.white}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    {opp.type}
                                </span>
                                <p className="font-dm-sans text-[14px] md:text-[16px] lg:text-[18px] font-medium text-neutral-200 leading-[150%] tracking-[-0.02em]">
                                    {opp.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px]">
                        <button className="flex items-center justify-center gap-[12px] py-[12px] px-[24px] md:py-[16px] md:px-[32px] rounded-[12px] bg-white text-purple font-satoshi font-normal text-[14px] md:text-[16px] leading-[150%] hover:bg-gray-50 transition-colors cursor-pointer">
                            View All Tendders
                        </button>
                        <button className="flex items-center justify-center gap-[12px] h-[48px] md:h-[56px] py-[12px] px-[24px] md:py-[24px] md:px-[32px] rounded-[12px] bg-white/10 border border-white/80 text-white font-satoshi font-normal text-[14px] md:text-[16px] leading-[150%] hover:bg-white/20 transition-colors cursor-pointer" style={{ boxShadow: "inset 0 0 10px 0 rgba(255, 255, 255, 0.08)" }}>
                            Register as Volunteer
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
