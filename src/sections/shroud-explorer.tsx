"use client";
/* eslint-disable @next/next/no-img-element */

import type { JSX } from "react";
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
import { MuseumScene } from "@/components/three/MuseumScene";
import {
  shroudHotspots,
  explorerModes,
  type Hotspot,
  type ExplorerMode,
} from "@/data/hotspots";
import { ShroudViewer } from "@/components/shared/shroud-viewer";
import { Badge } from "@/components/ui/badge";
import { sourceLibrary } from "@/data/sources";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const infoModes = [
  { id: "science", label: "Scientific" },
  { id: "pro", label: "Pro-Authenticity" },
  { id: "skeptic", label: "Skeptical" },
];

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
    imageSrc: "/images/shroud_negative.jpg",
    imageAlt: "Photographic negative of the Shroud",
  },
  uv: {
    title: "Ultraviolet Fluorescence & Serum Halos",
    paragraphs: [
      "Ultraviolet photography reveals serum halos surrounding many bloodstains — a phenomenon consistent with blood separation following trauma. These features are invisible under normal lighting conditions and were not detectable prior to modern forensic techniques.",
    ],
    imageSrc: "/images/shroud-uv-fluorescence.jpg",
    imageAlt: "UV fluorescence serum halos",
  },
  relief: {
    title: "3D Relief Interpretation",
    paragraphs: [
      "When processed by a NASA VP-8 image analyzer, the Shroud’s grayscale values translate into a natural 3D relief, indicating that brightness correlates with distance from the cloth.",
      "Researchers debate whether this relief implies contact with an actual body or a carefully crafted bas-relief, but the effect remains unique among historical images.",
    ],
    imageSrc: "/images/shroud-vp8-3d-render.jpg",
    imageAlt: "VP-8 style 3D relief rendering",
  },
};

export function ShroudExplorerSection() {
  const [modeId, setModeId] = useState<ExplorerMode["id"]>("normal");
  const [zoom, setZoom] = useState(1.15);
  const [hotspotId, setHotspotId] = useState<Hotspot["id"]>(
    shroudHotspots[0].id,
  );
  const [infoMode, setInfoMode] = useState<(typeof infoModes)[number]["id"]>(
    "science",
  );

  const mode = explorerModes.find((item) => item.id === modeId)!;
  const hotspot = shroudHotspots.find((item) => item.id === hotspotId)!;
  const activeSource = sourceLibrary[0];
  const SourceComponent = activeSource.Component;
  const activePanel = viewingPanels[modeId] ?? viewingPanels.normal;

  const renderModeImages = (content: string) => {
    const normalized = content.toLowerCase();
    const nodes: JSX.Element[] = [];
    if (
      normalized.includes("photographic negative") ||
      normalized.includes("negative image")
    ) {
      nodes.push(
        <img
          key="negative"
          src="/images/shroud_negative.jpg"
          alt="Photographic negative reference"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (
      normalized.includes("ultraviolet") ||
      normalized.includes("uv fluorescence") ||
      normalized.includes("serum halo")
    ) {
      nodes.push(
        <img
          key="uv"
          src="/images/shroud-uv-fluorescence.jpg"
          alt="UV fluorescence view"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (
      normalized.includes("linen fibers") ||
      normalized.includes("microscopy") ||
      normalized.includes("superficial") ||
      normalized.includes("linen fibril")
    ) {
      nodes.push(
        <img
          key="linen"
          src="/images/shroud-linen-fibers.jpg"
          alt="Linen fibers micrograph"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    return nodes;
  };

  const renderHotspotImages = (content: string) => {
    const normalized = content.toLowerCase();
    const nodes: JSX.Element[] = [];
    if (
      normalized.includes("1532") ||
      normalized.includes("chambéry") ||
      normalized.includes("fire damage")
    ) {
      nodes.push(
        <img
          key="fire"
          src="/images/shroud-fire-damage.jpg"
          alt="Shroud fire damage reference"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (
      (normalized.includes("water") && normalized.includes("stain")) ||
      normalized.includes("water stains")
    ) {
      nodes.push(
        <img
          key="water"
          src="/images/shroud-water-stains.jpg"
          alt="Water stains reference"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (
      normalized.includes("ultraviolet") ||
      normalized.includes("uv fluorescence") ||
      normalized.includes("serum halo")
    ) {
      nodes.push(
        <img
          key="hotspot-uv"
          src="/images/shroud-uv-fluorescence.jpg"
          alt="UV fluorescence hotspot reference"
          loading="lazy"
          className="mt-4 w-full rounded-3xl border border-sand-200/15 object-cover"
        />,
      );
    }
    return nodes;
  };

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
          <img
            src={activePanel.imageSrc}
            alt={activePanel.imageAlt}
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
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
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Linen Fiber Microscopy</h4>
          <p className="text-sand-200/80">
            Microscopic analysis shows that the image resides only on the outermost fibers of
            the linen threads — affecting less than 0.2 microns of depth. No pigment, dye, or
            binder has been found within the fibers themselves.
          </p>
          <img
            src="/images/shroud-linen-fibers.jpg"
            alt="Linen fiber microscopy"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <ShroudViewer
            key={mode.id}
            mode={mode}
            zoom={zoom}
            onZoomChange={setZoom}
            hotspots={shroudHotspots}
            activeHotspot={hotspotId}
            onHotspotSelect={setHotspotId}
          />
          <div className="rounded-3xl border border-sand-200/10 bg-black/40 p-4 text-sm text-sand-200/80">
            <p>{mode.description}</p>
            {renderModeImages(mode.description)}
          </div>
        </div>

        <div className="space-y-6">
          <MuseumScene />
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

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="outline">Hotspot Map</Badge>
            <CardTitle>{hotspot.label}</CardTitle>
            <CardDescription>{hotspot.description}</CardDescription>
            {renderHotspotImages(hotspot.description)}
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs
              value={infoMode}
              onValueChange={(value) =>
                setInfoMode(value as (typeof infoModes)[number]["id"])
              }
            >
              <TabsList>
                {infoModes.map((mode) => (
                  <TabsTrigger key={mode.id} value={mode.id}>
                    {mode.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {infoModes.map((mode) => (
                <TabsContent key={mode.id} value={mode.id}>
                  <div className="rounded-2xl border border-sand-200/15 bg-sand-900/40 p-4 text-sm text-sand-50">
                    <p>
                      {mode.id === "science"
                        ? hotspot.scienceNote
                        : mode.id === "pro"
                          ? hotspot.proAuthenticity
                          : hotspot.skepticalView}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
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

        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="emerald">Modal Preview</Badge>
            <CardTitle>Pop-up Briefings</CardTitle>
            <CardDescription>
              Click any hotspot to surface a balanced briefing. Replace this area
              with motion/3D panels or video as assets become available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-sm font-medium text-sand-50">
                Scientific Explanation
              </p>
              <p className="text-sm text-sand-200/80">
                {hotspot.scienceNote}
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-sm font-medium text-sand-50">Pro-Authenticity</p>
              <p className="text-sm text-sand-200/80">
                {hotspot.proAuthenticity}
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-sm font-medium text-sand-50">Skeptical</p>
              <p className="text-sm text-sand-200/80">
                {hotspot.skepticalView}
              </p>
            </div>
            <p className="text-xs text-sand-200/70">
              {/* Placeholder for actual modal trigger */}
              TODO: wire these cards to modal or immersive overlays.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
