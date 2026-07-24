import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import {ArrowLeft02Icon} from '@hugeicons/core-free-icons';

export default function ProjectDetailBackButton() {
  return (
    <Link
      href="/infrastructure/projects"
      className="inline-flex items-center rounded-xl border border-gray-300 bg-white font-satoshi font-bold text-[16px] leading-[150%] text-gray-500 hover:bg-gray-50 transition-colors w-fit"
      style={{ padding: '12px 24px 12px 18px', gap: '8px' }}
    >
      <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color='currentColor' strokeWidth={2}/>
      Back
    </Link>
  );
}
