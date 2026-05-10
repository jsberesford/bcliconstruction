import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  opacity?: number;
};

export function BlueprintGrid({ className, opacity = 0.18 }: Props) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="bp-minor"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="#0F0F0F"
            strokeOpacity="0.25"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="bp-major"
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
        >
          <rect width="128" height="128" fill="url(#bp-minor)" />
          <path
            d="M 128 0 L 0 0 0 128"
            fill="none"
            stroke="#0F0F0F"
            strokeOpacity="0.5"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp-major)" />
    </svg>
  );
}
