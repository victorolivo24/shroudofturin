"use client";

import { useState } from "react";
import { Station } from "@/components/exhibit/station";
import { DebateCard } from "@/components/exhibit/debate-card";
import { ContaminationCalculator } from "@/components/exhibit/contamination-calculator";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Cite } from "@/components/shared/cite";
import { cn } from "@/lib/utils";

const START = -200;
const END = 2000;
const percent = (year: number) => ((year - START) / (END - START)) * 100;
const ticks = [-200, 0, 500, 1000, 1500, 2000];
const tickLabel = (year: number) => (year < 0 ? `${-year} BCE` : year === 0 ? "1 CE" : `${year}`);

const methods = [
  {
    id: "carbon",
    label: "Radiocarbon (1988)",
    range: "1260–1390 CE",
    precision: "High, but from one sampled corner",
    start: 1260,
    end: 1390,
    color: "bg-sky-300",
    body: (
      <>
        <p>
          In 1988 laboratories in Oxford, Zürich and Tucson each dated pieces of one small sample cut
          from a corner of the cloth. All three reported a medieval range of 1260–1390 CE.
          <Cite id="damon" />
        </p>
        <p>
          Supporters of the result stress the agreement between three independent labs. Critics note
          that only one area was sampled and that repairs or contamination could skew it.
        </p>
      </>
    ),
  },
  {
    id: "history",
    label: "Historical record",
    range: "c. 1350 CE onward (earlier claims debated)",
    precision: "Moderate",
    start: 1354,
    end: 2000,
    debatedFrom: 550,
    color: "bg-sand-200",
    body: (
      <>
        <p>
          Written records place the Shroud securely in France from the mid-14th century. Earlier
          references have been proposed (the dashed line) but historians still debate them.
        </p>
        <p>
          Documentation after 1350 gives a reliable baseline; the gaps before it limit how far back
          the record can reach.
        </p>
      </>
    ),
  },
  {
    id: "material",
    label: "Material tests",
    range: "c. 100 BCE–300 CE",
    precision: "Low",
    start: -100,
    end: 300,
    color: "bg-accent-emerald",
    body: (
      <>
        <p>
          Some researchers estimate age from how the linen itself has aged, using spectroscopic,
          mechanical and X-ray measurements rather than radioactive decay.
          <Cite id="fanti" />
          <Cite id="de-caro" />
        </p>
        <p>
          Critics note these methods lack standard calibration for ancient linen and give broad
          estimates rather than precise dates.
        </p>
      </>
    ),
  },
];

