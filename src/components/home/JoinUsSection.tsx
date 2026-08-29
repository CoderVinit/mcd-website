"use client";

import { HugeiconsIcon } from '@hugeicons/react';
import {
  FootballIcon,
  School01Icon,
  Medal01Icon,
  House01Icon,
  UserGroup02Icon,
  WhistleIcon,
  DollarCircleIcon,
  ArrowRight02Icon,
} from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';
import { colors } from '@/theme/colors';

const categories = [
  { icon: FootballIcon, label: 'Club', value: 'Club' },
  { icon: School01Icon, label: 'School', value: 'School' },
  { icon: Medal01Icon, label: 'Academy', value: 'Academy' },
  { icon: House01Icon, label: 'RWA', value: 'RWA' },
  { icon: UserGroup02Icon, label: 'Parent', value: 'Parent' },
  { icon: WhistleIcon, label: 'Coach', value: 'Coach' },
  { icon: DollarCircleIcon, label: 'Sponsor', value: 'Sponsor' },
];

const JoinUsSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:py-24 lg:px-16 border-b border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20">
            <HugeiconsIcon icon={UserGroup02Icon} size={14} color="#F58220" />
            <span className="text-xs font-bold font-dm-sans tracking-wider text-orange uppercase">
              GET INVOLVED
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-navy leading-tight font-satoshi tracking-tight">
            Join the MCD Delhi Mini League As
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => router.push(`/contact/enquiry?category=${encodeURIComponent(category.value)}`)}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-orange/40 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                <HugeiconsIcon icon={category.icon} size={26} color="#F58220" />
              </div>
              <span className="font-satoshi font-bold text-base text-navy">{category.label}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <button
            onClick={() => router.push('/contact/enquiry')}
            className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange/90 text-white font-bold text-base px-8 py-4 rounded-xl font-satoshi transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg shadow-orange-500/20"
          >
            <span>Enquire Now</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} color={colors.white} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
