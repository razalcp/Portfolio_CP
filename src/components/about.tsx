import { about } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A developer who understands the business behind the code."
            headingId="about-heading"
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-zinc-400">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <dl className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <dt className="sr-only">Quick facts</dt>
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-line py-4 first:pt-0 last:border-none last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-300">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
