import React from "react";
import PageBanner from "@/components/common/PageBanner";
import ListingOfSportsAndYouthClubs from "@/components/about/listing-of-sports-and-youth-clubs/ListingOfSportsAndYouthClubs";

export default function ListingSportsYouthClubsPage() {
  return (
    <main className="w-full bg-[#F9FAFB]">
      <PageBanner
        title="Sports Clubs & Associations Directory"
        watermarkText="CLUBS"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "LISTING OF SPORTS & YOUTH CLUBS" },
        ]}
      />

      <ListingOfSportsAndYouthClubs />
    </main>
  );
}
