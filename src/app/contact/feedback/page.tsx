import PageBanner from "@/components/common/PageBanner";
import FeedbackSection from "@/components/contact/FeedbackSection";

export default function FeedbackPage() {
  return (
    <main>
      <PageBanner
        title="FEEDBACK"
        watermarkText="CONTACT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
          { label: "Feedback" },
        ]}
      />
      <FeedbackSection />
    </main>
  );
}

