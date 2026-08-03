import clsx from "clsx";

type SignatureMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
};

/** Width-driven sizing so the full mark (including L flourishes) is never height-clipped. */
const sizeClasses: Record<NonNullable<SignatureMarkProps["size"]>, string> = {
  sm: "w-28",
  md: "w-44",
  lg: "w-56 md:w-64",
  hero: "w-[min(100%,34rem)]",
};

export function SignatureMark({ className, size = "md" }: SignatureMarkProps) {
  return (
    <span className={clsx("inline-block max-w-full", sizeClasses[size], className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- brand mark needs full unclipped display */}
      <img
        alt="Louis AN"
        className="block h-auto w-full dark:hidden"
        height={1206}
        src="/images/signature-louis-an.png?v=4"
        width={1640}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden
        className="hidden h-auto w-full dark:block"
        height={1206}
        src="/images/signature-louis-an-dark.png?v=4"
        width={1640}
      />
    </span>
  );
}
