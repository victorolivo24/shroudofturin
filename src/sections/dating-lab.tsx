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
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { datingEvidence, pollOptions } from "@/data/labs";

export function DatingLab() {
  const [activeId, setActiveId] = useState(datingEvidence[0].id);
  const [pollSelection, setPollSelection] = useState<string | null>(null);
  const active = datingEvidence.find((item) => item.id === activeId)!;

  const renderActiveImage = (id: string) => {
    if (id === "radiocarbon") {
      return (
        <img
          src="/images/shroud-c14-sample-1988.jpg"
          alt="1988 radiocarbon sample reference"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />
      );
    }
    if (id === "reweave") {
      return (
        <img
          src="/images/shroud-rogers-cotton-fibers.jpg"
          alt="Rogers cotton fiber evidence"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />
      );
    }
    if (id === "fanti") {
      return (
        <img
          src="/images/fanti-spectroscopy-setup.jpg"
          alt="Fanti spectroscopy setup"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />
      );
    }
    return null;
  };

  return (
    <SectionShell id="dating-lab">
      <SectionHeader
        eyebrow="Dating Lab"
        title="Cross-compare radiocarbon, reweave, and alternative testing."
        description="Review the 1988 test, textile repair theories, and Fanti's mechanical/spectroscopic work."
        badgeVariant="amber"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 5 — DATING THE SHROUD
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Radiocarbon Dating (1988)</h3>
          <p className="text-sand-200/80">
            Radiocarbon tests dated a corner sample of the cloth to 1260–1390 CE. The test has
            been widely debated due to concerns over sampling location and textile repair.
          </p>
          <img
            src="/images/shroud-c14-sample-1988.jpg"
            alt="Radiocarbon sample from 1988"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Rogers’ Textile Analysis</h3>
          <p className="text-sand-200/80">
            Chemist Raymond Rogers identified cotton fibers and dye in the sampled area,
            suggesting it may not represent the original cloth.
          </p>
          <img
            src="/images/shroud-rogers-cotton-fibers.jpg"
            alt="Rogers cotton fiber evidence"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Alternative Spectroscopic Dating</h3>
          <p className="text-sand-200/80">
            Studies by Giulio Fanti using infrared and mechanical methods yielded much earlier
            date ranges, though these methods remain contested.
          </p>
          <img
            src="/images/fanti-spectroscopy-setup.jpg"
            alt="Fanti spectroscopy setup"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Timeline Overview</h3>
          <p className="text-sand-200/80">
            A synthesis of historical, scientific, and textual evidence.
          </p>
          <img
            src="/images/shroud-dating-timeline.jpg"
            alt="Shroud dating timeline overview"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="emerald">Evidence Timeline</Badge>
            <img
              src="/images/shroud-dating-timeline.jpg"
              alt="Dating timeline graphic"
              loading="lazy"
              className="mt-2 w-full rounded-2xl border border-sand-200/15 object-cover"
            />
            <CardTitle>{active.label}</CardTitle>
            {renderActiveImage(active.id)}
            <CardDescription>
              Year marker: <strong>{active.value}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {datingEvidence.map((item) => (
                <Button
                  key={item.id}
                  variant={item.id === activeId ? "default" : "outline"}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Supporting Argument
              </p>
              <p className="text-sand-50">{active.pro}</p>
            </div>
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Skeptical Argument
              </p>
              <p className="text-sand-50">{active.skeptical}</p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
                Interactive Comparison Chart
              </p>
              {datingEvidence.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between text-sm text-sand-200/80">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <Progress value={(item.value / 2000) * 100} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="amber">Poll Widget Placeholder</Badge>
            <CardDescription>
              &quot;Which evidence do you find more convincing?&quot; (frontend
              polls will hook into backend later).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pollOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setPollSelection(option.id)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  pollSelection === option.id
                    ? "border-accent-amber bg-sand-900/50 text-sand-50"
                    : "border-sand-200/15 bg-sand-900/30 text-sand-200/80"
                }`}
              >
                <p className="text-sm font-semibold">{option.label}</p>
                <p className="text-xs">{option.description}</p>
              </button>
            ))}
            <div className="rounded-2xl border border-dashed border-sand-200/20 p-4 text-xs text-sand-200/70">
              TODO: connect poll selections to backend + data viz.
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
