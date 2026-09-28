"use client";

import { useState } from "react";

// Simplified model: the cloth as 2 rows × 24 zig-zag folded panels = 48 layers.
const ROWS = 2;
const COLUMNS = 24;
const LAYERS = ROWS * COLUMNS;
const WIDTH = 480;
const HEIGHT = 120;
const PANEL_WIDTH = WIDTH / COLUMNS;
const PANEL_HEIGHT = HEIGHT / ROWS;
// Where the molten silver burned through the folded packet, as a fraction of one panel.
const BURN = { x: 0.8, y: 0.5 };

/** Burn position on a panel: every fold mirrors the layer, so alternate panels flip. */
function burnAt(row: number, col: number) {
  const x = col % 2 === 0 ? BURN.x : 1 - BURN.x;
  const y = row === 0 ? BURN.y : 1 - BURN.y;
  return { cx: (col + x) * PANEL_WIDTH, cy: (row + y) * PANEL_HEIGHT };
}

export function FoldDemo() {
  const [unfolded, setUnfolded] = useState(0);
  const panels = Array.from({ length: unfolded }, (_, index) => ({
    index,
    col: Math.floor(index / ROWS),
    row: index % ROWS,
  }));

  return (
    <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Try it</p>
      <p className="mt-2 text-lg font-semibold text-sand-50">
        In 1532 the cloth lay folded in 48 layers. A drop of molten silver burned through one corner
        of the stack. Unfold it and see where the holes end up.
      </p>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mt-6 w-full"
        role="img"
        aria-label={`Cloth unfolded ${unfolded} of ${LAYERS} layers, showing the burn pattern`}
      >
        <rect width={WIDTH} height={HEIGHT} rx={4} fill="none" stroke="rgba(213,198,166,0.2)" strokeDasharray="3 3" />
        {unfolded === 0 ? (
          <g>
            {[4, 3, 2, 1, 0].map((offset) => (
              <rect
                key={offset}
                x={WIDTH / 2 - PANEL_WIDTH + offset * 2}
                y={HEIGHT / 2 - PANEL_HEIGHT / 2 - offset * 2}
                width={PANEL_WIDTH * 2}
                height={PANEL_HEIGHT}
                fill="#d9c9a3"
                stroke="#8a7550"
                strokeWidth={0.5}
              />
            ))}
            <circle cx={WIDTH / 2 + PANEL_WIDTH * 0.6} cy={HEIGHT / 2} r={5} fill="#2a160b" stroke="#f7b046" strokeWidth={1.5} />
            <text x={WIDTH / 2} y={HEIGHT - 8} textAnchor="middle" fontSize={9} fill="rgba(213,198,166,0.7)">
              folded packet · 48 layers
            </text>
          </g>
        ) : (
          panels.map(({ index, row, col }) => {
            const burn = burnAt(row, col);
            return (
              <g key={index} className="animate-[fade-in_.2s_ease-out]">
                <rect
                  x={col * PANEL_WIDTH}
                  y={row * PANEL_HEIGHT}
                  width={PANEL_WIDTH}
                  height={PANEL_HEIGHT}
                  fill="#d9c9a3"
                  stroke="rgba(138,117,80,0.5)"
                  strokeWidth={0.5}
                />
                <circle cx={burn.cx} cy={burn.cy} r={4} fill="#2a160b" stroke="#b5651d" strokeWidth={1} />
              </g>
            );
          })
        )}
      </svg>

      <label className="mt-5 block">
        <span className="flex justify-between text-sm text-sand-200/80">
          <span>Unfold the cloth</span>
          <span className="font-mono text-sand-50">
            {unfolded} / {LAYERS} layers
          </span>
        </span>
        <input
          type="range"
          min={0}
          max={LAYERS}
          value={unfolded}
          onChange={(event) => setUnfolded(Number(event.target.value))}
          className="mt-2 w-full accent-amber-400"
        />
      </label>
      <p className="mt-4 text-sm text-sand-200/80">
        {unfolded === LAYERS
          ? "One burn became a repeating, mirrored pattern of holes in two long lines. That is why the damage on the real cloth, shown below, is so symmetrical."
          : "Each fold mirrors the layer beneath it, so the single burn repeats in mirrored pairs."}
      </p>
      <p className="mt-3 text-xs text-sand-200/50">
        Simplified model of the folding; the historical fold pattern was more complex.
      </p>
    </div>
  );
}
