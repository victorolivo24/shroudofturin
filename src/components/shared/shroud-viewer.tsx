"use client";

import Image from "next/image";
import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from "react";
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

const VIEWER_ASPECT_RATIO = 2370 / 2321;

export function ShroudViewer({
  mode,
  zoom,
  onZoomChange,
  hotspots,
  activeHotspot,
  onHotspotSelect,
}: ShroudViewerProps) {
  const zoomValue = clamp(zoom);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const pointerOrigin = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const clampAxis = (value: number, dimension: number) => {
    if (zoomValue <= 1 || dimension <= 0) return 0;
    const maxOffset = ((zoomValue - 1) * dimension) / 2;
    return Math.max(-maxOffset, Math.min(maxOffset, value));
  };

  const applyOffset = (x: number, y: number) => {
    setOffset({
      x: clampAxis(x, dimensions.width),
      y: clampAxis(y, dimensions.height),
    });
  };

  const isHotspotTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement && target.closest("[data-hotspot-target]");

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isHotspotTarget(event.target)) {
      setIsPanning(false);
      return;
    }
    if (zoomValue <= 1) return;
    setIsPanning(true);
    pointerOrigin.current = {
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    applyOffset(
      event.clientX - pointerOrigin.current.x,
      event.clientY - pointerOrigin.current.y,
    );
  };

  const stopPan = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsPanning(false);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (zoomValue <= 1) return;
    event.preventDefault();
    applyOffset(offset.x - event.deltaX, offset.y - event.deltaY);
  };

  const effectiveOffset =
    zoomValue <= 1
      ? { x: 0, y: 0 }
      : {
          x: clampAxis(offset.x, dimensions.width),
          y: clampAxis(offset.y, dimensions.height),
        };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-sand-200/15 bg-black/60 p-4 shadow-2xl shadow-black/40">
      <div
        className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-sand-200/20 bg-black"
        style={{
          perspective: "1000px",
          aspectRatio: VIEWER_ASPECT_RATIO,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sand-700/20 to-black/60"
          aria-hidden
        />
        <div
          className={cn(
            "absolute inset-0 cursor-grab",
            isPanning && "cursor-grabbing",
          )}
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopPan}
          onPointerLeave={stopPan}
          onWheel={handleWheel}
        >
          <div
            className="relative h-full w-full transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `translate(${effectiveOffset.x}px, ${effectiveOffset.y}px)`,
            }}
          >
            <div
              className="relative h-full w-full transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `scale(${zoomValue})`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={mode.placeholder}
                alt={`${mode.label} visualization`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cn("object-cover", overlayClass)}
                draggable={false}
                priority={false}
              />
              <div className="absolute inset-0">
                {hotspots.map((hotspot) => {
                  const customCoords = hotspot.coordsByMode?.[mode.id];
                  const coords = customCoords ?? hotspot.coords;
                  return (
                    <button
                      key={hotspot.id}
                      data-hotspot-target
                      className={cn(
                        "absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70 bg-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/60",
                        hotspot.id === activeHotspot &&
                          "border-4 border-accent-amber shadow-[0_0_12px_rgba(255,196,94,0.7)]",
                      )}
                      style={{
                        left: `${coords.x}%`,
                        top: `${coords.y}%`,
                      }}
                      onClick={() => onHotspotSelect(hotspot.id)}
                    >
                      <span className="sr-only">{hotspot.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 border border-sand-50/5" />
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
