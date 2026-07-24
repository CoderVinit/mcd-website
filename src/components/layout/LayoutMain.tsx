"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";
import SubHeader from "@/components/layout/SubHeader";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "../home/SocialSidebar";

const NO_CHROME_ROUTES = new Set([
  "/login", 
  "/register", 
  "/registration", 
  "/forgot-password", 
  "/forgot-password/verify", 
  "/forgot-password/reset"
]);

export default function LayoutMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname ? NO_CHROME_ROUTES.has(pathname) : false;

  if (hideChrome) return <>{children}</>;

  return (
    <>
      <Header />
      <SubHeader />
      {children}
      <Footer />
      <SocialSidebar />
    </>
  );
}
