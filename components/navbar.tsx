import Link from "next/link";
import { navItems, siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-200/70 dark:bg-white/85">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring rounded text-base font-bold text-slate-950 dark:text-slate-950"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-slate-600 hover:text-teal-700 dark:text-slate-600 dark:hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
