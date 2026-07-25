"use client";

import React, { useState, useMemo } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Calendar03Icon, 
  Location01Icon, 
  Search01Icon, 
  Clock01Icon, 
  FilterIcon,
  Download01Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon
} from '@hugeicons/core-free-icons';
import { colors } from "@/theme/colors";

interface TournamentMatch {
  id: string;
  matchday: string;
  date: string;
  time: string;
  division: 'U-11 Boys' | 'U-11 Girls' | 'U-9 Boys' | 'U-9 Girls';
  pool: string;
  phase: 'Group Stage' | 'Quarter Final' | 'Semi Final' | 'Final';
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  venue: string;
  pitch: string;
  status: 'Scheduled' | 'Live' | 'Completed';
}

const allMatches: TournamentMatch[] = [
  // Matchday 1 - Nov 15
  {
    id: 'M101',
    matchday: 'Matchday 1 - Saturday, Nov 15, 2026',
    date: 'Sat, Nov 15',
    time: '09:00 AM',
    division: 'U-11 Boys',
    pool: 'Pool A',
    phase: 'Group Stage',
    teamA: 'Central MCD Strikers',
    teamB: 'Rohini Lions Club',
    venue: 'Thyagaraj Stadium',
    pitch: 'Main Pitch 1',
    status: 'Scheduled',
  },
  {
    id: 'M102',
    matchday: 'Matchday 1 - Saturday, Nov 15, 2026',
    date: 'Sat, Nov 15',
    time: '10:30 AM',
    division: 'U-11 Girls',
    pool: 'Pool B',
    phase: 'Group Stage',
    teamA: 'South Delhi United',
    teamB: 'Civil Lines Cluster',
    venue: 'Chhatrasal Stadium',
    pitch: 'Main Pitch 2',
    status: 'Scheduled',
  },
  {
    id: 'M103',
    matchday: 'Matchday 1 - Saturday, Nov 15, 2026',
    date: 'Sat, Nov 15',
    time: '11:45 AM',
    division: 'U-11 Boys',
    pool: 'Pool B',
    phase: 'Group Stage',
    teamA: 'Dwarka City FC',
    teamB: 'Okhla Youth Academy',
    venue: 'Thyagaraj Stadium',
    pitch: 'Pitch 2',
    status: 'Scheduled',
  },
  {
    id: 'M104',
    matchday: 'Matchday 1 - Saturday, Nov 15, 2026',
    date: 'Sat, Nov 15',
    time: '01:15 PM',
    division: 'U-11 Girls',
    pool: 'Pool A',
    phase: 'Group Stage',
    teamA: 'Vasant Kunj Panthers',
    teamB: 'Mayur Vihar United',
    venue: 'Chhatrasal Stadium',
    pitch: 'Pitch 1',
    status: 'Scheduled',
  },

  // Matchday 2 - Nov 16
  {
    id: 'M201',
    matchday: 'Matchday 2 - Sunday, Nov 16, 2026',
    date: 'Sun, Nov 16',
    time: '09:30 AM',
    division: 'U-9 Boys',
    pool: 'Pool C',
    phase: 'Group Stage',
    teamA: 'Shahdara East Warriors',
    teamB: 'Najafgarh Champions',
    venue: 'Thyagaraj Stadium',
    pitch: 'Main Pitch 3',
    status: 'Scheduled',
  },
  {
    id: 'M202',
    matchday: 'Matchday 2 - Sunday, Nov 16, 2026',
    date: 'Sun, Nov 16',
    time: '11:00 AM',
    division: 'U-9 Girls',
    pool: 'Pool D',
    phase: 'Group Stage',
    teamA: 'Karol Bagh Tigers',
    teamB: 'West Delhi Academy',
    venue: 'Chhatrasal Stadium',
    pitch: 'Main Pitch 1',
    status: 'Scheduled',
  },
  {
    id: 'M203',
    matchday: 'Matchday 2 - Sunday, Nov 16, 2026',
    date: 'Sun, Nov 16',
    time: '12:30 PM',
    division: 'U-9 Boys',
    pool: 'Pool D',
    phase: 'Group Stage',
    teamA: 'Narela Strikers',
    teamB: 'Pitampura Juniors',
    venue: 'Thyagaraj Stadium',
    pitch: 'Pitch 1',
    status: 'Scheduled',
  },

  // Matchday 3 - Nov 22
  {
    id: 'M301',
    matchday: 'Matchday 3 - Saturday, Nov 22, 2026',
    date: 'Sat, Nov 22',
    time: '09:00 AM',
    division: 'U-11 Boys',
    pool: 'Knockout Stage',
    phase: 'Quarter Final',
    teamA: 'Central MCD Strikers',
    teamB: 'Dwarka City FC',
    venue: 'Thyagaraj Stadium',
    pitch: 'Main Pitch 1',
    status: 'Scheduled',
  },
  {
    id: 'M302',
    matchday: 'Matchday 3 - Saturday, Nov 22, 2026',
    date: 'Sat, Nov 22',
    time: '11:00 AM',
    division: 'U-11 Girls',
    pool: 'Knockout Stage',
    phase: 'Quarter Final',
    teamA: 'South Delhi United',
    teamB: 'Vasant Kunj Panthers',
    venue: 'Chhatrasal Stadium',
    pitch: 'Main Pitch 1',
    status: 'Scheduled',
  },

  // Matchday 4 - Dec 06 (Finals)
  {
    id: 'M401',
    matchday: 'Grand Finals - Saturday, Dec 06, 2026',
    date: 'Sat, Dec 06',
    time: '03:00 PM',
    division: 'U-11 Boys',
    pool: 'Finals',
    phase: 'Final',
    teamA: 'Winner Semi-Final 1',
    teamB: 'Winner Semi-Final 2',
    venue: 'Thyagaraj Stadium',
    pitch: 'Main Stadium Arena',
    status: 'Scheduled',
  },
];

