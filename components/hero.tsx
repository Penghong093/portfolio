import Link from "next/link";
import { siteConfig } from "@/data/portfolio";
import { TypewriterTitle } from "./typewriter-title";

const stackItems = [
  "Laravel",
  "Django",
  "Postgres",
  "VueJs",
  "Tailwind",
  "REST API",
  "Git"
];

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col overflow-hidden bg-[#f4f4f2] text-[#171b1d]">
      <header className="border-b border-[#171b1d]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="focus-ring text-3xl font-black uppercase leading-none sm:text-5xl lg:text-6xl"
          >
            NAM PENGHONG
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase lg:flex">
            <Link className="focus-ring border-b-2 border-green-700 pb-2 text-green-700" href="/projects">
              Work
            </Link>
            <a className="focus-ring pb-2 hover:text-green-700" href="#stack">
              Stack
            </a>
            <a className="focus-ring pb-2 hover:text-green-700" href={siteConfig.socials.github}>
              About
            </a>
            <a className="focus-ring pb-2 hover:text-green-700" href={`mailto:${siteConfig.email}`}>
              Contact
            </a>
          </nav>

          <Link
            href="/projects"
            className="focus-ring border border-[#171b1d] bg-[#00f050] px-5 py-3 font-mono text-xs font-semibold uppercase lg:hidden"
          >
            Work
          </Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1440px] flex-1 content-start gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.65fr_1fr] lg:px-12 lg:py-28">
        <h1 className="max-w-4xl text-[15vw] font-black uppercase leading-[0.92] sm:text-[6.5rem] lg:text-[6.75rem] xl:text-[7.5rem]">
          Full
          <br />
          Stack
          <br />
          <TypewriterTitle />
        </h1>

        <div className="pt-2 font-mono text-xs font-bold uppercase leading-8 text-slate-700 lg:pt-4">
          <p>
            Currently {siteConfig.role}
            <br />
            working at DRSB logistic
          </p>
          <p className="mt-5">
            Based in Phnom Penh, KH
          </p>
          <p className="mt-5 max-w-sm leading-6">
            Focused on backend engineering and logistics operations at DRSB
            Logistic, leading operational system development between China and
            Cambodia.
          </p>
        </div>
      </div>

      <div id="stack" className="mt-auto border-y border-[#171b1d] bg-[#f4f4f2]">
        <div className="flex min-w-max items-center gap-7 overflow-hidden py-5 text-4xl font-black uppercase leading-none sm:text-5xl">
          {[...stackItems, ...stackItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-7">
              <span>{item}</span>
              <span className="h-3 w-3 shrink-0 bg-green-700" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
