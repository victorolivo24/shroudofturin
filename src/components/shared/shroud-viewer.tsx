"use client";

import Image from "next/image";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { Hotspot, ExplorerMode } from "@/data/hotspots";

type ShroudViewerProps = {
  mode: ExplorerMode;
  zoom: number;
  onZoomChange: (value: number) => void;
  hotspots: Hotspot[];
  activeHotspot: string;
  onHotspotSelect: (id: string) => void;
};

const clamp = (value: number, min = 1, max = 3) =>
  Math.min(max, Math.max(min, value));

export function ShroudViewer({
  mode,
  zoom,
  onZoomChange,
  hotspots,
  activeHotspot,
  onHotspotSelect,
}: ShroudViewerProps) {
  const zoomValue = clamp(zoom);

  const overlayClass = useMemo(() => {
    switch (mode.id) {
      case "negative":
        return "mix-blend-screen opacity-80";
      case "uv":
        return "mix-blend-lighten opacity-70";
      case "relief":
        return "mix-blend-multiply opacity-80";
      default:
        return "opacity-90";
    }
  }, [mode.id]);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sand-200/15 bg-black/60 p-4 shadow-2xl shadow-black/40">
      <div
        className="relative mx-auto h-[460px] w-full max-w-2xl overflow-hidden rounded-[28px] border border-sand-200/20 bg-black"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-sand-700/20 to-black/60"
          aria-hidden
        />
        <Image
          src={mode.placeholder}
          alt={`${mode.label} placeholder`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            "object-cover transition duration-500 will-change-transform",
            overlayClass,
          )}
          style={{
            transform: `scale(${zoomValue})`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 border border-sand-50/5" />
        <div className="absolute inset-0">
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              className={cn(
                "absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black/50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber",
                hotspot.id === activeHotspot
                  ? "bg-accent-amber shadow-lg shadow-accent-amber/50"
                  : "bg-white/70",
              )}
              style={{
                left: `${hotspot.coords.x}%`,
                top: `${hotspot.coords.y}%`,
              }}
              onClick={() => onHotspotSelect(hotspot.id)}
            >
              <span className="sr-only">{hotspot.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <label className="flex flex-col text-xs uppercase tracking-[0.3em] text-sand-200/70">
          Zoom
          <input
            type="range"
            min={1}
            max={3}
            step={0.01}
            value={zoomValue}
            onChange={(event) => onZoomChange(parseFloat(event.target.value))}
            className="mt-2 h-1 cursor-pointer appearance-none rounded-full bg-sand-900"
          />
        </label>
        <p className="text-sm text-sand-200/80">{mode.instructions}</p>
      </div>
    </div>
  );
}
