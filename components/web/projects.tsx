"use client";

import React from "react";

import { ProjectCard } from "./project-card";

import portfolioData from "@/data/portfolio.json";

export const ProjectsSection = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
        <p className="text-default-500 max-w-2xl mx-auto text-lg">
          A collection of projects attempting to solve real-world problems with
          modern technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};
