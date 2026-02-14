"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

const cards = {
  radiocarbon: {
    title: "Radiocarbon Dating (1988)",
    date: "1260–1390 CE",
    precision: "High",
    body: [
      "In 1988, a small sample from one corner of the cloth was independently dated by laboratories in Oxford, Zürich, and Tucson. All three reported a medieval date range of 1260–1390 CE.",
      "Supporters emphasize the agreement between labs and the reliability of radiocarbon dating under controlled conditions. Critics note that only one region was sampled and argue that textile repair, contamination, or material heterogeneity could affect the result.",
    ],
  },
  historical: {
    title: "Historical Documentation",
    date: "c.1350 CE–present (secure)",
    precision: "Moderate",
    body: [
      "Written records and provenance references place the Shroud securely in medieval Europe beginning in the mid-14th century. Earlier references have been proposed but remain debated among historians.",
      "Supporters argue that consistent documentation after 1350 CE establishes a reliable historical baseline. Skeptics caution that gaps before this period limit how far back the record can be extended.",
    ],
  },
  material: {
    title: "Material-Based Estimates",
    date: "c.100 BCE–300 CE",
    precision: "Low",
    body: [
      "Some researchers have proposed age estimates based on spectroscopic, mechanical, and chemical analyses of linen aging. These approaches aim to infer age from material properties rather than radioactive decay.",
      "Critics note that such methods lack standardized calibration for ancient linen and currently produce broad estimates rather than precise dates.",
    ],
  },
};

type CardKey = keyof typeof cards;

export function DatingLab() {
  const [activeKey, setActiveKey] = useState<CardKey>("radiocarbon");
  const active = cards[activeKey];

  return (
    <SectionShell id="dating-lab">
      <SectionHeader
        eyebrow="Dating Lab"
        title="Dating the Cloth"
        description="How different scientific and historical methods attempt to determine when the linen originated — and where their limits lie."
        badgeVariant="amber"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-sand-200/80">
          Researchers use several independent methods to estimate the Shroud’s age. Each approach
          measures something different and carries different limits.
        </p>
        <p className="text-sm text-sand-200/70 mb-12">
          Click each dot to reveal the method summary below.
        </p>

        <div className="mx-auto w-full max-w-[900px] space-y-6">
          <div className="space-y-3">
            <div className="relative h-px bg-sand-200/40">
              <div className="absolute -top-4 left-[26%] h-9 w-px bg-sand-200/40">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-sand-200/20 bg-sand-900/80 px-2 py-0.5 text-[10px] text-sand-100/80">
                  c. 30 CE — Crucifixion of Jesus
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveKey("material")}
                className="group absolute -top-2 left-[27.5%] h-4 w-4 rounded-full bg-sand-50"
                title={"Material-based estimates\nBroad indicators consistent with the crucifixion era\nLow precision"}
                aria-label="Material-based estimates. Broad indicators consistent with the crucifixion era. Low precision."
              />
              <button
                type="button"
                onClick={() => setActiveKey("radiocarbon")}
                className="group absolute -top-2 left-[70%] h-4 w-4 rounded-full bg-sand-50"
                title={"Radiocarbon dating (1988)\nPlaces sample in the medieval period\nHigh precision, limited sampling"}
                aria-label="Radiocarbon dating (1988). Places sample in the medieval period. High precision, limited sampling."
              />
              <button
                type="button"
                onClick={() => setActiveKey("historical")}
                className="group absolute -top-2 left-[72%] h-4 w-4 rounded-full bg-sand-50"
                title={"Secure historical documentation\nMid-14th century onward\nModerate precision"}
                aria-label="Secure historical documentation. Mid-14th century onward. Moderate precision."
              />
            </div>
            <div className="flex justify-between text-xs text-sand-200/70">
              <span>100 BCE</span>
              <span>0</span>
              <span>1000 CE</span>
              <span>1400 CE</span>
              <span>2000 CE</span>
            </div>
          </div>

          <div className="rounded-2xl border border-sand-200/10 bg-sand-900/20 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-sand-100">{active.title}</h3>
              <span className="text-sm text-sand-200/70">{active.date}</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-sand-200/60">
              Precision: {active.precision}
            </div>
            <div className="mt-4 space-y-3 text-sand-200/80">
              {active.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {activeKey === "radiocarbon" && (
              <details className="mt-4 rounded-xl border border-sand-200/10 bg-sand-900/40 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-sand-50">
                  Learn more
                </summary>
                <div className="mt-3 space-y-3 text-sand-200/80">
                  <p>
                    The 1988 tests were performed by laboratories in Oxford, Zürich, and Tucson.
                    The sampling location, repair hypotheses, and contamination risks remain central
                    to ongoing discussion.
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-sand-200/15">
                    <iframe
                      src="https://www.youtube.com/embed/zWWYMwwV5TU"
                      title="Radiocarbon dating and sampling questions"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <img
                    src="/images/shroud-c14-sample-1988.jpg"
                    alt="1988 radiocarbon sample reference"
                    loading="lazy"
                    className="w-full rounded-2xl border border-sand-200/15 object-cover"
                  />
                  <p>
                    Some textile specialists argue that the sampled corner may not represent the
                    full cloth, raising questions about repairs and material heterogeneity.
                  </p>
                </div>
              </details>
            )}
            {activeKey === "material" && (
              <details className="mt-4 rounded-xl border border-sand-200/10 bg-sand-900/40 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-sand-50">
                  Learn more
                </summary>
                <div className="mt-3 space-y-3 text-sand-200/80">
                  <p>
                    Alternative dating proposals include spectroscopic, mechanical, and chemical
                    analyses of linen aging. These methods attempt to estimate age based on
                    material properties rather than radioactive decay.
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-sand-200/15">
                    <iframe
                      src="https://www.youtube.com/embed/IvzqGP9jZBQ?start=67&end=103"
                      title="Material-based dating discussion"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-sand-100">
                    Wide-Angle X-ray Scattering (2022)
                  </h4>
                  <p>
                    A 2022 study applied Wide-Angle X-ray Scattering (WAXS) to examine the
                    structural aging of cellulose fibers in the linen. The authors reported that
                    the measured degradation was compatible with an origin in the early centuries
                    CE under specific environmental assumptions.
                  </p>
                  <p>
                    Supporters view this as additional material evidence potentially consistent
                    with an ancient cloth. Critics note that the method depends heavily on modeling
                    long-term storage conditions and limited calibration for archaeological
                    textiles. As a result, the findings are considered suggestive but remain
                    debated.
                  </p>
                </div>
              </details>
            )}
          </div>

        </div>
      </div>
      <div className="border-t border-sand-200/40 pt-6 text-center text-base font-medium leading-relaxed text-sand-50/90 sm:text-lg">
        <p>
          Dating methods help frame when the cloth may originate, but they do not address whether
          its features correspond to a specific historical event or burial context.
        </p>
        <p className="mt-3 text-lg font-medium text-sand-50/90">
          That question leads to a related line of inquiry: whether another ancient cloth—the
          Sudarium of Oviedo—shows patterns that meaningfully correspond to the Shroud.
        </p>
      </div>
    </SectionShell>
  );
}
