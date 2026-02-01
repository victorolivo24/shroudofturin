"use client";
/* eslint-disable @next/next/no-img-element */

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function CrucifixionForensics() {
  return (
    <SectionShell id="crucifixion-forensics">
      <SectionHeader
        eyebrow="Crucifixion Forensics"
        title="Roman methods, wounds, and anatomical debates."
        description="Interactively compare wrist-vs-hand discussions, scourging data, and the archaeological record."
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 2 — CRUCIFIXION FORENSICS
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Wrist vs. Palm Nailing</h3>
          <p className="text-sand-200/80">
            The wounds on the Shroud appear in the wrist area rather than the palms.
            Experimental studies demonstrate that nails through the palm cannot support body
            weight, whereas the wrist anatomy can. This contradicts medieval artistic
            convention but aligns with anatomical reality.
          </p>
          <img
            src="/images/crucifixion-wrist-vs-palm-diagram.jpg"
            alt="Wrist vs palm nailing diagram"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Roman Scourging</h3>
          <p className="text-sand-200/80">
            The body displays over 100 dumbbell-shaped wounds consistent with the Roman
            flagrum — a whip tipped with metal or bone. The distribution suggests a
            Roman-style scourging prior to crucifixion.
          </p>
          <img
            src="/images/roman-flagrum.jpg"
            alt="Roman flagrum reference"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Crown of Thorns</h3>
          <p className="text-sand-200/80">
            Puncture wounds appear across the scalp rather than forming a circular band,
            suggesting a cap-like placement of thorns rather than a crown.
          </p>
          <img
            src="/images/crown-of-thorns-wound-diagram.jpg"
            alt="Crown of thorns wound pattern"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Archaeological Evidence: Jehohanan</h3>
          <p className="text-sand-200/80">
            In 1968, archaeologists discovered the remains of a crucified man named
            Jehohanan in Jerusalem. A nail through the heel bone provides rare physical
            confirmation of Roman crucifixion methods.
          </p>
          <img
            src="/images/jehohanan-heel-bone-nail.png"
            alt="Jehohanan heel bone nail"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-2xl border border-sand-200/15 object-contain"
          />
        </div>
      </div>
    </SectionShell>
  );
}
