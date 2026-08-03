"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ViewMode = "landing" | "ui" | "cli";

interface ViewContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  openUi: () => void;
  openTerminal: () => void;
  openLanding: () => void;
  isLoaded: boolean;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-view-mode";

function isViewMode(value: string | null): value is ViewMode {
  return value === "landing" || value === "ui" || value === "cli";
}

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>("landing");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY);

    if (isViewMode(savedMode)) {
      setViewModeState(savedMode);
    } else if (savedMode === "web") {
      // migrate old "web" preference to full UI portfolio
      setViewModeState("ui");
    }
    setIsLoaded(true);
  }, []);

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  };

  return (
    <ViewContext.Provider
      value={{
        viewMode,
        setViewMode,
        openUi: () => setViewMode("ui"),
        openTerminal: () => setViewMode("cli"),
        openLanding: () => setViewMode("landing"),
        isLoaded,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);

  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }

  return context;
}
