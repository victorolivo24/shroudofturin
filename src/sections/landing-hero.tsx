"use client";
import { SectionShell } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";

export function LandingHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(87,196,177,0.12),_transparent_60%)]" />
      <SectionShell id="home" className="relative">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight text-sand-50 sm:text-6xl">
            The Shroud of Turin
          </h1>
          <p className="text-lg text-sand-200/80">
            The Shroud of Turin is a linen cloth bearing the faint front-and-back image of a crucified man.
            Preserved in Turin, Italy, it has been examined using photography, medicine, chemistry, textile analysis, and historical study.
            Interpretations vary, and significant questions remain.
          </p>
          <div className="rounded-3xl border border-sand-200/15 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-sand-200/60">
              What Is the Shroud of Turin?
            </p>
            <p className="mt-4 text-sand-50">
              The Shroud of Turin is a linen cloth measuring approximately 4.4 × 1.1 meters, marked with a subtle image of a man who appears to have suffered crucifixion-like injuries.
              Its earliest confirmed historical appearance dates to the mid-14th century in France. Today, it is kept in the Cathedral of Saint John the Baptist in Turin.
            </p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
