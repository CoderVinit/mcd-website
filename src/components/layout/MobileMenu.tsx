"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "@/components/common/ImageWithLoader";
import Link from "next/link";
import HomeScrollLink from "@/components/common/HomeScrollLink";
import { useEffect, useId, useRef } from "react";
import { QuickAccessPanel } from "./QuickAccessPanel";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowRight02Icon, Cancel01Icon, Logout01Icon } from "@hugeicons/core-free-icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const navItems = [
  { number: "01.", label: "HOME", href: "/", hasDropdown: false },
  { number: "02.", label: "ABOUT", href: "/about", hasDropdown: false },
  { number: "03.", label: "CLUBS", href: "/about/listing-of-sports-and-youth-clubs", hasDropdown: false },
  { number: "04.", label: "TOURNAMENT", href: "/tournaments", hasDropdown: false },
  { number: "05.", label: "TEAMS", href: "/sports-ecosystem/associations-clubs", hasDropdown: false },
  { number: "06.", label: "ATHLETES", href: "/sports-ecosystem/athletes-directory", hasDropdown: false },
  { number: "07.", label: "VENUES", href: "/infrastructure/venues-facilities", hasDropdown: false },
  { number: "08.", label: "MEDIA", href: "/media", hasDropdown: false },
  { number: "09.", label: "SPONSORS & PARTNERS", href: "/partner", hasDropdown: false },
  { number: "10.", label: "REGISTER", href: "/registration", hasDropdown: false },
  { number: "11.", label: "CONTACT", href: "/contact", hasDropdown: false },
  { number: "12.", label: "ENQUIRE NOW", href: "/contact/enquiry", hasDropdown: false },
];

export default function MobileMenu({ isOpen, onClose, isLoggedIn, onLogout }: MobileMenuProps) {
  const panelTitleId = useId();
  const panelDescriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const getFocusableElements = (container: HTMLElement) =>
    Array.from(
      container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

  useEffect(() => {
    if (!isOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyTouchAction = document.body.style.touchAction;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevHtmlTouchAction = document.documentElement.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.touchAction = "none";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.touchAction = prevBodyTouchAction;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.touchAction = prevHtmlTouchAction;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => {
      if (!dialogRef.current) return;
      const focusables = getFocusableElements(dialogRef.current);
      (focusables[0] ?? dialogRef.current).focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = getFocusableElements(dialogRef.current);
      if (focusables.length === 0) {
        e.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      previousActiveElementRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          className="fixed inset-0 z-[1000] h-dvh max-h-dvh overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={panelTitleId}
          aria-describedby={panelDescriptionId}
          tabIndex={-1}
          initial={false}
        >
          <motion.button
            type="button"
            className="absolute inset-0 cursor-pointer bg-black/30 backdrop-blur-sm transition-colors hover:bg-black/35"
            onClick={onClose}
            aria-label="Close menu"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <motion.div
            className="absolute right-0 top-0 z-10 flex h-full min-h-0 w-full max-w-[100vw] flex-col overflow-y-auto shadow-[-12px_0_32px_rgba(0,0,0,0.18)] md:max-w-[min(92vw,754px)] md:flex-row md:overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
      {/* Dark navigation */}
      <div className="flex min-h-0 w-full shrink-0 flex-col justify-between gap-6 bg-navy p-4 sm:p-6 md:w-[450px] md:max-w-[450px] md:flex-none md:overflow-y-auto md:border-b-0 border-b border-white/10">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl">
              <Image
                src="/logo/MCD/MCOD.png"
                alt="MCOD Logo"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
                unoptimized
              />
              <span className="text-gray-400 font-light text-base select-none">/</span>
              <Image
                src="/logo/MCD/SITDS.png"
                alt="SITDS Logo"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
                unoptimized
              />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 transition-colors hover:bg-white/30 cursor-pointer"
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={24} className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="my-6 h-px bg-gray-300" />

          <nav className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.href === "/" ? (
                <HomeScrollLink
                  key={item.label}
                  onClick={onClose}
                  className="group flex items-end justify-between py-4"
                >
                  <div className="flex min-w-0 items-end gap-4">
                    <span className="shrink-0 font-dm-sans text-base font-semibold leading-[120%] tracking-[0.01em] text-white/20">
                      {item.number}
                    </span>
                    <span className="truncate font-satoshi font-bold text-[20px] font-normal leading-[120%] tracking-[0.01em] text-neutral-200">
                      {item.label}
                    </span>
                  </div>
                  {item.hasDropdown && (
                   <HugeiconsIcon icon={ArrowDown01Icon} size={24} className="text-white" />
                  )}
                </HomeScrollLink>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-end justify-between py-4"
                >
                  <div className="flex min-w-0 items-end gap-4">
                    <span className="shrink-0 font-dm-sans text-base font-semibold leading-[120%] tracking-[0.01em] text-white/20">
                      {item.number}
                    </span>
                    <span className="truncate font-satoshi font-bold text-[20px] font-normal leading-[120%] tracking-[0.01em] text-neutral-200">
                      {item.label}
                    </span>
                  </div>
                  {item.hasDropdown && (
                   <HugeiconsIcon icon={ArrowDown01Icon} size={24} className="text-white" />
                  )}
                </Link>
              )
            )}
          </nav>
        </div>

        {isLoggedIn ? (
          <button
            type="button"
            onClick={() => { onLogout?.(); onClose(); }}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-white px-10 py-4 font-satoshi font-bold text-base tracking-wider transition-opacity hover:opacity-90 sm:mt-8 cursor-pointer"
          >
            <HugeiconsIcon icon={Logout01Icon} size={24} className="text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-normal text-transparent">LOG OUT</span>
          </button>
        ) : (
          <Link
            href="/login"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-white px-10 py-4 font-satoshi font-bold text-base tracking-wider transition-opacity hover:opacity-90 sm:mt-8"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-normal text-transparent">LOG IN</span>
            <span className="relative h-6 w-6 shrink-0" aria-hidden>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={24}
                className="absolute inset-0 h-6 w-6 text-primary [mask-image:linear-gradient(to_right,#000,transparent)]"
              />
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={24}
                className="absolute inset-0 h-6 w-6 text-secondary [mask-image:linear-gradient(to_right,transparent,#000)]"
              />
            </span>
          </Link>
        )}
      </div>

      <QuickAccessPanel
        onClose={onClose}
        highlightFirstCard
        titleId={panelTitleId}
        descriptionId={panelDescriptionId}
        className="min-h-0 w-full shrink-0 border-t border-white/10 bg-white md:w-[304px] md:flex-none md:border-l md:border-t-0"
      />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
