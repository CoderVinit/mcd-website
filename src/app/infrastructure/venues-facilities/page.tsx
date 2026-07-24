import PageBanner from "@/components/common/PageBanner";
import SportsComplexesSection from "@/components/infrastructure/venues-facilities/SportsComplexesSection";

export default function VenueAndFacilitiesPage() {
  return (
    <main>
      <PageBanner
        title="FACILITIES"
        watermarkText="FACILITIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facilities" },
        ]}
      />
      <SportsComplexesSection />
    </main>
  );
}
