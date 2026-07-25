import {
  Linkedin02Icon,
  NewTwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  Facebook02Icon,
} from "@hugeicons/core-free-icons";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mcd_mini_league",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mcdminileague",
    icon: Facebook02Icon,
  },
  {
    name: "X",
    href: "https://x.com/mcd_mini_league",
    icon: NewTwitterIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@mcd_mini_league",
    icon: YoutubeIcon,
  },
  // {
  //   name: "LinkedIn",
  //   href: "/coming-soon",
  //   icon: Linkedin02Icon,
  // },
] as const;

export type SocialLink = (typeof socialLinks)[number];
