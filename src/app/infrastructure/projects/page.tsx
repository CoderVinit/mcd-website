import PageBanner from "@/components/common/PageBanner";
import ProjectsMapSection from "@/components/infrastructure/ProjectsMapSection";
import ProjectsExplorerSection from "@/components/infrastructure/ProjectsExplorerSection";

export default function ProjectsPage() {
  return (
    <main>
      <PageBanner
        title="PROJECTS"
        watermarkText="PROJECTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      <section className="w-full bg-white py-10 md:py-16 lg:py-[100px] px-4 sm:px-8 md:px-12 lg:px-[64px] flex flex-col items-center gap-16 lg:gap-[120px]">
        <ProjectsMapSection />
        <ProjectsExplorerSection />
      </section>
    </main>
  );
}