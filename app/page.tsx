"use client";

import React from "react";

import { useView } from "@/components/view-context";
import { WebLayout } from "@/components/web-layout";
import { Terminal } from "@/components/cli/terminal";

export default function Home() {
  const { viewMode, isLoaded } = useView();

  // Prevent hydration mismatch or flash of wrong content
  if (!isLoaded) {
    return <div className="min-h-screen bg-background" />;
  }

  if (viewMode === "cli") {
    return <Terminal />;
  }

  return <WebLayout />;
}
