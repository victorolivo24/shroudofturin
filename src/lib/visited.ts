"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";

// Per-browser progress only; storage can be blocked (private mode), so every access is guarded.
const KEY = "visited-rooms";
const listeners = new Set<() => void>();

function readRaw() {
  try {
    return localStorage.getItem(KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function parse(raw: string): string[] {
  try {
    const value = JSON.parse(raw);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Slugs of rooms this browser has opened. Empty during server render. */
export function useVisited(): string[] {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "[]");
  return useMemo(() => parse(raw), [raw]);
}

/** Records a room visit once the page mounts. */
export function useMarkVisited(slug: string) {
  useEffect(() => {
    const visited = parse(readRaw());
    if (visited.includes(slug)) return;
    try {
      localStorage.setItem(KEY, JSON.stringify([...visited, slug]));
    } catch {}
    listeners.forEach((listener) => listener());
  }, [slug]);
}
