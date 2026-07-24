import PageBanner from "@/components/common/PageBanner";
import VisionMissionSection from "@/components/about/VisionMissionSection";

export default function VisionMissionPage() {
  return (
    <main className="w-full bg-white">
      <PageBanner
        title="VISION & MISSION"
        watermarkText="VISION"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />
      <VisionMissionSection />
    </main>
  );
}
