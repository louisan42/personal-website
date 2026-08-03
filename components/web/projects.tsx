"use client";

import React from "react";

import { ProjectCard } from "./project-card";

import portfolioData from "@/data/portfolio.json";

export const ProjectsSection = () => {
  return (
    <section className="section-rule px-6 py-24 md:px-12" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Systems and applications built to solve real problems — from APIs
            and data layers to production frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
