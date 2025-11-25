import * as React from "react";
import { cn } from "@/lib/utils";

export type ProgressProps = {
  value: number;
  max?: number;
  accent?: "amber" | "emerald" | "rose";
} & React.HTMLAttributes<HTMLDivElement>;

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, accent = "amber", className, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const accentClass =
      accent === "emerald"
        ? "from-accent-emerald/90 to-accent-emerald/40"
        : accent === "rose"
          ? "from-accent-rose to-accent-rose/60"
          : "from-accent-amber to-accent-amber/40";

    return (
      <div
        ref={ref}
        className={cn(
          "h-3 w-full overflow-hidden rounded-full bg-sand-800/80",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-300",
            accentClass,
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  },
);
Progress.displayName = "Progress";
