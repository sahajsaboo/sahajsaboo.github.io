import type { Metadata, Viewport } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { ReactNode } from "react";

import { SiteNav } from "@/components/site-nav";
import { bodyFont, displayFont } from "@/lib/fonts";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Sahaj Saboo",
    template: "%s | Sahaj Saboo"
  },
  description:
    "Personal portfolio of Sahaj Saboo, an Information Technology student exploring software, networking, cybersecurity, and open-source technologies.",
  authors: [{ name: "Sahaj Saboo" }],
  creator: "Sahaj Saboo",
  openGraph: {
    title: "Sahaj Saboo",
    description:
      "A minimal, typography-focused portfolio for software, networking, cybersecurity, and open-source work.",
    url: "https://example.com",
    siteName: "Sahaj Saboo",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Sahaj Saboo",
    description:
      "A minimal, typography-focused portfolio for software, networking, cybersecurity, and open-source work."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-black font-sans text-white antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[60] -translate-y-20 text-sm text-white underline transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
