import { notFound } from 'next/navigation';
import PageBanner from '@/components/common/PageBanner';
import { getProjectWithDetail } from '@/components/infrastructure/projectsData';
import ProjectDetailBackButton from '@/components/infrastructure/project-detail/ProjectDetailBackButton';
import ProjectDetailLeft from '@/components/infrastructure/project-detail/ProjectDetailLeft';
import ProjectDetailRight from '@/components/infrastructure/project-detail/ProjectDetailRight';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectWithDetail(Number(id));
  if (project == null) return notFound();

  return (
    <main>
      <PageBanner
        title="PROJECTS"
        watermarkText="PROJECTS"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/infrastructure/projects' },
          { label: project.title },
        ]}
      />

      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-[100px] px-4 sm:px-8 md:px-12 lg:px-[64px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <ProjectDetailBackButton />
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
            <ProjectDetailLeft project={project} />
            <ProjectDetailRight project={project} />
          </div>
        </div>
      </section>
    </main>
  );
}
