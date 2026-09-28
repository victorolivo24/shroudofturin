import { Station } from "@/components/exhibit/station";
import { DebateCard } from "@/components/exhibit/debate-card";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Cite } from "@/components/shared/cite";

const comparison = [
  { label: "Size", shroud: "About 4.4 × 1.1 m", sudarium: "About 84 × 53 cm" },
  { label: "Body image", shroud: "Yes, front and back", sudarium: "None, bloodstains only" },
  { label: "Blood concentrated", shroud: "Whole body", sudarium: "Nose, mouth and beard area" },
  { label: "First secure record", shroud: "France, c. 1350s", sudarium: "Spain, by the 9th century" },
  { label: "Kept today", shroud: "Turin, Italy", sudarium: "Oviedo Cathedral, Spain" },
];

export function SudariumRoom() {
  return (
    <>
      <Station
        number={1}
        title="Meet the other cloth"
        intro="The Sudarium of Oviedo is a small bloodstained cloth, kept separately from the Shroud for centuries. Tradition says it covered the same face."
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="self-start overflow-hidden rounded-3xl border border-sand-200/15">
            <table className="w-full text-left text-sm">
              <thead className="bg-sand-900/60 text-xs uppercase tracking-[0.2em] text-sand-200/60">
                <tr>
                  <th className="p-4 font-normal" />
                  <th className="p-4 font-normal">Shroud of Turin</th>
                  <th className="p-4 font-normal text-accent-amber">Sudarium of Oviedo</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-sand-200/10">
                    <th className="p-4 font-medium text-sand-200/60">{row.label}</th>
                    <td className="p-4 text-sand-100">{row.shroud}</td>
                    <td className="p-4 text-sand-50">{row.sudarium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <figure className="space-y-2">
              <ZoomImage src="/images/sudarium-full-cloth.jpg" alt="The Sudarium of Oviedo" className="aspect-[4/3]" />
              <figcaption className="text-sm text-sand-200/60">The whole Sudarium.</figcaption>
            </figure>
            <figure className="space-y-2">
              <ZoomImage src="/images/sudarium-blood-closeup.jpeg" alt="Close-up of Sudarium bloodstains" className="aspect-[4/3]" />
              <figcaption className="text-sm text-sand-200/60">Stains around the nose and mouth.</figcaption>
            </figure>
          </div>
        </div>
      </Station>

      <Station
        number={2}
        title="Do the stains line up?"
        intro="Because the Sudarium has no body image, researchers compare the orientation, spacing and flow direction of its stains with the Shroud's face."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="space-y-2">
            <ZoomImage src="/images/sudarium-shroud-overlay.jpg" alt="Shroud face, a superimposition, and a painted face" />
            <figcaption className="text-sm text-sand-200/60">
              How some researchers explore proportional correspondence. This is an illustration, not a
              forensic or pixel-level match.
            </figcaption>
          </figure>
          <figure className="space-y-2">
            <ZoomImage src="/images/suarium-provenance-map.jpg" alt="Diagram of the Sudarium's catalogued stain regions" />
            <figcaption className="text-sm text-sand-200/60">
              The Sudarium&apos;s stain regions as catalogued for comparative studies.
            </figcaption>
          </figure>
        </div>
        <DebateCard
          question="Is the match meaningful?"
          supporters={
            <p>
              Facial stains around the nose, mouth and beard correspond to regions of the Shroud&apos;s
              face. The similarities in flow direction and relative position are hard to put down to
              chance, especially when evaluated with 3D modelling.
              <Cite id="villalain" />
            </p>
          }
          skeptics={
            <p>
              Bloodstains are irregular, and visual alignment can be steered by which features are
              emphasised. Without objective statistical criteria, “correspondence” stays partly
              subjective and depends on how reference points are chosen.
            </p>
          }
        />
      </Station>

      <Station number={3} title="Following the trail">
        <DebateCard
          question="Does the Sudarium's history support an early date?"
          supporters={
            <p>
              The Sudarium is documented in Spain by at least the 9th century, and tradition traces it
              from Jerusalem through North Africa during early medieval upheavals. That independent,
              earlier history would predate the Shroud&apos;s 14th-century appearance.
              <Cite id="guscin" />
            </p>
          }
          skeptics={
            <p>
              Much of the early journey rests on later traditions rather than continuous records. Gaps
              make it hard to confirm that every reference describes the same object.
            </p>
          }
        />
        <DebateCard
          question="Do several matches add up to more than one?"
          supporters={
            <>
              <p>
                Nasal bleeding, mouth-area stains and asymmetric facial flows all appear compatible. A
                convergence of features is more suggestive than any single match.
              </p>
              <p>
                Some studies also report that stains on both cloths react as blood group AB, which is
                relatively uncommon. Similar AB findings have been reported for several Eucharistic
                miracle hosts, though those involve different materials and conditions.
              </p>
            </>
          }
          skeptics={
            <>
              <p>
                Focusing on compatible features risks confirmation bias, while non-matching or
                ambiguous areas get less attention. Without criteria set in advance, the overall
                significance stays open.
              </p>
              <p>
                Blood typing of very old, degraded samples is also unreliable and can produce false AB
                results.
              </p>
            </>
          }
        />
      </Station>
    </>
  );
}
