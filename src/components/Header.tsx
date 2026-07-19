"use client";

import { useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-fg" />
          <span className="mt-1.5 block h-0.5 w-4 bg-fg" />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-accent"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
