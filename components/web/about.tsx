"use client";

import React from "react";
import { Chip } from "@heroui/chip";
import { Card, CardBody } from "@heroui/card";

import portfolioData from "@/data/portfolio.json";

export const AboutSection = () => {
  const { personal, skills, experience, education } = portfolioData;

  return (
    <section
      className="py-24 px-4 max-w-7xl mx-auto bg-content1/20 rounded-3xl my-10"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Personal Bio */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
          <p className="text-large text-default-500 leading-loose">
            {personal.bio}
          </p>
          <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-xl">
            <p className="italic text-default-600 font-medium">
              &quot;{personal.philosophy}&quot;
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 border-l border-default-200"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className="text-default-500">
                    {edu.institution}, {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="space-y-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.categories.map((category) => (
                <Card
                  key={category.name}
                  className="bg-background/60 backdrop-blur-sm border border-default-100"
                  shadow="sm"
                >
                  <CardBody>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h4 className="font-bold">{category.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <Chip key={skill.name} size="sm" variant="flat">
                          {skill.name}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <span className="text-small text-default-400 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-default-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-default-500 line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
