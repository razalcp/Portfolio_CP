import { site } from "@/lib/data";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h2 id="contact-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Have an opportunity or a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            I&apos;m open to full-stack developer roles and freelance projects. If you think my
            experience with production systems and client work could help your team, I&apos;d love
            to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-200"
            >
              <MailIcon width={16} height={16} />
              {site.email}
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <PhoneIcon width={16} height={16} />
              {site.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              <GitHubIcon width={20} height={20} />
              github.com/razalcp
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              <LinkedInIcon width={20} height={20} />
              LinkedIn Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
