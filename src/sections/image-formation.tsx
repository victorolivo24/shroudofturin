"use client";
/* eslint-disable @next/next/no-img-element */

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { imageFormationHypotheses } from "@/data/labs";

export function ImageFormationSection() {
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
            When processed by a VP-8 image analyzer, the Shroud’s grayscale values translate
            into a natural 3D relief, indicating that brightness correlates with distance from
            the cloth. The VP-8 height map behaves like a pseudo topography derived from
            intensity curves rather than artist-applied shading.
          </p>
          <p className="text-sand-200/80">
            Researchers debate whether this relief implies contact with an actual body or a
            carefully crafted bas-relief model, but the effect remains unlike ordinary
            paintings. Advocates cite the nuance of the depth map, while skeptics note that
            controlled bas-relief casts can produce similar gradient-based encodings.
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
            formation process that affected both surfaces. When backing cloths were removed in
            2002, researchers reported an extremely faint image of the face on the reverse
            side of the linen, a phenomenon called "double superficiality" [20].
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
      <div className="grid gap-8">
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
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