/** YouTube embed that only loads once the visitor asks for it. */
function Video({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <div className="aspect-video overflow-hidden rounded-2xl border border-sand-200/15">
      <iframe
        src={`${src}${src.includes("?") ? "&" : "?"}autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  ) : (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="flex w-full items-center gap-3 rounded-2xl border border-sand-200/15 bg-sand-900/40 p-4 text-left transition hover:border-accent-amber/50"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-amber text-black">▶</span>
      <span>
        <span className="block text-xs uppercase tracking-[0.25em] text-sand-200/50">Watch</span>
        <span className="text-sand-50">{title}</span>
      </span>
    </button>
  );
}

export function DatingRoom() {
  const [methodId, setMethodId] = useState(methods[0].id);
  const method = methods.find((item) => item.id === methodId)!;

  return (
    <>
      <Station
        number={1}
        title="Three clocks, three answers"
        intro="Each method measures something different. Click a band to see what it says and how far to trust it."
      >
        <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 border-l border-dashed border-accent-rose/70"
              style={{ left: `${percent(30)}%` }}
            >
              <span className="absolute -top-1 left-1.5 whitespace-nowrap text-[11px] text-accent-rose">
                c. 30 CE crucifixion
              </span>
            </div>
            <div className="space-y-3 pt-6">
              {methods.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={item.id === methodId}
                  onClick={() => setMethodId(item.id)}
                  className={cn(
                    "block w-full rounded-xl py-2 text-left transition",
                    item.id === methodId ? "bg-sand-200/10" : "opacity-60 hover:opacity-100",
                  )}
                >
                  <span className="block px-2 text-sm font-semibold text-sand-50">{item.label}</span>
                  <span className="relative mt-2 block h-3">
                    {item.debatedFrom !== undefined && (
                      <span
                        className="absolute inset-y-0 rounded-full border border-dashed border-sand-200/60"
                        style={{ left: `${percent(item.debatedFrom)}%`, width: `${percent(item.start) - percent(item.debatedFrom)}%` }}
                      />
                    )}
                    <span
                      className={cn("absolute inset-y-0 rounded-full", item.color)}
                      style={{ left: `${percent(item.start)}%`, width: `${Math.max(percent(item.end) - percent(item.start), 1)}%` }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="relative mt-3 h-6 border-t border-sand-200/20 text-[11px] text-sand-200/60">
            {ticks.map((year) => (
              <span key={year} className="absolute top-1 -translate-x-1/2 whitespace-nowrap" style={{ left: `${percent(year)}%` }}>
                {tickLabel(year)}
              </span>
            ))}
          </div>
        </div>

        <div key={method.id} className="animate-[fade-in_.3s_ease-out] rounded-3xl border border-accent-amber/30 bg-accent-amber/5 p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-semibold text-sand-50">{method.label}</h3>
            <span className="text-sand-200/80">{method.range}</span>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sand-200/60">Precision: {method.precision}</p>
          <div className="mt-4 space-y-3 text-sand-200/85">{method.body}</div>
        </div>
      </Station>

      <Station
        number={2}
        title="The corner that was cut"
        intro="Everything hangs on one question: was the 1988 sample typical of the whole cloth?"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <figure className="space-y-2 md:col-span-2">
            <ZoomImage src="/images/shroud-c14-sample-1988.jpg" alt="The corner of the cloth where the 1988 radiocarbon sample was taken" />
            <figcaption className="text-sm text-sand-200/60">The sampled corner: the 1988 radiocarbon area sits beside an earlier 1973 sample.</figcaption>
          </figure>
          <figure className="space-y-2">
            <ZoomImage src="/images/shroud-rogers-cotton-fibers.webp" alt="A scientist sampling the cloth during the 1978 examination" />
            <figcaption className="text-sm text-sand-200/60">Collecting samples during the 1978 STURP examination.</figcaption>
          </figure>
        </div>
        <ContaminationCalculator />
        <DebateCard
          question="Was the sample a medieval repair?"
          supporters={
            <p>
              Chemist Raymond Rogers reported cotton, dye and chemical differences in the sample area
              that do not match the main cloth, suggesting a skilful medieval reweave that would pull
              the date forward.
              <Cite id="rogers" />
            </p>
          }
          skeptics={
            <p>
              Radiocarbon specialists later examined leftover sample material and found no evidence of
              reweaving, supporting the original 1988 result.
              <Cite id="jull" />
            </p>
          }
        />
        <Video src="https://www.youtube.com/embed/zWWYMwwV5TU" title="Radiocarbon dating and the sampling questions" />
      </Station>

      <Station
        number={3}
        title="Reading the linen itself"
        intro={
          <p>
            A 2022 study used wide-angle X-ray scattering to measure how far the linen&apos;s cellulose
            structure has broken down. Under its assumptions about storage temperature and humidity,
            the degradation was compatible with an origin in the early centuries CE.
            <Cite id="de-caro" />
          </p>
        }
      >
        <div className="grid gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-start">
          <figure className="space-y-2">
            <ZoomImage src="/images/fanti-spectroscopy-setup.jpg" alt="Giulio Fanti with a full-size replica of the Shroud" />
            <figcaption className="text-sm text-sand-200/60">Giulio Fanti, who proposed mechanical and spectroscopic dating.</figcaption>
          </figure>
          <DebateCard
            question="Can material tests overturn radiocarbon?"
            supporters={
              <p>
                Several independent material approaches point to an ancient cloth, and they do not
                depend on a single sampled corner.
              </p>
            }
            skeptics={
              <p>
                The results depend heavily on modelling centuries of unknown storage conditions, and
                the methods have little calibration against archaeological textiles. They are
                suggestive at best.
              </p>
            }
          />
        </div>
        <Video src="https://www.youtube.com/embed/IvzqGP9jZBQ?start=67&end=103" title="Material-based dating, explained" />
      </Station>
    </>
  );
}
