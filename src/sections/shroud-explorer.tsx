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
    title: "Normal View",
    paragraphs: [
      "This view shows the Shroud under ordinary lighting conditions.",
      "The body image is extremely faint, with no clear outlines or visible brushstrokes. In contrast, bloodstains appear darker and more defined.",

    ],
    imageSrc: "/images/shroud_full_body.jpg",
    imageAlt: "Full Shroud of Turin",
  },
  negative: {
    title: "Photographic Negative",
    paragraphs: [
      "In 1898, the Shroud was photographed, revealing that its photographic negative produces a lifelike positive image.",
      "Details such as facial structure and body proportions appear clearer in the negative than in normal view.",
      "This unexpected behavior shifted the Shroud from a devotional object into a subject of scientific investigation.",
     
    ],
    imageSrc: "/images/shroud-fullbody-photographic-negative.png",
    imageAlt: "Photographic negative of the Shroud",
  },
  uv: {
    title: "Ultraviolet Fluorescence",
    paragraphs: [
      "Ultraviolet imaging reveals features not visible under normal lighting conditions.",
      "Some areas surrounding bloodstains fluoresce under UV light, suggesting differences in material composition or residue.",
      "This imaging technique was not available prior to modern forensic analysis.",

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
        eyebrow="Explore"
        title="The Shroud"
        description="Step into an interactive, impartial gallery that allows you to examine the Shroud under different imaging conditions. Use the viewing modes to explore how the image behaves under normal lighting, photographic inversion, and ultraviolet imaging."
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
          <h3 className="text-2xl font-semibold">{activePanel.title}</h3>
          <p className="text-sand-200/80">{activePanel.paragraphs.join(" ")}</p>
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
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Condition &amp; Preservation</h4>
          <p className="text-sand-200/80">
            The Shroud has undergone damage and repair over centuries of history.
            Burn marks and water stains visible today result from a fire in the 16th century, during which the cloth was damaged and later repaired. These features are part of the Shroud’s documented physical history and remain visible across imaging methods.
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
