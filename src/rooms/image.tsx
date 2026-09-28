"use client";

import { useState } from "react";
import { Station } from "@/components/exhibit/station";
import { Chip } from "@/components/exhibit/chip";
import { DebateCard } from "@/components/exhibit/debate-card";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Cite } from "@/components/shared/cite";
import { cn } from "@/lib/utils";

const theories = [
  {
    id: "pigment",
    label: "Paint or pigment",
    summary: "An artist applied pigments, dyes or paint to the cloth by hand.",
  },
  {
    id: "contact",
    label: "Contact or bas-relief",
    summary: "The cloth touched a body or a low-relief sculpture, and pressure or heat transferred the image.",
  },
  {
    id: "chemical",
    label: "Chemical reaction",
    summary: "Gases, heat or decomposition products reacted with the linen's surface fibres.",
  },
  {
    id: "energy",
    label: "Burst of energy",
    summary: "A brief, non-contact burst of energy or radiation altered the cloth; some proponents link it to the Resurrection.",
  },
] as const;

type TheoryId = (typeof theories)[number]["id"];
type Fit = "good" | "partial" | "poor";

const fitStyle: Record<Fit, { symbol: string; label: string; className: string }> = {
  good: { symbol: "✔", label: "Explains it", className: "border-accent-emerald/50 text-accent-emerald" },
  partial: { symbol: "◐", label: "Partly", className: "border-accent-amber/50 text-accent-amber" },
  poor: { symbol: "✖", label: "Struggles", className: "border-accent-rose/50 text-accent-rose" },
};

const observations: {
  fact: string;
  image?: string;
  verdicts: Record<TheoryId, [Fit, string]>;
}[] = [
  {
    fact: "Only the outermost fibrils of the linen are coloured, with no binders or pigment soaking in.",
    image: "/images/shroud-linen-fibers.jpg",
    verdicts: {
      pigment: ["poor", "Paints and pigments usually penetrate fibres or leave residues. This theory struggles with such extreme superficiality."],
      contact: ["partial", "Contact could colour surface fibres, but keeping it uniformly shallow without pressure artefacts is difficult."],
      chemical: ["partial", "Some reactions could discolour only the surface, though matching the uniformity and resolution has proven hard."],
      energy: ["good", "A brief non-contact process could affect only the outer fibrils, though the mechanism is speculative."],
    },
  },
  {
    fact: "The image behaves like a photographic negative: light and dark are reversed.",
    verdicts: {
      pigment: ["poor", "Deliberately painting a coherent negative would need photographic principles unknown at the time."],
      contact: ["poor", "Contact methods typically give positive images, not tonal reversal across a whole figure."],
      chemical: ["partial", "Some chemical gradients could in theory reverse tones, but no demonstrated process does it consistently."],
      energy: ["good", "Intensity-based encoding could naturally produce reversed tones, though this lacks empirical confirmation."],
    },
  },
  {
    fact: "Brightness encodes distance: image-analysis software turns it into a coherent 3D relief.",
    image: "/images/shroud-vp8-3d-render.jpg",
    verdicts: {
      pigment: ["poor", "Paintings and drawings do not encode distance in a way that yields a natural 3D relief."],
      contact: ["partial", "Low-relief models can produce limited depth effects; whether they match the full range is debated."],
      chemical: ["partial", "Diffusion could create gradients, but linking them consistently to 3D shape is unresolved."],
      energy: ["good", "Distance-dependent intensity could encode depth in theory, but no experiment has shown this at scale."],
    },
  },
  {
    fact: "A much fainter image, similarly aligned, appears on the back of the cloth (“double superficiality”).",
    image: "/images/shroud-reverse-side-face.jpg",
    verdicts: {
      pigment: ["poor", "Paint would be expected to penetrate or bleed through more strongly than observed."],
      contact: ["poor", "Contact struggles to form images on both faces without distortion or loss of detail."],
      chemical: ["partial", "Some processes could affect both sides of thin fabric, though aligned front-and-back images are hard to model."],
      energy: ["partial", "Non-contact mechanisms might influence both sides at once, but the specifics are unknown."],
    },
  },
  {
    fact: "High-resolution studies find no brush strokes, tool marks or layering.",
    verdicts: {
      pigment: ["poor", "Hand application normally leaves directional or compositional traces, which are absent."],
      contact: ["partial", "Contact avoids brush marks, but controlling resolution and tone consistently is problematic."],
      chemical: ["partial", "Chemistry leaves no tool marks, though controlling the image's boundaries is difficult."],
      energy: ["good", "No tools are involved, so no brush or contact marks would be expected."],
    },
  },
  {
    fact: "Has anyone reproduced the full image in a lab?",
    verdicts: {
      pigment: ["partial", "Artists can paint a similar-looking figure, but no painted copy has matched the Shroud's microscopic properties."],
      contact: ["partial", "Rubbings and bas-relief experiments produce similar-looking faces, but not every property at once."],
      chemical: ["partial", "Experiments have produced faint surface discolouration, but not a full-body image."],
      energy: ["poor", "No experiment has produced a full image this way; the mechanism remains a proposal."],
    },
  },
];

