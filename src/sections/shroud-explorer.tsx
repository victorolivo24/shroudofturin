"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  shroudHotspots,
  explorerModes,
  type Hotspot,
  type ExplorerMode,
} from "@/data/hotspots";
import { ShroudViewer } from "@/components/shared/shroud-viewer";
import { Badge } from "@/components/ui/badge";
import { sourceLibrary } from "@/data/sources";

const viewingPanels: Record<
  ExplorerMode["id"],
  {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  }
> = {
  normal: {
    title: "The Shroud of Turin",
    paragraphs: [
      "The Shroud of Turin is a linen cloth measuring approximately 4.4 × 1.1 meters, bearing the faint front-and-back image of a crucified man. Preserved in the Cathedral of Saint John the Baptist in Turin, Italy, it has been the subject of scientific, historical, and theological investigation for over a century.",
      "The image is not painted, printed, or dyed, yet it displays anatomical precision, three-dimensional information, and forensic detail unmatched by known artistic techniques.",
    ],
    imageSrc: "/images/shroud_full_body.jpg",
    imageAlt: "Full Shroud of Turin",
  },
  negative: {
    title: "The Photographic Negative",
    paragraphs: [
      "In 1898, Italian photographer Secondo Pia photographed the Shroud. When he developed the photographic negative, the image appeared as a natural positive — revealing a level of anatomical detail not visible to the naked eye.",
      "This discovery transformed the Shroud from a devotional object into a subject of scientific inquiry.",
    ],
    imageSrc: "/images/shroud-fullbody-photographic-negative.png",
    imageAlt: "Photographic negative of the Shroud",
  },
  uv: {
    title: "Ultraviolet Fluorescence & Serum Halos",
    paragraphs: [
      "Ultraviolet photography reveals serum halos surrounding many bloodstains — a phenomenon consistent with blood separation following trauma. These features are invisible under normal lighting conditions and were not detectable prior to modern forensic techniques.",
    ],
    imageSrc: "/images/shroud-fullbody-uv.png",
    imageAlt: "UV fluorescence serum halos",
  },
};

export function ShroudExplorerSection() {
  const [modeId, setModeId] = useState<ExplorerMode["id"]>("normal");
  const [zoom, setZoom] = useState(1);
  const [hotspotId, setHotspotId] = useState<Hotspot["id"]>(
    shroudHotspots[0].id,
  );
  const mode = explorerModes.find((item) => item.id === modeId)!;
  const hotspot = shroudHotspots.find((item) => item.id === hotspotId)!;
  const scienceNote = hotspot.scienceNote;
  const activeSource = sourceLibrary[0];
  const SourceComponent = activeSource.Component;
  const activePanel = viewingPanels[modeId] ?? viewingPanels.normal;
  return (
    <SectionShell id="shroud-explorer">
      <SectionHeader
        eyebrow="Flagship Experience"
        title="Shroud Explorer"
        description="Step into an impartial, interactive gallery that surfaces the major evidence sets, counterpoints, and open questions."
        badgeVariant="amber"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
            Viewing Modes
          </p>
          <ToggleGroup
            type="single"
            value={modeId}
            onValueChange={(value) => value && setModeId(value as ExplorerMode["id"])}
            className="mt-4 flex flex-wrap gap-3"
          >
            {explorerModes.map((item) => (
              <ToggleGroupItem key={item.id} value={item.id}>
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
            SECTION 1 — SHROUD EXPLORER
          </p>
          <h3 className="text-2xl font-semibold">{activePanel.title}</h3>
          {activePanel.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sand-200/80">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] xl:grid-cols-[minmax(0,1fr)_minmax(300px,360px)]">
            <ShroudViewer
              key={mode.id}
              mode={mode}
              zoom={zoom}
              onZoomChange={setZoom}
              hotspots={shroudHotspots}
              activeHotspot={hotspotId}
              onHotspotSelect={setHotspotId}
            />
            <Card className="bg-black/40">
              <CardHeader>
                <Badge variant="outline">Hotspot Key</Badge>
                <CardTitle>{hotspot.label}</CardTitle>
                <CardDescription>{hotspot.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-2xl border border-sand-200/15 bg-sand-900/40 p-4 text-sm text-sand-50">
                  <p>{scienceNote}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {shroudHotspots.map((item) => (
                    <Button
                      key={item.id}
                      variant={item.id === hotspotId ? "default" : "outline"}
                      size="sm"
                      onClick={() => setHotspotId(item.id)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
                <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
                    Sources to Cross-Check
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-sand-200/80">
                    {hotspot.sources.map((source) => (
                      <li key={source} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-sand-200/70">{mode.description}</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Fire Damage and Water Stains (1532)</h4>
          <p className="text-sand-200/80">
            In 1532, a fire damaged the Shroud while it was stored in Chambéry, France.
            Molten silver burned through folded layers of cloth, creating symmetrical burn
            marks. Water used to extinguish the fire caused additional staining. Despite this,
            the body image remained intact.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <img
              src="/images/shroud-fire-damage.jpg"
              alt="Fire damage on the Shroud"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
            <img
              src="/images/shroud-water-stains.jpg"
              alt="Water stains on the Shroud"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-10 xl:grid-cols-[1.3fr,0.7fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Badge variant="emerald" className="mb-2">
                Primary Source
              </Badge>
              <CardTitle>{activeSource.title}</CardTitle>
              <CardDescription>{activeSource.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <SourceComponent />
              {/* TODO: replace placeholder MDX with curated excerpt */}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
