"use client";
/* eslint-disable @next/next/no-img-element */

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const comparisonEntries = [
  {
    id: "alignment",
    title: "Bloodstain Alignment",
    supportLabel: "Support in literature: Moderate–High",
    supportValue: 75,
    pro: "Researchers have compared facial bloodstain patterns on the Sudarium of Oviedo—particularly around the nose, mouth, and beard area—with corresponding regions on the Shroud of Turin. Some argue that similarities in flow direction and relative positioning are difficult to attribute to chance, especially when evaluated using three-dimensional modeling techniques [27].",
    skeptical:
      "Critics emphasize that bloodstains are inherently irregular and that visual alignment can be influenced by selective emphasis on matching features. They note that without objective statistical criteria, assessments of “correspondence” remain partly subjective and sensitive to how reference points are chosen.",
  },
  {
    id: "timeline",
    title: "Provenance Timeline",
    supportLabel: "Support in literature: Moderate",
    supportValue: 60,
    pro: "The Sudarium is a smaller cloth (approximately 84 × 53 cm) with documented presence in Spain by at least the 9th century. Historical tradition traces its movement from Jerusalem through North Africa and into the Iberian Peninsula during periods of upheaval in the early medieval era [26]. Supporters argue that this independent and early provenance strengthens the case that the cloth predates the Shroud’s undisputed appearance in 14th-century France.",
    skeptical:
      "Historians caution that much of the early itinerary relies on later traditions rather than continuous contemporary documentation. Gaps in the written record make it difficult to verify whether references consistently describe the same object, or whether later associations were retroactively applied.",
  },
  {
    id: "matching",
    title: "Matching Features Across Cloths",
    supportLabel: "Support in literature: Moderate",
    supportValue: 60,
    pro: "Advocates point to a convergence of multiple features—such as nasal bleeding, mouth-area stains, and asymmetrical facial flows—that appear compatible when the two cloths are compared. They argue that the cumulative presence of several compatible features is more suggestive than any single match considered in isolation [27].",
    skeptical:
      "Skeptics respond that emphasizing a subset of compatible features risks confirmation bias. They note that many potential non-matching or ambiguous areas receive less attention, and that without predefined criteria for inclusion, the overall significance of the observed similarities remains open to debate [28].",
  },
];

export function SudariumComparison() {

  return (
    <SectionShell id="sudarium">
      <SectionHeader
        eyebrow="Sudarium / Facecloth"
        title="Compare bloodstains, provenance, and alignment debates."
        description="Use the slider to overlay the Sudarium of Oviedo with the face region of the Shroud."
        badgeVariant="emerald"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 6 — THE SUDARIUM OF OVIEDO
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">The Sudarium</h3>
          <p className="text-sand-200/80">
            A bloodstained cloth preserved in Spain since at least the 7th century,
            traditionally associated with the burial of Jesus.
          </p>
          <img
            src="/images/sudarium-full-cloth.jpg"
            alt="Sudarium full cloth"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Bloodstain Analysis</h3>
          <p className="text-sand-200/80">
            Patterns correspond to facial blood flows consistent with the Shroud image.
          </p>
          <img
            src="/images/sudarium-blood-closeup.jpeg"
            alt="Sudarium blood close-up"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Overlay Comparison</h3>
          <p className="text-sand-200/80">
            When digitally overlaid, stain patterns show notable alignment between the
            Sudarium and the Shroud.
          </p>
          <img
            src="/images/sudarium-shroud-overlay.jpg"
            alt="Sudarium overlay comparison"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Provenance and History</h3>
          <p className="text-sand-200/80">
            Historical records trace the Sudarium’s journey from Jerusalem to Spain.
          </p>
          <img
            src="/images/suarium-provenance-map.jpg"
            alt="Sudarium provenance map"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="emerald">Correspondence Review</Badge>
            <CardTitle>Comparing claims and counterpoints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {comparisonEntries.map((entry) => (
              <div
                key={entry.id}
                className="space-y-3 rounded-2xl border border-sand-200/10 bg-sand-900/40 p-5"
              >
                <div>
                  <p className="text-lg font-semibold text-sand-50">{entry.title}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-sand-200/60">
                    {entry.supportLabel}
                  </p>
                </div>
                <div className="h-2 rounded-full bg-sand-200/10">
                  <span
                    className="block h-full rounded-full bg-emerald-400/60"
                    style={{ width: `${entry.supportValue}%` }}
                    aria-label={`${entry.title} support level`}
                  />
                </div>
                <div className="grid gap-4 text-sm text-sand-200/85 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Pro interpretation
                    </p>
                    <p>{entry.pro}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                      Skeptical interpretation
                    </p>
                    <p>{entry.skeptical}</p>
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
