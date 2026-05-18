import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[#171b1d] bg-[#f4f4f2] py-8 text-[#171b1d]">
      <div className="mx-auto w-full max-w-[1440px] px-5 text-center font-mono text-xs font-bold uppercase text-slate-700 sm:px-8 lg:px-12">
        <p>(c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
