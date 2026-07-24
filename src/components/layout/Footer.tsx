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
    <footer className="w-full bg-purple">
      {/* Main Footer Content */}
      <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 max-w-[1200px] w-full mx-auto">

          {/* Logo & Title */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 sm:gap-6">
            <div className="p-3 bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] flex items-center gap-2 sm:gap-3 shrink-0">
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
            <div className="flex flex-col gap-[6px]">
              <h2 className="font-satoshi font-bold text-white text-[24px] sm:text-[32px] lg:text-[36px] leading-[100%] tracking-[0%]">
                MCD Mini League
              </h2>
              <p className="font-satoshi font-bold text-white/80 text-[13px] sm:text-[16px] lg:text-[18px] leading-[100%] tracking-[0%]">
                Delhi Grassroots Football
              </p>
            </div>
          </div>

          {/* Links Group */}
          <div className="grid grid-cols-2 sm:grid-cols-3 flex-1 gap-8 sm:gap-10">

            {/* Quick Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <SameRouteScrollLink
                    key={link.label}
                    href={link.href}
                    className="font-dm-sans text-white text-[13px] sm:text-[15px] lg:text-[16px] font-medium leading-[150%] tracking-[0%] hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </SameRouteScrollLink>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider">
                Legal
              </h3>
              <nav className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <SameRouteScrollLink
                    key={link.label}
                    href={link.href}
                    className="font-dm-sans text-white text-[13px] sm:text-[15px] lg:text-[16px] font-medium leading-[150%] tracking-[0%] hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </SameRouteScrollLink>
                ))}
              </nav>
            </div>

            {/* Follow Us */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3 sm:gap-4">
              <h3 className="font-satoshi font-bold text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-wider">
                Follow Us
              </h3>
              <div className="flex flex-row sm:flex-col gap-3">
                {footerSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] flex items-center justify-center backdrop-blur-md shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.10)",
                        border: "1.5px solid rgba(255, 255, 255, 0.25)",
                        borderTop: "2px solid rgba(255, 255, 255, 0.75)",
                        borderLeft: "2px solid rgba(255, 255, 255, 0.75)",
                        boxShadow: "0px 0px 36px 0px #FFFFFF40 inset, 0px 0px 8px 0px rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <HugeiconsIcon icon={social.icon} width={18} height={18} color={colors.white} strokeWidth={1.5} />
                    </div>
                    <span className="hidden sm:inline font-dm-sans text-white text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[150%] tracking-[0%]">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-6 lg:gap-20 items-start sm:items-center max-w-[1200px] w-full mx-auto border-t border-b border-white/40 py-6 sm:py-8">

          {/* Location */}
          <div className="flex items-center gap-3 min-w-0 flex-1 sm:flex-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Location01Icon} width={22} height={22} color={colors.purple} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white font-medium text-[12px] sm:text-[14px] leading-[120%] tracking-[0%]">
                Location:
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] lg:text-[16px] leading-[130%] tracking-[0%]">
                Jl, Sudiram No. 88, Meghalaya, India
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Call02Icon} width={22} height={22} color={colors.purple} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white font-medium text-[12px] sm:text-[14px] leading-[120%] tracking-[0%]">
                Phone:
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] lg:text-[16px] leading-[130%] tracking-[0%]">
                +91 98765 43210
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-white flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Mail02Icon} width={22} height={22} color={colors.purple} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-dm-sans text-white font-medium text-[12px] sm:text-[14px] leading-[120%] tracking-[0%]">
                Email:
              </span>
              <span className="font-satoshi font-bold text-white text-[13px] sm:text-[14px] lg:text-[16px] leading-[130%] tracking-[0%]">
                support@example.com
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
