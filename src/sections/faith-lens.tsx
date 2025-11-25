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
import { Switch } from "@/components/ui/switch";

export function FaithLens() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SectionShell id="faith-lens">
      <SectionHeader
        eyebrow="Faith Lens (Optional Toggle)"
        title="How believers interpret the data."
        description="This view is visually separated from the science-first experience. Toggle on only if you want to explore devotional reflections."
        badgeVariant="emerald"
      />
      <Card className="bg-black/40">
        <CardHeader>
          <Badge variant="amber" className="mb-3">
            Optional View
          </Badge>
          <div className="flex items-center justify-between">
            <CardTitle>Faith Lens</CardTitle>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>
          <CardDescription>
            Toggle to reveal how faith communities contextualize the same data set.
          </CardDescription>
        </CardHeader>
        {enabled ? (
          <CardContent className="space-y-4 text-sm text-sand-200/80">
            <p>
              {"<TODO: copy>"} Provide gentle commentary referencing how
              believers see the scientific evidence through theological frameworks.
            </p>
            <p>
              Emphasize respect for differing conclusions while keeping the science
              intact.
            </p>
          </CardContent>
        ) : (
          <CardContent className="text-sm text-sand-200/70">
            Faith content hidden. Toggle the switch to view.
          </CardContent>
        )}
      </Card>
    </SectionShell>
  );
}
