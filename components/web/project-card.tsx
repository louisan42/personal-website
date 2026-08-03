"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
    category: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden bg-paper"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-paper">
        <Image
          fill
          alt={`${project.title} preview`}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={project.image}
        />
      </div>
      <div className="flex flex-grow flex-col p-6 md:p-8">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {project.category}
        </p>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-ink md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-6 flex-grow text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="border border-line px-2 py-1 font-mono text-[11px] text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5 border-t border-line pt-4">
          <Link
            isExternal
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            href={project.github}
          >
            Source
          </Link>
          <Link
            isExternal
            className="font-mono text-xs uppercase tracking-[0.16em] text-ink underline decoration-lime decoration-2 underline-offset-4"
            href={project.link}
          >
            Visit
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
