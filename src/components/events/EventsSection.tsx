'use client';

import React, { useState, useMemo } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar03Icon, Search01Icon } from '@hugeicons/core-free-icons';
import Image from '@/components/common/ImageWithLoader';
import EventCard from './EventCard';
import type { EventItem } from './EventCard';

const FILTER_TABS = ['All Events', 'Upcoming', 'Live', 'Completed', 'Event Calendar'] as const;

const eventsData: EventItem[] = [
  {
    id: 1,
    image: '/images/events/one.png',
    sport: 'Football',
    status: 'Upcoming',
    title: 'MCD Mini League Opening Knockout Round 2026',
    venue: 'Thyagaraj Stadium Arena, INA Colony, New Delhi',
    dateRange: '31 Mar, 2026 – 14 Apr, 2026',
  },
  {
    id: 2,
    image: '/images/events/two.png',
    sport: 'Football',
    status: 'Upcoming',
    title: 'Delhi Primary Schools Sports Festival',
    venue: 'Chhatrasal Stadium, Model Town, North Delhi',
    dateRange: '12 May, 2026 – 15 May, 2026',
  },
  {
    id: 3,
    image: '/images/events/three.png',
    sport: 'Football',
    status: 'Upcoming',
    title: 'MCD Inter-Zone Grassroots Football Cup',
    venue: 'Dr. Ambedkar Stadium, Delhi Gate, New Delhi',
    dateRange: '10 Apr, 2026 – 16 Apr, 2026',
  },
  {
    id: 4,
    image: '/images/events/four.png',
    sport: 'Football',
    status: 'Live',
    title: 'MCD Cluster Football Tournament',
    venue: 'Thyagaraj Stadium Main Pitch, New Delhi',
    dateRange: '28 Mar, 2026 – 5 Apr, 2026',
  },
  {
    id: 5,
    image: '/images/events/five.png',
    sport: 'Football',
    status: 'Completed',
    title: 'Delhi Primary School Invitational Cup',
    venue: 'Jawaharlal Nehru Stadium Outer Turf, New Delhi',
    dateRange: '14 Feb, 2026 – 17 Feb, 2026',
  },
  {
    id: 6,
    image: '/images/events/six.png',
    sport: 'Multi-Sports',
    status: 'Completed',
    title: 'National Grassroots Games – Delhi Phase',
    venue: 'East Delhi Sports Complex, Tahirpur, Delhi',
    dateRange: 'Jan 2027',
  },
  {
    id: 7,
    image: '/images/events/seven.png',
    sport: 'Football',
    status: 'Upcoming',
    title: 'MCD Primary Girls Football Championship',
    venue: 'Rohini Sports Complex, Sector 14, North West Delhi',
    dateRange: '9 Mar, 2026 – 14 Apr, 2026',
  },
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parseEventDate(str: string): Date | null {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const match = str.trim().match(/^(\d{1,2})\s+(\w{3}),?\s+(\d{4})$/);
  if (!match) return null;
  return new Date(parseInt(match[3]), months[match[2]], parseInt(match[1]));
}

function getEventDateMap(events: EventItem[]): Map<string, EventItem[]> {
  const map = new Map<string, EventItem[]>();
  for (const event of events) {
    const parts = event.dateRange.split('\u2013').map((s) => s.trim());
    const start = parseEventDate(parts[0]);
    const end = parts[1] ? parseEventDate(parts[1]) : null;
    if (!start) continue;
    const endDate = end ?? start;
    const cur = new Date(start);
    while (cur <= endDate) {
      const key = `${cur.getFullYear()}-${cur.getMonth()}-${cur.getDate()}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);
      cur.setDate(cur.getDate() + 1);
    }
  }
  return map;
}

function EventCalendarModal({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const eventDateMap = useMemo(() => getEventDateMap(eventsData), []);

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prevMonth = () => { setViewDate(new Date(year, month - 1, 1)); setSelectedDay(null); };
  const nextMonth = () => { setViewDate(new Date(year, month + 1, 1)); setSelectedDay(null); };

  const selectedEvents = selectedDay
    ? (eventDateMap.get(`${year}-${month}-${selectedDay}`) ?? [])
    : [];

  const monthEvents = eventsData.filter((event) => {
    const parts = event.dateRange.split('\u2013').map((s) => s.trim());
    const start = parseEventDate(parts[0]);
    const end = parts[1] ? parseEventDate(parts[1]) : null;
    if (!start) return false;
    const endDate = end ?? start;
    return start <= new Date(year, month + 1, 0) && endDate >= new Date(year, month, 1);
  });

  const panelEvents = selectedDay ? selectedEvents : monthEvents;
  const panelTitle = selectedDay
    ? `Events on ${selectedDay} ${MONTH_NAMES[month]}`
    : `Events in ${MONTH_NAMES[month]}`;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-[640px] lg:max-w-[900px] max-h-[92vh] sm:max-h-[90vh] overflow-y-auto sm:mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-gray-100">
          <span className="font-satoshi font-bold text-[16px] sm:text-[20px] text-navy-dark">Event Calendar</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 text-xl cursor-pointer"
            aria-label="Close calendar"
          >
            &#10005;
          </button>
        </div>

        {/* Modal body */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-8">
          {/* Calendar */}
          <div className="flex-1 min-w-0">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <button
                onClick={prevMonth}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600 text-xl font-bold cursor-pointer"
              >
                &#8249;
              </button>
              <span className="font-satoshi font-bold text-[15px] sm:text-[18px] text-navy-dark">
                {MONTH_NAMES[month]} {year}
              </span>
              <button
                onClick={nextMonth}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600 text-xl font-bold cursor-pointer"
              >
                &#8250;
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 mb-1 sm:mb-2">
              {DAY_LABELS.map((d) => (
                <div key={d} className="text-center text-[11px] sm:text-[12px] font-semibold text-gray-400 font-dm-sans py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Date cells */}
            <div className="grid grid-cols-7 gap-y-0.5 sm:gap-y-1">
              {cells.map((day, i) => {
                if (!day) return <div key={i} />;
                const key = `${year}-${month}-${day}`;
                const dayEvents = eventDateMap.get(key) ?? [];
                const hasEvent = dayEvents.length > 0;
                const isToday =
                  year === today.getFullYear() &&
                  month === today.getMonth() &&
                  day === today.getDate();
                const isSelected = selectedDay === day;

                return (
                  <div
                    key={i}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
                    className={`relative flex flex-col items-center justify-center rounded-lg mx-0.5 py-1.5 sm:py-2 cursor-pointer transition-all
                      ${
                        isSelected
                          ? 'bg-purple text-white'
                          : hasEvent
                          ? 'bg-purple/10 text-purple hover:bg-purple/20'
                          : 'hover:bg-gray-50 text-gray-700'
                      }
                      ${isToday && !isSelected ? 'ring-2 ring-purple ring-offset-1' : ''}
                    `}
                  >
                    <span className="text-[12px] sm:text-[14px] font-semibold font-dm-sans leading-none">{day}</span>
                    {hasEvent && (
                      <span className="mt-0.5 sm:mt-1 flex gap-0.5">
                        {dayEvents.slice(0, 3).map((_, idx) => (
                          <span key={idx} className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-purple'}`} />
                        ))}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-purple/10 border border-purple/30" />
                <span className="text-[11px] sm:text-[12px] font-dm-sans text-gray-500">Has events</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm ring-2 ring-purple" />
                <span className="text-[11px] sm:text-[12px] font-dm-sans text-gray-500">Today</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-purple" />
                <span className="text-[11px] sm:text-[12px] font-dm-sans text-gray-500">Selected</span>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="lg:w-[260px] xl:w-[280px] flex flex-col gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-6">
            <h3 className="font-satoshi font-bold text-[14px] sm:text-[16px] text-navy-dark">{panelTitle}</h3>
            {panelEvents.length === 0 ? (
              <p className="text-gray-400 font-dm-sans text-[13px] sm:text-[14px]">
                No events {selectedDay ? 'on this day' : 'this month'}.
              </p>
            ) : (
              <div className="flex flex-col gap-2 sm:gap-3 overflow-y-auto max-h-[220px] sm:max-h-[320px] lg:max-h-[380px] pr-1">
                {panelEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-3 p-2.5 sm:p-3 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={48}
                      height={48}
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold font-dm-sans uppercase tracking-wider ${
                          event.status === 'Live'
                            ? 'text-green-600'
                            : event.status === 'Upcoming'
                            ? 'text-purple'
                            : 'text-gray-400'
                        }`}
                      >
                        {event.status}
                      </span>
                      <span className="text-[12px] sm:text-[13px] font-semibold font-dm-sans text-navy-dark leading-tight line-clamp-2">
                        {event.title}
                      </span>
                      <span className="text-[11px] sm:text-[12px] text-gray-400 font-dm-sans">{event.dateRange}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<string>('All Events');
  const [search, setSearch] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const filtered = eventsData.filter((e) => {
    const matchesTab = activeTab === 'All Events' || e.status === activeTab;
    const matchesSearch =
      !search || e.title.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
    {showCalendar && <EventCalendarModal onClose={() => setShowCalendar(false)} />}
    <section className="w-full bg-white pt-[40px] pb-[40px] px-[16px] md:pt-[60px] md:pb-[60px] md:px-[32px] lg:pt-[100px] lg:pb-[100px] lg:px-[64px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <span className="text-[12px] md:text-[14px] font-bold tracking-[0.04em] text-purple font-dm-sans uppercase leading-[150%]">
            Sports Calendar
          </span>
          <h2 className="text-[28px] md:text-[40px] lg:text-[60px] font-satoshi font-bold text-navy-dark leading-[120%] tracking-[0%] m-0">
            Events & Competitions
          </h2>
        </div>

        {/* Filters, Search & Cards */}
        <div className="flex flex-col gap-[32px]">
          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === 'Event Calendar') {
                      setShowCalendar(true);
                    } else {
                      setActiveTab(tab);
                    }
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-[13px] sm:text-[14px] font-bold font-satoshi border transition-colors cursor-pointer whitespace-nowrap ${
                    (tab !== 'Event Calendar' && activeTab === tab)
                      ? 'bg-[#F58220] text-white border-[#F58220] shadow-md shadow-orange-500/20'
                      : 'bg-slate-100 text-gray-600 border-gray-200 hover:bg-slate-200'
                  }`}
                >
                  {tab === 'Event Calendar' ? (
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon icon={Calendar03Icon} size={16} className="text-gray-500" />
                    </span>
                  ) : (
                    tab
                  )}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 w-full sm:w-[300px] lg:w-[400px] h-[44px] px-[14px] rounded-[12px] border border-gray-300 bg-white shrink-0">
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                className="shrink-0 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 font-dm-sans text-[14px] text-gray-700 placeholder:text-gray-400 leading-[150%] outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[16px] gap-y-[24px]">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-gray-400 font-dm-sans text-[16px] py-12">
                No events found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
