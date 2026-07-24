import { Project, ProjectDetail } from '../projectsData';

interface Props {
  project: Project & ProjectDetail;
}

export default function ProjectDetailLeft({ project }: Props) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-neutral-200 bg-white h-full">

      {/* Title + description */}
      <div className="w-full flex flex-col gap-3">
        <h1 className="font-dm-sans font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[120%] tracking-[0] text-navy-dark">
          {project.title}
        </h1>
        {project.description && (
          <p className="font-dm-sans font-normal text-[16px] leading-[170%] tracking-[0] text-gray-500 capitalize">
            {project.description}
          </p>
        )}
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          <h2 className="font-satoshi font-bold text-[18px] sm:text-[20px] leading-[150%] tracking-[0] text-black capitalize">
            Key Information:
          </h2>
          <ul className="w-full flex flex-col">
            {project.highlights.map((h, i) => {
              const sepIdx = h.indexOf(' — ');
              const title  = sepIdx !== -1 ? h.slice(0, sepIdx) : h;
              const desc   = sepIdx !== -1 ? h.slice(sepIdx + 3) : '';
              return (
                <li key={i} className={`flex gap-3 items-start py-3 ${i < project.highlights!.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                  <span className="mt-[7px] w-[9px] h-[9px] rounded-full bg-info shrink-0" />
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="font-dm-sans font-medium text-[16px] leading-[150%] tracking-[0] text-navy capitalize">
                      {title}
                    </span>
                    {desc && (
                      <span className="font-dm-sans font-normal text-[16px] leading-[170%] tracking-[0] text-gray-500 capitalize">
                        {desc}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
