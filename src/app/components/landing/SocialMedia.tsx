import Github from "./Github";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import { socialLinks } from "../../../content/site";

export default function SocialMedia({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const iconByName = {
    github: Github,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => {
        const Icon = iconByName[link.icon];

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="rounded-full transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            rel="noreferrer"
            target="_blank"
          >
            <Icon variant={variant} />
          </a>
        );
      })}
    </div>
  );
}