export function ImageRoom() {
  const [theoryId, setTheoryId] = useState<TheoryId>("pigment");
  const theory = theories.find((item) => item.id === theoryId)!;
  const tally = (fit: Fit) => observations.filter((item) => item.verdicts[theoryId][0] === fit).length;

  return (
    <>
      <Station
        number={1}
        title="Put a theory on trial"
        intro="Scientists agree on several strange properties of the image. Choose a theory and see how well it accounts for each one."
      >
        <div className="flex flex-wrap gap-2">
          {theories.map((item) => (
            <Chip key={item.id} active={item.id === theoryId} onClick={() => setTheoryId(item.id)}>
              {item.label}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-accent-amber/30 bg-accent-amber/5 p-5">
          <p className="max-w-xl text-sand-100">
            <span className="font-semibold">{theory.label}:</span> {theory.summary}
          </p>
          <div className="flex gap-2">
            {(Object.keys(fitStyle) as Fit[]).map((fit) => (
              <span key={fit} className={cn("rounded-full border px-3 py-1 text-sm", fitStyle[fit].className)}>
                {fitStyle[fit].symbol} {tally(fit)}
              </span>
            ))}
          </div>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {observations.map((item, index) => {
            const [fit, reason] = item.verdicts[theoryId];
            return (
              <li key={item.fact} className="flex gap-4 rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5">
                {item.image && (
                  <div className="w-24 shrink-0 sm:w-28">
                    <ZoomImage src={item.image} alt="" className="aspect-square" />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-sm text-sand-200/50">Observation {index + 1}</p>
                  <p className="font-medium text-sand-50">{item.fact}</p>
                  <div key={theoryId} className="animate-[fade-in_.3s_ease-out]">
                    <span className={cn("inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold", fitStyle[fit].className)}>
                      {fitStyle[fit].symbol} {fitStyle[fit].label}
                    </span>
                    <p className="mt-2 text-sm text-sand-200/75">{reason}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="text-sm text-sand-200/50">
          Ratings summarise how each theory is commonly discussed in the literature. They are
          qualitative, not measurements. No single theory explains everything.
        </p>
      </Station>

      <Station
        number={2}
        title="The 3D surprise"
        intro="In 1976 researchers fed a photo of the Shroud into a VP-8 Image Analyzer, a device built to turn brightness into height. Ordinary photos come out distorted. The Shroud came out as a coherent body in relief."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="space-y-2">
            <ZoomImage src="/images/shroud-vp8-3d-render.jpg" alt="VP-8 three-dimensional rendering of the Shroud face" />
            <figcaption className="text-sm text-sand-200/60">VP-8 relief of the Shroud image.</figcaption>
          </figure>
          <figure className="space-y-2">
            <ZoomImage src="/images/shroud-bas-relief-model.jpg" alt="Bas-relief model used to test the image-formation hypothesis" />
            <figcaption className="text-sm text-sand-200/60">A bas-relief model used to test the contact theory.</figcaption>
          </figure>
        </div>
        <DebateCard
          question="Is the 3D information unique to the Shroud?"
          supporters={
            <p>
              Image intensity correlates with the distance between cloth and body, something a
              painting or photograph does not encode. That points to a process linked to a real body
              shape.
              <Cite id="jackson" />
            </p>
          }
          skeptics={
            <p>
              Pressing or heating cloth over a low-relief sculpture also yields pseudo-3D shading, and
              3D modelling suggests the image may fit a bas-relief better than a real body.
              <Cite id="moraes" />
            </p>
          }
        />
      </Station>
    </>
  );
}
