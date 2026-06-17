import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contactLinks } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact links for Sahaj Saboo."
};

export default function ContactPage() {
  const emailLink = contactLinks[0];
  const secondaryLinks = contactLinks.slice(1);

  return (
    <main
      id="main-content"
      className="mx-auto flex h-[calc(100svh-5rem)] max-w-3xl items-center justify-center overflow-hidden px-6 py-10 text-center"
    >
      <section
        aria-labelledby="contact-title"
        className="flex h-full max-h-[34rem] w-full flex-col"
      >
        <h1 id="contact-title" className="page-title text-white">Contact</h1>

        <div className="flex flex-1 items-center justify-center">
          <Link
            href={emailLink.href}
            className="group flex flex-col items-center gap-5"
          >
            <span className="break-all text-lg text-white transition-colors duration-200 sm:text-xl">
              {emailLink.display}
            </span>
          </Link>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-neutral-400">
          {secondaryLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  aria-hidden="true"
                  className="h-4 w-4 text-neutral-500 transition-colors duration-200 group-hover:text-white"
                />
                <span>{link.display}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
