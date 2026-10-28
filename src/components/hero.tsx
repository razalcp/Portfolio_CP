import Image from "next/image";
import { hero, site } from "@/lib/data";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-32 lg:pt-44">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 font-mono text-xs text-zinc-300">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline[0]}
            <br />
            <span className="bg-gradient-to-r from-accent via-teal-300 to-sky-300 bg-clip-text text-transparent">
              {hero.headline[1]}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {hero.statement}
          </p>

          <p className="mt-5 font-mono text-xs tracking-wide text-zinc-500 sm:text-sm">
            {hero.stackLine}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-200"
            >
              View My Work
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={site.resumeUrl}
              download="Razal_Nazim_Resume.pdf"
              className="flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <DownloadIcon width={16} height={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <MailIcon width={16} height={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-white"
              aria-label="GitHub profile"
            >
              <GitHubIcon width={22} height={22} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-white"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon width={22} height={22} />
            </a>
            <span className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
              <MapPinIcon width={14} height={14} />
              Dubai,UAE
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-teal-500/10 to-transparent opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line-strong bg-raised shadow-2xl shadow-black/50">
              <Image
                src="/razal-photo.png"
                alt={`Portrait of ${site.fullName}, ${site.role}`}
                width={768}
                height={768}
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 80vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-line bg-base/70 px-4 py-2.5 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white">{site.name}</p>
                  <p className="font-mono text-[11px] text-accent">{site.role}</p>
                </div>
                <span className="rounded-full border border-line-strong bg-surface px-2.5 py-1 font-mono text-[10px] text-zinc-300">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
