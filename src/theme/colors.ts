/**
 * Design tokens — keep in sync with `@theme inline` in `src/app/globals.css`.
 * Use these for JS contexts (icon props, inline styles, SweetAlert) where
 * Tailwind class names cannot be applied.
 */
export const colors = {
  background: "#ffffff",
  foreground: "#171717",

  // Gray
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#111827",

  // Neutral
  neutral100: "#F0F1F3",
  neutral200: "#EAECF0",
  neutral400: "#A3A3A3",
  neutral500: "#737373",
  neutral600: "#525252",

  // Brand
  primary: "#8A38F5",
  secondary: "#753FC9",
  accent: "#9B6FDB",
  indigo: "#4F46E5",
  violet: "#2E16E3",
  cyan: "#18BDDE",
  purple: "#753FC9",
  purpleLight: "#F4EEFD",
  purpleHover: "#F3EDF9",
  greenLight: "#4AA5640D",
  green: "#4AA564",
  red: "#C62828",

  // Interactive
  info: "#4887E9",
  infoLight: "#EBF1FD",
  infoRing: "#EDF3FD",
  focusBlue: "#2563EB",
  uploadAccent: "#7C3AED",
  checkGreen: "#22c55e",

  // Navy / dark
  navy: "#000413",
  navyDark: "#0C1936",
  navyDeeper: "#1A1A2E",
  bannerDark: "#3F2271",
  slateText: "#2D3747",

  // Status
  success: "#43A047",
  successLight: "#E8F5E9",
  emerald: "#10B981",
  emeraldDark: "#15803D",
  error: "#DC2626",
  errorLight: "#EF4444",
  warning: "#F59E0B",
  amber: "#FFBF00",
  amberDark: "#FFAA00",
  orange: "#FFA500",
  rose: "#BE133B",
  brandOrange: "#E15A1D",
  statusOngoing: "#B45309",
  statusOngoingBg: "#FFFBEB",
  statusPlanned: "#1D4ED8",
  statusPlannedBg: "#EFF6FF",

  // Surfaces
  blue50: "#EBF7FF",
  blue100: "#F0F5FF",
  amber50: "#FFF8E1",
  surfaceLight: "#F8F9FB",
  pageBg: "#F8F8F8",
  sectionBg: "#F3F4F5",
  borderSubtle: "#FAFAFA",
  borderMuted: "#F5F5F5",

  // Map
  mapBorder: "#C7D9F0",
  mapHoverBg: "#EEF4FC",
  mapText: "#151F2D",
  mapLink: "#1256AA",
  mapLinkHover: "#3068C4",
  mapHoverText: "#0D4688",

  // Misc
  slateBlue: "#3E568A",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export type ColorToken = keyof typeof colors;

/** CSS variable references for inline styles / icon color props */
export const cssVar = {
  purple: "var(--color-purple)",
  primary: "var(--color-primary)",
  navy: "var(--color-navy)",
  navyDark: "var(--color-navy-dark)",
  navyDeeper: "var(--color-navy-deeper)",
  gray400: "var(--color-gray-400)",
  gray500: "var(--color-gray-500)",
  gray600: "var(--color-gray-600)",
  gray700: "var(--color-gray-700)",
  info: "var(--color-info)",
  infoRing: "var(--color-info-ring)",
  green: "var(--color-green)",
  red: "var(--color-red)",
  white: "var(--color-white, #FFFFFF)",
  uploadAccent: "var(--color-upload-accent)",
  emerald: "var(--color-emerald)",
} as const;
