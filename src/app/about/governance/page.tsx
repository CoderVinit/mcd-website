import PageBanner from "@/components/common/PageBanner";
import GovernanceSection from "@/components/about/GovernanceSection";

export default function GovernancePage() {
  return (
    <main className="w-full bg-white">
      <PageBanner
        title="LEAGUE GOVERNANCE"
        watermarkText="GOVERNANCE"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Governance" },
        ]}
      />
      <GovernanceSection />
    </main>
  );
}
