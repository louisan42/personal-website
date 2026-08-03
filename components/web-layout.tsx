"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { LandingSection } from "./web/landing";
import { ProjectsSection } from "./web/projects";
import { AboutSection } from "./web/about";
import { ContactSection } from "./web/contact";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import ThemeSwitch from "@/components/theme-switch";

export const WebLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar
        items={siteConfig.navItems}
        logo={<span className="font-bold text-xl tracking-tighter">LA.</span>}
        rightContent={
          <div className="flex items-center gap-4">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.github}
              variant="flat"
            >
              GitHub
            </Button>
            <ThemeSwitch />
          </div>
        }
      />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <LandingSection />
        {/* Placeholder for other sections to be implemented */}
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="w-full flex items-center justify-center py-8 border-t border-default-100 mt-auto">
        <span className="text-default-400 text-sm">
          © 2024 Louis Amoah-Nuamah
        </span>
      </footer>
    </div>
  );
};
