"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PLACEHOLDER_SUDARIUM, PLACEHOLDER_SHROUD } from "@/data/placeholders";
import { sudariumComparisons } from "@/data/labs";
import { Progress } from "@/components/ui/progress";

export function SudariumComparison() {
  const [overlay, setOverlay] = useState(50);

  return (
    <SectionShell id="sudarium">
      <SectionHeader
        eyebrow="Sudarium / Facecloth"
        title="Compare bloodstains, provenance, and alignment debates."
        description="Use the slider to overlay the Sudarium of Oviedo with the face region of the Shroud."
        badgeVariant="emerald"
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="amber">Overlay Viewer</Badge>
            <CardDescription>
              Slide to align bloodstain features. Placeholder images will be replaced with
              high-res assets later.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-64 overflow-hidden rounded-3xl border border-sand-200/15">
              <Image
                src={PLACEHOLDER_SHROUD}
                alt="Shroud face placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 transition-opacity"
                style={{ opacity: overlay / 100 }}
              >
                <Image
                  src={PLACEHOLDER_SUDARIUM}
                  alt="Sudarium overlay placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mix-blend-screen object-cover"
                />
              </div>
            </div>
            <label className="flex flex-col text-xs uppercase tracking-[0.4em] text-sand-200/60">
              Alignment Slider
              <input
                type="range"
                min={0}
                max={100}
                value={overlay}
                onChange={(event) => setOverlay(Number(event.target.value))}
                className="mt-2 h-1.5 cursor-pointer appearance-none rounded-full bg-sand-900"
              />
            </label>
            <div className="rounded-3xl border border-sand-200/10 bg-sand-900/40 p-4 text-sm text-sand-200/80">
              {"<TODO: copy>"} Provide balanced commentary on provenance timeline
              and matching/mismatching features.
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="emerald">Comparison Metrics</Badge>
            <CardTitle>Strength of match</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sudariumComparisons.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-sand-50">
                    {item.title}
                  </p>
                  <span className="text-sm text-sand-200/70">{item.match}%</span>
                </div>
                <Progress value={item.match} accent="emerald" className="mt-3" />
                <div className="mt-3 grid gap-3 text-sm text-sand-200/80 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Pro Interpretation
                    </p>
                    <p>{item.pro}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Skeptical Interpretation
                    </p>
                    <p>{item.skeptical}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
