import React from 'react';
import PageBanner from '@/components/common/PageBanner';
import TournamentFixturesClient from '@/components/tournaments/TournamentFixturesClient';

export default function TournamentFixturesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <PageBanner
        title="TOURNAMENT FIXTURES & SCHEDULE"
        watermarkText="FIXTURES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tournament", href: "/tournaments" },
          { label: "Fixtures & Schedule" },
        ]}
      />
      <TournamentFixturesClient />
    </main>
  );
}
