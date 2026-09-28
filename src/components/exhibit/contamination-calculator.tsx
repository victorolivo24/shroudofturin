"use client";

import { useState } from "react";
import { Chip } from "@/components/exhibit/chip";
import { apparentYear } from "@/lib/radiocarbon";
import { cn } from "@/lib/utils";

const TRUE_YEAR = 30;
const LAB_RANGE = { start: 1260, end: 1390 };
const AXIS_END = 2000;
const percent = (year: number) => (Math.max(0, Math.min(year, AXIS_END)) / AXIS_END) * 100;

const contaminants = [
  { id: "modern", label: "Modern carbon", detail: "dirt, smoke, handling", year: 1950 },
  { id: "repair", label: "Repair thread", detail: "woven in around 1532", year: 1532 },
];

/** "How much younger material would turn a 1st-century cloth into the 1988 result?" */
export function ContaminationCalculator() {
  const [share, setShare] = useState(0);
  const [contaminantId, setContaminantId] = useState(contaminants[0].id);
  const contaminant = contaminants.find((item) => item.id === contaminantId)!;
  const year = Math.round(apparentYear(TRUE_YEAR, share / 100, contaminant.year));
  const matchesLab = year >= LAB_RANGE.start && year <= LAB_RANGE.end;

  return (
    <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Try it</p>
      <p className="mt-2 text-lg font-semibold text-sand-50">
        Suppose the cloth really is from 30 CE. How much younger material would it take to fool the
        labs?
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {contaminants.map((item) => (
          <Chip key={item.id} active={item.id === contaminantId} onClick={() => setContaminantId(item.id)}>
            {item.label} <span className="text-sand-200/50">· {item.detail}</span>
          </Chip>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="flex justify-between text-sm text-sand-200/80">
          <span>Share of the sample&apos;s carbon from {contaminant.label.toLowerCase()}</span>
          <span className="font-mono text-sand-50">{share}%</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={share}
          onChange={(event) => setShare(Number(event.target.value))}
          className="mt-2 w-full accent-amber-400"
        />
      </label>

      <div className="relative mt-10 h-3 rounded-full bg-sand-200/10">
        <span
          className="absolute inset-y-0 rounded-full bg-sky-300/60"
          style={{ left: `${percent(LAB_RANGE.start)}%`, width: `${percent(LAB_RANGE.end) - percent(LAB_RANGE.start)}%` }}
        />
        <span className="absolute -top-5 whitespace-nowrap text-[11px] text-sky-300" style={{ left: `${percent(LAB_RANGE.start)}%` }}>
          1988 result
        </span>
        <span className="absolute -top-5 text-[11px] text-accent-rose" style={{ left: `${percent(TRUE_YEAR)}%` }}>
          true date
        </span>
        <span
          className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-accent-amber transition-[left] duration-150"
          style={{ left: `${percent(year)}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-sand-200/50">
        <span>1 CE</span>
        <span>1000</span>
        <span>2000</span>
      </div>

      <p className={cn("mt-5 text-2xl font-semibold", matchesLab ? "text-sky-300" : "text-sand-50")}>
        The lab would report ≈ {year} CE
      </p>
      <p className="mt-2 text-sm text-sand-200/80">
        {matchesLab
          ? contaminant.id === "modern"
            ? "That matches 1988, but only with about two-thirds of the carbon coming from contamination. Labs clean samples before testing, which is why radiocarbon specialists consider contamination on this scale implausible."
            : "That matches 1988, but only if well over four-fifths of the sample was repair thread. That is essentially Rogers' claim: that the corner tested was mostly a later repair."
          : share === 0
            ? "With no contamination, the date comes back as 30 CE. Drag the slider."
            : "Not there yet. Keep going and notice how much it takes."}
      </p>
      <p className="mt-4 text-xs text-sand-200/50">
        Simplified model: uses radiocarbon decay but skips calibration, so dates are approximate.
      </p>
    </div>
  );
}
