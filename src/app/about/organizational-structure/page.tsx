import React from 'react';
import PageBanner from '@/components/common/PageBanner';
import GovernanceSection from '@/components/about/GovernanceSection';
import Organizational from '@/components/about/organizational-structure/Organizational';

export default function OrganizationalStructurePage() {
  return (
    <main className="w-full bg-gray-50">
      <PageBanner
        title="GOVERNANCE & ORGANIZATIONAL STRUCTURE"
        watermarkText="GOVERNANCE"
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'GOVERNANCE & STRUCTURE' },
        ]}
      />

      <GovernanceSection />
      <Organizational />
    </main>
  );
}
