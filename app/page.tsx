import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { pageNavItems } from "@/lib/site";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="flex h-svh min-h-svh items-center justify-center overflow-hidden px-6 py-8"
    >
      <section
        aria-labelledby="home-title"
        className="mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <h1 id="home-title" className="home-title text-white">
          <span className="block md:inline">Sahaj</span>{" "}
          <span className="block md:inline">Saboo</span>
        </h1>

        <p className="body-copy mt-8 max-w-2xl md:mt-10">
          Exploring the world of software development, cybersecurity, and open-source.
        </p>

        <nav
          aria-label="Primary pages"
          className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-neutral-400 sm:text-base"
        >
          {pageNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="quiet-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialLinks className="mt-10 justify-center" iconSize={20} />
      </section>
    </main>
  );
}
