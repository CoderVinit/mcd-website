"use client";

import React, { useState } from 'react';
import PageBanner from '@/components/common/PageBanner';
import { HugeiconsIcon } from '@hugeicons/react';
import { Building02Icon, CheckmarkCircle02Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clubName: '',
    zone: 'Central Delhi',
    schoolName: '',
    contactPerson: '',
    phone: '',
    email: '',
    divisions: ['U-11 Boys', 'U-11 Girls'],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-white min-h-screen">
      <PageBanner
        title="START A CLUB REGISTRATION"
        watermarkText="REGISTER"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Register Club" },
        ]}
      />

      <section className="w-full py-16 px-6 md:px-10 lg:py-24 lg:px-16 bg-slate-50">
        <div className="max-w-[800px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={36} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-satoshi">
                Registration Submitted Successfully!
              </h2>
              <p className="text-gray-600 font-dm-sans max-w-md">
                Thank you for registering <strong>{formData.clubName}</strong> for the MCD Mini League. Our tournament coordination committee will verify your details and contact you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-3 bg-purple text-white font-bold font-satoshi rounded-xl hover:bg-purple/90 transition-colors"
              >
                Register Another Club
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
                  <HugeiconsIcon icon={Building02Icon} size={14} color="#F58220" />
                  <span className="text-xs font-bold font-dm-sans text-orange uppercase">
                    MCD MINI LEAGUE 2026
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-satoshi">
                  Club &amp; School Registration Form
                </h2>
                <p className="text-sm text-gray-600 font-dm-sans">
                  Register your school or community club to participate in Under-9 and Under-11 Football divisions across Delhi-NCR.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                    Club / Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Central MCD Strikers"
                    value={formData.clubName}
                    onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                    MCD Zone / Region *
                  </label>
                  <select
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple cursor-pointer"
                  >
                    <option value="Central Delhi">Central Delhi Zone</option>
                    <option value="South Delhi">South Delhi Zone</option>
                    <option value="North Delhi">North Delhi Zone</option>
                    <option value="East Delhi">East Delhi Zone</option>
                    <option value="West Delhi">West Delhi Zone</option>
                    <option value="Karol Bagh">Karol Bagh Zone</option>
                    <option value="Rohini">Rohini Zone</option>
                    <option value="Shahdara">Shahdara Zone</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                  School / Facility Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Primary School Campus, Defence Colony, New Delhi"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="club@mcd.gov.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 bg-orange hover:bg-orange/90 text-white font-bold font-satoshi text-base rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Club Registration</span>
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
