import { professionalProjects, personalProjects } from "@/lib/data";
import { ProjectsGroup } from "./projects";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line">
      <div className="mx-auto max-w-6xl space-y-20 px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Work that runs in the real world."
            description="Professional production systems first, then personal and collaborative builds — each one shipped, not just started."
            headingId="projects-heading"
          />
        </Reveal>

        <ProjectsGroup
          id="professional-projects"
          label="Professional"
          title="Professional Projects"
          description="Enterprise software developed at Dignizant Technologies for real business operations — built to production standards and used by actual users."
          projects={professionalProjects}
        />

        <ProjectsGroup
          id="personal-projects"
          label="Personal & Collaborative"
          title="Personal & Collaborative Projects"
          description="Full-stack applications I've designed, built and deployed — plus collaborative open-source work with other developers."
          projects={personalProjects}
        />
      </div>
    </section>
  );
}
