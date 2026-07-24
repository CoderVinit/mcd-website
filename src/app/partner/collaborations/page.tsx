import PageBanner from "@/components/common/PageBanner";
import CollaborationsSection from "@/components/partner/CollaborationsSection";

export default function CollaborationsPage() {
  return (
    <main>
      <PageBanner
        title="COLLABORATIONS"
        watermarkText="COLLABORATION"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner with Us", href: "/partner" },
          { label: "Collaborations" },
        ]}
      />
      <CollaborationsSection />
    </main>
  );
}

