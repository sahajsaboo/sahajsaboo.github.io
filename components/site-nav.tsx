"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SocialLinks } from "@/components/social-links";
import { pageNavItems } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (pathname === "/") {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black px-6 py-4">
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex max-w-6xl items-center gap-6"
        >
          <Link
            href="/"
            className="site-brand text-white transition-colors duration-200 hover:text-neutral-300 md:mr-8"
          >
            Sahaj Saboo
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
            className="ml-auto flex h-10 w-10 items-center justify-center text-neutral-400 transition-colors duration-200 hover:text-white md:hidden"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faGripLines}
              aria-hidden="true"
              className="h-5 w-5"
            />
          </button>

          <ul className="hidden flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-500 md:flex">
            {pageNavItems.map((item) => {
              const isCurrent = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "text-white underline decoration-white/30 underline-offset-4"
                        : "transition-colors duration-200 hover:text-white"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <SocialLinks className="ml-auto hidden md:flex" iconSize={17} />
        </nav>
      </header>

      <section
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={
          isOpen
            ? "fixed inset-0 z-40 flex h-svh flex-col overflow-hidden bg-black px-6 pb-8 pt-28 md:hidden"
            : "hidden"
        }
      >
        <div className="flex flex-1 items-center justify-center text-center">
          <ul className="flex flex-col gap-6 text-base text-neutral-400">
            {pageNavItems.map((item) => {
              const isCurrent = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "text-white underline decoration-white/30 underline-offset-4"
                        : "transition-colors duration-200 hover:text-white"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <SocialLinks className="justify-center" iconSize={20} />
      </section>
    </>
  );
}
