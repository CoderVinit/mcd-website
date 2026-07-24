"use client";

import React from 'react';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import {ArrowRight02Icon,AlarmClockIcon,Location06Icon,Ticket02Icon,Share03Icon} from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from "@/theme/colors";

type EventStatus = 'Upcoming' | 'Live' | 'Completed';

interface Event {
  sport: string;
  sportIcon: string;
  date: string;
  time: string;
  title: string;
  status: EventStatus;
  tournament: string;
  venue: string;
  region: string;
  showBuyTickets: boolean;
}

const events: Event[] = [
  {
    sport: 'Football',
    sportIcon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098450_football.svg',
    date: 'Wednesday 01 Apr 2026',
    time: '05:00 PM IST',
    title: 'Team A v/s Team B',
    status: 'Upcoming',
    tournament: 'Asian Acrobatics Gymnastics Championship',
    venue: 'Umsning Sports Complex, Umsning, Ri-Bhoi District',
    region: 'Meghalaya',
    showBuyTickets: true,
  },
  {
    sport: 'Athletics',
    sportIcon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098501_athlete.svg',
    date: 'Monday 30 Mar 2026',
    time: 'All day event',
    title: 'Meghalaya Athletics Day 3',
    status: 'Live',
    tournament: 'Athletics Championship',
    venue: 'Shillong Indoor Stadium, Shillong',
    region: 'Meghalaya',
    showBuyTickets: true,
  },
  {
    sport: 'Gymnastics',
    sportIcon: 'https://meghalaya-s3-bucket.s3.ap-south-1.amazonaws.com/images/1779098472_gymnastics.svg',
    date: 'Sunday 29 Mar 2026',
    time: 'All day event',
    title: 'Gymnastics Day 5',
    status: 'Completed',
    tournament: 'Gymnastics Championship',
    venue: 'Jawaharlal Nehru Stadium, Shillong',
    region: 'Meghalaya',
    showBuyTickets: false,
  },
];

const statusStyles: Record<EventStatus, string> = {
  Upcoming: 'bg-amber/5 text-warning',
  Live: 'bg-error-light/5 text-error-light',
  Completed: 'bg-emerald-dark/10 text-emerald-dark',
};

