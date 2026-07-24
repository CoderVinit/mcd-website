'use client';

import Image from '@/components/common/ImageWithLoader';
import { useEffect, useState } from 'react';
import { DEFAULT_PROJECT_GALLERY_IMAGE, Project, ProjectDetail } from '../projectsData';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { colors } from "@/theme/colors";

interface Props {
  project: Project & ProjectDetail;
}

const GALLERY_SLIDE_COUNT = 5;

/** First slides = provided `gallery` or single `image`; remaining slots use default stadium photo. */
function gallerySlides(project: Project & ProjectDetail): string[] {
  const base: string[] =
    project.gallery?.length ? [...project.gallery] : project.image ? [project.image] : [];
  const out = [...base];
  while (out.length < GALLERY_SLIDE_COUNT) {
    out.push(DEFAULT_PROJECT_GALLERY_IMAGE);
  }
  return out.slice(0, GALLERY_SLIDE_COUNT);
}

export default function ProjectDetailRight({ project }: Props) {
  const images = gallerySlides(project);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [project.id]);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  const infoRows = [
    { label: 'District',          value: project.district },
    { label: 'Budget Sanctioned', value: project.budget },
    { label: 'Timeline',          value: project.timeline ?? '—' },
    { label: 'Beneficiary',       value: project.beneficiaries.toLocaleString('en-IN') },
    { label: 'Project Type',      value: project.type },
    { label: 'Athlete Benefited', value: project.activeDuration ?? '—' },
  ];

  return (
    <div className="w-full lg:w-[450px] shrink-0 flex flex-col gap-4 sm:gap-6 h-full">

      {/* Info rows */}
      <div className="flex flex-col gap-6 lg:gap-10 p-4 sm:p-6 rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white">
        <h3 className="font-satoshi font-bold text-[24px] leading-[150%] text-navy-dark">
          Key Information
        </h3>
        <div className="flex flex-col divide-y divide-neutral-200">
          {infoRows.map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between gap-4 py-3">
              <span className="font-satoshi font-normal text-[14px] leading-[150%] text-gray-400 shrink-0">{label}</span>
              <span className={`font-satoshi font-medium text-[16px] leading-[150%] text-right ${label === 'Budget Sanctioned' ? 'text-green' : 'text-navy-dark'}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image carousel */}
      <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white">
        <div className="w-full h-[200px] sm:h-[260px] lg:h-[322px] relative rounded-xl lg:rounded-2xl overflow-hidden">
          {images.length > 0 ? (
            <Image
              src={images[current]}
              alt={`${project.title} – image ${current + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="font-dm-sans text-[12px] text-gray-400">No image</span>
            </div>
          )}
        </div>

        {/* Dots + arrows */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-info' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              style={{ padding: '12px 24px', minWidth: '90px', height: '48px' }}
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} width={24} height={24} color={colors.gray700} strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              style={{ padding: '12px 24px', minWidth: '90px', height: '48px' }}
            >
              <HugeiconsIcon icon={ArrowRight02Icon} width={24} height={24} color={colors.gray700} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
