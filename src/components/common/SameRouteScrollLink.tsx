"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Strip hash/query and trailing slash (except root) for comparison. */
export function normalizeHrefPath(href: string): string {
  const pathOnly = href.split("#")[0]?.split("?")[0] ?? "";
  if (pathOnly === "" || pathOnly === "/") return "/";
  return pathOnly.endsWith("/") && pathOnly.length > 1 ? pathOnly.slice(0, -1) : pathOnly;
}

export function pathMatchesCurrentRoute(pathname: string, href: string): boolean {
  const target = normalizeHrefPath(href);
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

function hrefArgToString(href: ComponentProps<typeof Link>["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object" && "pathname" in href && href.pathname != null) {
    return String(href.pathname);
  }
  return "";
}

export type SameRouteScrollLinkProps = ComponentProps<typeof Link>;

/** Internal navigation; if already on this route (or a nested path under it), scroll to top smoothly. */
export default function SameRouteScrollLink({
  href,
  onClick,
  ...props
}: SameRouteScrollLinkProps) {
  const pathname = usePathname();
  const hrefStr = hrefArgToString(href);

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        if (hrefStr && pathMatchesCurrentRoute(pathname, hrefStr)) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        onClick?.(e);
      }}
    />
  );
}
