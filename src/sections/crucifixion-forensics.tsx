"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
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
import { crucifixionTimeline, executionComparisons } from "@/data/timeline";
import { Progress } from "@/components/ui/progress";

export function CrucifixionForensics() {
  const [eventId, setEventId] = useState(crucifixionTimeline[0].id);
  const [nailRatio, setNailRatio] = useState(60);
  const activeEvent = crucifixionTimeline.find((item) => item.id === eventId)!;

  return (
    <SectionShell id="crucifixion-forensics">
      <SectionHeader
        eyebrow="Crucifixion Forensics"
        title="Roman methods, wounds, and anatomical debates."
        description="Interactively compare wrist-vs-hand discussions, scourging data, and the archaeological record."
      />
      <img
        src="/images/roman-flagrum.jpg"
        alt="Roman flagrum reference"
        loading="lazy"
        className="mb-8 w-full rounded-3xl border border-sand-200/15 object-cover"
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="emerald">Timeline</Badge>
            <CardTitle>{activeEvent.title}</CardTitle>
            <CardDescription>{activeEvent.era}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-sand-200/80">{activeEvent.description}</p>
            <div className="flex flex-wrap gap-3">
              {crucifixionTimeline.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setEventId(item.id)}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    item.id === eventId
                      ? "border-accent-amber text-sand-50"
                      : "border-sand-200/20 text-sand-200/70"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-sand-200/50">
                Compare
              </p>
              <p className="text-sand-50">{activeEvent.comparison}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="amber">Interactive Debate</Badge>
            <CardTitle>Wrist vs Hand Nail Placement</CardTitle>
            <CardDescription>
              Slide to see how much weight you assign to each scenario.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <input
              type="range"
              min={0}
              max={100}
              value={nailRatio}
              onChange={(event) => setNailRatio(Number(event.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sand-900"
            />
            <div className="flex justify-between text-xs uppercase tracking-[0.4em] text-sand-200/60">
              <span>Hands</span>
              <span>Wrists</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
                  <p className="text-sm font-semibold text-sand-50">
                    {100 - nailRatio}% Hand Depictions
                  </p>
                  <p className="text-sm text-sand-200/80">
                    Some skeptics argue a medieval artist could have reproduced
                    these details, but the wrist-wound placement contradicts
                    most medieval iconography, which typically shows nails
                    through the palms [9][12]. highlight art history references.
                  </p>
                </div>
              <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
                <p className="text-sm font-semibold text-sand-50">
                  {nailRatio}% Wrist Evidence
                </p>
                <p className="text-sm text-sand-200/80">
                  Roman crucifixion varied significantly, with victims
                  sometimes tied, nailed, or both. Archaeological evidence
                  confirms that nailing through the feet was practiced, and
                  wrist nailing is biomechanically more plausible than palm
                  nailing [5][7][12]. highlight anatomical arguments.
                </p>
                <img
                  src="/images/crucifixion-wrist-vs-palm-diagram.jpg"
                  alt="Wrist versus palm nailing diagram"
                  loading="lazy"
                  className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
                />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
                Compare to Roman execution practices
              </p>
              {executionComparisons.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm text-sand-200/80">
                    <span>{item.label}</span>
                    <span>{item.intensity}%</span>
                  </div>
                  <Progress value={item.intensity} />
                  <p className="text-xs text-sand-200/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
