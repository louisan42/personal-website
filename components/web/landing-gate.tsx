"use client";

import Image from "next/image";
import { ArrowRight, Command } from "lucide-react";

import { GateNav } from "@/components/web/gate-nav";
import { SignatureMark } from "@/components/brand/signature-mark";
import { useView } from "@/components/view-context";

export const LandingGate = () => {
  const { openUi, openTerminal } = useView();

  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-paper text-ink">
      <GateNav />

      <section className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-10 md:px-14 lg:px-16 xl:px-20">
          <SignatureMark className="-ml-2 mb-4 md:mb-6" size="hero" />

          <h1 className="max-w-xl font-mono text-2xl font-bold leading-snug tracking-tight text-ink md:text-[1.75rem]">
            Full-stack. Software. Engineering.
          </h1>

          <p className="mt-5 max-w-md font-mono text-sm leading-relaxed text-muted md:text-[15px]">
            I build software that is intentional, scalable, and
            production-ready.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 bg-lime px-5 py-3 font-mono text-sm font-semibold text-lime-foreground transition-opacity hover:opacity-90"
              type="button"
              onClick={openUi}
            >
              Open UI
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </button>

            <button
              className="inline-flex items-center gap-2 border border-ink bg-transparent px-5 py-3 font-mono text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              type="button"
              onClick={openTerminal}
            >
              <Command className="h-4 w-4" strokeWidth={2} />
              Open terminal
            </button>
          </div>
        </div>

        <div className="relative min-h-[38vh] border-t border-line lg:min-h-0 lg:border-l lg:border-t-0">
          <Image
            fill
            priority
            alt="Engineering workspace desk setup"
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/hero-workspace.jpg"
          />
        </div>
      </section>
    </div>
  );
};