const EventsSection = () => {

    const router = useRouter();

  return (
    <section
      className="w-full max-w-[1440px] mx-auto bg-white flex flex-col py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10 lg:py-[100px] lg:px-[64px]"
    >
      {/* Inner container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-[60px]">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-[40px]">
        <div className="flex flex-col gap-3">
          <span className="text-purple text-[14px] font-bold tracking-[0.04em] leading-[150%] font-dm-sans">
            Sports calender
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold text-navy-dark leading-[120%] font-satoshi">
            Events & Competitions
          </h2>
          <p className="max-w-[546px] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[150%] text-gray-500 font-dm-sans">
            Register for state and national level sports events in Meghalaya.
          </p>
        </div>
        <div className='flex gap-4'>
        <button onClick={() => router.push('/events')} className="w-full sm:w-auto flex items-center justify-center gap-3 border-[2px] border-navy rounded-xl py-4 px-8 text-[14px] sm:text-[16px] text-navy font-satoshi font-normal hover:bg-navy hover:cursor-pointer hover:text-white transition-all duration-300 shrink-0">
          All Events
          <HugeiconsIcon icon={ArrowRight02Icon} width={24} height={24} color="currentColor" strokeWidth={2.5}/>
        </button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="w-full flex flex-col gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full rounded-[24px] border border-neutral-200 bg-white flex flex-col md:flex-row hover:shadow-sm transition-shadow duration-300 overflow-hidden"
          >
            {/* Left: Sport Icon + Date */}
            <div className="flex flex-row items-center md:max-w-[300px] md:w-[300px] lg:max-w-[400px] lg:w-[400px] shrink-0 p-4 lg:p-6 gap-4 lg:gap-6">
              {/* Sport Icon */}
              <div className="flex flex-col items-center w-[76px] sm:w-[90px] md:w-[76px] lg:w-[120px] shrink-0 self-stretch gap-2 sm:gap-3">
                <div className="w-full flex-1 rounded-2xl flex items-center justify-center">
                  <Image src={event.sportIcon} alt={event.sport} width={100} height={100} className="w-[55px] sm:w-[70px] md:w-[55px] lg:w-[90px] h-auto" />
                </div>
                <span className="text-[13px] sm:text-[14px] lg:text-[16px] font-bold tracking-[2%] leading-[150%] text-purple font-satoshi">
                  {event.sport}
                </span>
              </div>

              {/* Date & Time */}
              <div className="flex flex-col flex-1 gap-3 sm:gap-4 lg:gap-6">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[13px] sm:text-[15px] md:text-[13px] lg:text-[17px] font-bold tracking-[0.02em] leading-[150%] text-navy font-satoshi">
                    {event.date}
                  </span>
                  <span className="text-[12px] sm:text-[13px] md:text-[12px] lg:text-[14px] font-medium leading-[150%] text-navy font-dm-sans">
                    {event.time}
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-purple underline font-dm-sans hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={AlarmClockIcon} width={20} height={20} color={colors.purple} strokeWidth={1.25}/>
                  Set Reminder
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-neutral-200 self-stretch" />
            <div className="md:hidden h-px bg-neutral-200 w-full" />

            {/* Right: Event Details + Actions */}
            <div className="flex-1 min-w-0 flex flex-col justify-between p-4 lg:p-6 gap-4 sm:gap-5 lg:gap-6">
              {/* Row 1: Title + Status + Tournament + Share */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start justify-between gap-3 lg:gap-6 min-w-0">
                <div className="flex flex-col flex-1 min-w-0 gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-[16px] sm:text-[18px] lg:text-[22px] font-bold leading-[140%] tracking-[0.02em] text-navy-dark font-satoshi">
                      {event.title}
                    </h3>
                    <span className={`h-[28px] px-3 rounded-lg text-[12px] font-semibold leading-[150%] font-dm-sans inline-flex items-center gap-1.5 ${statusStyles[event.status]}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <span className="text-[13px] sm:text-[14px] font-medium leading-[150%] text-navy font-dm-sans">
                      {event.tournament} &nbsp;&bull;&nbsp; {event.region}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => router.push('/coming-soon')}
                    className="flex items-center justify-center gap-2 rounded-xl border border-navy px-4 py-2 text-sm text-navy font-satoshi font-normal hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    Accreditation
                    <HugeiconsIcon icon={ArrowRight02Icon} width={16} height={16} color="currentColor" strokeWidth={2.5}/>
                  </button>
                  <button onClick={() => router.push('/coming-soon')} className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 font-dm-sans hover:opacity-80 transition-opacity">
                    <HugeiconsIcon icon={Share03Icon} width={18} height={18} color={colors.gray500} strokeWidth={1.13}/>
                    Share
                  </button>
                </div>
              </div>

              {/* Row 2: Venue + Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-end md:items-start lg:items-end justify-between gap-3 lg:gap-6 min-w-0">
                <div className="flex min-h-[58px] flex-col justify-between gap-1.5 text-gray-500 min-w-0 flex-1">
                  <div className="relative group/venue flex items-center gap-2 min-w-0 overflow-hidden">
                    <HugeiconsIcon icon={Location06Icon} width={20} height={20} color={colors.navy} strokeWidth={1.5} className="shrink-0"/>
                    <span className="block truncate text-[12px] sm:text-[13px] font-medium leading-[150%] text-gray-500 font-dm-sans cursor-pointer min-w-0">
                      <span className='text-navy font-dm-sans'>{event.venue} &bull;</span> {event.region}
                    </span>
                    <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden group-hover/venue:block w-max max-w-[320px] rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-lg">
                      <span className="text-[13px] font-dm-sans font-normal text-gray-500 leading-[150%] whitespace-normal">
                        <span className='text-navy font-dm-sans'>{event.venue} &bull;</span> {event.region}
                      </span>
                    </div>
                  </div>
                  <button className="w-fit text-[13px] sm:text-[14px] font-normal leading-[150%] text-purple underline font-dm-sans hover:opacity-80 transition-opacity">
                    Show on map
                  </button>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  {event.showBuyTickets && (
                    <button onClick={() => router.push('/coming-soon')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 h-[46px] px-4 rounded-[12px] bg-purple text-white text-[14px] font-normal font-satoshi hover:opacity-90 transition-all duration-300 whitespace-nowrap">
                      <HugeiconsIcon icon={Ticket02Icon} width={18} height={18} color="currentColor" strokeWidth={1.5} className="shrink-0"/>
                      Buy Tickets
                    </button>
                  )}
                  <button onClick={() => router.push('/coming-soon')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white text-[14px] font-normal text-gray-500 font-satoshi hover:bg-gray-100 transition-all duration-300 whitespace-nowrap">
                    View Result
                    <HugeiconsIcon icon={ArrowRight02Icon} width={18} height={18} color="currentColor" strokeWidth={2} className="shrink-0"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default EventsSection;
