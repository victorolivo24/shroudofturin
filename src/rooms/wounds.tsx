"use client";

import { useState, useSyncExternalStore } from "react";
import { Station } from "@/components/exhibit/station";
import { Chip } from "@/components/exhibit/chip";
import { DebateCard } from "@/components/exhibit/debate-card";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Cite } from "@/components/shared/cite";

// Ids match the Cloth room's hotspots so its markers can link here via #id.
const wounds = [
  {
    id: "crown",
    label: "Scalp",
    image: "/images/crown-of-thorns-wound-diagram.jpg",
    observed:
      "Many puncture wounds across the scalp, with blood running in different directions. They cover the top and back of the head rather than forming one band.",
    history:
      "Roman soldiers are recorded mocking condemned prisoners, sometimes with improvised objects. A cap-like mass of thorns would fit that treatment.",
    meaning:
      "The pattern differs from the neat wreath of later religious art, suggesting a more irregular source of injury.",
  },
  {
    id: "scourge",
    label: "Back",
    image: "/images/roman-flagrum.jpg",
    observed:
      "Numerous small, paired marks spread across the shoulders, back and legs, the pattern of repeated blows from a multi-thonged instrument.",
    history:
      "Roman sources describe scourging as a common prelude to crucifixion, using a flagrum: a whip with weighted tips that leaves clustered wounds.",
    meaning: "The spread and repetition of the marks match historical descriptions of Roman scourging.",
  },
  {
    id: "wrist-nail",
    label: "Wrists",
    image: "/images/crucifixion-wrist-vs-palm-diagram.jpg",
    observed:
      "Blood flows from the wrist area, not the palm, and runs down the forearms as if the arms were raised at an angle.",
    history: (
      <>
        Experiments suggested a nail through the centre of the palm could not hold a hanging body,
        while one through the wrist, or angled through the base of the palm into the wrist, could.
        <Cite id="barbet" />
        <Cite id="zugibe" />
      </>
    ),
    meaning: "This placement clashes with most medieval art, which shows nails through the palms.",
  },
  {
    id: "side",
    label: "Side",
    image: "/images/shroud-blood-side-closeup.png",
    observed:
      "A large flow on the right side of the chest, mixing darker blood with a lighter, clearer fluid.",
    history:
      "The Gospel of John describes a soldier piercing Jesus's side after death, releasing “blood and water”. A spear thrust was one way to confirm death.",
    meaning:
      "Blood and serum separating fits a wound made after death. Skeptics note the detail could equally have been copied from the Gospel.",
  },
  {
    id: "feet",
    label: "Feet",
    image: "/images/jehohanan-heel-bone-nail.png",
    observed: "Bloodstains in the foot area of the back image show at least one puncture wound.",
    history: (
      <>
        In 1968 archaeologists found the remains of Jehohanan, a man crucified in 1st-century
        Jerusalem, with an iron nail still lodged in his heel bone.
        <Cite id="haas" />
      </>
    ),
    meaning: "The marks fit known variations in Roman technique and hint at how the body was positioned.",
  },
];

const artVsCloth = [
  { topic: "The nails", painting: "Driven through the palms.", shroud: "Wounds at the wrists." },
  {
    topic: "The crown",
    painting: "A woven wreath around the brow.",
    shroud: "Punctures across the whole scalp, more like a cap.",
  },
];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export function WoundsRoom() {
  // The selected wound lives in the URL hash, so Cloth room markers can link to /rooms/wounds#side.
  const hash = useSyncExternalStore(subscribeToHash, () => location.hash.slice(1), () => "");
  const wound = wounds.find((item) => item.id === hash) ?? wounds[0];
  const [revealed, setRevealed] = useState<string[]>([]);

  const select = (id: string) => {
    history.replaceState(null, "", `#${id}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <>
      <Station
        number={1}
        title="The case file"
        intro="Pick a wound. For each one, compare what is on the cloth with what we know about Roman executions."
      >
        <div className="flex flex-wrap gap-2">
          {wounds.map((item, index) => (
            <Chip key={item.id} active={item.id === wound.id} onClick={() => select(item.id)}>
              <span className="mr-1.5 font-mono text-xs text-sand-200/50">{index + 1}</span>
              {item.label}
            </Chip>
          ))}
        </div>
        <div
          key={wound.id}
          className="grid animate-[fade-in_.3s_ease-out] gap-6 rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
        >
          <ZoomImage src={wound.image} alt={`${wound.label} wound reference`} className="max-h-96 object-contain" />
          <dl className="space-y-5">
            {[
              ["On the Shroud", wound.observed],
              ["Roman practice", wound.history],
              ["Why it matters", wound.meaning],
            ].map(([term, detail]) => (
              <div key={term as string}>
                <dt className="text-xs uppercase tracking-[0.3em] text-accent-amber">{term}</dt>
                <dd className="mt-1 text-sand-200/85">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Station>

      <Station
        number={2}
        title="The artist vs. the cloth"
        intro="Grünewald's Isenheim Altarpiece (c. 1515) shows the crucifixion as medieval Europe imagined it. Guess what the Shroud shows before you reveal it."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <ZoomImage src="/images/medieval-painting-crucifixtion.jpg" alt="Grünewald's Isenheim Altarpiece crucifixion" />
          <ul className="space-y-4">
            {artVsCloth.map((row) => {
              const isRevealed = revealed.includes(row.topic);
              return (
                <li key={row.topic} className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5">
                  <p className="text-lg font-semibold text-sand-50">{row.topic}</p>
                  <p className="mt-2 text-sand-200/80">
                    <span className="text-sand-200/50">In the painting: </span>
                    {row.painting}
                  </p>
                  {isRevealed ? (
                    <p className="mt-2 animate-[fade-in_.3s_ease-out] text-accent-amber">
                      <span className="text-sand-200/50">On the Shroud: </span>
                      {row.shroud}
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRevealed([...revealed, row.topic])}
                      className="mt-3 rounded-full border border-accent-amber/50 px-4 py-1.5 text-sm font-semibold text-accent-amber transition hover:bg-accent-amber/10"
                    >
                      Reveal the Shroud
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Station>

      <Station number={3} title="Could a medieval forger have known?">
        <DebateCard
          question="Do the wounds show knowledge a 14th-century artist would not have had?"
          supporters={
            <p>
              The wrist wounds, cap-like scalp injuries and Roman-style scourge marks all depart from
              the art of the time. A forger working to match what believers expected would have put
              the nails in the palms.
            </p>
          }
          skeptics={
            <p>
              Accounts of executions and the Gospels were available to a knowledgeable creator, and
              anatomists still disagree about exact nail placement, so the “wrist” reading is itself
              debated. Matching Roman practice shows consistency, not proof of identity.
              <Cite id="zugibe" />
            </p>
          }
        />
      </Station>
    </>
  );
}
