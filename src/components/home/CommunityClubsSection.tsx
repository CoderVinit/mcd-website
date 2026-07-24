"use client";

import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon, Location01Icon, UserGroupIcon, ArrowRight02Icon, Building02Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

const sampleClubs = [
  {
    name: 'Central MCD Strikers Club',
    address: 'Defence Colony, Central Delhi',
    region: 'Central Delhi',
    type: 'MCD Club (CSR)',
    schools: 'Central Primary School Network',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
  {
    name: 'South Delhi United Cluster',
    address: 'Green Park & Hauz Khas, New Delhi',
    region: 'South Delhi',
    type: 'Cluster Club (3 Schools)',
    schools: 'Green Park Public + Hauz Khas Academy',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
  {
    name: 'Rohini Lions Sports Club',
    address: 'Sector 9, Rohini, North-West Delhi',
    region: 'North Delhi',
    type: 'Single-School Club',
    schools: 'Delhi Public School Rohini',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
  {
    name: 'Shahdara East Warriors Club',
    address: 'Dilshad Garden, East Delhi',
    region: 'East Delhi',
    type: 'MCD Club (CSR)',
    schools: 'Shahdara East Primary Network',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
  {
    name: 'Civil Lines Cluster Academy',
    address: 'Model Town, North Delhi',
    region: 'North Delhi',
    type: 'Cluster Club (2 Schools)',
    schools: 'Model Town Convent + Civil Lines Sr. Sec.',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
  {
    name: 'Najafgarh Champions Club',
    address: 'Main Road, Najafgarh, West Delhi',
    region: 'West Delhi',
    type: 'MCD Club (CSR)',
    schools: 'Najafgarh MCD Schools',
    sports: 'Football (11v11)',
    members: '12-14 Players / Team (4 Teams)',
  },
];

const CommunityClubsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const router = useRouter();

  const filteredClubs = sampleClubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.schools.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || club.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3.5 max-w-4xl mx-auto">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={Building02Icon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              COMMUNITY CLUBS NETWORK
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
            80 Registered Community Clubs
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans leading-relaxed max-w-2xl">
            Each club is registered with its verified school/facility address and fields 4 teams: Under-11 Girls, Under-11 Boys, Under-9 Girls &amp; Under-9 Boys.
          </p>
        </div>

        {/* Clean Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-3 sm:p-4 rounded-2xl shadow-xs border border-gray-200/80 max-w-3xl mx-auto w-full">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <HugeiconsIcon
              icon={Search01Icon}
              size={18}
              color={colors.gray400}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search club by name, address or school..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200/80 bg-slate-50/50 text-sm font-dm-sans text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>

          {/* Region Filter */}
          <div className="w-full sm:w-48 shrink-0">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              aria-label="Filter by region"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200/80 bg-slate-50/50 text-sm font-dm-sans text-gray-800 focus:outline-none focus:border-amber-500 focus:bg-white cursor-pointer font-medium transition-all"
            >
              <option value="All">All Locations</option>
              <option value="Central Delhi">Central Delhi</option>
              <option value="South Delhi">South Delhi</option>
              <option value="North Delhi">North Delhi</option>
              <option value="East Delhi">East Delhi</option>
              <option value="West Delhi">West Delhi</option>
            </select>
          </div>
        </div>

        {/* Clean Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClubs.map((club, index) => (
            <div
              key={index}
              onClick={() => router.push('/about/listing-of-sports-and-youth-clubs')}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 gap-5 cursor-pointer"
            >
              {/* Top Bar: Type Pill + Location */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-dm-sans bg-amber-500/10 text-amber-700 border border-amber-200/60 shrink-0">
                  {club.type}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium font-dm-sans min-w-0">
                  <HugeiconsIcon icon={Location01Icon} size={15} color={colors.amber} className="shrink-0" />
                  <span className="truncate">{club.address}</span>
                </div>
              </div>

              {/* Club Info */}
              <div className="flex flex-col gap-1.5 py-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 font-satoshi leading-snug">
                  {club.name}
                </h3>
                <p className="text-xs text-gray-500 font-dm-sans leading-relaxed">
                  {club.schools}
                </p>
              </div>

              {/* Footer Meta Bar */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-dm-sans">
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <HugeiconsIcon icon={UserGroupIcon} size={16} className="text-gray-400" />
                  <span>{club.members}</span>
                </div>
                <span className="font-bold text-gray-800">{club.sports}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Clubs Link */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => router.push('/about/listing-of-sports-and-youth-clubs')}
            className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange/90 text-white font-bold text-base px-8 py-4 rounded-xl font-satoshi transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg shadow-orange-500/20"
          >
            Explore Complete Club Directory &amp; Registration Guidelines
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} color={colors.white} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityClubsSection;
