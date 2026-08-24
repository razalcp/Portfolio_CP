import { earlierCareer, experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience, not just practice."
            description="Currently building production software at Dignizant Technologies — real systems, real clients, real deployments."
            headingId="experience-heading"
          />
        </Reveal>

        <ol className="relative mt-14 space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-line-strong sm:before:left-1/2 sm:before:-translate-x-1/2">
          {experience.map((item, index) => (
            <li key={item.company} className="relative">
              <span
                aria-hidden
                className={`absolute left-0 top-7 h-4 w-4 rounded-full border-2 sm:left-1/2 sm:-translate-x-1/2 ${
                  item.current
                    ? "border-accent bg-accent shadow-[0_0_12px_rgba(94,234,212,0.6)]"
                    : "border-line-strong bg-base"
                }`}
              />
              <Reveal delay={index * 100} className={`pl-9 sm:w-[calc(50%-2.5rem)] sm:pl-0 ${index % 2 === 0 ? "sm:ml-auto" : ""}`}>
                <article
                  className={`rounded-2xl border bg-surface p-6 transition-colors hover:border-line-strong sm:p-7 ${
                    item.current ? "border-accent/25" : "border-line"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-line bg-base px-3 py-1 font-mono text-[11px] text-zinc-400">
                      {item.period}
                    </span>
                    {item.current ? (
                      <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium text-accent">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-zinc-500">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {earlierCareer.title}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
              {earlierCareer.description}
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-sm text-zinc-400 sm:grid-cols-2">
              {earlierCareer.roles.map((role) => (
                <li key={role} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Education</h3>
              <p className="mt-3 text-sm font-semibold text-white">
                B.E. Electronics &amp; Communication
              </p>
              <p className="text-sm text-zinc-500">Coorg Institute of Technology · 2012 — 2016</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Training</h3>
              <p className="mt-3 text-sm font-semibold text-white">MERN Stack Developer Training</p>
              <p className="text-sm text-zinc-500">Brototype · Dec 2023 — Present</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
