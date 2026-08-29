"use client";

import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/common/PageBanner';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon, Call02Icon, Mail02Icon, MailSend01Icon, Building02Icon } from '@hugeicons/core-free-icons';

export default function ContactPage() {
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20">
              <HugeiconsIcon icon={Call02Icon} size={14} color="#F58220" />
              <span className="text-xs font-bold font-dm-sans tracking-wider text-[#F58220] uppercase">
                GET IN TOUCH WITH MML SECRETARIAT
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#07192e] leading-tight font-satoshi">
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

            {/* Enquiry CTA Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md flex flex-col items-center text-center gap-5 justify-center">
              <h3 className="font-satoshi font-extrabold text-2xl text-navy">
                Want to Join the MCD Delhi Mini League?
              </h3>
              <p className="font-dm-sans text-sm text-gray-600 max-w-md">
                Whether you&apos;re a Club, School, Academy, RWA, Parent, Coach or Sponsor &mdash; start your enquiry and our coordination team will get back to you.
              </p>
              <Link
                href="/contact/enquiry"
                className="px-8 py-4 bg-[#F58220] hover:bg-[#e07318] text-white font-extrabold font-satoshi text-base rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                <span>Start Your Enquiry</span>
                <HugeiconsIcon icon={MailSend01Icon} size={18} color="#ffffff" />
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
