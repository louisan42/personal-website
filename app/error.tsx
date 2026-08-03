"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  // Safely stringify the error to avoid rendering object directly
  const errorMessage = error?.message || "An unknown error occurred";

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p className="text-red-500 mb-4">{errorMessage}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
