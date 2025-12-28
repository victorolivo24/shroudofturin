"use client";

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export function LandingHero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(87,196,177,0.12),_transparent_60%)]" />
      <SectionShell
        id="home"
        className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]"
      >
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
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#shroud-explorer">
                Enter Shroud Explorer <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#sources-library">Browse Sources</a>
            </Button>
          </div>
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
        <div
          className="relative flex h-[420px] flex-col justify-between rounded-[40px] border border-sand-200/20 bg-gradient-to-br from-sand-900/60 to-black/80 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.65)] transition-transform"
          style={{
            transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
            setTilt({ x, y });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-sand-200/50">
              Museum Preview
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-sand-50">
              Subtle 3D parallax hero
            </h3>
            <p className="text-sm text-sand-200/80">
              When processed using a NASA VP-8 Image Analyzer in 1976, the
              Shroud image produced natural three-dimensional topography,
              something ordinary photographs or paintings do not generate [19].
            </p>
          </div>
          <div className="rounded-2xl border border-sand-200/10 bg-black/60 p-4 text-sm text-sand-200/80">
            {/* TODO: embed intro video */}
            <p className="flex items-center gap-2 text-sand-50">
              <Play className="h-4 w-4" /> Intro Documentary Placeholder
            </p>
            <p>Insert short welcome clip or 3D fly-through here.</p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
