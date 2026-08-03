"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className="py-4 h-full bg-content1/50 backdrop-blur-md border border-white/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold text-primary/80 mb-1">
            {project.category}
          </p>
          <h4 className="font-bold text-large text-foreground">
            {project.title}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div className="w-full relative aspect-video rounded-xl overflow-hidden mb-4 group">
            {/* Using a placeholder if image fails or for dev, but sourcing from project.image */}
            <Image
              isZoomed
              alt={project.title}
              className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              src={project.image}
              width={400} // Approximate width for grid
            />
          </div>
          <p className="text-default-500 text-sm line-clamp-3 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Chip
                key={tag}
                className="text-xs"
                color="secondary"
                size="sm"
                variant="flat"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center pt-2">
          <Button
            isExternal
            as={Link}
            className="text-default-400 hover:text-foreground"
            color="default"
            href={project.github}
            size="sm"
            variant="light"
          >
            Source
          </Button>
          <Button
            isExternal
            as={Link}
            className="bg-foreground text-background font-medium hover:opacity-90"
            href={project.link}
            size="sm"
          >
            Visit
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
