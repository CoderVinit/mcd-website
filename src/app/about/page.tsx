import PageBanner from "@/components/common/PageBanner";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import ExploreDSYASection from "@/components/about/ExploreDSYASection";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <PageBanner
        title="ABOUT THE LEAGUE"
        watermarkText="ABOUT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About League" },
        ]}
      />
      <WhoWeAreSection />
      <ExploreDSYASection />
    </main>
  );
}
