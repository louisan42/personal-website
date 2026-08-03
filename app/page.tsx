"use client";

import React from "react";

import { useView } from "@/components/view-context";
import { WebLayout } from "@/components/web-layout";
import { Terminal } from "@/components/cli/terminal";
import { LandingGate } from "@/components/web/landing-gate";

export default function Home() {
  const { viewMode, isLoaded } = useView();

  if (!isLoaded) {
    return <div className="min-h-screen bg-paper" />;
  }

  if (viewMode === "cli") {
    return <Terminal />;
  }

  if (viewMode === "ui") {
    return <WebLayout />;
  }

  return <LandingGate />;
}
