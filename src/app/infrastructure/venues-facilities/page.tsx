import PageBanner from "@/components/common/PageBanner";
import ComingSoon from "@/components/common/ComingSoon";

export default function VenueAndFacilitiesPage() {
  return (
    <main>
      <PageBanner
        title="VENUES"
        watermarkText="FACILITIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facilities & Venues" },
        ]}
      />
      <ComingSoon />
    </main>
  );
}
