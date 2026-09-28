"use client";

import { useEffect, useRef, useState } from "react";
import { Chip } from "@/components/exhibit/chip";

const sources = [
  {
    id: "shroud",
    label: "Shroud face",
    src: "/images/shroud_negative.jpg",
    note: "Brightness rises and falls with the shape of a face: nose and brow stand out, eye sockets sink. The image behaves like a depth map.",
  },
  {
    id: "portrait",
    label: "Ordinary portrait",
    src: "/images/painted-face-portrait.jpg",
    note: "Brightness here comes from lighting and colour, not distance. Dark eyes become pits, highlights become bumps, and the face distorts.",
  },
];

const COLUMNS = 56;
const BLUR_PASSES = 2;
const WIDTH = 600;
const HEIGHT = 640;
const MAX_LIFT = 110;

type HeightMap = { rows: number; cols: number; values: Float32Array };

/** Downsample an image to a smoothed grid of brightness values (0–1). */
async function loadHeightMap(src: string): Promise<HeightMap> {
  const image = new Image();
  image.src = src;
  await image.decode();
  const cols = COLUMNS;
  const rows = Math.round((COLUMNS * image.height) / image.width);
  const canvas = document.createElement("canvas");
  canvas.width = cols;
  canvas.height = rows;
  const context = canvas.getContext("2d")!;
  context.drawImage(image, 0, 0, cols, rows);
  const pixels = context.getImageData(0, 0, cols, rows).data;
  const values = new Float32Array(rows * cols);
  for (let i = 0; i < values.length; i++) {
    values[i] = (0.299 * pixels[i * 4] + 0.587 * pixels[i * 4 + 1] + 0.114 * pixels[i * 4 + 2]) / 255;
  }
  for (let pass = 0; pass < BLUR_PASSES; pass++) boxBlur(values, rows, cols);
  // Stretch to the full 0–1 range so faint, low-contrast images still show their shape.
  let min = 1;
  let max = 0;
  for (const value of values) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  for (let i = 0; i < values.length; i++) values[i] = (values[i] - min) / (max - min || 1);
  return { rows, cols, values };
}

/** 3×3 box blur in place, so linen weave and photo grain don't read as bumps. */
function boxBlur(values: Float32Array, rows: number, cols: number) {
  const source = values.slice();
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let sum = 0;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const r = row + dr;
          const c = col + dc;
          if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
          sum += source[r * cols + c];
          count++;
        }
      }
      values[row * cols + col] = sum / count;
    }
  }
}

/**
 * VP-8 style render: one line per image row, lifted by brightness and tilted away from the viewer.
 * Rows are drawn back to front, each filling the area below it, so nearer rows hide farther ones.
 */
function drawRelief(context: CanvasRenderingContext2D, map: HeightMap, tiltDegrees: number) {
  const tilt = (tiltDegrees * Math.PI) / 180;
  const cellWidth = (WIDTH - 40) / (map.cols - 1);
  const cellHeight = ((HEIGHT - MAX_LIFT - 40) / map.rows) * Math.cos(tilt);
  const top = MAX_LIFT + 20 + ((HEIGHT - MAX_LIFT - 40) - cellHeight * map.rows) / 2;
  context.fillStyle = "#050404";
  context.fillRect(0, 0, WIDTH, HEIGHT);
  context.lineWidth = 1.6;

  for (let row = 0; row < map.rows; row++) {
    const baseY = top + row * cellHeight;
    const point = (col: number) => ({
      x: 20 + col * cellWidth,
      y: baseY - map.values[row * map.cols + col] * MAX_LIFT * Math.sin(tilt),
    });

    context.beginPath();
    context.moveTo(20, HEIGHT);
    for (let col = 0; col < map.cols; col++) context.lineTo(point(col).x, point(col).y);
    context.lineTo(WIDTH - 20, HEIGHT);
    context.fillStyle = "#050404";
    context.fill();

    for (let col = 1; col < map.cols; col++) {
      const from = point(col - 1);
      const to = point(col);
      const brightness = map.values[row * map.cols + col];
      context.strokeStyle = `rgba(247, 176, 70, ${0.15 + brightness * 0.85})`;
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
    }
  }
}

/** Recreates the 1976 VP-8 experiment: treat image brightness as height and tilt it into 3D. */
export function ReliefViewer() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sourceId, setSourceId] = useState(sources[0].id);
  const [tilt, setTilt] = useState(40);
  const [maps, setMaps] = useState<Record<string, HeightMap>>({});
  const source = sources.find((item) => item.id === sourceId)!;
  const map = maps[source.src];

  useEffect(() => {
    if (maps[source.src]) return;
    let cancelled = false;
    loadHeightMap(source.src).then((loaded) => {
      if (!cancelled) setMaps((current) => ({ ...current, [source.src]: loaded }));
    });
    return () => {
      cancelled = true;
    };
  }, [source.src, maps]);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (context && map) drawRelief(context, map, tilt);
  }, [map, tilt]);

  return (
    <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
      <div className="flex flex-wrap gap-2">
        {sources.map((item) => (
          <Chip key={item.id} active={item.id === sourceId} onClick={() => setSourceId(item.id)}>
            {item.label}
          </Chip>
        ))}
      </div>
      <canvas
        ref={canvas}
        width={WIDTH}
        height={HEIGHT}
        role="img"
        aria-label={`${source.label} rendered as a 3D relief, where brightness becomes height`}
        className="mx-auto mt-5 block w-full max-w-md rounded-2xl bg-[#050404]"
      />
      <label className="mt-5 block">
        <span className="flex justify-between text-xs uppercase tracking-[0.25em] text-sand-200/60">
          <span>Flat image</span>
          <span>Tilted relief</span>
        </span>
        <input
          type="range"
          min={0}
          max={75}
          value={tilt}
          onChange={(event) => setTilt(Number(event.target.value))}
          aria-label="Tilt the relief"
          className="mt-2 w-full accent-amber-400"
        />
      </label>
      <p key={source.id} className="mt-4 animate-[fade-in_.3s_ease-out] text-sand-200/85">
        {source.note}
      </p>
    </div>
  );
}
