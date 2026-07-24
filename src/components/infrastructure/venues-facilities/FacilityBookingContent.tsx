"use client";

import React, { useState } from 'react';
import { FacilityDetail } from '@/data/facilitiesData';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle02Icon, Calendar03Icon, Clock01Icon } from '@hugeicons/core-free-icons';

interface Props {
  facility: FacilityDetail;
}

export default function FacilityBookingContent({ facility }: Props) {
  const [booked, setBooked] = useState(false);
  const [date, setDate] = useState('2026-11-15');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - 11:00 AM');
  const [clubName, setClubName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="max-w-[700px] mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md">
      {booked ? (
        <div className="flex flex-col items-center text-center gap-4 py-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={36} />
          </div>
          <h2 className="text-2xl font-bold font-satoshi text-navy">
            Slot Requested Successfully!
          </h2>
          <p className="text-sm text-gray-600 font-dm-sans">
            Your slot request for <strong>{facility.name}</strong> on <strong>{date} ({timeSlot})</strong> has been received for <strong>{clubName}</strong>.
          </p>
          <button
            onClick={() => setBooked(false)}
            className="mt-4 px-6 py-2.5 bg-purple text-white font-bold font-satoshi text-sm rounded-xl"
          >
            Book Another Slot
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold font-dm-sans text-orange uppercase tracking-wider">
              FACILITY SLOT BOOKING
            </span>
            <h2 className="text-2xl font-bold font-satoshi text-navy">
              Book {facility.name}
            </h2>
            <p className="text-xs text-gray-500 font-dm-sans">
              {facility.location}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                Time Slot *
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans cursor-pointer"
              >
                <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
                <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
              Club / Organization Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. South Delhi United"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                Contact Person *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3.5 bg-orange text-white font-bold font-satoshi text-sm rounded-xl shadow-md cursor-pointer hover:bg-orange/90 transition-colors"
          >
            Confirm Slot Booking Request
          </button>
        </form>
      )}
    </div>
  );
}
