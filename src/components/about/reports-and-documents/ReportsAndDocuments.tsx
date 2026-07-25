"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import DocumentCard, { DocumentItem } from "./DocumentCard";

const initialDocuments: DocumentItem[] = [
  {
    title: "State Sports Budget 2024-25",
    category: "Financial Document",
    description: "Specialized Coaching Camps Aimed At Nurturing Young Talents With Professional Trainers And Nutritional Support To Improve Performance And Competitiveness.",
    date: "February 2026",
    year: "2026",
    type: "PDF",
    size: "1.93 MB",
    downloadUrl: "#",
  },
  {
    title: "Annual Sports Report 2025",
    category: "Annual Report",
    description: "Comprehensive review of sports achievements, infrastructure milestones, and state-level athlete performances throughout the year.",
    date: "December 2025",
    year: "2025",
    type: "PDF",
    size: "4.52 MB",
    downloadUrl: "#",
  },
  {
    title: "Delhi Grassroots Sports Policy 2024",
    category: "Policy Document",
    description: "Official guidelines, structures, and direct incentives aimed at promoting community fitness and training paths for high-performance athletes.",
    date: "August 2024",
    year: "2024",
    type: "PDF",
    size: "2.10 MB",
    downloadUrl: "#",
  },
  {
    title: "Infrastructure Development Grant Guidelines",
    category: "Official Notification",
    description: "Procedural details, eligibility conditions, and funding schemes for regional and local clubs requesting facility development support.",
    date: "January 2026",
    year: "2026",
    type: "PDF",
    size: "820 KB",
    downloadUrl: "#",
  },
];

const categories = ["All", "Financial Document", "Policy Document", "Annual Report", "Official Notification"];
const years = ["All Years", "2026", "2025", "2024"];

export default function ReportsAndDocuments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All Years");

  // Filtering Logic
  const filteredDocuments = initialDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    const matchesYear = selectedYear === "All Years" || doc.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section className="w-full bg-white py-12 px-4 md:py-[100px] md:px-[64px]">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col gap-10 lg:gap-[80px]">
        {/* Header Block (Flow: Vertical, Gap: 12px) */}
        <div className="w-full flex flex-col gap-3">
          <span className="font-dm-sans text-xs sm:text-sm font-bold text-purple-500 tracking-wider">
            Government Support
          </span>
          <h2 className="font-satoshi text-[32px] sm:text-[48px] lg:text-[60px] font-bold text-slate-900 leading-[120%] tracking-tight">
            Reports & Documents
          </h2>
          <p className="font-dm-sans text-sm sm:text-base lg:text-lg text-gray-500">
            Access official reports, policy documents, and departmental publications from MCD &amp; SITDS
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="w-full bg-white border border-neutral-50 rounded-[12px] p-[20px] flex flex-col md:flex-row md:items-center gap-[10px] shadow-[0_0_12px_rgba(16,24,40,0.08)] h-auto md:h-[88px]">
          {/* Search Input */}
          <div className="flex items-center gap-3 w-full md:flex-1 min-w-0 border border-neutral-200 rounded-[12px] px-3 bg-white focus-within:border-purple-500 transition-colors duration-200 h-[48px]">
            <HugeiconsIcon icon={Search01Icon} size={20} className="text-neutral-400 shrink-0" />
            <input
              type="text"
              placeholder="Search reports or documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-transparent outline-none text-sm text-slate-800 placeholder-neutral-400 font-dm-sans"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:w-auto md:min-w-[200px] h-[48px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-full border border-neutral-200 rounded-[12px] pl-3 pr-10 appearance-none bg-white text-sm text-gray-500 font-dm-sans outline-none cursor-pointer focus:border-purple-500 transition-colors font-normal"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat === "All" ? "All" : cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
            </div>
          </div>

          {/* Year Dropdown */}
          <div className="relative w-full md:w-auto md:min-w-[160px] h-[48px]">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full h-full border border-neutral-200 rounded-[12px] pl-3 pr-10 appearance-none bg-white text-sm text-neutral-600 font-dm-sans outline-none cursor-pointer focus:border-purple-500 transition-colors"
            >
              {years.map((y, idx) => (
                <option key={idx} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
            </div>
          </div>
        </div>

        {/* Documents List */}
        {filteredDocuments.length > 0 ? (
          <div className="w-full flex flex-col gap-6">
            {filteredDocuments.map((doc, idx) => (
              <DocumentCard key={idx} document={doc} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16 bg-white border border-neutral-200 rounded-[24px]">
            <p className="font-dm-sans text-base text-neutral-400 font-medium mb-2">No documents found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedYear("All Years");
              }}
              className="text-purple-600 font-semibold font-dm-sans text-sm hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
