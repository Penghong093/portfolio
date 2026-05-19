import type { Metadata } from "next";
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  Network,
  Palette,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Stack",
  description: `Technical core stack used by ${siteConfig.name}.`
};

const stackGroups = [
  {
    number: "01",
    title: "Frontend",
    items: [
      { label: "React / Next Js", icon: Code2 },
      { label: "Vue / Nuxt Js", icon: Cpu },
      { label: "Tailwind CSS", icon: Palette }
    ]
  },
  {
    number: "02",
    title: "Backend",
    featured: true,
    items: [
      { label: "Laravel / Django", icon: TerminalSquare },
      { label: "PostgreSQL / MySql", icon: Database },
      { label: "REST API", icon: Network },
      { label: "Redis", icon: Cpu }
    ]
  },
  {
    number: "03",
    title: "DevOps",
    items: [
      { label: "Docker", icon: Container },
      { label: "AWS", icon: Cloud }
    ]
  },
  {
    number: "04",
    title: "AI Agent",
    items: [
      { label: "Claude", icon: BrainCircuit },
      { label: "Codex", icon: Bot },
      { label: "Google Stitch", icon: Sparkles },
      { label: "AI Prompt Engineering", icon: Code2 }
    ]
  },
  {
    number: "05",
    title: "Other",
    items: [
      { label: "Progressive Web Apps (PWA)", icon: Sparkles },
      { label: "WordPress Development", icon: Code2 }
    ]
  }
];

export default function StackPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100svh-4rem)] bg-[#f4f4f2] text-[#171b1d]">
        <section className="border-b border-[#171b1d]">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.45fr_0.75fr] lg:items-end lg:px-12">
            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl xl:text-9xl">
              Technical
              <br />
              Core Stack
            </h1>

            <p className="max-w-sm border-l-4 border-green-700 pl-5 text-base leading-7 text-slate-700">
              Core technologies and tools I work with for web development and
              system operations.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-3 lg:px-12">
            {stackGroups.map((group) => (
              <article
                key={group.title}
                className={[
                  "flex flex-col border border-[#171b1d] px-7 py-7",
                  group.featured ? "bg-[#00f050]" : "bg-[#f4f4f2]"
                ].join(" ")}
              >
                <span className="mb-5 w-fit bg-[#171b1d] px-2 py-1 font-mono text-[10px] font-black text-white">
                  {group.number}
                </span>

                <h2 className="text-3xl font-black uppercase leading-none">
                  {group.title}
                </h2>

                <div
                  className={[
                    "mt-5 h-px w-full",
                    group.featured ? "bg-green-800" : "bg-slate-400"
                  ].join(" ")}
                />

                <ul className="mt-5 font-mono text-xs font-semibold">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={item.label}
                        className={[
                          "flex items-center justify-between border-b py-3",
                          group.featured
                            ? "border-green-800"
                            : "border-slate-300"
                        ].join(" ")}
                      >
                        <span>{item.label}</span>
                        <Icon className="h-4 w-4 text-green-700" aria-hidden="true" />
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
