"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@heroui/theme";

import { SignatureMark } from "@/components/brand/signature-mark";
import { executeCommand, CommandOutput } from "@/lib/cli-commands";
import { useView } from "@/components/view-context";

interface HistoryItem {
  cmd: string;
  output: CommandOutput;
}

export const Terminal = () => {
  const { openLanding, openUi } = useView();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const cmd = input.trim();

    if (cmd === "clear") {
      setHistory([]);
      setInput("");

      return;
    }

    if (cmd === "gui" || cmd === "ui") {
      if (cmd === "ui") {
        openUi();
      } else {
        openLanding();
      }

      return;
    }

    const output = executeCommand(cmd);

    setHistory((prev) => [...prev, { cmd, output }]);
    setInput("");
  };

  return (
    <div
      className="min-h-screen bg-terminal-bg font-mono text-terminal-text selection:bg-lime selection:text-ink"
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.focus()}
      onKeyDown={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-terminal-line px-4 py-4 sm:px-8">
        <SignatureMark size="sm" />
        <button
          className="text-xs uppercase tracking-[0.2em] text-terminal-dim underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-ink"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            openLanding();
          }}
        >
          gui →
        </button>
      </div>

      <div className="mx-auto max-w-4xl space-y-4 px-4 py-8 sm:px-8">
        <div className="mb-8 space-y-2 text-sm text-terminal-dim">
          <p className="text-terminal-text">Portfolio Terminal · v2.0.0</p>
          <p>Full-Stack / Software Engineer — Louis Amoah-Nuamah</p>
          <p>
            Type <span className="text-ink">help</span> for commands. Type{" "}
            <span className="text-ink">gui</span> to leave.
          </p>
        </div>

        <div className="space-y-4">
          {history.map((item, i) => (
            <div key={`${item.cmd}-${i}`} className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lime">visitor@portfolio:~$</span>
                <span>{item.cmd}</span>
              </div>
              <div
                className={cn(
                  "whitespace-pre-wrap border-l-2 border-terminal-line pl-4 leading-relaxed text-terminal-dim",
                  item.output.type === "error" && "text-terminal-alert",
                  item.output.type === "success" && "text-ink",
                )}
              >
                {item.output.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className="text-lime">visitor@portfolio:~$</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              autoComplete="off"
              className="w-full border-none bg-transparent p-0 text-ink outline-none focus:ring-0"
              spellCheck="false"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
            />
            {!input ? (
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 h-4 w-2 -translate-y-1/2 animate-cursor-blink bg-lime"
              />
            ) : null}
          </div>
        </div>
        <div ref={scrollRef} />
      </div>
    </div>
  );
};
