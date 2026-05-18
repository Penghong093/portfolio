"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";

const drawerLinks = [
  ...navItems.map((item) => ({ ...item, external: false })),
  { label: "About", href: siteConfig.socials.github, external: true },
  { label: "Contact", href: `mailto:${siteConfig.email}`, external: false }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-[#171b1d] bg-[#f4f4f2] text-[#171b1d]">
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:flex lg:justify-between lg:gap-5 lg:px-12">
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-[#171b1d] bg-[#f4f4f2] lg:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <Link
          href="/"
          className="focus-ring justify-self-center text-center text-[clamp(1.35rem,7vw,2.9rem)] font-black uppercase leading-none lg:justify-self-auto lg:text-left lg:text-6xl"
          onClick={() => setIsOpen(false)}
        >
          NAM PENGHONG
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring pb-2 hover:text-green-700"
            >
              {item.label}
            </Link>
          ))}
          <a className="focus-ring pb-2 hover:text-green-700" href={siteConfig.socials.github}>
            About
          </a>
          <a className="focus-ring pb-2 hover:text-green-700" href={`mailto:${siteConfig.email}`}>
            Contact
          </a>
        </nav>

        <Link
          href="/projects"
          className="focus-ring justify-self-end border border-[#171b1d] bg-[#00f050] px-5 py-3 font-mono text-xs font-semibold uppercase lg:hidden"
        >
          Work
        </Link>
      </div>

      <div
        className={[
          "fixed inset-0 z-50 lg:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-[#171b1d]/35 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          ].join(" ")}
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
        />

        <aside
          className={[
            "relative flex h-full w-[min(21rem,86vw)] flex-col border-r border-[#171b1d] bg-[#f4f4f2] px-5 py-5 transition-transform duration-300 ease-out sm:px-8",
            isOpen ? "translate-x-0" : "-translate-x-full"
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4 border-b border-[#171b1d] pb-5">
            <span className="text-2xl font-black uppercase leading-none">
              Menu
            </span>
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-[#171b1d] bg-[#00f050]"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-5 text-4xl font-black uppercase leading-none">
            {drawerLinks.map((item) => {
              const className = "focus-ring hover:text-green-700";

              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </header>
  );
}
