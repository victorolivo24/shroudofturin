"use client";

import { cn } from "@/lib/utils";

type Band = {
  id: string;
  title: string;
  subtitle: string;
  start: number;
  end: number;
  color: string;
  height: number;
  transparent?: boolean;
  dashed?: boolean;
  dashedStart?: number;
  dashedEnd?: number;
  caption: string;
};

const TIMELINE_START = -1000;
const TIMELINE_END = 1600;
const TIMELINE_RANGE = TIMELINE_END - TIMELINE_START;

const axisTicks = [
  { label: "1000 BCE", position: 0 },
  { label: "0 CE", position: 33 },
  { label: "500 CE", position: 50 },
  { label: "1000 CE", position: 66 },
  { label: "1500 CE", position: 90 },
];

const bands: Band[] = [
  {
    id: "historical-record",
    title: "Historical Record",
    subtitle: "Documented appearance vs. disputed references",
    start: 1350,
    end: 1600,
    dashed: true,
    dashedStart: 500,
    dashedEnd: 1350,
    color: "bg-sand-200/70",
    height: 10,
    caption:
      "Solid bar marks the securely documented presence from c.1350 onward; dashed span shows debated earlier mentions.",
  },
  {
    id: "radiocarbon",
    title: "Radiocarbon Dating (1988)",
    subtitle: "Single-sample test",
    start: 1260,
    end: 1390,
    color: "bg-sky-300/70",
    height: 12,
    caption: "Oxford, Zürich, and Tucson labs dated a single corner sample to 1260–1390 CE (95% confidence).",
  },
  {
    id: "material-indicators",
    title: "Material & Chemical Indicators",
    subtitle: "Non-carbon aging estimates",
    start: -500,
    end: 500,
    color: "bg-amber-300/40",
    height: 14,
    transparent: true,
    caption:
      "Cellulose oxidation, lignin chemistry, and tensile measurements provide only broad aging windows, not precise years.",
  },
  {
    id: "experimental",
    title: "Experimental Dating Methods",
    subtitle: "Spectroscopic & mechanical tests (contested)",
    start: -100,
    end: 100,
    color: "bg-emerald-300/70",
    height: 10,
    caption:
      "Giulio Fanti’s spectroscopic and mechanical analyses cluster between 100 BCE and 100 CE but remain debated.",
  },
];

const percentForYear = (year: number) => {
  const clamped = Math.min(Math.max(year, TIMELINE_START), TIMELINE_END);
  const percent = ((clamped - TIMELINE_START) / TIMELINE_RANGE) * 100;
  return percent;
};

const widthPercent = (start: number, end: number) => {
  const width = percentForYear(end) - percentForYear(start);
  return `${Math.max(width, 0)}%`;
};

export function DatingTimeline() {
  return (
    <section
      className="mx-auto w-full max-w-[1100px] rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6"
      aria-labelledby="dating-timeline-title"
    >
      <p
        id="dating-timeline-title"
        className="text-xs uppercase tracking-[0.4em] text-sand-200/60"
      >
        Dating the Shroud: A Comparative Overview
      </p>
      <div className="mt-6 space-y-8">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 w-px border-l border-rose-200/70"
            style={{ left: `${percentForYear(33)}%` }}
            aria-hidden="true"
          >
            <span
              className="absolute -top-4 left-2 text-[0.65rem] text-rose-200/80"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Traditional crucifixion date
            </span>
          </div>
          <div className="relative h-[60px] border-b border-sand-200/30">
            {axisTicks.map((tick) => (
              <div
                key={tick.label}
                className="absolute flex -translate-x-1/2 flex-col items-center text-[0.7rem] text-sand-200/70"
                style={{ left: `${tick.position}%` }}
              >
                <div className="h-2 border-l border-sand-200/50" />
                <span className="mt-1 whitespace-nowrap">{tick.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-7">
            {bands.map((band) => (
              <div
                key={band.id}
                className="grid gap-4 md:grid-cols-[200px,1fr]"
                aria-label={`${band.title} evidence band`}
              >
                <div className="space-y-1 text-sm text-sand-200/85">
                  <p className="font-semibold text-sand-50">{band.title}</p>
                  <p className="text-xs text-sand-200/70">{band.subtitle}</p>
                </div>
                <div>
                  <div className="relative h-12">
                    {band.dashed && band.dashedStart !== undefined && band.dashedEnd !== undefined && (
                      <div
                        className="absolute inset-y-1 rounded-full border border-dashed border-sand-200/60"
                        style={{
                          left: `${percentForYear(band.dashedStart)}%`,
                          width: widthPercent(band.dashedStart, band.dashedEnd),
                        }}
                        aria-label="Debated earlier references"
                      />
                    )}
                    <div
                      className={cn(
                        "absolute inset-y-2 rounded-full",
                        band.transparent ? "bg-transparent" : band.color,
                        band.transparent ? "border border-sand-50/40" : "",
                      )}
                      style={{
                        left: `${percentForYear(band.start)}%`,
                        width: widthPercent(band.start, band.end),
                        height: `${band.height}px`,
                      }}
                      aria-label={band.title}
                    />
                  </div>
                  <p className="mt-2 text-xs text-sand-200/75">{band.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-sand-200/75">
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-sand-50/70" />
            Solid bar → Documented evidence
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full border border-dashed border-sand-50/60" />
            Dashed bar → Disputed / inferred
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 rounded-full border border-amber-50/40 bg-amber-200/30" />
            Transparent bar → Broad estimate
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-0.5 border border-rose-200/70" />
            Thin line → Traditional reference date
          </div>
        </div>
      </div>
    </section>
  );
}
