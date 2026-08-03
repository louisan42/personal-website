import { getLegacySiteConfig } from "@/lib/portfolio-data";

export type SiteConfig = typeof siteConfig;

// Get data from JSON and create legacy-compatible config
const legacyConfig = getLegacySiteConfig();

export const siteConfig = {
  ...legacyConfig,
  navItems: [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};
