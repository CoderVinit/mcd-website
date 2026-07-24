import PageBanner from "@/components/common/PageBanner";
import { getFacilityById } from "@/data/facilitiesData";
import { notFound } from "next/navigation";
import FacilityBookingContent from "@/components/infrastructure/venues-facilities/FacilityBookingContent";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FacilityBookPage({ params }: Props) {
  const { id } = await params;
  const facility = getFacilityById(Number(id));
  if (!facility) return notFound();

  return (
    <main>
      <PageBanner
        title="SLOT BOOKING"
        watermarkText="BOOKING"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FACILITIES", href: "/infrastructure/venues-facilities" },
          { label: "Book Facility" },
        ]}
      />

      <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-[64px]">
        <FacilityBookingContent facility={facility} />
      </section>
    </main>
  );
}
