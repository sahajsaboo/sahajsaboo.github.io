import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialLinks } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-6 text-neutral-500 ${className}`}>
      {socialLinks.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <Link
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="block transition-colors duration-200 hover:text-white"
            >
              <FontAwesomeIcon
                icon={link.icon}
                aria-hidden="true"
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`
                }}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
