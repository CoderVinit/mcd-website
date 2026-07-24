import PageBanner from "@/components/common/PageBanner";
import VolunteeringSection from "@/components/partner/VolunteeringSection";

export default function VolunteeringSectionPage() {
  return (
    <main>
      <PageBanner
        title="Volunteering Section"
        watermarkText="Volunteering"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner with Us", href: "/partner" },
          { label: "Volunteering Section" },
        ]}
      />
      <VolunteeringSection />
    </main>
  );
}

