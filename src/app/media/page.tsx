import PageBanner from "@/components/common/PageBanner";
import MediaPageContent from "@/components/media/MediaPageContent";

export default function MediaPage() {
  return (
    <main>
      <PageBanner
        title="MEDIA"
        watermarkText="MEDIA"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media" },
        ]}
      />
      <MediaPageContent />
    </main>
  );
}