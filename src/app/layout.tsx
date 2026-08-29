import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Anton_SC, Anton } from "next/font/google";
import localFont from "next/font/local";
import LayoutMain from "@/components/layout/LayoutMain";
import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const antonSC = Anton_SC({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const anton = Anton({
  variable: "--font-anton-main",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "../../public/fonts/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "MCD Delhi Mini League",
  description: "MCD Mini League - 2026, Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      style={{ colorScheme: 'light' }}
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${antonSC.variable} ${anton.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <LayoutMain>{children}</LayoutMain>
        </ReduxProvider>
      </body>
    </html>
  );
}
