import PageBanner from "@/components/common/PageBanner";
import FacilityDetailContent from "@/components/infrastructure/venues-facilities/FacilityDetailContent";
import { getFacilityById } from "@/data/facilitiesData";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FacilityDetailPage({ params }: Props) {
  const { id } = await params;
  const facility = getFacilityById(Number(id));
  if (!facility) return notFound();

  return (
    <main>
      <PageBanner
        title="FACILITIES"
        watermarkText="FACILITIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FACILITIES", href: "/infrastructure/venues-facilities" },
          { label: "Book Facility" },
        ]}
      />

      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-[100px] px-4 sm:px-8 md:px-12 lg:px-[64px]">
        <FacilityDetailContent facility={facility} />
      </section>
    </main>
  );
}
