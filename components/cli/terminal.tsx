"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@heroui/theme";

import { executeCommand, CommandOutput } from "@/lib/cli-commands";
import { useView } from "@/components/view-context";

interface HistoryItem {
  cmd: string;
  output: CommandOutput;
}

export const Terminal = () => {
  const { setViewMode } = useView();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input on click anywhere in terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim();

      if (cmd === "clear") {
        setHistory([]);
        setInput("");

        return;
      }

      if (cmd === "gui") {
        setViewMode("web");

        return;
      }

      const output = executeCommand(cmd);

      setHistory((prev) => [...prev, { cmd, output }]);
      setInput("");
    }
  };

  return (
    <div
      className="min-h-screen bg-terminal-bg text-terminal-text font-mono p-4 sm:p-8 overflow-y-auto selection:bg-terminal-text selection:text-terminal-bg"
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.focus()}
      onKeyDown={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Header */}
        <div className="mb-8 space-y-2 text-sm sm:text-base opacity-80">
          <p>Portfolio Terminal [Version 2.0.0]</p>
          <p>(c) 2024 Louis Amoah-Nuamah. All rights reserved.</p>
          <p className="text-terminal-dim">
            Type &apos;help&apos; to see available commands.
          </p>
        </div>

        {/* Output History */}
        <div className="space-y-4">
          {history.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-terminal-warning">
                  visitor@portfolio:~$
                </span>
                <span className="text-terminal-text">{item.cmd}</span>
              </div>
              <div
                className={cn(
                  "whitespace-pre-wrap pl-4 border-l-2 border-terminal-dim/20 leading-relaxed",
                  item.output.type === "error" && "text-terminal-alert",
                  item.output.type === "success" && "text-terminal-text",
                )}
              >
                {item.output.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-terminal-warning">visitor@portfolio:~$</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              autoComplete="off"
              className="w-full bg-transparent border-none outline-none text-terminal-text focus:ring-0 p-0"
              spellCheck="false"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
            />
            {/* Blinking Cursor Block if input is focused logic could go here, but default caret + styling is usually enough */}
          </div>
        </div>
        <div ref={scrollRef} />
      </div>
    </div>
  );
};
