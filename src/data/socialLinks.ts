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
    href: "https://www.instagram.com/meghalaya_sports_and_youth?igsh=amQxeGlpeHJ0MWJs",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BufRbLx2n/?mibextid=wwXIfr",
    icon: Facebook02Icon,
  },
  {
    name: "X",
    href: "https://x.com/dsya_meghalaya?s=21&t=oOgPNKjMO6Yn0Ig7qa5qcA",
    icon: NewTwitterIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@megha_sports_and_youth_affairs",
    icon: YoutubeIcon,
  },
  // {
  //   name: "LinkedIn",
  //   href: "/coming-soon",
  //   icon: Linkedin02Icon,
  // },
] as const;

export type SocialLink = (typeof socialLinks)[number];
