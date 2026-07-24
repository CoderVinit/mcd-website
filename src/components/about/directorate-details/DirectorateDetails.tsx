"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import IntroSection from "./IntroSection";
import ResponsibilitiesSection from "./ResponsibilitiesSection";
import WorksOnSection from "./WorksOnSection";

export default function DirectorateDetails() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Directorate Details" },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Banner */}
      <PageBanner
        title="DIRECTORATE DETAILS"
        watermarkText="DIRECTORATE"
        breadcrumbs={breadcrumbs}
      />
      <IntroSection />
      <ResponsibilitiesSection />
      <WorksOnSection />
    </div>
  );
}
