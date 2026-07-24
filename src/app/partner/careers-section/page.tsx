import PageBanner from "@/components/common/PageBanner";
import CareersSection from "@/components/partner/CareersSection";

export default function CareersSectionPage() {
  return (
    <main>
      <PageBanner
        title="CAREERS SECTION"
        watermarkText="CAREERS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner with Us", href: "/partner" },
          { label: "Careers Section" },
        ]}
      />
      <CareersSection />
    </main>
  );
}

