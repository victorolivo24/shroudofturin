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
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 2 — CRUCIFIXION FORENSICS
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Wrist vs. Palm Nailing</h3>
          <p className="text-sand-200/80">
            The wounds on the Shroud appear in the wrist area rather than the palms.
            Experimental studies demonstrate that nails through the palm cannot support body
            weight, whereas the wrist anatomy can. This contradicts medieval artistic
            convention but aligns with anatomical reality.
          </p>
          <img
            src="/images/crucifixion-wrist-vs-palm-diagram.jpg"
            alt="Wrist vs palm nailing diagram"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Roman Scourging</h3>
          <p className="text-sand-200/80">
            The body displays over 100 dumbbell-shaped wounds consistent with the Roman
            flagrum — a whip tipped with metal or bone. The distribution suggests a
            Roman-style scourging prior to crucifixion.
          </p>
          <img
            src="/images/roman-flagrum.jpg"
            alt="Roman flagrum reference"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Crown of Thorns</h3>
          <p className="text-sand-200/80">
            Puncture wounds appear across the scalp rather than forming a circular band,
            suggesting a cap-like placement of thorns rather than a crown.
          </p>
          <img
            src="/images/crown-of-thorns-wound-diagram.jpg"
            alt="Crown of thorns wound pattern"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Archaeological Evidence: Jehohanan</h3>
          <p className="text-sand-200/80">
            In 1968, archaeologists discovered the remains of a crucified man named
            Jehohanan in Jerusalem. A nail through the heel bone provides rare physical
            confirmation of Roman crucifixion methods.
          </p>
          <img
            src="/images/jehohanan-heel-bone-nail.png"
            alt="Jehohanan heel bone nail"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
      </div>
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
