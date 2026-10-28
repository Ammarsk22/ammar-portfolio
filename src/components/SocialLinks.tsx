import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const LINKS = [
  { label: "GitHub", href: PERSONAL_INFO.githubUrl, Icon: Github, external: true },
  { label: "LinkedIn", href: PERSONAL_INFO.linkedinUrl, Icon: Linkedin, external: true },
  { label: "Instagram", href: PERSONAL_INFO.instagramUrl, Icon: Instagram, external: true },
  { label: "Email", href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail, external: false },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {LINKS.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className="text-ink-soft transition-colors duration-300 hover:text-accent2"
          >
            <Icon className="h-[22px] w-[22px] sm:h-6 sm:w-6" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
