import PageBanner from "@/components/common/PageBanner";
import PartnerSection from "@/components/partner/PartnerSection";

export default function Page() {
  return (
    <main>
      <PageBanner
        title="PARTNER WITH US"
        watermarkText="PARTNER"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner With Us" },
        ]}
      />
      <PartnerSection />
    </main>
  );
}
