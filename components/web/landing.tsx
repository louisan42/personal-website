"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { useView } from "@/components/view-context";

export const LandingSection = () => {
  const { setViewMode } = useView();

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] max-w-5xl mx-auto px-4 relative overflow-hidden">
      {/* Background Blobs - Animated */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] -z-10"
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, 50, 0],
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/20 rounded-full blur-[80px] -z-10"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-10 text-center space-y-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-500 text-sm font-medium">
            Open for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            <span className="block">Building Digital</span>
            <span className="block text-primary">Experiences</span>
          </h1>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="h-12" // Fixed height for typwriter
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-default-500 font-mono">
            <TypeAnimation
              repeat={Infinity}
              sequence={[
                "Full-Stack Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Creative Technologist",
                2000,
              ]}
              speed={50}
              wrapper="span"
            />
          </p>
        </motion.div>

        <motion.p
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto text-lg text-default-400 leading-relaxed"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {siteConfig.welcomeMessage}
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            as={Link}
            className="font-semibold px-8 min-w-[160px]"
            color="primary"
            href="#projects"
            size="lg"
            variant="shadow"
          >
            View Work
          </Button>

          <Button
            className="font-mono min-w-[160px] border-default-200 hover:border-default-400"
            size="lg"
            startContent={
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" x2="20" y1="19" y2="19" />
              </svg>
            }
            variant="bordered"
            onPress={() => setViewMode("cli")}
          >
            Terminal Mode
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: 1, y: [0, 10, 0] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-default-300 flex justify-center p-1">
          <div className="w-1 h-3 bg-default-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
