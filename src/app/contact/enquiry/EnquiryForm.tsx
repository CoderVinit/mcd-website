"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { MailSend01Icon, CheckmarkCircle02Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { socialLinks } from '@/data/socialLinks';

const CATEGORIES = ['Club', 'School', 'Academy', 'RWA', 'Parent', 'Coach', 'Sponsor'] as const;
type Category = (typeof CATEGORIES)[number] | '';

const categoryOfSupportOptions = [
  'Sports Equipment',
  'Nutrition & Hydration',
  'Apparel & Merchandise',
  'Technology',
  'Media & Marketing',
  'Education',
  'Medical Support',
  'Logistics & Transportation',
  'Other',
];

const inputClass =
  'w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple';
const labelClass = 'text-xs font-bold text-gray-700 font-dm-sans uppercase';

function Select({
  value,
  onChange,
  required,
  children,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
      >
        {children}
      </select>
      <HugeiconsIcon
        icon={ArrowDown01Icon}
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialCategory = CATEGORIES.includes(searchParams.get('category') as (typeof CATEGORIES)[number])
    ? (searchParams.get('category') as Category)
    : '';

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    category: initialCategory,
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
    sportsInterest: 'Football',
    preferredMode: 'Call',
    comments: '',
    companyName: '',
    contactPersonName: '',
    designation: '',
    companyAddress: '',
    website: '',
    industry: '',
    interestedInBecoming: 'Title Sponsor',
    sponsorshipType: 'Cash Sponsorship',
    categoryOfSupport: [] as string[],
    scheduleDiscussion: 'Yes',
    whyPartner: '',
    additionalRequirements: '',
  });

  const isSponsor = form.category === 'Sponsor';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleCategoryOfSupport = (option: string) => {
    setForm((prev) => ({
      ...prev,
      categoryOfSupport: prev.categoryOfSupport.includes(option)
        ? prev.categoryOfSupport.filter((o) => o !== option)
        : [...prev.categoryOfSupport, option],
    }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md flex flex-col items-center text-center gap-4 py-12 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={36} />
        </div>
        <h3 className="font-satoshi font-extrabold text-2xl text-navy">
          Thank You!
        </h3>
        <p className="font-dm-sans text-sm text-gray-600 max-w-md">
          Thank you for your interest in the MCD Delhi Mini League. Our team will review your enquiry and connect with you regarding participation opportunities, club ownership, affiliations, sponsorship opportunities, registrations, and league updates.
        </p>
        <div className="flex flex-col items-center gap-4 mt-4">
          <Link
            href="/"
            className="px-6 py-2.5 bg-purple text-white font-bold font-satoshi text-sm rounded-xl"
          >
            Back to Home
          </Link>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-gray-500 font-dm-sans uppercase">Follow Us on Social Media</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-navy hover:bg-slate-200 transition-colors"
                >
                  <HugeiconsIcon icon={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md flex flex-col gap-8 max-w-3xl mx-auto">
      {/* Category */}
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>I Want to Join As *</label>
        <Select
          required
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
        >
          <option value="" disabled>Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
      </div>

      {/* Common: Personal Details */}
      <div className="flex flex-col gap-4">
        <h3 className="font-satoshi font-extrabold text-lg text-navy">Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Full Name *</label>
            <input required type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Mobile Number *</label>
            <input required type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Email Address *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>City *</label>
            <input required type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>District *</label>
            <input required type="text" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>State *</label>
            <input required type="text" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Pincode</label>
            <input type="text" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Common: Sports Interest & Communication */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Sports Interest</label>
          <Select value={form.sportsInterest} onChange={(e) => setForm({ ...form, sportsInterest: e.target.value })}>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Both">Both</option>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Preferred Mode of Communication</label>
          <Select value={form.preferredMode} onChange={(e) => setForm({ ...form, preferredMode: e.target.value })}>
            <option value="Call">Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Comments / Questions</label>
        <textarea rows={4} value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} className={inputClass} />
      </div>

      {/* Sponsor-only fields */}
      {isSponsor && (
        <>
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            <h3 className="font-satoshi font-extrabold text-lg text-navy">Company Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Company Name *</label>
                <input required type="text" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Contact Person Name *</label>
                <input required type="text" value={form.contactPersonName} onChange={(e) => setForm({ ...form, contactPersonName: e.target.value })} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Designation *</label>
                <input required type="text" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Website</label>
                <input type="text" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelClass}>Company Address *</label>
                <input required type="text" value={form.companyAddress} onChange={(e) => setForm({ ...form, companyAddress: e.target.value })} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Industry / Sector</label>
                <input type="text" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputClass} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            <h3 className="font-satoshi font-extrabold text-lg text-navy">Sponsorship Interest</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Interested in Becoming</label>
                <Select value={form.interestedInBecoming} onChange={(e) => setForm({ ...form, interestedInBecoming: e.target.value })}>
                  <option value="Title Sponsor">Title Sponsor</option>
                  <option value="Co-Sponsor">Co-Sponsor</option>
                  <option value="Official Partner">Official Partner</option>
                  <option value="CSR Partner">CSR Partner</option>
                  <option value="Category Partner">Category Partner</option>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Sponsorship Type</label>
                <Select value={form.sponsorshipType} onChange={(e) => setForm({ ...form, sponsorshipType: e.target.value })}>
                  <option value="Cash Sponsorship">Cash Sponsorship</option>
                  <option value="In-Kind Support">In-Kind Support</option>
                  <option value="Both">Both</option>
                </Select>
              </div>
            </div>

            {form.sponsorshipType !== 'Cash Sponsorship' && (
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Category of Support (For In-Kind Partners)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categoryOfSupportOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm font-dm-sans text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.categoryOfSupport.includes(option)}
                        onChange={() => toggleCategoryOfSupport(option)}
                        className="rounded border-gray-300"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Would You Like to Schedule a Sponsorship Discussion?</label>
              <div className="flex items-center gap-6">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm font-dm-sans text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="scheduleDiscussion"
                      checked={form.scheduleDiscussion === option}
                      onChange={() => setForm({ ...form, scheduleDiscussion: option })}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Why Are You Interested in Partnering with the MCD Delhi Mini League?</label>
              <textarea rows={4} value={form.whyPartner} onChange={(e) => setForm({ ...form, whyPartner: e.target.value })} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>Additional Requirements or Expectations</label>
              <textarea rows={4} value={form.additionalRequirements} onChange={(e) => setForm({ ...form, additionalRequirements: e.target.value })} className={inputClass} />
            </div>
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full py-4 bg-[#F58220] hover:bg-[#e07318] text-white font-extrabold font-satoshi text-base rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Submit Enquiry</span>
        <HugeiconsIcon icon={MailSend01Icon} size={18} color="#ffffff" />
      </button>
    </form>
  );
}
