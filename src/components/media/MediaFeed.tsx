"use client";

import React from "react";
import MediaCard, { MediaCardData, MediaFilter } from "./MediaCard";

interface MediaFeedProps {
  activeFilter: MediaFilter;
}

export default function MediaFeed({ activeFilter }: MediaFeedProps) {
  const feedItems: MediaCardData[] = [
    {
      id: 1,
      type: "news",
      category: "MCD Mini League",
      title: "MCD & SITDS Announce Official Kick-Off of Delhi Grassroots Football League",
      image: "/images/events/one.png",
      description: "The Municipal Corporation of Delhi (MCD) and Sports Infrastructure & Talent Development Society (SITDS) have launched Delhi's largest grassroots football initiative featuring 80 clubs and 320 teams across Under-9 and Under-11 divisions. Matches will be hosted across Thyagaraj and Chhatrasal Stadiums.",
      date: "Oct 24, 2026",
    },
    {
      id: 2,
      type: "photos",
      title: "U-11 Grassroots Matchday Photo Highlights",
      images: [
        "/images/hero-sports.jpg",
        "/images/events/four.png",
        "/images/events/two.png",
        "/images/events/three.png",
      ],
      description: "Action-packed photo gallery from Week 1 of the U-11 Boys & Girls qualification rounds. Young athletes showcase exceptional dribbling skills, teamwork, and goal celebrations on green pitch turf.",
      date: "Oct 28, 2026",
    },
    {
      id: 3,
      type: "videos",
      title: "Top 10 Matchday Goals & Saves Highlight Reel",
      image: "/images/events/three.png",
      duration: "04:45",
      description: "Watch the top 10 goals, long-range strikes, and acrobatic goalkeeper saves from the opening matchday of the MCD Mini League at Thyagaraj Stadium Arena.",
      date: "Nov 02, 2026",
    },
    {
      id: 4,
      type: "news",
      category: "GMS Registration Milestone",
      title: "Over 5,100 Young Footballers Registered on Official GMS Portal",
      image: "/images/news1.png",
      description: "The digital player registration and document verification system has surpassed 5,100 verified young athletes across MCD primary schools and cluster teams in Delhi-NCR, complete with neutral External Club Supervisor age audits.",
      date: "Nov 08, 2026",
    },
    {
      id: 5,
      type: "videos",
      title: "Full Match Highlights: Central MCD Strikers vs Rohini Lions Club",
      image: "/images/events/five.png",
      duration: "09:30",
      description: "Extended match replay and post-game coach interviews from the thrilling U-11 Boys Pool A match at Thyagaraj Stadium Main Pitch 1 under floodlights.",
      date: "Nov 15, 2026",
    },
    {
      id: 6,
      type: "photos",
      title: "Stadium Crowd & Fan Zone Photo Gallery",
      images: [
        "/images/events/two.png",
        "/images/events/one.png",
        "/images/hero-sports.jpg",
        "/images/events/four.png",
      ],
      description: "Atmosphere and celebrations in the stadium stands: parents, school principals, and local community fans cheering on young football athletes during weekend tournament rounds.",
      date: "Nov 18, 2026",
    },
  ];

  const filteredItems = feedItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-[840px]">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 bg-white rounded-[24px] border border-gray-100 shadow-sm text-center">
          <p className="font-satoshi font-semibold text-gray-400 text-lg">
            No football media posts found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
