"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Mail, Github, Linkedin, Twitter, Globe } from "lucide-react";

import portfolioData from "@/data/portfolio.json";

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center" id="contact">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Let&apos;s Connect
      </h2>
      <p className="text-default-500 text-lg mb-12 max-w-2xl mx-auto">
        I&apos;m always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:border-primary transition-colors border border-transparent">
          <CardBody className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-sm text-default-500">Email Me</p>
              <Link
                className="text-xl font-bold text-foreground hover:text-primary"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card className="hover:border-primary transition-colors border border-transparent">
          <CardBody className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="p-4 rounded-full bg-secondary/10 text-secondary">
              <Globe size={32} />
            </div>
            <div>
              <p className="text-sm text-default-500">Socials</p>
              <div className="flex gap-4 mt-2">
                <Button
                  isExternal
                  isIconOnly
                  aria-label="Github"
                  as={Link}
                  href={contact.github}
                  variant="flat"
                >
                  <Github size={20} />
                </Button>
                <Button
                  isExternal
                  isIconOnly
                  aria-label="LinkedIn"
                  as={Link}
                  href={contact.linkedin}
                  variant="flat"
                >
                  <Linkedin size={20} />
                </Button>
                {contact.twitter ? (
                  <Button
                    isExternal
                    isIconOnly
                    aria-label="Twitter"
                    as={Link}
                    href={contact.twitter}
                    variant="flat"
                  >
                    <Twitter size={20} />
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <p className="text-sm text-default-400">
        By the way, have you tried typing{" "}
        <code className="bg-default-100 px-1 py-0.5 rounded text-primary border border-default-200">
          gui
        </code>{" "}
        or{" "}
        <code className="bg-default-100 px-1 py-0.5 rounded text-primary border border-default-200">
          help
        </code>{" "}
        in the terminal view yet?
      </p>
    </section>
  );
};
