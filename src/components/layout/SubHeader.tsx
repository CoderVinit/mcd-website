"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import HomeScrollLink from "@/components/common/HomeScrollLink";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "About League", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision-and-mission" },
      { label: "Impact", href: "/about/impact" },
      { label: "Governance", href: "/about/governance" },
    ],
  },
  {
    label: "CLUBS",
    href: "/about/listing-of-sports-and-youth-clubs",
    hasDropdown: true,
    dropdownItems: [
      { label: "Start a Club", href: "/registration" },
      { label: "Registration Guidelines", href: "/about/reports-and-documents" },
      // { label: "Rules & Regulations", href: "/about/reports-and-documents" },
      { label: "Downloads", href: "/about/reports-and-documents" },
    ],
  },
  {
    label: "TOURNAMENT",
    href: "/tournaments",
    hasDropdown: true,
    dropdownItems: [
      { label: "Overview", href: "/tournaments" },
      { label: "Competition Format", href: "/tournaments#format" },
      { label: "Rules & Regulations", href: "/tournaments#rules" },
      { label: "Fixtures", href: "/tournaments/fixtures" },
      { label: "Results", href: "/events" },
      { label: "Standings", href: "/tournaments#standings" },
    ],
  },
  { label: "VENUES", href: "/infrastructure/venues-facilities" },
  {
    label: "MEDIA",
    href: "/media",
    hasDropdown: false,
  },
  { label: "SPONSORS & PARTNERS", href: "/partner" },
  { label: "CONTACT", href: "/contact" },
];

export default function SubHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-[60px] sm:top-[80px] z-[90] h-[60px] w-full bg-navy text-white px-2 sm:px-4 md:px-6 lg:px-8 hidden xl:block">
      {/* Desktop Navigation */}
      <div className="h-full flex items-center justify-center gap-1 xl:gap-2 py-[10px]">
        {navItems.map((item) =>
          item.hasDropdown ? (
            <div key={item.label} className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                className={`flex items-center gap-1 px-2.5 py-1.5 xl:px-3 text-[13px] xl:text-[14px] font-dm-sans font-semibold leading-[150%] tracking-[0%] text-white transition-colors hover:bg-white/10 hover:rounded-md ${
                  openDropdown === item.label ? "rounded-md bg-white/10" : ""
                }`}
              >
                {item.label}
                <svg
                  className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === item.label && (
                <div className="absolute left-0 top-full z-[95] mt-4 rounded-xl bg-white py-4 shadow-xl min-w-[240px] max-w-[320px]">
                  {item.dropdownItems?.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-6 py-2.5 text-[14px] font-medium font-geist text-gray-800 transition-colors hover:bg-purple-hover hover:text-purple"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : item.href === "/" ? (
            <HomeScrollLink
              key={item.label}
              className="flex items-center gap-1 px-2.5 py-1.5 xl:px-3 text-[13px] xl:text-[14px] font-dm-sans font-semibold leading-[150%] tracking-[0%] text-white transition-colors hover:bg-white/10 hover:rounded-md"
            >
              {item.label}
            </HomeScrollLink>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-2.5 py-1.5 xl:px-3 text-[13px] xl:text-[14px] font-dm-sans font-semibold leading-[150%] tracking-[0%] text-white transition-colors hover:bg-white/10 hover:rounded-md"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="flex items-center justify-between px-6 py-3 lg:hidden">
        <span className="text-sm font-medium">Menu</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="flex flex-col border-t border-white/10 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-white/10"
                  >
                    {item.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileOpenDropdown === item.label && item.dropdownItems && (
                    <div className="bg-white/5">
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-10 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/10"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileOpenDropdown(null);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : item.href === "/" ? (
                <HomeScrollLink
                  className="flex items-center px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </HomeScrollLink>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
