import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "neutral" | "outline" | "emerald" | "amber";
  }
>(({ className, variant = "neutral", ...props }, ref) => {
  const base = {
    neutral: "bg-sand-800 text-sand-100",
    outline: "border border-sand-400/40 text-sand-100",
    emerald: "bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40",
    amber: "bg-accent-amber/20 text-accent-amber border border-accent-amber/40",
  }[variant];

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        base,
        className,
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
