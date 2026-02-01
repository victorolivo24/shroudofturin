"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bilirubinScenarios } from "@/data/labs";

export function BloodSerumLab() {
  const [haloIntensity, setHaloIntensity] = useState(40);

  return (
    <SectionShell id="blood-lab">
      <SectionHeader
        eyebrow="Blood & Serum Lab"
        title="UV halos, bilirubin, and sequencing the blood vs image debate."
        description="Use the controls to visualize UV fluorescence, tweak bilirubin estimates, and study chemistry notes."
        badgeVariant="emerald"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 3 — BLOOD &amp; SERUM ANALYSIS
        </p>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">UV Serum Halos</h3>
            <p className="text-sand-200/80">
              Under ultraviolet light, bloodstains reveal clear serum halos — consistent with
              post-traumatic blood separation.
            </p>
          </div>
          <Card className="bg-black/40">
            <CardHeader>
              <Badge variant="amber">UV Halo Viewer</Badge>
              <CardDescription>
                Adjust the slider to see how trauma-induced bilirubin could shift hue.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="relative overflow-hidden rounded-3xl border border-sand-200/15 bg-black"
                style={{ aspectRatio: 550 / 413 }}
              >
                <Image
                  src="/images/shroud-uv-halo-closeup.png"
                  alt="UV halo fluorescence"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority={false}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle, rgba(226,102,102,${
                      haloIntensity / 120
                    }), transparent 65%)`,
                  }}
                />
              </div>
              <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-sand-200/70">
                Trauma Severity (Conceptual)
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={haloIntensity}
                  onChange={(event) => setHaloIntensity(Number(event.target.value))}
                  className="mt-2 h-1.5 cursor-pointer appearance-none rounded-full bg-sand-900"
                />
                <span className="text-[0.65rem] normal-case tracking-normal text-sand-200/60">
                  Illustrative visualization — not a direct measurement
                </span>
              </label>
              <div className="grid gap-3 sm:grid-cols-3">
                {bilirubinScenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className={`rounded-2xl border p-4 text-sm ${
                      haloIntensity >= scenario.value
                        ? "border-accent-amber text-sand-50"
                        : "border-sand-200/10 text-sand-200/70"
                    }`}
                  >
                    <p className="font-semibold">{scenario.label}</p>
                    <p>{scenario.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-sand-200/70">
                This visualization illustrates how severe trauma can increase bilirubin presence
                in blood, potentially affecting color and fluorescence under ultraviolet imaging.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Bilirubin and Trauma</h3>
          <p className="text-sand-200/80">
            Chemical analysis detected elevated bilirubin levels, a byproduct of severe
            trauma. This may explain why the blood appears reddish rather than dark brown
            despite age.
          </p>
          <div
            className="mx-auto w-full rounded-2xl border border-sand-200/15 bg-black"
            style={{ maxWidth: "550px" }}
          >
            <img
              src="/images/bilirubin-trauma-comparison.png"
              alt="Bilirubin trauma comparison"
              loading="lazy"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Blood Flow Patterns</h3>
          <p className="text-sand-200/80">
            Distinct blood flows appear on the face, arms, and side, consistent with
            gravity-driven movement in a crucified position.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <img
              src="/images/shroud-blood-side-closeup.png"
              alt="Blood flow on the side"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-200/80">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
            Blood Precedes Image Formation
          </p>
          <p className="mt-3">
            Microscopic analysis indicates that the body image does not extend beneath the
            bloodstains. This suggests the blood was transferred to the cloth first, with the
            image forming afterward by an unknown mechanism.
          </p>
          <p className="mt-3">
            Supporters argue this sequencing is inconsistent with painting or contact-based
            image formation, since pigments would be expected to overlay bloodstains. Skeptics
            counter that non-artistic chemical or physical processes could still account for
            this ordering without invoking extraordinary explanations. The precise mechanism
            remains unresolved.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
            Blood Chemistry and Optical Evidence
          </p>
          <p className="mt-3">
            Chemical tests by Heller and Adler detected unusually high levels of bilirubin, a
            hemoglobin breakdown product associated with severe trauma. This may explain why the
            blood appears reddish rather than dark brown despite age [14].
          </p>
          <p className="mt-3">
            Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent
            “serum halos” surrounding many bloodstains, indicating natural separation of blood
            components as they dried [10][13].
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
            Ongoing Forensic Debate
          </p>
          <p className="mt-3">
            A 2018 forensic bloodstain pattern study suggested that some flows might not align
            with natural bleeding on a vertical crucified body, though these interpretations remain
            debated [16].
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
