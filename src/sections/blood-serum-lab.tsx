"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function BloodSerumLab() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(
    null,
  );
  return (
    <SectionShell id="blood-lab">
      <SectionHeader
        eyebrow="Blood Lab"
        title="Blood & Chemistry"
        description="Bloodstains, ultraviolet imaging, and chemical observations—and how they are interpreted."
        badgeVariant="emerald"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 3 — BLOOD &amp; SERUM ANALYSIS
        </p>
        <p className="text-sand-200/80">
          This section follows the visible bloodstains, ultraviolet responses, and chemistry notes in
          a single narrative flow.
        </p>
        <p className="mt-6 text-sm italic text-sand-200/60">
          Researchers first focus on what is directly visible on the cloth.
        </p>
        <h3 className="text-lg font-semibold text-sand-100">Observed Blood Flow</h3>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div>
        <button
          type="button"
          onClick={() =>
            setLightbox({
              src: "/images/shroud-blood-side-closeup.png",
              alt: "Blood flow on the side",
            })
          }
          className="block w-full cursor-zoom-in"
        >
          <img
            src="/images/shroud-blood-side-closeup.png"
            alt="Blood flow on the side"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </button>
          </div>
          <div className="space-y-4 text-sand-200/80">
            <p>
              Distinct bloodstains are visible on the face, arms, and side of the body image. The
              direction and shape of these flows suggest movement influenced by gravity rather than
              random smearing.
            </p>
            <p>
              On the arms, blood appears to run downward along the forearms, consistent with extended
              limbs held at an angle. A prominent flow on the side of the torso shows a mixture of darker
              and lighter components, suggesting separation during bleeding rather than later application.
            </p>
            <p>
              Researchers note that these patterns resemble blood behavior observed on a suspended body,
              though interpretation depends on assumptions about posture, timing, and cloth contact. As a
              result, the stains are studied as physical observations first, before broader conclusions
              are drawn.
            </p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-sand-100">Ultraviolet Fluorescence</h3>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div>
        <button
          type="button"
          onClick={() =>
            setLightbox({
              src: "/images/shroud-uv-halo-closeup.png",
              alt: "Ultraviolet fluorescence serum halos",
            })
          }
          className="block w-full cursor-zoom-in"
        >
          <img
            src="/images/shroud-uv-halo-closeup.png"
            alt="Ultraviolet fluorescence serum halos"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-contain"
          />
        </button>
          </div>
          <div className="space-y-4 text-sand-200/80">
            <p>
              When photographed under ultraviolet illumination, areas surrounding several bloodstains
              fluoresce more strongly than the surrounding cloth. These regions are not visible under
              normal lighting conditions.
            </p>
            <p>
              Researchers refer to these features as “serum halos,” reflecting the separation of blood
              components as the liquid portion of blood spread slightly beyond the denser red cells while
              drying. Similar effects are documented in modern forensic contexts when blood contacts porous
              materials.
            </p>
            <p>
              Supporters argue that the presence and distribution of these halos are consistent with
              natural blood transfer and drying on linen. Skeptics note that fluorescence alone does not
              establish timing or cause, and that chemical aging, environmental exposure, or later handling
              could influence how materials respond under ultraviolet light.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm italic text-sand-200/60">
          To understand why these visual features are discussed, some background in blood chemistry is necessary.
        </p>
        <h3 className="text-lg font-semibold text-sand-100">Bilirubin and Blood Color</h3>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div>
        <button
          type="button"
          onClick={() =>
            setLightbox({
              src: "/images/bilirubin-trauma-comparison.png",
              alt: "Bilirubin trauma comparison",
            })
          }
          className="block w-full cursor-zoom-in"
        >
          <img
            src="/images/bilirubin-trauma-comparison.png"
            alt="Bilirubin trauma comparison"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-contain"
          />
        </button>
          </div>
          <div className="space-y-4 text-sand-200/80">
            <p>
              Chemical analyses identified unusually high levels of bilirubin, a breakdown product of
              hemoglobin that increases in cases of severe physical trauma. Elevated bilirubin can keep
              blood looking redder than expected as it ages.
            </p>
            <p>
              Researchers suggest extreme stress, injury, and shock prior to death could account for this
              profile, potentially explaining why some stains appear relatively red.
            </p>
            <p>
              Skeptics caution that bilirubin levels in ancient samples are difficult to interpret and may
              be affected by environment, aging, and linen chemistry.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm italic text-sand-200/60">
          At this point, interpretation begins to diverge.
        </p>
        <h3 className="text-lg font-semibold text-sand-100">Where Interpretation Diverges</h3>
        <p className="text-sand-200/80">
          <strong>Supportive interpretation:</strong> Microscopic examination suggests that the body
          image does not extend beneath many of the bloodstains. Supporters argue this sequencing is
          difficult to reconcile with painting or contact-based image formation, since pigments or
          dyes would be expected to overlap or obscure existing bloodstains. They view the apparent
          separation as evidence that the image formed through a process that did not disturb the
          dried blood.
        </p>
        <p className="text-sand-200/80">
          <strong>Skeptical interpretation:</strong> Skeptics respond that the observed layering does
          not require an extraordinary explanation. Non-artistic chemical or physical processes—such
          as selective oxidation, dehydration, or diffusion effects—could produce similar results
          without implying a specific image-forming mechanism. The precise cause of the image, and its
          relationship to the bloodstains, remains unresolved.
        </p>
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
      <div className="border-t border-sand-200/40 pt-6 text-center text-lg font-medium text-sand-50/90">
        <p>
          The bloodstains and chemical observations raise important questions, but they do not explain
          how the body image itself formed on the cloth.
        </p>
        <p className="mt-3 text-lg font-medium text-sand-50/90">
          The next section examines the physical properties of the image and the competing explanations
          proposed to account for its appearance.
        </p>
      </div>
    </SectionShell>
  );
}
