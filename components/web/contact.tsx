"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { useView } from "@/components/view-context";
import portfolioData from "@/data/portfolio.json";

export const ContactSection = () => {
  const { contact } = portfolioData;
  const { openTerminal } = useView();

  return (
    <section className="section-rule px-6 py-24 md:px-12" id="contact">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Let&apos;s build something solid
        </h2>
        <p className="mb-12 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Open to roles and collaborations where strong engineering judgment
          matters — full-stack product work, APIs, and shipping systems that
          hold up in production.
        </p>

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          <a
            className="flex flex-col gap-3 bg-paper p-8 transition-colors hover:bg-line/40"
            href={`mailto:${contact.email}`}
          >
            <Mail className="h-5 w-5 text-ink" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Email
            </span>
            <span className="text-lg font-medium text-ink">
              {contact.email}
            </span>
          </a>

          <div className="flex flex-col gap-4 bg-paper p-8">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Social
            </span>
            <div className="flex flex-col gap-3">
              <Link
                isExternal
                className="inline-flex items-center gap-2 text-ink underline decoration-lime decoration-2 underline-offset-4"
                href={contact.github}
              >
                <Github size={18} />
                GitHub
              </Link>
              <Link
                isExternal
                className="inline-flex items-center gap-2 text-ink underline decoration-lime decoration-2 underline-offset-4"
                href={contact.linkedin}
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-muted">
          Prefer the keyboard? Switch to{" "}
          <button
            className="text-ink underline decoration-lime decoration-2 underline-offset-4"
            type="button"
            onClick={openTerminal}
          >
            terminal mode
          </button>{" "}
          and run <code className="text-ink">help</code>.
        </p>
      </div>
    </section>
  );
};
