import { skillGroups } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I use to build and ship."
            description="A stack refined through production work, deployed personal projects and structured training — spanning frontend, backend, databases and cloud."
            headingId="skills-heading"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong hover:bg-raised">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-base px-3 py-1 text-sm text-zinc-300 transition-colors group-hover:border-line-strong"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-sm text-zinc-500">
            Also working with: API integration, RESTful API design, component-based architecture,
            state management and responsive design.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
