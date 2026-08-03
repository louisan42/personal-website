"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { useView } from "@/components/view-context";

export default function NotFound() {
  const { viewMode } = useView();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      {viewMode === "cli" ? (
        <div className="font-mono text-left max-w-lg space-y-4">
          <p className="text-terminal-alert">Error 404: Endpoint not found.</p>
          <p className="text-terminal-text">
            The requested resource could not be located on this server.
          </p>
          <div className="border-l-2 border-terminal-dim pl-4 py-2 my-4">
            <p className="opacity-70">Traceback (most recent call last):</p>
            <p className="pl-4">
              File &quot;navigation.sys&quot;, line 1, in &lt;module&gt;
            </p>
            <p className="pl-8 text-terminal-warning">
              PageNotFoundException: /void
            </p>
          </div>
          <p>
            Suggested action:{" "}
            <span className="bg-terminal-dim/20 px-1">cd ..</span>
          </p>
          <Button
            as={Link}
            className="text-terminal-bg bg-terminal-text font-bold mt-4"
            href="/"
            variant="flat"
          >
            Return Home
          </Button>
        </div>
      ) : (
        <div className="space-y-6 max-w-md">
          <h1 className="text-9xl font-bold text-default-200">404</h1>
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-default-500">
            The page you are looking for doesn&apos;t exist or has been moved.
            Don&apos;t worry, even the best explorers get lost sometimes.
          </p>
          <Button
            as={Link}
            className="font-medium"
            color="primary"
            href="/"
            size="lg"
            variant="shadow"
          >
            Go back home
          </Button>
        </div>
      )}
    </div>
  );
}
