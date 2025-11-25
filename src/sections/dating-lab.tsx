"use client";

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

  return (
    <SectionShell id="dating-lab">
      <SectionHeader
        eyebrow="Dating Lab"
        title="Cross-compare radiocarbon, reweave, and alternative testing."
        description="Review the 1988 test, textile repair theories, and Fanti's mechanical/spectroscopic work."
        badgeVariant="amber"
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="emerald">Evidence Timeline</Badge>
            <CardTitle>{active.label}</CardTitle>
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
              “Which evidence do you find more convincing?” (frontend polls will
              hook into backend later).
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
