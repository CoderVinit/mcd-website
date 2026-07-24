import PageBanner from "@/components/common/PageBanner";
import ImpactSection from "@/components/about/ImpactSection";

export default function ImpactPage() {
  return (
    <main className="w-full bg-white">
      <PageBanner
        title="LEAGUE IMPACT"
        watermarkText="IMPACT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Impact" },
        ]}
      />
      <ImpactSection />
    </main>
  );
}
