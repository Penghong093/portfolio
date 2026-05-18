"use client";

import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/portfolio";

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const orderedProjects = [...projects].reverse();
  const variousClientProjects = {
    title: "Various Client Projects",
    date: "2017 - 2023",
    items: [
      "MLM (Multi-Level Marketing) Web Application",
      "Novel & eBook Platform",
      "Real Estate Management System",
      "Subscription-based eBook & Motivation Video Platform",
      "Restaurant & eCommerce Ordering Systems",
      "Advanced POS System with real-time inventory management",
      "More..."
    ]
  };
  const niledaGroup = orderedProjects.find((project) => project.title === "Nileda Group");
  const timelineItems = [
    ...orderedProjects
      .filter((project) => project.title !== "Nileda Group")
      .map((project) => ({ type: "project" as const, project })),
    ...(niledaGroup ? [{ type: "project" as const, project: niledaGroup }] : []),
    { type: "clientProjects" as const }
  ];
  const projectDates: Record<string, string> = {
    "Nileda Group": "2023 - 2024",
    "Facebook Autoplay": "2023 - 2024",
    "Mini Auto Trading": "2023 - 2024",
    "Auto Edit Video": "2023 - 2024",
    "Tool Download": "2025 - 2026",
    PhotoBooth: "2025 - 2026",
    "Online Poker Game": "2025 - 2026",
    "Etinh Order": "2025 - 2026",
    Curator: "2025 - 2026"
  };

  return (
    <>
      <section className="min-h-[calc(100svh-6rem)] bg-[#f7f7f4] bg-[linear-gradient(#e3e6e1_1px,transparent_1px),linear-gradient(90deg,#e3e6e1_1px,transparent_1px)] bg-[size:28px_28px] text-[#171b1d]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mb-12 grid gap-6 border-b border-[#171b1d] pb-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h1 className="text-[15vw] font-black uppercase leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl">
              Selected
              <br />
              Work
            </h1>

            <p className="max-w-md border-l-4 border-[#007a25] pl-5 font-mono text-xs font-medium uppercase leading-6 text-slate-700">
              Web applications and systems built for business operations,
              automation, and modern workflows.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-[#171b1d] md:left-1/2" aria-hidden="true" />

            <div className="grid gap-12 md:gap-16">
              {timelineItems.map((item, index) => {
                const isRight = index % 2 === 1;
                const isDark = index % 3 === 1;

                if (item.type === "clientProjects") {
                  return (
                    <div
                      key={variousClientProjects.title}
                      className="relative grid gap-5 pl-12 md:grid-cols-[1fr_72px_1fr] md:gap-0 md:pl-0"
                    >
                      <article
                        className={[
                          "relative flex min-h-56 w-full flex-col border border-[#171b1d] p-5 text-left sm:p-6",
                          "after:absolute after:left-0 after:top-full after:h-1 after:w-full after:bg-[#171b1d]",
                          isDark
                            ? "bg-[#171b1d] text-[#f7f7f4] shadow-[5px_5px_0_#00f050] after:bg-[#00f050]"
                            : "bg-[#f7f7f4] text-[#171b1d] shadow-[5px_5px_0_#171b1d]",
                          isRight ? "md:col-start-3" : "md:col-start-1"
                        ].join(" ")}
                      >
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <span
                            className={[
                              "font-mono text-[9px] font-black uppercase",
                              isDark ? "text-[#00f050]" : "text-[#007a25]"
                            ].join(" ")}
                          >
                            {variousClientProjects.date}
                          </span>

                          <span
                            className={[
                              "border px-2 py-1 text-center font-mono text-[9px] font-black uppercase leading-tight",
                              isDark
                                ? "border-[#f7f7f4] bg-[#f7f7f4] text-[#171b1d]"
                                : "border-[#171b1d] bg-[#171b1d] text-[#f7f7f4]"
                            ].join(" ")}
                          >
                            Multi
                            <br />
                            Client
                          </span>
                        </div>

                        <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                          {variousClientProjects.title}
                        </h2>

                        <p className="mt-5 font-mono text-xs font-black uppercase">
                          Client Systems & Platforms
                        </p>

                        <ul
                          className={[
                            "mt-3 max-w-md list-inside list-disc space-y-1.5 text-xs leading-5",
                            isDark ? "text-slate-200" : "text-slate-700"
                          ].join(" ")}
                        >
                          {variousClientProjects.items.map((clientProject) => (
                            <li key={clientProject}>{clientProject}</li>
                          ))}
                        </ul>

                        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                          <span
                            className={[
                              "border px-2 py-1 font-mono text-[9px] font-black uppercase",
                              isDark
                                ? "border-[#00f050] text-[#00f050]"
                                : "border-[#171b1d] text-[#171b1d]"
                            ].join(" ")}
                          >
                            Laravel / Django / Express
                          </span>

                          <span
                            className={[
                              "inline-flex items-end gap-2 font-mono font-black uppercase",
                              isDark ? "text-[#00f050]" : "text-[#007a25]"
                            ].join(" ")}
                          >
                            <span className="text-4xl leading-none">6+</span>
                            <span className="pb-1 text-[9px] leading-tight">
                              Client
                              <br />
                              Builds
                            </span>
                          </span>
                        </div>
                      </article>

                      <div
                        className="absolute left-4 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-[#171b1d] bg-[#00f050] md:left-1/2"
                        aria-hidden="true"
                      />
                    </div>
                  );
                }

                const { project } = item;
                const primaryTech = project.tech.slice(0, 2).join(" / ");

                return (
                  <div
                    key={project.title}
                    className="relative grid gap-5 pl-12 md:grid-cols-[1fr_72px_1fr] md:gap-0 md:pl-0"
                  >
                    <button
                      type="button"
                      className={[
                        "group relative flex min-h-56 w-full flex-col border border-[#171b1d] p-5 text-left transition duration-200 sm:p-6",
                        "after:absolute after:left-0 after:top-full after:h-1 after:w-full after:bg-[#171b1d] after:transition-colors",
                        isDark
                          ? "bg-[#171b1d] text-[#f7f7f4] shadow-[5px_5px_0_#00f050] after:bg-[#00f050] hover:-translate-y-1"
                          : "bg-[#f7f7f4] text-[#171b1d] shadow-[5px_5px_0_#171b1d] hover:-translate-y-1 hover:shadow-[5px_5px_0_#00f050]",
                        isRight ? "md:col-start-3" : "md:col-start-1"
                      ].join(" ")}
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <span
                          className={[
                            "font-mono text-[9px] font-black uppercase",
                            isDark ? "text-[#00f050]" : "text-[#007a25]"
                          ].join(" ")}
                        >
                          {projectDates[project.title]}
                        </span>

                        <span
                          className={[
                            "border px-2 py-1 text-center font-mono text-[9px] font-black uppercase leading-tight",
                            isDark
                              ? "border-[#f7f7f4] bg-[#f7f7f4] text-[#171b1d]"
                              : "border-[#171b1d] bg-[#171b1d] text-[#f7f7f4]"
                          ].join(" ")}
                        >
                          {project.images.length.toString().padStart(2, "0")}
                          <br />
                          Shots
                        </span>
                      </div>

                      <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 font-mono text-xs font-black uppercase">
                        {project.features ? project.detail : "Core Project Build"}
                      </p>

                      <p
                        className={[
                          "mt-3 max-w-md text-xs leading-5",
                          isDark ? "text-slate-200" : "text-slate-700"
                        ].join(" ")}
                      >
                        {project.features ? project.features.slice(0, 2).join(". ") : project.detail}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                        <span
                          className={[
                            "border px-2 py-1 font-mono text-[9px] font-black uppercase",
                            isDark
                              ? "border-[#00f050] text-[#00f050]"
                              : "border-[#171b1d] text-[#171b1d]"
                          ].join(" ")}
                        >
                          {primaryTech}
                        </span>

                        <span
                          className={[
                            "inline-flex items-end gap-2 font-mono font-black uppercase",
                            isDark ? "text-[#00f050]" : "text-[#007a25]"
                          ].join(" ")}
                        >
                          <span className="text-4xl leading-none">{project.tech.length}X</span>
                          <span className="pb-1 text-[9px] leading-tight">
                            Tech
                            <br />
                            Stack
                          </span>
                        </span>
                      </div>

                      <span
                        className={[
                          "absolute inset-0 flex items-center justify-center gap-2 border opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                          isDark
                            ? "border-[#00f050] bg-[#171b1d]/95 text-[#00f050]"
                            : "border-[#171b1d] bg-[#00f050]/95 text-[#171b1d]"
                        ].join(" ")}
                      >
                        <ImageIcon className="h-4 w-4" aria-hidden="true" />
                        <span className="font-mono text-xs font-black uppercase">View Project</span>
                      </span>
                    </button>

                    <div
                      className="absolute left-4 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-[#171b1d] bg-[#00f050] md:left-1/2"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171b1d]/45 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close project detail"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative max-h-[90svh] w-full max-w-5xl overflow-y-auto border border-[#171b1d] bg-[#f4f4f2] p-7 text-[#171b1d] sm:p-9">
            <div className="flex items-start justify-between gap-5 border-b border-[#171b1d] pb-6">
              <div>
                <span className="mb-5 inline-flex bg-[#171b1d] px-2 py-1 font-mono text-[10px] font-black uppercase text-white">
                  Project Detail
                </span>
                <h2
                  id="project-dialog-title"
                  className="text-4xl font-black uppercase leading-none sm:text-5xl"
                >
                  {activeProject.title}
                </h2>
              </div>

              <button
                type="button"
                className="focus-ring border border-[#171b1d] bg-[#00f050] px-4 py-3 font-mono text-xs font-bold uppercase"
                onClick={() => {
                  setActiveProject(null);
                  setPreviewImage(null);
                }}
              >
                Close
              </button>
            </div>

            <div className="grid gap-6 py-7 sm:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase text-slate-700">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="mx-1 mb-2 border border-[#171b1d] px-3 py-1 font-mono text-[10px] font-semibold uppercase text-[#171b1d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-[#171b1d] bg-white/40 p-5">
                {activeProject.features ? (
                  <div>
                    <p className="font-mono text-xs font-bold uppercase text-slate-700">
                      {activeProject.detail}
                    </p>
                    <ul className="mt-3 list-inside list-disc space-y-2 font-mono text-xs font-bold uppercase leading-6 text-slate-700">
                      {activeProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="font-mono text-xs font-bold uppercase leading-6 text-slate-700">
                    {activeProject.detail}
                  </p>
                )}
              </div>
            </div>

            {activeProject.images.length > 0 ? (
              <div className="grid gap-5">
                {activeProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    className="focus-ring relative aspect-[3006/1606] overflow-hidden border border-[#171b1d] bg-white"
                    aria-label={`Preview ${activeProject.title} screenshot ${index + 1}`}
                    onClick={() => setPreviewImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${activeProject.title} screenshot ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 896px, 90vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {previewImage && activeProject ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171b1d]/80 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close image preview"
            onClick={() => setPreviewImage(null)}
          />

          <div className="relative w-full max-w-6xl border border-[#171b1d] bg-[#f4f4f2] p-3">
            <button
              type="button"
              className="focus-ring absolute right-3 top-3 z-10 border border-[#171b1d] bg-[#00f050] px-4 py-3 font-mono text-xs font-bold uppercase"
              onClick={() => setPreviewImage(null)}
            >
              Close
            </button>

            <div className="relative aspect-[3006/1606] w-full bg-white">
              <Image
                src={previewImage}
                alt={`${activeProject.title} full screenshot preview`}
                fill
                sizes="(min-width: 1280px) 1152px, 94vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
