"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function ImageFormationSection() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(
    null,
  );
  const handleDetailsClick = (event: React.MouseEvent<HTMLDetailsElement>) => {
    const details = event.currentTarget;
    const target = event.target as HTMLElement;
    if (details.open && !target.closest("summary")) {
      details.open = false;
    }
  };
  return (
    <SectionShell id="image-formation">
      <SectionHeader
        eyebrow="Image Formation"
        title="How the Image Is Evaluated"
        description="Comparing proposed image-formation explanations against observed physical properties of the cloth."
      />
      <div className="mb-6 space-y-4 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-200/80">
        <p className="text-xs uppercase tracking-[0.35em] text-sand-200/60">
          Proposed Image-Formation Models
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-sand-50">Pigment / Paint</p>
            <p className="text-sm">
              The image was created using pigments, dyes, or paints applied to the cloth by human
              hands, similar to artistic techniques.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand-50">Contact / Bas-Relief</p>
            <p className="text-sm">
              The image formed through physical contact between the cloth and a three-dimensional
              object or body, possibly using pressure or a low-relief model.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand-50">Chemical Surface Reaction</p>
            <p className="text-sm">
              The image resulted from chemical interactions between the linen and external
              substances (such as gases, heat, or decomposition products) affecting the cloth’s
              surface fibers.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-sand-50">
              Non-Contact Energy-Based Proposals
            </p>
            <p className="text-sm">
              The image formed through a brief, non-contact process involving energy or radiation
              that altered the cloth in a distance-dependent way without physical touch. Such a
              flash of energy could suggest a ressurection.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-6 text-sand-200/80">
        The table below summarizes how different proposed image-formation explanations are commonly
        discussed in relation to observed properties of the image. The indicators are qualitative
        and reflect areas of agreement, debate, and limitation in the literature.
      </div>
      <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
          <table className="image-formation-table w-full border-separate border-spacing-0 text-left text-sm text-sand-200/80">
            <thead className="sticky top-20 z-10 bg-sand-900/90 backdrop-blur">
              <tr className="text-xs uppercase tracking-[0.25em] text-sand-200/60">
                <th className="border-b border-sand-200/15 bg-sand-900/90 p-4">Property</th>
                <th className="border-b border-sand-200/15 bg-sand-900/90 p-4">Pigment</th>
                <th className="border-b border-sand-200/15 bg-sand-900/90 p-4">Contact</th>
                <th className="border-b border-sand-200/15 bg-sand-900/90 p-4">Chemical</th>
                <th className="border-b border-sand-200/15 bg-sand-900/90 p-4">Energy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="border-b border-sand-200/10 p-4">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: "/images/shroud-linen-fibers.jpg",
                        alt: "STURP microscopy reference",
                      })
                    }
                    className="mb-3 block w-full cursor-zoom-in"
                  >
                    <img
                      src="/images/shroud-linen-fibers.jpg"
                      alt="STURP microscopy reference"
                      loading="lazy"
                      className="w-full rounded-xl border border-sand-200/15 object-cover"
                    />
                  </button>
                  Microscopic analysis shows the image coloration is confined to the outermost
                  fibrils of the linen threads, with no penetration into the fibers and no evidence
                  of binders or pigments.
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Pigments and paints typically penetrate fibers or leave detectable residues.
                      This model struggles to account for the extreme superficiality observed.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Contact-based coloration could affect surface fibers, but maintaining uniform
                      superficiality across the image without pressure artifacts remains difficult.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Some chemical processes could theoretically discolor only surface fibrils,
                      though reproducing the uniformity and resolution observed has proven
                      challenging.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✔</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      These models propose a brief, non-contact process that could affect only the
                      outer fibrils, aligning with the observed superficiality, though the mechanism
                      remains speculative.
                    </p>
                  </details>
                </td>
              </tr>
              <tr className="align-top">
                <td className="border-b border-sand-200/10 p-4">
                  The Shroud image behaves like a photographic negative, where light and dark values
                  are reversed relative to a normal visual image.
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Producing a coherent negative image intentionally would require advanced
                      understanding of photographic principles unknown in historical contexts.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Contact methods typically produce positive images and do not naturally result
                      in tonal inversion across an entire figure.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Certain chemical gradients could theoretically invert tones, but no
                      demonstrated process accounts for the consistent negative behavior.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✔</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Some proposed models suggest intensity-based encoding that could naturally
                      result in negative tonal relationships, though empirical confirmation is
                      lacking.
                    </p>
                  </details>
                </td>
              </tr>
              <tr className="align-top">
                <td className="border-b border-sand-200/10 p-4">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: "/images/shroud-vp8-3d-render.jpg",
                        alt: "VP-8 3D rendering",
                      })
                    }
                    className="mb-3 block w-full cursor-zoom-in"
                  >
                    <img
                      src="/images/shroud-vp8-3d-render.jpg"
                      alt="VP-8 3D rendering"
                      loading="lazy"
                      className="w-full rounded-xl border border-sand-200/15 object-cover"
                    />
                  </button>
                  When processed by a VP-8 image analyzer, the Shroud image produces a coherent
                  three-dimensional relief, with brightness correlating to cloth-to-body distance.
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Paintings and drawings do not encode distance information in a way that
                      generates natural 3D relief when analyzed.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Low-relief models can produce limited depth effects, but reproducing the full
                      range and smooth gradients seen in the Shroud image remains debated.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Chemical diffusion might create gradients, though linking them consistently to
                      three-dimensional spatial information is unresolved.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✔</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      These models propose distance-dependent intensity effects that could
                      theoretically encode depth, though no reproducible experiment has
                      demonstrated this at scale.
                    </p>
                  </details>
                </td>
              </tr>
              <tr className="align-top">
                <td className="border-b border-sand-200/10 p-4">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: "/images/shroud-reverse-side-face.jpg",
                        alt: "Reverse-side image",
                      })
                    }
                    className="mb-3 block w-full cursor-zoom-in"
                  >
                    <img
                      src="/images/shroud-reverse-side-face.jpg"
                      alt="Reverse-side image"
                      loading="lazy"
                      className="w-full rounded-xl border border-sand-200/15 object-cover"
                    />
                  </button>
                  A faint image is present on the reverse side of the cloth, with similar alignment
                  but much lower intensity, a phenomenon sometimes referred to as “double
                  superficiality.”
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Paint or pigment transfer would be expected to show stronger penetration or
                      bleed-through, which is not observed.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Direct contact models struggle to explain image formation on both sides without
                      significant distortion or loss of detail.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Some chemical processes could affect both sides of a thin fabric, though producing
                      aligned front-and-back imagery remains difficult to model.
                    </p>
                  </details>
                </td>
                <td className="border-b border-sand-200/10 p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Non-contact mechanisms could plausibly influence both sides simultaneously, but
                      the specifics of such processes are unknown.
                    </p>
                  </details>
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: "/images/shroud-bas-relief-model.jpg",
                        alt: "Bas-relief hypothesis model",
                      })
                    }
                    className="mb-3 block w-full cursor-zoom-in"
                  >
                    <img
                      src="/images/shroud-bas-relief-model.jpg"
                      alt="Bas-relief hypothesis model"
                      loading="lazy"
                      className="w-full rounded-xl border border-sand-200/15 object-cover"
                    />
                  </button>
                  High-resolution studies have not identified directional brush strokes, tool
                  marks, or layering patterns typical of artistic techniques.
                </td>
                <td className="p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✖</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Artistic application normally leaves detectable directional or compositional traces,
                      which are notably absent.
                    </p>
                  </details>
                </td>
                <td className="p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Contact methods could avoid brush marks, but controlling image resolution and tonal
                      consistency remains problematic.
                    </p>
                  </details>
                </td>
                <td className="p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">◐</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      Chemical processes could avoid tool marks entirely, though controlling image
                      boundaries is difficult.
                    </p>
                  </details>
                </td>
                <td className="p-4">
                  <details onClick={handleDetailsClick}>
                    <summary className="list-none cursor-pointer text-lg">✔</summary>
                    <p className="mt-2 text-xs text-sand-200/70">
                      These models do not rely on physical tools and therefore do not predict brush or
                      contact artifacts.
                    </p>
                  </details>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sand-200/80">
            Each proposed explanation accounts for some observed properties of the image, but none
            accounts for all of them simultaneously. This mismatch between observation and
            explanation is why the question of image formation remains open.
          </p>
        </div>
        <aside className="sticky top-20 h-fit rounded-2xl border border-sand-200/10 bg-sand-900/30 p-4 text-xs text-sand-200/80">
          <p className="text-sm font-semibold text-sand-50">How to read this table</p>
          <ul className="mt-3 space-y-2">
            <li>✔ explains this property well</li>
            <li>◐ partially accounts for this property</li>
            <li>✖ struggles to explain this property</li>
          </ul>
          <p className="mt-3 text-sand-200/70">Click any cell to read a short explanation.</p>
        </aside>
      </div>
      <style jsx>{`
        .image-formation-table details {
          border: 1px solid rgba(237, 225, 208, 0.12);
          border-radius: 12px;
          padding: 8px 12px;
          text-align: center;
          background: rgba(18, 24, 22, 0.35);
          transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .image-formation-table details:hover,
        .image-formation-table details:focus-within {
          border-color: rgba(237, 225, 208, 0.35);
          box-shadow: 0 0 0 2px rgba(237, 225, 208, 0.15);
          transform: translateY(-1px);
        }
        .image-formation-table summary {
          outline: none;
        }
        .image-formation-table summary::marker {
          content: "";
        }
        .image-formation-table summary::-webkit-details-marker {
          display: none;
        }
        .image-formation-table details:not([open]) summary {
          animation: pulse 2.8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }
      `}</style>
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
