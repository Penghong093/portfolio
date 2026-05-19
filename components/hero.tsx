import { siteConfig } from "@/data/portfolio";
import { Navbar } from "./navbar";
import { TypewriterTitle } from "./typewriter-title";

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col overflow-hidden bg-[#f4f4f2] text-[#171b1d]">
      <Navbar />

      <div className="mx-auto grid w-full max-w-[1440px] flex-1 content-center items-center justify-items-center gap-12 px-5 py-16 text-center sm:px-8 sm:py-24 lg:grid-cols-[1.65fr_1fr] lg:px-12 lg:py-28 lg:text-left">
        <h1 className="w-full max-w-4xl text-left text-5xl font-black uppercase leading-[0.92] sm:text-[6.5rem] lg:text-[6.75rem] xl:text-[7.5rem]">
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
    </section>
  );
}
