import React from 'react';
import Link from 'next/link';
import { Project, STATUS_STYLES, fmt } from './projectsData';
import Image from '@/components/common/ImageWithLoader';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/infrastructure/projects/${project.id}`} className="w-full flex flex-col gap-4 p-4 rounded-2xl border border-neutral-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
      {/* top row: location tag + status */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-lg bg-info/10 font-dm-sans font-semibold text-[14px] leading-[150%] tracking-[0] text-info">
          {project.location}
        </span>
        <span className={`inline-flex items-center gap-1.5 h-7 px-3 rounded-2xl font-dm-sans font-semibold text-[14px] leading-[150%] tracking-[0] ${STATUS_STYLES[project.status]}`}>
          {project.status}
        </span>
      </div>

      {/* title */}
      <p className="font-dm-sans font-semibold text-[16px] leading-[150%] tracking-[0] text-black line-clamp-2">
        {project.title}
      </p>

      {/* divider */}
      <hr className="w-full border-t border-neutral-200" />

      {/* budget + beneficiaries */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="flex items-center gap-1.5 text-gray-500">
            <div className='w-6 h-6 flex items-center justify-center bg-blue-50 rounded-[4.8px]'>
                <Image
                src="/logo/infra/rupee_blue.svg"
                alt="Budget Icon"
                width={13}
                height={13}
            />
            </div>
          <span className="font-satoshi font-medium text-[14px] leading-[120%] tracking-[0] text-navy">{project.budget}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500">
            <div className='w-6 h-6 flex items-center justify-center bg-blue-50 rounded-[4.8px]'>
                <Image
                src="/logo/infra/person.svg"
                alt="Beneficiaries Icon"
                width={15}
                height={15}
            />
            </div>
          <span className="font-satoshi font-medium text-[14px] leading-[120%] tracking-[0] text-navy">{fmt(project.beneficiaries)}</span>
        </div>
      </div>
    </Link>
  );
}
