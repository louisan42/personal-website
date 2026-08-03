"use client";

import React, { useEffect } from "react";

import { ProjectsSection } from "./web/projects";
import { AboutSection } from "./web/about";
import { ContactSection } from "./web/contact";
import { GateNav } from "./web/gate-nav";

import { SignatureMark } from "@/components/brand/signature-mark";
import { useView } from "@/components/view-context";

export const WebLayout = () => {
  const { openLanding } = useView();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-paper text-ink">
      <GateNav active="" />

      <main className="flex-grow">
        <div className="flex h-12 items-center justify-between gap-3 border-b border-line px-6 md:px-12">
          <div className="flex min-w-0 items-center gap-2.5">
            <SignatureMark className="min-w-0 !w-20" size="sm" />
            <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Portfolio
            </p>
          </div>
          <button
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-ink"
            type="button"
            onClick={openLanding}
          >
            ← Landing
          </button>
        </div>

        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="flex w-full items-center justify-between border-t border-line px-6 py-8 md:px-12">
        <SignatureMark size="sm" />
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Louis Amoah-Nuamah
        </span>
      </footer>
    </div>
  );
};
