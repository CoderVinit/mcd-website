'use client';
import Image from '@/components/common/ImageWithLoader';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location05Icon, Calendar03Icon } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';

export type EventStatus = 'Upcoming' | 'Live' | 'Completed';

export interface EventItem {
  id: number;
  image: string;
  sport: string;
  status: EventStatus;
  title: string;
  venue: string;
  dateRange: string;
}

const STATUS_STYLES: Record<EventStatus, string> = {
  Upcoming: 'bg-amber/5 text-amber-dark',
  Live: 'bg-rose/5 text-rose',
  Completed: 'bg-emerald-dark/10 text-emerald-dark',
};

export default function EventCard({ event }: { event: EventItem }) {
  const router = useRouter();
  return (
    <div className="flex flex-col rounded-[32px] border border-neutral-200 bg-white overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-[220px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[16px] p-[24px]">
        {/* Tags + Title */}
        <div className="flex flex-col w-[341.33px] gap-[12px]">
          {/* Tags */}
          <div className="flex items-center gap-3">
            <span className="px-[10px] py-[4px] rounded-lg bg-neutral-100 text-navy text-[14px] font-semibold font-dm-sans leading-[150%]">
              {event.sport}
            </span>
            <span className={`px-[10px] py-[4px] rounded-lg text-[14px] font-semibold font-dm-sans leading-[150%] ${STATUS_STYLES[event.status]}`}>
              {event.status}
            </span>
          </div>

          {/* Title */}
          <div className="relative group/title">
            <h3 className="text-[20px] text-navy-dark leading-[150%] font-satoshi font-bold tracking-[0.02em] m-0 truncate">
              {event.title}
            </h3>
            <div className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden group-hover/title:block w-max max-w-[280px] rounded-lg bg-white px-3 py-2 shadow-lg border border-neutral-200">
              <span className="text-[13px] font-satoshi font-normal text-gray-500 leading-[150%] whitespace-normal">{event.title}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0 border border-neutral-200" />

        {/* Venue */}
        <div className="flex items-center gap-[8px] text-[16px] text-navy font-dm-sans leading-[150%]">
          <HugeiconsIcon icon={Location05Icon} size={20} color='var(--color-navy)' strokeWidth={1.25}/>
          <span>{event.venue}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-[8px] text-[16px] text-navy font-dm-sans leading-[150%]">
          <HugeiconsIcon icon={Calendar03Icon} size={20} color='var(--color-navy)' strokeWidth={1.25}/>
          <span>{event.dateRange}</span>
        </div>

        <button onClick={() => router.push(`/coming-soon`)} className="mt-[8px] h-[44px] w-full rounded-[12px] bg-purple text-white text-[15px] font-satoshi font-bold leading-[150%] transition-opacity duration-300 hover:opacity-90 cursor-pointer">
          Book
        </button>
      </div>
    </div>
  );
}
