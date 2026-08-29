import { Suspense } from 'react';
import PageBanner from '@/components/common/PageBanner';
import EnquiryForm from './EnquiryForm';

export default function EnquiryPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <PageBanner
        title="ENQUIRE NOW"
        watermarkText="ENQUIRE"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
          { label: "Enquire Now" },
        ]}
      />

      <section className="w-full py-16 px-6 md:px-10 lg:py-24 lg:px-16 bg-slate-50 border-b border-gray-100">
        <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#07192e] leading-tight font-satoshi">
            Join the MCD Delhi Mini League
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-dm-sans leading-relaxed">
            Tell us how you&apos;d like to get involved and our team will connect with you regarding participation opportunities, affiliations, sponsorship, and league updates.
          </p>
        </div>

        <Suspense fallback={null}>
          <EnquiryForm />
        </Suspense>
      </section>
    </main>
  );
}
