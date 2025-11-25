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
            {"<TODO: copy>"} Provide a concise primer about what the Shroud is,
            when it appears historically, and why it remains contested. Every
            section below balances supporting and skeptical interpretations.
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
              {"<TODO: copy>"} Provide a neutral overview referencing its
              dimensions, linen weave, imagery, and documented chain-of-custody
              stepping stones.
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
              {"<TODO: copy>"} Outline what visitors will experience.
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
