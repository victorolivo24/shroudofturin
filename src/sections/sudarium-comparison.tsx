"use client";
/* eslint-disable @next/next/no-img-element */

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function SudariumComparison() {
  return (
    <SectionShell id="sudarium">
      <SectionHeader
        eyebrow="Sudarium / Facecloth"
        title="The Sudarium of Oviedo"
        description="Independent cloth, shared questions."
        badgeVariant="emerald"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-sand-200/80">
          The Sudarium of Oviedo is a bloodstained cloth preserved separately from the Shroud of
          Turin for centuries. Unlike the Shroud, it bears no body image.
        </p>
        <p className="text-sand-200/80">
          Some researchers argue that bloodstain patterns on the Sudarium correspond to features
          visible on the Shroud’s face, while others caution that such comparisons rely on visual
          interpretation rather than direct measurement.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
            <h3 className="text-2xl font-semibold">What Is the Sudarium?</h3>
            <p className="text-sand-200/80">
              The Sudarium of Oviedo is a cloth measuring approximately 84 × 53 cm. It contains
              bloodstains concentrated around the nose, mouth, and beard area.
            </p>
            <p className="text-sand-200/80">
              Historical records place the Sudarium in Spain by at least the 9th century, with
              traditions tracing its movement from Jerusalem through North Africa during periods of
              upheaval in the early medieval era.
            </p>
            <img
              src="/images/sudarium-full-cloth.jpg"
              alt="Sudarium full cloth"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
          </div>

          <div className="space-y-3 rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
            <h3 className="text-2xl font-semibold">Bloodstain Concentration</h3>
            <p className="text-sand-200/80">
              The Sudarium does not show a body image, but its stains are often discussed in
              relation to facial bleeding—especially around the nose and mouth.
            </p>
            <p className="text-sand-200/80">
              This is one reason some researchers compare it to the Shroud’s facial region, while
              others caution that bloodstains are irregular and comparisons can be subjective.
            </p>
            <img
              src="/images/sudarium-blood-closeup.jpeg"
              alt="Sudarium blood close-up"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
          </div>

          <div className="space-y-3 rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
            <h3 className="text-2xl font-semibold">Visual Correspondence Comparison</h3>
            <img
              src="/images/sudarium-shroud-overlay.jpg"
              alt="Sudarium visual correspondence comparison"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
            <p className="text-sm text-sand-200/70">
              The center image illustrates how some researchers explore proportional correspondence.
              It is not a forensic overlay or a pixel-level match.
            </p>
            <p className="text-sand-200/80">
              Because the Sudarium lacks a body image, comparisons focus on orientation, relative
              spacing, and flow direction of bloodstains rather than direct measurement. These
              assessments are qualitative and remain debated.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-sand-50">
            How Researchers Interpret the Comparison
          </h3>
          <p className="text-sand-200/70">
            Three frequently cited points — and why each remains debated.
          </p>
        </div>

        <details className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-sand-50">
            Bloodstain Correspondence
          </summary>
          <div className="mt-4 grid gap-4 text-sm text-sand-200/85 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Supportive view
              </p>
              <p>
                Researchers have compared facial bloodstain patterns on the Sudarium of
                Oviedo—particularly around the nose, mouth, and beard area—with corresponding
                regions on the Shroud of Turin. Some argue that similarities in flow direction and
                relative positioning are difficult to attribute to chance, especially when
                evaluated using three-dimensional modeling techniques.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Skeptical view
              </p>
              <p>
                Critics emphasize that bloodstains are inherently irregular and that visual
                alignment can be influenced by selective emphasis on matching features. They note
                that without objective statistical criteria, assessments of “correspondence” remain
                partly subjective and sensitive to how reference points are chosen.
              </p>
            </div>
          </div>
        </details>

        <details className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-sand-50">
            Provenance and Independence
          </summary>
          <div className="mt-4 grid gap-4 text-sm text-sand-200/85 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Supportive view
              </p>
              <p>
                The Sudarium is a smaller cloth with documented presence in Spain by at least the
                9th century. Historical tradition traces its movement from Jerusalem through North
                Africa and into the Iberian Peninsula during periods of upheaval in the early
                medieval era. Supporters argue that this independent and early provenance
                strengthens the case that the cloth predates the Shroud’s undisputed appearance in
                14th-century France.
              </p>
              <img
                src="/images/suarium-provenance-map.jpg"
                alt="Sudarium provenance map"
                loading="lazy"
                className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
              />
              <p className="mt-2 text-xs text-sand-200/70">
                Documented stain structure of the Sudarium of Oviedo
              </p>
              <p className="text-xs text-sand-200/70">
                This diagram reflects scholarly attempts to categorize and analyze the Sudarium’s
                bloodstains. It illustrates how specific stain regions are identified and referenced
                in comparative studies, not evidence of the cloth’s historical journey.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Skeptical view
              </p>
              <p>
                Historians caution that much of the early itinerary relies on later traditions
                rather than continuous contemporary documentation. Gaps in the written record make
                it difficult to verify whether references consistently describe the same object, or
                whether later associations were retroactively applied.
              </p>
            </div>
          </div>
        </details>

        <details className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-sand-50">
            Multiple Features Considered Together
          </summary>
          <div className="mt-4 grid gap-4 text-sm text-sand-200/85 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Supportive view
              </p>
              <p>
                Advocates point to a convergence of multiple features—such as nasal bleeding,
                mouth-area stains, and asymmetrical facial flows—that appear compatible when the
                two cloths are compared. They argue that the cumulative presence of several
                compatible features is more suggestive than any single match considered in
                isolation.
              </p>
              <h4 className="mt-3 text-sm font-semibold text-sand-100">
                Reported Blood Group Findings
              </h4>
              <p>
                Some studies have reported that bloodstains on both the Shroud of Turin and the
                Sudarium of Oviedo exhibit immunological reactions consistent with blood group AB.
                Supporters argue that this shared result is notable because AB is relatively
                uncommon in the general population.
              </p>
              <p>
                Similar AB-type findings have also been reported in studies of several Eucharistic
                miracle hosts, though these cases involve different materials and investigative
                conditions.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Skeptical view
              </p>
              <p>
                Skeptics respond that emphasizing a subset of compatible features risks
                confirmation bias. They note that many potential non-matching or ambiguous areas
                receive less attention, and that without predefined criteria for inclusion, the
                overall significance of the observed similarities remains open to debate.
              </p>
            </div>
          </div>
        </details>
      </div>
      <div className="border-t border-sand-200/40 pt-6 text-center text-base font-medium leading-relaxed text-sand-50/90 sm:text-lg">
        <p>
          So, if this suggests the Shroud may be related to Jesus, what does the Church say about
          this?
        </p>
      </div>
    </SectionShell>
  );
}
