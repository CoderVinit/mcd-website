"use client";

import React, { useState } from 'react';
import PageBanner from '@/components/common/PageBanner';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Call02Icon, Mail02Icon, MailSend01Icon, CheckmarkCircle02Icon, Building02Icon } from '@hugeicons/core-free-icons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <PageBanner
        title="CONTACT US"
        watermarkText="CONTACT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="w-full py-16 px-6 md:px-10 lg:py-24 lg:px-16 bg-slate-50 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
              <HugeiconsIcon icon={Call02Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
                GET IN TOUCH WITH MML SECRETARIAT
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi">
              We&apos;re Here to Help &amp; Support
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans leading-relaxed">
              Have questions regarding club registrations, match fixtures, player eligibility, or venue logistics? Reach out to our tournament coordination team.
            </p>
          </div>

          {/* Grid Layout: Contact Info Cards + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Office Address Card */}
              <div className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange shrink-0">
                  <HugeiconsIcon icon={Location01Icon} size={22} color="#F58220" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-satoshi font-bold text-lg text-navy-dark">Headquarters &amp; Secretariat</h3>
                  <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                    Municipal Corporation of Delhi (MCD) Headquarters, Civic Centre, Minto Road, New Delhi - 110002
                  </p>
                </div>
              </div>

              {/* Tournament Operations Card */}
              <div className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple shrink-0">
                  <HugeiconsIcon icon={Building02Icon} size={22} color="#8A38F5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-satoshi font-bold text-lg text-navy-dark">Tournament Nodal Venue</h3>
                  <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                    SITDS Sports Office, Thyagaraj Stadium Complex, INA Colony, New Delhi - 110023
                  </p>
                </div>
              </div>

              {/* Phone & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-navy shrink-0">
                    <HugeiconsIcon icon={Call02Icon} size={18} />
                  </div>
                  <span className="font-dm-sans text-xs text-gray-500 font-medium">Helpline Phone</span>
                  <span className="font-satoshi font-bold text-base text-navy">+91 11 2322 7000</span>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-navy shrink-0">
                    <HugeiconsIcon icon={Mail02Icon} size={18} />
                  </div>
                  <span className="font-dm-sans text-xs text-gray-500 font-medium">Official Email</span>
                  <span className="font-satoshi font-bold text-base text-navy truncate">mml@mcd.gov.in</span>
                </div>
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={36} />
                  </div>
                  <h3 className="font-satoshi font-extrabold text-2xl text-navy">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-dm-sans text-sm text-gray-600 max-w-md">
                    Thank you <strong>{form.name}</strong>. Your message regarding &quot;{form.subject}&quot; has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-purple text-white font-bold font-satoshi text-sm rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1 pb-2">
                    <h3 className="font-satoshi font-extrabold text-2xl text-navy">
                      Send Us a Direct Message
                    </h3>
                    <p className="font-dm-sans text-xs text-gray-500">
                      Fill out the form below and our coordination team will respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
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
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@school.edu.in"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                        Inquiry Topic *
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans cursor-pointer focus:outline-none focus:border-purple"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Club Registration">Club Registration Support</option>
                        <option value="Match Schedule & Fixtures">Match Schedule &amp; Fixtures</option>
                        <option value="Venue & Facilities">Venue &amp; Slot Booking</option>
                        <option value="Sponsorship & Partnership">Sponsorship &amp; Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 font-dm-sans uppercase">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your inquiry or message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-4 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-orange hover:bg-orange/90 text-white font-bold font-satoshi text-base rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry Message</span>
                    <HugeiconsIcon icon={MailSend01Icon} size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
