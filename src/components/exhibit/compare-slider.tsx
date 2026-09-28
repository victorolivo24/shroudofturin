"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { cn } from "@/lib/utils";

type Layer = { src: string; label: string; className?: string };

/**
 * Drag to reveal one image over another. Both layers must share framing.
 * The native range input sits invisibly on top, so keyboard and touch work for free.
 */
export function CompareSlider({ before, after, alt }: { before: Layer; after: Layer; alt: string }) {
  const [position, setPosition] = useState(50);
  return (
    <div className="relative select-none overflow-hidden rounded-3xl border border-sand-200/15 bg-black">
      <img src={after.src} alt={alt} className={cn("block w-full", after.className)} draggable={false} />
      <img
        src={before.src}
        alt=""
        className={cn("absolute inset-0 h-full w-full object-cover", before.className)}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent-amber shadow-[0_0_12px_rgba(247,176,70,0.8)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-amber px-2 py-1 text-xs font-bold text-black">
          ⇆
        </span>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs text-sand-50">
        {before.label}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs text-sand-50">
        {after.label}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Slide between ${before.label} and ${after.label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
