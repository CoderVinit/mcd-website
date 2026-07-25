import Link from "next/link";
import HomeScrollLink from "@/components/common/HomeScrollLink";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  watermarkText?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const textSize = (text: string) => {
  const len = text.length;
  // Very short (≤6 chars): e.g. "ABOUT", "SPORTS"
  if (len <= 6) {
    return "text-[60px] sm:text-[100px] md:text-[160px] lg:text-[240px] xl:text-[310px]";
  }
  // Short (7–8 chars): e.g. "ATHLETES"
  if (len <= 8) {
    return "text-[48px] sm:text-[80px] md:text-[130px] lg:text-[200px] xl:text-[264px]";
  }
  // Medium (9–12 chars): e.g. "EVENTS"
  if (len <= 12) {
    return "text-[36px] sm:text-[60px] md:text-[100px] lg:text-[140px] xl:text-[180px]";
  }
  // Long (13–18 chars): e.g. "INFRASTRUCTURE"
  if (len <= 18) {
    return "text-[28px] sm:text-[48px] md:text-[80px] lg:text-[130px] xl:text-[170px]";
  }
  // Very long (>18 chars): e.g. "SPORTS ECOSYSTEM"
  return "text-[22px] sm:text-[36px] md:text-[60px] lg:text-[100px] xl:text-[130px]";
};

export default function PageBanner({ title, watermarkText, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative w-full overflow-hidden pt-[80px] pb-[40px] px-[16px] md:pt-[100px] md:pb-[60px] md:px-[32px] lg:pt-[120px] lg:pb-[100px] lg:px-[64px] flex flex-col justify-end gap-2 bg-[#07192e]"
    >
      {/* Background Gradient Overlays for Hero Theme Match */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07192e] via-[#0C1936] to-[#07192e] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F58220]/15 via-transparent to-transparent pointer-events-none" />

      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className={`font-satoshi font-bold uppercase ${textSize(watermarkText || title)} leading-none tracking-[0%] whitespace-nowrap`}
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {watermarkText || title}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto h-auto min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex flex-col justify-end gap-2">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 md:gap-4 font-dm-sans text-[12px] md:text-[14px] font-bold text-white/60 tracking-[0.04em] leading-[150%]">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#F58220]/60">&gt;</span>}
                {crumb.href ? (
                  crumb.href === "/" ? (
                    <HomeScrollLink className="hover:text-white transition-colors">
                      {crumb.label}
                    </HomeScrollLink>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )
                ) : (
                  <span className="text-[#F58220] font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-satoshi font-extrabold uppercase text-white text-[32px] md:text-[56px] lg:text-[80px] leading-[120%] tracking-[0%] drop-shadow-sm">
          {title}
        </h1>
      </div>
    </section>
  );
}
