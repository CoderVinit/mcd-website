import PageBanner from "@/components/common/PageBanner";
import GrievanceSection from "@/components/contact/GrievanceSection";

export default function GrievanceHandlingPage() {
  return (
    <main>
      <PageBanner
        title="GRIEVANCE HANDLING"
        watermarkText="CONTACT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
          { label: "Grievance Handling" },
        ]}
      />
      <GrievanceSection />
    </main>
  );
}

