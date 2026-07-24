import PageBanner from "@/components/common/PageBanner";
import EventsSection from "@/components/events/EventsSection";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />
      <EventsSection />
    </div>
  );
}