export default function TournamentFixturesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedVenue, setSelectedVenue] = useState<string>('All');

  const divisions = ['All', 'U-11 Boys', 'U-11 Girls', 'U-9 Boys', 'U-9 Girls'];
  const phases = ['All', 'Group Stage', 'Quarter Final', 'Semi Final', 'Final'];
  const venues = ['All', 'Thyagaraj Stadium', 'Chhatrasal Stadium'];

  const filteredMatches = useMemo(() => {
    return allMatches.filter((match) => {
      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        match.teamA.toLowerCase().includes(q) ||
        match.teamB.toLowerCase().includes(q) ||
        match.venue.toLowerCase().includes(q) ||
        match.division.toLowerCase().includes(q) ||
        match.id.toLowerCase().includes(q);

      // Division filter
      const matchesDivision =
        selectedDivision === 'All' || match.division === selectedDivision;

      // Phase filter
      const matchesPhase =
        selectedPhase === 'All' || match.phase === selectedPhase;

      // Venue filter
      const matchesVenue =
        selectedVenue === 'All' || match.venue.includes(selectedVenue);

      return matchesSearch && matchesDivision && matchesPhase && matchesVenue;
    });
  }, [searchQuery, selectedDivision, selectedPhase, selectedVenue]);

  // Group matches by matchday
  const groupedMatches = useMemo(() => {
    const groups: { [key: string]: TournamentMatch[] } = {};
    filteredMatches.forEach((m) => {
      if (!groups[m.matchday]) groups[m.matchday] = [];
      groups[m.matchday].push(m);
    });
    return groups;
  }, [filteredMatches]);

  return (
    <div className="w-full bg-slate-50 min-h-screen py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

        {/* Top Intro Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
              <HugeiconsIcon icon={Calendar03Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans text-orange uppercase tracking-wider">
                MCD MINI LEAGUE 2026 FIXTURES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-dark font-satoshi">
              Official Match Schedule &amp; Fixtures
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-dm-sans">
              80 Football Clubs competing across U-9 and U-11 Divisions in Delhi-NCR.
            </p>
          </div>

          {/* Download Official Schedule PDF */}
          <button
            onClick={() => alert("Downloading Official MCD Mini League Match Schedule (PDF)...")}
            className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-6 py-3.5 rounded-xl font-satoshi font-bold text-sm transition-all duration-300 shadow-md cursor-pointer shrink-0"
          >
            <HugeiconsIcon icon={Download01Icon} size={18} />
            <span>Download Schedule (PDF)</span>
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs flex flex-col gap-6">
          
          {/* Search + Dropdowns Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by team, club name or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple transition-colors"
              />
            </div>

            {/* Stage / Phase Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedPhase}
                onChange={(e) => setSelectedPhase(e.target.value)}
                aria-label="Filter by Tournament Stage"
                className="w-full py-2.5 px-3.5 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans text-gray-800 focus:outline-none focus:border-purple cursor-pointer"
              >
                <option value="All">All Tournament Stages</option>
                {phases.filter(p => p !== 'All').map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Venue Dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                aria-label="Filter by Venue"
                className="w-full py-2.5 px-3.5 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans text-gray-800 focus:outline-none focus:border-purple cursor-pointer"
              >
                <option value="All">All Stadium Venues</option>
                {venues.filter(v => v !== 'All').map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Division Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
            <span className="text-xs font-bold font-dm-sans text-gray-400 uppercase tracking-wider mr-2">
              Division:
            </span>
            {divisions.map((div) => (
              <button
                key={div}
                onClick={() => setSelectedDivision(div)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-satoshi transition-all cursor-pointer ${
                  selectedDivision === div
                    ? 'bg-[#F58220] text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200/80'
                }`}
              >
                {div}
              </button>
            ))}
          </div>
        </div>

        {/* Fixtures Results List */}
        {Object.keys(groupedMatches).length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-gray-200/80 text-center flex flex-col items-center gap-3">
            <HugeiconsIcon icon={InformationCircleIcon} size={40} className="text-gray-400" />
            <h3 className="font-satoshi font-bold text-xl text-navy-dark">No Fixtures Found</h3>
            <p className="font-dm-sans text-sm text-gray-500 max-w-md">
              No matches match your current filter criteria. Try adjusting your search query or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDivision('All');
                setSelectedPhase('All');
                setSelectedVenue('All');
              }}
              className="mt-2 text-sm font-bold font-satoshi text-purple hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          Object.entries(groupedMatches).map(([matchday, matches]) => (
            <div key={matchday} className="flex flex-col gap-4">
              
              {/* Matchday Banner */}
              <div className="flex items-center justify-between px-2">
                <h3 className="font-satoshi font-bold text-lg sm:text-xl text-navy-dark flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange"></span>
                  {matchday}
                </h3>
                <span className="text-xs font-dm-sans font-semibold text-gray-500 bg-slate-200/60 px-3 py-1 rounded-full">
                  {matches.length} {matches.length === 1 ? 'Match' : 'Matches'}
                </span>
              </div>

              {/* Match Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-300 gap-5"
                  >
                    {/* Card Top Header */}
                    <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-200/60 font-bold text-xs font-dm-sans">
                          {match.division} ({match.pool})
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-gray-600 text-[11px] font-medium font-dm-sans">
                          {match.phase}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium font-dm-sans">
                        <HugeiconsIcon icon={Clock01Icon} size={15} className="text-gray-400" />
                        <span>{match.time}</span>
                      </div>
                    </div>

                    {/* Team Matchup Row */}
                    <div className="grid grid-cols-11 items-center gap-2 py-2">
                      <div className="col-span-5 text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 font-satoshi leading-snug">
                          {match.teamA}
                        </h4>
                      </div>

                      <div className="col-span-1 flex justify-center">
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-black font-satoshi border border-amber-200/60">
                          VS
                        </span>
                      </div>

                      <div className="col-span-5 text-center sm:text-right">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 font-satoshi leading-snug">
                          {match.teamB}
                        </h4>
                      </div>
                    </div>

                    {/* Card Bottom Venue Footer */}
                    <div className="flex items-center justify-between gap-4 text-xs font-dm-sans pt-3.5 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-gray-600 font-medium min-w-0">
                        <HugeiconsIcon icon={Location01Icon} size={15} color={colors.amber} className="shrink-0" />
                        <span className="truncate">{match.venue} ({match.pitch})</span>
                      </div>
                      <span className="font-bold text-gray-800 shrink-0">Football 11v11</span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}
