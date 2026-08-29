import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import JoinUsSection from '@/components/home/JoinUsSection';
import ImpactStatisticsSection from '@/components/home/ImpactStatisticsSection';
import AboutMovementSection from '@/components/home/AboutMovementSection';
import CommunityClubsSection from '@/components/home/CommunityClubsSection';
import AthleteJourneySection from '@/components/home/AthleteJourneySection';
import UpcomingFixturesSection from '@/components/home/UpcomingFixturesSection';
import FeaturedAthletesSection from '@/components/home/FeaturedAthletesSection';
import MediaGallery from '@/components/home/MediaGallery';
import NewsSection from '@/components/home/NewsSection';
import SponsorsSection from '@/components/home/SponsorsSection';

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Section 1: Hero Banner */}
      <HeroSection />

      {/* Section 1b: Join Us Category Cards */}
      <JoinUsSection />

      {/* Section 2: Impact Statistics */}
      <ImpactStatisticsSection />

      {/* Section 3: About the Movement */}
      <AboutMovementSection />

      {/* Section 4: Community Clubs Network */}
      <CommunityClubsSection />

      {/* Section 5: Athlete Journey */}
      <AthleteJourneySection />

      {/* Section 6: Upcoming Fixtures */}
      <UpcomingFixturesSection />

      {/* Section 7: Featured Athletes */}
      <FeaturedAthletesSection />

      {/* Section 8: Media Gallery (Photos & Videos) */}
      <MediaGallery />

      {/* Section 9: News & Updates */}
      <NewsSection />

      {/* Section 10: Sponsors & Partners */}
      <SponsorsSection />
    </main>
  );
};

export default Page;