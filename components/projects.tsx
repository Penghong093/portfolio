import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section className="min-h-[calc(100svh-4rem)] border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects."
          description="Project placeholders are ready to replace with real repositories, case studies, and production demos."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-5 h-32 rounded-xl border border-slate-200 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.25),transparent_30%),linear-gradient(135deg,#f8fafc,#e2e8f0)] dark:border-slate-800 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.18),transparent_30%),linear-gradient(135deg,#020617,#0f172a)]" />
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  aria-label={`${project.title} GitHub`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={project.demo}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  aria-label={`${project.title} live demo`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
