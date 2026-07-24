"use client";

import React, { useState } from "react";
import MediaSidebar from "./MediaSidebar";
import MediaFeed from "./MediaFeed";
import { MediaFilter } from "./MediaCard";

export default function MediaPageContent() {
  const [activeFilter, setActiveFilter] = useState<MediaFilter>("all");

  return (
    <section className="w-full bg-[#FFFFFF] py-10 md:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-[64px] flex justify-center">
      <div className="w-full max-w-[1312px] flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <MediaSidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <MediaFeed activeFilter={activeFilter} />
      </div>
    </section>
  );
}
