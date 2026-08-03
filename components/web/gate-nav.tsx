"use client";

import clsx from "clsx";

import { useView } from "@/components/view-context";

const links = [
  { label: "Home", action: "home" as const },
  { label: "About", action: "ui" as const, href: "#about" },
  { label: "Projects", action: "ui" as const, href: "#projects" },
  { label: "Contact", action: "ui" as const, href: "#contact" },
];

export function GateNav({ active = "Home" }: { active?: string }) {
  const { viewMode, openUi, openLanding, openTerminal } = useView();

  const handleNav = (link: (typeof links)[number]) => {
    if (link.action === "home") {
      openLanding();

      return;
    }

    openUi();
    if (link.href) {
      window.setTimeout(() => {
        document
          .querySelector(link.href)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  };

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-black/10 bg-[#F5F5F5] px-6 md:px-10">
      <nav className="flex items-center gap-6 md:gap-8">
        {links.map((link) => {
          const isActive = active === link.label;

          return (
            <button
              key={link.label}
              className={clsx(
                "font-mono text-sm transition-colors",
                isActive
                  ? "font-semibold text-lime"
                  : "text-ink hover:text-lime",
              )}
              type="button"
              onClick={() => handleNav(link)}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-ink">cli</span>
        <button
          aria-checked={viewMode === "cli"}
          aria-label="Toggle terminal mode"
          className="relative h-7 w-12 rounded-full bg-lime transition-colors"
          role="switch"
          type="button"
          onClick={() => {
            if (viewMode === "cli") {
              openLanding();
            } else {
              openTerminal();
            }
          }}
        >
          <span className="absolute top-0.5 left-[1.35rem] h-6 w-6 rounded-full bg-ink shadow-sm" />
        </button>
      </div>
    </header>
  );
}
