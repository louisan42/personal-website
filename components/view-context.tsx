"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ViewMode = "web" | "cli";

interface ViewContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
  isLoaded: boolean;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>("web");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load preference from local storage
    const savedMode = localStorage.getItem("portfolio-view-mode") as ViewMode;

    if (savedMode && (savedMode === "web" || savedMode === "cli")) {
      setViewModeState(savedMode);
    }
    setIsLoaded(true);
  }, []);

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem("portfolio-view-mode", mode);
  };

  const toggleViewMode = () => {
    const newMode = viewMode === "web" ? "cli" : "web";

    setViewMode(newMode);
  };

  return (
    <ViewContext.Provider
      value={{ viewMode, setViewMode, toggleViewMode, isLoaded }}
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
