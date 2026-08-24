import type { Project } from "@/lib/data";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "./icons";
import { Reveal } from "./reveal";

function ProjectBadges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-accent/30 bg-accent/[0.07] px-3 py-1 font-mono text-[11px] text-accent"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

function ProjectLink({ link }: { link: NonNullable<Project["link"]> }) {
  const isGitHub = link.href.includes("github.com");
  const Icon = isGitHub ? GitHubIcon : ExternalLinkIcon;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-teal-200"
    >
      <Icon width={16} height={16} />
      {link.label}
      <ArrowRightIcon
        width={15}
        height={15}
        className="transition-transform group-hover/link:translate-x-1"
      />
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-raised sm:p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 font-mono text-[7rem] font-semibold leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-white/[0.05]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <ProjectBadges badges={project.badges} />

      <h4 className="mt-4 text-xl font-semibold tracking-tight text-white">{project.name}</h4>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-zinc-500">
        {project.category}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      {project.highlights ? (
        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
            >
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line bg-base px-2.5 py-0.5 font-mono text-[11px] text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.link ? (
        <div className="mt-auto pt-6">
          <ProjectLink link={project.link} />
        </div>
      ) : (
        <p className="mt-auto pt-6 font-mono text-[11px] text-zinc-600">
          Internal product — source not public
        </p>
      )}
    </article>
  );
}

type ProjectsGroupProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  projects: Project[];
};

export function ProjectsGroup({ id, label, title, description, projects }: ProjectsGroupProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h3>
          <span aria-hidden className="h-px flex-1 bg-line-strong" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">{description}</p>
      </Reveal>
      <div className={`mt-8 grid gap-5 ${projects.length > 2 ? "lg:grid-cols-3 sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 90} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export { ProjectCard };
