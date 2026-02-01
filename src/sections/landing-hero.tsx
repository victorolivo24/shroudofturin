"use client";
import { SectionShell } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";

export function LandingHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(87,196,177,0.12),_transparent_60%)]" />
      <SectionShell id="home" className="relative">
        <div className="space-y-6">
          <Badge variant="emerald">Impartial Briefing</Badge>
          <h1 className="text-5xl font-semibold tracking-tight text-sand-50 sm:text-6xl">
            The Shroud of Turin, re-examined through science, history, and debate.
          </h1>
          <p className="text-lg text-sand-200/80">
            Researchers examine the Shroud using chemistry, medical forensics,
            textile analysis, blood chemistry, ultraviolet photography,
            radiocarbon dating, and image processing technologies [2][3][4].
          </p>
          <div className="rounded-3xl border border-sand-200/15 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-sand-200/60">
              What is the Shroud?
            </p>
            <p className="mt-4 text-sand-50">
              The Shroud of Turin is a linen cloth measuring about 4.4 × 1.1
              meters that bears a faint front-and-back image of a crucified man.
              Its earliest confirmed historical appearance is in the mid-14th
              century in Lirey, France [1]. Today it is kept in the Cathedral of
              St. John the Baptist in Turin, Italy.
            </p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
