import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-white">
            razal<span className="text-accent">.cp</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {site.fullName} · {site.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub profile"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="Send email"
          >
            <MailIcon width={18} height={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
