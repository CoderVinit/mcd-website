import React from 'react';
import HomeScrollLink from '@/components/common/HomeScrollLink';

export default function ComingSoon() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-gray-50">
      <div className="flex flex-col items-center gap-6 max-w-[500px] text-center">
        <div className="w-20 h-20 rounded-2xl bg-purple flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <h1 className="text-[36px] sm:text-[48px] font-normal text-navy leading-[120%] font-satoshi font-bold">
          Coming Soon
        </h1>
        <p className="text-[16px] sm:text-[18px] font-medium leading-[150%] text-gray-500 font-dm-sans">
          We&apos;re working hard to bring this page to you. Stay tuned for updates!
        </p>
        <HomeScrollLink className="mt-4 flex items-center gap-2 bg-purple text-white px-8 py-4 rounded-xl font-normal text-[16px] leading-[150%] font-satoshi font-bold hover:opacity-90 transition-all duration-300">
          Back to Home
        </HomeScrollLink>
      </div>
    </section>
  );
}
