"use client";

import { Link } from "@heroui/link";
import { useRouter } from "next/navigation";

import { SignatureMark } from "@/components/brand/signature-mark";
import { useView } from "@/components/view-context";

export default function NotFound() {
  const router = useRouter();
  const { viewMode, openLanding } = useView();

  const goHome = () => {
    openLanding();
    router.push("/");
  };

  if (viewMode === "cli") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-terminal-bg p-6 font-mono text-terminal-text">
        <div className="max-w-lg space-y-4 text-left">
          <p className="text-terminal-alert">Error 404: Endpoint not found.</p>
          <p className="text-terminal-dim">
            The requested resource could not be located on this server.
          </p>
          <button
            className="inline-flex bg-ink px-4 py-2 text-sm text-paper"
            type="button"
            onClick={goHome}
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <SignatureMark className="mb-8" size="lg" />
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-muted">
        404
      </p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-muted">
        That route doesn&apos;t exist. Head back and keep exploring the work.
      </p>
      <Link className="btn-ink" href="/" onClick={goHome}>
        Back home
      </Link>
    </div>
  );
}
