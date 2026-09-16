"use client";

import React from "react";

import portfolioData from "@/data/portfolio.json";

export const AboutSection = () => {
  const { personal, skills } = portfolioData;

  return (
    <section className="section-rule px-6 py-24 md:px-12" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            About
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Engineer first
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted md:text-lg">
            {personal.bio}
          </p>
          <blockquote className="border-l-2 border-lime pl-5 text-base font-medium leading-relaxed text-ink">
            {personal.philosophy}
          </blockquote>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Stack
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.categories.map((category) => (
              <div key={category.name} className="border border-line p-5">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  {category.name}
                </h4>
                <ul className="space-y-1.5">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="font-mono text-sm text-muted"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
