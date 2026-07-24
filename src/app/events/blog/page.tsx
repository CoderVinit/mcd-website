import PageBanner from "@/components/common/PageBanner";
import EventBlogSection from "@/components/events/EventBlogSection";

export default function EventBlogPage() {
  return (
    <main>
      <PageBanner
        title="EVENT BLOG"
        watermarkText="EVENT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Event Blog" },
        ]}
      />
      <EventBlogSection />
    </main>
  );
}

