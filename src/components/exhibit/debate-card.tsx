"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const sides = {
  supporters: { label: "Supporters say", accent: "border-accent-emerald text-accent-emerald" },
  skeptics: { label: "Skeptics say", accent: "border-accent-rose text-accent-rose" },
} as const;

type Side = keyof typeof sides;

/** The case for and against one point; the visitor flips between the two readings. */
export function DebateCard({
  question,
  supporters,
  skeptics,
}: {
  question: string;
  supporters: React.ReactNode;
  skeptics: React.ReactNode;
}) {
  const [side, setSide] = useState<Side>("supporters");
  return (
    <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Two readings</p>
      <p className="mt-2 text-lg font-semibold text-sand-50">{question}</p>
      <div role="tablist" className="mt-4 flex gap-2">
        {(Object.keys(sides) as Side[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={side === key}
            onClick={() => setSide(key)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition",
              side === key ? sides[key].accent : "border-sand-200/20 text-sand-200/60 hover:text-sand-50",
            )}
          >
            {sides[key].label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        key={side}
        className={cn(
          "mt-4 animate-[fade-in_.25s_ease-out] space-y-3 border-l-2 pl-4 text-sand-200/85",
          side === "supporters" ? "border-accent-emerald/60" : "border-accent-rose/60",
        )}
      >
        {side === "supporters" ? supporters : skeptics}
      </div>
    </div>
  );
}
