"use client";

import type { ComponentProps } from "react";
import SameRouteScrollLink from "@/components/common/SameRouteScrollLink";

export type HomeScrollLinkProps = Omit<ComponentProps<typeof SameRouteScrollLink>, "href">;

/** Navigates to `/`; if already on home, scrolls to top instead of a no-op navigation. */
export default function HomeScrollLink(props: HomeScrollLinkProps) {
  return <SameRouteScrollLink href="/" {...props} />;
}
