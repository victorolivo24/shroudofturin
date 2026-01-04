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
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { imageFormationHypotheses } from "@/data/labs";
import {
  PLACEHOLDER_SHROUD,
  PLACEHOLDER_SUDARIUM,
  PLACEHOLDER_UV,
} from "@/data/placeholders";

const comparisonModes = [
  { id: "negative", label: "Normal vs Negative" },
  { id: "relief", label: "Normal vs 3D Depth Map" },
];

export function ImageFormationSection() {
  const [comparison, setComparison] = useState(comparisonModes[0].id);

  return (
    <SectionShell id="image-formation">
      <SectionHeader
        eyebrow="Image Formation"
        title="Explore surface depth, negatives, and competing hypotheses."
        description="Toggle between image states, scan the superficiality, and compare explanations from both advocates and skeptics."
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 4 — IMAGE FORMATION
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">STURP Microscopy</h3>
          <p className="text-sand-200/80">
            The 1978 Shroud of Turin Research Project (STURP) concluded the image is not the
            result of paint, dye, or pigment. The coloration exists only on the outermost
            fibrils.
          </p>
          <img
            src="/images/shroud-linen-fibers.jpg"
            alt="STURP microscopy reference"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Three-Dimensional Encoding</h3>
          <p className="text-sand-200/80">
            When processed by a VP-8 image analyzer, the Shroud’s image produces coherent 3D
            relief — unlike ordinary photographs or paintings.
          </p>
          <img
            src="/images/shroud-vp8-3d-render.jpg"
            alt="VP-8 3D rendering"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Reverse-Side Image</h3>
          <p className="text-sand-200/80">
            A faint image exists on the reverse side of the cloth, suggesting an image
            formation process that affected both surfaces.
          </p>
          <img
            src="/images/shroud-reverse-side-face.jpg"
            alt="Reverse-side image"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Bas-Relief Hypothesis</h3>
          <p className="text-sand-200/80">
            Some researchers propose that a low-relief model could reproduce aspects of the
            image, though this remains debated.
          </p>
          <img
            src="/images/shroud-bas-relief-model.jpg"
            alt="Bas-relief hypothesis model"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="amber">Comparison Viewer</Badge>
            <CardDescription>Switch between imaging modes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {comparisonModes.map((mode) => (
                <Button
                  key={mode.id}
                  variant={comparison === mode.id ? "default" : "outline"}
                  onClick={() => setComparison(mode.id)}
                >
                  {mode.label}
                </Button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-sand-200/15">
                <Image
                  src={PLACEHOLDER_SHROUD}
                  alt="Normal placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-3xl border border-sand-200/15">
                <Image
                  src={
                    comparison === "negative"
                      ? PLACEHOLDER_SUDARIUM
                      : PLACEHOLDER_UV
                  }
                  alt="Comparison placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-sand-200/10 bg-sand-900/40 p-4 text-sm text-sand-50">
              <p>
                The body image affects only the top 0.2 microns of each linen
                fibril, with no penetration into the fibers—unlike paint or dye.
                STURP analyses concluded no pigments or binders account for the
                image [2][17].
              </p>
              <img
                src="/images/shroud-linen-fibers.jpg"
                alt="STURP microscopy of linen fibers"
                loading="lazy"
                className="mt-3 w-full rounded-2xl border border-sand-200/20 object-cover"
              />
            </div>
            <p className="text-xs text-sand-200/70">
              {/* TODO: embed relief-map video */}
              Video Placeholder: Add 3D relief map animation or scientist interview.
            </p>
            <img
              src="/images/shroud-vp8-3d-render.jpg"
              alt="VP-8 3D rendering reference"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/20 object-cover"
            />
          </CardContent>
        </Card>
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="emerald">Hypothesis Matrix</Badge>
            <CardTitle>Compare the key proposals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {imageFormationHypotheses.map((hypothesis) => (
              <div
                key={hypothesis.id}
                className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4"
              >
                <p className="text-lg font-semibold text-sand-50">
                  {hypothesis.title}
                </p>
                <div className="mt-3 grid gap-3 text-sm text-sand-200/80 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Scientific Explanation
                    </p>
                    <p>{hypothesis.science}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Skeptical Notes
                    </p>
                    <p>{hypothesis.skeptical}</p>
                    {hypothesis.id === "bas-relief" && (
                      <img
                        src="/images/shroud-bas-relief-model.jpg"
                        alt="Bas-relief hypothesis model"
                        loading="lazy"
                        className="mt-3 w-full rounded-2xl border border-sand-200/20 object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <p className="text-sm text-sand-200/80">
                When backing cloths were removed in 2002, researchers reported
                an extremely faint image of the face on the reverse side of the
                linen, a phenomenon called &quot;double superficiality&quot; [20].
              </p>
              <img
                src="/images/shroud-reverse-side-face.jpg"
                alt="Reverse-side facial image reference"
                loading="lazy"
                className="mt-3 w-full rounded-2xl border border-sand-200/20 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
