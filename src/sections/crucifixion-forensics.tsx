"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function CrucifixionForensics() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(
    null,
  );
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
        <div className="space-y-8">
          <div className="hidden items-center gap-6 border-b border-black/10 pb-6 text-sm uppercase tracking-[0.3em] text-sand-200/60 md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <span>Injury</span>
            <span>Shroud Observation</span>
            <span>Historical Context</span>
            <span>Why This Matters</span>
          </div>

          <div className="grid gap-6 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h3 className="mb-3 text-2xl font-semibold text-sand-50">Wrist Nail Wounds</h3>
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/images/crucifixion-wrist-vs-palm-diagram.jpg",
                    alt: "Wrist vs palm nailing diagram",
                  })
                }
                className="block w-full cursor-zoom-in"
              >
                <img
                  src="/images/crucifixion-wrist-vs-palm-diagram.jpg"
                  alt="Wrist vs palm nailing diagram"
                  loading="lazy"
                  className="w-full rounded-2xl border border-sand-200/15 object-contain"
                />
              </button>
            </div>
            <p className="text-sand-200/80">
              Blood flows emerge from the wrist area rather than the palms. The direction and pattern
              of the stains suggest gravity-driven movement while the arms were extended.
            </p>
            <p className="text-sand-200/80">
              Medical experiments and anatomical studies indicate that nails driven through the palms
              are unlikely to support the weight of a suspended body, whereas nails placed through the
              wrist region can bear such loads.
            </p>
            <p className="text-sand-200/80">
              This placement aligns with practical constraints of crucifixion and differs from many
              medieval artistic depictions, which typically show nails through the palms.
            </p>
          </div>

          <div className="grid gap-6 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h3 className="mb-3 text-2xl font-semibold text-sand-50">Back Scourge Marks</h3>
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/images/roman-flagrum.jpg",
                    alt: "Roman flagrum reference",
                  })
                }
                className="block w-full cursor-zoom-in"
              >
                <img
                  src="/images/roman-flagrum.jpg"
                  alt="Roman flagrum reference"
                  loading="lazy"
                  className="w-full rounded-2xl border border-sand-200/15 object-contain"
                />
              </button>
            </div>
            <p className="text-sand-200/80">
              The back of the image shows numerous small, paired marks distributed across the
              shoulders, back, and legs. The pattern suggests repeated impacts from a multi-thonged
              instrument.
            </p>
            <p className="text-sand-200/80">
              Roman sources describe scourging as a common prelude to crucifixion, often carried out
              using a flagrum — a whip with weighted ends capable of producing clustered wounds.
            </p>
            <p className="text-sand-200/80">
              The distribution and repetition of these marks are consistent with historical
              descriptions of Roman scourging practices.
            </p>
          </div>

          <div className="grid gap-6 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h3 className="mb-3 text-2xl font-semibold text-sand-50">Scalp Puncture Wounds</h3>
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/images/crown-of-thorns-wound-diagram.jpg",
                    alt: "Crown of thorns wound pattern",
                  })
                }
                className="block w-full cursor-zoom-in"
              >
                <img
                  src="/images/crown-of-thorns-wound-diagram.jpg"
                  alt="Crown of thorns wound pattern"
                  loading="lazy"
                  className="w-full rounded-2xl border border-sand-200/15 object-contain"
                />
              </button>
            </div>
            <p className="text-sand-200/80">
              Multiple puncture wounds are visible across the scalp, with blood flows extending in
              different directions. The injuries appear to cover the top and back of the head rather
              than forming a single circular band.
            </p>
            <p className="text-sand-200/80">
              Roman soldiers are recorded as mocking condemned individuals, sometimes using improvised
              objects. A cap-like arrangement of sharp material would be consistent with such
              treatment.
            </p>
            <p className="text-sand-200/80">
              The wound pattern differs from later artistic traditions depicting a simple wreath,
              suggesting a more irregular source of injury.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h3 className="mb-3 text-2xl font-semibold text-sand-50">Foot Wounds</h3>
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/images/jehohanan-heel-bone-nail.png",
                    alt: "Jehohanan heel bone nail",
                  })
                }
                className="block w-full cursor-zoom-in"
              >
                <img
                  src="/images/jehohanan-heel-bone-nail.png"
                  alt="Jehohanan heel bone nail"
                  loading="lazy"
                  className="w-full rounded-2xl border border-sand-200/15 object-contain"
                />
              </button>
            </div>
            <p className="text-sand-200/80">
              Bloodstains appear in the foot region of the dorsal image, indicating at least one
              puncture wound consistent with nailing during suspension.
            </p>
            <p className="text-sand-200/80">
              Archaeological findings and historical accounts indicate that Roman execution methods
              sometimes involved nailing the feet, either separately or together.
            </p>
            <p className="text-sand-200/80">
              These marks align with known variations in Roman crucifixion techniques and provide
              anatomical context for how the body may have been positioned.
            </p>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-sand-200/20 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full border border-sand-200/30 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sand-50"
              onClick={() => setLightbox(null)}
            >
              Close
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
