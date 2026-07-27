import React from "react";
import RegistrationGuidelines from "@/components/clubs/RegistrationGuidelines";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Registration Guidelines | MCD Mini League",
  description: "Official guidelines, eligibility criteria, required documents, fee structure, and registration process for sports clubs in Delhi-NCR under MCD Mini League.",
};

export default function RegistrationGuidelinesPage() {
  return <RegistrationGuidelines />;
}
