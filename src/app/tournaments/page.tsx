import React from 'react';
import PageBanner from '@/components/common/PageBanner';
import TournamentFixturesClient from '@/components/tournaments/TournamentFixturesClient';

export default function TournamentsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <PageBanner
        title="MCD MINI LEAGUE TOURNAMENT"
        watermarkText="TOURNAMENT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tournament" },
        ]}
      />
      <TournamentFixturesClient />
    </main>
  );
}
