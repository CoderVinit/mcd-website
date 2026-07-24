"use client";


import Link from "next/link";
import HomeScrollLink from "@/components/common/HomeScrollLink";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { HugeiconsIcon } from "@hugeicons/react";
import { Notification01Icon, User03Icon, Menu01Icon, Logout01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { redirectToAdmin } from "@/utils/adminRedirect";
import { colors } from "@/theme/colors";



export default function Header() {
  const logoMCOD = "/logo/MCD/MCOD.png";
  const logoSITDS = "/logo/MCD/SITDS.png";
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();



  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedIn = !!token;
    if (loggedIn !== isLoggedIn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoggedIn(loggedIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("remember_me");
    setIsLoggedIn(false);
    setProfileOpen(false);
    router.push("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <>
    <header className="sticky top-0 z-[999] h-auto min-h-[60px] sm:h-[80px] w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[92px] py-2 sm:py-[10px] flex items-center justify-between shadow-sm">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-[12px] h-auto sm:h-[60px] shrink-0">
          <HomeScrollLink className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <img
              src={logoMCOD}
              alt="MCOD Logo"
              className="h-[35px] sm:h-[48px] lg:h-[58px] w-auto object-contain shrink-0"
            />
            <span className="text-gray-400 font-light text-base sm:text-xl lg:text-2xl select-none">/</span>
            <img
              src={logoSITDS}
              alt="SITDS Logo"
              className="h-[35px] sm:h-[48px] lg:h-[75px] w-auto object-contain shrink-0"
            />
          </HomeScrollLink>
          <div className="h-[35px] sm:h-[48px] lg:h-[60px] min-w-[1.22px] bg-gray-500 shrink-0" />
          <div className="flex flex-col gap-[2px] sm:gap-[3.24px]">
            <h1 className="font-dm-sans text-black text-[10px] sm:text-[18px] md:text-[20px] lg:text-[23.95px] font-bold leading-[120%] tracking-[0%]">
             MCD Mini League
            </h1>
            <p className="font-dm-sans text-[7px] sm:text-[11px] lg:text-[12.97px] font-semibold leading-[120%] tracking-[0%] bg-purple bg-clip-text text-transparent">
              Delhi
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
          {/* Search Bar */}
          <div className="relative hidden xl:block">
            <HugeiconsIcon
              icon={Search01Icon}
              size={16}
              color={colors.gray500}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search Clubs, venues and fixture..."
              className="w-52 xl:w-72 rounded-full border border-gray-500 bg-transparent py-2 pl-10 pr-4 text-sm text-gray-500 font-satoshi placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Notification Bell */}
          {/* <Link
            href="/notification"
            className="hidden md:flex items-center justify-center h-[36px] w-[38px] sm:h-[42px] sm:w-[44px] rounded-full border border-neutral-500 text-gray-50 px-2 sm:px-[12px] py-[8px] gap-[4px] transition-colors hover:bg-gray-100"
            aria-label="Notifications"
          >
            <HugeiconsIcon icon={Notification01Icon} size={20} color={colors.navy} strokeWidth={1.25} />
          </Link> */}

          {/* Login / Register / Profile Dropdown */}
          {isLoggedIn ? (
            <div ref={profileRef} className="relative md:block">
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex items-center justify-center h-[36px] w-[36px] sm:h-[42px] sm:w-[42px] rounded-full bg-purple text-white transition-opacity hover:opacity-90 cursor-pointer"
                aria-label="Profile"
              >
                <HugeiconsIcon icon={User03Icon} size={20} color={colors.white} strokeWidth={1.5} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-100 bg-white shadow-xl py-2 px-1 z-50">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      redirectToAdmin();
                    }}
                    className="flex font-satoshi w-full items-center gap-2 px-4 py-2 text-base text-gray-700 rounded-xl hover:bg-purple hover:text-white transition-colors cursor-pointer"
                  >
                    <HugeiconsIcon icon={User03Icon} size={20} color="currentColor" strokeWidth={1.5} />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex font-satoshi w-full items-center gap-2 px-4 py-2 text-base rounded-xl text-red-600 hover:bg-red hover:text-white transition-colors cursor-pointer"
                  >
                    <HugeiconsIcon icon={Logout01Icon} size={18} color="currentColor" strokeWidth={1.5} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="font-dm-sans hidden md:flex items-center h-[36px] sm:h-[42px] gap-[4px] rounded-[999px] bg-purple py-[6px] sm:py-[8px] pr-[10px] sm:pr-[12px] pl-[8px] sm:pl-[10px] text-white text-xs sm:text-[16px] font-medium transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              <HugeiconsIcon icon={User03Icon} size={20} color={colors.white} strokeWidth={1.5} />
              Login / Register
            </Link>
          )}

          {/* Hamburger Menu */}
          {/* <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center h-[36px] w-[38px] sm:h-[42px] sm:w-[44px] rounded-[100%] bg-navy px-2 sm:px-[12px] py-[8px] gap-[4px] transition-colors hover:bg-navy/90 cursor-pointer"
            aria-label="Menu"
          >
            <HugeiconsIcon icon={Menu01Icon} size={20} color={colors.white} strokeWidth={1.5} />
          </button> */}
        </div>
    </header>
    <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    </>
  );
}
