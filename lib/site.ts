import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type SocialLink = {
  label: string;
  href: string;
  display: string;
  icon: IconProp;
};

export type NavItem = {
  label: string;
  href: "/" | "/about" | "/projects" | "/contact";
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const pageNavItems = navItems.filter((item) => item.href !== "/");

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/sahajsaboo",
    display: "github.com/sahajsaboo",
    icon: faGithub
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahaj-saboo-52b7b2416",
    display: "linkedin.com/in/sahaj-saboo-52b7b2416",
    icon: faLinkedin
  },
  {
    label: "Email",
    href: "mailto:sahajsaboo@gmail.com",
    display: "sahajsaboo@gmail.com",
    icon: faEnvelope
  }
];

export const contactLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:sahajsaboo@gmail.com",
    display: "sahajsaboo@gmail.com",
    icon: faEnvelope
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahaj-saboo-52b7b2416",
    display: "LinkedIn",
    icon: faLinkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/sahajsaboo",
    display: "GitHub",
    icon: faGithub
  }
];
