import Image from "@/components/common/ImageWithLoader";
import SameRouteScrollLink from "@/components/common/SameRouteScrollLink";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Call02Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import { colors } from "@/theme/colors";
import { socialLinks } from "@/data/socialLinks";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About League", href: "/about" },
  { label: "Community Clubs", href: "/about/listing-of-sports-and-youth-clubs" },
  { label: "Fixtures & Schedule", href: "/tournaments/fixtures" },
  { label: "Venues & Facilities", href: "/infrastructure/venues-facilities" },
  { label: "Media & News", href: "/media" },
  { label: "Sponsors & Partners", href: "/partner" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

const footerSocialLinks = socialLinks.filter((link) => (link.name as string) !== "LinkedIn");

export default function Footer() {
  return (
    <footer className="w-full bg-[#07192e] relative overflow-hidden text-white border-t border-white/10">
      {/* Background Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07192e] via-[#0C1936] to-[#07192e] pointer-events-none opacity-90" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 flex flex-col gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 max-w-[1200px] w-full mx-auto">

          {/* Logo & Title */}
          <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-sm">
            <div className="p-3 bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] flex items-center gap-2 sm:gap-3 shrink-0 shadow-md">
              <Image
                src="/logo/MCD/MCOD.png"
                alt="MCOD Logo"
                width={72}
                height={72}
                className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[68px] lg:h-[68px] object-contain"
                unoptimized
              />
              <span className="text-gray-400 font-light text-lg sm:text-xl lg:text-2xl select-none">/</span>
              <Image
                src="/logo/MCD/SITDS.png"
                alt="SITDS Logo"
                width={72}
                height={72}
                className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] lg:w-[68px] lg:h-[68px] object-contain"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-satoshi font-extrabold text-white text-[24px] sm:text-[30px] lg:text-[34px] leading-tight">
                MCD Mini League
              </h2>
              <p className="font-dm-sans text-[#F58220] font-bold text-[13px] sm:text-[15px] tracking-wide uppercase">
                Delhi Grassroots Football Ecosystem
              </p>
            </div>
            <p className="font-dm-sans text-white/70 text-xs sm:text-sm leading-relaxed">
              Empowering primary school athletes across Delhi through structured league competition, talent pathways, and grassroots infrastructure.
            </p>
          </div>

          {/* Links Group */}
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-1 gap-8 sm:gap-10">

            {/* Quick Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <SameRouteScrollLink
                    key={link.label}
                    href={link.href}
                    className="font-dm-sans text-white/80 text-[13px] sm:text-[15px] font-medium leading-[150%] hover:text-[#F58220] transition-colors"
                  >
                    {link.label}
                  </SameRouteScrollLink>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Legal
              </h3>
              <nav className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <SameRouteScrollLink
                    key={link.label}
                    href={link.href}
                    className="font-dm-sans text-white/80 text-[13px] sm:text-[15px] font-medium leading-[150%] hover:text-[#F58220] transition-colors"
                  >
                    {link.label}
                  </SameRouteScrollLink>
                ))}
              </nav>
            </div>

            {/* Follow Us */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Follow Us
              </h3>
              <div className="flex flex-row sm:flex-col gap-3">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-[#F58220] transition-colors group"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] flex items-center justify-center backdrop-blur-md shrink-0 transition-all duration-300 group-hover:border-[#F58220] group-hover:bg-[#F58220]/20"
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <HugeiconsIcon icon={social.icon} width={18} height={18} color={colors.white} strokeWidth={1.5} />
                    </div>
                    <span className="hidden sm:inline font-dm-sans text-[14px] sm:text-[15px] font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 lg:gap-16 items-start sm:items-center max-w-[1200px] w-full mx-auto border-t border-white/10 pt-6 sm:pt-8">

          {/* Location */}
          <div className="flex items-center gap-3.5 min-w-0 flex-1 sm:flex-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/20 flex items-center justify-center shrink-0 text-[#F58220]">
              <HugeiconsIcon icon={Location01Icon} width={22} height={22} color="#F58220" strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white/60 font-medium text-[11px] sm:text-[12px] uppercase tracking-wider">
                Headquarters
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] leading-tight">
                Civic Centre, Minto Road, New Delhi - 110002
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/20 flex items-center justify-center shrink-0 text-[#F58220]">
              <HugeiconsIcon icon={Call02Icon} width={22} height={22} color="#F58220" strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white/60 font-medium text-[11px] sm:text-[12px] uppercase tracking-wider">
                Helpline Phone
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] leading-tight">
                +91 11 2322 7000
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#F58220]/10 border border-[#F58220]/20 flex items-center justify-center shrink-0 text-[#F58220]">
              <HugeiconsIcon icon={Mail02Icon} width={22} height={22} color="#F58220" strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white/60 font-medium text-[11px] sm:text-[12px] uppercase tracking-wider">
                Official Email
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] leading-tight">
                mml@mcd.gov.in
              </span>
            </div>
          </div>

        </div>

        {/* Copyright Footer Line */}
        <div className="max-w-[1200px] w-full mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm-sans text-white/50">
          <span>&copy; {new Date().getFullYear()} Municipal Corporation of Delhi (MCD) &amp; SITDS. All rights reserved.</span>
          <span>Delhi Grassroots Primary School Football Initiative</span>
        </div>

      </div>
    </footer>
  );
}
