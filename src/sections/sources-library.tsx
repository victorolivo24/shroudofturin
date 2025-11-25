"use client";

import { useMemo, useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sourceLibrary } from "@/data/sources";
import { sourceFilters } from "@/data/labs";

export function SourcesLibrary() {
  const [filter, setFilter] = useState<string>("all");

  const filteredSources = useMemo(() => {
    if (filter === "all") return sourceLibrary;
    return sourceLibrary.filter((entry) => entry.category === filter);
  }, [filter]);

  return (
    <SectionShell id="sources-library">
      <SectionHeader
        eyebrow="Sources"
        title="MDX-based evidence files."
        description="Filter by scientific, historical, skeptical, or pro-authenticity sources. Each card loads MDX content."
        badgeVariant="amber"
      />
      <div className="flex flex-wrap gap-3">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        {sourceFilters.map((item) => (
          <Button
            key={item.id}
            variant={filter === item.id ? "default" : "outline"}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredSources.map((entry) => {
          const Component = entry.Component;
          return (
            <Card key={entry.id} className="bg-black/40">
              <CardHeader>
                <Badge variant="outline" className="mb-2">
                  {entry.category}
                </Badge>
                <CardTitle>{entry.title}</CardTitle>
                <CardDescription>{entry.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-sand-200/80">
                <Component />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
