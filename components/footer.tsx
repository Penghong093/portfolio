import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="section-shell text-center text-sm text-slate-500 dark:text-slate-400">
        <p>(c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
