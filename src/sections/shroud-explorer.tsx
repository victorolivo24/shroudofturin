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
          src="/images/shroud-negative.jpg"
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
      <img
        src="/images/shroud_full_body.jpg"
        alt="Full body view of the Shroud of Turin"
        loading="lazy"
        className="mb-10 w-full rounded-[40px] border border-sand-200/15 object-cover"
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sand-200/70">
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
                  {item.label.includes("Photographic Negative") && (
                    <img
                      src="/images/shroud-negative.jpg"
                      alt="Photographic negative quick reference"
                      loading="lazy"
                      className="mt-2 w-full rounded-2xl border border-sand-200/20 object-cover"
                    />
                  )}
                  {item.label.includes("UV Fluorescence") && (
                    <img
                      src="/images/shroud-uv-fluorescence.jpg"
                      alt="UV fluorescence preview"
                      loading="lazy"
                      className="mt-2 w-full rounded-2xl border border-sand-200/20 object-cover"
                    />
                  )}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <ShroudViewer
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
