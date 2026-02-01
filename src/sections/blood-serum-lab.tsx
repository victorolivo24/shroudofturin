"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function BloodSerumLab() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(
    null,
  );
  const uvMode: "normal" | "uv" = "uv";

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
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Blood Flow Patterns</h3>
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: "/images/shroud-blood-side-closeup.png",
                  alt: "Blood flow on the side",
                })
              }
              className="mx-auto block w-full max-w-[520px] cursor-zoom-in"
            >
              <img
                src="/images/shroud-blood-side-closeup.png"
                alt="Blood flow on the side"
                loading="lazy"
                className="w-full rounded-2xl border border-sand-200/15 object-cover"
              />
            </button>
            <p className="text-sand-200/80">
              Distinct bloodstains are visible on the face, arms, and side of the body image. The
              direction and shape of these flows suggest movement influenced by gravity rather than
              random smearing.
            </p>
            <p className="text-sand-200/80">
              On the arms, blood appears to run downward along the forearms, consistent with extended
              limbs held at an angle. A prominent flow on the side of the torso shows a mixture of
              darker and lighter components, suggesting separation during bleeding rather than later
              application.
            </p>
            <p className="text-sand-200/80">
              Researchers note that these patterns resemble blood behavior observed on a suspended
              body, though interpretation depends on assumptions about posture, timing, and cloth
              contact. As a result, the stains are studied as physical observations first, before
              broader conclusions are drawn.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Ultraviolet Fluorescence (Serum Halos)</h3>
            <div className="mx-auto w-full max-w-[520px]">
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
                <div className="relative overflow-hidden rounded-3xl border border-sand-200/15 bg-black">
                  <img
                    src="/images/shroud-uv-halo-closeup.png"
                    alt="Ultraviolet fluorescence serum halos"
                    loading="lazy"
                    className="w-full object-contain transition"
                    style={{
                      filter:
                        uvMode === "normal"
                          ? "saturate(0.88) contrast(0.96) brightness(0.98)"
                          : "none",
                    }}
                  />
                </div>
              </button>
            </div>
            <p className="text-sand-200/80">
              When photographed under ultraviolet illumination, areas surrounding several bloodstains
              fluoresce more strongly than the surrounding cloth. These regions are not visible under
              normal lighting conditions.
            </p>
            <p className="text-sand-200/80">
              Researchers refer to these features as “serum halos,” reflecting the separation of blood
              components as the liquid portion of blood spread slightly beyond the denser red cells while
              drying. Similar effects are documented in modern forensic contexts when blood contacts porous
              materials.
            </p>
            <p className="text-sand-200/80">
              Supporters argue that the presence and distribution of these halos are consistent with
              natural blood transfer and drying on linen. Skeptics note that fluorescence alone does not
              establish timing or cause, and that chemical aging, environmental exposure, or later handling
              could influence how materials respond under ultraviolet light.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">
            Blood Chemistry and Coloration (Bilirubin)
          </h3>
          <button
            type="button"
            onClick={() =>
              setLightbox({
                src: "/images/bilirubin-trauma-comparison.png",
                alt: "Bilirubin trauma comparison",
              })
            }
            className="mx-auto block w-full max-w-[550px] cursor-zoom-in"
          >
            <div className="rounded-2xl border border-sand-200/15 bg-black">
              <img
                src="/images/bilirubin-trauma-comparison.png"
                alt="Bilirubin trauma comparison"
                loading="lazy"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          </button>
          <p className="text-sand-200/80">
            Chemical analyses of the bloodstains identified unusually high levels of bilirubin, a
            breakdown product of hemoglobin that increases in cases of severe physical trauma. In
            living tissue, elevated bilirubin can affect the color of blood, making it appear redder
            than expected as it ages.
          </p>
          <p className="text-sand-200/80">
            Researchers have suggested that extreme stress, injury, and shock prior to death could
            account for this chemical profile. This explanation has been proposed to help clarify why
            some bloodstains on the cloth appear relatively red rather than dark brown, despite their
            age.
          </p>
          <p className="text-sand-200/80">
            Skeptics caution that bilirubin levels can be difficult to interpret in ancient samples
            and that environmental factors, aging, and chemical interactions with linen may also
            influence coloration. As a result, bilirubin is treated as a contextual observation rather
            than a definitive indicator.
          </p>
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
      <div className="rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-200/80">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          Blood Precedes Image Formation
        </p>
        <p className="mt-3">
          Microscopic examination suggests that the body image does not extend beneath many of the
          bloodstains. Instead, the blood appears to sit on top of the image-free linen fibers,
          indicating that the blood was transferred to the cloth before the body image formed.
        </p>
        <p className="mt-3">
          Supporters of this interpretation argue that this sequencing is difficult to reconcile
          with painting or contact-based image formation, since pigments or dyes would be expected
          to overlap or obscure existing bloodstains. They view the apparent separation as evidence
          that the image formed through a process that did not disturb the dried blood.
        </p>
        <p className="mt-3">
          Skeptics respond that the observed layering does not require an extraordinary explanation.
          They note that non-artistic chemical or physical processes—such as selective oxidation,
          dehydration, or diffusion effects—could produce similar visual results without implying a
          specific image-forming mechanism. The precise cause of the image, and its relationship to
          the bloodstains, remains unresolved.
        </p>
      </div>
    </SectionShell>
  );
}
