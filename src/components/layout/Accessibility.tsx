"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import Image from "@/components/common/ImageWithLoader";
import { useState } from "react";
import { usePathname } from "next/navigation";

const accessibilityTools = [
  { icon: "Tt", label: "Bigger Text" },
  { icon: "Tt", label: "Smaller Text", muted: true },
  { icon: "A↔", label: "Text Spacing" },
  { icon: "↕☰", label: "Line Height" },
  { icon: "Df", label: "Dyslexia Friendly" },
  { icon: "◉", label: "ADHD Mode" },
  { icon: "◐", label: "Saturation" },
  { icon: "☾", label: "Light-Dark" },
  { icon: "◑", label: "Invert Colors" },
  { icon: "⇆", label: "Highlight Links" },
  { icon: "⋮⋮", label: "Text to Speech" },
  { icon: "◔", label: "Cursor Size" },
  { icon: "⏸", label: "Pause Animation" },
  { icon: "⌧", label: "Hide Images" },
];

export default function Accessibility() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 z-50 flex items-center rounded-bl-[16px] rounded-tl-[16px] bg-white p-4 shadow-[0_0_16px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 top-[calc(50%+175px)] md:top-[calc(50%+220px)] -translate-y-1/2"
        aria-label="Open accessibility tools"
      >
        <Image
          src="/logo/universal-access-circle.svg"
          alt="Accessibility"
          width={28}
          height={28}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-[1000] flex min-w-0">
          <button
            type="button"
            className="min-w-0 flex-1 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Close accessibility tools"
          />

          <aside className="flex h-full w-full min-w-0 max-w-[100vw] flex-col bg-white sm:max-w-[min(488px,100%)] sm:w-[min(488px,100vw)]">
            <div className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-6 sm:pt-6">
              <h2 className="min-w-0 font-satoshi font-bold text-xl leading-[120%] text-navy sm:text-2xl">
                Accessibility Tools
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 items-center justify-center gap-2 rounded-xl bg-gray-50 p-4 text-gray-800 cursor-pointer"
                aria-label="Close accessibility tools"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={24} className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            <div className="mx-4 my-4 w-auto border-t-2 border-neutral-200 sm:mx-6 sm:my-6" />
            
            <div className="grid min-w-0 grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-3 sm:gap-3 sm:px-6 sm:py-6">
              {accessibilityTools.map((tool) => (
                <button
                  key={tool.label}
                  type="button"
                  className="flex min-h-[86px] w-full min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-gray-50 px-2 py-3 sm:gap-3 sm:px-5 cursor-pointer"
                >
                  <span
                    className={`font-dm-sans text-2xl font-semibold leading-none sm:text-[32px] ${
                      tool.muted ? "text-gray-400" : "text-navy"
                    }`}
                  >
                    {tool.icon}
                  </span>
                  <span className="hyphens-auto text-center font-dm-sans text-xs font-medium leading-[150%] text-navy sm:text-[14px]">
                    {tool.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-auto p-4 sm:p-6">
              <button
                type="button"
                className="flex w-full min-w-0 items-center justify-center gap-2 self-stretch rounded-xl border-[1.5px] border-navy px-4 py-3 font-satoshi font-bold text-base text-gray-800 sm:gap-3 sm:px-8 sm:py-4 sm:text-[22px]"
              >
                <span className="text-[26px]">↻</span>
                Reset All Settings
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
