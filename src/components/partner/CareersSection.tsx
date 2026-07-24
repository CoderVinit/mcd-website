"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  ArrowDown01Icon,
  Location06Icon,
  Calendar03Icon,
  ArrowRight02Icon,
  Download01Icon,
  Briefcase09Icon,
  Award01Icon,
  UserGroup03Icon,
  ChartNoAxesCombinedIcon,
  ChartUpIcon,
  Award05Icon,
} from "@hugeicons/core-free-icons";
import showSweetAlert from "@/components/SweetAlert/SweetAlert";

interface JobOpening {
  id: number;
  title: string;
  type: string;
  track: string;
  department: string;
  description: string;
  location: string;
  applyBy: string;
  requirements: string[];
}

export default function CareersSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Type");

  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Technical Support Coordinator",
      type: "Full-Time",
      track: "Technical",
      department: "Sports Development Wing",
      description:
        "Coordinate technical support for sports programs, manage digital platform and assist in data management for athlete development initiatives.",
      location: "Shillong, Meghalaya",
      applyBy: "15 April, 2026",
      requirements: ["Bachelor's in Computer Science", "2+ years experience"],
    },
    {
      id: 2,
      title: "Visual Content Creator",
      type: "Part-Time",
      track: "Creative",
      department: "Marketing Department",
      description:
        "Develop engaging visual content for social media campaigns, collaborate with marketing team for promotional materials.",
      location: "Guwahati, Assam",
      applyBy: "20 March, 2026",
      requirements: [
        "Bachelor's in Design Or Related Field",
        "1+ year experience",
      ],
    },
    {
      id: 3,
      title: "Technical Support Coordinator",
      type: "Full-Time",
      track: "Technical",
      department: "Sports Development Wing",
      description:
        "Coordinate technical support for sports programs, manage digital platform and assist in data management for athlete development initiatives.",
      location: "Shillong, Meghalaya",
      applyBy: "15 April, 2026",
      requirements: ["Bachelor's in Computer Science", "3+ years experience"],
    },
    {
      id: 4,
      title: "Content Writing Intern",
      type: "Internship",
      track: "Editorial",
      department: "Editorial Team",
      description:
        "Assist in writing articles, edit content for clarity, and support the team in research for upcoming publications.",
      location: "Imphal, Manipur",
      applyBy: "30 March, 2026",
      requirements: [
        "Pursuing A Degree In Journalism Or Communications",
        "Strong writing skills",
      ],
    },
  ];

  const handleApplyClick = (jobTitle: string) => {
    showSweetAlert({
      type: "success",
      title: "Application Initiated",
      text: `You are applying for the position of ${jobTitle}. The recruitment portal will contact you with application instructions shortly.`,
    });
  };

  const handleDownloadClick = (jobTitle: string) => {
    showSweetAlert({
      type: "info",
      title: "Downloading PDF",
      text: `Downloading full details for ${jobTitle}...`,
    });
  };

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "All Type" || job.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <section className="w-full bg-gray-100 py-[100px] px-4 md:px-[64px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[80px]">
        {/* Banner Title Block */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-satoshi text-[48px] md:text-[60px] font-bold text-navy-dark leading-[120%] tracking-tight">
            Join Our Team
          </h2>
          <p className="font-dm-sans text-gray-500 text-base md:text-lg leading-[150%] max-w-[508px] mx-auto font-medium">
            Build your career while contributing to sports development and youth
            empowerment across Meghalaya
          </p>
        </div>

        {/* Value Proposition Cards Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-8">
            <div className="w-15 h-15 rounded-xl bg-dept-teal text-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={ChartUpIcon} size={32} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-satoshi text-[20px] font-bold text-navy-dark leading-[120%]">
                Career Growth
              </h3>
              <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                Professional development opportunities and structured career
                progression
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-8">
            <div className="w-15 h-15 rounded-xl bg-dept-blue text-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Award05Icon} size={32} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-satoshi text-[20px] font-bold text-navy-dark leading-[120%]">
                Meaningful Work
              </h3>
              <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                Contribute to sports development and create lasting social
                impact
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-8">
            <div className="w-15 h-15 rounded-xl bg-dept-purple text-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={UserGroup03Icon} size={32} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-satoshi text-[20px] font-bold text-navy-dark leading-[120%]">
                Collaborative Culture
              </h3>
              <p className="font-satoshi text-gray-600 text-base leading-[150%] font-normal">
                Work with passionate professionals dedicated to youth
                empowerment
              </p>
            </div>
          </div>
        </div>

        {/* Filter and Listings Container */}
        <div className="flex flex-col gap-10 w-full">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-2.5 w-full bg-white p-5 rounded-xl border border-[#FAFAFA] items-center justify-between shadow-sm">
            <div className="relative w-full md:flex-grow flex items-center">
              <div className="absolute left-4 text-gray-400">
                <HugeiconsIcon icon={Search01Icon} size={24} />
              </div>
              <input
                type="text"
                placeholder="Search by title or reference number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-15 pr-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:border-purple font-dm-sans text-gray-800 placeholder-gray-400"
              />
            </div>

            <div className="relative w-full md:max-w-[230px] flex items-center shrink-0">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none appearance-none pr-10 cursor-pointer font-dm-sans bg-white text-gray-500"
              >
                <option value="All Type">All Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
              </select>
              <div className="absolute right-3 pointer-events-none text-gray-500 flex items-center">
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
              </div>
            </div>
          </div>

          {/* Job Listings List */}
          <div className="flex flex-col gap-6 w-full">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-[24px] p-6 border border-gray-200 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                >
                  {/* Top Section: Job Info + Buttons */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                    <div className="flex flex-col gap-4 flex-grow">
                      {/* Badges */}
                      <div className="flex gap-2">
                        <span className="px-3 w-[88px] h-[28px] flex items-center justify-center rounded-lg text-xs font-bold font-satoshi bg-blue-500/10 text-blue-600">
                          {job.type}
                        </span>
                        <span className="px-3 w-[88px] h-[28px] flex items-center justify-center rounded-lg text-xs font-bold font-satoshi bg-purple-500/10 text-purple-500">
                          {job.track}
                        </span>
                      </div>

                      {/* Title & Department */}
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <h4 className="font-satoshi text-2xl font-bold text-black leading-[150%] tracking-tight">
                              {job.title}
                            </h4>
                            <div>
                            <span className="inline-flex items-center gap-[6px] px-3 h-[28px] rounded-[8px] text-sm font-bold font-dm-sans bg-green-50 text-green-500 whitespace-nowrap">
                                <HugeiconsIcon
                                  icon={Briefcase09Icon}
                                  size={18}
                                />
                                {job.department}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-dm-sans text-gray-500 text-sm leading-[150%] font-normal max-w-[822px]">
                            {job.description}
                          </p>
                        </div>

                        {/* Location & Apply Date */}
                        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500 font-dm-sans leading-[150%]">
                          <div className="flex items-center gap-1.5">
                            <HugeiconsIcon icon={Location06Icon} size={20} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <HugeiconsIcon icon={Calendar03Icon} size={20} />
                            <span>
                              Apply by:{" "}
                              <strong className="text-gray-900">
                                {job.applyBy}
                              </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons block */}
                    <div className="flex flex-col gap-3 shrink-0 w-full md:max-w-[250px]">
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 text-white font-satoshi font-medium text-base rounded-xl hover:opacity-90 transition-all cursor-pointer w-full md:nax-w-[250px] h-[56px]"
                      >
                        Apply Now
                        <HugeiconsIcon icon={ArrowRight02Icon} size={24} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownloadClick(job.title)}
                        className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-500 bg-white font-satoshi font-medium text-sm rounded-xl hover:bg-gray-50 transition-all cursor-pointer w-full md:max-w-[250px] h-[56px]"
                      >
                        <HugeiconsIcon icon={Download01Icon} size={20} />
                        Download PDF
                      </button>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="h-px w-full bg-gray-200" />

                  {/* Bottom Section: Requirements Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-sm font-satoshi">
                    <span className="text-gray-400 mr-2 font-medium">
                      Requirements:
                    </span>
                    {job.requirements.map((req, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-900 font-semibold rounded-lg text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-[24px] p-10 text-center border border-gray-100 shadow-sm">
                <p className="font-dm-sans text-gray-500 font-medium">
                  No positions found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
